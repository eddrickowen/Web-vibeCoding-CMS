import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Contact({ data = {}, siteSettings = {} }) {
  const titleRef = useRef(null)

  const line1      = data.titleLine1  || 'Ready to make'
  const line2      = data.titleLine2  || 'something lasting?'
  const bodyText   = data.bodyText    || "Whether you're an artist, a manager, or a brand looking to partner — we want to hear from you."
  const buttonText = data.buttonText  || 'Start a Conversation'
  const email      = siteSettings.email || 'hello@meridianmusicgroup.com'
  const socials    = siteSettings.socialLinks || {}

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const title = titleRef.current

    const ctx = gsap.context(() => {
      if (prefersReduced) {
        gsap.set('.contact-title .hero-line-inner', { y: '0%' })
        return
      }

      gsap.to('.contact-title .hero-line-inner', {
        y: '0%',
        duration: 1.1,
        ease: 'power4.out',
        stagger: 0.13,
        scrollTrigger: {
          trigger: title,
          start: 'top 82%',
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section id="contact" className="contact section-pad">
      <div className="container contact-inner">

        <span className="label section-label" data-reveal>004 — Contact</span>

        <h2
          className="display-xl contact-title"
          ref={titleRef}
          aria-label={`${line1} ${line2}`}
        >
          <span className="line-wrap"><span className="hero-line-inner">{line1}</span></span>
          <span className="line-wrap"><em className="hero-line-inner">{line2}</em></span>
        </h2>

        <div className="contact-body" data-reveal data-reveal-delay="2">
          <p className="body-text">{bodyText}</p>
        </div>

        <div className="contact-cta" data-reveal data-reveal-delay="3">
          <a
            href={`mailto:${email}`}
            className="btn btn--primary btn--lg"
            data-magnetic
            aria-label="Send us an email to start a conversation"
          >
            {buttonText}
          </a>
        </div>

        <div className="contact-meta" data-reveal data-reveal-delay="4">
          <a href={`mailto:${email}`} className="contact-email mono-sm">
            {email}
          </a>
          <div className="contact-socials">
            {socials.instagram && <a href={socials.instagram} className="social-link label">Instagram</a>}
            {socials.spotify   && <a href={socials.spotify}   className="social-link label">Spotify</a>}
            {socials.soundcloud && <a href={socials.soundcloud} className="social-link label">Soundcloud</a>}
          </div>
        </div>

      </div>
    </section>
  )
}
