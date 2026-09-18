import { useEffect, useState } from 'react'

function readHash() {
  return new URLSearchParams(window.location.hash.replace(/^#/, ''))
}

export default function useHashParams() {
  const [params, setParams] = useState(readHash)

  useEffect(() => {
    function onHashChange() {
      setParams(readHash())
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return params
}
