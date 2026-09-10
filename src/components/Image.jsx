import { useState } from 'react'
import './Image.css'

function Image({
  src,
  alt = '',
  className = '',
  loading = 'lazy',
  decoding = 'async',
  placeholderTitle = 'Project Preview',
  placeholderHint = '',
  ...rest
}) {
  const [hasError, setHasError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  if (!src || hasError) {
    return <div className={`img-empty-slot ${className}`} />
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding={decoding}
      className={`app-image ${isLoaded ? 'is-loaded' : ''} ${className}`}
      onLoad={() => setIsLoaded(true)}
      onError={() => setHasError(true)}
      {...rest}
    />
  )
}

export default Image
