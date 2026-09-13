import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import projects from '../data/projects'
import ProjectCard from './ProjectCard'
import './SelectedWork.css'

function SelectedWork() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [currentTranslate, setCurrentTranslate] = useState(0)
  const [prevTranslate, setPrevTranslate] = useState(0)
  const galleryRef = useRef(null)
  const navigate = useNavigate()

  useScrollReveal()

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX)
    setIsDragging(true)
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    const currentX = e.touches[0].clientX
    const diff = currentX - startX
    setCurrentTranslate(prevTranslate + diff)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
    const movedBy = currentTranslate - prevTranslate

    if (movedBy < -50) {
      handleNext()
    } else if (movedBy > 50) {
      handlePrevious()
    }

    setCurrentTranslate(0)
    setPrevTranslate(0)
  }

  const handleMouseDown = (e) => {
    if (window.innerWidth < 768) return
    setStartX(e.clientX)
    setIsDragging(true)
  }

  const handleMouseMove = (e) => {
    if (!isDragging || window.innerWidth < 768) return
    const currentX = e.clientX
    const diff = currentX - startX
    setCurrentTranslate(prevTranslate + diff)
  }

  const handleMouseUp = () => {
    if (window.innerWidth < 768) return
    setIsDragging(false)
    const movedBy = currentTranslate - prevTranslate

    if (movedBy < -50) {
      handleNext()
    } else if (movedBy > 50) {
      handlePrevious()
    }

    setCurrentTranslate(0)
    setPrevTranslate(0)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      handlePrevious()
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      handleNext()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeIndex])

  const getProjectClassName = (index) => {
    if (index === activeIndex) return 'gallery-project gallery-project--center'
    
    const diff = index - activeIndex
    const totalProjects = projects.length
    
    // Handle circular positioning
    let position
    if (diff === 1 || diff === -(totalProjects - 1)) {
      position = 'next'
    } else if (diff === -1 || diff === (totalProjects - 1)) {
      position = 'previous'
    } else {
      position = 'hidden'
    }
    
    return `gallery-project gallery-project--${position}`
  }

  const handleProjectClick = (index, e) => {
    if (index !== activeIndex) {
      e.preventDefault()
      setActiveIndex(index)
    } else {
      // Center project clicked - navigate to detail
      navigate(`/work/${projects[index].slug}`)
    }
  }

  return (
    <section className="selected-work-section" id="work" aria-labelledby="selected-work-heading">
      <div className="selected-work-container container">
        {/* Section Header */}
        <div className="selected-work-header reveal-on-scroll">
          <div className="selected-work-header-content">
            <div className="selected-work-title-group">
              <p className="selected-work-label">WORK</p>
              <h2 id="selected-work-heading" className="selected-work-title">
                Selected Work
              </h2>
            </div>
          </div>
          <p className="selected-work-description">
            A selection of recent interfaces, visual designs, and creative work.
          </p>
        </div>

        {/* Centered Horizontal Gallery */}
        <div 
          ref={galleryRef}
          className="work-gallery reveal-on-scroll reveal-stagger-1"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="work-gallery-viewport">
            <div className="work-gallery-track">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={getProjectClassName(index)}
                  onClick={(e) => handleProjectClick(index, e)}
                  role="button"
                  tabIndex={index === activeIndex ? 0 : -1}
                  aria-label={index === activeIndex ? `Current project: ${project.title}. Press Enter to view details` : `View ${project.title}`}
                >
                  <ProjectCard project={project} isGalleryMode={true} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            className="gallery-nav gallery-nav--prev"
            onClick={handlePrevious}
            aria-label="Previous project"
            type="button"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            className="gallery-nav gallery-nav--next"
            onClick={handleNext}
            aria-label="Next project"
            type="button"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>

        {/* Project Index */}
        <div className="gallery-index reveal-on-scroll reveal-stagger-2">
          <span className="gallery-index-current">{String(activeIndex + 1).padStart(2, '0')}</span>
          <span className="gallery-index-separator">/</span>
          <span className="gallery-index-total">{String(projects.length).padStart(2, '0')}</span>
        </div>

        {/* Center Project Metadata */}
        <div className="gallery-project-meta reveal-on-scroll reveal-stagger-2">
          <div className="gallery-meta-row">
            <h3 className="gallery-meta-title">{projects[activeIndex].title}</h3>
            <span className="gallery-meta-year">{projects[activeIndex].year}</span>
          </div>
          <p className="gallery-meta-category">{projects[activeIndex].category}</p>
        </div>
      </div>
    </section>
  )
}

export default SelectedWork


