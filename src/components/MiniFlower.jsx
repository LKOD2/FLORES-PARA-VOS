export function MiniFlower({ size }) {
  return (
    <span className="mini-flower" style={{ '--s': `${size}px` }}>
      <span className="bloom">
        <span className="petal" />
        <span className="petal" />
        <span className="petal" />
        <span className="petal" />
        <span className="petal" />
        <span className="petal" />
        <span className="flower-center" />
      </span>
    </span>
  )
}

export function MiniBud() {
  return (
    <span className="mini-bud">
      <span className="petal" />
      <span className="petal" />
      <span className="petal" />
      <span className="petal" />
      <span className="petal" />
      <span className="petal" />
      <span className="petal" />
      <span className="petal" />
      <span className="flower-center" />
    </span>
  )
}
