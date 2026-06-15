export default function Button({
  variant = 'default',
  onClick,
  children,
  style,
  type = 'button',
  disabled = false,
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
    height: 36,
    padding: '0 14px',
    borderRadius: 'var(--radius-md)',
    fontSize: 14,
    fontWeight: 500,
    fontFamily: 'var(--font-sans)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    whiteSpace: 'nowrap',
    transition: 'background 0.15s, border-color 0.15s',
    opacity: disabled ? 0.5 : 1,
    ...style,
  }

  if (variant === 'outline') {
    return (
      <button type={type} onClick={onClick} disabled={disabled}
        style={{ ...base, background: 'var(--background)', color: 'var(--foreground)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-xs)' }}
        onMouseEnter={e => { if (!disabled) e.currentTarget.style.background = 'var(--accent)' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'var(--background)' }}>
        {children}
      </button>
    )
  }
  if (variant === 'ghost') {
    return (
      <button type={type} onClick={onClick} disabled={disabled}
        style={{ ...base, background: 'transparent', color: 'var(--foreground)', border: 'none' }}
        onMouseEnter={e => { if (!disabled) e.currentTarget.style.background = 'var(--accent)' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}>
        {children}
      </button>
    )
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled}
      style={{ ...base, background: 'var(--primary)', color: '#fff', border: 'none', boxShadow: 'var(--shadow-xs)' }}
      onMouseEnter={e => { if (!disabled) e.currentTarget.style.background = 'var(--blue-700)' }}
      onMouseLeave={e => { e.currentTarget.style.background = 'var(--primary)' }}>
      {children}
    </button>
  )
}
