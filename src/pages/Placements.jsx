import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { Briefcase, TrendingUp, Building2, ArrowRight, Star, Globe, ShieldCheck, Quote } from 'lucide-react'
import { useEffect, useState } from 'react'

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
  { student: 'Rahul M', company: 'Google', role: 'SWE Intern', year: 2025 },
  { student: 'Sneha P', company: 'Microsoft', role: 'Data Science Intern', year: 2025 },
  { student: 'Aditya K', company: 'Amazon', role: 'Cloud Intern', year: 2024 },
  { student: 'Priyanka R', company: 'Flipkart', role: 'SDE Intern', year: 2024 },
  { student: 'Vishal S', company: 'Infosys', role: 'Full Stack Intern', year: 2024 },
  { student: 'Ananya B', company: 'TCS', role: 'ML Intern', year: 2023 },
]

const testimonials = [
  { student: 'Rahul M', company: 'Google', quote: 'The comprehensive curriculum and continuous guidance from the faculty at FCIT helped me secure my dream role at Google. The practical labs, especially in data structures, were top-notch.', year: 2025 },
  { student: 'Sneha P', company: 'Microsoft', quote: 'The placement cell is incredibly active. The mock interviews and technical workshops gave me the confidence I needed to ace multiple rounds at Microsoft.', year: 2025 },
  { student: 'Aditya K', company: 'Amazon', quote: 'Studying Cloud Technologies here was a game-changer. Recommending FCIT to any student looking for strong corporate placements focusing on latest technologies.', year: 2024 },
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
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-[#f8fbff] text-slate-700 pt-24 font-sans"
    >
      {/* Light Theme Standardized Hero */}
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
            <h1 className="text-5xl sm:text-6xl font-black mb-6 text-slate-900 tracking-tight">
              Placements & <span className="bg-gradient-to-r from-fcit-400 to-fcit-300 bg-clip-text text-transparent drop-shadow-sm">Internships</span>
            </h1>
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
            <h2 className="text-4xl font-black text-slate-900 mb-6">Placement Highlights</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-fcit-400 to-fcit-200 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {placementStats.map((s, i) => (
              <CounterStat key={i} stat={s} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Recruiting Companies */}
      <section className="py-24 bg-[#f8fbff]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-slate-900 mb-6">
              Our <span className="bg-gradient-to-r from-fcit-400 to-fcit-300 bg-clip-text text-transparent">Recruiting Partners</span>
            </h2>
            <p className="text-lg text-slate-600 font-medium">Industry leaders who trust our graduating talent.</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {companies.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 6) * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="px-8 py-5 bg-white rounded-2xl border border-fcit-100 shadow-sm hover:shadow-[0_10px_30px_-10px_rgba(99,103,255,0.2)] hover:border-fcit-300 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-slate-400 group-hover:text-fcit-400 transition-colors" />
                  <span className="font-bold text-slate-700 group-hover:text-slate-900 transition-colors text-lg">{c}</span>
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-4xl font-black text-slate-900 mb-6">
              Notable <span className="bg-gradient-to-r from-fcit-400 to-fcit-300 bg-clip-text text-transparent">Internships</span>
            </h2>
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
                className="bg-white rounded-[2rem] border border-fcit-100 p-8 shadow-sm hover:shadow-xl hover:border-fcit-200 transition-all duration-300 group"
              >
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-fcit-400 to-fcit-300 rounded-[1.2rem] flex items-center justify-center shadow-md transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <span className="text-white font-black text-lg">{intern.student.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800">{intern.student}</h4>
                    <p className="text-sm font-bold text-slate-400">{intern.year} Batch</p>
                  </div>
                </div>
                
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 group-hover:border-fcit-200/50 transition-colors">
                  <p className="text-fcit-400 font-bold text-lg mb-1">{intern.company}</p>
                  <p className="text-slate-600 font-medium">{intern.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories / Testimonials */}
      <section className="py-24 bg-[#f8fbff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-slate-900 mb-6">
              Success <span className="bg-gradient-to-r from-fcit-400 to-fcit-300 bg-clip-text text-transparent">Stories</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-fcit-400 to-fcit-200 mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((test, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white p-8 rounded-[2rem] border border-fcit-100 shadow-sm relative group hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-12 h-12 text-fcit-400" />
                </div>
                <p className="text-slate-600 italic font-medium leading-relaxed mb-8 relative z-10">"{test.quote}"</p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 bg-gradient-to-br from-fcit-400 to-fcit-300 rounded-full flex items-center justify-center text-white font-bold">
                    {test.student.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{test.student}</h4>
                    <p className="text-sm text-fcit-400 font-bold">{test.company} <span className="text-slate-400 font-medium ml-1">({test.year})</span></p>
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
