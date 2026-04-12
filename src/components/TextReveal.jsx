import { motion } from 'framer-motion'

export default function TextReveal({ text, className = '', delay = 0, highlightFrom = -1 }) {
  const words = text.split(' ')

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      },
    },
  }

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(8px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0.01px)',
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        filter: {
          type: 'tween',
          ease: 'easeOut',
          duration: 0.6
        }
      },
    },
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={className}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={child}
          className={`inline-block mr-[0.35em] ${
            highlightFrom >= 0 && i >= highlightFrom
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-fcit-400 to-fcit-200'
              : ''
          }`}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}
