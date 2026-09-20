import ThemeToggle from './ThemeToggle.jsx'

export default function Header({ theme, onToggleTheme }) {
  return (
    <header className="app-header">
      <span className="app-header-title">Flores para ti</span>
      <ThemeToggle theme={theme} onToggle={onToggleTheme} />
    </header>
  )
}
