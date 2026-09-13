import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import './Navbar.css'

const navigationItems = [
  { label: 'Home', sectionId: 'home' },
  { label: 'About', sectionId: 'about' },
  { label: 'Work', sectionId: 'work' },
  { label: 'Experience', sectionId: 'experience' },
  { label: 'Contact', sectionId: 'contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20)

      if (location.pathname === '/') {
        const sections = ['home', 'about', 'work', 'experience', 'contact']
        const scrollPosition = window.scrollY + 200

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i])
          if (section) {
            const top = section.offsetTop
            if (scrollPosition >= top) {
              setActiveSection(sections[i])
              break
            }
          }
        }
      } else {
        setActiveSection('')
      }
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
  }, [location.pathname])

  // Handle cross-page navigation or hash-based smooth scrolling
  useEffect(() => {
    if (location.pathname === '/') {
      const targetId = location.hash ? location.hash.replace('#', '') : location.state?.scrollTo
      if (targetId) {
        setTimeout(() => {
          if (targetId === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          } else {
            const el = document.getElementById(targetId)
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' })
            }
          }
        }, 100)
      }
    }
  }, [location])

  function closeMenu() {
    setIsMenuOpen(false)
  }

  function handleNavClick(e, sectionId) {
    e.preventDefault()
    closeMenu()

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
    <header className={`site-header${isScrolled ? ' site-header--scrolled' : ''}`}>
      <nav className={`site-nav${isScrolled ? ' site-nav--scrolled' : ''}`} aria-label="Main navigation">
        <Link
          className="site-mark"
          to="/"
          onClick={(e) => {
            closeMenu()
            if (location.pathname === '/') {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
          }}
        >
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
              <li key={item.sectionId}>
                <a
                  className={activeSection === item.sectionId ? 'nav-link nav-link--active' : 'nav-link'}
                  href={`/#${item.sectionId}`}
                  onClick={(e) => handleNavClick(e, item.sectionId)}
                >
                  {item.label}
                </a>
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
