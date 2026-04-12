import { useState, useEffect } from 'react'
import { motion, useSpring, useTransform, animate } from 'framer-motion'
import { Users, GraduationCap, Award, BookOpen } from 'lucide-react'

function Counter({ value, suffix = "" }) {
  const [displayValue, setDisplayValue] = useState(0)
  
  return (
    <motion.span
      whileInView={{
        opacity: [0, 1],
      }}
      onViewportEnter={() => {
        const controls = animate(0, value, {
          duration: 2,
          ease: "easeOut",
          onUpdate(latest) {
            setDisplayValue(Math.floor(latest))
          }
        })
        return () => controls.stop()
      }}
    >
      {displayValue}{suffix}
    </motion.span>
  )
}

const stats = [
  { label: 'Students Enrolled', value: 2500, suffix: '+', icon: Users, color: 'from-fcit-400 to-[#5d171d]' },
  { label: 'Faculty Members', value: 120, suffix: '+', icon: GraduationCap, color: 'from-fcit-300 to-fcit-200' },
  { label: 'Placements', value: 95, suffix: '%', icon: Award, color: 'from-fcit-400 to-fcit-300' },
  { label: 'Programs', value: 15, suffix: '+', icon: BookOpen, color: 'from-fcit-200 to-fcit-100' },
]

export default function StatsCounter() {
  return (
    <div className="py-24 relative overflow-hidden bg-white">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-fcit-400/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-fcit-300/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group p-10 rounded-[3rem] bg-white border border-slate-100 shadow-premium hover:shadow-[0_20px_50px_-12px_rgba(114,28,36,0.2)] hover:border-fcit-200 transition-all duration-500 hover:scale-105"
            >
              <div className={`w-16 h-16 rounded-[1.25rem] bg-gradient-to-br ${stat.color} flex items-center justify-center mb-8 shadow-lg shadow-fcit-400/20 transform group-hover:-translate-y-2 transition-transform duration-300`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tighter text-glow">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-fcit-400 font-black uppercase tracking-[0.2em] text-[10px] opacity-70">
                {stat.label}
              </p>
              
              {/* Subtle line accent */}
              <div className="w-12 h-1 bg-gradient-to-r from-fcit-400 to-transparent mt-4 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
