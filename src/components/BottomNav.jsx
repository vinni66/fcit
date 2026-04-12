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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
      className="w-full max-w-6xl mx-auto my-24 px-4 z-40 relative group"
    >
      {/* Outer Glow Aura */}
      <div className="absolute inset-0 bg-fcit-400/5 blur-[100px] rounded-full pointer-events-none transition-opacity duration-1000 group-hover:opacity-100 opacity-50" />
      
      <div className="flex flex-col items-center px-4 md:px-10 py-12 rounded-[3.5rem] bg-white/40 dark:bg-slate-900/40 backdrop-blur-[50px] border border-white/40 dark:border-white/10 shadow-[0_25px_80px_-20px_rgba(114,28,36,0.15)] relative overflow-hidden">
        
        {/* Animated Accent Background */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-fcit-300/10 rounded-full blur-[80px] pointer-events-none animate-pulse" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-fcit-400/10 rounded-full blur-[80px] pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="w-full relative z-10">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-12 w-full justify-items-center">
            {navItems.map((item, i) => {
              const Icon = item.icon
              const active = location.pathname === item.path
              return (
                <button
                  key={i}
                  onClick={() => navigate(item.path)}
                  className={`relative flex flex-col items-center justify-center gap-3 p-5 w-full max-w-[8.5rem] transition-all duration-500 group/item rounded-[2rem] overflow-visible ${
                    active 
                      ? 'text-fcit-400 bg-white dark:bg-slate-800 shadow-[0_15px_35px_-10px_rgba(114,28,36,0.2)] dark:shadow-none scale-110' 
                      : 'text-slate-400 dark:text-slate-500 hover:text-fcit-400 dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/5'
                  }`}
                >
                  {/* Item Glow Backdrop */}
                  {active && (
                    <div className="absolute inset-0 bg-fcit-300/10 blur-xl rounded-full animate-pulse pointer-events-none" />
                  )}

                  <div className={`relative transition-all duration-500 group-hover/item:scale-125 group-hover/item:-translate-y-2 ${active ? 'scale-110 drop-shadow-[0_0_15px_rgba(114,28,36,0.5)]' : ''}`}>
                    <Icon size={24} strokeWidth={active ? 2.5 : 2} />
                  </div>
                  
                  <span className={`text-[10px] md:text-[11px] font-black whitespace-nowrap tracking-[0.15em] uppercase transition-all duration-300 ${
                    active 
                      ? 'text-fcit-400 opacity-100 translate-y-0' 
                      : 'text-slate-400 dark:text-slate-500 group-hover/item:text-fcit-400 group-hover/item:translate-y-[-2px]'
                  }`}>
                    {item.name}
                  </span>
                  
                  {active && (
                    <motion.div 
                      layoutId="bottomNavDot1"
                      className="absolute -top-2 w-2 h-2 bg-fcit-300 rounded-full shadow-[0_0_20px_rgba(218,165,32,1)]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  
                  {/* Subtle Hover Ring */}
                  <div className="absolute inset-0 border border-fcit-300/0 group-hover/item:border-fcit-300/20 rounded-[2rem] transition-all duration-500 pointer-events-none scale-105" />
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </motion.nav>


  )
}
