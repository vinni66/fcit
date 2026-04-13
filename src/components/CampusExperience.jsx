import { useState, useMemo, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Maximize2, X, Sparkles, Image as ImageIcon } from 'lucide-react'
import TextReveal from './TextReveal'

import { galleryImages } from '../data/galleryData'

const categories = ['All', ...new Set(galleryImages.map(img => img.category))]

const images = galleryImages.map((img, i) => {
  // Create a dynamic mosaic pattern
  let size = 'col-span-1 row-span-1'
  if (i % 11 === 0) size = 'col-span-2 row-span-2'
  else if (i % 7 === 0) size = 'col-span-1 row-span-2'
  else if (i % 9 === 0) size = 'col-span-2 row-span-1'
  
  return { ...img, size }
})


const GalleryItem = memo(({ img, onExpand }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5 }}
      className={`relative ${img.size} rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-premium hover:shadow-2xl transition-all duration-500`}
      onClick={() => onExpand(img)}
    >
      <img 
        src={img.url} 
        alt={img.title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        loading="lazy"
      />
      
      {/* Light Liquid Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-fcit-100 via-fcit-100/40 to-transparent opacity-0 group-hover:opacity-95 transition-opacity duration-500" />
      
      {/* Lens Flare Effect (Goldish) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <motion.div 
          animate={{ x: [-100, 500], y: [-100, 500] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="w-[200px] h-[200px] bg-fcit-200/20 blur-[80px] rounded-full"
        />
      </div>

      <div className="absolute bottom-6 left-8 right-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <div className="flex items-center gap-2 mb-2 border-b border-fcit-400/10 pb-2">
          <span className="px-3 py-1 bg-fcit-400 text-white text-[9px] font-black uppercase tracking-widest rounded-full shadow-lg">
            {img.category}
          </span>
          <div className="w-1 h-1 bg-fcit-400/30 rounded-full" />
          <span className="text-fcit-400/60 text-[10px] font-bold uppercase tracking-wider">2026 Season</span>
        </div>
        <h4 className="text-2xl font-black text-slate-900 leading-tight mb-4 group-hover:text-fcit-400 transition-colors">{img.title}</h4>
        <div className="flex items-center gap-2 text-fcit-400 font-black text-[10px] uppercase tracking-tighter">
          Explore Moments <Maximize2 className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  )
})

export default function CampusExperience() {
  const [activeTab, setActiveTab] = useState('All')
  const [visibleCount, setVisibleCount] = useState(12)
  const [selected, setSelected] = useState(null)

  const filtered = useMemo(() => 
    activeTab === 'All' ? images : images.filter(i => i.category === activeTab),
  [activeTab])

  const displayedImages = useMemo(() => filtered.slice(0, visibleCount), [filtered, visibleCount])

  return (
    <section className="py-24 bg-fcit-100/30 transition-colors duration-500 relative overflow-hidden">
      {/* Modern Background Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-fcit-400/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-fcit-300/10 rounded-full blur-[100px] pointer-events-none" />
      
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

          <div className="flex-1 max-w-full overflow-x-auto no-scrollbar pb-2">
            <div className="flex flex-nowrap gap-3 p-2 bg-white/80 backdrop-blur-xl border border-slate-200 rounded-3xl shadow-sm w-max">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveTab(cat)
                    setVisibleCount(12)
                  }}
                  className={`px-6 py-2.5 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-300 whitespace-nowrap ${
                    activeTab === cat 
                      ? 'bg-fcit-400 text-white shadow-glow-maroon' 
                      : 'text-slate-500 hover:text-fcit-400 hover:bg-fcit-100'
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
          className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]"
        >
          <AnimatePresence mode="popLayout">
            {displayedImages.map((img, i) => (
              <GalleryItem key={img.url} img={img} onExpand={setSelected} />
            ))}
          </AnimatePresence>
        </motion.div>

        {visibleCount < filtered.length && (
          <div className="mt-16 flex justify-center">
            <button 
              onClick={() => setVisibleCount(prev => prev + 12)}
              className="group relative inline-flex items-center gap-3 bg-white border border-slate-200 text-slate-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-fcit-400 hover:text-white transition-all duration-500 shadow-premium hover:shadow-2xl"
            >
              <span>Load More Memories</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </div>

      {/* Liquid Expansion Modal */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="absolute inset-0 bg-white/95 backdrop-blur-2xl"
            />
            <motion.div 
              layoutId={selected.url}
              className="relative w-full max-w-6xl aspect-video bg-white rounded-[3rem] overflow-hidden shadow-2xl z-10 border border-slate-200"
            >
              <button 
                onClick={() => setSelected(null)}
                className="absolute top-8 right-8 z-20 w-12 h-12 bg-fcit-100 hover:bg-fcit-400 text-fcit-400 hover:text-white rounded-full flex items-center justify-center backdrop-blur-xl transition-all border border-fcit-200"
              >
                <X className="w-6 h-6" />
              </button>
              
              <img src={selected.url} alt={selected.title} className="w-full h-full object-contain bg-black/5" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <span className="inline-flex items-center gap-2 text-fcit-300 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">
                    <ImageIcon className="w-4 h-4" /> Media Gallery Item
                  </span>
                  <h2 className="text-4xl md:text-6xl font-black text-fcit-400 tracking-tighter mb-2">{selected.title}</h2>
                  <p className="text-slate-600 font-medium text-lg max-w-2xl leading-relaxed">
                    Visual highlights from our specialized labs and high-energy corporate engagement sessions at GM University.
                  </p>
                </div>
                <div className="flex gap-4">
                  <button onClick={() => setSelected(null)} className="px-10 py-4 bg-fcit-400 text-white font-black rounded-full hover:scale-105 transition-transform flex items-center gap-3 shadow-xl">
                    Next Story <ChevronRight className="w-5 h-5" />
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
