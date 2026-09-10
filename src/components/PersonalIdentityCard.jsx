import { useState, useRef } from 'react'
import profileImage from '../assets/images/profile/profile.jpg'
import './PersonalIdentityCard.css'

export function PersonalIdentityCard() {
  const [isFlipped, setIsFlipped] = useState(false)
  const [imgError, setImgError] = useState(false)
  const wrapperRef = useRef(null)

  // Handle subtle 3D mouse pointer tilt (Desktop fine pointers only)
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

    // Restrained rotation: rotateX ±4deg, rotateY ±5deg
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
      aria-label="Interactive personal identity card. Click or press Enter to flip between identity and currently exploring."
      aria-expanded={isFlipped}
    >
      {/* 3D Tilt Container Layer */}
      <div className="identity-card-tilt">
        {/* 3D Inner Flip Element */}
        <div className={`identity-card-inner ${isFlipped ? 'is-flipped' : ''}`}>
          
          {/* ================= FRONT SIDE ================= */}
          <div className="identity-card-face identity-card-front glass">
            {/* Lanyard Hole Clip Graphic */}
            <div className="identity-card-clip" aria-hidden="true">
              <span className="id-card-hole" />
            </div>

            {/* Header / Badges */}
            <div className="identity-card-header">
              <div className="id-brand-tag">
                <span className="id-badge-prefix">MR.</span>
                <span className="id-badge-title">DESIGNER ID</span>
              </div>
              <span className="id-status-badge">
                <span className="status-pulse-dot" aria-hidden="true" />
                ACTIVE
              </span>
            </div>

            {/* Photo & Main Identity Group */}
            <div className="identity-front-main">
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

              <div className="id-details">
                <h3 className="id-name">
                  MOHAMMAD RAFI<br />
                  ARKANA RAIHAN
                </h3>
                <p className="id-role">UI/UX &amp; VISUAL DESIGNER</p>
                <p className="id-origin">INFORMATICS · INDONESIA</p>
              </div>
            </div>

            {/* Divider Line */}
            <div className="id-card-divider" />

            {/* Footer Metadata & Click to Flip Affordance */}
            <div className="identity-card-footer">
              <div className="id-discipline-tag">
                <span>UI/UX • VISUAL • DIGITAL</span>
              </div>
              <div className="id-flip-hint">
                <span>FLIP CARD ↻</span>
              </div>
            </div>

            {/* Corner Card Index Indicator */}
            <span className="id-card-corner-num" aria-hidden="true">01 / 02</span>
          </div>

          {/* ================= BACK SIDE ================= */}
          <div className="identity-card-face identity-card-back glass">
            {/* Lanyard Hole Clip Graphic */}
            <div className="identity-card-clip" aria-hidden="true">
              <span className="id-card-hole" />
            </div>

            {/* Back Header */}
            <div className="identity-back-header">
              <span className="id-back-label">CURRENTLY EXPLORING</span>
              <span className="id-card-corner-num" aria-hidden="true">02 / 02</span>
            </div>

            {/* 4 Exploration Areas List */}
            <div className="id-exploring-grid">
              <div className="id-exploring-item">
                <div className="id-exploring-num">01</div>
                <div className="id-exploring-content">
                  <h4 className="id-exploring-title">UI/UX DESIGN</h4>
                  <p className="id-exploring-desc">Designing clearer and more intuitive digital experiences.</p>
                </div>
              </div>

              <div className="id-exploring-item">
                <div className="id-exploring-num">02</div>
                <div className="id-exploring-content">
                  <h4 className="id-exploring-title">VISUAL DESIGN</h4>
                  <p className="id-exploring-desc">Exploring visual systems, composition, and digital aesthetics.</p>
                </div>
              </div>

              <div className="id-exploring-item">
                <div className="id-exploring-num">03</div>
                <div className="id-exploring-content">
                  <h4 className="id-exploring-title">BRANDING</h4>
                  <p className="id-exploring-desc">Exploring identity systems and visual language.</p>
                </div>
              </div>

              <div className="id-exploring-item">
                <div className="id-exploring-num">04</div>
                <div className="id-exploring-content">
                  <h4 className="id-exploring-title">CREATIVE TECHNOLOGY</h4>
                  <p className="id-exploring-desc">Exploring the intersection between design and technology.</p>
                </div>
              </div>
            </div>

            {/* Back Footer Action */}
            <div className="identity-back-footer">
              <span className="id-back-flip-btn">
                FLIP TO FRONT ↻
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default PersonalIdentityCard
