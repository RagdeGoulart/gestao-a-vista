import Icon from './ui/Icon'

const SPLIT_ITEMS = [
  { icon: 'folderPlus', label: 'Nova categoria',      action: 'newCat',  color: 'var(--gray-700)' },
  { icon: 'plus',       label: 'Adicionar dashboard', action: 'addDash', color: 'var(--gray-700)' },
]

const CAT_ITEMS = [
  { icon: 'folderPlus', label: 'Nova subcategoria',  action: 'newSub', color: 'var(--gray-700)' },
  { icon: 'edit',       label: 'Renomear',           action: 'rename', color: 'var(--gray-700)' },
  { icon: 'trash',      label: 'Excluir categoria',  action: 'delete', color: 'var(--destructive)' },
]

export default function ContextMenu({ menu, onClose, onAction }) {
  const items = menu.type === 'split' ? SPLIT_ITEMS : CAT_ITEMS

  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 900 }}>
      <div
        onClick={e => e.stopPropagation()}
        style={{
          position: 'fixed',
          left: menu.x + 'px',
          top: menu.y + 'px',
          width: 212,
          background: 'var(--popover)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-lg)',
          padding: 5,
          zIndex: 901,
        }}
      >
        {items.map(item => (
          <button
            key={item.action}
            className="menu-item"
            onClick={() => { onAction(item.action, menu.nodeId); onClose() }}
            style={{ color: item.color }}
          >
            <Icon name={item.icon} size={16} color={item.color} />
            {item.label}
          </button>
        ))}
      </div>
    </div>
  )
}
