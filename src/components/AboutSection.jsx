import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { PersonalIdentityCard } from './PersonalIdentityCard'
import './AboutSection.css'

function AboutSection() {
  useScrollReveal()

  return (
    <section className="about-section" id="about" aria-labelledby="about-heading">
      <div className="about-container container">
        
        {/* Section Header */}
        <div className="about-section-header reveal-on-scroll">
          <span className="about-section-label">ABOUT</span>
          <h2 id="about-heading" className="about-section-title">
            A designer with a<br />technical background.
          </h2>
        </div>

        {/* Two-Column Grid: ID Card (Left) vs Profile & Credentials (Right) */}
        <div className="about-main-grid">
          {/* LEFT COLUMN: Designer ID Card */}
          <div className="about-left-col">
            <PersonalIdentityCard />
          </div>

          {/* RIGHT COLUMN: Profile Content */}
          <div className="about-right-col">
            {/* Fit-Content Label */}
            <div className="about-profile-badge reveal-on-scroll">
              <span className="about-profile-label">PROFILE</span>
            </div>

            {/* Headline */}
            <h3 className="about-profile-headline reveal-on-scroll reveal-stagger-1">
              Hi, I&apos;m Mohammad Rafi<br />Arkana Raihan.
            </h3>

            {/* Editorial Description Paragraphs */}
            <div className="about-profile-body reveal-on-scroll reveal-stagger-2">
              <p className="about-profile-text">
                Hi, I&apos;m Mohammad Rafi Arkana Raihan — an Informatics graduate with a strong interest in design, particularly in creating digital interfaces, visual communication, and meaningful digital experiences.
              </p>
              <p className="about-profile-text">
                My background in technology helps me understand how products are built, while my interest in design allows me to focus on how they look, feel, and communicate. I work across UI/UX, visual design, branding, and social media.
              </p>
            </div>

            {/* Compact Credential Cards: Certification & Resume / CV */}
            <div className="about-credentials-row reveal-on-scroll reveal-stagger-3">
              {/* Card 1: Certification */}
              <div className="about-credential-card glass">
                <div className="credential-top-meta">
                  <span className="credential-num">01</span>
                  <span className="credential-tag">CERTIFICATION</span>
                </div>
                <h4 className="credential-title">User Experience Design Fundamental</h4>
                <p className="credential-subtitle">IBM SkillsBuild · 2026</p>
                <a
                  href="/certificates/Certificate%20_%20SkillsBuild.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="credential-link interactive"
                  title="View IBM SkillsBuild Certificate (PDF)"
                >
                  View Certificate <span className="link-arrow" aria-hidden="true">→</span>
                </a>
              </div>

              {/* Card 2: Resume / CV */}
              <div className="about-credential-card glass">
                <div className="credential-top-meta">
                  <span className="credential-num">02</span>
                  <span className="credential-tag">RESUME / CV</span>
                </div>
                <h4 className="credential-title">Latest CV</h4>
                <p className="credential-subtitle">CV · 2026</p>
                <a
                  href="/certificates/Arka%20CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="credential-link interactive"
                  title="View / Download CV (PDF)"
                >
                  View CV <span className="link-arrow" aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Section: Design Philosophy */}
        <div className="about-philosophy-section reveal-on-scroll">
          <span className="philosophy-label">DESIGN PHILOSOPHY</span>
          <blockquote className="philosophy-content">
            <p className="philosophy-quote-head">
              &ldquo;Good design doesn&apos;t call attention to itself.&rdquo;
            </p>
            <p className="philosophy-quote-body">
              &ldquo;Whether I&apos;m designing a product interface or a visual identity, I aim for work that feels considered — intentional in every detail, honest about what it is, and clear to the people it&apos;s made for.&rdquo;
            </p>
          </blockquote>
        </div>

      </div>
    </section>
  )
}

export default AboutSection
