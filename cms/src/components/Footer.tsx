'use client'

export default function Footer({ data = {} }: { data?: any }) {
  const companyName = data.companyName || 'MERIDIAN'

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <span className="nav-logo">{companyName}</span>
          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="#about"    className="footer-link">About</a>
            <a href="#services" className="footer-link">Services</a>
            <a href="#artists"  className="footer-link">Artists</a>
            <a href="#contact"  className="footer-link">Contact</a>
          </nav>
          <span className="mono-sm" style={{ color: 'var(--border)' }}>
            &copy; {new Date().getFullYear()} {companyName}
          </span>
        </div>
      </div>
    </footer>
  )
}
