export const CV_FILENAME = 'Kunchana_Wijesinghe_CV.pdf'
export const CV_URL = `${import.meta.env.BASE_URL}Kunchana_Wijesinghe_CV.pdf`

export const handleCvDownload = (e) => {
  // Preserve native modifier-click behaviour (Cmd, Ctrl, Shift, Alt, middle-click)
  if (e && (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || (e.button && e.button !== 0))) {
    return
  }

  // Prevent default navigation for ordinary clicks
  if (e && typeof e.preventDefault === 'function') {
    e.preventDefault()
  }

  // 1. Immediately open the PDF in a new tab using window.open with noopener,noreferrer
  window.open(CV_URL, '_blank', 'noopener,noreferrer')

  // 2. Create a temporary anchor pointing to the same PDF, set download="Kunchana_Wijesinghe_CV.pdf", append it, click it and remove it
  const downloadLink = document.createElement('a')
  downloadLink.href = CV_URL
  downloadLink.download = CV_FILENAME
  document.body.appendChild(downloadLink)
  downloadLink.click()
  document.body.removeChild(downloadLink)
}
