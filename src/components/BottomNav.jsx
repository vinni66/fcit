import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, User, BookOpen, Users, Award, Briefcase, GraduationCap, Mail, BookMarked, School, FlaskConical, Image, FolderOpen, Monitor } from 'lucide-react'

const navItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'About', path: '/about', icon: User },
  { name: 'SCA', path: '/programs', icon: Monitor },
  { name: 'SCS', path: '/programs', icon: BookOpen },
  { name: 'Student Projects', path: '/research-publications', icon: FolderOpen },
  { name: 'Research', path: '/research-publications', icon: FlaskConical },
  { name: 'Internships', path: '/student-internships-placements', icon: Briefcase },
  { name: 'Achievements', path: '/achievements', icon: Award },
  { name: 'Faculty', path: '/faculty', icon: Users },
  { name: 'Resources', path: '/learning-resources', icon: BookMarked },
  { name: 'Admissions', path: '/admissions', icon: School },
  { name: 'Contact', path: '/contact-us', icon: Mail },
]

export default function BottomNav() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <motion.nav
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
      className="w-full max-w-6xl mx-auto my-12 px-4 z-40 relative"
    >
      <div className="flex flex-col items-center px-4 md:px-8 py-6 rounded-[2.5rem] bg-white/60 backdrop-blur-[40px] border border-white/60 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-fcit-100/20 to-transparent pointer-events-none" />
        
        <div className="w-full relative z-10">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-2 gap-y-4 md:gap-x-4 md:gap-y-6 w-full justify-items-center">
            {navItems.map((item, i) => {
              const Icon = item.icon
              const active = location.pathname === item.path
              return (
                <button
                  key={i}
                  onClick={() => navigate(item.path)}
                  className={`relative flex flex-col items-center justify-center gap-2 p-3 sm:py-4 sm:px-4 w-full max-w-[7rem] transition-all duration-300 group rounded-[1.25rem] ${
                    active ? 'text-fcit-600 bg-white shadow-[0_8px_20px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] border border-slate-100 scale-105' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-500/10 border border-transparent'
                  }`}
                >
                  <Icon size={20} className={`transition-transform duration-300 group-hover:scale-110 ${active ? 'scale-110 drop-shadow-sm' : ''}`} />
                  <span className={`text-[9.5px] md:text-xs font-bold whitespace-nowrap tracking-wider uppercase transition-colors ${active ? 'text-fcit-600' : 'text-slate-500 group-hover:text-slate-800'}`}>
                    {item.name}
                  </span>
                  {active && (
                    <motion.div 
                      layoutId="bottomNavDot1"
                      className="absolute -top-1 w-2 h-2 bg-fcit-400 rounded-full shadow-[0_0_8px_rgba(99,103,255,0.8)]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
