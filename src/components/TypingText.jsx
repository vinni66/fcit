import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function TypingText({ text, className }) {
  const [displayText, setDisplayText] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setDisplayText('')
    setIndex(0)
  }, [text])

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[index])
        setIndex((prev) => prev + 1)
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [index, text])

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-[2px] h-[0.8em] bg-current ml-1 align-middle"
      />
    </span>
  )
}
