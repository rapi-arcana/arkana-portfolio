import { useEffect } from 'react'

/**
 * Custom hook to trigger scroll reveal animations using IntersectionObserver.
 * Adds the 'is-revealed' class to target elements when they scroll into viewport.
 *
 * @param {string} selector - CSS selector for target elements (default: '.reveal-on-scroll')
 * @param {Object} options - IntersectionObserver options
 */
export function useScrollReveal(selector = '.reveal-on-scroll', options = {}) {
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const defaultOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.12,
      ...options
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed')
          // Unobserve once revealed for optimal performance
          obs.unobserve(entry.target)
        }
      })
    }, defaultOptions)

    const elements = document.querySelectorAll(selector)
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
      observer.disconnect()
    }
  }, [selector, JSON.stringify(options)])
}
