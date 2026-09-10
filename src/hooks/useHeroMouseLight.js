import { useEffect } from 'react'

/**
 * Custom hook to manage a lightweight, high-performance mouse-following ambient light.
 * Direct DOM update via CSS custom properties and requestAnimationFrame lerp loop.
 */
export function useHeroMouseLight(targetRef) {
  useEffect(() => {
    // Check if device is touch or user prefers reduced motion
    const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (isTouch || prefersReducedMotion) return

    const heroEl = targetRef.current
    if (!heroEl) return

    let mouseX = 0
    let mouseY = 0
    let currentX = 0
    let currentY = 0
    let isInside = false
    let animationFrameId = null

    // Initialize position at center of Hero
    const rect = heroEl.getBoundingClientRect()
    currentX = rect.width / 2
    currentY = rect.height / 2
    mouseX = currentX
    mouseY = currentY

    function updatePosition() {
      if (!heroEl) return

      // Fluid interpolation (lerp) for smooth movement behind cursor
      const lerpFactor = 0.08
      currentX += (mouseX - currentX) * lerpFactor
      currentY += (mouseY - currentY) * lerpFactor

      heroEl.style.setProperty('--mouse-x', `${currentX.toFixed(1)}px`)
      heroEl.style.setProperty('--mouse-y', `${currentY.toFixed(1)}px`)

      // Continue animation loop while active
      if (isInside || Math.abs(currentX - mouseX) > 0.1 || Math.abs(currentY - mouseY) > 0.1) {
        animationFrameId = requestAnimationFrame(updatePosition)
      } else {
        animationFrameId = null
      }
    }

    function startAnimationLoop() {
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(updatePosition)
      }
    }

    function onPointerMove(e) {
      const bounds = heroEl.getBoundingClientRect()
      mouseX = e.clientX - bounds.left
      mouseY = e.clientY - bounds.top
      if (!isInside) {
        isInside = true
        heroEl.style.setProperty('--mouse-light-opacity', '1')
      }
      startAnimationLoop()
    }

    function onPointerEnter(e) {
      const bounds = heroEl.getBoundingClientRect()
      mouseX = e.clientX - bounds.left
      mouseY = e.clientY - bounds.top
      isInside = true
      heroEl.style.setProperty('--mouse-light-opacity', '1')
      startAnimationLoop()
    }

    function onPointerLeave() {
      isInside = false
      heroEl.style.setProperty('--mouse-light-opacity', '0')
    }

    heroEl.addEventListener('pointermove', onPointerMove, { passive: true })
    heroEl.addEventListener('pointerenter', onPointerEnter, { passive: true })
    heroEl.addEventListener('pointerleave', onPointerLeave, { passive: true })

    return () => {
      heroEl.removeEventListener('pointermove', onPointerMove)
      heroEl.removeEventListener('pointerenter', onPointerEnter)
      heroEl.removeEventListener('pointerleave', onPointerLeave)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [targetRef])
}
