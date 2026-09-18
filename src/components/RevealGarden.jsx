import Meadow from './Meadow.jsx'
import Flower from './Flower.jsx'

export default function RevealGarden({ to, msg, from, onReset }) {
  return (
    <section className="reveal-garden">
      <Meadow />
      <div className="stage">
        <div className="card">
          <div className="tape" />
          <Flower size={34} className="deco left" />
          <Flower size={30} className="deco right" />
          <p className="eyebrow">{to ? `Para ${to}` : 'Para ti'}</p>
          <p className="reveal-msg">{msg}</p>
          {from && <p className="reveal-from">{`— ${from}`}</p>}
        </div>
        <button className="ghost" type="button" onClick={onReset}>
          ✿ Crea tu propio mensaje
        </button>
      </div>
    </section>
  )
}
