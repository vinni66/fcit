import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, BookOpen, Award } from 'lucide-react'
import FacultyModal from '../components/FacultyModal'
import TextReveal from '../components/TextReveal'
import FadeIn from '../components/FadeIn'
import AnimatedDivider from '../components/AnimatedDivider'

const faculty = [
  {
    name: 'Mr. Rajashekhar G C',
    designation: 'Director (SCA)',
    initials: 'RG',
    photoUrl: 'https://gmu.ac.in/FCIT/images/Director.jpg',
    gradient: 'from-fcit-300 to-pink-600',
    specialization: 'Computing and IT',
    bio: 'Mr. Rajashekhar is a seasoned academician focusing on modern application architectures and full-stack development. He has mentored hundreds of students into successful careers in the global tech industry.',
    education: ['M.Tech in Software Engineering', 'MCA'],
  },
  {
    name: 'Dr. Shweta Marigoudar',
    designation: 'Dean, FCIT',
    initials: 'SM',
    photoUrl: 'https://gmu.ac.in/FCIT/images/Dean.jpg',
    gradient: 'from-fcit-400 to-fcit-300',
    specialization: 'Computer Science & Engineering',
    bio: 'Dr. Shweta Marigoudar serves as the Dean of the Faculty of Computing and IT. With over 20 years of academic experience, she specializes in Cloud Computing and distributed systems. Under her leadership, the department has reached new heights in research and industry collaboration.',
    education: ['Ph.D. in Computer Science', 'M.Tech in CSE', 'B.E. in Computer Science'],
    email: 'dean.fcit@gmu.ac.in'
  },
  {
    name: 'Ms. Shamina M. Attar',
    designation: 'Director, SCS, FCIT',
    initials: 'SA',
    photoUrl: 'https://gmu.ac.in/FCIT/images/DirectorCS.jpg',
    gradient: 'from-cyan-600 to-fcit-400',
    specialization: 'Computer Science',
    bio: 'Ms. Shamina Attar leads the School of Computer Science with a focus on Algorithm design and Artificial Intelligence. She is instrumental in curriculum development aligned with current industrial trends.',
    education: ['M.Sc in CS', 'M.Phil'],
  },
  {
    name: 'Mrs. Usha N',
    designation: 'HOD (SCA)',
    initials: 'UN',
    photoUrl: 'https://gmu.ac.in/FCIT/images/HOD.jpg',
    gradient: 'from-emerald-600 to-fcit-100',
    specialization: 'Computing and IT',
    bio: 'Mrs. Usha N manages the department operations with a focus on student-centric learning and hands-on lab sessions.',
    education: ['MCA with Gold Medal', 'BCA'],
  },
  {
    name: 'Mrs. Manjula K',
    designation: 'HOD, Assistant Professor',
    initials: 'MK',
    photoUrl: 'https://gmu.ac.in/FCIT/images/HODCS.jpg',
    gradient: 'from-orange-600 to-red-600',
    specialization: 'Computer Science',
    bio: 'Mrs. Manjula specializes in Database Management Systems and Software Engineering, bringing industrial rigor to academic projects.',
    education: ['M.Tech in IS', 'B.E. in CSE'],
  },
  {
    name: 'Smt. Swathi D Mahindrakar',
    designation: 'Assistant Professor & PG Coordinator, SCA',
    initials: 'SD',
    photoUrl: 'https://gmu.ac.in/FCIT/images/Swathi.jpg',
    gradient: 'from-rose-600 to-pink-600',
    specialization: 'Computing and IT',
    bio: 'Smt. Swathi coordinates the Post-Graduate programs, ensuring research-oriented learning for MCA students.',
  },
  {
    name: 'Mr. Varun K S',
    designation: 'Assistant Professor',
    initials: 'VK',
    photoUrl: 'https://gmu.ac.in/FCIT/images/VARUN.jpg',
    gradient: 'from-fcit-300 to-violet-600',
    specialization: 'Computer Science',
    bio: 'Mr. Varun is an expert in Cybersecurity and Network infrastructure, leading several student research projects in the field.',
  },
  {
    name: 'Mrs. KRUPA RANI S',
    designation: 'Assistant Professor',
    initials: 'KR',
    photoUrl: 'https://gmu.ac.in/FCIT/images/Krupa.jpg',
    gradient: 'from-teal-600 to-fcit-200',
    specialization: 'Computing and IT',
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
    photoUrl: 'https://gmu.ac.in/FCIT/images/Anu.jpg',
    gradient: 'from-fuchsia-600 to-purple-600',
    specialization: 'Computing and IT',
  },
]

export default function Faculty() {
  const [selectedFaculty, setSelectedFaculty] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openProfile = (f) => {
    setSelectedFaculty(f)
    setIsModalOpen(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-[#f8fbff] text-slate-700 pt-24 font-sans"
    >
      {/* Faculty Modal */}
      <FacultyModal 
        faculty={selectedFaculty}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

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
            <TextReveal
              text="Our Faculty"
              highlightFrom={1}
              className="text-5xl sm:text-6xl font-black mb-6 text-slate-900 tracking-tight text-glow"
            />
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Meet the dedicated educators, industry experts, and researchers driving academic excellence at <strong className="font-bold text-fcit-400">FCIT</strong>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Leadership */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <TextReveal
              text="Leadership"
              className="text-3xl font-black text-slate-900 mb-2"
            />
            <div className="w-20 h-1.5 bg-gradient-to-r from-fcit-400 to-fcit-300 mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-24 items-center">
            {faculty.slice(0, 3).map((f, i) => {
              const isDean = f.designation.includes('Dean')
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: isDean ? 0.95 : 0.9, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true, amount: 0.1 }}
                  style={{ willChange: 'transform, opacity' }}
                  onClick={() => openProfile(f)}
                  className={`bg-white rounded-[3rem] border border-slate-100 shadow-premium hover:shadow-2xl hover:border-fcit-400 transition-all duration-500 text-center group cursor-pointer relative ${
                    isDean ? 'p-14 z-10 border-fcit-200/50 shadow-2xl lg:scale-105' : 'p-10'
                  }`}
                >
                  {isDean && (
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-fcit-400 text-white text-[9px] font-black uppercase tracking-[0.3em] shadow-lg">
                      Head of Faculty
                    </div>
                  )}
                  <div className={`${isDean ? 'w-36 h-36 mb-10' : 'w-28 h-28 mb-8'} rounded-[2rem] bg-fcit-100/50 flex items-center justify-center mx-auto shadow-sm group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 overflow-hidden relative`}>
                    {f.photoUrl ? (
                      <img src={f.photoUrl} alt={f.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${f.gradient}`}>
                        <span className={`${isDean ? 'text-5xl' : 'text-4xl'} font-black text-white`}>{f.initials}</span>
                      </div>
                    )}
                  </div>
                  <h3 className={`${isDean ? 'text-3xl' : 'text-2xl'} font-black text-slate-900 mb-2 group-hover:text-fcit-400 transition-colors tracking-tight`}>{f.name}</h3>
                  <div className={`inline-flex items-center px-4 py-1.5 rounded-full ${isDean ? 'bg-fcit-400 text-white' : 'bg-fcit-100 text-fcit-400'} font-black text-[10px] mb-6 uppercase tracking-widest shadow-sm`}>
                    {f.designation}
                  </div>
                  <p className="text-slate-700 font-medium text-sm mb-8 pb-8 border-b border-slate-50">{f.specialization}</p>
                  <div className="flex justify-center gap-4">
                    <motion.button whileHover={{ scale: 1.1 }} className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-500 hover:text-white hover:bg-fcit-400 shadow-sm transition-all duration-300">
                      <Mail className="w-5 h-5" />
                    </motion.button>
                    <motion.button whileHover={{ scale: 1.1 }} className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-500 hover:text-white hover:bg-fcit-400 shadow-sm transition-all duration-300">
                      <BookOpen className="w-5 h-5" />
                    </motion.button>
                  </div>
                </motion.div>
              )
            })}
          </div>

          
          <AnimatedDivider />

          {/* Faculty Members */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 mt-12"
          >
            <TextReveal
              text="Academic Faculty"
              className="text-3xl font-black text-slate-900 mb-12"
            />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {faculty.slice(3).map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                viewport={{ once: true, amount: 0.1 }}
                style={{ willChange: 'transform, opacity' }}
                onClick={() => openProfile(f)}
                className="bg-white rounded-[2rem] border border-slate-100 p-8 shadow-premium hover:shadow-2xl hover:border-fcit-400 transition-all duration-500 text-center group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-[1rem] bg-fcit-100/50 flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 overflow-hidden relative">
                  {f.photoUrl ? (
                    <img src={f.photoUrl} alt={f.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${f.gradient}`}>
                      <span className="text-xl font-black text-white">{f.initials}</span>
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 truncate group-hover:text-fcit-400 transition-colors uppercase tracking-tight">{f.name}</h3>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-50 text-slate-600 font-bold text-[9px] mb-3 border border-slate-100 uppercase tracking-widest">
                  {f.designation}
                </div>
                <p className="text-slate-500 font-medium text-[10px] mb-5">{f.specialization}</p>
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
