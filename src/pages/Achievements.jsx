import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Award, Trophy, Star, Medal, Zap, BookOpen, 
  Users, Target, Globe, ArrowUpRight, X, ExternalLink 
} from 'lucide-react'

const stats = [
  { label: 'Hackathons Won', value: '65+', icon: Trophy, color: 'from-amber-400 to-orange-600' },
  { label: 'Scholarships', value: '230+', icon: Award, color: 'from-blue-400 to-fcit-400' },
  { label: 'National Finals', value: '12+', icon: Target, color: 'from-emerald-400 to-teal-600' },
  { label: 'Industry Sectors', value: '15+', icon: Globe, color: 'from-purple-400 to-pink-600' },
]

const achievements = [
  { 
    title: 'Smart India Hackathon 2024 Winners', 
    desc: 'Our flagship team secured a prestigious win at SIH 2024, solving critical infrastructure challenges.', 
    type: 'National Win', 
    image: 'https://gmu.ac.in/FCIT/images/hack1.jpg',
    category: 'Hackathon',
    color: 'from-fcit-400 to-fcit-300'
  },
  { 
    title: 'International Innovation Summit', 
    desc: 'Student projects were recognized for exceptional creativity at the Global Tech & Innovation summit.', 
    type: 'International', 
    image: 'https://gmu.ac.in/FCIT/images/hack2.jpg',
    category: 'Innovation',
    color: 'from-blue-600 to-cyan-400'
  },
  { 
    title: 'Quantum Computing Workshop', 
    desc: 'Deep dive into future computing with specialized training for high-performance students.', 
    type: 'Workshop', 
    image: 'https://gmu.ac.in/FCIT/images/hack3.jpg',
    category: 'Academic',
    color: 'from-orange-500 to-amber-400'
  },
  { 
    title: 'Open Source Contribution Award', 
    desc: 'Recognizing students who have significantly contributed to global open-source ecosystems.', 
    type: 'Community', 
    image: 'https://gmu.ac.in/FCIT/images/hack4.jpg',
    category: 'Open Source',
    color: 'from-emerald-600 to-teal-400'
  },
  { 
    title: 'Cyber Security Challenge 2024', 
    desc: 'Defense and offense strategies masterclass and competitive capture-the-flag win.', 
    type: 'Competition', 
    image: 'https://gmu.ac.in/FCIT/images/hack5.jpg',
    category: 'Security',
    color: 'from-fcit-400 to-rose-600'
  },
  { 
    title: 'AI Lab Recognition', 
    desc: 'Our state-of-the-art AI lab was acknowledged for its contributions to regional tech growth.', 
    type: 'Institutional', 
    image: 'https://gmu.ac.in/FCIT/images/hack6.jpg',
    category: 'Research',
    color: 'from-indigo-600 to-violet-400'
  },
  { 
    title: 'Data Science Bootcamp', 
    desc: 'Intensive industry-led training on Big Data analytics and real-world visualization.', 
    type: 'Industrial', 
    image: 'https://gmu.ac.in/FCIT/images/hack7.jpg',
    category: 'Training',
    color: 'from-fcit-300 to-cyan-600'
  },
  { 
    title: 'Code-A-Thon Regional Finalists', 
    desc: 'Team FCIT dominated the regional rounds of the Annual Inter-University Code-A-Thon.', 
    type: 'Regional', 
    image: 'https://gmu.ac.in/FCIT/images/hack8.jpg',
    category: 'Competition',
    color: 'from-rose-500 to-orange-400'
  },
  { 
    title: 'Edge Computing Seminar', 
    desc: 'Exploring the future of decentralized computing with industry leaders from top tech firms.', 
    type: 'Seminar', 
    image: 'https://gmu.ac.in/FCIT/images/hack9.jpg',
    category: 'Tech Talk',
    color: 'from-violet-600 to-purple-400'
  },
  { 
    title: 'Blockchain Innovation Award', 
    desc: 'Student project on decentralized finance (DeFi) won the excellence award in Fintech.', 
    type: 'Award', 
    image: 'https://gmu.ac.in/FCIT/images/hack10.jpg',
    category: 'Fintech',
    color: 'from-fcit-400 to-orange-600'
  },
  { 
    title: 'Mobile App Dev Showcase', 
    desc: 'Annual presentation of the best mobile applications developed by final year students.', 
    type: 'Showcase', 
    image: 'https://gmu.ac.in/FCIT/images/hack11.jpg',
    category: 'Development',
    color: 'from-blue-500 to-indigo-500'
  },
  { 
    title: 'Robotics & Automation Expo', 
    desc: 'Our team showcased innovative IoT-integrated robotics solutions for smart agriculture.', 
    type: 'Expo', 
    image: 'https://gmu.ac.in/FCIT/images/hack12.jpg',
    category: 'Robotics',
    color: 'from-emerald-500 to-green-400'
  },
]

export default function Achievements() {
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
                <X className="w-6 h-6" />
              </button>
              <div className="aspect-video relative">
                <img src={selectedImage.image} alt={selectedImage.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-10 left-10 text-white">
                   <span className={`px-4 py-1.5 rounded-full bg-gradient-to-r ${selectedImage.color} text-[10px] font-black uppercase tracking-widest mb-4 inline-block`}>
                    {selectedImage.type}
                   </span>
                   <h2 className="text-4xl font-black mb-2">{selectedImage.title}</h2>
                   <p className="text-white/80 max-w-2xl">{selectedImage.desc}</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-fcit-400/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-fcit-300/10 rounded-full blur-[100px]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.95, y: 20 }}
             animate={{ opacity: 1, scale: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="inline-block p-10 md:p-16 rounded-[4rem] bg-white/40 backdrop-blur-3xl border border-white/80 shadow-2xl shadow-fcit-200/20"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-fcit-200 text-fcit-400 font-black mb-8 shadow-sm tracking-widest uppercase text-xs">
              Legacy of Excellence
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 text-slate-900 tracking-tighter leading-[0.9]">
              Victories That <span className="bg-gradient-to-r from-fcit-400 to-fcit-300 bg-clip-text text-transparent">Inspire</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              From National Hackathons to International Innovation stages, browse the journey of <strong className="font-black text-fcit-400">excellence</strong> at FCIT.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-premium text-center group hover:border-fcit-400 transition-all duration-500"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-7 h-7" />
                </div>
                <div className="text-4xl font-black text-slate-900 mb-2 truncate">{stat.value}</div>
                <div className="text-xs font-black text-slate-400 uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Excellence Gallery */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">Achievement <span className="text-fcit-400">Gallery</span></h2>
              <p className="text-xl text-slate-500 font-light max-w-2xl">A visual narrative of student innovation, hard work, and industry recognition.</p>
            </div>
            <div className="h-1.5 w-32 bg-gradient-to-r from-fcit-400 to-transparent rounded-full hidden md:block" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedImage(item)}
                className="group relative h-[450px] rounded-[3rem] overflow-hidden cursor-pointer shadow-premium"
              >
                {/* Background Image */}
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${item.color} text-[9px] font-black text-white uppercase tracking-[0.2em] mb-4`}>
                      {item.type}
                    </div>
                    <h3 className="text-2xl font-black text-white mb-3 leading-tight leading-tight group-hover:text-fcit-200 transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-white/70 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      View details <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Glassy border shine */}
                <div className="absolute inset-0 border border-white/20 rounded-[3rem] pointer-events-none group-hover:border-white/50 transition-colors" />
              </motion.div>
            ))}
          </div>

          {/* Gallery Footer CTA */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-20 p-12 rounded-[4rem] bg-gradient-to-r from-fcit-400 to-[#5d171d] text-white text-center relative overflow-hidden group"
          >
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-black mb-6">Ready to make history?</h3>
              <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">Join the next generation of innovators at GM University. Admissions for the 2026-27 session are now open.</p>
              <div className="flex flex-wrap justify-center gap-6">
                <a href="/admissions" className="px-10 py-5 bg-white text-fcit-400 font-bold rounded-full hover:scale-105 transition-transform shadow-xl flex items-center gap-3">
                   Apply for 2026 <ArrowUpRight className="w-5 h-5" />
                </a>
                <a href="/contact-us" className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all">
                   Contact Admissions
                </a>
              </div>
            </div>
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
          </motion.div>
        </div>
      </section>

      {/* Partner Universities / Networks */}
      <section className="py-20 bg-white border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-10">Our Strategic Achievement Partners</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
             <div className="text-2xl font-black text-slate-900 flex items-center gap-2"><div className="w-3 h-3 bg-blue-600 rounded-full" /> IIT BOMBAY</div>
             <div className="text-2xl font-black text-slate-900 flex items-center gap-2"><div className="w-3 h-3 bg-orange-600 rounded-full" /> INFOSYS</div>
             <div className="text-2xl font-black text-slate-900 flex items-center gap-2"><div className="w-3 h-3 bg-fcit-400 rounded-full" /> SIH 2024</div>
             <div className="text-2xl font-black text-slate-900 flex items-center gap-2"><div className="w-3 h-3 bg-red-600 rounded-full" /> TECH MAHINDRA</div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
