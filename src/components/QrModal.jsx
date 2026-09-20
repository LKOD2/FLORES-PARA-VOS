import { useEffect, useRef, useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'

export default function QrModal({ url, onClose }) {
  const [copied, setCopied] = useState(false)
  const linkRef = useRef(null)

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
    } catch {
      const el = linkRef.current
      if (el) {
        el.select()
        document.execCommand('copy')
        setCopied(true)
      }
    }
    setTimeout(() => setCopied(false), 1800)
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" role="dialog" aria-modal="true" aria-label="Código QR" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" type="button" onClick={onClose} aria-label="Cerrar">
          ✕
        </button>
        <p className="eyebrow">Tu tarjeta está lista</p>
        <div className="qr-wrap">
          <QRCodeSVG value={url} size={180} bgColor="#FFFEFA" fgColor="#4A4032" level="M" />
        </div>
        <p className="hint">Escanéalo o comparte el enlace para que ella lo abra</p>
        <div className="link-row">
          <input type="text" readOnly value={url} ref={linkRef} aria-label="Enlace para compartir" />
          <button className={`copy-btn${copied ? ' copied' : ''}`} type="button" onClick={handleCopy}>
            {copied ? '¡Copiado!' : 'Copiar'}
          </button>
        </div>
        <a className="preview-link" href={url} target="_blank" rel="noopener noreferrer">
          Ver vista previa ↗
        </a>
      </div>
    </div>
  )
}
