import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './CollaborationCTA.css'

function CollaborationCTA() {
  useScrollReveal()

  return (
    <section className="collaboration-cta-section" aria-labelledby="collaboration-cta-heading">
      <div className="collaboration-cta-container container">
        <div className="collaboration-cta-card glass reveal-on-scroll reveal-scale">
          <div className="collaboration-cta-content">
            <p className="collaboration-cta-eyebrow">Open to Collaboration</p>

            <h2 id="collaboration-cta-heading" className="collaboration-cta-heading">
              Let&apos;s make something meaningful.
            </h2>

            <p className="collaboration-cta-text">
              Have a project, idea, or opportunity in mind? I&apos;d love to hear about it.
            </p>

            <div className="collaboration-cta-actions">
              <Link className="btn btn-primary interactive" to="/contact">
                Let&apos;s Talk <span className="btn-arrow" aria-hidden="true">→</span>
              </Link>
              <a
                className="btn btn-secondary glass interactive"
                href="mailto:rafiarkana1122@gmail.com"
              >
                Email Me <span className="btn-arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CollaborationCTA
