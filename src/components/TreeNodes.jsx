import Icon from './ui/Icon'
import { CONNECTOR_ICONS, STATIC_LEAF_META } from '../constants'

function CategoryRow({ node, level, collapsed, editing, editingValue, menuHere, onCollapse, onAddDash, onMenu, onEditInput, onEditKey, commitRename }) {
  const pad = 8 + level * 16

  return (
    <div
      className="sidebar-cat"
      onClick={onCollapse}
      style={{
        display: 'flex', alignItems: 'center', gap: 6,
        paddingTop: 7, paddingBottom: 7, paddingRight: 6, paddingLeft: pad,
        borderRadius: 8, cursor: 'pointer', position: 'relative',
        background: menuHere ? 'var(--gray-100)' : 'transparent',
      }}
    >
      <Icon
        name="chevronDown"
        size={13}
        color="var(--gray-400)"
        style={{ transform: collapsed ? 'rotate(-90deg)' : 'rotate(0deg)', transition: 'transform .15s', flex: 'none' }}
      />
      <Icon name="folder" size={16} color="var(--blue-500)" style={{ flex: 'none' }} />

      {editing ? (
        <input
          value={editingValue}
          autoFocus
          onClick={e => e.stopPropagation()}
          onChange={onEditInput}
          onKeyDown={onEditKey}
          onBlur={commitRename}
          style={{
            flex: 1, minWidth: 0, height: 26, border: '1px solid var(--blue-500)',
            borderRadius: 6, fontFamily: 'var(--font-sans)', fontSize: 14,
            color: 'var(--foreground)', padding: '0 7px', outline: 'none',
            boxShadow: '0 0 0 3px color-mix(in oklch,var(--ring) 22%,transparent)',
          }}
        />
      ) : (
        <span style={{
          fontSize: 14, fontWeight: level === 0 ? 600 : 500, color: 'var(--gray-900)',
          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', flex: 1,
        }}>
          {node.label}
        </span>
      )}

      <span style={{ flex: 1 }} />

      <div
        className="cat-actions"
        style={{
          display: 'flex', alignItems: 'center', gap: 1,
          opacity: menuHere ? 1 : 0, transition: 'opacity .12s ease',
        }}
      >
        <button
          onClick={e => { e.stopPropagation(); onAddDash(e) }}
          title="Adicionar dashboard aqui"
          className="icon-btn"
          style={{ width: 24, height: 24 }}
        >
          <Icon name="plus" size={15} />
        </button>
        <button
          onClick={e => { e.stopPropagation(); onMenu(e) }}
          title="Opções da categoria"
          className="icon-btn"
          style={{ width: 24, height: 24 }}
        >
          <Icon name="moreVertical" size={16} />
        </button>
      </div>
    </div>
  )
}

function LeafRow({ node, level, active, leafMeta, onSelect, onDelete }) {
  const pad = 8 + level * 16 + 3
  const meta = leafMeta[node.id] || STATIC_LEAF_META[node.id] || { conn: 'Metabase' }
  const icon = CONNECTOR_ICONS[meta.conn] || CONNECTOR_ICONS['Metabase']

  return (
    <div
      className="sidebar-leaf"
      onClick={onSelect}
      style={{
        display: 'flex', alignItems: 'center', gap: 9,
        paddingTop: 7, paddingBottom: 7, paddingRight: 6, paddingLeft: pad,
        borderRadius: 8, cursor: 'pointer',
        background: active ? 'var(--blue-50)' : 'transparent',
      }}
    >
      <img src={icon} alt="" style={{ width: 16, height: 16, flex: 'none', objectFit: 'contain', borderRadius: 3 }} />
      <span style={{
        flex: 1, fontSize: 14, fontWeight: active ? 600 : 500,
        color: active ? 'var(--blue-700)' : 'var(--gray-700)',
        whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
      }}>
        {node.label}
      </span>
      <button
        onClick={e => { e.stopPropagation(); onDelete() }}
        title="Excluir dashboard"
        className="leaf-del"
        style={{
          width: 24, height: 24, flex: 'none', display: 'inline-flex', alignItems: 'center',
          justifyContent: 'center', border: 'none', background: 'transparent',
          color: 'var(--gray-400)', borderRadius: 6, cursor: 'pointer',
          opacity: 0, transition: 'opacity .12s ease, background .12s ease, color .12s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = 'var(--destructive)'
          e.currentTarget.style.color = '#fff'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'transparent'
          e.currentTarget.style.color = 'var(--gray-400)'
        }}
      >
        <Icon name="trash" size={14} />
      </button>
    </div>
  )
}

export default function TreeNodes({ nodes, level = 0, state, handlers }) {
  const { collapsed, editingId, editingValue, menu, activeLeaf, leafMeta } = state
  const { onCollapse, onAddDash, onMenu, onSelect, onDelete, onEditInput, onEditKey, commitRename } = handlers

  return nodes.map(node => {
    if (Array.isArray(node.children)) {
      const isCollapsed = !!collapsed[node.id]
      const editing = editingId === node.id
      const menuHere = menu?.type === 'cat' && menu?.nodeId === node.id

      return (
        <div key={node.id}>
          <CategoryRow
            node={node}
            level={level}
            collapsed={isCollapsed}
            editing={editing}
            editingValue={editingValue}
            menuHere={menuHere}
            onCollapse={() => onCollapse(node.id)}
            onAddDash={e => onAddDash(node.id, e)}
            onMenu={e => onMenu(node.id, e)}
            onEditInput={onEditInput}
            onEditKey={onEditKey}
            commitRename={commitRename}
          />
          {!isCollapsed && (
            <TreeNodes
              nodes={node.children}
              level={level + 1}
              state={state}
              handlers={handlers}
            />
          )}
        </div>
      )
    }

    return (
      <LeafRow
        key={node.id}
        node={node}
        level={level}
        active={activeLeaf === node.id}
        leafMeta={leafMeta}
        onSelect={() => onSelect(node.id)}
        onDelete={() => onDelete(node.id)}
      />
    )
  })
}
