const styles = [
  { key: 'square', label: 'Square' },
  { key: 'rounded', label: 'Rounded' },
  { key: 'dots', label: 'Dots' },
  { key: 'classy', label: 'Classy' },
  { key: 'classy-rounded', label: 'Classy Rounded' },
  { key: 'extra-rounded', label: 'Extra Rounded' },
]

function StyleSelector({ selectedStyle, onStyleChange }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-400 mb-2">
        Style
      </label>
      <div className="grid grid-cols-6 gap-2">
        {styles.map((style) => (
          <button
            key={style.key}
            onClick={() => onStyleChange(style.key)}
            title={style.label}
            className={`
              py-2 px-1 rounded-lg
              transition-all duration-200 flex items-center justify-center
              bg-white border border-white/10
              ${selectedStyle === style.key
                ? 'ring-2 ring-primary ring-offset-2 ring-offset-background'
                : 'hover:scale-105'
              }
            `}
          >
            <StyleIcon type={style.key} />
          </button>
        ))}
      </div>
    </div>
  )
}

function StyleIcon({ type }) {
  const iconSize = 24

  switch (type) {
    case 'square':
      return (
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="6" height="6" fill="#000" />
          <rect x="9" y="2" width="6" height="6" fill="#000" />
          <rect x="16" y="2" width="6" height="6" fill="#000" />
          <rect x="2" y="9" width="6" height="6" fill="#000" />
          <rect x="16" y="9" width="6" height="6" fill="#000" />
          <rect x="2" y="16" width="6" height="6" fill="#000" />
          <rect x="9" y="16" width="6" height="6" fill="#000" />
          <rect x="16" y="16" width="6" height="6" fill="#000" />
        </svg>
      )
    case 'rounded':
      return (
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="6" height="6" rx="1.5" fill="#000" />
          <rect x="9" y="2" width="6" height="6" rx="1.5" fill="#000" />
          <rect x="16" y="2" width="6" height="6" rx="1.5" fill="#000" />
          <rect x="2" y="9" width="6" height="6" rx="1.5" fill="#000" />
          <rect x="16" y="9" width="6" height="6" rx="1.5" fill="#000" />
          <rect x="2" y="16" width="6" height="6" rx="1.5" fill="#000" />
          <rect x="9" y="16" width="6" height="6" rx="1.5" fill="#000" />
          <rect x="16" y="16" width="6" height="6" rx="1.5" fill="#000" />
        </svg>
      )
    case 'dots':
      return (
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
          <circle cx="5" cy="5" r="3" fill="#000" />
          <circle cx="12" cy="5" r="3" fill="#000" />
          <circle cx="19" cy="5" r="3" fill="#000" />
          <circle cx="5" cy="12" r="3" fill="#000" />
          <circle cx="19" cy="12" r="3" fill="#000" />
          <circle cx="5" cy="19" r="3" fill="#000" />
          <circle cx="12" cy="19" r="3" fill="#000" />
          <circle cx="19" cy="19" r="3" fill="#000" />
        </svg>
      )
    case 'classy':
      return (
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="6" height="6" fill="#000" />
          <rect x="9" y="5" width="6" height="3" fill="#000" />
          <rect x="16" y="2" width="6" height="6" fill="#000" />
          <rect x="5" y="9" width="3" height="6" fill="#000" />
          <rect x="16" y="9" width="3" height="6" fill="#000" />
          <rect x="2" y="16" width="6" height="6" fill="#000" />
          <rect x="9" y="16" width="6" height="3" fill="#000" />
          <rect x="16" y="16" width="6" height="6" fill="#000" />
        </svg>
      )
    case 'classy-rounded':
      return (
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="6" height="6" rx="1.5" fill="#000" />
          <rect x="9" y="5" width="6" height="3" rx="1.5" fill="#000" />
          <rect x="16" y="2" width="6" height="6" rx="1.5" fill="#000" />
          <rect x="5" y="9" width="3" height="6" rx="1.5" fill="#000" />
          <rect x="16" y="9" width="3" height="6" rx="1.5" fill="#000" />
          <rect x="2" y="16" width="6" height="6" rx="1.5" fill="#000" />
          <rect x="9" y="16" width="6" height="3" rx="1.5" fill="#000" />
          <rect x="16" y="16" width="6" height="6" rx="1.5" fill="#000" />
        </svg>
      )
    case 'extra-rounded':
      return (
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="6" height="6" rx="3" fill="#000" />
          <rect x="9" y="2" width="6" height="6" rx="3" fill="#000" />
          <rect x="16" y="2" width="6" height="6" rx="3" fill="#000" />
          <rect x="2" y="9" width="6" height="6" rx="3" fill="#000" />
          <rect x="16" y="9" width="6" height="6" rx="3" fill="#000" />
          <rect x="2" y="16" width="6" height="6" rx="3" fill="#000" />
          <rect x="9" y="16" width="6" height="6" rx="3" fill="#000" />
          <rect x="16" y="16" width="6" height="6" rx="3" fill="#000" />
        </svg>
      )
    default:
      return null
  }
}

export { styles }
export default StyleSelector
