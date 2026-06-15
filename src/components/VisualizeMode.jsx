import DashView from './DashView'

export default function VisualizeMode({ activeType, activeTitle, activeSubtitle, onClose }) {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 800, background: 'var(--gray-50)', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'stretch', justifyContent: 'center',
        padding: '20px 40px 40px', overflow: 'hidden',
      }}>
        <div style={{ width: '100%', maxWidth: 1840, display: 'flex', flexDirection: 'column' }}>
          <DashView
            type={activeType}
            title={activeTitle}
            subtitle={activeSubtitle}
            fill
            showStop
            onStop={onClose}
            stopLabel="Fechar"
          />
        </div>
      </div>
    </div>
  )
}
