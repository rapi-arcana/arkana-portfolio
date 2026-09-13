import { useScrollReveal } from '../hooks/useScrollReveal'
import processSteps from '../data/process'
import './DesignProcessSection.css'

function DesignProcessSection() {
  useScrollReveal()

  return (
    <section 
      id="process"
      className="process-section" 
      aria-labelledby="process-heading"
    >
      <div className="process-container container">
        
        {/* Two-Column Header */}
        <header className="process-header reveal-on-scroll">
          <div className="process-header-left">
            <span className="process-eyebrow">HOW I WORK</span>
            <h2 id="process-heading" className="process-title">
              Design Process
            </h2>
          </div>
          <div className="process-header-right">
            <p className="process-description">
              My process adapts to the project — whether it is a product, a brand, or a visual communication challenge.
            </p>
          </div>
        </header>

        {/* 5 Equal-Width Process Cards Grid */}
        <div className="process-cards-grid reveal-on-scroll">
          {processSteps.map((step, index) => (
            <article 
              key={step.id}
              className={`process-card interactive reveal-stagger-${(index % 5) + 1}`}
            >
              <span className="process-card-num">{step.number}</span>
              <h3 className="process-card-title">{step.title}</h3>
              <p className="process-card-desc">{step.description}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default DesignProcessSection
