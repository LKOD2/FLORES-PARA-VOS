import { useEffect, useState } from 'react'
import Meadow from './Meadow.jsx'
import FlowerBurst from './FlowerBurst.jsx'

export default function RevealBloom({ to, msg, from, onReset }) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!open) return
    const t = setTimeout(() => setMounted(true), 500)
    return () => clearTimeout(t)
  }, [open])

  useEffect(() => {
    if (!mounted) return
    const raf = requestAnimationFrame(() => setVisible(true))
    return () => cancelAnimationFrame(raf)
  }, [mounted])

  return (
    <section className="reveal-bloom">
      <Meadow />
      <div className="bloom-stage">
        {!open && <p className="bloom-hint">Toca la flor</p>}
        <div className="bloom-flower-wrap">
          <button
            className={`flower-bloom${open ? ' open' : ''}`}
            type="button"
            disabled={open}
            onClick={() => setOpen(true)}
            aria-label="Abrir la flor para ver el mensaje"
          >
            <span className="petal" />
            <span className="petal" />
            <span className="petal" />
            <span className="petal" />
            <span className="petal" />
            <span className="petal" />
            <span className="petal" />
            <span className="petal" />
            <span className="flower-center" />
          </button>
          <FlowerBurst open={open} />
        </div>
        {mounted && (
          <div className={`bloom-message${visible ? ' in' : ''}`}>
            <p className="eyebrow">{to ? `Para ${to}` : 'Para ti'}</p>
            <p className="reveal-msg" style={{ '--msg-len': msg.length }}>{msg}</p>
            {from && <p className="reveal-from">{`— ${from}`}</p>}
          </div>
        )}
        <button className="ghost" type="button" onClick={onReset}>
          ✿ Crea tu propio mensaje
        </button>
      </div>
    </section>
  )
}
