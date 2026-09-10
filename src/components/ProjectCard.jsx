import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Image from './Image'
import projects from '../data/projects'
import './ProjectCard.css'

// Project-specific visual preset definitions matching actual asset aspect ratios
const projectVisualPresets = {
  'kost-management-app': {
    type: 'portrait-mobile',
    previews: [
      { aspect: '9 / 18' },
      { aspect: '9 / 18' },
      { aspect: '9 / 18' }
    ]
  },
  'pt-bafain-indonesia': {
    type: 'web-mobile-hybrid',
    previews: [
      { aspect: '16 / 10' },
      { aspect: '9 / 16' },
      { aspect: '16 / 10' }
    ]
  },
  'pesmaba-fakultas-teknik': {
    type: 'publication-poster',
    previews: [
      { aspect: '3 / 4' },
      { aspect: '3 / 4' },
      { aspect: '3 / 4' }
    ]
  },
  'himpunan-kominfo': {
    type: 'social-media-feed',
    previews: [
      { aspect: '1 / 1' },
      { aspect: '1 / 1' },
      { aspect: '1 / 1' }
    ]
  },
  'yourmoney': {
    type: 'portrait-mobile',
    previews: [
      { aspect: '9 / 18' },
      { aspect: '9 / 18' },
      { aspect: '9 / 18' }
    ]
  }
}

function ProjectCard({ project, isGalleryMode = false }) {
  const cardRef = useRef(null)

  // Determine 1-indexed project number based on projects dataset order
  const cardIndex = projects.findIndex((p) => p.id === project.id)
  const projectNumber = String(cardIndex >= 0 ? cardIndex + 1 : 1).padStart(2, '0')

  // Collect available image previews for this project (Left, Right, Center)
  const cover = project.coverImage || project.image
  const imgs = project.images || []

  const previewImages = project.slug === 'pt-bafain-indonesia'
    ? [cover, imgs[0] || cover, imgs[1] || cover]
    : [
        imgs[0] || cover,
        imgs[1] || imgs[0] || cover,
        cover
      ]

  const preset = projectVisualPresets[project.slug] || { previews: [] }

  const handleMouseMove = (e) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.innerWidth < 768) return
    if (isGalleryMode) return // Disable tilt in gallery mode

    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Restrained subtle tilt (rotateX ±2deg, rotateY ±3deg)
    const rotateX = -((y - centerY) / centerY) * 2
    const rotateY = ((x - centerX) / centerX) * 3

    card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = ''
  }

  const CardContent = (
    <>
      {/* 1. Self-Contained Visual Stage */}
      <div className="project-visual-stage">
        {/* Ambient Soft Indigo Glow */}
        <div className="folder-ambient-glow" aria-hidden="true" />

        {/* Spilled Files Layer (Positioned strictly relative to visual stage) */}
        <div className="project-files">
          {previewImages.map((imgSrc, idx) => {
            const previewInfo = preset.previews[idx] || { aspect: 'auto' }
            const fileClass = idx === 0 ? 'file-left' : idx === 1 ? 'file-right' : 'file-center'
            return (
              <div
                key={idx}
                className={`file ${fileClass}`}
                style={{ aspectRatio: previewInfo.aspect }}
              >
                <Image
                  src={imgSrc}
                  alt={`${project.title} preview ${idx + 1}`}
                  className="file-img"
                  placeholderTitle={`${project.title} (${idx + 1})`}
                  placeholderHint={imgSrc}
                />
                <div className="file-shine" aria-hidden="true" />
              </div>
            )
          })}
        </div>

        {/* Authentic Vector Folder Silhouette (Front Object) */}
        <div className="folder-object">
          <svg className="folder-svg-bg" viewBox="0 0 400 160" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id={`folderGrad-${project.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" className="folder-stop-1" />
                <stop offset="50%" className="folder-stop-2" />
                <stop offset="100%" className="folder-stop-3" />
              </linearGradient>
              <filter id={`folderShadow-${project.id}`} x="-10%" y="-10%" width="120%" height="130%">
                <feDropShadow dx="0" dy="16" stdDeviation="20" floodColor="#000000" floodOpacity="0.25" />
              </filter>
            </defs>

            {/* Exact Folder Silhouette Path matching reference image */}
            <path
              d="M 12 160 
                 L 12 28 
                 Q 12 12, 28 12 
                 L 125 12 
                 Q 140 12, 150 24 
                 Q 160 36, 175 36 
                 L 388 36 
                 Q 400 36, 400 48 
                 L 400 148 
                 Q 400 160, 388 160 
                 Z"
              fill={`url(#folderGrad-${project.id})`}
              stroke="var(--folder-stroke)"
              strokeWidth="1.25"
              vectorEffect="non-scaling-stroke"
              filter={`url(#folderShadow-${project.id})`}
            />
          </svg>

          <div className="folder-inner-content">
            <div className="folder-top-row">
              <span className="folder-number-text">{projectNumber}</span>
            </div>

            <div className="folder-main-row">
              <div className="folder-title-group">
                <h3 className="folder-main-title">{project.title}</h3>
                {project.subtitle && (
                  <p className="folder-main-subtitle">{project.subtitle}</p>
                )}
              </div>

              <div className="folder-circle-btn" aria-label="Open project">
                <span className="folder-arrow-icon">↗</span>
              </div>
            </div>
          </div>

          {/* External Category Label attached to folder upper-right edge */}
          <div className="folder-category-label">
            <span>{project.category.toUpperCase()}</span>
          </div>
        </div>
      </div>

      {/* 2. Project Information & Metadata Area (Below Visual Stage) */}
      <div className="project-info">
        <div className="project-info-header">
          <h4 className="project-info-title">{project.title}</h4>
          <span className="project-info-year">{project.year}</span>
        </div>

        <p className="project-info-description">{project.description}</p>

        {project.tags && project.tags.length > 0 && (
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="tag-pill">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </>
  )

  return (
    <article
      ref={cardRef}
      className={`project-card ${isGalleryMode ? '' : 'interactive'}`}
      data-project={project.slug}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {isGalleryMode ? (
        <div className="project-card-content">
          {CardContent}
        </div>
      ) : (
        <Link className="project-card-link-wrapper" to={`/work/${project.slug}`}>
          {CardContent}
        </Link>
      )}
    </article>
  )
}

export default ProjectCard





