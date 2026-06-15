import Button from './ui/Button'
import Icon from './ui/Icon'
import PrizmSwitch from './ui/PrizmSwitch'
import PrizmCheckbox from './ui/PrizmCheckbox'
import { PRESET_DEFS } from '../constants'

function OrderBadge({ n, onClick }) {
  return (
    <div
      onClick={onClick}
      title={'Posição ' + n + ' na exibição'}
      style={{
        width: 22, height: 22, flex: 'none', borderRadius: 6,
        background: 'var(--primary)', color: '#fff',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 11, fontWeight: 700, lineHeight: 1, cursor: 'pointer',
        transition: 'all .15s',
      }}
    >
      {n}<span style={{ fontSize: 8, alignSelf: 'flex-start', marginTop: 3 }}>º</span>
    </div>
  )
}

export default function ConfigModal({
  state, cfgRows, intervalLabel, selCount,
  onClose, onStartPlay,
  onSelectAll, onClearAll,
  onIntervalNum, onIntervalUnit,
  onFade, onLoop,
  onPreset,
}) {
  const { intervalNum, intervalUnit, fade, loop } = state
  const unitOptions = ['Segundos', 'Minutos', 'Horas']

  const presets = PRESET_DEFS.map(([label, num, unit]) => {
    const active = intervalNum === num && intervalUnit === unit
    return { label, active, num, unit }
  })

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 600,
        background: 'color-mix(in oklch,var(--gray-950) 45%,transparent)',
        backdropFilter: 'blur(3px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 8,
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: 904, maxWidth: '94vw', height: 773, maxHeight: '90vh',
          display: 'flex', flexDirection: 'column',
          background: 'var(--card)', border: '1px solid var(--border)',
          borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', overflow: 'hidden',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, padding: 16, borderBottom: '1px solid var(--border)', flex: 'none' }}>
          <div>
            <div style={{ fontSize: 19, fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--gray-900)' }}>Configurar apresentação</div>
            <div style={{ fontSize: 13, color: 'var(--muted-foreground)', marginTop: 3 }}>Selecione a ordem dos dashboards e o tempo de exibição.</div>
          </div>
          <button onClick={onClose} className="icon-btn" style={{ width: 30, height: 30, flex: 'none' }}>
            <Icon name="x" size={18} />
          </button>
        </div>

        {/* Body */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', flex: 1, minHeight: 0 }}>
          {/* Playlist */}
          <div style={{ display: 'flex', flexDirection: 'column', borderRight: '1px solid var(--border)', minHeight: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 22px 8px', flex: 'none' }}>
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--gray-700)' }}>
                Dashboards na exibição
              </span>
              <div style={{ display: 'flex', gap: 12 }}>
                <button
                  onClick={onSelectAll}
                  style={{ border: 'none', background: 'transparent', color: 'var(--blue-600)', fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600, cursor: 'pointer', padding: 0 }}
                  onMouseEnter={e => { e.currentTarget.style.textDecoration = 'underline' }}
                  onMouseLeave={e => { e.currentTarget.style.textDecoration = 'none' }}
                >
                  Todos
                </button>
                <button
                  onClick={onClearAll}
                  style={{ border: 'none', background: 'transparent', color: 'var(--muted-foreground)', fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600, cursor: 'pointer', padding: 0 }}
                  onMouseEnter={e => { e.currentTarget.style.textDecoration = 'underline' }}
                  onMouseLeave={e => { e.currentTarget.style.textDecoration = 'none' }}
                >
                  Limpar
                </button>
              </div>
            </div>
            <div style={{ flex: 1, overflowY: 'auto', padding: '4px 14px 14px' }}>
              {cfgRows.map((row, i) => (
                <div
                  key={i}
                  onClick={row.onToggle}
                  style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '7px 8px', paddingLeft: row.pad, borderRadius: 8, cursor: 'pointer' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--gray-100)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
                >
                  <div style={{ width: 22, flex: 'none', display: 'flex', justifyContent: 'center' }}>
                    {row.order != null
                      ? <OrderBadge n={row.order} onClick={row.onToggle} />
                      : <PrizmCheckbox checked={row.checked} onClick={row.onToggle} />}
                  </div>
                  <span style={{ fontSize: 14, fontWeight: row.fw, color: row.fg }}>{row.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Settings */}
          <div style={{ padding: 16, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--gray-700)' }}>
              Tempo por dashboard
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 4 }}>
              {presets.map(p => (
                <button
                  key={p.label}
                  onClick={() => onPreset(p.num, p.unit)}
                  style={{
                    height: 34, padding: '0 14px', borderRadius: 'var(--radius-md)',
                    border: '1px solid ' + (p.active ? 'var(--primary)' : 'var(--border)'),
                    background: p.active ? 'var(--primary)' : 'var(--background)',
                    color: p.active ? '#fff' : 'var(--gray-700)',
                    fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, cursor: 'pointer', transition: 'all .14s',
                  }}
                >
                  {p.label}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10, marginTop: 14 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, width: 96, flex: 'none' }}>
                <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--gray-700)' }}>Personalizado</label>
                <input
                  className="prizm-input"
                  type="number"
                  value={intervalNum}
                  onChange={onIntervalNum}
                  style={{ width: 96 }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <select className="prizm-select" style={{ width: '100%' }} value={intervalUnit} onChange={onIntervalUnit}>
                  {unitOptions.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
            </div>

            <div style={{ fontSize: 13, color: 'var(--muted-foreground)', marginTop: 6 }}>
              Cada dashboard fica <span style={{ color: 'var(--gray-900)', fontWeight: 600 }}>{intervalLabel}</span> em exibição.
            </div>

            <div style={{ height: 1, background: 'var(--border)', margin: '14px 0' }} />

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--foreground)' }}>Transição suave (fade)</div>
                <div style={{ fontSize: 12, color: 'var(--muted-foreground)' }}>Evita cortes bruscos na troca de telas.</div>
              </div>
              <PrizmSwitch checked={fade} onChange={onFade} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--foreground)' }}>Repetir em loop</div>
                <div style={{ fontSize: 12, color: 'var(--muted-foreground)' }}>Reinicia a sequência ao terminar.</div>
              </div>
              <PrizmSwitch checked={loop} onChange={onLoop} />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, padding: '8px 16px', borderTop: '1px solid var(--border)', background: 'var(--gray-50)', flex: 'none' }}>
          <span style={{ fontSize: 13, color: 'var(--muted-foreground)' }}>
            <span style={{ color: 'var(--gray-900)', fontWeight: 600 }}>{selCount}</span> dashboards · troca a cada{' '}
            <span style={{ color: 'var(--gray-900)', fontWeight: 600 }}>{intervalLabel}</span>
          </span>
          <div style={{ display: 'flex', gap: 16 }}>
            <Button variant="outline" onClick={onClose} style={{ width: 92 }}>Cancelar</Button>
            <Button onClick={onStartPlay} style={{ width: 150 }}>
              <Icon name="play" size={14} color="#fff" />
              Iniciar exibição
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
