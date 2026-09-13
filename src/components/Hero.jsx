import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useHeroParallax } from '../hooks/useHeroParallax'
import { useHeroMouseLight } from '../hooks/useHeroMouseLight'
import './Hero.css'

import profileImage from '../assets/images/profile/profile.jpg'

function Hero() {
  const [imgError, setImgError] = useState(false)
  const [imgLoaded, setImgLoaded] = useState(false)
  const heroRef = useRef(null)

  useHeroParallax(heroRef)
  useHeroMouseLight(heroRef)

  const profileSrc = profileImage

  return (
    <section className="hero-section" id="home" ref={heroRef} aria-labelledby="hero-title">
      {/* Interactive Mouse-Following Spotlight Layer */}
      <div className="hero-mouse-light" aria-hidden="true" />

      <div className="hero-container container">
        {/* Left Column: Hero Content */}
        <div className="hero-content">
          <div className="hero-eyebrow hero-enter hero-enter-1" aria-label="Role and background">
            <span className="hero-eyebrow-item">UI / UX &amp; VISUAL DESIGNER</span>
            <span className="hero-eyebrow-divider" aria-hidden="true">•</span>
            <span className="hero-eyebrow-item">INFORMATICS BACKGROUND</span>
          </div>

          <h1 id="hero-title" className="hero-title hero-enter hero-enter-2">
            UI/UX &amp;<br />
            Visual<br />
            Designer<span className="hero-title-dot" aria-hidden="true">.</span>
          </h1>

          <div className="hero-description-group">
            <p className="hero-description-main hero-enter hero-enter-3">
              Designing digital experiences, visual identities, and interfaces that make ideas easier to understand.
            </p>

            <p className="hero-description-sub hero-enter hero-enter-4">
              Multidisciplinary designer with a background in Informatics — working across UI/UX, visual design, branding, and digital experiences.
            </p>
          </div>

          <div className="hero-actions hero-enter hero-enter-5">
            <a
              className="btn btn-primary interactive"
              href="#work"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              View My Work <span className="btn-arrow" aria-hidden="true">→</span>
            </a>
            <a
              className="btn btn-secondary glass interactive"
              href="#about"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              About Me <span className="btn-arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Right Column: Hero Portrait Visual Area with Floating Cards */}
        <div className="hero-visual-wrapper">
          <div className="hero-portrait-frame" id="portrait-wrapper">
            {/* Dashed background orbit circle SVG */}
            <svg className="hero-orbit-svg" viewBox="0 0 500 500" fill="none" aria-hidden="true">
              <circle cx="250" cy="250" r="230" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1.2" strokeDasharray="6 8" />
            </svg>

            {/* Main Portrait Photo Card */}
            <div className="hero-portrait-card glass hero-enter hero-enter-6">
              {profileSrc && !imgError ? (
                <img
                  src={profileSrc}
                  alt="Mohammad Rafi Arkana Raihan - UI/UX & Visual Designer"
                  className={`hero-portrait-img ${imgLoaded ? 'is-loaded' : ''}`}
                  fetchPriority="high"
                  decoding="async"
                  onLoad={() => setImgLoaded(true)}
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="hero-portrait-placeholder">
                  <div className="placeholder-icon-wrapper" aria-hidden="true">
                    <svg className="placeholder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <p className="placeholder-title">Replace with your portrait</p>
                  <p className="placeholder-subtitle">src/assets/images/profile.jpg</p>
                </div>
              )}
            </div>

            {/* Floating Glass Card 1: Figma (Upper-Left) */}
            <div className="hero-glass-card card-figma glass hero-enter hero-enter-7">
              <div className="card-icon-container">
                <svg viewBox="0 0 38 57" fill="none" width="18" height="27" aria-hidden="true">
                  <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" fill="#0ACF83" />
                  <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#03A9F4" />
                  <path d="M0 28.5C0 23.2533 4.25329 19 9.5 19H19V38H9.5C4.25329 38 0 33.7467 0 28.5Z" fill="#F24E1E" />
                  <path d="M0 9.5C0 4.25329 4.25329 0 9.5 0H19V19H9.5C4.25329 19 0 14.7467 0 9.5Z" fill="#FF7262" />
                  <path d="M19 0H28.5C33.7467 0 38 4.25329 38 9.5C38 14.7467 33.7467 19 28.5 19H19V0Z" fill="#1ABCFE" />
                </svg>
              </div>
              <div className="card-text-group">
                <h3 className="card-title">Figma</h3>
                <p className="card-sub">UI/UX Design</p>
              </div>
            </div>

            {/* Floating Glass Card 2: Canva (Upper-Right) */}
            <div className="hero-glass-card card-canva glass hero-enter hero-enter-8">
              <div className="card-icon-container">
                <svg viewBox="0 0 32 32" fill="none" width="24" height="24" aria-hidden="true">
                  <defs>
                    <linearGradient id="canvaGradHero" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00C4CC" />
                      <stop offset="100%" stopColor="#7D2AE8" />
                    </linearGradient>
                  </defs>
                  <circle cx="16" cy="16" r="16" fill="url(#canvaGradHero)" />
                  <path d="M19.5 13C18.6 12 17 11.5 15.5 12C12.8 12.8 11.5 15.6 11.5 18.3C11.5 21 13.2 22.3 15.5 22.3C17.8 22.3 19.5 20.6 19.9 18.7" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
              <div className="card-text-group">
                <h3 className="card-title">Canva</h3>
                <p className="card-sub">Visual Design</p>
              </div>
            </div>

            {/* Floating Glass Card 3: Web & Mobile (Lower-Left) */}
            <div className="hero-glass-card card-web-mobile glass hero-enter hero-enter-9">
              <div className="card-icon-container">
                <svg viewBox="0 0 24 24" fill="none" width="22" height="22" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: 'var(--color-accent)' }}>
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <div className="card-text-group">
                <h3 className="card-title">Web &amp; Mobile</h3>
                <p className="card-sub">Digital Experiences</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
