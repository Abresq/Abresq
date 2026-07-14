import { useEffect, useRef, useState } from 'react'

export default function CursorSpotlight() {
  const spotlightRef = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (isTouch) return
    setEnabled(true)

    const onMouseMove = (e) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`
      }
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  if (!enabled) return null

  return <div ref={spotlightRef} className="cursor-spotlight" aria-hidden="true" />
}
