function Bone({ w = '100%', h = '16px', style = {} }) {
  return (
    <div
      className="sk-bone"
      style={{ width: w, height: h, borderRadius: 2, ...style }}
    />
  )
}

function SkHero() {
  return (
    <section className="hero sk-hero" aria-hidden="true">
      <div className="hero-mesh">
        <div className="mesh-blob mesh-blob--1" />
        <div className="mesh-blob mesh-blob--2" />
        <div className="mesh-blob mesh-blob--3" />
      </div>
      <div className="hero-content">
        <Bone w="160px" h="11px" style={{ marginBottom: 40 }} />
        <div style={{ marginBottom: 44 }}>
          <Bone w="55%" h="clamp(52px,8vw,116px)" style={{ marginBottom: 8 }} />
          <Bone w="30%" h="clamp(52px,8vw,116px)" style={{ marginBottom: 8 }} />
          <Bone w="44%" h="clamp(52px,8vw,116px)" />
        </div>
        <Bone w="380px" h="14px" style={{ marginBottom: 10, maxWidth: '90%' }} />
        <Bone w="280px" h="14px" style={{ marginBottom: 52, maxWidth: '90%' }} />
        <div style={{ display: 'flex', gap: 24 }}>
          <Bone w="140px" h="44px" />
          <Bone w="110px" h="44px" />
        </div>
      </div>
    </section>
  )
}

function SkAbout() {
  return (
    <section className="about section-pad" aria-hidden="true">
      <div className="container">
        <Bone w="140px" h="11px" style={{ marginBottom: 64 }} />
        <div style={{ marginBottom: 80 }}>
          <Bone w="72%" h="clamp(36px,5.5vw,76px)" style={{ marginBottom: 8 }} />
          <Bone w="58%" h="clamp(36px,5.5vw,76px)" style={{ marginBottom: 8 }} />
          <Bone w="64%" h="clamp(36px,5.5vw,76px)" />
        </div>
        <div className="about-body">
          <div>
            <Bone h="13px" style={{ marginBottom: 8 }} />
            <Bone h="13px" style={{ marginBottom: 8 }} />
            <Bone w="80%" h="13px" style={{ marginBottom: 8 }} />
            <Bone h="13px" style={{ marginBottom: 8 }} />
            <Bone w="60%" h="13px" />
          </div>
          <div>
            <Bone h="13px" style={{ marginBottom: 8 }} />
            <Bone h="13px" style={{ marginBottom: 8 }} />
            <Bone w="75%" h="13px" style={{ marginBottom: 8 }} />
            <Bone h="13px" style={{ marginBottom: 8 }} />
            <Bone w="50%" h="13px" />
          </div>
        </div>
      </div>
    </section>
  )
}

function SkServices() {
  return (
    <section className="services section-pad" aria-hidden="true">
      <div className="container">
        <div className="services-header">
          <Bone w="140px" h="11px" style={{ marginBottom: 16 }} />
          <Bone w="320px" h="clamp(28px,3.5vw,48px)" style={{ marginBottom: 6 }} />
          <Bone w="220px" h="clamp(28px,3.5vw,48px)" />
        </div>
        <div className="services-grid">
          {[0, 1, 2, 3].map(i => (
            <div key={i} className="service-card" style={{ minHeight: 200 }}>
              <Bone w="24px" h="10px" style={{ marginBottom: 28 }} />
              <Bone w="36px" h="36px" style={{ marginBottom: 28 }} />
              <Bone w="60%" h="22px" style={{ marginBottom: 16 }} />
              <Bone h="12px" style={{ marginBottom: 8 }} />
              <Bone w="80%" h="12px" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SkArtists() {
  return (
    <section className="artists section-pad" aria-hidden="true">
      <div className="container">
        <div className="artists-header">
          <Bone w="120px" h="11px" style={{ marginBottom: 16 }} />
          <Bone w="300px" h="clamp(28px,3.5vw,48px)" style={{ marginBottom: 6 }} />
          <Bone w="220px" h="clamp(28px,3.5vw,48px)" />
        </div>
        <div className="artists-grid">
          {[0, 1, 2, 3, 4, 5].map(i => (
            <div key={i} className="artist-card">
              <div className="artist-card-img-wrap sk-bone" style={{ borderRadius: 0 }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SkStats() {
  return (
    <section className="stats section-pad" aria-hidden="true">
      <div className="container">
        <div className="stats-grid">
          {[0, 1, 2, 3].map(i => (
            <div key={i} className="stat-item">
              <Bone w="80px" h="clamp(36px,5.5vw,76px)" style={{ marginBottom: 14 }} />
              <Bone w="100px" h="11px" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SkContact() {
  return (
    <section className="contact section-pad" aria-hidden="true">
      <div className="container contact-inner">
        <Bone w="100px" h="11px" style={{ marginBottom: 48 }} />
        <div style={{ marginBottom: 40 }}>
          <Bone w="65%" h="clamp(52px,8vw,116px)" style={{ marginBottom: 8 }} />
          <Bone w="50%" h="clamp(52px,8vw,116px)" />
        </div>
        <Bone w="420px" h="13px" style={{ marginBottom: 10, maxWidth: '90%' }} />
        <Bone w="340px" h="13px" style={{ marginBottom: 56, maxWidth: '90%' }} />
        <Bone w="180px" h="52px" style={{ marginBottom: 96 }} />
        <div style={{ display: 'flex', gap: 48, paddingTop: 24, borderTop: '1px solid var(--border)' }}>
          <Bone w="220px" h="12px" />
          <div style={{ display: 'flex', gap: 24 }}>
            <Bone w="72px" h="12px" />
            <Bone w="56px" h="12px" />
            <Bone w="84px" h="12px" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function PageSkeleton() {
  return (
    <>
      <SkHero />
      <SkAbout />
      <SkServices />
      <SkArtists />
      <SkStats />
      <SkContact />
    </>
  )
}
