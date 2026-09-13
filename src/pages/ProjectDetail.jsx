import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import projects from '../data/projects'
import Image from '../components/Image'
import './ProjectDetail.css'

// Helper function to determine gallery type based on project
function getGalleryType(project) {
  const galleryTypes = {
    'kost-management-app': 'mobile',
    'pt-bafain-indonesia': 'mixed',
    'pesmaba-fakultas-teknik': 'publication',
    'himpunan-kominfo': 'social',
    'yourmoney': 'mobile'
  }
  
  return galleryTypes[project.slug] || 'default'
}

function ProjectDetail() {
  const { slug } = useParams()
  const [activeTab, setActiveTab] = useState('overview')

  const currentIndex = projects.findIndex((item) => item.slug === slug)
  const project = projects[currentIndex]

  if (!project) {
    return (
      <div className="project-not-found container">
        <p className="not-found-eyebrow">404 Error</p>
        <h1 className="not-found-title">Project Not Found</h1>
        <p className="not-found-text">The requested project does not exist in the portfolio data.</p>
        <Link to="/#work" className="btn btn-primary interactive">
          ← Back to Work
        </Link>
      </div>
    )
  }

  // Next and previous project navigation
  const nextIndex = (currentIndex + 1) % projects.length
  const prevIndex = (currentIndex - 1 + projects.length) % projects.length
  const nextProject = projects[nextIndex]
  const prevProject = projects[prevIndex]

  const galleryType = getGalleryType(project)

  return (
    <article className="project-detail-page">
      {/* Back to Work */}
      <nav className="detail-back-nav">
        <div className="container">
          <Link to="/#work" className="back-link">
            ← Back to Work
          </Link>
        </div>
      </nav>

      <div className="detail-layout container">
        {/* Left Sidebar - Project Identity */}
        <aside className="project-sidebar">
          <div className="sidebar-content">
            {/* Project Identity */}
            <header className="project-identity">
              <div className="project-category-row">
                <p className="project-category">{project.category}</p>
                {project.context && (
                  <span className="project-context-tag">{project.context}</span>
                )}
              </div>
              <h1 className="project-title">{project.title}</h1>
              {project.subtitle && (
                <p className="project-subtitle">{project.subtitle}</p>
              )}
              <p className="project-summary">{project.description}</p>
            </header>

            {/* Project Snapshot */}
            <section className="project-snapshot">
              <h2 className="snapshot-heading">Project Snapshot</h2>
              <div className="snapshot-list">
                {project.role && (
                  <div className="snapshot-item">
                    <span className="snapshot-label">ROLE</span>
                    <span className="snapshot-value">{project.role}</span>
                  </div>
                )}
                {project.context && (
                  <div className="snapshot-item">
                    <span className="snapshot-label">CONTEXT</span>
                    <span className="snapshot-value">{project.context}</span>
                  </div>
                )}
                {project.year && (
                  <div className="snapshot-item">
                    <span className="snapshot-label">YEAR</span>
                    <span className="snapshot-value">{project.year}</span>
                  </div>
                )}
                {project.category && (
                  <div className="snapshot-item">
                    <span className="snapshot-label">CATEGORY</span>
                    <span className="snapshot-value">{project.category}</span>
                  </div>
                )}
                {project.tools && (
                  <div className="snapshot-item">
                    <span className="snapshot-label">TOOLS</span>
                    <span className="snapshot-value">{project.tools}</span>
                  </div>
                )}
                {project.subtitle && (
                  <div className="snapshot-item">
                    <span className="snapshot-label">PLATFORM</span>
                    <span className="snapshot-value">{project.subtitle}</span>
                  </div>
                )}
              </div>
            </section>
          </div>
        </aside>

        {/* Right Content - Overview / Visuals */}
        <main className="project-content">
          {/* Tab Navigation */}
          <nav className="tab-navigation" role="tablist">
            <button
              role="tab"
              aria-selected={activeTab === 'overview'}
              aria-controls="overview-panel"
              className={`tab-button ${activeTab === 'overview' ? 'tab-button--active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button
              role="tab"
              aria-selected={activeTab === 'visuals'}
              aria-controls="visuals-panel"
              className={`tab-button ${activeTab === 'visuals' ? 'tab-button--active' : ''}`}
              onClick={() => setActiveTab('visuals')}
            >
              Visuals
            </button>
          </nav>

          {/* Tab Content */}
          <div className="tab-content">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div
                id="overview-panel"
                role="tabpanel"
                aria-labelledby="overview-tab"
                className="tab-panel tab-panel--overview"
              >
                {/* The Project */}
                {project.overview && (
                  <section className="content-section">
                    <h2 className="section-heading">The Project</h2>
                    <p className="section-text">{project.overview}</p>
                  </section>
                )}

                {/* My Role */}
                {project.whatIDid && project.whatIDid.length > 0 && (
                  <section className="content-section">
                    <h2 className="section-heading">My Role</h2>
                    <ol className="role-list">
                      {project.whatIDid.map((item, idx) => (
                        <li key={idx} className="role-item">
                          <span className="role-number">{String(idx + 1).padStart(2, '0')}</span>
                          <span className="role-text">{item}</span>
                        </li>
                      ))}
                    </ol>
                  </section>
                )}
              </div>
            )}

            {/* Visuals Tab */}
            {activeTab === 'visuals' && (
              <div
                id="visuals-panel"
                role="tabpanel"
                aria-labelledby="visuals-tab"
                className="tab-panel tab-panel--visuals"
              >
                <section className="visuals-section">
                  <h2 className="visuals-heading">Selected Work</h2>
                  <p className="visuals-intro">A closer look at the interfaces and visual work.</p>

                  {project.images && project.images.length > 0 ? (
                    <div className={`visuals-gallery visuals-gallery--${galleryType}`}>
                      {project.images.map((imgSrc, idx) => (
                        <div key={idx} className="visual-item">
                          <Image
                            src={imgSrc}
                            alt={`${project.title} visual ${idx + 1}`}
                            loading="lazy"
                            className="visual-image"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="no-visuals-message">Visual assets coming soon.</p>
                  )}
                </section>
              </div>
            )}
          </div>

          {/* Project Navigation */}
          <nav className="project-navigation">
            <Link
              to={`/work/${prevProject.slug}`}
              className="project-nav-link project-nav-prev"
            >
              <span className="nav-direction">← Previous Project</span>
              <span className="nav-project-name">{prevProject.title}</span>
            </Link>

            <Link
              to={`/work/${nextProject.slug}`}
              className="project-nav-link project-nav-next"
            >
              <span className="nav-direction">Next Project →</span>
              <span className="nav-project-name">{nextProject.title}</span>
            </Link>
          </nav>
        </main>
      </div>
    </article>
  )
}

export default ProjectDetail
