import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {},
})

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof document !== 'undefined') {
      const currentAttr = document.documentElement.getAttribute('data-theme')
      if (currentAttr === 'light' || currentAttr === 'dark') {
        return currentAttr
      }
    }
    try {
      const saved = localStorage.getItem('portfolio-theme')
      if (saved === 'light' || saved === 'dark') return saved
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light'
      }
    } catch {
      // Ignore localStorage errors
    }
    return 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('portfolio-theme', theme)
    } catch {
      // Ignore localStorage errors
    }
  }, [theme])

  function toggleTheme() {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}

export default ThemeContext
