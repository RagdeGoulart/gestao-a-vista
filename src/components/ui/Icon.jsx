const PATHS = {
  plus:         <><path d="M5 12h14M12 5v14"/></>,
  chevronDown:  <><path d="m6 9 6 6 6-6"/></>,
  x:            <><path d="M18 6 6 18M6 6l12 12"/></>,
  search:       <><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></>,
  folder:       <><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></>,
  folderPlus:   <><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/><path d="M12 10v6M9 13h6"/></>,
  trash:        <><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M10 11v6"/><path d="M14 11v6"/></>,
  eye:          <><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></>,
  refresh:      <><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/></>,
  check:        <><path d="M20 6 9 17l-5-5"/></>,
  edit:         <><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></>,
  info:         <><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></>,
}

export default function Icon({ name, size = 16, color = 'currentColor', style = {} }) {
  if (name === 'play') {
    return (
      <svg viewBox="0 0 24 24" fill={color} stroke="none"
        style={{ width: size, height: size, flexShrink: 0, ...style }}>
        <polygon points="6 3 20 12 6 21 6 3"/>
      </svg>
    )
  }
  if (name === 'moreVertical') {
    return (
      <svg viewBox="0 0 24 24" fill={color} stroke="none"
        style={{ width: size, height: size, flexShrink: 0, ...style }}>
        <circle cx="12" cy="5" r="1.6"/>
        <circle cx="12" cy="12" r="1.6"/>
        <circle cx="12" cy="19" r="1.6"/>
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round"
      style={{ width: size, height: size, flexShrink: 0, ...style }}>
      {PATHS[name]}
    </svg>
  )
}
