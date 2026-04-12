import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[200] origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #721C24, #DAA520, #fcd34d, #721C24)',
        backgroundSize: '300% 100%',
      }}
      animate={{
        backgroundPosition: ['0% center', '100% center'],
      }}
      transition={{
        backgroundPosition: {
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        },
      }}
    />
  )
}
