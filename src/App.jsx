import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Artists from './components/Artists'
import Stats from './components/Stats'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PageSkeleton from './components/PageSkeleton'
import { useSiteData } from './hooks/useSiteData'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const { data } = useSiteData()

  // Global: ScrollReveal + MagneticModule — runs after real content mounts
  useEffect(() => {
    if (!data) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Refresh ScrollTrigger after full page load
    const onLoad = () => ScrollTrigger.refresh()
    window.addEventListener('load', onLoad)

    if (prefersReduced) {
      document.querySelectorAll('[data-reveal]').forEach(el => {
        el.style.opacity = '1'
        el.style.transform = 'none'
      })
      // Still need to clean up the load listener even in reduced-motion path
      return () => window.removeEventListener('load', onLoad)
    }

    // ScrollReveal — all [data-reveal] elements across all components
    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-reveal]').forEach(el => {
        const delay = parseFloat(el.dataset.revealDelay || 0) * 0.1
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

    // Magnetic buttons
    const STRENGTH = 0.38
    const magneticEls = document.querySelectorAll('[data-magnetic]')

    function onMove(el, e) {
      const rect = el.getBoundingClientRect()
      const dx = (e.clientX - (rect.left + rect.width / 2)) * STRENGTH
      const dy = (e.clientY - (rect.top + rect.height / 2)) * STRENGTH
      gsap.to(el, { x: dx, y: dy, duration: 0.4, ease: 'power2.out' })
    }

    function onLeave(el) {
      gsap.to(el, { x: 0, y: 0, duration: 0.8, ease: 'elastic.out(1, 0.4)' })
    }

    const magneticHandlers = []
    magneticEls.forEach(el => {
      const moveHandler = e => onMove(el, e)
      const leaveHandler = () => onLeave(el)
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
  }, [data])

  if (!data) {
    return (
      <>
        <Cursor />
        <main><PageSkeleton /></main>
      </>
    )
  }

  return (
    <div className="page-ready">
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
