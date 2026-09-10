import { useEffect } from 'react'

/**
 * Custom hook to apply passive, lightweight scroll response to Hero elements.
 * Calculates normalized scroll offsets and sets CSS custom properties on target.
 */
export function useHeroParallax(targetRef) {
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    let ticking = false

    function updateParallax() {
      if (!targetRef.current) {
        ticking = false
        return
      }

      const scrollY = window.scrollY
      const heroHeight = targetRef.current.offsetHeight || 600

      // Only calculate if within or near Hero viewport
      if (scrollY <= heroHeight * 1.5) {
        const progress = Math.min(scrollY / heroHeight, 1)

        // Subtle offsets (in pixels)
        const portraitOffsetY = progress * -10
        const figmaOffsetY = progress * -14
        const canvaOffsetY = progress * 12
        const webMobileOffsetY = progress * -16

        targetRef.current.style.setProperty('--portrait-scroll-y', `${portraitOffsetY.toFixed(1)}px`)
        targetRef.current.style.setProperty('--figma-scroll-y', `${figmaOffsetY.toFixed(1)}px`)
        targetRef.current.style.setProperty('--canva-scroll-y', `${canvaOffsetY.toFixed(1)}px`)
        targetRef.current.style.setProperty('--web-mobile-scroll-y', `${webMobileOffsetY.toFixed(1)}px`)
      }

      ticking = false
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    updateParallax()

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [targetRef])
}
