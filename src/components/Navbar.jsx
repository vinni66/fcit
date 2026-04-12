import { useRef, useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X, GraduationCap, Search, ChevronDown, Sparkles } from 'lucide-react'

const primaryLinks = [
  { name: 'Home', path: '/' },
  { name: 'Programs', path: '/programs' },
  { name: 'Faculty', path: '/faculty' },
  { name: 'Placements', path: '/student-internships-placements' },
  { name: 'Admissions', path: '/admissions' },
]

const secondaryLinks = [
  { name: 'About', path: '/about' },
  { name: 'Research', path: '/research-publications' },
  { name: 'Achievements', path: '/achievements' },
  { name: 'Alumni', path: '/alumni' },
  { name: 'Contact', path: '/contact-us' },
]

const allLinks = [...primaryLinks, ...secondaryLinks]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const location = useLocation()
  
  const { scrollY } = useScroll()

  // Smart Hide Navbar Logic
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  // Magnetic Effect State
  const brandRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springConfig = { damping: 20, stiffness: 150 }
  const magX = useSpring(mouseX, springConfig)
  const magY = useSpring(mouseY, springConfig)

  const handleMouseMove = (e) => {
    if (!brandRef.current) return
    const rect = brandRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set((e.clientX - centerX) * 0.15)
    mouseY.set((e.clientY - centerY) * 0.15)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, backdropFilter: 'blur(0.01px)' }}
      animate={{ 
        y: hidden ? -100 : 0,
        backgroundColor: scrolled ? 'rgba(114, 28, 36, 0.95)' : 'rgba(255, 249, 235, 0.4)',
        backgroundImage: scrolled 
          ? 'linear-gradient(to right, rgba(114, 28, 36, 0.98), rgba(154, 43, 54, 0.98), rgba(218, 165, 32, 0.98))' 
          : 'none',
        backdropFilter: scrolled ? 'blur(25px)' : 'blur(0.01px)',
        paddingTop: scrolled ? '0.5rem' : '1.25rem',
        paddingBottom: scrolled ? '0.5rem' : '1.25rem',
        borderBottomColor: scrolled ? 'rgba(218, 165, 32, 0.3)' : 'rgba(255, 255, 255, 0)',
        boxShadow: scrolled ? '0 15px 50px -10px rgba(114, 28, 36, 0.4)' : '0 0 0px 0px rgba(0,0,0,0)'
      }}
      transition={{ 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1],
        backdropFilter: { type: 'tween', ease: 'easeOut', duration: 0.4 },
        y: { duration: 0.4, ease: "easeInOut" }
      }}
      className="fixed top-0 left-0 right-0 z-50 border-b flex items-center h-20 transition-all duration-500"
    >
      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-14">
          <motion.div
            ref={brandRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: magX, y: magY }}
            className="flex items-center space-x-4 group shrink-0 py-1 px-3 rounded-2xl transition-colors hover:bg-white/5 cursor-pointer"
          >
            <Link to="/" className="flex items-center space-x-4">
              {/* Emblem Logo with Glint */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex items-center justify-center p-2 bg-white rounded-2xl shadow-xl overflow-hidden group/logo border border-fcit-400/10"
              >
                <img src="https://cdn.jsdelivr.net/gh/vinni66/Images@main/assets/gmulogo1.png" alt="FCIT Logo" className="h-10 w-auto object-contain drop-shadow-md z-10" />

                {/* Light Sweep (Glint) */}
                <motion.div
                  animate={{
                    left: ["-100%", "200%"]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut"
                  }}
                  className="absolute top-0 h-full w-12 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 z-20"
                />
              </motion.div>

              <motion.div
                className="flex flex-col justify-center border-l-2 transition-colors pl-3 sm:pl-4 border-white/20 leading-tight group-hover:border-fcit-200 transition-all duration-500"
              >
                <div className="flex items-center gap-2">
                  <motion.span
                    className={`font-medium text-[0.7rem] sm:text-[1.1rem] tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-0.5 ${scrolled ? 'text-white/80' : 'text-slate-500'}`}
                  >
                    Faculty of
                  </motion.span>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 }}
                    className={`hidden xs:flex px-1.5 sm:px-2 py-0.5 rounded-full items-center gap-1 ${scrolled ? 'bg-white/10 border-white/20' : 'bg-fcit-400/10 border-fcit-400/20'}`}
                  >
                    <Sparkles className={`w-2 sm:w-2.5 h-2 sm:h-2.5 ${scrolled ? 'text-fcit-200' : 'text-fcit-400'}`} />
                    <span className={`text-[8px] sm:text-[10px] font-black tracking-tighter uppercase ${scrolled ? 'text-white' : 'text-fcit-400'}`}>Center of Excellence</span>
                  </motion.div>
                </div>
                  <motion.span
                    animate={{
                      backgroundPosition: ["0% center", "200% center"]
                    }}
                    transition={{
                      backgroundPosition: { duration: 5, repeat: Infinity, ease: "linear" }
                    }}
                    className={`font-black text-[0.8rem] sm:text-[1.4rem] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-fcit-400 via-fcit-200 to-fcit-400 bg-[length:200%_auto] filter drop-shadow-[0_2px_5px_rgba(114,28,36,0.1)] ${scrolled ? 'from-white via-fcit-200 to-white' : ''}`}
                  >
                    Computing and IT
                  </motion.span>
              </motion.div>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center space-x-1">
            {primaryLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-black transition-all duration-300 whitespace-nowrap rounded-xl ${isActive
                    ? (scrolled ? 'text-white bg-white/10 shadow-lg ring-1 ring-white/20' : 'text-fcit-400 bg-fcit-100/80 shadow-sm ring-1 ring-fcit-400/10')
                    : (scrolled ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-slate-600 hover:text-fcit-400 hover:bg-fcit-100/40')
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className={`absolute -bottom-1 left-1.5 right-1.5 h-1 rounded-full ${scrolled ? 'bg-white' : 'bg-fcit-400'}`}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              )
            })}

            {/* More Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setDropdownOpen(true)}
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`flex items-center gap-1 px-4 py-2 text-sm font-black transition-all duration-300 rounded-xl ${dropdownOpen || secondaryLinks.some(l => location.pathname === l.path)
                  ? (scrolled ? 'text-white bg-white/10 shadow-lg ring-1 ring-white/20' : 'text-fcit-400 bg-fcit-100/80 shadow-sm ring-1 ring-fcit-400/10')
                  : (scrolled ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-slate-600 hover:text-fcit-400 hover:bg-fcit-100/40')
                  }`}
              >
                More
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-[-1]"
                      onMouseEnter={() => setDropdownOpen(false)}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-56 p-2 bg-fcit-400/95 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl z-50 overflow-hidden"
                      onMouseLeave={() => setDropdownOpen(false)}
                    >
                      <div className="flex flex-col gap-1">
                        {secondaryLinks.map((link) => {
                          const isActive = location.pathname === link.path
                          return (
                            <Link
                              key={link.path}
                              to={link.path}
                              onClick={() => setDropdownOpen(false)}
                              className={`px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 flex items-center justify-between group ${isActive
                                ? 'text-fcit-400 bg-fcit-100'
                                : 'text-white/80 hover:text-white hover:bg-white/10'
                                }`}
                            >
                              {link.name}
                              <div className={`w-1 h-1 rounded-full transition-all duration-300 ${isActive ? 'bg-fcit-400 scale-150' : 'bg-white/20 group-hover:bg-white scale-100'}`} />
                            </Link>
                          )
                        })}
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Pill-style Search Button */}
            <div className={`pl-4 ml-2 border-l transition-colors border-white/20`}>
              <button
                onClick={() => setSearchOpen(true)}
                className={`flex items-center gap-2 pr-4 pl-3 py-2 rounded-full transition-all bg-white/10 text-white hover:bg-white/20 border border-white/10 group/search`}
                aria-label="Search"
              >
                <Search className="w-4 h-4 text-white/70 group-hover/search:text-white group-hover/search:scale-110 transition-all" />
                <span className="text-xs font-bold text-white/60 group-hover/search:text-white transition-colors">Search...</span>
              </button>
            </div>
          </nav>

          {/* Mobile Apply, Search & Toggle */}
          <div className="flex items-center gap-2 xl:hidden">
            <Link
              to="/admissions"
              className={`text-white text-xs font-bold px-4 py-2 rounded-xl transition-all bg-white/20 border border-white/20 shadow-lg`}
            >
              Apply
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2 rounded-xl transition-colors text-white`}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className={`absolute top-full left-0 right-0 border-t overflow-hidden p-4 bg-fcit-400 border-white/10 shadow-2xl`}
          >
            <div className="grid grid-cols-2 gap-2">
              {allLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`px-5 py-4 rounded-2xl text-sm font-bold transition-all duration-300 flex items-center gap-3 ${location.pathname === link.path
                    ? 'text-fcit-400 bg-fcit-100 shadow-inner'
                    : 'text-white/80 hover:bg-white/10'
                    }`}
                >
                  <div className={`w-1.5 h-1.5 rounded-full ${location.pathname === link.path ? 'bg-fcit-400' : 'bg-white'}`} />
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>




      {/* Search Overlay Placeholder */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-start justify-center pt-24 px-4"
          >
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100"
            >
              <div className="flex items-center px-4 border-b border-slate-100">
                <Search className="w-5 h-5 text-slate-400" />
                <input
                  autoFocus
                  type="text"
                  placeholder="Search faculty, programs, or news..."
                  className="flex-1 w-full p-4 text-slate-700 focus:outline-none text-lg"
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="p-2 text-slate-400 hover:text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4 bg-slate-50 text-center text-slate-500 text-sm">
                Press Enter to search
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
