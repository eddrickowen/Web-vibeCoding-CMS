'use client'

function getMediaURL(image: any): string {
  if (!image) return ''
  if (typeof image === 'string') return image
  if (image.url) return image.url
  return ''
}

function ArtistCard({ artist, delay }: { artist: any; delay: number }) {
  const imgSrc = getMediaURL(artist.image)
  const altText = artist.image?.alt || [artist.name, artist.genre].filter(Boolean).join(' — ') || 'Artist'

  return (
    <article className="artist-card" data-reveal data-reveal-delay={delay}>
      <div className="artist-card-img-wrap">
        {imgSrc && (
          <img
            className="artist-card-img"
            src={imgSrc}
            alt={altText}
            loading="lazy"
          />
        )}
        <div className="artist-overlay" aria-hidden="true">
          <div className="artist-overlay-content">
            <span className="label artist-genre">{artist.genre}</span>
            <h3 className="artist-name">{artist.name}</h3>
            <span className="mono-sm artist-meta">{artist.meta}</span>
            <a href="#contact" className="btn btn--ghost btn--sm">View Profile</a>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function Artists({ data = [] }: { data?: any[] }) {
  return (
    <section id="artists" className="artists section-pad">
      <div className="container">
        <div className="artists-header">
          <span className="label section-label" data-reveal>003 — Roster</span>
          <h2 className="heading" data-reveal data-reveal-delay="1">
            The artists<br />we believe in
          </h2>
        </div>
        <div className="artists-grid">
          {data.map((artist: any, i: number) => (
            <ArtistCard key={artist.id || artist.name} artist={artist} delay={(i % 3) + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
