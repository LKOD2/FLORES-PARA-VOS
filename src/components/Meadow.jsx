import { useMemo } from 'react'
import Flower from './Flower.jsx'

const SIZES = [46, 58, 38, 64, 44, 52, 36, 60, 42, 56, 40, 48]

export default function Meadow() {
  const flowers = useMemo(
    () =>
      SIZES.map((size, i) => ({
        size,
        left: (i / SIZES.length) * 100 + (i % 3) * 2 - 2,
        delay: (i % 5) * 0.25,
        duration: 3.6 + (i % 4) * 0.35,
      })),
    []
  )

  return (
    <div className="meadow" aria-hidden="true">
      {flowers.map((f, i) => (
        <Flower
          key={i}
          size={f.size}
          style={{
            left: `${f.left}%`,
            animationDelay: `${f.delay}s`,
            animationDuration: `${f.duration}s`,
          }}
        />
      ))}
    </div>
  )
}
