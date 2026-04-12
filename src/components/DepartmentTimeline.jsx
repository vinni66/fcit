import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { Award, Zap, Globe, Rocket, ShieldCheck, Heart } from 'lucide-react'

const milestones = [
  {
    year: '2004',
    title: 'The Inception',
    description: 'The Faculty of Computing & IT was established with a vision to revolutionize technology education in the region.',
    icon: Rocket,
    color: '#DAA520'
  },
  {
    year: '2012',
    title: 'Innovation Milestone',
    description: 'Inauguration of our first tier-1 High-Performance Computing Lab and the launch of the AI Research wing.',
    icon: Zap,
    color: '#721C24'
  },
  {
    year: '2018',
    title: 'Global Partnerships',
    description: 'Signed strategic MOUs with IBM, Infosys, and international universities to foster global student exchange.',
    icon: Globe,
    color: '#DAA520'
  },
  {
    year: '2024',
    title: 'Digital Excellence',
    description: 'Awarded "Center of Excellence" in Cloud Security. Launch of the Integrated MCA-PhD research track.',
    icon: ShieldCheck,
    color: '#721C24'
  },
  {
    year: '2026',
    title: 'Tech Carnival 2K26',
    description: 'Launched our flagship National Level Technical Competition, bringing together 2000+ students from across the country.',
    icon: Award,
    color: '#DAA520'
  }
]

export default function DepartmentTimeline() {
  const containerRef = useRef(null)
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
    <section ref={containerRef} className="py-32 bg-white transition-colors duration-500 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="px-5 py-2 rounded-full bg-fcit-100 text-fcit-400 font-black uppercase tracking-widest shadow-sm mb-6 inline-block">
              Our Heritage
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter mb-4">
              Timeline of <span className="text-fcit-400">Excellence</span>
            </h2>
            <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto">
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

          <div className="space-y-24">
            {milestones.map((ms, i) => {
               const isEven = i % 2 === 0
               return (
                 <motion.div
                   key={i}
                   initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true, margin: "-100px" }}
                   transition={{ duration: 0.8, delay: 0.2 }}
                   className={`flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                 >
                   {/* Card */}
                   <div className="w-full md:w-[45%]">
                     <div className="group relative bg-[#f8fbff] p-10 rounded-[3rem] border border-slate-100 shadow-premium hover:shadow-2xl hover:border-fcit-400 transition-all duration-500">
                        <div className="absolute -top-6 left-10 px-6 py-2 bg-fcit-400 text-white font-black rounded-2xl shadow-lg ring-4 ring-white">
                          {ms.year}
                        </div>
                        <div className="flex items-start gap-6 pt-4">
                           <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-fcit-400 shadow-sm group-hover:bg-fcit-400 group-hover:text-white transition-all duration-500 shrink-0">
                             <ms.icon className="w-7 h-7" />
                           </div>
                           <div>
                              <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-fcit-400 transition-colors uppercase tracking-tight">{ms.title}</h3>
                              <p className="text-slate-600 font-medium leading-relaxed">{ms.description}</p>
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
