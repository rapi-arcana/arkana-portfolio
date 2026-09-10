import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import './Navbar.css'

const navigationItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Work', to: '/work' },
  { label: 'Experience', to: '/experience' },
  { label: 'Contact', to: '/contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20)
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('keydown', handleKeyDown)

    // Initial check
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className={`site-header${isScrolled ? ' site-header--scrolled' : ''}`}>
      <nav className={`site-nav${isScrolled ? ' site-nav--scrolled' : ''}`} aria-label="Main navigation">
        <Link className="site-mark" to="/" onClick={closeMenu}>
          MR.
        </Link>

        {/* Always-visible on mobile: Theme toggle (left) + Hamburger (right) */}
        <div className="site-nav-mobile-actions">
          <button
            type="button"
            className="theme-toggle interactive"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? (
              <svg className="theme-toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            ) : (
              <svg className="theme-toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            )}
          </button>

          <button
            className="mobile-menu-toggle interactive"
            type="button"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="hamburger-line" aria-hidden="true" />
            <span className="hamburger-line" aria-hidden="true" />
            <span className="hamburger-line" aria-hidden="true" />
          </button>
        </div>

        {/* Collapsible navigation menu */}
        <div
          className={`site-nav-content${isMenuOpen ? ' site-nav-content--open' : ''}`}
          id="primary-navigation"
        >
          <ul className="site-nav-links">
            {navigationItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}
                  end={item.to === '/'}
                  to={item.to}
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="site-nav-actions">
            <span className="availability" aria-label="Currently available for work">
              <span className="availability-dot" aria-hidden="true" />
              Available
            </span>
            <a
              className="resume-link interactive"
              href="/certificates/Arka%20CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              title="View / Download CV (PDF)"
            >
              Resume
            </a>
            {/* Theme toggle shown in desktop mode inside actions (hidden on mobile via CSS) */}
            <button
              type="button"
              className="theme-toggle theme-toggle--desktop interactive"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {theme === 'dark' ? (
                <svg className="theme-toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </svg>
              ) : (
                <svg className="theme-toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
