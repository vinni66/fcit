import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Pause, Play, ChevronLeft, ChevronRight } from 'lucide-react'

const galleries = [
  {
    label: 'Advanced AI Lecture Series',
    color: 'bg-orange-500',
    images: [
      'https://images.unsplash.com/photo-1544158498-5006d6342898?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1571260899304-425dea57a24c?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800&h=500',
    ],
  },
  {
    label: 'High-Performance Computing Lab',
    color: 'bg-pink-500',
    images: [
      'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=500',
    ],
  },
  {
    label: 'Cloud Computing Workshop',
    color: 'bg-fcit-100',
    images: [
      'https://images.unsplash.com/photo-1540317580384-e5d43867caa6?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1515169067868-5387abfec8da?auto=format&fit=crop&q=80&w=800&h=500',
    ],
  },
  {
    label: 'Capstone Project Exhibition',
    color: 'bg-fcit-300',
    images: [
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800&h=500',
    ],
  },
  {
    label: 'Open Source Contribution Drive',
    color: 'bg-fcit-200',
    images: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1607799279861-4ddf5b0db114?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&q=80&w=800&h=500',
    ],
  },
  {
    label: 'National Level Hackfest',
    color: 'bg-green-500',
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fd18ee4c?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800&h=500',
    ],
  },
  {
    label: 'Tech Symposium 2026',
    color: 'bg-amber-500',
    images: [
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1475721025505-c310b809a744?auto=format&fit=crop&q=80&w=800&h=500',
    ],
  },
  {
    label: 'Annual Student-Parent Networking',
    color: 'bg-rose-500',
    images: [
      'https://images.unsplash.com/photo-1511629091441-ee46146481b6?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800&h=500',
    ],
  },
  {
    label: 'Tech Carnival Cultural Eve',
    color: 'bg-fcit-400',
    images: [
      'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1470229722913-7c092fb462bd?auto=format&fit=crop&q=80&w=800&h=500',
    ],
  },
  {
    label: 'Placement Drive 2026',
    color: 'bg-teal-500',
    images: [
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1556761175-10a42426615e?auto=format&fit=crop&q=80&w=800&h=500',
    ],
  },
  {
    label: 'Wellness & Mindfulness',
    color: 'bg-lime-500',
    images: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800&h=500',
    ],
  },
]

function CarouselCard({ gallery }) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1) // 1 = forward, -1 = backward
  const [isPlaying, setIsPlaying] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const intervalRef = useRef(null)
  const total = gallery.images.length

  const goTo = (idx, dir) => {
    setDirection(dir)
    setCurrent(idx)
  }

  const next = () => goTo((current + 1) % total, 1)
  const prev = () => goTo((current - 1 + total) % total, -1)

  useEffect(() => {
    if (isPlaying && !isHovered) {
      intervalRef.current = setInterval(next, 3000)
    }
    return () => clearInterval(intervalRef.current)
  }, [isPlaying, isHovered, current, total])

  const togglePlay = (e) => {
    e.stopPropagation()
    setIsPlaying(!isPlaying)
  }

  const prevIdx = (current - 1 + total) % total
  const nextIdx = (current + 1) % total

  // Bounce/spring physics slide variants
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.85,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.85,
    }),
  }

  // Spring transition with bounce
  const springTransition = {
    x: { type: 'spring', stiffness: 300, damping: 25, mass: 0.8 },
    opacity: { duration: 0.3 },
    scale: { type: 'spring', stiffness: 400, damping: 30 },
  }

  // Thumbnail bounce-in variants
  const thumbVariants = {
    hidden: (side) => ({
      opacity: 0,
      x: side === 'left' ? 40 : -40,
      scale: 0.6,
      rotateY: side === 'left' ? 15 : -15,
    }),
    visible: {
      opacity: 1,
      x: 0,
      scale: 0.85,
      rotateY: 0,
    },
    exit: (side) => ({
      opacity: 0,
      x: side === 'left' ? 40 : -40,
      scale: 0.6,
      rotateY: side === 'left' ? 15 : -15,
    }),
  }

  const thumbSpring = {
    type: 'spring',
    stiffness: 350,
    damping: 20,
    mass: 0.6,
  }

  return (
    <motion.div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Prev thumbnail on hover */}
      <AnimatePresence custom="left">
        {isHovered && total > 1 && (
          <motion.div
            custom="left"
            variants={thumbVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={thumbSpring}
            className="absolute -left-16 top-1/2 -translate-y-1/2 z-20 w-32 h-24 rounded-lg overflow-hidden border-2 border-white shadow-2xl cursor-pointer"
            onClick={prev}
            whileHover={{ scale: 0.95, transition: { type: 'spring', stiffness: 500, damping: 15 } }}
            whileTap={{ scale: 0.8 }}
          >
            <img
              src={gallery.images[prevIdx]}
              alt="Previous"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center hover:bg-black/10 transition-colors">
              <ChevronLeft className="w-6 h-6 text-white drop-shadow-lg" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Next thumbnail on hover */}
      <AnimatePresence custom="right">
        {isHovered && total > 1 && (
          <motion.div
            custom="right"
            variants={thumbVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={thumbSpring}
            className="absolute -right-16 top-1/2 -translate-y-1/2 z-20 w-32 h-24 rounded-lg overflow-hidden border-2 border-white shadow-2xl cursor-pointer"
            onClick={next}
            whileHover={{ scale: 0.95, transition: { type: 'spring', stiffness: 500, damping: 15 } }}
            whileTap={{ scale: 0.8 }}
          >
            <img
              src={gallery.images[nextIdx]}
              alt="Next"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center hover:bg-black/10 transition-colors">
              <ChevronRight className="w-6 h-6 text-white drop-shadow-lg" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Card */}
      <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-gray-900 cursor-pointer">
        {/* Image with directional slide + bounce */}
        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={springTransition}
            className="w-full h-full absolute inset-0 bg-slate-800"
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              src={gallery.images[current]}
              alt={`${gallery.label} ${current + 1}`}
              className="w-full h-full object-cover absolute inset-0"
              onLoad={(e) => {
                e.target.style.opacity = 1;
              }}
              style={{ opacity: 0 }}
            />
            {/* Dynamic skeleton loader background that is visible until img opacity hits 1 */}
            <div className="absolute inset-0 bg-slate-200 animate-pulse -z-10" />
          </motion.div>
        </AnimatePresence>

        {/* Gradient overlay at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

        {/* Colored status dot - top left */}
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute top-3 left-3 w-3 h-3 rounded-full ${gallery.color} shadow-lg`}
        />

        {/* Controls - top right (glassmorphic) */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/40 backdrop-blur-md rounded-full px-2.5 py-1.5">
          <button
            onClick={togglePlay}
            className="text-white hover:text-fcit-200 transition-colors"
          >
            {isPlaying && !isHovered ? (
              <Pause className="w-3.5 h-3.5" />
            ) : (
              <Play className="w-3.5 h-3.5" />
            )}
          </button>
          <span className="text-white text-xs font-medium">
            {current + 1}/{total}
          </span>
        </div>

        {/* Label - bottom left */}
        <div className="absolute bottom-3 left-3">
          <h3 className="text-white font-bold text-base drop-shadow-lg">{gallery.label}</h3>
        </div>

        {/* Pagination dots - bottom center */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
          {gallery.images.map((_, i) => (
            <motion.button
              key={i}
              onClick={(e) => { e.stopPropagation(); goTo(i, i > current ? 1 : -1) }}
              animate={i === current ? { scale: [1, 1.4, 1] } : { scale: 1 }}
              transition={i === current ? { type: 'spring', stiffness: 500, damping: 15 } : {}}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-2 h-2 bg-white shadow-lg'
                  : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        {/* Hover arrows on main card with bounce */}
        <AnimatePresence>
          {isHovered && total > 1 && (
            <>
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.85 }}
                onClick={(e) => { e.stopPropagation(); prev() }}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.85 }}
                onClick={(e) => { e.stopPropagation(); next() }}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function CampusExperience() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight text-fcit-300">
            Campus Life Gallery
          </h2>

          {/* Removed descriptive text for cleaner look matching the reference */}
        </motion.div>

        {/* Gallery Grid Container - Gold Background */}
        <div className="bg-[#DFB94C] py-12 px-6 rounded-t-[2.5rem] shadow-inner mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 mx-[6%]">
          {galleries.map((gallery, i) => (
            <CarouselCard key={i} gallery={gallery} />
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
