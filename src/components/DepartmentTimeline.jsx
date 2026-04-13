import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Award, Zap, Globe, Rocket, ShieldCheck, GraduationCap, Users, Lightbulb, Camera } from 'lucide-react'
import { galleryImages } from '../data/galleryData'

// Priority categories to fetch from gallery
const galleryMapping = {
  'Orientation program': { title: 'Freshers Orientation', icon: Users, year: '2024' },
  'Graduation day': { title: 'Commencement Ceremony', icon: GraduationCap, year: '2024' },
  'sports events': { title: 'Inter-Collegiate Sports', icon: Zap, year: '2024' },
  'conference_2k25': { title: 'International Conference', icon: Globe, year: '2025' },
  'ideathon': { title: 'Innovation Ideathon', icon: Lightbulb, year: '2025' },
  'Tech-carnival-2k26': { title: 'Tech Carnival 2K26', icon: Award, year: '2026' },
}

const getDynamicMilestones = () => {
  const milestones = []
  
  Object.entries(galleryMapping).forEach(([category, meta]) => {
    const representativeImage = galleryImages.find(img => img.category === category || img.category.toLowerCase() === category.replace('_', ' '))
    
    if (representativeImage) {
      milestones.push({
        year: meta.year,
        title: meta.title,
        description: representativeImage.title || `Excellence in ${meta.title} at GM University.`,
        image: representativeImage.url,
        icon: meta.icon,
        isDynamic: true
      })
    }
  })
  
  return milestones.sort((a, b) => parseInt(a.year) - parseInt(b.year))
}

const allMilestones = getDynamicMilestones()

export default function DepartmentTimeline() {
  const containerRef = useRef(null)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <section ref={containerRef} className="py-16 lg:py-32 bg-white transition-colors duration-500 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="px-5 py-2 rounded-full bg-fcit-100 text-fcit-400 font-black uppercase tracking-widest shadow-sm mb-6 inline-block">
              Our Heritage
            </span>
            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tighter mb-4">
              Timeline of <span className="text-fcit-400">Excellence</span>
            </h2>
            <p className="text-lg lg:text-xl text-slate-500 font-light max-w-2xl mx-auto">
              A journey of two decades defined by innovation, academic rigor, and a relentless pursuit of the future.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Central Track */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-slate-100 rounded-full hidden md:block">
            <motion.div 
              style={{ scaleY, transformOrigin: 'top' }}
              className="absolute top-0 bottom-0 w-full bg-gradient-to-b from-fcit-400 to-fcit-300 rounded-full shadow-[0_0_15px_#daa520]"
            />
          </div>

          <div className="space-y-16 lg:space-y-24">
            {allMilestones.map((ms, i) => {
               const isEven = i % 2 === 0
               return (
                 <motion.div
                   key={i}
                   initial={{ opacity: 0, x: isMobile ? 0 : (isEven ? -50 : 50), y: isMobile ? 30 : 0 }}
                   whileInView={{ opacity: 1, x: 0, y: 0 }}
                   viewport={{ once: true, margin: "-50px" }}
                   transition={{ duration: 0.8, delay: isMobile ? 0 : 0.2 }}
                   className={`flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                 >
                   {/* Card */}
                   <div className="w-full md:w-[45%]">
                      <div className="group relative bg-[#f8fbff] rounded-[2.5rem] lg:rounded-[3rem] border border-slate-100 shadow-premium hover:shadow-2xl hover:border-fcit-400 transition-all duration-500 overflow-hidden">
                        {/* Milestone Image / Visual */}
                        <div className="h-40 lg:h-48 relative overflow-hidden bg-slate-200">
                          {ms.image ? (
                            <img src={ms.image} alt={ms.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-fcit-400/20 to-fcit-100 flex items-center justify-center">
                              <ms.icon className="w-16 h-16 text-fcit-400/20" />
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute top-6 left-8 px-5 py-1.5 bg-fcit-400 text-white font-black rounded-xl lg:rounded-2xl shadow-lg ring-4 ring-white/20 backdrop-blur-md text-sm lg:text-base">
                            {ms.year}
                          </div>
                   
                        </div>

                        <div className="p-7 lg:p-10">
                          <div className="flex items-start gap-5 lg:gap-6">
                             <div className="w-12 h-12 lg:w-14 lg:h-14 bg-fcit-100/50 rounded-2xl flex items-center justify-center text-fcit-400 shadow-sm group-hover:bg-fcit-400 group-hover:text-white transition-all duration-500 shrink-0">
                               <ms.icon className="w-6 h-6 lg:w-7 lg:h-7" />
                             </div>
                             <div>
                                <h3 className="text-xl lg:text-2xl font-black text-slate-900 mb-1 lg:mb-2 group-hover:text-fcit-400 transition-colors uppercase tracking-tight">{ms.title}</h3>
                                <p className="text-slate-600 font-medium leading-relaxed line-clamp-3 text-sm lg:text-base">{ms.description}</p>
                             </div>
                          </div>
                        </div>
                      </div>
                   </div>

                   {/* Center Pulse (Mobile Hidden) */}
                   <div className="relative z-20 hidden md:block">
                      <motion.div 
                        whileInView={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-10 h-10 rounded-full bg-white border-4 border-fcit-400 shadow-xl flex items-center justify-center"
                      >
                         <div className="w-2 h-2 rounded-full bg-fcit-400" />
                      </motion.div>
                   </div>

                   {/* Empty Space for alignment */}
                   <div className="hidden md:block w-[45%]" />
                 </motion.div>
               )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
