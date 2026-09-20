import { useState } from 'react'
import Flower from './Flower.jsx'
import Meadow from './Meadow.jsx'
import FlowerBurst from './FlowerBurst.jsx'
import { getNoteColor } from '../noteColors.js'

export default function RevealEnvelope({ to, msg, from, noteColor, theme, onReset }) {
  const [open, setOpen] = useState(false)
  const color = getNoteColor(noteColor, theme)

  return (
    <section
      className="reveal-envelope"
      style={{ '--paper': color.paper, '--paper-edge': color.paperEdge }}
    >
      <Meadow />
      <div className="envelope-stage">
        {!open && <p className="bloom-hint">Toca el sobre</p>}

        <div className="envelope-scene">
          <Flower size={28} className="deco env-left" />
          <Flower size={24} className="deco env-right" />

          <button
            className={`envelope-btn${open ? ' open' : ''}`}
            type="button"
            disabled={open}
            onClick={() => setOpen(true)}
            aria-label="Abrir el sobre para ver el mensaje"
          >
            <span className="envelope-flap">
              <span className="envelope-seal" aria-hidden="true">♥</span>
            </span>
            <span className="envelope-fold-left" />
            <span className="envelope-fold-right" />
            <span className="envelope-body" />
          </button>

          <div className={`envelope-note${open ? ' open' : ''}`}>
            <p className="eyebrow">{to ? `Para ${to}` : 'Para ti'}</p>
            <p className="reveal-msg" style={{ '--msg-len': msg.length }}>{msg}</p>
            {from && <p className="reveal-from">{`— ${from}`}</p>}
          </div>

          <FlowerBurst open={open} />
        </div>

        <button className="ghost" type="button" onClick={onReset}>
          ✿ Crea tu propio mensaje
        </button>
      </div>
    </section>
  )
}
