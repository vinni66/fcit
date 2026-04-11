import { motion } from 'framer-motion'
import { Mail, BookOpen, Award } from 'lucide-react'

const faculty = [
  {
    name: 'Dr. Shweta Marigoudar',
    designation: 'Dean, FCIT',
    initials: 'SM',
    gradient: 'from-fcit-400 to-fcit-300',
    specialization: 'Computer Science & Engineering',
  },
  {
    name: 'Mr. Rajashekhar G C',
    designation: 'Director (SCA)',
    initials: 'RG',
    gradient: 'from-fcit-300 to-pink-600',
    specialization: 'Computer Applications',
  },
  {
    name: 'Ms. Shamina M. Attar',
    designation: 'Director, SCS, FCIT',
    initials: 'SA',
    gradient: 'from-cyan-600 to-fcit-400',
    specialization: 'Computer Science',
  },
  {
    name: 'Mrs. Usha N',
    designation: 'HOD (SCA)',
    initials: 'UN',
    gradient: 'from-green-600 to-emerald-600',
    specialization: 'Computer Applications',
  },
  {
    name: 'Mrs. Manjula K',
    designation: 'HOD, Assistant Professor',
    initials: 'MK',
    gradient: 'from-orange-600 to-red-600',
    specialization: 'Computer Science',
  },
  {
    name: 'Smt. Swathi D Mahindrakar',
    designation: 'Assistant Professor & PG Coordinator, SCA',
    initials: 'SD',
    gradient: 'from-rose-600 to-pink-600',
    specialization: 'Computer Applications',
  },
  {
    name: 'Mr. Varun K S',
    designation: 'Assistant Professor',
    initials: 'VK',
    gradient: 'from-fcit-300 to-violet-600',
    specialization: 'Computer Science',
  },
  {
    name: 'Mrs. Krupa Rani S',
    designation: 'Assistant Professor',
    initials: 'KR',
    gradient: 'from-teal-600 to-fcit-200',
    specialization: 'Computer Applications',
  },
  {
    name: 'Mrs. Teja H',
    designation: 'Assistant Professor',
    initials: 'TH',
    gradient: 'from-amber-600 to-orange-600',
    specialization: 'Information Technology',
  },
  {
    name: 'Mr. Chetan Kumar H S',
    designation: 'Assistant Professor',
    initials: 'CK',
    gradient: 'from-sky-600 to-fcit-400',
    specialization: 'Computer Science',
  },
  {
    name: 'Ms. Anu V B',
    designation: 'Assistant Professor',
    initials: 'AV',
    gradient: 'from-fuchsia-600 to-purple-600',
    specialization: 'Computer Applications',
  },
]

export default function Faculty() {
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
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-[10%] w-[50%] h-[50%] bg-fcit-200/20 rounded-full blur-[100px]"
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], x: [0, -50, 0] }} 
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-[10%] w-[40%] h-[40%] bg-fcit-400/10 rounded-full blur-[80px]"
          />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.95, y: 20 }}
             animate={{ opacity: 1, scale: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="inline-block p-8 md:p-12 rounded-[3rem] bg-white/60 backdrop-blur-3xl border border-white/80 shadow-xl shadow-fcit-200/20"
          >
            <h1 className="text-5xl sm:text-6xl font-black mb-6 text-slate-900 tracking-tight">
              Our <span className="bg-gradient-to-r from-fcit-400 to-fcit-300 bg-clip-text text-transparent drop-shadow-sm">Faculty</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Meet the dedicated educators, industry experts, and researchers driving academic excellence at <strong className="font-bold text-fcit-400">FCIT</strong>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Dean */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Leadership</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {faculty.slice(0, 3).map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white/80 backdrop-blur-sm rounded-[2.5rem] border border-white p-8 shadow-[0_10px_30px_-10px_rgba(99,103,255,0.1)] hover:shadow-[0_20px_60px_-15px_rgba(99,103,255,0.25)] hover:border-fcit-200 transition-all duration-300 text-center group"
              >
                <div className={`w-24 h-24 rounded-[1.5rem] bg-gradient-to-br ${f.gradient} flex items-center justify-center mx-auto mb-6 shadow-xl shadow-fcit-400/20 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300`}>
                  <span className="text-3xl font-black text-white">{f.initials}</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-fcit-400 transition-colors">{f.name}</h3>
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-fcit-100/50 text-fcit-400 font-bold text-sm mb-4 border border-fcit-100">
                  {f.designation}
                </div>
                <p className="text-slate-500 font-medium text-sm mb-6 pb-6 border-b border-slate-100">{f.specialization}</p>
                <div className="flex justify-center gap-4">
                  <motion.button whileHover={{ scale: 1.1 }} className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:text-fcit-400 hover:bg-fcit-100/50 hover:shadow-lg transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </motion.button>
                  <motion.button whileHover={{ scale: 1.1 }} className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:text-fcit-400 hover:bg-fcit-100/50 hover:shadow-lg transition-all duration-300">
                    <BookOpen className="w-5 h-5" />
                  </motion.button>
                  <motion.button whileHover={{ scale: 1.1 }} className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:text-fcit-400 hover:bg-fcit-100/50 hover:shadow-lg transition-all duration-300">
                    <Award className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* HODs and Faculty */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Faculty Members</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {faculty.slice(3).map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white/80 backdrop-blur-sm rounded-[2rem] border border-white p-6 shadow-[0_10px_30px_-10px_rgba(99,103,255,0.08)] hover:shadow-[0_20px_50px_-15px_rgba(99,103,255,0.2)] hover:border-fcit-100 transition-all duration-300 text-center group"
              >
                <div className={`w-16 h-16 rounded-[1rem] bg-gradient-to-br ${f.gradient} flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                  <span className="text-xl font-black text-white">{f.initials}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 truncate group-hover:text-fcit-400 transition-colors">{f.name}</h3>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-50 text-slate-600 font-bold text-xs mb-3 border border-slate-100">
                  {f.designation}
                </div>
                <p className="text-slate-500 font-medium text-xs mb-5">{f.specialization}</p>
                <div className="flex justify-center gap-3 mt-auto pt-4 border-t border-slate-50">
                  <motion.button whileHover={{ scale: 1.1 }} className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:bg-fcit-100/50 hover:text-fcit-400 transition-all">
                    <Mail className="w-3.5 h-3.5" />
                  </motion.button>
                  <motion.button whileHover={{ scale: 1.1 }} className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:bg-fcit-100/50 hover:text-fcit-400 transition-all">
                    <BookOpen className="w-3.5 h-3.5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
