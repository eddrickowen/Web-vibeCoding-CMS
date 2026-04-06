'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HeroImage from './HeroImage'

gsap.registerPlugin(ScrollTrigger)

export default function Hero({ data = {} }: { data?: any }) {
  const canvasRef  = useRef<HTMLCanvasElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const label    = data.label     || '— Est. 2009 · Music Group'
  const heroImg   = data.heroImage?.url || ''
  const heroImgAlt = data.heroImage?.alt || 'Artist visual'
  const line1    = data.titleLine1 || 'We shape'
  const line2    = data.titleLine2 || 'sound'
  const line3    = data.titleLine3 || 'into legacy.'
  const subtitle = data.subtitle  || 'A&R, Production, Distribution & Artist Development\nfor artists who refuse to be forgettable.'
  const cta1Text = data.cta1Text  || 'Explore Roster'
  const cta2Text = data.cta2Text  || 'Our Story'

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    const COUNT = 55
    let W = 0, H = 0, rafId = 0

    function Particle(this: any, randomY: boolean) { this.reset(randomY) }
    Particle.prototype.reset = function(randomY: boolean) {
      this.x = Math.random() * W
      this.y = randomY ? Math.random() * H : H + 6
      this.vx = (Math.random() - 0.5) * 0.25
      this.vy = -(Math.random() * 0.35 + 0.1)
      this.r = Math.random() * 1.4 + 0.4
      this.alpha = Math.random() * 0.35 + 0.08
    }

    function resize() {
      W = canvas.width  = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    }

    const particles: any[] = Array.from({ length: COUNT }, () => new (Particle as any)(true))

    function loop() {
      if (!W || !H) { rafId = requestAnimationFrame(loop); return }
      ctx.clearRect(0, 0, W, H)
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.y < -8) p.reset(false)
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(126,184,154,${p.alpha})`
        ctx.fill()
      })
      rafId = requestAnimationFrame(loop)
    }

    resize()
    loop()

    let resizeTimer: ReturnType<typeof setTimeout>
    const onResize = () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(resize, 150) }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(rafId); window.removeEventListener('resize', onResize) }
  }, [])

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const content = contentRef.current

    const ctx = gsap.context(() => {
      if (prefersReduced) {
        gsap.set('.hero .hero-line-inner', { y: '0%' })
        return
      }
      gsap.to('.hero .hero-line-inner', {
        y: '0%', duration: 1.2, ease: 'power4.out', stagger: 0.11, delay: 0.2,
      })
      gsap.from(
        ['.hero-sub', '.hero-ctas'],
        { opacity: 0, y: 20, duration: 0.9, ease: 'power3.out', stagger: 0.12, delay: 0.85 }
      )
      if (content) {
        gsap.to(content, {
          y: '28%', ease: 'none',
          scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true },
        })
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <section id="hero" className="hero" aria-label="Hero">
      <div className="hero-mesh" aria-hidden="true">
        <div className="mesh-blob mesh-blob--1" />
        <div className="mesh-blob mesh-blob--2" />
        <div className="mesh-blob mesh-blob--3" />
      </div>
      <canvas id="particles-canvas" ref={canvasRef} aria-hidden="true" />
      <div className="hero-content" ref={contentRef}>
        <div className="hero-text-col">
          <span className="label hero-label" data-reveal>{label}</span>
          <h1 className="display-xl hero-title" aria-label={`${line1} ${line2} ${line3}`}>
            <span className="line-wrap"><span className="hero-line-inner">{line1}</span></span>
            <span className="line-wrap"><em className="hero-line-inner">{line2}</em></span>
            <span className="line-wrap"><span className="hero-line-inner">{line3}</span></span>
          </h1>
          <p className="body-text hero-sub">
            {subtitle.split('\n').map((line: string, i: number, arr: string[]) => (
              <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
            ))}
          </p>
          <div className="hero-ctas">
            <a href="#artists" className="btn btn--primary" data-magnetic>{cta1Text}</a>
            <a href="#about" className="btn btn--text" aria-label="Our story">
              {cta2Text}
              <svg viewBox="0 0 14 14" aria-hidden="true" focusable="false">
                <path d="M1 7h12M8 3l5 4-5 4" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
        <div className="hero-image-col">
          <HeroImage src={heroImg} alt={heroImgAlt} />
        </div>
      </div>
      <div className="hero-scroll" aria-hidden="true">
        <span className="label">Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
