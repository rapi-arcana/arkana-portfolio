import { Link } from 'react-router-dom'
import aboutPhoto from '../assets/images/profile/about.jpeg'
import './About.css'

const areasOfInterest = [
  'UI/UX Design',
  'Visual Design',
  'Branding',
  'Web Design',
  'Social Media Design'
]

const exploringSkills = [
  'UI/UX Design',
  'Visual Design',
  'Branding',
  'Digital Products',
  'Creative Technology'
]

function About() {
  return (
    <article className="about-page">
      <div className="about-page-container container">
        {/* Page Header */}
        <header className="about-page-header">
          <p className="about-page-eyebrow">About</p>
          <h1 className="about-page-title">
            Designing with intention, building with clarity.
          </h1>
          <p className="about-page-subtitle">
            I&apos;m Mohammad Rafi Arkana Raihan — an Informatics graduate passionate about creating meaningful digital experiences through design.
          </p>
        </header>

        {/* Photo & Bio Grid */}
        <div className="about-hero-grid">
          {/* Real Photo Slot */}
          <div className="about-photo-wrapper">
            <div className="about-photo-frame glass">
              <img
                src={aboutPhoto}
                alt="Mohammad Rafi Arkana Raihan"
                className="about-photo"
                loading="eager"
              />
            </div>
          </div>

          {/* Main Bio Content */}
          <div className="about-bio-content">
            <section className="about-page-section">
              <h2 className="about-section-heading">About Me</h2>
              <div className="bio-lead-group">
                <p className="bio-lead">
                  Hi, I&apos;m Mohammad Rafi Arkana Raihan — an Informatics graduate with a strong interest in design, particularly in creating digital interfaces, visual communication, and meaningful digital experiences.
                </p>
                <p className="bio-text">
                  My background in technology helps me understand how products are built, while my interest in design allows me to focus on how they look, feel, and communicate. I work across UI/UX, visual design, branding, and social media — adapting my approach to what each project actually needs.
                </p>
                <p className="bio-text">
                  I believe good design should feel natural, not forced. It should solve real problems while being visually clear and functionally sound. My technical foundation allows me to collaborate effectively with development teams and make design decisions that are both beautiful and buildable.
                </p>
              </div>

              <div className="about-bio-actions">
                <a
                  href="/certificates/Arka%20CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary interactive"
                  title="View Arka's CV (PDF)"
                >
                  View CV <span className="btn-arrow" aria-hidden="true">↗</span>
                </a>
                <Link to="/contact" className="btn btn-secondary glass interactive">
                  Get in Touch <span className="btn-arrow" aria-hidden="true">→</span>
                </Link>
              </div>
            </section>
          </div>
        </div>

        {/* Background & Philosophy Grid */}
        <div className="about-two-col-grid">
          <section className="about-page-section">
            <h2 className="about-section-heading">Design Philosophy</h2>
            <blockquote className="philosophy-quote">
              Good design doesn&apos;t call attention to itself. Whether I&apos;m designing a product interface or a visual identity, I aim for work that feels considered — intentional in every detail, honest about what it is, and clear to the people it&apos;s made for.
            </blockquote>
          </section>

          <section className="about-page-section">
            <h2 className="about-section-heading">Background</h2>
            <p className="about-section-text">
              Studying Informatics gave me a practical understanding of how digital products work — which means I can collaborate with engineers, read technical constraints, and make design decisions grounded in reality.
            </p>
            <p className="about-location-tag">Based in Indonesia, open to remote work.</p>
          </section>
        </div>

        {/* Currently Exploring */}
        <section className="about-page-section">
          <h2 className="about-section-heading">Currently Exploring</h2>
          <div className="exploring-grid">
            {exploringSkills.map((skill, idx) => (
              <div key={idx} className="exploring-item glass">
                <span className="exploring-bullet" aria-hidden="true">→</span>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Areas of Interest */}
        <section className="about-page-section">
          <h2 className="about-section-heading">Areas of Interest</h2>
          <ul className="interest-tags-list">
            {areasOfInterest.map((area, idx) => (
              <li key={idx} className="interest-tag-item glass">
                <span className="interest-dot" aria-hidden="true">•</span>
                <span>{area}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Education & Certification Grid */}
        <div className="about-two-col-grid">
          {/* Education */}
          <section className="about-page-section">
            <h2 className="about-section-heading">Education</h2>
            <div className="credential-card glass">
              <div className="credential-header">
                <h3 className="credential-degree">S1 Informatika</h3>
                <span className="credential-year">2026</span>
              </div>
              <p className="credential-institution">Universitas Muhammadiyah Malang</p>
              <div className="credential-pills">
                <span className="credential-pill">GPA: 3.90 / 4.00</span>
                <span className="credential-pill credential-pill--accent">Cum Laude</span>
              </div>
            </div>
          </section>

          {/* Certification */}
          <section className="about-page-section">
            <h2 className="about-section-heading">Certification</h2>
            <div className="credential-card glass">
              <div className="credential-header">
                <h3 className="credential-degree">User Experience Design Fundamental</h3>
                <span className="credential-year">2026</span>
              </div>
              <p className="credential-institution">IBM SkillsBuild</p>
              <div className="credential-actions">
                <a
                  href="/certificates/Certificate%20_%20SkillsBuild.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="credential-cert-btn interactive"
                  title="View IBM SkillsBuild Certificate (PDF)"
                >
                  View Certificate <span className="btn-arrow" aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* About Page CTA */}
        <section className="about-page-cta glass">
          <div className="about-cta-content">
            <h2 className="about-cta-title">Ready to collaborate?</h2>
            <p className="about-cta-sub">
              I&apos;m open to UI/UX design and visual design internship opportunities. Let&apos;s create something meaningful together.
            </p>
            <div className="about-cta-actions">
              <Link to="/work" className="btn btn-primary interactive">
                View My Work <span className="btn-arrow" aria-hidden="true">→</span>
              </Link>
              <Link to="/contact" className="btn btn-secondary glass interactive">
                Get in Touch <span className="btn-arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </article>
  )
}

export default About
