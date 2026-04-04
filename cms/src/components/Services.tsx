'use client'

const ICONS: Record<string, React.ReactNode> = {
  music: <svg viewBox="0 0 36 36"><circle cx="18" cy="18" r="10" /><circle cx="18" cy="18" r="4" /><path d="M18 4v4M18 28v4M4 18h4M28 18h4" /></svg>,
  production: <svg viewBox="0 0 36 36"><rect x="4" y="14" width="4" height="16" rx="1" /><rect x="11" y="8" width="4" height="22" rx="1" /><rect x="18" y="11" width="4" height="19" rx="1" /><rect x="25" y="5" width="4" height="23" rx="1" /></svg>,
  distribution: <svg viewBox="0 0 36 36"><circle cx="18" cy="18" r="13" /><path d="M18 5C18 5 14 11 14 18s4 13 4 13M18 5c0 0 4 6 4 13s-4 13-4 13M5 18h26" /><path d="M7 11h22M7 25h22" /></svg>,
  marketing: <svg viewBox="0 0 36 36"><path d="M6 12l12-7 12 7v12l-12 7-12-7z" /><path d="M6 12l12 7 12-7M18 19v13" /></svg>,
  microphone: <svg viewBox="0 0 36 36" fill="none"><rect x="13" y="4" width="10" height="16" rx="5" strokeWidth="1.5" /><path d="M8 18a10 10 0 0 0 20 0" strokeWidth="1.5" strokeLinecap="round" /><line x1="18" y1="28" x2="18" y2="33" strokeWidth="1.5" strokeLinecap="round" /><line x1="13" y1="33" x2="23" y2="33" strokeWidth="1.5" strokeLinecap="round" /></svg>,
  headphones: <svg viewBox="0 0 36 36" fill="none"><path d="M6 20v-2a12 12 0 0 1 24 0v2" strokeWidth="1.5" strokeLinecap="round" /><rect x="4" y="20" width="6" height="10" rx="3" strokeWidth="1.5" /><rect x="26" y="20" width="6" height="10" rx="3" strokeWidth="1.5" /></svg>,
  star: <svg viewBox="0 0 36 36" fill="none"><polygon points="18,4 22,14 33,14 24,21 27,32 18,25 9,32 12,21 3,14 14,14" strokeWidth="1.5" strokeLinejoin="round" /></svg>,
  chart: <svg viewBox="0 0 36 36" fill="none"><polyline points="4,28 12,18 20,22 32,8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><line x1="4" y1="32" x2="32" y2="32" strokeWidth="1.5" strokeLinecap="round" /></svg>,
  handshake: <svg viewBox="0 0 36 36" fill="none"><path d="M2 14h7l4-4h6l4 4h7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 14v8l5 5h5l5-5 5 5h5l5-5v-8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  video: <svg viewBox="0 0 36 36" fill="none"><rect x="2" y="8" width="22" height="20" rx="2" strokeWidth="1.5" /><path d="M24 15l10-6v18l-10-6V15z" strokeWidth="1.5" strokeLinejoin="round" /></svg>,
  broadcast: <svg viewBox="0 0 36 36" fill="none"><circle cx="18" cy="20" r="3" strokeWidth="1.5" /><path d="M11 27a10 10 0 0 1 0-14" strokeWidth="1.5" strokeLinecap="round" /><path d="M25 27a10 10 0 0 0 0-14" strokeWidth="1.5" strokeLinecap="round" /><path d="M7 31a16 16 0 0 1 0-22" strokeWidth="1.5" strokeLinecap="round" /><path d="M29 31a16 16 0 0 0 0-22" strokeWidth="1.5" strokeLinecap="round" /></svg>,
  dollar: <svg viewBox="0 0 36 36" fill="none"><line x1="18" y1="4" x2="18" y2="32" strokeWidth="1.5" strokeLinecap="round" /><path d="M11 10h9a6 6 0 0 1 0 12H9a6 6 0 0 0 0 12h10" strokeWidth="1.5" strokeLinecap="round" /></svg>,
}

const FALLBACK_ICON = <svg viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="13" strokeWidth="1.5" /><path d="M18 12v6l4 2" strokeWidth="1.5" strokeLinecap="round" /></svg>

export default function Services({ data = [] }: { data?: any[] }) {
  return (
    <section id="services" className="services section-pad">
      <div className="container">
        <div className="services-header">
          <span className="label section-label" data-reveal>002 — What We Do</span>
          <h2 className="heading" data-reveal data-reveal-delay="1">
            Full-spectrum<br />artist support
          </h2>
        </div>
        <div className="services-grid">
          {data.map((service: any, i: number) => (
            <article className="service-card" key={service.id || service.title} data-reveal data-reveal-delay={i + 1}>
              <span className="service-number mono-sm">{String(i + 1).padStart(2, '0')}</span>
              <div className="service-icon" aria-hidden="true">
                {ICONS[service.icon] || FALLBACK_ICON}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <div className="service-reveal">
                <p className="service-desc">{service.description}</p>
                <a href="#contact" className="service-link label">Start a conversation →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
