import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects'
import './Work.css'

const filterCategories = ['All', 'UI / UX', 'Visual Design', 'Social Media']

function Work() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true
    return project.category.toLowerCase().includes(activeFilter.toLowerCase())
  })

  return (
    <div className="work-page container">
      {/* Page Header */}
      <header className="work-page-header">
        <p className="work-page-eyebrow">Portfolio</p>
        <h1 className="work-page-title">Selected Work</h1>
        <p className="work-page-description">
          A curated selection of digital interfaces, visual designs, and creative work.
        </p>
      </header>

      {/* Dedicated Filter & Project Counter Row */}
      <div className="project-filter-row">
        <nav
          className="project-filter-bar"
          aria-label="Filter projects by category"
          role="tablist"
        >
          {filterCategories.map((category) => {
            const isActive = activeFilter === category
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-pressed={isActive}
                className={`filter-btn ${isActive ? 'filter-btn--active' : ''}`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            )
          })}
        </nav>

        <div className="project-count-badge">
          {filteredProjects.length} {filteredProjects.length === 1 ? 'Project' : 'Projects'}
        </div>
      </div>

      {/* Unified 2-Column Projects Display Content */}
      <main className="work-projects-content">
        {filteredProjects.length > 0 && (
          <div className="work-projects-grid">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="work-empty-state glass">
            <p>No projects in this category yet.</p>
          </div>
        )}
      </main>
    </div>
  )
}

export default Work


