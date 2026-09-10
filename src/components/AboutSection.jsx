import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { PersonalIdentityCard } from './PersonalIdentityCard'
import './AboutSection.css'

function AboutSection() {
  useScrollReveal()

  return (
    <section className="about-section" aria-labelledby="about-heading">
      <div className="about-container container">
        {/* Left Column: Interactive 3D Identity Card */}
        <div className="about-left-col">
          {/* Interactive 3D Personal Identity Card */}
          <PersonalIdentityCard />
        </div>

        {/* Right Column: About Content */}
        <div className="about-right-col">
          <div className="about-header reveal-on-scroll">
            <p className="about-label">About</p>
            <h2 id="about-heading" className="about-title">
              About Me
            </h2>
          </div>

          <div className="about-body">
            <div className="about-intro reveal-on-scroll reveal-stagger-1">
              <p className="about-paragraph about-paragraph--lead">
                Hi, I&apos;m Mohammad Rafi Arkana Raihan — an Informatics graduate with a strong interest in design, particularly in creating digital interfaces, visual communication, and meaningful digital experiences.
              </p>
              <p className="about-paragraph">
                My background in technology helps me understand how products are built, while my interest in design allows me to focus on how they look, feel, and communicate. I work across UI/UX, visual design, branding, and social media.
              </p>
            </div>

            <div className="about-actions reveal-on-scroll reveal-stagger-2">
              <Link className="about-cta glass interactive" to="/about">
                More about me <span className="btn-arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
