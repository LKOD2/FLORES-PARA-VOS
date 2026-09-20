export default function ThemeToggle({ theme, onToggle, floating }) {
  return (
    <button
      className={`theme-toggle${floating ? ' theme-toggle-floating' : ''}`}
      type="button"
      onClick={onToggle}
      aria-label={theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
      title={theme === 'dark' ? 'Tema claro' : 'Tema oscuro'}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}
