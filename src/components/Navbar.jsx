import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, GraduationCap } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Programs', path: '/programs' },
  { name: 'Faculty', path: '/faculty' },
  { name: 'Research', path: '/research-publications' },
  { name: 'Achievements', path: '/achievements' },
  { name: 'Placements', path: '/student-internships-placements' },
  { name: 'Alumni', path: '/alumni' },
  { name: 'Admissions', path: '/admissions' },
  { name: 'Contact', path: '/contact-us' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled
          ? 'bg-fcit-400/95 backdrop-blur-xl border-fcit-400 shadow-[0_10px_30px_-10px_rgba(114,28,36,0.3)] py-2'
          : 'bg-gradient-to-r from-fcit-400 to-[#5d171d] shadow-lg py-4 border-transparent'
      }`}
    >
      <div className="w-full max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="flex items-center justify-center"
            >
              <img src="https://cdn.jsdelivr.net/gh/vinni66/Images/assets/gmulogo1.png" alt="GMU Logo" className="h-10 sm:h-12 lg:h-14 w-auto object-contain drop-shadow-sm" />
            </motion.div>
            <div className="hidden md:flex flex-col justify-center border-l-2 border-white/20 pl-3 xl:pl-4">
              <span className="font-extrabold text-[0.8rem] lg:text-[0.9rem] tracking-tight text-white group-hover:text-fcit-200 transition-colors leading-snug">
                Faculty of <br /> Computer Applications
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center space-x-0.5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-[13px] xl:text-sm font-bold transition-all duration-300 whitespace-nowrap rounded-md ${
                    isActive
                      ? 'text-fcit-400 bg-fcit-300 shadow-md'
                      : 'text-white/90 hover:text-white hover:bg-white/15'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-fcit-400 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden text-white p-2 rounded-xl hover:bg-white/20 transition-colors shrink-0"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-gradient-to-b from-fcit-400 to-[#5d171d] border-t border-white/10 shadow-2xl overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-5 py-4 rounded-xl text-base font-bold transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'text-fcit-400 bg-fcit-300 shadow-md'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
