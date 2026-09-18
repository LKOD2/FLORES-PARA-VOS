import useHashParams from './hooks/useHashParams.js'
import Composer from './components/Composer.jsx'
import RevealGarden from './components/RevealGarden.jsx'
import RevealBloom from './components/RevealBloom.jsx'

export default function App() {
  const params = useHashParams()
  const msg = (params.get('msg') || '').trim()

  if (!msg) return <Composer />

  const to = (params.get('to') || '').trim()
  const from = (params.get('from') || '').trim()
  const design = params.get('d') === 'bloom' ? 'bloom' : 'garden'

  function reset() {
    window.location.hash = ''
  }

  const key = window.location.hash

  return design === 'bloom' ? (
    <RevealBloom key={key} to={to} msg={msg} from={from} onReset={reset} />
  ) : (
    <RevealGarden key={key} to={to} msg={msg} from={from} onReset={reset} />
  )
}
