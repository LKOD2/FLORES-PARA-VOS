import { MiniFlower } from './MiniFlower.jsx'

const SIZES = [16, 22, 28, 34]
const COUNT = 25

function petalConfig(i) {
  const size = SIZES[i % SIZES.length]
  const sx = i % 2 === 0 ? 1 : -1
  const sy = i % 3 === 0 ? 1 : -1
  return {
    size,
    top: `${(i * 37) % 100}%`,
    left: `${(i * 53) % 100}%`,
    dur: 26 + (i % 7) * 3,
    delay: (i % 10) * 1.3,
    fx1: sx * (26 + ((i * 7) % 28)),
    fy1: sy * (18 + ((i * 11) % 22)),
    fr1: sx * (10 + ((i * 5) % 20)),
    fx2: -sx * (20 + ((i * 13) % 32)),
    fy2: -sy * (14 + ((i * 9) % 26)),
    fr2: -sx * (8 + ((i * 6) % 18)),
  }
}

const PETALS = Array.from({ length: COUNT }, (_, i) => petalConfig(i))

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
            '--fx1': `${p.fx1}vw`,
            '--fy1': `${p.fy1}vh`,
            '--fr1': `${p.fr1}deg`,
            '--fx2': `${p.fx2}vw`,
            '--fy2': `${p.fy2}vh`,
            '--fr2': `${p.fr2}deg`,
          }}
        >
          <MiniFlower size={p.size} />
        </span>
      ))}
    </div>
  )
}
