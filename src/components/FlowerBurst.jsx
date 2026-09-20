import { MiniFlower } from './MiniFlower.jsx'

const BURST_FLOWERS = [
  { bx: -230, by: -170, br: -35, size: 26, delay: 0 },
  { bx: 210, by: -200, br: 25, size: 22, delay: 0.04 },
  { bx: -170, by: -270, br: 20, size: 19, delay: 0.08 },
  { bx: 270, by: -110, br: -20, size: 24, delay: 0.02 },
  { bx: -270, by: -60, br: 35, size: 20, delay: 0.12 },
  { bx: 240, by: -290, br: -30, size: 18, delay: 0.06 },
  { bx: 20, by: -320, br: 15, size: 22, delay: 0.1 },
  { bx: -110, by: -240, br: -15, size: 16, delay: 0.16 },
  { bx: 140, by: -70, br: 25, size: 19, delay: 0.14 },
]

export default function FlowerBurst({ open }) {
  return (
    <>
      {BURST_FLOWERS.map((f, i) => (
        <span
          key={i}
          className={`flower-burst${open ? ' open' : ''}`}
          aria-hidden="true"
          style={{
            '--bx': `${f.bx}px`,
            '--by': `${f.by}px`,
            '--br': `${f.br}deg`,
            '--bdelay': `${f.delay}s`,
          }}
        >
          <MiniFlower size={f.size} />
        </span>
      ))}
    </>
  )
}
