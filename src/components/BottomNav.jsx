import { useState, useEffect, memo, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { Home, BookOpen, Users, Briefcase, GraduationCap, Mail } from 'lucide-react'

const navItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Programs', path: '/programs', icon: BookOpen },
  { name: 'Faculty', path: '/faculty', icon: Users },
  { name: 'Placements', path: '/student-internships-placements', icon: Briefcase },
  { name: 'Admissions', path: '/admissions', icon: GraduationCap },
  { name: 'Contact', path: '/contact-us', icon: Mail },
]

const NavItem = memo(({ item, isActive, hovered, onClick, onMouseEnter, onMouseLeave }) => {
  const Icon = item.icon
  
  return (
    <button
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className={`relative flex flex-col items-center justify-center px-2 sm:px-4 py-2 rounded-full transition-all duration-300 group ${
        isActive 
          ? 'bg-fcit-400 text-white shadow-lg scale-110' 
          : 'text-slate-600 hover:bg-fcit-100 hover:scale-105'
      }`}
    >
      {/* Sliding Liquid Bubble Motion */}
      {isActive && (
        <motion.div
          layoutId="activeBubble"
          className="absolute inset-0 bg-fcit-400 rounded-full -z-10"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}

      {/* Icon */}
      <motion.div
        animate={{
          y: (isActive || hovered) ? -1 : 0,
        }}
        className={`relative z-10 transition-colors duration-300`}
      >
        <Icon size={20} className="w-[20px] h-[20px] md:w-[22px] md:h-[22px]" strokeWidth={isActive ? 2.5 : 2} />
      </motion.div>

      {/* Label - Hidden on mobile, shown on desktop */}
      <span
        className={`hidden lg:block text-[9px] md:text-[10px] tracking-tight mt-1 relative z-10 transition-all duration-300 ${
          isActive ? 'font-semibold' : 'font-medium'
        }`}
      >
        {item.name}
      </span>

      {/* Active Dot Marker */}
      {isActive && (
        <motion.div
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-fcit-300 rounded-full blur-[1px]"
          layoutId="activeDot"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </button>
  )
})

const getIsMobile = () => typeof window !== 'undefined' && window.innerWidth < 1024

export default function BottomNav() {
  const navigate = useNavigate()
  const location = useLocation()
  const isMobile = getIsMobile()
  const [hovered, setHovered] = useState(null)
  const [isVisible, setIsVisible] = useState(true)
  const { scrollY } = useScroll()
  const lastYRef = useRef(0)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastYRef.current
    if (latest > previous && latest > 150) {
      setIsVisible(false) // Scrolling down past 150px
    } else if (latest < previous) {
      setIsVisible(true) // Scrolling up
    }
    lastYRef.current = latest
  })

  // Ensure it's imported (already added above, but need useRef)

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, x: '-50%' }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            x: '-50%',
            transition: { type: "spring", stiffness: 350, damping: 25 }
          }}
          className="fixed bottom-6 left-1/2 z-[100] w-auto max-w-[95%] px-4"
        >
          {/* Main Floating Pill Container */}
          <motion.nav
            animate={{ 
              y: isMobile ? 0 : [0, -4, 0],
              transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative flex items-center justify-center gap-1 md:gap-4 px-2 lg:px-3 py-1 lg:py-2 rounded-full bg-white/95 backdrop-blur-2xl border border-fcit-400/10 shadow-[0_20px_50px_rgba(114,28,36,0.15)] transition-all duration-300"
          >
            {/* iOS Glossy Shine Overlay */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-white/40 to-transparent pointer-events-none" />

            {navItems.map((item, i) => (
              <NavItem
                key={i}
                item={item}
                isActive={location.pathname === item.path}
                hovered={hovered === i}
                onClick={() => navigate(item.path)}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              />
            ))}
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
