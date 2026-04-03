import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const state   = useRef({ mouseX: 0, mouseY: 0, ringX: 0, ringY: 0, rafId: null })

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const LERP = 0.11
    const s = state.current

    const onMove = e => {
      s.mouseX = e.clientX
      s.mouseY = e.clientY
      dot.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`
    }

    const loop = () => {
      s.ringX += (s.mouseX - s.ringX) * LERP
      s.ringY += (s.mouseY - s.ringY) * LERP
      ring.style.transform = `translate(calc(${s.ringX}px - 50%), calc(${s.ringY}px - 50%))`
      s.rafId = requestAnimationFrame(loop)
    }

    // Hover detection via event delegation
    const onOver = e => {
      if (e.target.closest('a, button, [data-magnetic], .artist-card, .service-card')) {
        ring.classList.add('is-hovered')
      }
    }
    const onOut = e => {
      if (e.target.closest('a, button, [data-magnetic], .artist-card, .service-card')) {
        ring.classList.remove('is-hovered')
      }
    }

    const onLeaveDoc  = () => ring.classList.add('is-hidden')
    const onEnterDoc  = () => ring.classList.remove('is-hidden')

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeaveDoc)
    document.addEventListener('mouseenter', onEnterDoc)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    loop()

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeaveDoc)
      document.removeEventListener('mouseenter', onEnterDoc)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      cancelAnimationFrame(s.rafId)
    }
  }, [])

  return (
    <div id="cursor" aria-hidden="true">
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </div>
  )
}
