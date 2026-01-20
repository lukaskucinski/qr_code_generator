import { QRCodeCanvas } from 'qrcode.react'

function QRCodeDisplay({ url, isValid, size = 192 }) {
  const containerSize = size + 32

  return (
    <div className="flex items-center justify-center">
      <div
        className="rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden transition-all duration-300"
        style={{ width: containerSize, height: containerSize }}
      >
        {isValid ? (
          <div className="animate-fade-in p-4 bg-white rounded-lg">
            <QRCodeCanvas
              id="qr-canvas"
              value={url}
              size={size}
              level="M"
              bgColor="#ffffff"
              fgColor="#000000"
            />
          </div>
        ) : (
          <PlaceholderIcon />
        )}
      </div>
    </div>
  )
}

function PlaceholderIcon() {
  return (
    <svg
      className="w-20 h-20 text-slate-600"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="3" height="3" rx="0.5" />
      <rect x="18" y="14" width="3" height="3" rx="0.5" />
      <rect x="14" y="18" width="3" height="3" rx="0.5" />
      <rect x="18" y="18" width="3" height="3" rx="0.5" />
    </svg>
  )
}

export default QRCodeDisplay
