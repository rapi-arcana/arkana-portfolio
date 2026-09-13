import { useScrollReveal } from '../hooks/useScrollReveal'
import skillsData from '../data/skills'
import './SkillsToolsSection.css'

function SkillsToolsSection() {
  useScrollReveal()

  const { header, designCapabilities, tools, technical } = skillsData

  const primaryCapabilities = designCapabilities.filter(item => item.percentage)
  const secondaryCapabilities = designCapabilities.filter(item => !item.percentage)

  return (
    <section 
      id="skills"
      className="skills-section" 
      aria-labelledby="skills-heading"
    >
      <div className="skills-container container">
        
        {/* Section Header */}
        <header className="skills-header reveal-on-scroll">
          <span className="skills-eyebrow">{header.label}</span>
          <h2 id="skills-heading" className="skills-title">
            {header.title}
          </h2>
          <p className="skills-description">
            {header.description}
          </p>
        </header>

        {/* Toolbox Main Grid (Two Columns Desktop) */}
        <div className="toolbox-main-grid">
          
          {/* LEFT COLUMN — DESIGN CAPABILITIES */}
          <div className="toolbox-column-left reveal-on-scroll">
            <div className="toolbox-group-header">
              <span className="toolbox-group-tag">WHAT I CAN DESIGN</span>
              <h3 className="toolbox-group-title">DESIGN CAPABILITIES</h3>
            </div>

            {/* Primary Capabilities (01 UI/UX Design & 02 Visual Design) */}
            <div className="capabilities-primary-stack">
              {primaryCapabilities.map((item) => (
                <div key={item.id} className="toolbox-card toolbox-card--primary interactive">
                  <div className="toolbox-card-header">
                    <span className="toolbox-card-num">{item.id}</span>
                    <span className="toolbox-badge toolbox-badge--accent" aria-label={`${item.title} ${item.percentage} percent`}>
                      {item.percentage}%
                    </span>
                  </div>
                  
                  <div className="toolbox-card-body">
                    <h4 className="toolbox-card-title">{item.title}</h4>
                    <p className="toolbox-card-subtitle">{item.subtitle}</p>
                  </div>

                  {/* Capability Tag Chips */}
                  <div className="toolbox-chips-flow">
                    {item.title.includes('UI / UX') && (
                      <>
                        <span className="toolbox-chip">WIREFRAMING</span>
                        <span className="toolbox-chip">USER FLOW</span>
                        <span className="toolbox-chip">PROTOTYPING</span>
                      </>
                    )}
                    {item.title.includes('VISUAL') && (
                      <>
                        <span className="toolbox-chip">HIGH-FIDELITY UI</span>
                        <span className="toolbox-chip">VISUAL SYSTEM</span>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Secondary Capabilities (03, 04, 05, 06 Compact Slots) */}
            <div className="capabilities-secondary-matrix">
              {secondaryCapabilities.map((item) => (
                <div key={item.id} className="toolbox-slot-row interactive">
                  <span className="toolbox-slot-num">{item.id}</span>
                  <div className="toolbox-slot-meta">
                    <h4 className="toolbox-slot-title">{item.title}</h4>
                    <p className="toolbox-slot-subtitle">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN — MY TOOLBOX */}
          <div className="toolbox-column-right reveal-on-scroll reveal-stagger-1">
            <div className="toolbox-group-header">
              <span className="toolbox-group-tag">CREATIVE SOFTWARE</span>
              <h3 className="toolbox-group-title">MY TOOLBOX</h3>
            </div>

            <div className="toolbox-software-stack">
              {/* Figma — Primary Featured Tool */}
              <div className="toolbox-card toolbox-software-card toolbox-software-card--figma interactive">
                <div className="figma-ambient-glow" />
                <div className="toolbox-card-header">
                  <div className="software-icon-wrapper software-icon-wrapper--figma" aria-hidden="true">
                    <svg width="32" height="48" viewBox="0 0 38 57" fill="none">
                      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
                      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
                      <path d="M0 28.5C0 23.2533 4.25329 19 9.5 19H19V38H9.5C4.25329 38 0 33.7467 0 28.5Z" fill="#A259FF"/>
                      <path d="M0 9.5C0 4.25329 4.25329 0 9.5 0H19V19H9.5C4.25329 19 0 13.7467 0 9.5Z" fill="#F24E1E"/>
                      <path d="M19 0H28.5C33.7467 0 38 4.25329 38 9.5C38 14.7467 33.7467 19 28.5 19H19V0Z" fill="#FF7262"/>
                    </svg>
                  </div>
                  <div className="software-title-meta">
                    <span className="software-role-tag software-role-tag--primary">{tools.primary.role}</span>
                    <h4 className="software-name">{tools.primary.name}</h4>
                  </div>
                  <span className="toolbox-badge toolbox-badge--accent">
                    {tools.primary.percentage}%
                  </span>
                </div>

                <div className="software-tags-flow">
                  {tools.primary.tags.map((tag) => (
                    <span key={tag} className="software-tag software-tag--primary">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Canva — Supporting Tool */}
              <div className="toolbox-card toolbox-software-card toolbox-software-card--canva interactive">
                <div className="toolbox-card-header">
                  <div className="software-icon-wrapper software-icon-wrapper--canva" aria-hidden="true">
                    <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
                      <circle cx="16" cy="16" r="15" fill="url(#canvaGradToolbox9G)" />
                      <path d="M19.5 11.5C18.2 10.2 16.2 9.8 14.3 10.4C11.5 11.3 9.8 14.2 9.8 17.2C9.8 20.2 11.8 22.2 14.5 22.2C17.2 22.2 19.4 20.2 19.8 17.8" stroke="white" strokeWidth="2.4" strokeLinecap="round" />
                      <defs>
                        <linearGradient id="canvaGradToolbox9G" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#00C4CC"/>
                          <stop offset="1" stopColor="#7D2AE8"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="software-title-meta">
                    <span className="software-role-tag">{tools.supporting.role}</span>
                    <h4 className="software-name">{tools.supporting.name}</h4>
                  </div>
                  <span className="toolbox-badge toolbox-badge--supporting">
                    {tools.supporting.percentage}%
                  </span>
                </div>

                <div className="software-tags-flow">
                  {tools.supporting.tags.map((tag) => (
                    <span key={tag} className="software-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM ROW — TECHNICAL SKILLS */}
        <div className="toolbox-technical-row reveal-on-scroll reveal-stagger-2">
          <div className="technical-meta">
            <h3 className="toolbox-group-title">TECHNICAL</h3>
            <p className="technical-sublabel">{technical.label}</p>
          </div>

          <div className="technical-chips-grid">
            <div className="tech-tool-chip interactive" title="HTML5">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M4.5 3L5.8 18.5L12 20.2L18.2 18.5L19.5 3H4.5ZM16.3 7.5H8.7L9 10H16L15.4 15.6L12 16.6L8.6 15.6L8.4 13H6.9L7.3 17.5L12 18.8L16.7 17.5L17.5 7.5H16.3Z" fill="#E34F26"/>
              </svg>
              <span>HTML</span>
            </div>

            <div className="tech-tool-chip interactive" title="CSS3">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M4.5 3L5.8 18.5L12 20.2L18.2 18.5L19.5 3H4.5ZM16.3 7.5H8.7L9 10H16L15.4 15.6L12 16.6L8.6 15.6L8.4 13H6.9L7.3 17.5L12 18.8L16.7 17.5L17.5 7.5H16.3Z" fill="#1572B6"/>
              </svg>
              <span>CSS</span>
            </div>

            <div className="tech-tool-chip interactive" title="JavaScript">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
                <path d="M12.5 18C12.8 19 13.8 19.8 15.2 19.8C16.8 19.8 17.8 19 17.8 17.5C17.8 14.3 13.3 14.8 13.3 11.6C13.3 9.9 14.7 8.7 16.6 8.7C18 8.7 19.1 9.4 19.6 10.6L18.2 11.4C17.9 10.7 17.3 10.2 16.5 10.2C15.7 10.2 15 10.7 15 11.5C15 14.3 19.5 13.8 19.5 17.2C19.5 19.5 17.7 21.2 15.1 21.2C13.2 21.2 11.8 20.1 11.1 18.6L12.5 18ZM6.2 18.2C6.6 19 7.3 19.8 8.5 19.8C9.6 19.8 10.3 19.2 10.3 17.7V8.9H12V17.8C12 20.5 10.4 21.2 8.4 21.2C6.7 21.2 5.5 20.3 4.8 18.9L6.2 18.2Z" fill="#000000"/>
              </svg>
              <span>JavaScript</span>
            </div>

            <div className="tech-tool-chip interactive" title="Flutter">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M14.3 2.5L5.7 11.1L8.8 14.2L20.5 2.5H14.3ZM14.3 13.2L10.3 17.2L14.3 21.2H20.5L16.5 17.2L20.5 13.2H14.3Z" fill="#02569B"/>
                <path d="M10.3 17.2L14.3 13.2H8.1L6.1 15.2L10.3 17.2Z" fill="#0175C2"/>
              </svg>
              <span>Flutter</span>
            </div>

            <div className="tech-tool-chip interactive" title="Vue.js">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M2 3.5H7L12 12L17 3.5H22L12 20.5L2 3.5Z" fill="#4FC08D"/>
                <path d="M6 3.5H9.5L12 8L14.5 3.5H18L12 14L6 3.5Z" fill="#35495E"/>
              </svg>
              <span>Vue</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default SkillsToolsSection
