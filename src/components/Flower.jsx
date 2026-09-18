export default function Flower({ size, className = '', style, withStem = true, withLeaf = true }) {
  return (
    <div className={`flower ${className}`} style={{ '--s': `${size}px`, ...style }}>
      {withStem && <div className="stem" />}
      {withLeaf && <div className="leaf" />}
      <div className="bloom">
        <span className="petal" />
        <span className="petal" />
        <span className="petal" />
        <span className="petal" />
        <span className="petal" />
        <span className="petal" />
        <span className="flower-center" />
      </div>
    </div>
  )
}
