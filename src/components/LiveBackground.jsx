import { motion } from 'framer-motion'
import { memo } from 'react'

const LiveBackground = memo(() => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Moving Atmospheric Blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, -50, 0],
          rotate: [0, 45, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-fcit-400/5 rounded-full blur-[140px]" 
      />
      <motion.div 
        animate={{ 
          scale: [1.3, 1, 1.3],
          x: [0, -80, 0],
          y: [0, 60, 0],
          rotate: [0, -60, 0]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-fcit-200/5 rounded-full blur-[120px]" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          x: [0, 40, 0],
          y: [0, 80, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[30%] left-[20%] w-[400px] h-[400px] bg-fcit-300/5 rounded-full blur-[100px]" 
      />

      {/* Floating Digital Particles */}
      {[...Array(typeof window !== 'undefined' && window.innerWidth < 768 ? 10 : 30)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%",
            opacity: Math.random() * 0.2 + 0.05,
            scale: Math.random() * 0.8 + 0.2
          }}
          animate={{
            y: [null, (Math.random() - 0.5) * 150 + "px"],
            x: [null, (Math.random() - 0.5) * 150 + "px"],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10 + Math.random() * 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-1 h-1 bg-fcit-400 rounded-full blur-[0.5px]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Periodic Scanning Sweep - Desktop Only */}
      <motion.div 
        animate={{ top: ['-20%', '120%'] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-fcit-400/10 to-transparent blur-sm hidden lg:block"
      />
    </div>
  )
})

LiveBackground.displayName = 'LiveBackground'
export default LiveBackground
