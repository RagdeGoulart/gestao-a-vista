import DashView from './DashView'

export default function PlayMode({ playlist, playCurrent, playOpacity, fade, dots, onGoTo, onExit }) {
  const cur = playlist[playCurrent] || { type: 'comercial', title: '', subtitle: '' }

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 800, background: 'var(--gray-50)', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        padding: '20px 40px 56px', overflow: 'hidden',
      }}>
        <div style={{
          width: '100%', maxWidth: 1840, flex: 1, minHeight: 0,
          display: 'flex', flexDirection: 'column',
          opacity: playOpacity,
          transition: fade ? 'opacity .45s ease' : 'none',
        }}>
          <DashView
            type={cur.type}
            title={cur.title || cur.label}
            subtitle={cur.subtitle}
            fill
            showStop
            onStop={onExit}
            stopLabel="Parar"
          />
        </div>
      </div>

      {/* Dots indicator */}
      <div style={{
        position: 'absolute', bottom: 22, left: 0, right: 0, zIndex: 30,
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9,
      }}>
        {dots.map((d, i) => (
          <button
            key={i}
            onClick={() => onGoTo(i)}
            title="Ir para este dashboard"
            style={{
              position: 'relative', height: 8, width: d.w,
              borderRadius: 999, border: 'none', background: d.bg,
              cursor: 'pointer', padding: 0, overflow: 'hidden',
              transition: 'width .3s ease, background .3s ease',
            }}
          >
            <span style={{
              position: 'absolute', top: 0, left: 0, bottom: 0,
              width: d.fill, background: 'var(--blue-600)',
              borderRadius: 999, transition: 'width .2s linear',
            }} />
          </button>
        ))}
      </div>
    </div>
  )
}
