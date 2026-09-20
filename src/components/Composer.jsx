import { useState } from 'react'
import DesignPicker from './DesignPicker.jsx'
import NoteColorPicker from './NoteColorPicker.jsx'
import QrModal from './QrModal.jsx'
import Signature from './Signature.jsx'
import FloatingPetals from './FloatingPetals.jsx'
import { encodePayload } from '../payload.js'
import { DEFAULT_NOTE_COLOR } from '../noteColors.js'

const MAX_LEN = 300

export default function Composer() {
  const [design, setDesign] = useState('garden')
  const [noteColor, setNoteColor] = useState(DEFAULT_NOTE_COLOR)
  const [toName, setToName] = useState('')
  const [message, setMessage] = useState('')
  const [fromName, setFromName] = useState('')
  const [error, setError] = useState(false)
  const [shareUrl, setShareUrl] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const msg = message.trim()
    if (!msg) {
      setError(true)
      return
    }
    setError(false)

    const payload = { d: design, msg, nc: noteColor }
    if (toName.trim()) payload.to = toName.trim()
    if (fromName.trim()) payload.from = fromName.trim()

    const url = `${window.location.origin}${window.location.pathname}#p=${encodePayload(payload)}`
    setShareUrl(url)
    setModalOpen(true)
  }

  return (
    <div className="app-shell">
      <FloatingPetals />

      <main className="composer">
        <div className="composer-card">
          <p className="eyebrow">Flores para ti</p>
          <h1>Crea una tarjeta y compártela</h1>
          <p className="lede">
            Escribe tu mensaje, elige un diseño y genera un código QR para que ella lo abra.
          </p>

          <form onSubmit={handleSubmit} noValidate>
            <DesignPicker value={design} onChange={setDesign} />
            <NoteColorPicker value={noteColor} onChange={setNoteColor} />

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

          {shareUrl && !modalOpen && (
            <div className="share-recap">
              <button className="ghost" type="button" onClick={() => setModalOpen(true)}>
                Ver código QR
              </button>
            </div>
          )}
        </div>

        <Signature />

        {modalOpen && shareUrl && <QrModal url={shareUrl} onClose={() => setModalOpen(false)} />}
      </main>
    </div>
  )
}
