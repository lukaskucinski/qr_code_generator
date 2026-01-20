function DownloadButton() {
  const handleDownload = () => {
    const canvas = document.getElementById('qr-canvas')
    if (!canvas) return

    const url = canvas.toDataURL('image/png')
    const link = document.createElement('a')
    link.download = 'qrcode.png'
    link.href = url
    link.click()
  }

  return (
    <button
      onClick={handleDownload}
      className="
        w-full py-3 px-4 rounded-xl
        bg-primary hover:bg-primary-hover
        text-white font-medium
        transition-all duration-200
        hover:shadow-lg hover:shadow-primary/25
        active:scale-[0.98]
        flex items-center justify-center gap-2
      "
    >
      <DownloadIcon />
      Download PNG
    </button>
  )
}

function DownloadIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
      />
    </svg>
  )
}

export default DownloadButton
