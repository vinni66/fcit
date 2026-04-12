import { motion } from 'framer-motion'

export default function AnimatedDivider({ className = '' }) {
  return (
    <div className={`relative flex items-center justify-center py-8 ${className}`}>
      {/* Flowing line */}
      <motion.div
        className="h-[2px] w-40 rounded-full overflow-hidden relative"
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 160, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, transparent, #721C24, #DAA520, #721C24, transparent)',
            backgroundSize: '200% 100%',
          }}
          animate={{
            backgroundPosition: ['0% center', '200% center'],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </motion.div>

      {/* Center diamond */}
      <motion.div
        className="absolute w-2.5 h-2.5 bg-fcit-300 rounded-sm rotate-45"
        initial={{ scale: 0, rotate: 0, boxShadow: '0 0 0px 0px rgba(218,165,32,0)' }}
        whileInView={{ scale: 1, rotate: 45 }}
        viewport={{ once: true }}
        transition={{ 
          scale: { delay: 0.4, type: 'spring', stiffness: 300, damping: 15 },
          rotate: { delay: 0.4, type: 'spring', stiffness: 300, damping: 15 },
          boxShadow: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        animate={{
          boxShadow: [
            '0 0 8px 0px rgba(218,165,32,0.4)',
            '0 0 20px 2px rgba(218,165,32,0.8)',
            '0 0 8px 0px rgba(218,165,32,0.4)',
          ],
        }}
      />
    </div>
  )
}
