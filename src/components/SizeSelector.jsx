const sizes = [
  { key: 'small', label: 'S', value: 128 },
  { key: 'medium', label: 'M', value: 192 },
  { key: 'large', label: 'L', value: 256 },
  { key: 'xlarge', label: 'XL', value: 320 },
]

function SizeSelector({ selectedSize, onSizeChange }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-400 mb-2">
        Size
      </label>
      <div className="flex gap-2">
        {sizes.map((size) => (
          <button
            key={size.key}
            onClick={() => onSizeChange(size.key)}
            className={`
              flex-1 py-2 px-3 rounded-lg text-sm font-medium
              transition-all duration-200
              ${selectedSize === size.key
                ? 'bg-primary text-white'
                : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-slate-300 border border-white/10'
              }
            `}
          >
            {size.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export { sizes }
export default SizeSelector
