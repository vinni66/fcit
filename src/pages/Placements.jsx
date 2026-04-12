import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, TrendingUp, Building2, ArrowRight, Star, Globe, ShieldCheck, Quote, X } from 'lucide-react'
import TextReveal from '../components/TextReveal'
import FadeIn from '../components/FadeIn'
import AnimatedDivider from '../components/AnimatedDivider'

function InfiniteScroller({ items }) {
  return (
    <div className="relative flex overflow-hidden py-10">
      <motion.div
        animate={{
          x: [0, -1000],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex gap-8 px-4"
      >
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 px-8 py-5 bg-white/40 backdrop-blur-md rounded-2xl border border-white/80 shadow-sm hover:shadow-xl transition-all duration-300 flex items-center gap-3 group"
          >
            <Building2 className="w-5 h-5 text-fcit-300 group-hover:text-fcit-400 transition-colors" />
            <span className="font-bold text-slate-700 group-hover:text-slate-900 transition-colors text-lg">{item}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

function GlobalReachMap() {
  const cities = [
    { name: 'Bangalore', x: '75%', y: '65%', lpa: '18 LPA' },
    { name: 'San Francisco', x: '15%', y: '35%', lpa: '75k USD' },
    { name: 'London', x: '45%', y: '30%', lpa: '55k GBP' },
    { name: 'Dubai', x: '58%', y: '45%', lpa: '45k AED' },
    { name: 'Singapore', x: '82%', y: '58%', lpa: '65k SGD' },
  ]
  
  return (
    <div className="relative w-full aspect-[21/9] bg-slate-950 rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 group">
      {/* Dark Map Base */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://gmu.ac.in/FCIT/campusimages/world_map_dots.png')] bg-cover bg-center mix-blend-screen" />
      
      {/* Animated Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Hotspots */}
      {cities.map((city, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          className="absolute"
          style={{ left: city.x, top: city.y }}
        >
          <div className="relative">
            <motion.div
              animate={{ scale: [1, 2], opacity: [0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -inset-4 bg-fcit-300 rounded-full"
            />
            <div className="w-3 h-3 bg-fcit-300 rounded-full shadow-[0_0_15px_#daa520]" />
            
            {/* Tooltip */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 p-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 whitespace-nowrap z-20">
              <p className="text-white font-black text-[10px] uppercase tracking-widest">{city.name}</p>
              <p className="text-fcit-300 font-bold text-lg">{city.lpa}</p>
            </div>
          </div>
        </motion.div>
      ))}
      
      <div className="absolute bottom-10 left-10 text-white z-10">
        <h4 className="text-3xl font-black mb-1">Global Reach</h4>
        <p className="text-white/50 font-medium">Connecting our students to world-class tech hubs.</p>
      </div>
    </div>
  )
}

const placementStats = [
  { label: 'Overall Placement Rate', value: '95', suffix: '%', icon: TrendingUp },
  { label: 'Highest Package Offered', value: '18', suffix: ' LPA', icon: Star },
  { label: 'Average Package', value: '6.5', suffix: ' LPA', icon: ShieldCheck },
  { label: 'Global Companies Visiting', value: '50', suffix: '+', icon: Globe },
]

const companies = [
  'Infosys', 'Wipro', 'TCS', 'HCL', 'Cognizant', 'Accenture',
  'IBM', 'Capgemini', 'Tech Mahindra', 'Mindtree', 'Mphasis', 'L&T Infotech',
]

const internships = [
  { student: 'Alice J.', company: 'TechCorp Innovations', role: 'Software Developer Intern', year: 2024 },
  { student: 'Kevin S.', company: 'BioGen Labs', role: 'Research Intern', year: 2024 },
  { student: 'Maria T.', company: 'BrandBoost Consulting', role: 'Marketing Intern', year: 2024 },
  { student: 'Priyanka R', company: 'Flipkart', role: 'SDE Intern', year: 2024 },
  { student: 'Vishal S', company: 'Infosys', role: 'Full Stack Intern', year: 2024 },
  { student: 'Ananya B', company: 'TCS', role: 'ML Intern', year: 2023 },
]

const internshipGallery = [
  { image: 'https://gmu.ac.in/FCIT/internshipimages/int1%20(1).jpg', title: 'Industrial Exposure Visit', category: 'Industry' },
  { image: 'https://gmu.ac.in/FCIT/internshipimages/int1%20(2).jpg', title: 'Collaborative Learning', category: 'Workshop' },
  { image: 'https://gmu.ac.in/FCIT/internshipimages/int1%20(3).jpg', title: 'Innovation Workshop', category: 'Training' },
  { image: 'https://gmu.ac.in/FCIT/internshipimages/int1%20(4).jpg', title: 'Tech Mahindra Visit', category: 'Corporate' },
  { image: 'https://gmu.ac.in/FCIT/internshipimages/int1%20(5).jpg', title: 'Corporate Relations', category: 'Placements' },
]

const testimonials = [
  { student: 'Alice J.', company: 'TechCorp', quote: 'The practical exposure at FCIT gave me the edge during my internship interviews. The mentors truly care about our corporate readiness.', year: 2024 },
  { student: 'Kevin S.', company: 'BioGen Labs', quote: 'Hands-on experience in the research labs helped me secure a high-impact research role. FCIT provides a world-class environment for innovators.', year: 2024 },
]

function CounterStat({ stat, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-[2.5rem] border border-fcit-100 p-8 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(99,103,255,0.15)] hover:border-fcit-200 transition-all duration-300 relative overflow-hidden flex flex-col items-center justify-center text-center h-full"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-fcit-100/30 rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-110" />
      
      <div className="w-16 h-16 rounded-2xl bg-fcit-100/50 flex items-center justify-center mb-6 text-fcit-400 group-hover:bg-gradient-to-br group-hover:from-fcit-400 group-hover:to-fcit-300 group-hover:text-white transition-all duration-300 shadow-inner">
        <stat.icon className="w-8 h-8" />
      </div>
      
      <div className="text-5xl md:text-6xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-fcit-400 transition-colors">
        {stat.value}<span className="text-3xl text-fcit-300">{stat.suffix}</span>
      </div>
      <div className="text-slate-500 font-bold uppercase tracking-wider text-sm">{stat.label}</div>
    </motion.div>
  )
}

export default function Placements() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-[#f8fbff] text-slate-700 pt-24 font-sans"
    >
      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="absolute inset-0 bg-slate-900/90 backdrop-blur-xl"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full bg-white rounded-[3rem] overflow-hidden shadow-2xl z-10"
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/20 hover:bg-white text-white hover:text-fcit-400 rounded-full flex items-center justify-center backdrop-blur-md transition-all border border-white/30"
              >
                <X className="w-6 h-6 rotate-90" />
              </button>
              <div className="aspect-video relative">
                <img src={selectedImage.image} alt={selectedImage.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-10 left-10 text-white">
                   <h2 className="text-4xl font-black mb-2">{selectedImage.title}</h2>
                   <p className="text-white/80 max-w-2xl">Visual highlights from our industry engagement and corporate internship sessions at GM University.</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], x: [0, -40, 0] }} 
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[10%] left-[30%] w-[40%] h-[50%] bg-fcit-300/20 rounded-full blur-[100px]"
          />
          <motion.div 
            animate={{ scale: [1, 1.1, 1], y: [0, 50, 0] }} 
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 right-[15%] w-[30%] h-[40%] bg-fcit-100/50 rounded-full blur-[80px]"
          />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.95, y: 20 }}
             animate={{ opacity: 1, scale: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="inline-block p-8 md:p-14 rounded-[3rem] bg-white/60 backdrop-blur-3xl border border-white/80 shadow-xl shadow-fcit-200/20"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-fcit-400 to-fcit-300 rounded-[1.5rem] mb-8 shadow-lg shadow-fcit-400/20"
            >
              <Briefcase className="w-10 h-10 text-white" />
            </motion.div>
            <TextReveal
               text="Placements & Internships"
               highlightFrom={1}
               className="text-5xl sm:text-6xl font-black mb-6 text-slate-900 tracking-tight"
            />
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              Our students consistently secure outstanding career opportunities and highly competitive internships at <strong className="font-bold text-fcit-400">top global tech companies</strong>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bento Grid */}
      <section className="py-24 bg-white relative border-y border-fcit-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <TextReveal
              text="Placement Highlights"
              className="text-4xl font-black text-slate-900 mb-6"
            />
            <div className="w-24 h-1.5 bg-gradient-to-r from-fcit-400 to-fcit-200 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {placementStats.map((s, i) => (
              <CounterStat key={i} stat={s} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f8fbff] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <TextReveal
              text="Recruiting Partners"
              highlightFrom={1}
              className="text-4xl font-black text-slate-900 mb-6"
            />
            <p className="text-lg text-slate-600 font-medium">Industry leaders who trust our graduating talent.</p>
          </motion.div>

          <InfiniteScroller items={companies} />
          
          <div className="mt-24 px-4">
             <GlobalReachMap />
          </div>
        </div>
      </section>

      {/* Notable Internships */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--color-fcit-100),transparent_40%)] pointer-events-none opacity-40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <TextReveal
              text="Our Official Interns"
              highlightFrom={2}
              className="text-4xl font-black text-slate-900 mb-6"
            />
            <div className="w-24 h-1.5 bg-gradient-to-r from-fcit-300 to-fcit-200 mx-auto rounded-full" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {internships.map((intern, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-[2.5rem] border border-slate-100 p-10 shadow-premium hover:shadow-2xl hover:border-fcit-400 transition-all duration-500 group"
              >
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-16 h-16 bg-fcit-100 rounded-[1.5rem] flex items-center justify-center shadow-inner group-hover:bg-gradient-to-br group-hover:from-fcit-400 group-hover:to-fcit-300 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <span className="text-fcit-400 font-black text-xl group-hover:text-white uppercase">{intern.student.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-slate-900 group-hover:text-fcit-400 transition-colors">{intern.student}</h4>
                    <span className="inline-flex px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-[10px] font-black text-slate-400 uppercase tracking-widest">{intern.year} BATCH</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-6 rounded-[2rem] bg-slate-50 border border-slate-100 group-hover:bg-white group-hover:shadow-lg transition-all">
                    <p className="text-fcit-400 font-black text-xl mb-1 tracking-tight">{intern.company}</p>
                    <p className="text-slate-600 font-bold">{intern.role}</p>
                  </div>
                  <div className="flex justify-end pr-2">
                    <ArrowRight className="w-6 h-6 text-fcit-200 group-hover:text-fcit-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Gallery Section */}
      <section className="py-24 relative bg-[#f8fbff]">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
            <TextReveal
               text="Internship & Industry Gallery"
               highlightFrom={2}
               className="text-4xl font-black text-slate-900 mb-6"
            />
              <p className="text-lg text-slate-500 font-medium">Real-world corporate exposure captured through the lens.</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
               {internshipGallery.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setSelectedImage(img)}
                    className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden cursor-pointer shadow-premium"
                  >
                     <img src={img.image} alt={img.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                     <div className="absolute bottom-4 left-4 right-4">
                        <span className="text-[9px] font-black text-white/70 uppercase tracking-widest mb-1 block">{img.category}</span>
                        <h4 className="text-white font-black text-xs leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">{img.title}</h4>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-slate-900 mb-6">Student <span className="text-fcit-300 underline decoration-fcit-100 underline-offset-8">Testimonials</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((test, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#f8fbff] p-10 rounded-[3rem] border border-slate-100 shadow-sm relative group"
              >
                <Quote className="absolute top-10 right-10 w-12 h-12 text-fcit-100 group-hover:text-fcit-200 transition-colors" />
                <p className="text-xl text-slate-600 italic font-medium leading-relaxed mb-8 relative z-10">"{test.quote}"</p>
                <div className="flex items-center gap-4">
                   <div className="w-14 h-14 rounded-full bg-gradient-to-br from-fcit-400 to-fcit-300 flex items-center justify-center text-white font-black text-xl shadow-lg">
                      {test.student[0]}
                   </div>
                   <div>
                      <h4 className="font-black text-slate-900 text-lg">{test.student}</h4>
                      <p className="text-fcit-400 font-bold uppercase tracking-widest text-xs">{test.company}</p>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
