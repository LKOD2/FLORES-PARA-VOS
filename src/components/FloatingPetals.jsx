import { MiniFlower } from './MiniFlower.jsx'

const PETALS = [
  { top: '12%', left: '8%', size: 22, dur: 15, delay: 0, fx: 24, fy: -30, fr: 12 },
  { top: '70%', left: '88%', size: 18, dur: 13, delay: 2, fx: -20, fy: -26, fr: -14 },
  { top: '45%', left: '92%', size: 16, dur: 17, delay: 4, fx: -18, fy: 22, fr: 10 },
  { top: '80%', left: '6%', size: 20, dur: 16, delay: 1, fx: 20, fy: -24, fr: -10 },
]

export default function FloatingPetals() {
  return (
    <div className="compose-ambient" aria-hidden="true">
      {PETALS.map((p, i) => (
        <span
          key={i}
          className="float-petal"
          style={{
            top: p.top,
            left: p.left,
            '--fdur': `${p.dur}s`,
            '--fdelay': `${p.delay}s`,
            '--fx': `${p.fx}px`,
            '--fy': `${p.fy}px`,
            '--fr': `${p.fr}deg`,
          }}
        >
          <MiniFlower size={p.size} />
        </span>
      ))}
    </div>
  )
}
