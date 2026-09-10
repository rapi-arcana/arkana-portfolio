import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import processSteps from '../data/process'
import './DesignProcessSection.css'

function DesignProcessSection() {
  const [activeStepId, setActiveStepId] = useState('01')
  useScrollReveal()

  return (
    <section className="process-section" aria-labelledby="process-heading">
      <div className="process-container container">
        {/* Left Column: Header & Context */}
        <div className="process-header reveal-on-scroll">
          <p className="process-label">How I Work</p>
          <h2 id="process-heading" className="process-title">
            Design Process
          </h2>
          <p className="process-description">
            My process adapts to the project — whether it is a product, a brand, or a visual communication challenge.
          </p>
        </div>

        {/* Right Column: Process Steps Sequence */}
        <div className="process-steps-wrapper">
          <ol className="process-steps-list">
            {processSteps.map((step, index) => {
              const isActive = activeStepId === step.id

              return (
                <li
                  key={step.id}
                  className={`process-step-item glass ${isActive ? 'process-step-item--active' : ''} reveal-on-scroll reveal-stagger-${(index % 5) + 1}`}
                  onMouseEnter={() => setActiveStepId(step.id)}
                  onFocus={() => setActiveStepId(step.id)}
                  tabIndex={0}
                >
                  <div className="process-step-header">
                    <span className="process-step-num">{step.number}</span>
                    <h3 className="process-step-title">{step.title}</h3>
                    <span className="process-step-indicator" aria-hidden="true" />
                  </div>
                  <p className="process-step-text">{step.description}</p>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default DesignProcessSection
