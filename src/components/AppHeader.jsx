import Button from './ui/Button'
import Icon from './ui/Icon'

const DocnixLogo = () => (
  <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ width: 21, height: 21 }}>
    <path d="M11.2151 3.47949V7.78541C11.2151 9.70782 9.66494 11.2649 7.75103 11.2649H3.46412C1.55021 11.2649 0 9.70782 0 7.78541V3.47949C0 1.55708 1.55021 0 3.46412 0H7.75103C7.89888 0 8.04599 0.00965287 8.18718 0.0297011L6.60075 1.62317H3.46412C3.06123 1.62317 2.68052 1.75162 2.36264 1.98849C2.29019 2.04121 2.22144 2.10061 2.15639 2.16596C2.0906 2.23204 2.0322 2.3011 1.97971 2.37312C1.74389 2.69241 1.616 3.07778 1.616 3.47949V7.78541C1.616 8.28216 1.80968 8.74996 2.15713 9.09895C2.50753 9.4509 2.96956 9.64248 3.46486 9.64248H7.75177C8.24632 9.64248 8.71205 9.45165 9.0595 9.09895C9.4099 8.74996 9.60063 8.28291 9.60063 7.78541V4.62818L11.1871 3.03471C11.207 3.17951 11.2166 3.32801 11.2166 3.47875L11.2151 3.47949Z" fill="#fff"/>
    <path d="M10.3521 9.1975L9.20996 10.3447L10.8581 12.0002L12.0003 10.853L10.3521 9.1975Z" fill="#fff"/>
    <path d="M10.7026 1.65793L9.49758 2.86825L5.60248 6.78063L2.64844 3.81349L3.79058 2.66628L5.60248 4.48622L8.35248 1.72401L9.55894 0.512207C10.0239 0.798081 10.4165 1.19162 10.7026 1.65793Z" fill="#fff"/>
  </svg>
)

export default function AppHeader({ onOpenConfig }) {
  return (
    <header style={{
      height: 64, flex: 'none', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', padding: '0 20px',
      background: 'var(--background)', borderBottom: '1px solid var(--border)', zIndex: 20,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 38, height: 38, borderRadius: 10, background: 'var(--primary)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          flex: 'none', boxShadow: 'var(--shadow-sm)',
        }}>
          <DocnixLogo />
        </div>
        <span style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--gray-900)' }}>
          Docnix Workspace
        </span>
        <button
          style={{
            width: 28, height: 28, display: 'inline-flex', alignItems: 'center',
            justifyContent: 'center', border: 'none', background: 'transparent',
            color: 'var(--gray-500)', borderRadius: 'var(--radius-md)', cursor: 'pointer',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
        >
          <Icon name="chevronDown" size={16} />
        </button>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <Button onClick={onOpenConfig}>
          <Icon name="play" size={14} color="#fff" />
          Iniciar apresentação
        </Button>
        <div style={{ width: 1, height: 28, background: 'var(--border)' }} />
        <div style={{
          width: 38, height: 38, borderRadius: 999, background: 'var(--blue-100)',
          color: 'var(--blue-700)', display: 'inline-flex', alignItems: 'center',
          justifyContent: 'center', fontSize: 14, fontWeight: 600, flex: 'none',
          border: '1px solid var(--blue-100)', cursor: 'pointer',
        }}>
          RA
        </div>
      </div>
    </header>
  )
}
