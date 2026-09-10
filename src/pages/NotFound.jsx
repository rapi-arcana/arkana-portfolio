import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <article className="not-found-page container">
      <div className="not-found-card glass" style={{ padding: 'clamp(2.5rem, 5vw, 4rem)', textAlignment: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-3)', marginBlock: 'var(--space-8)' }}>
        <p className="not-found-eyebrow" style={{ fontSize: 'var(--text-caption)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)', margin: 0 }}>404 Error</p>
        <h1 className="not-found-title" style={{ fontSize: 'var(--text-h2)', fontWeight: 'var(--weight-bold)', color: 'var(--color-text)', margin: 0 }}>Page Not Found</h1>
        <p className="not-found-text" style={{ fontSize: 'var(--text-body)', color: 'var(--color-text-secondary)', maxWidth: '45ch', margin: '0 0 var(--space-4) 0', textAlign: 'center' }}>
          The page you are looking for does not exist or may have been moved.
        </p>
        <Link to="/" className="btn btn-primary interactive">
          Return to Home <span className="btn-arrow" aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  )
}

export default NotFound
