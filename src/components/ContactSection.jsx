import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import socialLinks from '../data/socials'
import './ContactSection.css'

function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  useScrollReveal()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (e.target.checkValidity()) {
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
    }
  }

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      <div className="contact-container container">
        {/* Left Column: Contact Info & Status */}
        <div className="contact-info reveal-on-scroll">
          <div className="contact-title-group">
            <p className="contact-label">Contact</p>
            <h2 id="contact-heading" className="contact-title">
              Get in Touch
            </h2>
          </div>

          <div className="contact-availability-badge" aria-label="Work Availability Status">
            <span className="availability-dot" aria-hidden="true" />
            <span>Currently open to opportunities</span>
          </div>

          <p className="contact-description">
            Have a project, collaboration, or opportunity in mind? Feel free to reach out.
          </p>

          <div className="contact-links-group">
            <h3 className="contact-links-heading">Contact Details &amp; Socials</h3>
            <ul className="contact-links-list">
              {socialLinks.map((link) => (
                <li key={link.id} className="contact-link-item">
                  <span className="contact-link-label">{link.label}</span>
                  <a
                    href={link.href}
                    className="contact-link-anchor"
                    target={link.isExternal ? '_blank' : undefined}
                    rel={link.isExternal ? 'noopener noreferrer' : undefined}
                  >
                    {link.value}
                    {link.isExternal && <span className="external-arrow" aria-hidden="true"> ↗</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="contact-form-wrapper reveal-on-scroll reveal-scale reveal-stagger-1">
          <div className="contact-form-card glass">
            {submitted ? (
              <div className="contact-success-state" role="status" aria-live="polite">
                <div className="success-icon-wrapper" aria-hidden="true">
                  <svg className="success-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="success-title">Message Received</h3>
                <p className="success-text">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
                <button
                  type="button"
                  className="btn btn-secondary glass interactive"
                  onClick={() => setSubmitted(false)}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate={false}>
                <div className="form-field">
                  <label htmlFor="contact-name" className="form-label">
                    Name <span className="required-mark" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="contact-email" className="form-label">
                    Email <span className="required-mark" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="contact-message" className="form-label">
                    Message <span className="required-mark" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    className="form-input form-textarea"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                <button type="submit" className="btn btn-primary interactive form-submit-btn">
                  Send Message <span className="btn-arrow" aria-hidden="true">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
