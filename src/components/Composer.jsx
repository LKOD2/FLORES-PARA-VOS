import { useRef, useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import DesignPicker from './DesignPicker.jsx'

const MAX_LEN = 300

export default function Composer() {
  const [design, setDesign] = useState('garden')
  const [toName, setToName] = useState('')
  const [message, setMessage] = useState('')
  const [fromName, setFromName] = useState('')
  const [error, setError] = useState(false)
  const [shareUrl, setShareUrl] = useState(null)
  const [copied, setCopied] = useState(false)
  const linkRef = useRef(null)

  function handleSubmit(e) {
    e.preventDefault()
    const msg = message.trim()
    if (!msg) {
      setError(true)
      return
    }
    setError(false)

    const params = new URLSearchParams()
    if (design === 'bloom') params.set('d', 'bloom')
    if (toName.trim()) params.set('to', toName.trim())
    params.set('msg', msg)
    if (fromName.trim()) params.set('from', fromName.trim())

    const url = window.location.origin + window.location.pathname + '#' + params.toString()
    setShareUrl(url)
    setCopied(false)
  }

  async function handleCopy() {
    if (!shareUrl) return
    try {
      await navigator.clipboard.writeText(shareUrl)
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
    <main className="composer">
      <div className="composer-card">
        <p className="eyebrow">Flores para ti</p>
        <h1>Crea una tarjeta y compártela</h1>
        <p className="lede">
          Escribe tu mensaje, elige un diseño y genera un código QR para que ella lo abra.
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <DesignPicker value={design} onChange={setDesign} />

          <div className="field">
            <label htmlFor="toName">Para (opcional)</label>
            <input
              type="text"
              id="toName"
              maxLength={40}
              placeholder="Su nombre"
              value={toName}
              onChange={(e) => setToName(e.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="msgText">Tu mensaje</label>
            <textarea
              id="msgText"
              maxLength={MAX_LEN}
              rows={4}
              placeholder="Escribe lo que quieras decirle..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="counter">
            <span>{message.length}</span>/{MAX_LEN}
          </div>
          {error && <p className="error">Escribe un mensaje antes de crear la tarjeta.</p>}

          <div className="field">
            <label htmlFor="fromName">De (opcional)</label>
            <input
              type="text"
              id="fromName"
              maxLength={40}
              placeholder="Tu nombre"
              value={fromName}
              onChange={(e) => setFromName(e.target.value)}
            />
          </div>

          <button className="primary" type="submit">
            Crear tarjeta y generar QR
          </button>
        </form>

        {shareUrl && (
          <div className="share-result">
            <div className="qr-wrap">
              <QRCodeSVG value={shareUrl} size={180} bgColor="#FFFBEA" fgColor="#2C3A1E" level="M" />
            </div>
            <p className="hint">Escanéalo o comparte el enlace para que ella lo abra</p>
            <div className="link-row">
              <input type="text" readOnly value={shareUrl} ref={linkRef} aria-label="Enlace para compartir" />
              <button className={`copy-btn${copied ? ' copied' : ''}`} type="button" onClick={handleCopy}>
                {copied ? '¡Copiado!' : 'Copiar'}
              </button>
            </div>
            <a className="preview-link" href={shareUrl} target="_blank" rel="noopener noreferrer">
              Ver vista previa ↗
            </a>
          </div>
        )}
      </div>
    </main>
  )
}
