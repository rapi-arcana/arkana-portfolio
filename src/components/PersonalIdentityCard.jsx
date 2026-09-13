import { useState, useRef } from 'react'
import profileImage from '../assets/images/profile/profile.jpg'
import './PersonalIdentityCard.css'

export function PersonalIdentityCard() {
  const [isFlipped, setIsFlipped] = useState(false)
  const [imgError, setImgError] = useState(false)
  const wrapperRef = useRef(null)

  function handlePointerMove(e) {
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const card = wrapperRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = -((y - centerY) / centerY) * 4
    const rotateY = ((x - centerX) / centerX) * 5

    card.style.setProperty('--tilt-x', `${rotateX.toFixed(2)}deg`)
    card.style.setProperty('--tilt-y', `${rotateY.toFixed(2)}deg`)
  }

  function handlePointerLeave() {
    const card = wrapperRef.current
    if (!card) return
    card.style.setProperty('--tilt-x', '0deg')
    card.style.setProperty('--tilt-y', '0deg')
  }

  function handleToggleFlip() {
    setIsFlipped(prev => !prev)
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleToggleFlip()
    }
  }

  return (
    <div
      ref={wrapperRef}
      className="identity-card-wrapper reveal-on-scroll reveal-scale"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onClick={handleToggleFlip}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label="Interactive personal identity card. Click or press Enter to flip card."
      aria-expanded={isFlipped}
    >
      <div className="identity-card-tilt">
        <div className={`identity-card-inner ${isFlipped ? 'is-flipped' : ''}`}>

          {/* ================= FRONT SIDE ================= */}
          <div className="identity-card-face identity-card-front glass">
            {/* Lanyard Clip Hole */}
            <div className="identity-card-clip" aria-hidden="true">
              <span className="id-card-hole" />
            </div>

            {/* Card Top Header */}
            <div className="id-header-row">
              <div className="id-brand-tag">
                <span className="id-badge-prefix">MR.</span>
                <span className="id-badge-title">DESIGNER ID</span>
              </div>
              <span className="id-status-badge">
                <span className="status-pulse-dot" aria-hidden="true" />
                ACTIVE
              </span>
            </div>

            {/* Photo - Large Focal Point */}
            <div className="id-photo-frame">
              {!imgError ? (
                <img
                  src={profileImage}
                  alt="Mohammad Rafi Arkana Raihan"
                  className="id-photo-img"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="id-photo-placeholder">
                  <svg className="id-placeholder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
              )}
            </div>

            {/* Name & Role */}
            <div className="id-person-info">
              <h3 className="id-name">
                MOHAMMAD RAFI ARKANA RAIHAN
              </h3>
              <p className="id-role">UI/UX &amp; VISUAL DESIGNER</p>
            </div>

            <div className="id-divider" />

            {/* Education, GPA & Cum Laude */}
            <div className="id-section-group">
              <span className="id-sub-label">EDUCATION</span>
              <p className="id-degree">S1 INFORMATIKA</p>
              <p className="id-institution">Universitas Muhammadiyah Malang</p>
              <div className="id-pills-row">
                <span className="id-pill">GPA 3.90 / 4.00</span>
                <span className="id-pill id-pill--accent">● CUM LAUDE</span>
              </div>
            </div>

            <div className="id-divider" />

            {/* Location */}
            <div className="id-section-group">
              <span className="id-sub-label">LOCATION</span>
              <p className="id-location-text">Malang, Indonesia</p>
            </div>

            <div className="id-divider" />

            {/* Card Index & Flip Hint */}
            <div className="id-card-footer">
              <span className="id-card-corner-num" aria-hidden="true">01 / 02</span>
              <span className="id-flip-hint">FLIP CARD →</span>
            </div>
          </div>

          {/* ================= BACK SIDE ================= */}
          <div className="identity-card-face identity-card-back glass">
            {/* Lanyard Clip Hole */}
            <div className="identity-card-clip" aria-hidden="true">
              <span className="id-card-hole" />
            </div>

            {/* Back Top Content Block */}
            <div className="id-back-content">
              {/* Back Header */}
              <div className="id-back-header">
                <h4 className="id-back-title">CURRENTLY EXPLORING</h4>
                <p className="id-back-subtitle">
                  Core design and technological directions currently under active exploration and development.
                </p>
              </div>

              <div className="id-divider" />

              {/* 5 Compact Exploring Rows */}
              <div className="id-exploring-rows">
                <div className="id-exploring-row">
                  <span className="id-row-num">01</span>
                  <span className="id-row-text">UI/UX DESIGN</span>
                </div>
                <div className="id-exploring-row">
                  <span className="id-row-num">02</span>
                  <span className="id-row-text">VISUAL DESIGN</span>
                </div>
                <div className="id-exploring-row">
                  <span className="id-row-num">03</span>
                  <span className="id-row-text">CREATIVE TECHNOLOGY</span>
                </div>
                <div className="id-exploring-row">
                  <span className="id-row-num">04</span>
                  <span className="id-row-text">BRANDING</span>
                </div>
                <div className="id-exploring-row">
                  <span className="id-row-num">05</span>
                  <span className="id-row-text">DIGITAL PRODUCTS</span>
                </div>
              </div>
            </div>

            {/* Back Footer */}
            <div className="id-card-footer">
              <span className="id-card-corner-num" aria-hidden="true">02 / 02</span>
              <span className="id-flip-hint">FLIP BACK →</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default PersonalIdentityCard
