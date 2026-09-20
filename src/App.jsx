import useHashPayload from './hooks/useHashPayload.js'
import useTheme from './hooks/useTheme.js'
import ThemeToggle from './components/ThemeToggle.jsx'
import Composer from './components/Composer.jsx'
import RevealGarden from './components/RevealGarden.jsx'
import RevealBloom from './components/RevealBloom.jsx'
import RevealEnvelope from './components/RevealEnvelope.jsx'

export default function App() {
  const payload = useHashPayload()
  const [theme, toggleTheme] = useTheme()
  const msg = (payload?.msg || '').trim()

  function reset() {
    window.location.hash = ''
  }

  let view
  if (!msg) {
    view = <Composer />
  } else {
    const to = (payload.to || '').trim()
    const from = (payload.from || '').trim()
    const noteColor = payload.nc
    const key = window.location.hash
    const props = { key, to, msg, from, noteColor, theme, onReset: reset }

    if (payload.d === 'bloom') view = <RevealBloom {...props} />
    else if (payload.d === 'envelope') view = <RevealEnvelope {...props} />
    else view = <RevealGarden {...props} />
  }

  return (
    <>
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      {view}
    </>
  )
}
