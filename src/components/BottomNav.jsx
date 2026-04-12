import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, BookOpen, Users, Briefcase, GraduationCap, Mail } from 'lucide-react'

const navItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Programs', path: '/programs', icon: BookOpen },
  { name: 'Faculty', path: '/faculty', icon: Users },
  { name: 'Placements', path: '/student-internships-placements', icon: Briefcase },
  { name: 'Admissions', path: '/admissions', icon: GraduationCap },
  { name: 'Contact', path: '/contact-us', icon: Mail },
]

export default function BottomNav() {
  const navigate = useNavigate()
  const location = useLocation()
  const [hovered, setHovered] = useState(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, x: '-50%' }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            x: '-50%',
            transition: { type: "spring", stiffness: 260, damping: 20 }
          }}
          className="fixed bottom-6 left-1/2 z-[100] w-auto max-w-[95%] px-4"
        >
          {/* Main Floating Pill Container */}
          <motion.nav
            animate={{ 
              y: [0, -4, 0],
              transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative flex items-center justify-center gap-2 md:gap-4 px-3 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/25 shadow-[0_10px_40px_rgba(0,0,0,0.3)] transition-all duration-300"
          >
            {/* iOS Glossy Shine Overlay */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />

            {navItems.map((item, i) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              
              return (
                <button
                  key={i}
                    onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => navigate(item.path)}
                  className={`relative flex flex-col items-center justify-center px-4 py-2 rounded-full transition-all duration-300 group ${
                    isActive 
                      ? 'bg-white/30 backdrop-blur-md shadow-md scale-110 text-yellow-500' 
                      : 'text-gray-700 hover:bg-white/20 hover:scale-105'
                  }`}
                >
                  {/* Sliding Liquid Bubble Motion */}
                  {isActive && (
                    <motion.div
                      layoutId="activeBubble"
                      className="absolute inset-0 bg-white/10 rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}

                  {/* Icon */}
                  <motion.div
                    animate={{
                      y: (isActive || hovered === i) ? -1 : 0,
                    }}
                    className={`relative z-10 transition-colors duration-300`}
                  >
                    <Icon size={20} className="md:w-[22px] md:h-[22px]" strokeWidth={isActive ? 2.5 : 2} />
                  </motion.div>

                  {/* Label */}
                  <span
                    className={`text-[9px] md:text-[10px] tracking-tight mt-1 relative z-10 transition-all duration-300 ${
                      isActive ? 'font-semibold' : 'font-medium'
                    }`}
                  >
                    {item.name}
                  </span>
                </button>
              )
            })}
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
