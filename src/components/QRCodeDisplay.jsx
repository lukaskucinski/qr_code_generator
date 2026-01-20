import { useEffect, useRef } from 'react'
import QRCodeStyling from 'qr-code-styling'

function buildDotsOptions(dotStyle, shapeColor, useGradient, gradientSecondColor, radialGradient) {
  if (useGradient) {
    return {
      type: dotStyle,
      color: undefined,
      gradient: {
        type: radialGradient ? 'radial' : 'linear',
        rotation: 0,
        colorStops: [
          { offset: 0, color: shapeColor },
          { offset: 1, color: gradientSecondColor },
        ],
      },
    }
  }

  return {
    type: dotStyle,
    color: shapeColor,
    gradient: undefined,
  }
}

function QRCodeDisplay({
  url,
  isValid,
  size = 192,
  dotStyle = 'square',
  backgroundColor = '#ffffff',
  shapeColor = '#000000',
  useGradient = false,
  gradientSecondColor = '#15A97C',
  radialGradient = false,
}) {
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
        dotsOptions: buildDotsOptions(dotStyle, shapeColor, useGradient, gradientSecondColor, radialGradient),
        cornersSquareOptions: {
          type: dotStyle === 'dots' ? 'dot' : dotStyle === 'rounded' ? 'extra-rounded' : 'square',
          color: shapeColor,
        },
        cornersDotOptions: {
          type: dotStyle === 'dots' ? 'dot' : 'square',
          color: shapeColor,
        },
        backgroundOptions: {
          color: backgroundColor,
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
        dotsOptions: buildDotsOptions(dotStyle, shapeColor, useGradient, gradientSecondColor, radialGradient),
        cornersSquareOptions: {
          type: dotStyle === 'dots' ? 'dot' : dotStyle === 'rounded' ? 'extra-rounded' : 'square',
          color: shapeColor,
        },
        cornersDotOptions: {
          type: dotStyle === 'dots' ? 'dot' : 'square',
          color: shapeColor,
        },
        backgroundOptions: {
          color: backgroundColor,
        },
      })
    }
  }, [url, size, dotStyle, backgroundColor, shapeColor, useGradient, gradientSecondColor, radialGradient])

  return (
    <div className="flex items-center justify-center">
      <div
        className="rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden transition-all duration-300"
        style={{ width: containerSize, height: containerSize }}
      >
        {isValid ? (
          <div
            className={`animate-fade-in p-4 rounded-lg ${backgroundColor === 'transparent' ? 'bg-[repeating-conic-gradient(#e5e5e5_0%_25%,#fafafa_0%_50%)] bg-[length:12px_12px]' : ''}`}
            style={backgroundColor !== 'transparent' ? { backgroundColor } : undefined}
          >
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
