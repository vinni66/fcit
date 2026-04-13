import { useRef, useState, useEffect, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X, ChevronDown, Sparkles, ArrowRight, ChevronRight } from 'lucide-react'

const primaryLinks = [
  { name: 'Home', path: '/' },
  { name: 'Programs', path: '/programs' },
  { name: 'Gallery', path: '/gallery' },
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

// Magnetic Link Wrapper for extra smoothness
function MagneticLink({ children, to, isActive, isScrolled }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const springConfig = { damping: 15, stiffness: 150 }
  const mouseX = useSpring(x, springConfig)
  const mouseY = useSpring(y, springConfig)

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2
    x.set((clientX - centerX) * 0.4)
    y.set((clientY - centerY) * 0.4)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: mouseX, y: mouseY }}
      className="relative z-10"
    >
      <Link
        to={to}
        className={`relative z-10 px-6 py-2.5 text-xs font-black uppercase tracking-widest transition-colors duration-500 flex items-center justify-center ${
          isActive 
            ? (isScrolled ? 'text-white' : 'text-fcit-400') 
            : (isScrolled ? 'text-white/70' : 'text-slate-600')
        }`}
      >
        {isActive && (
          <motion.div
            layoutId="activeIndicator"
            className={`absolute inset-0 rounded-full shadow-lg ring-1 ${
              isScrolled ? 'bg-white/20 ring-white/30' : 'bg-fcit-100 ring-fcit-400/10'
            }`}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className="relative z-10">{children}</span>
      </Link>
    </motion.div>
  )
}

const getIsMobile = () => typeof window !== 'undefined' && window.innerWidth < 1024

export default function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState(null)
  const location = useLocation()
  
  const { scrollY } = useScroll()

  // Optimized Interpolations
  const scrollRange = [0, 100]
  
  // Use a numeric spring for the overall transition progress (0 to 1)
  const transitionProgress = useTransform(scrollY, scrollRange, [0, 1])
  const smoothProgress = useSpring(transitionProgress, { stiffness: 200, damping: 30 })

  // Drive geometry from the smooth numeric progress
  const navWidth = useTransform(smoothProgress, [0, 1], ["100%", "92%"])
  const navHeight = useTransform(smoothProgress, [0, 1], ["7.5rem", "5.2rem"])
  const navRadius = useTransform(smoothProgress, [0, 1], ["0rem", "2.8rem"])
  const navY = useTransform(smoothProgress, [0, 1], [0, 18])
  const navOpacity = useTransform(smoothProgress, [0, 1], [0, 1])
  const logoScale = useTransform(smoothProgress, [0, 1], [1, 0.82])
  
  const brandTextColor = useTransform(scrollY, scrollRange, ["#721c24", "#ffffff"])
  const subTextColor = useTransform(scrollY, scrollRange, ["#94a3b8", "rgba(255,255,255,0.6)"])

  // Performance-optimized blur: Fixed blur with opacity fade (Lowered for mobile)
  const isMobile = getIsMobile()
  const backdropBlur = useTransform(scrollY, [0, 30], ["blur(0px)", `blur(${isMobile ? 12 : 25}px)`])

  const [isScrolled, setIsScrolled] = useState(false)
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 60)
    
    // Smart Hide Logic
    const previous = scrollY.getPrevious()
    if (latest > previous && latest > 250) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  // Throttled 3D Tilt Effect
  const headerRef = useRef(null)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const tiltX = useSpring(rotateX, { damping: 30, stiffness: 80 })
  const tiltY = useSpring(rotateY, { damping: 30, stiffness: 80 })

  const handleTilt = (e) => {
    // Disable tilt on mobile/touch for performance
    if (!headerRef.current || isScrolled === false || isMobile) return 
    const { clientX, clientY } = e
    const { left, top, width, height } = headerRef.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2
    rotateX.set((centerY - clientY) * 0.01)
    rotateY.set((clientX - centerX) * 0.01)
  }

  const resetTilt = () => {
    rotateX.set(0)
    rotateY.set(0)
    setHoveredLink(null)
  }

  // Brand Magnetic
  const brandRef = useRef(null)
  const bX = useMotionValue(0)
  const bY = useMotionValue(0)
  const brandX = useSpring(bX, { damping: 25, stiffness: 120 })
  const brandY = useSpring(bY, { damping: 25, stiffness: 120 })

  const handleBrandMagnetic = (e) => {
    if (!brandRef.current || isMobile) return
    const { clientX, clientY } = e
    const rect = brandRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    bX.set((clientX - centerX) * 0.2)
    bY.set((clientY - centerY) * 0.2)
  }

  return (
    <>
      <motion.header
        ref={headerRef}
        onMouseMove={handleTilt}
        onMouseLeave={resetTilt}
        animate={{ y: hidden ? -140 : 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 25 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-0 lg:p-4 pointer-events-none perspective-1000"
      >
        <motion.div
          style={{
            width: isMobile ? "94%" : navWidth,
            height: isMobile ? "4.2rem" : navHeight,
            backgroundColor: useTransform(navOpacity, (o) => `rgba(114, 28, 36, ${o * 0.96})`),
            backdropFilter: backdropBlur,
            borderRadius: isMobile ? "1.5rem" : navRadius,
            boxShadow: useTransform(navOpacity, (o) => `0 ${o * 35}px ${o * 80}px -15px rgba(0,0,0,${o * 0.5})`),
            y: isMobile ? 12 : navY,
            rotateX: tiltX,
            rotateY: tiltY,
            translateZ: 0, 
          }}
          className="max-w-[105rem] w-full flex items-center justify-between px-5 lg:px-10 pointer-events-auto relative z-10 will-change-[transform,width,height,opacity] overflow-visible preserve-3d"
        >
          <div className="flex items-center justify-between w-full h-full">
            <motion.div
              ref={brandRef}
              onMouseMove={handleBrandMagnetic}
              onMouseLeave={() => { bX.set(0); bY.set(0) }}
              style={{ x: brandX, y: brandY }}
              className="flex items-center group cursor-pointer shrink-0"
            >
              <Link to="/" className="flex items-center gap-3 lg:gap-4">
                <motion.div
                  style={{ scale: isMobile ? 0.75 : logoScale }}
                  className="relative p-2 lg:p-2.5 bg-white rounded-xl lg:rounded-2xl shadow-xl overflow-hidden group/logo ring-4 ring-white/10 shrink-0 flex items-center justify-center"
                >
                  <img 
                    src="https://cdn.jsdelivr.net/gh/vinni66/Images@main/assets/gmulogo1.png" 
                    alt="FCIT Logo" 
                    className="h-8 lg:h-10 w-auto object-contain z-10" 
                  />
                </motion.div>

                <div className="flex flex-col border-l border-white/10 pl-3 lg:pl-4 leading-none transition-all duration-500 shrink-0">
                  <div className="flex items-center gap-2 mb-0.5 lg:mb-1">
                    <motion.span 
                      style={{ color: subTextColor }}
                      className="text-[8px] sm:text-[15px] font-black tracking-[0.3em] uppercase whitespace-nowrap hidden lg:block"
                    >
                      Faculty of
                    </motion.span>
                    <div className="px-2 py-0.5 rounded-full bg-fcit-300 text-[8px] font-black text-white uppercase tracking-tighter hidden lg:block">Premier</div>
                  </div>
                  <motion.span 
                    style={{ color: brandTextColor }}
                    className="text-lg lg:text-2xl font-black tracking-tighter whitespace-nowrap transition-colors"
                  >
                    <span className="lg:hidden">FCIT</span>
                    <span className="hidden lg:inline">Computing and IT</span>
                  </motion.span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center bg-white/5 backdrop-blur-md rounded-full p-1.5 border border-white/10 shadow-inner relative">
              <AnimatePresence>
                {hoveredLink && (
                  <motion.div
                    layoutId="hoverBlob"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute inset-y-1.5 bg-white/15 rounded-full z-0 pointer-events-none"
                    transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
                    style={{ 
                      left: hoveredLink.left,
                      width: hoveredLink.width
                    }}
                  />
                )}
              </AnimatePresence>

              {primaryLinks.map((link) => (
                <MagneticLink
                  key={link.path}
                  to={link.path}
                  isActive={location.pathname === link.path}
                  isScrolled={isScrolled}
                >
                  {link.name}
                </MagneticLink>
              ))}

              {/* More Link */}
              <div className="relative group/more h-full">
                <button
                  onMouseEnter={() => setDropdownOpen(true)}
                  className={`flex items-center gap-2 px-4 py-2.5 text-xs font-black uppercase tracking-widest transition-all ${isScrolled ? 'text-white/70' : 'text-slate-600'}`}
                >
                  More <ChevronDown className={`w-3 h-3 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      onMouseLeave={() => setDropdownOpen(false)}
                      className="absolute right-0 mt-3 w-64 p-3 bg-slate-900/95 backdrop-blur-3xl border border-white/10 rounded-[2rem] shadow-2xl z-50"
                    >
                      {secondaryLinks.map((link) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          onClick={() => setDropdownOpen(false)}
                          className="flex items-center justify-between p-4 rounded-2xl text-[10px] font-black text-white hover:bg-white/10 transition-all uppercase tracking-[0.2em] group/sub"
                        >
                          {link.name} <ArrowRight className="w-3 h-3 opacity-0 group-hover/sub:opacity-100 transition-all translate-x-[-10px] group-hover/sub:translate-x-0" />
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
               <Link
                 to="/admissions"
                 className={`hidden md:flex items-center gap-3 px-8 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl ${
                   isScrolled ? 'bg-white text-fcit-400 hover:scale-105' : 'bg-fcit-400 text-white hover:shadow-maroon-300'
                 }`}
               >
                 Apply <Sparkles className="w-4 h-4" />
               </Link>
               <button
                 onClick={() => setMobileOpen(true)}
                 className={`xl:hidden p-3.5 rounded-2xl ${isScrolled ? 'bg-white/10 text-white' : 'bg-fcit-100 text-fcit-400 shadow-sm'}`}
               >
                 <Menu className="w-6 h-6" />
               </button>
            </div>
          </div>
        </motion.div>
      </motion.header>

      {/* Full-screen Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-fcit-400 flex flex-col p-12 overflow-hidden"
          >
            <div className="flex items-center justify-between mb-20">
              <div className="p-3 bg-white rounded-2xl shadow-xl">
                 <img src="https://cdn.jsdelivr.net/gh/vinni66/Images@main/assets/gmulogo1.png" alt="Logo" className="h-8 w-auto" />
              </div>
              <button 
                onClick={() => setMobileOpen(false)}
                className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-white border border-white/20 active:scale-90"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              {allLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className="text-4xl md:text-6xl font-black text-white hover:text-fcit-200 transition-colors tracking-tighter flex items-center gap-4"
                  >
                    {link.name} <ChevronRight className="w-8 h-8 opacity-20" />
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-auto grid grid-cols-2 gap-4"
            >
              <Link to="/contact-us" className="p-8 bg-white/10 rounded-3xl border border-white/20 text-white text-center">
                 <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 mb-2">Support</div>
                 <div className="font-bold">Contact Us</div>
              </Link>
              <Link to="/admissions" className="p-8 bg-fcit-300 rounded-3xl text-white text-center shadow-2xl">
                 <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60 mb-2">Enrollment</div>
                 <div className="font-bold uppercase">Apply 2026</div>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
