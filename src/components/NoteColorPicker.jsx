import NOTE_COLORS from '../noteColors.js'

export default function NoteColorPicker({ value, onChange }) {
  return (
    <fieldset className="note-color-picker">
      <legend>Color de la nota</legend>
      <div className="swatch-row">
        {NOTE_COLORS.map((c) => (
          <label key={c.id} className="swatch-option" title={c.label}>
            <input
              type="radio"
              name="noteColor"
              value={c.id}
              checked={value === c.id}
              onChange={() => onChange(c.id)}
            />
            <span
              className={`swatch${value === c.id ? ' is-selected' : ''}`}
              style={{ '--swatch-color': c.light.paper, '--swatch-edge': c.light.paperEdge }}
            />
            <span className="swatch-label">{c.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}
