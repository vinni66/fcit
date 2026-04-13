import { useState, useMemo, memo } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ChevronRight, ChevronLeft, Maximize2, X, Sparkles, Image as ImageIcon, ArrowRight } from 'lucide-react'
import TextReveal from './TextReveal'

import { galleryImages } from '../data/galleryData'
import { CDN_BASE } from '../constants'

const categories = ['All', ...new Set(galleryImages.map(img => img.category))]

const images = galleryImages.map((img, i) => {
  // Use unified CDN_BASE prefix
  const finalUrl = `${CDN_BASE}/${img.url.startsWith('/') ? img.url.slice(1) : img.url}`
  
  // Find 3 other images from the same category to use for the pop-up effect
  const previews = galleryImages
    .filter(other => other.category === img.category && other.url !== img.url)
    .slice(0, 3)
    .map(p => `${CDN_BASE}/${p.url.startsWith('/') ? p.url.slice(1) : p.url}`)

  // Create a dynamic mosaic pattern
  let size = 'col-span-1 row-span-1'
  if (i % 11 === 0) size = 'col-span-2 row-span-2'
  else if (i % 7 === 0) size = 'col-span-1 row-span-2'
  else if (i % 9 === 0) size = 'col-span-2 row-span-1'
  
  return { ...img, url: finalUrl, size, previews }
})


const GalleryItem = memo(({ img, onExpand, isAlbumView }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  const handleMouseMove = (e) => {
    if (window.innerWidth < 1024) return
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      layout
      whileHover={isAlbumView ? "hover" : { scale: 1.02, y: -5 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className={`relative ${img.size} rounded-[3rem] group cursor-pointer shadow-premium hover:shadow-[0_45px_100px_-20px_rgba(0,0,0,0.3)] transition-all duration-500 bg-white`}
      onClick={() => onExpand(img)}
    >
      {/* Main Container */}
      <div className="relative w-full h-full rounded-[3rem] overflow-hidden z-10 bg-white shadow-xl">
        <div className="absolute inset-0">
          <motion.img 
            src={img.url} 
            alt={img.title} 
            variants={{ hover: { scale: 1.1 } }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        
        {/* Dynamic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-fcit-400 via-fcit-400/20 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500 z-10" />
        
        {/* Shine Effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20">
          <motion.div 
            animate={{ x: [-100, 600], y: [-100, 600] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-[300px] h-[300px] bg-white/20 blur-[100px] rounded-full"
          />
        </div>

        {/* Content */}
        <div 
          style={{ transform: "translateZ(50px)" }}
          className="absolute bottom-10 left-10 right-10 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-30"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="px-5 py-2 bg-white text-fcit-400 text-[11px] font-black uppercase tracking-[0.25em] rounded-full shadow-[0_10px_30px_-5px_rgba(255,255,255,0.8)] border-2 border-fcit-400/5 hover:scale-110 transition-transform">
              {img.category}
            </span>
            <div className="w-2 h-2 bg-white/80 rounded-full animate-pulse shadow-[0_0_10px_white]" />
          </div>
          <h4 className="text-3xl font-black text-white leading-tight mb-6 drop-shadow-lg">{img.title}</h4>
          <div className="flex items-center gap-3 text-white font-black text-[11px] uppercase tracking-widest bg-white/10 backdrop-blur-md w-max px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-fcit-400 transition-colors">
            View Masterpiece <Maximize2 className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Pop-up Preview Images (In Front of main image) - ONLY ON ALL TAB */}
      {isAlbumView && (
        <div className="absolute inset-0 pointer-events-none z-50">
          {/* Optimized Background Glow (Using radial-gradient instead of blur filter) */}
          <motion.div
            variants={{ hover: { opacity: 1, scale: 1.6 } }}
            initial={{ opacity: 0, scale: 0.5 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="absolute inset-0 bg-[radial-gradient(circle,rgba(168,26,45,0.4)_0%,transparent_75%)] rounded-full"
          />

          {img.previews && img.previews.map((previewUrl, idx) => (
            <motion.div
              key={previewUrl}
              variants={{
                hover: {
                  x: idx === 0 ? -120 : idx === 1 ? 120 : 0,
                  y: idx === 2 ? -140 : -80,
                  rotate: idx === 0 ? -25 : idx === 1 ? 25 : 0,
                  scale: 0.85,
                  opacity: 1,
                  z: 100,
                  boxShadow: "0 30px 60px -12px rgba(0,0,0,0.25), 0 18px 36px -18px rgba(0,0,0,0.3)"
                }
              }}
              initial={{ x: 0, y: 0, rotate: 0, scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 22, delay: idx * 0.08 }}
              className="absolute inset-0 rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl"
              style={{ willChange: "transform", transform: "translateZ(0)" }}
            >
              <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  )
})

const getIsMobile = () => typeof window !== 'undefined' && window.innerWidth < 1024

export default function CampusExperience() {
  const isMobile = getIsMobile()
  const [activeTab, setActiveTab] = useState('All')
  const [visibleCount, setVisibleCount] = useState(12)
  const [selected, setSelected] = useState(null)

  const filtered = useMemo(() => {
    if (activeTab === 'All') {
      const seen = new Set()
      return images.filter(img => {
        if (seen.has(img.category)) return false
        seen.add(img.category)
        return true
      })
    }
    return images.filter(i => i.category === activeTab)
  }, [activeTab])

  const displayedImages = useMemo(() => filtered.slice(0, visibleCount), [filtered, visibleCount])

  return (
    <section className="py-24 bg-fcit-100/30 transition-colors duration-500 relative overflow-hidden">
      {/* Modern Background Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-fcit-400/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-fcit-300/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(typeof window !== 'undefined' && window.innerWidth < 768 ? 3 : 6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.2, 0.1],
              rotate: [0, 45, 0]
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
            className={`absolute w-32 h-32 border border-fcit-400/10 rounded-3xl hidden sm:block`}
            style={{
              left: `${15 * (i + 1)}%`,
              top: `${20 * (i % 3 + 1)}%`,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-fcit-400 font-bold mb-6 tracking-widest uppercase text-[10px] shadow-sm">
              <Sparkles className="w-3.5 h-3.5" /> Discovery
            </div>
            <TextReveal 
              text="Campus Life Mosaic" 
              className="text-5xl md:text-7xl font-black text-fcit-400 mb-4 tracking-tighter"
            />
            <p className="text-xl text-slate-600 font-light max-w-xl">
              An immersive digital collage of the moments that define our vibrant, high-energy academic community.
            </p>
          </div>

          <div className="flex-1 max-w-full overflow-x-auto no-scrollbar pb-4">
            <div className="flex flex-nowrap gap-3 p-3 bg-white/60 backdrop-blur-3xl border border-white/80 rounded-[2rem] shadow-premium w-max">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveTab(cat)
                    setVisibleCount(12)
                  }}
                  className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 whitespace-nowrap ${
                    activeTab === cat 
                      ? 'bg-fcit-400 text-white shadow-[0_15px_30px_-5px_rgba(168,26,45,0.4)] scale-105' 
                      : 'text-slate-500 hover:text-fcit-400 hover:bg-white/50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <motion.div 
          layout
          className={`grid ${isMobile ? 'grid-cols-1 gap-4 overflow-hidden rounded-3xl' : 'sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 auto-rows-[200px] sm:auto-rows-[250px]'}`}
        >
          <AnimatePresence mode="popLayout">
            {displayedImages.slice(0, isMobile ? 1 : visibleCount).map((img, i) => (
              <GalleryItem 
                key={img.url} 
                img={{...img, size: isMobile ? 'aspect-[4/3] w-full' : img.size}} 
                isAlbumView={activeTab === 'All'}
                onExpand={setSelected} 
              />
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-10 lg:mt-16 flex justify-center">
          <button 
            onClick={() => isMobile ? (window.location.href = '/gallery') : setVisibleCount(prev => prev + 12)}
            className="group relative inline-flex items-center gap-3 bg-white border border-slate-200 text-slate-900 px-8 lg:px-10 py-4 lg:py-5 rounded-full font-bold text-sm lg:text-lg hover:bg-fcit-400 hover:text-white transition-all duration-500 shadow-premium hover:shadow-2xl"
          >
            <span>{isMobile ? 'Explore Full Gallery' : 'Load More Memories'}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Immersive Expansion Modal */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="absolute inset-0 bg-slate-950/95 backdrop-blur-3xl"
            />
            
            <motion.div 
              layoutId={selected.url}
              className="relative w-full max-w-7xl h-[85vh] bg-white rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] z-10 border border-white/20 flex flex-col md:flex-row"
            >
              {/* Album Locked Navigation Calculation */}
              {(() => {
                const albumImages = images.filter(img => img.category === selected.category)
                const currentIdx = albumImages.findIndex(img => img.url === selected.url)
                
                return (
                  <div className="relative flex-1 bg-slate-100 overflow-hidden group/modal">
                    <img src={selected.url} alt={selected.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
                    
                    {/* Modal Navigation Controls */}
                    <div className="absolute inset-0 flex items-center justify-between px-8 opacity-0 group-hover/modal:opacity-100 transition-opacity duration-300">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation()
                          const prevIdx = currentIdx > 0 ? currentIdx - 1 : albumImages.length - 1
                          setSelected(albumImages[prevIdx])
                        }}
                        className="w-16 h-16 bg-white/10 hover:bg-white text-white hover:text-fcit-400 rounded-full flex items-center justify-center backdrop-blur-3xl transition-all border border-white/20 shadow-2xl"
                      >
                        <ChevronLeft className="w-8 h-8" />
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation()
                          const nextIdx = currentIdx < albumImages.length - 1 ? currentIdx + 1 : 0
                          setSelected(albumImages[nextIdx])
                        }}
                        className="w-16 h-16 bg-white/10 hover:bg-white text-white hover:text-fcit-400 rounded-full flex items-center justify-center backdrop-blur-3xl transition-all border border-white/20 shadow-2xl"
                      >
                        <ChevronRight className="w-8 h-8" />
                      </button>
                    </div>
                  </div>
                )
              })()}

              {/* Info Section */}
              <div className="w-full md:w-[400px] p-12 md:p-16 flex flex-col justify-between bg-white relative">
                <button 
                  onClick={() => setSelected(null)}
                  className="absolute top-10 right-10 w-12 h-12 bg-slate-50 hover:bg-fcit-400 text-slate-400 hover:text-white rounded-full flex items-center justify-center transition-all shadow-sm"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="pt-8">
                  <div className="flex items-center gap-3 mb-8">
                    <span className="px-4 py-1.5 bg-fcit-400 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg">
                      {selected.category}
                    </span>
                    <span className="text-slate-300 text-xs font-bold uppercase tracking-widest leading-none">Global Gallery</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-8 leading-[0.9]">{selected.title}</h2>
                  
                  <div className="space-y-6">
                    <p className="text-slate-600 font-medium text-lg leading-relaxed">
                      Captured during a high-energy session at FCIT, showcasing our state-of-the-art facilities and student innovation hub.
                    </p>
                    <div className="flex items-center gap-4 py-6 border-y border-slate-50">
                      <div className="w-12 h-12 rounded-2xl bg-fcit-100/50 flex items-center justify-center text-fcit-400 shadow-sm">
                        <ImageIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Metadata</div>
                        <div className="text-sm font-bold text-slate-900">4K High-Res Asset</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                   <button 
                     onClick={() => setSelected(null)}
                     className="w-full py-5 bg-gradient-to-r from-fcit-400 to-fcit-300 text-white font-black rounded-3xl hover:shadow-[0_20px_40px_-10px_rgba(168,26,45,0.4)] transition-all flex items-center justify-center gap-3 active:scale-95"
                   >
                     Return to Mosaic <ArrowRight className="w-5 h-5" />
                   </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
