import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import MagneticButton from './MagneticButton'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (isDark) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  return (
    <MagneticButton
      onClick={toggleTheme}
      className="fixed bottom-10 left-10 z-[100] w-16 h-16 rounded-full glass flex items-center justify-center text-slate-900 dark:text-white dark:glass-dark transition-all hover:scale-110 shadow-2xl overflow-hidden"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={isDark ? 'dark' : 'light'}
          initial={{ y: 20, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -20, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.3 }}
        >
          {isDark ? <Moon className="w-8 h-8" /> : <Sun className="w-8 h-8" />}
        </motion.div>
      </AnimatePresence>
    </MagneticButton>
  )
}
