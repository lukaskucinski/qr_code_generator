function ColorInput({ value, onChange, disabled = false }) {
  const handleTextChange = (e) => {
    let val = e.target.value.toUpperCase()
    if (!val.startsWith('#')) {
      val = '#' + val.replace('#', '')
    }
    if (val.length <= 7) {
      onChange(val)
    }
  }

  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        value={value}
        onChange={handleTextChange}
        disabled={disabled}
        maxLength={7}
        className={`w-20 px-2 py-1.5 rounded-md bg-white/5 border border-white/10 text-slate-50 text-xs font-mono
                   focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200
                   ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        placeholder="#000000"
      />
      <input
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value.toUpperCase())}
        disabled={disabled}
        className={`w-8 h-8 rounded-md cursor-pointer border border-white/10 bg-transparent p-0.5
                   ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      />
    </div>
  )
}

function ToggleSwitch({ checked, onChange, label }) {
  return (
    <label className="flex items-center gap-1.5 cursor-pointer select-none">
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only peer"
        />
        <div className="w-8 h-5 bg-white/10 rounded-full peer peer-checked:bg-teal-500 transition-colors duration-200" />
        <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-200 peer-checked:translate-x-3" />
      </div>
      <span className="text-xs text-slate-400">{label}</span>
    </label>
  )
}

function ColorOptions({
  backgroundColor,
  onBackgroundColorChange,
  transparentBackground,
  onTransparentBackgroundChange,
  shapeColor,
  onShapeColorChange,
  useGradient,
  onUseGradientChange,
  gradientSecondColor,
  onGradientSecondColorChange,
  radialGradient,
  onRadialGradientChange,
}) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Background Column */}
      <div className="space-y-2">
        <span className="block text-xs font-medium text-slate-400">Background color</span>
        <ColorInput
          value={backgroundColor}
          onChange={onBackgroundColorChange}
          disabled={transparentBackground}
        />
        <ToggleSwitch
          checked={transparentBackground}
          onChange={onTransparentBackgroundChange}
          label="Transparent"
        />
      </div>

      {/* Shape Column */}
      <div className="space-y-2">
        <span className="block text-xs font-medium text-slate-400">Shape color</span>
        <ColorInput
          value={shapeColor}
          onChange={onShapeColorChange}
        />
        <ToggleSwitch
          checked={useGradient}
          onChange={onUseGradientChange}
          label="Gradient"
        />
        {useGradient && (
          <div className="space-y-2 pt-1">
            <span className="block text-xs font-medium text-slate-400">Second color</span>
            <ColorInput
              value={gradientSecondColor}
              onChange={onGradientSecondColorChange}
            />
            <ToggleSwitch
              checked={radialGradient}
              onChange={onRadialGradientChange}
              label="Radial"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default ColorOptions
