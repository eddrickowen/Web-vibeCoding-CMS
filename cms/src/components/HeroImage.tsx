'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function HeroImage({
  src,
  alt,
}: {
  src?: string
  alt?: string
}) {
  const outerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<HTMLDivElement>(null)

  // Clip-path reveal on mount
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    gsap.set(frameRef.current, { clipPath: 'inset(0 100% 0 0)' })
    const tween = gsap.to(frameRef.current, {
      clipPath: 'inset(0 0% 0 0)',
      duration: 1.4,
      ease: 'power4.inOut',
      delay: 0.75,
    })
    return () => { tween.kill() }
  }, [])

  // 3D mouse-tilt + inner parallax
  useEffect(() => {
    const el = outerRef.current
    if (!el) return

    // Set perspective once rather than on every tween
    gsap.set(el, { transformPerspective: 1100 })

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const dx = (e.clientX - (rect.left + rect.width  / 2)) / (rect.width  / 2)
      const dy = (e.clientY - (rect.top  + rect.height / 2)) / (rect.height / 2)

      gsap.to(el, {
        rotateY: dx * 9,
        rotateX: -dy * 6,
        duration: 0.55,
        ease: 'power3.out',
      })
      gsap.to(innerRef.current, {
        x: dx * 12,
        y: dy * 9,
        scale: 1.04,
        duration: 0.7,
        ease: 'power3.out',
      })
    }

    const onLeave = () => {
      gsap.to(el, {
        rotateY: 0, rotateX: 0,
        duration: 1.2,
        ease: 'elastic.out(1, 0.45)',
      })
      gsap.to(innerRef.current, {
        x: 0, y: 0, scale: 1,
        duration: 1.2,
        ease: 'elastic.out(1, 0.45)',
      })
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  const imageSrc =
    src ||
    'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=900&q=80&auto=format&fit=crop'

  return (
    <div className="hero-img-outer" ref={outerRef}>
      {/* Decorative offset frame */}
      <div className="hero-img-frame" ref={frameRef}>
        <div className="hero-img-inner" ref={innerRef}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imageSrc} alt={alt || 'Artist'} className="hero-img-photo" loading="eager" fetchPriority="high" />
          {/* Grain overlay */}
          <div className="hero-img-grain" aria-hidden="true" />
          {/* Vignette */}
          <div className="hero-img-vignette" aria-hidden="true" />
        </div>
      </div>

      {/* Corner accents */}
      <span className="hero-img-corner hero-img-corner--tl" aria-hidden="true" />
      <span className="hero-img-corner hero-img-corner--br" aria-hidden="true" />

      {/* Meta label */}
      <div className="hero-img-meta" aria-hidden="true">
        <span className="label">Visual</span>
        <span className="label">001</span>
      </div>
    </div>
  )
}
