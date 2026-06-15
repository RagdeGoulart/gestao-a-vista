import Icon from './ui/Icon'
import TreeNodes from './TreeNodes'

export default function Sidebar({ state, handlers, onOpenAdd, onOpenAddMenu }) {
  return (
    <aside style={{
      width: 280, flex: 'none', height: '100%',
      background: 'var(--background)', borderRight: '1px solid var(--border)',
      display: 'flex', flexDirection: 'column',
    }}>
      <div style={{ padding: '16px 16px 12px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {/* Search */}
        <div style={{ position: 'relative' }}>
          <Icon
            name="search"
            size={16}
            color="var(--muted-foreground)"
            style={{ position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}
          />
          <input
            placeholder="Buscar por dashboards…"
            className="prizm-input"
            style={{ width: '100%', paddingLeft: 34 }}
          />
        </div>

        {/* Split add button */}
        <div style={{
          display: 'flex', width: '100%', borderRadius: 'var(--radius-md)',
          boxShadow: 'var(--shadow-xs)', overflow: 'hidden',
        }}>
          <button
            onClick={onOpenAdd}
            style={{
              flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              gap: 8, height: 38, border: 'none', background: 'var(--primary)', color: '#fff',
              fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 500, cursor: 'pointer',
              padding: '0 12px',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--blue-700)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--primary)' }}
          >
            <Icon name="plus" size={16} color="#fff" />
            Adicionar dashboard
          </button>
          <button
            onClick={onOpenAddMenu}
            title="Mais opções"
            style={{
              width: 36, flex: 'none', display: 'inline-flex', alignItems: 'center',
              justifyContent: 'center', border: 'none',
              borderLeft: '1px solid rgba(255,255,255,.22)',
              background: 'var(--primary)', color: '#fff', cursor: 'pointer',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--blue-700)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--primary)' }}
          >
            <Icon name="chevronDown" size={16} color="#fff" />
          </button>
        </div>
      </div>

      {/* Tree */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '4px 10px 14px' }}>
        <TreeNodes
          nodes={state.tree}
          level={0}
          state={state}
          handlers={handlers}
        />
      </div>
    </aside>
  )
}
