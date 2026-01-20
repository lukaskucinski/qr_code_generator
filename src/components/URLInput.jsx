function URLInput({ value, onChange, isValid, hasInput }) {
  const showError = hasInput && !isValid

  return (
    <div>
      <label htmlFor="url-input" className="block text-sm font-medium text-slate-400 mb-2">
        Enter URL
      </label>
      <input
        id="url-input"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="https://example.com"
        className={`
          w-full px-4 py-3 rounded-xl
          bg-white/5 border
          text-slate-50 placeholder-slate-500
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-offset-0
          ${showError
            ? 'border-red-500/50 focus:ring-red-500/30 focus:border-red-500'
            : 'border-white/10 focus:ring-primary/30 focus:border-primary'
          }
        `}
        autoComplete="off"
        spellCheck="false"
      />
      {showError && (
        <p className="mt-2 text-sm text-red-400 animate-fade-in">
          Please enter a valid URL (e.g., https://example.com)
        </p>
      )}
    </div>
  )
}

export default URLInput
