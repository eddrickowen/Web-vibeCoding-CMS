'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@'
const scrambleTimers = new Map<Element, ReturnType<typeof setInterval>>()

function scramble(el: Element) {
  const original = (el as HTMLElement).dataset.original || el.textContent?.trim() || ''
  ;(el as HTMLElement).dataset.original = original
  let iterations = 0
  clearInterval(scrambleTimers.get(el))
  scrambleTimers.set(el, setInterval(() => {
    el.textContent = original
      .split('')
      .map((char, i) => {
        if (char === ' ') return ' '
        if (i < Math.floor(iterations)) return original[i]
        return CHARS[Math.floor(Math.random() * CHARS.length)]
      })
      .join('')
    iterations += 0.45
    if (iterations > original.length) {
      clearInterval(scrambleTimers.get(el))
      scrambleTimers.delete(el)
      el.textContent = original
    }
  }, 36))
}

export default function Nav({ data = {} }: { data?: any }) {
  const companyName = data.companyName || 'MERIDIAN'

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const nav = document.getElementById('nav')
    if (!nav) return

    let st: ReturnType<typeof ScrollTrigger.create> | undefined
    if (!prefersReduced) {
      st = ScrollTrigger.create({
        start: 'top -80px',
        onEnter:     () => nav.classList.add('is-scrolled'),
        onLeaveBack: () => nav.classList.remove('is-scrolled'),
      })
    } else {
      nav.classList.add('is-scrolled')
    }

    const handlers: { link: Element; handler: () => void }[] = []
    document.querySelectorAll('[data-scramble]').forEach(link => {
      const handler = () => scramble(link)
      link.addEventListener('mouseenter', handler)
      handlers.push({ link, handler })
    })

    return () => {
      st?.kill()
      handlers.forEach(({ link, handler }) => link.removeEventListener('mouseenter', handler))
      scrambleTimers.forEach(id => clearInterval(id))
      scrambleTimers.clear()
    }
  }, [])

  return (
    <nav className="nav" id="nav" role="navigation" aria-label="Main navigation">
      <div className="nav-inner">
        <a href="#" className="nav-logo" aria-label={`${companyName} — Home`}>{companyName}</a>

        <ul className="nav-links" role="list">
          <li><a href="#about"    className="nav-link" data-scramble>About</a></li>
          <li><a href="#services" className="nav-link" data-scramble>Services</a></li>
          <li><a href="#artists"  className="nav-link" data-scramble>Artists</a></li>
          <li><a href="#contact"  className="nav-link" data-scramble>Contact</a></li>
        </ul>

        <a href="#contact" className="btn btn--ghost btn--sm" data-magnetic aria-label="Get in touch">
          Get in Touch
        </a>
      </div>
    </nav>
  )
}
