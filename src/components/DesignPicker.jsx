import { MiniFlower, MiniBud } from './MiniFlower.jsx'

const OPTIONS = [
  {
    id: 'garden',
    label: 'Jardín',
    desc: 'Una notita de papel entre flores',
    preview: (
      <>
        <MiniFlower size={20} />
        <MiniFlower size={14} />
        <span className="mini-note" />
      </>
    ),
  },
  {
    id: 'bloom',
    label: 'Flor que se abre',
    desc: 'Toca la flor y el mensaje aparece',
    preview: <MiniBud />,
  },
]

export default function DesignPicker({ value, onChange }) {
  return (
    <fieldset className="design-picker">
      <legend>Elige un diseño</legend>
      {OPTIONS.map((opt) => (
        <label
          key={opt.id}
          className={`design-option${value === opt.id ? ' is-selected' : ''}`}
        >
          <input
            type="radio"
            name="design"
            value={opt.id}
            checked={value === opt.id}
            onChange={() => onChange(opt.id)}
          />
          <span className="design-preview">{opt.preview}</span>
          <span className="design-label">{opt.label}</span>
          <span className="design-desc">{opt.desc}</span>
        </label>
      ))}
    </fieldset>
  )
}
