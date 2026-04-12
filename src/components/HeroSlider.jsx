import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'
import ThreeHero from './ThreeHero'
import TypingText from './TypingText'
import MagneticButton from './MagneticButton'

const slides = [
  {
    id: 1,
    image: 'https://raw.githubusercontent.com/vinni66/Images/main/pht/4.jpg',
    title: 'Empowering Commerce &',
    highlight: 'Tech Innovation',
    subtitle: 'Where future corporate leaders and tech innovators are forged through excellence.',
    cta: 'Explore Programs',
    link: '/programs',
  },
  {
    id: 2,
    image: 'https://raw.githubusercontent.com/vinni66/Images/main/pht/3.jpg',
    title: 'Transformative',
    highlight: 'Learning Journey',
    subtitle: 'State-of-the-art facilities and a dynamic curriculum aligned with global standards.',
    cta: 'About Us',
    link: '/about',
  },
  {
    id: 3,
    image: 'https://raw.githubusercontent.com/vinni66/Images/main/pht/2.jpg',
    title: 'Global Computing',
    highlight: 'Excellence',
    subtitle: 'Join a community of innovators solving real-world challenges through code.',
    cta: 'Admissions',
    link: '/admissions',
  },
  {
    id: 4,
    image: 'https://raw.githubusercontent.com/vinni66/Images/main/pht/1.jpg',
    title: 'Cutting-Edge',
    highlight: 'AI & Research',
    subtitle: 'Push the boundaries of AI, Data Science, and Cyber Security with expert mentors.',
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
    }, 8000)
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
    <div className="relative w-full h-screen md:h-[90vh] overflow-hidden bg-slate-900 rounded-b-[4rem] md:rounded-b-[5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] z-0">
      {/* Background Images with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${current}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.9, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img 
            src={slides[current].image} 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          {/* Subtle 10% Vignette/Overlay */}
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* 3D Background Overlay - Lightened */}
      <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-screen">
        <ThreeHero />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="absolute inset-0"
        >
          {/* Content */}
          <div className="relative z-10 w-full h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fcit-400/10 border border-fcit-400/20 text-fcit-200 font-bold text-sm mb-8 backdrop-blur-md"
                >
                  <Sparkles className="w-4 h-4" /> 
                  <span className="uppercase tracking-widest text-[10px]">Future Ready Engineering</span>
                </motion.div>

                <div className="mb-6">
                  <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] flex flex-col">
                    <span className="opacity-80 drop-shadow-2xl">{slides[current].title}</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-fcit-200 via-fcit-300 to-white drop-shadow-2xl py-2 text-glow">
                       <TypingText text={slides[current].highlight} key={current} />
                    </span>
                  </h1>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg md:text-2xl text-slate-100/80 mb-12 max-w-2xl leading-relaxed font-light drop-shadow-lg"
                >
                  {slides[current].subtitle}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-6 items-start"
                >
                  <MagneticButton 
                    href={slides[current].link}
                    className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-fcit-400 to-fcit-300 text-white px-10 py-5 rounded-full font-bold text-lg overflow-hidden transition-all hover:shadow-[0_0_35px_rgba(218,165,32,0.4)] glow-maroon"
                  >
                    <span className="relative z-10">{slides[current].cta}</span>
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                  </MagneticButton>

                  <MagneticButton 
                    href="/contact-us"
                    className="group relative inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
                  >
                    Contact Us
                  </MagneticButton>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-12 right-12 z-20 flex gap-4">
        <button 
          onClick={prevSlide}
          className="w-16 h-16 rounded-full glass border border-white/20 flex items-center justify-center text-white hover:bg-fcit-400/20 hover:scale-110 transition-all duration-300"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button 
          onClick={nextSlide}
          className="w-16 h-16 rounded-full glass border border-white/20 flex items-center justify-center text-white hover:bg-fcit-400/20 hover:scale-110 transition-all duration-300"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIsAutoPlaying(false)
              setCurrent(i)
            }}
            className={`transition-all duration-700 rounded-full h-1.5 ${
              current === i 
                ? 'w-12 bg-white' 
                : 'w-4 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
