const NOTE_COLORS = [
  {
    id: 'crema',
    label: 'Crema',
    light: { paper: '#FFFEFA', paperEdge: '#F3EAD3' },
    dark: { paper: '#23281C', paperEdge: '#2E3423' },
  },
  {
    id: 'rosa',
    label: 'Rosa',
    light: { paper: '#FDF1F5', paperEdge: '#F6D9E3' },
    dark: { paper: '#2E1A20', paperEdge: '#3D232B' },
  },
  {
    id: 'celeste',
    label: 'Celeste',
    light: { paper: '#EFF7FC', paperEdge: '#D8E9F5' },
    dark: { paper: '#182530', paperEdge: '#223244' },
  },
  {
    id: 'lavanda',
    label: 'Lavanda',
    light: { paper: '#F5F1FC', paperEdge: '#E4D9F5' },
    dark: { paper: '#241E33', paperEdge: '#302842' },
  },
  {
    id: 'menta',
    label: 'Menta',
    light: { paper: '#EFFAF3', paperEdge: '#D7F0E1' },
    dark: { paper: '#1B2A21', paperEdge: '#24352A' },
  },
]

export const DEFAULT_NOTE_COLOR = NOTE_COLORS[0].id

export function getNoteColorMeta(id) {
  return NOTE_COLORS.find((c) => c.id === id) || NOTE_COLORS[0]
}

export function getNoteColor(id, theme = 'light') {
  const meta = getNoteColorMeta(id)
  return theme === 'dark' ? meta.dark : meta.light
}

export default NOTE_COLORS
