import { motion } from 'framer-motion'
import { Award, Trophy, Star, Medal, Zap, BookOpen } from 'lucide-react'

const achievements = [
  { 
    title: 'National Hackathon Winners', 
    desc: 'Our students secured 1st place at the Smart India Hackathon 2025 with an innovative AI-powered healthcare solution.', 
    type: 'Student', 
    icon: Trophy, 
    gradient: 'from-fcit-400 to-fcit-300',
    colSpan: 'lg:col-span-2' 
  },
  { 
    title: 'Research Grant', 
    desc: 'Department received ₹25 Lakh research grant from DST for Quantum Computing research.', 
    type: 'Department', 
    icon: Medal, 
    gradient: 'from-fcit-300 to-fcit-200',
    colSpan: 'lg:col-span-1'
  },
  { 
    title: 'Best Paper Award', 
    desc: 'Dr. Rajesh Kumar received the prestigious Best Paper Award at the IEEE International Conference on AI, 2025.', 
    type: 'Faculty', 
    icon: Award, 
    gradient: 'from-fcit-200 to-fcit-100',
    colSpan: 'lg:col-span-1'
  },
  { 
    title: 'ACM-ICPC Regional Finalists', 
    desc: 'Team FCIT proudly reached the regional finals of the ACM-ICPC Asia contest for 3 consecutive years.', 
    type: 'Student', 
    icon: Star, 
    gradient: 'from-fcit-400 to-fcit-200',
    colSpan: 'lg:col-span-2'
  },
  { 
    title: 'Patent Filed', 
    desc: 'Faculty members successfully filed 3 patents in AI-based diagnostic systems and IoT smart agriculture applications.', 
    type: 'Faculty', 
    icon: Zap, 
    gradient: 'from-fcit-300 to-fcit-100',
    colSpan: 'lg:col-span-1'
  },
  { 
    title: 'Google Summer of Code', 
    desc: '5 of our students were selected for GSoC 2025, actively contributing to major open-source projects worldwide.', 
    type: 'Student', 
    icon: BookOpen, 
    gradient: 'from-fcit-400 to-fcit-300',
    colSpan: 'lg:col-span-2'
  },
]

export default function Achievements() {
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
            animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }} 
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-[20%] w-[50%] h-[50%] bg-fcit-300/20 rounded-full blur-[100px]"
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], x: [0, -50, 0] }} 
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-[20%] w-[40%] h-[40%] bg-fcit-100/40 rounded-full blur-[80px]"
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
              <Trophy className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-5xl sm:text-6xl font-black mb-6 text-slate-900 tracking-tight">
              Our <span className="bg-gradient-to-r from-fcit-400 to-fcit-300 bg-clip-text text-transparent drop-shadow-sm">Achievements</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              Celebrating <strong className="font-bold text-fcit-400">academic excellence</strong>, relentless innovation, and the outstanding contributions of our remarkable community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-fcit-100),transparent_50%)] pointer-events-none opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {achievements.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`group relative bg-white rounded-[2.5rem] p-1 shadow-sm hover:shadow-[0_20px_60px_-15px_rgba(99,103,255,0.2)] transition-all duration-300 ${a.colSpan}`}
              >
                {/* Glowing border effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${a.gradient} rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md -z-10`} />
                <div className={`absolute inset-0 bg-gradient-to-br ${a.gradient} rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />
                
                <div className="h-full bg-white rounded-[2.35rem] p-8 relative overflow-hidden z-10 border border-slate-100 group-hover:border-transparent transition-colors flex flex-col justify-between">
                  {/* Subtle decorative background shape */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-fcit-100/30 rounded-full blur-[30px] -z-10 group-hover:bg-fcit-200/40 transition-colors"></div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div className={`w-16 h-16 rounded-[1.5rem] bg-gradient-to-br ${a.gradient} flex items-center justify-center shadow-lg shadow-fcit-400/20 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                        <a.icon className="w-8 h-8 text-white" />
                      </div>
                      <span className="inline-flex px-4 py-1.5 rounded-full text-xs font-bold bg-slate-50 border border-slate-100 text-slate-500 uppercase tracking-wider shadow-sm group-hover:border-fcit-200 transition-colors">
                        {a.type}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight group-hover:text-fcit-400 transition-colors">{a.title}</h3>
                    <p className="text-slate-600 text-lg leading-relaxed font-medium">{a.desc}</p>
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
