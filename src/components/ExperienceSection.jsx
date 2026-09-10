import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import experiences from '../data/experiences'
import './ExperienceSection.css'

function ExperienceSection() {
  const [expandedId, setExpandedId] = useState('01')
  useScrollReveal()

  const toggleExpand = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id))
  }

  return (
    <section className="experience-section" aria-labelledby="experience-heading">
      <div className="experience-container container">
        {/* Section Header with Metadata Count Badge */}
        <div className="experience-header reveal-on-scroll">
          <div className="experience-header-top">
            <span className="experience-label">Career</span>
            <span className="experience-records-badge">{experiences.length} RECORDS</span>
          </div>
          <h2 id="experience-heading" className="experience-title">
            Experience
          </h2>
        </div>

        {/* Editorial Career Index List */}
        <div className="career-index-list reveal-on-scroll">
          {experiences.map((item, index) => {
            const isExpanded = expandedId === item.id

            return (
              <article
                key={item.id}
                className={`career-index-row ${isExpanded ? 'career-index-row--expanded' : ''}`}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <button
                  type="button"
                  id={`experience-header-${item.id}`}
                  className="career-index-trigger"
                  aria-expanded={isExpanded}
                  aria-controls={`experience-content-${item.id}`}
                  onClick={() => toggleExpand(item.id)}
                >
                  <span className="career-index-num">{item.id}</span>

                  <div className="career-index-identity">
                    <h3 className="career-index-role">{item.role}</h3>
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
                  id={`experience-content-${item.id}`}
                  className="career-index-panel-wrapper"
                  role="region"
                  aria-labelledby={`experience-header-${item.id}`}
                  aria-hidden={!isExpanded}
                >
                  <div className="career-index-panel-inner">
                    <p className="career-index-description">{item.description}</p>

                    <div className="career-index-contributions">
                      <h4 className="career-index-contributions-title">CONTRIBUTIONS</h4>
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
      </div>
    </section>
  )
}

export default ExperienceSection
