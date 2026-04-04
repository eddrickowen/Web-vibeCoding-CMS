'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Cursor from './Cursor'
import Nav from './Nav'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Artists from './Artists'
import Stats from './Stats'
import Contact from './Contact'
import Footer from './Footer'

gsap.registerPlugin(ScrollTrigger)

export default function PageClient({ data }: { data: any }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const onLoad = () => ScrollTrigger.refresh()
    window.addEventListener('load', onLoad)

    if (prefersReduced) {
      document.querySelectorAll<HTMLElement>('[data-reveal]').forEach(el => {
        el.style.opacity = '1'
        el.style.transform = 'none'
      })
      return () => window.removeEventListener('load', onLoad)
    }

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach(el => {
        const delay = parseFloat(el.dataset.revealDelay || '0') * 0.1
        gsap.fromTo(
          el,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              once: true,
            },
          }
        )
      })
    })

    const STRENGTH = 0.38
    const magneticHandlers: { el: Element; moveHandler: (e: MouseEvent) => void; leaveHandler: () => void }[] = []

    document.querySelectorAll('[data-magnetic]').forEach(el => {
      const moveHandler = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect()
        const dx = (e.clientX - (rect.left + rect.width / 2)) * STRENGTH
        const dy = (e.clientY - (rect.top + rect.height / 2)) * STRENGTH
        gsap.to(el, { x: dx, y: dy, duration: 0.4, ease: 'power2.out' })
      }
      const leaveHandler = () => {
        gsap.to(el, { x: 0, y: 0, duration: 0.8, ease: 'elastic.out(1, 0.4)' })
      }
      el.addEventListener('mousemove', moveHandler)
      el.addEventListener('mouseleave', leaveHandler)
      magneticHandlers.push({ el, moveHandler, leaveHandler })
    })

    return () => {
      window.removeEventListener('load', onLoad)
      ctx.revert()
      magneticHandlers.forEach(({ el, moveHandler, leaveHandler }) => {
        el.removeEventListener('mousemove', moveHandler)
        el.removeEventListener('mouseleave', leaveHandler)
      })
    }
  }, [])

  return (
    <div className="public-site page-ready">
      <Cursor />
      <Nav data={data.siteSettings} />
      <main>
        <Hero data={data.hero} />
        <About data={data.about} />
        <Services data={data.services} />
        <Artists data={data.artists} />
        <Stats data={data.stats} />
        <Contact data={data.contact} siteSettings={data.siteSettings} />
      </main>
      <Footer data={data.siteSettings} />
    </div>
  )
}
