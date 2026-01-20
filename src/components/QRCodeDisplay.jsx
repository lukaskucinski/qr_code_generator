import { useEffect, useRef } from 'react'
import QRCodeStyling from 'qr-code-styling'

function QRCodeDisplay({ url, isValid, size = 192, dotStyle = 'square' }) {
  const containerSize = size + 32
  const ref = useRef(null)
  const qrCode = useRef(null)

  useEffect(() => {
    if (!qrCode.current) {
      qrCode.current = new QRCodeStyling({
        width: size,
        height: size,
        type: 'canvas',
        data: url || 'https://example.com',
        dotsOptions: {
          type: dotStyle,
          color: '#000000',
        },
        cornersSquareOptions: {
          type: dotStyle === 'dots' ? 'dot' : dotStyle === 'rounded' ? 'extra-rounded' : 'square',
          color: '#000000',
        },
        cornersDotOptions: {
          type: dotStyle === 'dots' ? 'dot' : 'square',
          color: '#000000',
        },
        backgroundOptions: {
          color: '#ffffff',
        },
        qrOptions: {
          errorCorrectionLevel: 'M',
        },
      })
    }
  }, [])

  useEffect(() => {
    if (ref.current && qrCode.current) {
      ref.current.innerHTML = ''
      qrCode.current.append(ref.current)
    }
  }, [isValid])

  useEffect(() => {
    if (qrCode.current) {
      qrCode.current.update({
        width: size,
        height: size,
        data: url || 'https://example.com',
        dotsOptions: {
          type: dotStyle,
          color: '#000000',
        },
        cornersSquareOptions: {
          type: dotStyle === 'dots' ? 'dot' : dotStyle === 'rounded' ? 'extra-rounded' : 'square',
          color: '#000000',
        },
        cornersDotOptions: {
          type: dotStyle === 'dots' ? 'dot' : 'square',
          color: '#000000',
        },
      })
    }
  }, [url, size, dotStyle])

  return (
    <div className="flex items-center justify-center">
      <div
        className="rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden transition-all duration-300"
        style={{ width: containerSize, height: containerSize }}
      >
        {isValid ? (
          <div className="animate-fade-in p-4 bg-white rounded-lg">
            <div ref={ref} id="qr-canvas" />
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
