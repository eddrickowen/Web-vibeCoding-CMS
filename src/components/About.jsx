import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function About({ data = {} }) {
  const statementRef = useRef(null)

  const line1 = data.statementLine1 || "We don't discover artists."
  const line2 = data.statementLine2 || 'We build careers'
  const line3 = data.statementLine3 || 'that outlast trends.'
  const para1 = data.bodyParagraph1 || 'Founded in 2009, Meridian Music Group has spent fifteen years at the intersection of artistic vision and commercial intelligence.'
  const para2 = data.bodyParagraph2 || 'Our roster spans genres but shares a philosophy: music that earns its audience rather than gaming an algorithm.'

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const statement = statementRef.current

    const ctx = gsap.context(() => {
      if (prefersReduced) {
        gsap.set('.about-statement .hero-line-inner', { y: '0%' })
        return
      }

      gsap.to('.about-statement .hero-line-inner', {
        y: '0%',
        duration: 1.1,
        ease: 'power4.out',
        stagger: 0.13,
        scrollTrigger: {
          trigger: statement,
          start: 'top 82%',
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" className="about section-pad">
      <div className="container">

        <span className="label section-label" data-reveal>001 — Mission</span>

        <div className="about-statement" ref={statementRef}>
          <div className="line-wrap">
            <p className="display-lg hero-line-inner">{line1}</p>
          </div>
          <div className="line-wrap">
            <p className="display-lg hero-line-inner">{line2}</p>
          </div>
          <div className="line-wrap">
            <p className="display-lg hero-line-inner is-accent">{line3}</p>
          </div>
        </div>

        <div className="about-body">
          <div data-reveal data-reveal-delay="1">
            <p className="body-text">{para1}</p>
          </div>
          <div data-reveal data-reveal-delay="2">
            <p className="body-text">{para2}</p>
          </div>
        </div>

      </div>
    </section>
  )
}
