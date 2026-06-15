import Button from './ui/Button'
import Icon from './ui/Icon'
import { CONNECTORS, CONNECTOR_ICONS, CONNECTOR_FIELDS } from '../constants'
import { findNode } from '../treeUtils'

export default function AddModal({ state, onClose, onAdd, onName, onCat, toggleConnMenu, onPickConnector }) {
  const { connector, connMenuOpen, newName, newCat, targetCatId, tree } = state
  const fields = CONNECTOR_FIELDS[connector] || []
  const targetNode = targetCatId ? findNode(tree, targetCatId) : null
  const catOptions = ['Marketing', 'Prospecção', 'Vendas']

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 600,
        background: 'color-mix(in oklch,var(--gray-950) 45%,transparent)',
        backdropFilter: 'blur(3px)',
        display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 16,
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: 540, maxWidth: '94vw', maxHeight: '90vh', overflowY: 'auto',
          background: 'var(--card)', border: '1px solid var(--border)',
          borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, padding: 16, borderBottom: '1px solid var(--border)' }}>
          <div>
            <div style={{ fontSize: 19, fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--gray-900)' }}>Adicionar dashboard</div>
            <div style={{ fontSize: 13, color: 'var(--muted-foreground)', marginTop: 3 }}>Conecte um painel de uma ferramenta externa.</div>
          </div>
          <button
            onClick={onClose}
            className="icon-btn"
            style={{ width: 30, height: 30, flex: 'none' }}
          >
            <Icon name="x" size={18} />
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            <label style={{ fontSize: 14, fontWeight: 500, color: 'var(--foreground)' }}>Nome do dashboard</label>
            <input
              className="prizm-input"
              style={{ width: '100%' }}
              value={newName}
              onChange={onName}
              placeholder="Ex: Funil de Vendas — Q3"
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {/* Connector picker */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7, position: 'relative' }}>
              <label style={{ fontSize: 14, fontWeight: 500, color: 'var(--foreground)' }}>Conector</label>
              <button
                onClick={toggleConnMenu}
                type="button"
                style={{
                  display: 'flex', alignItems: 'center', gap: 9, height: 36, padding: '0 10px',
                  border: '1px solid var(--border)', background: 'var(--background)',
                  borderRadius: 'var(--radius-md)', cursor: 'pointer',
                  fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--foreground)',
                  boxShadow: 'var(--shadow-2xs)', width: '100%',
                }}
              >
                <img src={CONNECTOR_ICONS[connector]} alt="" style={{ width: 16, height: 16, flex: 'none', objectFit: 'contain', borderRadius: 3 }} />
                <span style={{ flex: 1, textAlign: 'left' }}>{connector}</span>
                <Icon name="chevronDown" size={15} color="var(--muted-foreground)" />
              </button>

              {connMenuOpen && (
                <div style={{
                  position: 'absolute', top: '100%', left: 0, right: 0, marginTop: 5,
                  zIndex: 50, background: 'var(--popover)', border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)', padding: 4,
                  display: 'flex', flexDirection: 'column', gap: 1,
                }}>
                  {CONNECTORS.map(c => {
                    const selected = connector === c
                    return (
                      <button
                        key={c}
                        onClick={() => onPickConnector(c)}
                        type="button"
                        style={{
                          display: 'flex', alignItems: 'center', gap: 9, padding: '8px 9px',
                          border: 'none', background: selected ? 'var(--blue-50)' : 'transparent',
                          borderRadius: 6, cursor: 'pointer', fontFamily: 'var(--font-sans)',
                          fontSize: 14, color: selected ? 'var(--blue-700)' : 'var(--foreground)',
                          fontWeight: selected ? 600 : 500, textAlign: 'left',
                        }}
                        onMouseEnter={e => { if (!selected) e.currentTarget.style.background = 'var(--accent)' }}
                        onMouseLeave={e => { e.currentTarget.style.background = selected ? 'var(--blue-50)' : 'transparent' }}
                      >
                        <img src={CONNECTOR_ICONS[c]} alt="" style={{ width: 16, height: 16, flex: 'none', objectFit: 'contain', borderRadius: 3 }} />
                        <span style={{ flex: 1 }}>{c}</span>
                        {selected && <Icon name="check" size={15} color="var(--blue-600)" />}
                      </button>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Category */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
              <label style={{ fontSize: 14, fontWeight: 500, color: 'var(--foreground)' }}>Categoria</label>
              {!targetCatId ? (
                <select className="prizm-select" style={{ width: '100%' }} value={newCat} onChange={onCat}>
                  {catOptions.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              ) : (
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 8, height: 36, padding: '0 12px',
                  border: '1px solid var(--border)', borderRadius: 'var(--radius-md)',
                  background: 'var(--gray-50)', fontSize: 14, color: 'var(--gray-700)',
                }}>
                  <Icon name="folder" size={15} color="var(--blue-500)" />
                  <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {targetNode?.label ?? ''}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Connector-specific fields */}
          <div style={{ background: 'var(--gray-50)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '16px 18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <Icon name="info" size={15} color="var(--blue-600)" />
              <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--gray-700)' }}>
                Campos do conector <span style={{ color: 'var(--blue-700)' }}>{connector}</span>
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
              {fields.map((f, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--gray-700)' }}>{f.label}</label>
                  <input className="prizm-input" style={{ width: '100%' }} type={f.type} placeholder={f.ph} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '8px 16px', borderTop: '1px solid var(--border)' }}>
          <Button variant="outline" onClick={onClose} style={{ width: 92 }}>Cancelar</Button>
          <Button onClick={onAdd} style={{ width: 170 }}>Adicionar dashboard</Button>
        </div>
      </div>
    </div>
  )
}
