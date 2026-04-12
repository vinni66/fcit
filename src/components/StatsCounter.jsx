import { useState, useEffect, useRef, memo } from 'react'
import { motion, useSpring, useTransform, useMotionValue, animate } from 'framer-motion'
import { Users, GraduationCap, Award, BookOpen } from 'lucide-react'

const stats = [
  { label: 'Students Enrolled', value: 2500, suffix: '+', icon: Users, color: 'from-fcit-400 to-[#5d171d]' },
  { label: 'Faculty Members', value: 120, suffix: '+', icon: GraduationCap, color: 'from-fcit-300 to-fcit-200' },
  { label: 'Placements', value: 95, suffix: '%', icon: Award, color: 'from-fcit-400 to-fcit-300' },
  { label: 'Programs', value: 15, suffix: '+', icon: BookOpen, color: 'from-fcit-200 to-fcit-100' },
]

const Counter = memo(({ value, suffix = "" }) => {
  const [displayValue, setDisplayValue] = useState(0)
  
  return (
    <motion.span
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
})

const StatCard = memo(({ stat, index }) => {
  const cardRef = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 })
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 })

  function handleMouseMove(event) {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((event.clientX - centerX) * 0.2)
    y.set((event.clientY - centerY) * 0.2)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30, boxShadow: '0 0 0px 0px rgba(218,165,32,0)' }}
      whileInView={{
        opacity: 1,
        y: 0,
        boxShadow: [
          '0 0 0px 0px rgba(218,165,32,0)',
          '0 0 30px 0px rgba(218,165,32,0.3)',
          '0 20px 50px -12px rgba(114,28,36,0.15)',
        ],
      }}
      style={{ x: mouseX, y: mouseY }}
      transition={{ delay: index * 0.1, duration: 1.2, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.1 }}
      className="relative group p-10 rounded-[3rem] bg-white border border-slate-100 transition-all duration-300 hover:border-fcit-200 hover:scale-[1.02] overflow-hidden"
    >
      {/* Entrance glow ring */}
      <motion.div
        className="absolute inset-0 rounded-[3rem] pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 0.4, 0] }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.3, duration: 1.5 }}
        style={{
          background: 'radial-gradient(circle at center, rgba(218,165,32,0.15) 0%, transparent 70%)',
        }}
      />
      
      {/* Glossy Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <motion.div 
        className={`w-16 h-16 rounded-[1.25rem] bg-gradient-to-br ${stat.color} flex items-center justify-center mb-8 shadow-lg shadow-fcit-400/20 transform group-hover:-translate-y-2 transition-transform duration-300`}
        whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
      >
        <stat.icon className="w-8 h-8 text-white" />
      </motion.div>
      <div className="text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tighter text-glow">
        <Counter value={stat.value} suffix={stat.suffix} />
      </div>
      <p className="text-fcit-400 font-black uppercase tracking-[0.2em] text-[10px] opacity-70">
        {stat.label}
      </p>
      <div className="w-12 h-1 bg-gradient-to-r from-fcit-400 to-transparent mt-4 rounded-full" />
    </motion.div>
  )
})

export default function StatsCounter() {
  return (
    <div className="py-24 relative overflow-hidden bg-white">
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-fcit-400/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-fcit-300/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
