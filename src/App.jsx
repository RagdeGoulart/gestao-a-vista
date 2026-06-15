import { useState, useEffect, useRef, useCallback } from 'react'
import AppHeader from './components/AppHeader'
import Sidebar from './components/Sidebar'
import DashView from './components/DashView'
import AddModal from './components/AddModal'
import ConfigModal from './components/ConfigModal'
import PlayMode from './components/PlayMode'
import VisualizeMode from './components/VisualizeMode'
import ContextMenu from './components/ContextMenu'
import Button from './components/ui/Button'
import Icon from './components/ui/Icon'
import { INITIAL_TREE, STATIC_LEAF_META } from './constants'
import { cloneTree, findNode, removeFrom, leavesOf, findLeaf, allLeaves, intervalMs } from './treeUtils'

const INITIAL_STATE = {
  modal: null,            // null | 'add' | 'config'
  menu: null,             // null | { type, nodeId, x, y }
  editingId: null,
  editingValue: '',
  targetCatId: null,
  activeLeaf: null,
  connector: 'Metabase',
  connMenuOpen: false,
  newName: '',
  newCat: 'Vendas',
  selOrder: ['funil', 'canais', 'agendas'],   // selected leaf ids, in selection order
  collapsed: {},
  intervalNum: 30,
  intervalUnit: 'Segundos',
  fade: true,
  loop: true,
  tree: INITIAL_TREE,
  leafMeta: {},           // { [id]: { type, conn } } — for user-added dashboards
  viewing: false,
  playing: false,
  playlist: [],
  playCurrent: 0,
  playElapsed: 0,
  playOpacity: 1,
  paused: false,
  transitioning: false,
}

export default function App() {
  const [s, setS] = useState(INITIAL_STATE)
  const sRef = useRef(s)
  sRef.current = s

  const set = useCallback(patch => {
    setS(prev => ({ ...prev, ...(typeof patch === 'function' ? patch(prev) : patch) }))
  }, [])

  // ─── Play tick ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const tick = setInterval(() => {
      const st = sRef.current
      if (!st.playing || st.paused || st.transitioning || st.playlist.length <= 1) return
      const ms = intervalMs(st)
      const el = st.playElapsed + 200
      if (el >= ms) beginTransition()
      else set({ playElapsed: el })
    }, 200)
    return () => clearInterval(tick)
  }, []) // eslint-disable-line

  // ─── Keyboard ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const onKey = e => {
      if (e.key !== 'Escape') return
      const st = sRef.current
      if (st.playing) exitPlay()
      else if (st.viewing) closeView()
      else if (st.menu) set({ menu: null })
      else if (st.modal) set({ modal: null, targetCatId: null })
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, []) // eslint-disable-line

  // ─── Play helpers ───────────────────────────────────────────────────────────
  const beginTransition = useCallback(() => {
    const st = sRef.current
    const delay = st.fade ? 450 : 0
    if (st.fade) set({ transitioning: true, playOpacity: 0 })
    else set({ transitioning: true })
    setTimeout(() => {
      set(prev => {
        const len = prev.playlist.length
        let next = prev.playCurrent + 1
        if (next >= len) {
          if (!prev.loop) return { transitioning: false, paused: true, playElapsed: intervalMs(prev), playOpacity: 1 }
          next = 0
        }
        return { playCurrent: next, playElapsed: 0, playOpacity: 1, transitioning: false }
      })
    }, delay)
  }, [set])

  const goTo = useCallback(i => {
    if (i === sRef.current.playCurrent) return
    const fade = sRef.current.fade
    if (fade) set({ transitioning: true, playOpacity: 0 })
    setTimeout(() => set({ playCurrent: i, playElapsed: 0, playOpacity: 1, transitioning: false }), fade ? 280 : 0)
  }, [set])

  const buildPlaylist = useCallback(st => {
    const meta = { ...STATIC_LEAF_META, ...st.leafMeta }
    const out = []
    st.selOrder.forEach(id => {
      const n = findLeaf(st.tree, id)
      if (!n) return                            // skip ids whose leaf was deleted
      const m = meta[id] || { type: 'comercial', conn: 'Metabase' }
      out.push({ id, label: n.label, title: n.label, type: m.type, subtitle: 'Workspace Comercial · ' + m.conn })
    })
    return out
  }, [])

  const startPlay = () => {
    const pl = buildPlaylist(sRef.current)
    if (pl.length === 0) return
    set({ playing: true, modal: null, playlist: pl, playCurrent: 0, playElapsed: 0, playOpacity: 1, paused: false, transitioning: false })
    try { document.documentElement.requestFullscreen?.().catch(() => {}) } catch (_) {}
  }

  const exitPlay = () => {
    set({ playing: false, paused: false })
    try { if (document.fullscreenElement) document.exitFullscreen() } catch (_) {}
  }

  const openView = () => {
    set({ viewing: true })
    try { document.documentElement.requestFullscreen?.().catch(() => {}) } catch (_) {}
  }

  const closeView = () => {
    set({ viewing: false })
    try { if (document.fullscreenElement) document.exitFullscreen() } catch (_) {}
  }

  // ─── Tree mutations ─────────────────────────────────────────────────────────
  const cloneT = () => cloneTree(sRef.current.tree)

  const toggleCollapse = id => set(prev => ({ collapsed: { ...prev.collapsed, [id]: !prev.collapsed[id] } }))

  const openMenu = (type, nodeId, e, alignRight = false) => {
    e.stopPropagation?.()
    const w = 212
    const r = e.currentTarget.getBoundingClientRect()
    const x = Math.max(8, alignRight ? r.right - w : r.left)
    const y = r.bottom + 6
    set({ menu: { type, nodeId, x, y } })
  }

  const handleMenuAction = (action, nodeId) => {
    if (action === 'newCat') {
      const id = 'cat' + Date.now()
      const tree = cloneT()
      tree.push({ id, label: 'Nova categoria', children: [] })
      set({ tree, menu: null, editingId: id, editingValue: 'Nova categoria' })
    } else if (action === 'addDash') {
      set({ modal: 'add', menu: null, targetCatId: null, newName: '', connector: 'Metabase' })
    } else if (action === 'newSub') {
      const id = 'cat' + Date.now()
      const tree = cloneT()
      const p = findNode(tree, nodeId)
      if (p) { p.children ??= []; p.children.push({ id, label: 'Nova subcategoria', children: [] }) }
      set(prev => ({ tree, menu: null, editingId: id, editingValue: 'Nova subcategoria', collapsed: { ...prev.collapsed, [nodeId]: false } }))
    } else if (action === 'rename') {
      const n = findNode(sRef.current.tree, nodeId)
      set({ menu: null, editingId: nodeId, editingValue: n?.label ?? '' })
    } else if (action === 'delete') {
      set(prev => {
        const tree = removeFrom(prev.tree, nodeId)
        return { tree, menu: null, selOrder: prev.selOrder.filter(id => findLeaf(tree, id)) }
      })
    }
  }

  const commitRename = () => {
    const id = sRef.current.editingId
    if (!id) return
    const val = (sRef.current.editingValue || '').trim() || 'Sem nome'
    const tree = cloneT()
    const n = findNode(tree, id)
    if (n) n.label = val
    set({ tree, editingId: null, editingValue: '' })
  }

  const addDashboard = () => {
    const st = sRef.current
    const name = (st.newName || '').trim()
    if (!name) { set({ modal: null, targetCatId: null }); return }
    const id = 'c' + Date.now()
    const tree = cloneT()
    let openId = null
    if (st.targetCatId) {
      const p = findNode(tree, st.targetCatId)
      if (p) { p.children ??= []; p.children.push({ id, label: name }); openId = p.id }
    } else {
      const catMap = { 'Marketing': 'marketing', 'Prospecção': 'prospec', 'Vendas': 'vendas' }
      const catId = catMap[st.newCat] || 'vendas'
      const cat = findNode(tree, catId) ?? tree[0]
      if (cat) { cat.children ??= []; cat.children.push({ id, label: name }); openId = cat.id }
    }
    set(prev => ({
      tree,
      leafMeta: { ...prev.leafMeta, [id]: { type: 'comercial', conn: st.connector } },
      modal: null, newName: '', targetCatId: null, activeLeaf: id,
      collapsed: openId ? { ...prev.collapsed, [openId]: false } : prev.collapsed,
    }))
  }

  // ─── Playlist selection (selOrder = selection order) ─────────────────────────
  const toggleCheck = id => set(prev => (
    prev.selOrder.includes(id)
      ? { selOrder: prev.selOrder.filter(x => x !== id) }   // deselect → others renumber
      : { selOrder: [...prev.selOrder, id] }                // select → appended last
  ))

  const toggleGroup = node => {
    const leaves = leavesOf(node)
    set(prev => {
      const allOn = leaves.length > 0 && leaves.every(id => prev.selOrder.includes(id))
      if (allOn) {
        const rm = new Set(leaves)
        return { selOrder: prev.selOrder.filter(id => !rm.has(id)) }
      }
      const toAdd = leaves.filter(id => !prev.selOrder.includes(id))   // tree order for the new ones
      return { selOrder: [...prev.selOrder, ...toAdd] }
    })
  }

  const selectAll = on => set(prev => {
    if (!on) return { selOrder: [] }
    const all = allLeaves(prev.tree)
    const have = new Set(prev.selOrder)
    const rest = all.filter(id => !have.has(id))                       // keep current order, append the rest
    return { selOrder: [...prev.selOrder.filter(id => all.includes(id)), ...rest] }
  })

  // ─── Derived values ──────────────────────────────────────────────────────────
  const meta = { ...STATIC_LEAF_META, ...s.leafMeta }

  let activeType = 'comercial'
  let activeTitle = 'Comercial · Visão Consolidada'
  let activeSubtitle = 'Workspace Comercial · consolidado de Junho 2025'
  if (s.activeLeaf) {
    const lf = findLeaf(s.tree, s.activeLeaf)
    const m = meta[s.activeLeaf] || { type: 'comercial', conn: 'Metabase' }
    if (lf) { activeType = m.type; activeTitle = lf.label; activeSubtitle = 'Workspace Comercial · ' + m.conn }
  }

  // Config rows for modal — order reflects the selection sequence (selOrder)
  const livePlaylist = buildPlaylist(s)
  const orderMap = {}
  livePlaylist.forEach((p, i) => { orderMap[p.id] = i + 1 })
  const sel = new Set(s.selOrder)

  const cfgRows = []
  const walkCfg = (nodes, level) => nodes.forEach(n => {
    const isFolder = Array.isArray(n.children)
    const checked = isFolder
      ? (() => { const lv = leavesOf(n); return lv.length > 0 && lv.every(id => sel.has(id)) })()
      : sel.has(n.id)
    cfgRows.push({
      label: n.label,
      pad: (2 + level * 18) + 'px',
      fw: level === 0 ? 700 : (isFolder ? 600 : 500),
      fg: level === 0 ? 'var(--gray-900)' : 'var(--gray-700)',
      checked,
      isFolder,
      order: !isFolder && checked ? orderMap[n.id] : null,
      onToggle: isFolder ? () => toggleGroup(n) : () => toggleCheck(n.id),
    })
    if (isFolder) walkCfg(n.children, level + 1)
  })
  walkCfg(s.tree, 0)

  const intervalLabel = s.intervalNum + ' ' + s.intervalUnit.toLowerCase()

  // Play dots
  const ms = intervalMs(s)
  const progress = (Math.min(s.playElapsed / ms, 1) * 100) + '%'
  const dots = s.playlist.map((_, i) => {
    const active = i === s.playCurrent
    return {
      w: active ? '40px' : '8px',
      bg: active ? 'var(--blue-100)' : 'var(--gray-300)',
      fill: active ? progress : '0%',
    }
  })

  // Sidebar tree handlers
  const treeHandlers = {
    onCollapse: toggleCollapse,
    onAddDash: (catId, e) => { e.stopPropagation(); set({ modal: 'add', menu: null, targetCatId: catId, newName: '', connector: 'Metabase' }) },
    onMenu: (nodeId, e) => openMenu('cat', nodeId, e, true),
    onSelect: id => set({ activeLeaf: id }),
    onDelete: id => set(prev => {
      const tree = removeFrom(prev.tree, id)
      return { tree, selOrder: prev.selOrder.filter(lid => findLeaf(tree, lid)), activeLeaf: prev.activeLeaf === id ? null : prev.activeLeaf }
    }),
    onEditInput: e => set({ editingValue: e.target.value }),
    onEditKey: e => { if (e.key === 'Enter') commitRename(); else if (e.key === 'Escape') set({ editingId: null, editingValue: '' }) },
    commitRename,
  }

  return (
    <div style={{ height: '100vh', width: '100%', fontFamily: 'var(--font-sans)', color: 'var(--foreground)', background: 'var(--gray-50)', overflow: 'hidden', position: 'relative' }}>

      {/* ─── HOME ──────────────────────────────────────────────────────────── */}
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <AppHeader onOpenConfig={() => set({ modal: 'config' })} />

        <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
          <Sidebar
            state={s}
            handlers={treeHandlers}
            onOpenAdd={() => set({ modal: 'add', menu: null, targetCatId: null, newName: '', connector: 'Metabase' })}
            onOpenAddMenu={e => openMenu('split', null, e, true)}
          />

          <main style={{ flex: 1, height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden', background: 'var(--gray-50)' }}>
            {/* Topbar */}
            <div style={{ height: 60, flex: 'none', display: 'flex', alignItems: 'center', gap: 10, padding: '0 20px', background: 'var(--background)', borderBottom: '1px solid var(--border)' }}>
              <Button variant="outline" onClick={openView}>
                <Icon name="eye" size={16} />
                Visualizar
              </Button>
              <span style={{ flex: 1 }} />
              <span style={{ fontSize: 13, color: 'var(--muted-foreground)' }}>Atualizado há 2 min</span>
              <button
                title="Atualizar"
                style={{ width: 36, height: 36, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', background: 'var(--background)', color: 'var(--gray-600)', cursor: 'pointer' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--background)' }}
              >
                <Icon name="refresh" size={16} />
              </button>
            </div>

            <div style={{ flex: 1, overflowY: 'auto' }}>
              <DashView type={activeType} title={activeTitle} subtitle={activeSubtitle} />
            </div>
          </main>
        </div>
      </div>

      {/* ─── CONTEXT MENU ──────────────────────────────────────────────────── */}
      {s.menu && (
        <ContextMenu
          menu={s.menu}
          onClose={() => set({ menu: null })}
          onAction={handleMenuAction}
        />
      )}

      {/* ─── ADD MODAL ─────────────────────────────────────────────────────── */}
      {s.modal === 'add' && (
        <AddModal
          state={s}
          onClose={() => set({ modal: null, targetCatId: null, connMenuOpen: false })}
          onAdd={addDashboard}
          onName={e => set({ newName: e.target.value })}
          onCat={e => set({ newCat: e.target.value })}
          toggleConnMenu={() => set(prev => ({ connMenuOpen: !prev.connMenuOpen }))}
          onPickConnector={c => set({ connector: c, connMenuOpen: false })}
        />
      )}

      {/* ─── CONFIG MODAL ──────────────────────────────────────────────────── */}
      {s.modal === 'config' && (
        <ConfigModal
          state={s}
          cfgRows={cfgRows}
          intervalLabel={intervalLabel}
          selCount={livePlaylist.length}
          onClose={() => set({ modal: null })}
          onStartPlay={startPlay}
          onSelectAll={() => selectAll(true)}
          onClearAll={() => selectAll(false)}
          onIntervalNum={e => set({ intervalNum: Math.max(1, parseInt(e.target.value || '1', 10) || 1) })}
          onIntervalUnit={e => set({ intervalUnit: e.target.value })}
          onFade={v => set({ fade: v })}
          onLoop={v => set({ loop: v })}
          onPreset={(num, unit) => set({ intervalNum: num, intervalUnit: unit })}
        />
      )}

      {/* ─── PLAY MODE ─────────────────────────────────────────────────────── */}
      {s.playing && (
        <PlayMode
          playlist={s.playlist}
          playCurrent={s.playCurrent}
          playOpacity={s.playOpacity}
          fade={s.fade}
          dots={dots}
          onGoTo={goTo}
          onExit={exitPlay}
        />
      )}

      {/* ─── VISUALIZE MODE ────────────────────────────────────────────────── */}
      {s.viewing && (
        <VisualizeMode
          activeType={activeType}
          activeTitle={activeTitle}
          activeSubtitle={activeSubtitle}
          onClose={closeView}
        />
      )}
    </div>
  )
}
