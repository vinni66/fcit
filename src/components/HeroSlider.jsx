import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'
import ThreeHero from './ThreeHero'
import TypingText from './TypingText'
import MagneticButton from './MagneticButton'
import { CDN_BASE } from '../constants'

const slides = [
  {
    id: 1,
    image: `${CDN_BASE}/gallery/tech_carnival_2k26/tech_carnival_2k26_1.jpeg`,
    title: 'Faculty of',
    highlight: 'Computing and IT',
    subtitle: 'Where future corporate leaders and tech innovators are forged through excellence.',
    cta: 'Explore Programs',
    link: '/programs',
  },
  {
    id: 2,
    image: `${CDN_BASE}/gallery/graduation_day/graduation_day_1.jpeg`,
    title: 'Empowering',
    highlight: 'Graduates',
    subtitle: 'Celebrating academic excellence and the beginning of professional excellence.',
    cta: 'About Us',
    link: '/about',
  },
  {
    id: 3,
    image: `${CDN_BASE}/gallery/ethnic_day/ethnic_day_1.jpeg`,
    title: 'Active',
    highlight: 'Campus Life',
    subtitle: 'Developing leadership and teamwork through collaborative sports and events.',
    cta: 'Media Gallery',
    link: '/gallery',
  },
  {
    id: 4,
    image: `${CDN_BASE}/gallery/conference_2k25/conference_2k25_1.jpeg`,
    title: 'Innovative',
    highlight: 'Research',
    subtitle: 'Pushing boundaries in technology through global conferences and research initiatives.',
    cta: 'Our Research',
    link: '/research-publications',
  },
  {
    id: 5,
    image: `${CDN_BASE}/gallery/student_corner/student_corner_6.jpeg`,
    title: 'Collaborative',
    highlight: 'Learning Hub',
    subtitle: 'Engaging in student-led initiatives and interactive peer learning programs.',
    cta: 'Student Life',
    link: '/campus-life',
  },
  {
    id: 6,
    image: `${CDN_BASE}/gallery/mca_outreach_program/mca_outreach_program_1.jpeg`,
    title: 'Meaningful',
    highlight: 'Social Impact',
    subtitle: 'Extending technology benefits to the community through specialized outreach and NSS.',
    cta: 'Impact Stories',
    link: '/outreach',
  },
  {
    id: 7,
    image: `${CDN_BASE}/gallery/ideathon/ideathon_1.jpeg`,
    title: 'Future',
    highlight: 'Creators',
    subtitle: 'Fostering an entrepreneurial mindset through regular hackathons and innovation cycles.',
    cta: 'Our Events',
    link: '/events',
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
    <div className="relative w-full h-screen md:h-[90vh] overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-fcit-400/20 rounded-b-[4rem] md:rounded-b-[5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] z-0">
      {/* Background Images with AnimatePresence */}
      <AnimatePresence>
        <motion.div
          key={`bg-${current}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <motion.img 
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 10, ease: "linear" }}
            src={slides[current].image} 
            alt="Hero Background" 
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          {/* Subtle 10% Vignette/Overlay */}
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* 3D Background Overlay - Lightened */}
      <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-screen overflow-hidden">
        <ThreeHero />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          className="absolute inset-0 z-10"
        >
          {/* Content */}
          <div className="relative z-10 w-full h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32">
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
                  className="flex flex-col sm:flex-row gap-6 items-start transform-gpu will-change-transform"
                >
                  <MagneticButton 
                    href={slides[current].link}
                    className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-fcit-400 to-fcit-300 text-white px-10 py-5 rounded-full font-bold text-lg overflow-hidden transition-all hover:shadow-[0_0_35px_rgba(218,165,32,0.4)] glow-maroon transform-gpu will-change-transform"
                  >
                    <span className="relative z-10">{slides[current].cta}</span>
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                  </MagneticButton>

                  <MagneticButton 
                    href="/contact-us"
                    className="group relative inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all transform-gpu will-change-transform"
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
