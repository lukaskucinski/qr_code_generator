import { useState, useEffect, useCallback } from 'react'
import Header from './components/Header'
import URLInput from './components/URLInput'
import SizeSelector, { sizes } from './components/SizeSelector'
import QRCodeDisplay from './components/QRCodeDisplay'
import DownloadButton from './components/DownloadButton'
import Footer from './components/Footer'

function App() {
  const [url, setUrl] = useState('')
  const [debouncedUrl, setDebouncedUrl] = useState('')
  const [isValid, setIsValid] = useState(false)
  const [hasInput, setHasInput] = useState(false)
  const [selectedSize, setSelectedSize] = useState('medium')

  const qrSize = sizes.find((s) => s.key === selectedSize)?.value || 220

  const containerWidth = Math.max(400, qrSize + 80)

  const validateURL = useCallback((string) => {
    if (!string.trim()) return false
    try {
      const urlObj = new URL(string)
      return urlObj.protocol === 'http:' || urlObj.protocol === 'https:'
    } catch {
      return false
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedUrl(url)
      setIsValid(validateURL(url))
      setHasInput(url.trim().length > 0)
    }, 300)

    return () => clearTimeout(timer)
  }, [url, validateURL])

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div
        className="w-full transition-all duration-300"
        style={{ maxWidth: containerWidth }}
      >
        <Header />

        <div className="mt-8 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl">
          <URLInput
            value={url}
            onChange={setUrl}
            isValid={isValid}
            hasInput={hasInput}
          />

          <div className="mt-4">
            <SizeSelector
              selectedSize={selectedSize}
              onSizeChange={setSelectedSize}
            />
          </div>

          <div className="mt-6">
            <QRCodeDisplay url={debouncedUrl} isValid={isValid} size={qrSize} />
          </div>

          {isValid && (
            <div className="mt-6 animate-fade-in">
              <DownloadButton />
            </div>
          )}
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default App
