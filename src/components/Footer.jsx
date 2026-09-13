import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import socialLinks from '../data/socials'
import './Footer.css'

const footerNavItems = [
  { label: 'Home', sectionId: 'home' },
  { label: 'About', sectionId: 'about' },
  { label: 'Work', sectionId: 'work' },
  { label: 'Experience', sectionId: 'experience' },
  { label: 'Contact', sectionId: 'contact' }
]

function Footer() {
  useScrollReveal()
  const location = useLocation()
  const navigate = useNavigate()

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    })
  }

  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } })
    } else {
      if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        const el = document.getElementById(sectionId)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }

  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="footer-container container">
        {/* Main Footer Editorial Columns */}
        <div className="footer-columns reveal-on-scroll">
          {/* Column 1: Brand & Profile Info */}
          <div className="footer-col footer-col-brand">
            <Link to="/" className="footer-brand-mark">
              MR.
            </Link>
            <p className="footer-brand-role">UI/UX &amp; Visual Designer</p>
            <p className="footer-brand-sub">Informatics Graduate</p>
            <p className="footer-brand-location">Indonesia</p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="footer-col footer-col-nav">
            <h3 className="footer-col-title">Navigation</h3>
            <ul className="footer-links-list">
              {footerNavItems.map((item) => (
                <li key={item.sectionId}>
                  <a
                    href={`/#${item.sectionId}`}
                    className="footer-nav-link"
                    onClick={(e) => handleNavClick(e, item.sectionId)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect & Social Links */}
          <div className="footer-col footer-col-connect">
            <h3 className="footer-col-title">Connect</h3>
            <ul className="footer-links-list">
              {socialLinks.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.href}
                    className="footer-social-link"
                    target={social.isExternal ? '_blank' : undefined}
                    rel={social.isExternal ? 'noopener noreferrer' : undefined}
                  >
                    {social.label}
                    {social.isExternal && <span className="footer-link-arrow" aria-hidden="true"> ↗</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="footer-divider" />

        {/* Bottom Metadata Row */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 Mohammad Rafi Arkana Raihan. All rights reserved.
          </p>
          <p className="footer-statement">Designed &amp; built with intention.</p>
          <button
            type="button"
            className="footer-back-to-top interactive"
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
          >
            Back to top <span className="back-top-arrow" aria-hidden="true">↑</span>
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
