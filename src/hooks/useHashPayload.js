import { useEffect, useState } from 'react'
import { decodePayload } from '../payload.js'

function readHashPayload() {
  const hash = window.location.hash.replace(/^#/, '')
  if (!hash.startsWith('p=')) return null
  return decodePayload(hash.slice(2))
}

export default function useHashPayload() {
  const [payload, setPayload] = useState(readHashPayload)

  useEffect(() => {
    function onHashChange() {
      setPayload(readHashPayload())
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return payload
}
