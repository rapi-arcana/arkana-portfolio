import { useState, useEffect, useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import skillGroups from '../data/skills'
import './SkillsToolsSection.css'

function SkillsToolsSection() {
  useScrollReveal()
  const [animated, setAnimated] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setAnimated(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [animated])

  const designGroup = skillGroups.find(g => g.id === 'design')
  const toolsGroup = skillGroups.find(g => g.id === 'tools')
  const technicalGroup = skillGroups.find(g => g.id === 'technical')
  const coreGroup = skillGroups.find(g => g.id === 'core')

  return (
    <section 
      ref={sectionRef}
      className="skills-section" 
      aria-labelledby="skills-heading"
    >
      <div className="skills-container container">
        {/* Section Header */}
        <div className="skills-header reveal-on-scroll">
          <p className="skills-label">Capabilities</p>
          <h2 id="skills-heading" className="skills-title">
            Skills &amp; Tools
          </h2>
          <p className="skills-description">
            A selection of tools and disciplines I use to design digital experiences and visual work.
          </p>
        </div>

        {/* Realistic Designer Toolkit */}
        <div className="toolkit-layout">
          {/* Design Capabilities - Primary */}
          <div className="toolkit-section toolkit-design reveal-on-scroll">
            <div className="toolkit-section-header">
              <h3 className="toolkit-section-title">{designGroup.title}</h3>
              <span className="toolkit-section-count">{designGroup.items.length} SKILLS</span>
            </div>
            <div className="design-capabilities-grid">
              {designGroup.items.map((skill, index) => (
                <div
                  key={skill.name}
                  className="design-capability-card glass interactive"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="capability-header">
                    <h4 className="capability-name">{skill.name}</h4>
                    <span className={`skill-level skill-level--${skill.level.toLowerCase()}`}>
                      {skill.level}
                    </span>
                  </div>
                  <p className="capability-keywords">{skill.keywords}</p>
                  <div className="skill-proficiency-wrapper">
                    <div className="skill-proficiency-bar">
                      <div
                        className={`skill-proficiency-fill ${animated ? 'animated' : ''}`}
                        style={{ '--proficiency': `${skill.proficiency}%` }}
                        role="progressbar"
                        aria-valuenow={skill.proficiency}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        aria-label={`${skill.name} proficiency`}
                      />
                    </div>
                    <span className="skill-proficiency-percentage">{skill.proficiency}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools - Figma Dominant + Canva Supporting */}
          <div className="toolkit-section toolkit-tools reveal-on-scroll">
            <div className="toolkit-section-header">
              <h3 className="toolkit-section-title">{toolsGroup.title}</h3>
            </div>
            <div className="tools-container">
              {/* Figma - Primary Design Tool */}
              <div className="tool-card tool-card--primary glass interactive">
                <div className="tool-icon-wrapper tool-icon-wrapper--primary">
                  <svg viewBox="0 0 38 57" fill="none" className="tool-icon tool-icon--figma" aria-hidden="true">
                    <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0Z" fill="currentColor" opacity="0.3"/>
                    <path d="M0 47.5a9.5 9.5 0 0 1 9.5-9.5H19v9.5a9.5 9.5 0 1 1-19 0Z" fill="currentColor" opacity="0.5"/>
                    <path d="M0 28.5a9.5 9.5 0 0 1 9.5-9.5H19v19H9.5a9.5 9.5 0 0 1-9.5-9.5Z" fill="currentColor" opacity="0.7"/>
                    <path d="M0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5Z" fill="currentColor" opacity="0.85"/>
                    <path d="M19 0h9.5a9.5 9.5 0 0 1 0 19H19V0Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="tool-content">
                  <h4 className="tool-name tool-name--primary">{toolsGroup.primary.name}</h4>
                  <p className="tool-type">{toolsGroup.primary.type}</p>
                  <ul className="tool-capabilities">
                    {toolsGroup.primary.capabilities.map((cap, idx) => (
                      <li key={idx} className="tool-capability-item">{cap}</li>
                    ))}
                  </ul>
                  <span className={`skill-level skill-level--${toolsGroup.primary.level.toLowerCase()}`}>
                    {toolsGroup.primary.level}
                  </span>
                  <div className="skill-proficiency-wrapper">
                    <div className="skill-proficiency-bar">
                      <div
                        className={`skill-proficiency-fill ${animated ? 'animated' : ''}`}
                        style={{ '--proficiency': `${toolsGroup.primary.proficiency}%` }}
                        role="progressbar"
                        aria-valuenow={toolsGroup.primary.proficiency}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        aria-label={`${toolsGroup.primary.name} proficiency`}
                      />
                    </div>
                    <span className="skill-proficiency-percentage">{toolsGroup.primary.proficiency}%</span>
                  </div>
                </div>
              </div>

              {/* Canva - Supporting Tool */}
              <div className="tool-card tool-card--supporting glass interactive">
                <div className="tool-icon-wrapper tool-icon-wrapper--supporting">
                  <svg viewBox="0 0 32 32" fill="none" className="tool-icon tool-icon--canva" aria-hidden="true">
                    <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2"/>
                    <path d="M19.5 13c-.9-1-2.5-1.5-4-1-2.7.8-4 3.6-4 6.3 0 2.7 1.7 4 4 4s4-1.7 4.4-3.6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="tool-content">
                  <h4 className="tool-name">{toolsGroup.supporting.name}</h4>
                  <p className="tool-type tool-type--supporting">{toolsGroup.supporting.type}</p>
                  <p className="tool-uses">{toolsGroup.supporting.uses}</p>
                  <span className={`skill-level skill-level--${toolsGroup.supporting.level.toLowerCase()}`}>
                    {toolsGroup.supporting.level}
                  </span>
                  <div className="skill-proficiency-wrapper">
                    <div className="skill-proficiency-bar skill-proficiency-bar--small">
                      <div
                        className={`skill-proficiency-fill ${animated ? 'animated' : ''}`}
                        style={{ '--proficiency': `${toolsGroup.supporting.proficiency}%` }}
                        role="progressbar"
                        aria-valuenow={toolsGroup.supporting.proficiency}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        aria-label={`${toolsGroup.supporting.name} proficiency`}
                      />
                    </div>
                    <span className="skill-proficiency-percentage skill-proficiency-percentage--small">{toolsGroup.supporting.proficiency}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills - Secondary */}
          <div className="toolkit-section toolkit-technical reveal-on-scroll">
            <div className="toolkit-section-header">
              <h3 className="toolkit-section-title">{technicalGroup.title}</h3>
            </div>
            <p className="technical-description">{technicalGroup.description}</p>
            <div className="technical-skills-list">
              {technicalGroup.items.map((skill) => (
                <div key={skill.name} className="technical-skill-row">
                  <div className="technical-skill-info">
                    <span className="technical-skill-name">{skill.name}</span>
                    <span className={`skill-level skill-level--${skill.level.toLowerCase()}`}>
                      {skill.level}
                    </span>
                  </div>
                  <div className="skill-proficiency-wrapper skill-proficiency-wrapper--inline">
                    <div className="skill-proficiency-bar skill-proficiency-bar--inline">
                      <div
                        className={`skill-proficiency-fill ${animated ? 'animated' : ''}`}
                        style={{ '--proficiency': `${skill.proficiency}%` }}
                        role="progressbar"
                        aria-valuenow={skill.proficiency}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        aria-label={`${skill.name} proficiency`}
                      />
                    </div>
                    <span className="skill-proficiency-percentage skill-proficiency-percentage--inline">{skill.proficiency}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Capabilities - Tags */}
          <div className="toolkit-section toolkit-core reveal-on-scroll">
            <div className="toolkit-section-header">
              <h3 className="toolkit-section-title">{coreGroup.title}</h3>
            </div>
            <div className="core-capabilities-tags">
              {coreGroup.items.map((item) => (
                <span key={item} className="core-capability-tag interactive">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsToolsSection
