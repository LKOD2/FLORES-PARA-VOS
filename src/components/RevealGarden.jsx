import Meadow from './Meadow.jsx'
import Flower from './Flower.jsx'
import { getNoteColor } from '../noteColors.js'

export default function RevealGarden({ to, msg, from, noteColor, theme, onReset }) {
  const color = getNoteColor(noteColor, theme)
  return (
    <section className="reveal-garden">
      <Meadow />
      <div className="stage">
        <div className="card" style={{ '--paper': color.paper, '--paper-edge': color.paperEdge }}>
          <div className="tape" />
          <Flower size={34} className="deco left" />
          <Flower size={30} className="deco right" />
          <p className="eyebrow">{to ? `Para ${to}` : 'Para ti'}</p>
          <p className="reveal-msg" style={{ '--msg-len': msg.length }}>{msg}</p>
          {from && <p className="reveal-from">{`— ${from}`}</p>}
        </div>
        <button className="ghost" type="button" onClick={onReset}>
          ✿ Crea tu propio mensaje
        </button>
      </div>
    </section>
  )
}
