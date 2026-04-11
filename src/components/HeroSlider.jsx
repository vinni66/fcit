import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop',
    title: 'Welcome to FCIT',
    highlight: 'Excellence',
    subtitle: 'Where future tech leaders are made through comprehensive engineering education and innovation.',
    cta: 'Explore Programs',
    link: '/programs',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop',
    title: 'Transformative',
    highlight: 'Learning',
    subtitle: 'State-of-the-art facilities and a dynamic curriculum aligned with the latest industry standards.',
    cta: 'About Us',
    link: '/about',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop',
    title: 'Vibrant Campus',
    highlight: 'Experience',
    subtitle: 'Join a thriving community of peers, researchers, and innovators shaping tomorrow.',
    cta: 'Life at FCIT',
    link: '/about',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop',
    title: 'Global',
    highlight: 'Opportunities',
    subtitle: 'Securing top placements and internships for our students at the world’s leading technology companies.',
    cta: 'View Placements',
    link: '/student-internships-placements',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1974&auto=format&fit=crop',
    title: 'Cutting-Edge',
    highlight: 'Research',
    subtitle: 'Push the boundaries of AI, Data Science, and Cyber Security with our expert faculty.',
    cta: 'Our Research',
    link: '/research-publications',
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 6000)
    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setIsAutoPlaying(false)
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  return (
    <div className="relative w-full h-[90vh] md:h-[85vh] overflow-hidden bg-slate-900 rounded-b-[3rem] md:rounded-b-[4rem] shadow-2xl z-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

          {/* Content */}
          <div className="relative z-10 w-full h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-20">
              <div className="max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight leading-[1.1]">
                    {slides[current].title} <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-fcit-200 to-fcit-400 drop-shadow-sm">
                      {slides[current].highlight}
                    </span>
                  </h1>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-lg md:text-2xl text-slate-200/90 mb-10 max-w-2xl leading-relaxed font-light"
                >
                  {slides[current].subtitle}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="flex flex-col sm:flex-row gap-5 items-start"
                >
                  <a
                    href={slides[current].link}
                    className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-fcit-400 to-fcit-300 text-white px-8 py-4 rounded-full font-bold text-lg overflow-hidden transition-transform hover:scale-105 shadow-xl shadow-fcit-400/30"
                  >
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <span className="relative z-10">{slides[current].cta}</span>
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-all duration-300" />
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-10 right-10 z-20 flex gap-4">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-10 md:left-auto md:right-1/2 md:translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIsAutoPlaying(false)
              setCurrent(i)
            }}
            className={`transition-all duration-500 rounded-full ${
              current === i 
                ? 'w-10 h-2 bg-fcit-400 shadow-[0_0_10px_rgba(114,28,36,0.8)]' 
                : 'w-2 h-2 bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
