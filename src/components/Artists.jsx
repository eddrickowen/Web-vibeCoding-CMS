import { getMediaURL } from '../lib/api'

function ArtistCard({ artist, delay }) {
  const imgSrc = getMediaURL(artist.image) || ''
  const altText = artist.image?.alt || artist.alt || `${artist.name} — ${artist.genre}`

  return (
    <article className="artist-card" data-reveal data-reveal-delay={delay}>
      <div className="artist-card-img-wrap">
        <img
          className="artist-card-img"
          src={imgSrc}
          alt={altText}
          loading="lazy"
        />
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

export default function Artists({ data = [] }) {
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
          {data.map((artist, i) => (
            <ArtistCard key={artist.id || artist.name} artist={artist} delay={(i % 3) + 1} />
          ))}
        </div>

      </div>
    </section>
  )
}
