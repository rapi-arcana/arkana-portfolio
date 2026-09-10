import { useState } from 'react'
import { Link } from 'react-router-dom'
import experiences from '../data/experiences'
import './Experience.css'

function Experience() {
  const [expandedId, setExpandedId] = useState('01')

  const toggleExpand = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id))
  }

  return (
    <article className="experience-page">
      <div className="experience-page-container container">
        {/* Page Header */}
        <header className="experience-page-header">
          <div className="experience-header-top">
            <p className="experience-page-eyebrow">Career</p>
            <span className="experience-records-badge">{experiences.length} RECORDS</span>
          </div>
          <h1 className="experience-page-title">Experience</h1>
          <p className="experience-page-description">
            A selection of professional and organizational experience across UI/UX and visual design.
          </p>
        </header>

        {/* Editorial Career Index List */}
        <main className="experience-page-main">
          <div className="career-index-list">
            {experiences.map((item) => {
              const isExpanded = expandedId === item.id

              return (
                <article
                  key={item.id}
                  className={`career-index-row ${isExpanded ? 'career-index-row--expanded' : ''}`}
                >
                  <button
                    type="button"
                    id={`exp-page-header-${item.id}`}
                    className="career-index-trigger"
                    aria-expanded={isExpanded}
                    aria-controls={`exp-page-content-${item.id}`}
                    onClick={() => toggleExpand(item.id)}
                  >
                    <span className="career-index-num">{item.id}</span>

                    <div className="career-index-identity">
                      <h2 className="career-index-role">{item.role}</h2>
                      <p className="career-index-org">
                        {item.organization} <span className="org-dot">•</span> {item.location}
                      </p>
                    </div>

                    <div className="career-index-meta">
                      <span className="career-index-period">{item.period}</span>
                      <span className="career-index-toggle" aria-hidden="true">
                        {isExpanded ? '−' : '+'}
                      </span>
                    </div>
                  </button>

                  <div
                    id={`exp-page-content-${item.id}`}
                    className="career-index-panel-wrapper"
                    role="region"
                    aria-labelledby={`exp-page-header-${item.id}`}
                    aria-hidden={!isExpanded}
                  >
                    <div className="career-index-panel-inner">
                      <p className="career-index-description">{item.description}</p>

                      <div className="career-index-contributions">
                        <h3 className="career-index-contributions-title">CONTRIBUTIONS</h3>
                        <ul className="career-index-contributions-list">
                          {item.contributions.map((contribution, idx) => (
                            <li key={idx} className="career-index-contribution-item">
                              <span className="contribution-bullet" aria-hidden="true">•</span>
                              <span>{contribution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </main>

        {/* Bottom Page Navigation */}
        <footer className="experience-page-footer">
          <Link to="/work" className="btn btn-secondary glass interactive">
            View Selected Work <span className="btn-arrow" aria-hidden="true">→</span>
          </Link>
          <Link to="/contact" className="btn btn-primary interactive">
            Get in Touch <span className="btn-arrow" aria-hidden="true">→</span>
          </Link>
        </footer>
      </div>
    </article>
  )
}

export default Experience