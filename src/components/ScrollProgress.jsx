import { useEffect, useRef } from 'react'

export default function ScrollProgress() {
  const barRef = useRef(null)

  useEffect(() => {
    let raf = null

    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = null
        const doc = document.documentElement
        const max = doc.scrollHeight - doc.clientHeight
        const pct = max > 0 ? (window.scrollY / max) * 100 : 0
        if (barRef.current) barRef.current.style.width = `${pct}%`
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return <div ref={barRef} className="scroll-progress" />
}
