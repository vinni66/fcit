import { useState, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { GraduationCap, BookOpen, Users, Award, ArrowRight, Monitor, Globe, Code, Database, Brain, Shield, Cpu, BarChart3, ChevronDown, CheckCircle2, Mail, Library, Dumbbell, Coffee } from 'lucide-react'
import CampusExperience from '../components/CampusExperience'
import HeroSlider from '../components/HeroSlider'
import FadeIn from '../components/FadeIn'
import StatsCounter from '../components/StatsCounter'
import ProgramBrowser from '../components/ProgramBrowser'
import FacultyModal from '../components/FacultyModal'

const objectives = [
  'Impart comprehensive engineering education aligned with industry needs.',
  'Promote research and development activities fostering innovation.',
  'Encourage sustainable and ethical practices in engineering projects.',
  'Develop leadership qualities and lifelong learning habits in students.',
  'Engage with community and industry to apply knowledge practically.',
]

const mission = [
  'To disseminate knowledge and conduct research in computing and IT with learner centric approach.',
  'To teach skills such as critical thinking, creativity and innovation, collaboration, communication, technical and digital, flexibility and adaptability, cultural values, and leadership and responsibility.',
  'To develop global citizens by educating students on emotional, physical, social, economic, environmental, spiritual dimensions of human growth in addition to intellectual pursuits.',
  'To address real-world challenges and to establish the groundwork for entrepreneurship and lifelong learning.',
]

const leadershipPreview = [
  {
    name: 'Mr. Rajashekhar G C',
    designation: 'Director (SCA)',
    initials: 'RG',
    photoUrl: 'https://gmu.ac.in/FCIT/images/Director.jpg',
    gradient: 'from-fcit-300 to-pink-600',
    specialization: 'Computer Applications',
    bio: 'Mr. Rajashekhar is a seasoned academician focusing on modern application architectures and full-stack development.',
    education: ['M.Tech in Software Engineering', 'MCA'],
  },
  {
    name: 'Dr. Shweta Marigoudar',
    designation: 'Dean, FCIT',
    initials: 'SM',
    photoUrl: 'https://gmu.ac.in/FCIT/images/Dean.jpg',
    gradient: 'from-fcit-400 to-fcit-300',
    specialization: 'Computer Science & Engineering',
    bio: 'Dr. Shweta Marigoudar serves as the Dean of the Faculty of Computer Applications and IT. With over 20 years of academic experience, she specializes in Cloud Computing and distributed systems.',
    education: ['Ph.D. in Computer Science', 'M.Tech in CSE'],
    email: 'dean.fcit@gmu.ac.in'
  },
  {
    name: 'Ms. Shamina M. Attar',
    designation: 'Director, SCS, FCIT',
    initials: 'SA',
    photoUrl: 'https://gmu.ac.in/FCIT/images/DirectorCS.jpg',
    gradient: 'from-cyan-600 to-fcit-400',
    specialization: 'Computer Science',
    bio: 'Ms. Shamina Attar leads the School of Computer Science with a focus on Algorithm design and Artificial Intelligence.',
    education: ['M.Sc in CS', 'M.Phil'],
  },
]

const facilities = [
  { title: 'Central Library', description: 'Extensive collection of technical literature, journals, and digital resources with quiet reading spaces.', icon: Library },
  { title: 'Sports Deck', description: 'Modern indoor and outdoor sporting facilities ensuring holistic physical development.', icon: Dumbbell },
  { title: 'Cafeteria', description: 'Hygienic, multi-cuisine dining areas offering an excellent environment for discussions.', icon: Coffee },
]

export default function Home() {
  const [selectedFaculty, setSelectedFaculty] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openProfile = (f) => {
    setSelectedFaculty(f)
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-[#f8fbff] text-slate-700 font-sans">
      <FacultyModal 
        faculty={selectedFaculty}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <HeroSlider />

      <StatsCounter />

      <FadeIn className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-fcit-100/60 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 opacity-70 pointer-events-none animate-pulse" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fcit-100/50 border border-fcit-200 text-fcit-400 font-bold text-sm mb-6 uppercase tracking-wider glow-gold backdrop-blur-md">
                <Globe className="w-4 h-4" /> Discover FCIT
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                Department <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-fcit-400 to-fcit-200 text-glow">Overview</span>
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-fcit-400 via-fcit-300 to-fcit-100 rounded-full mb-8 shadow-[0_0_15px_rgba(218,165,32,0.5)]" />
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
                Welcome to the Department of Computer Science! Our programs foster technical depth, innovation, and hands-on learning for a fast-changing world. Join us to experience collaborative research, expert faculty, and vibrant student life.
              </p>
            </div>
            
            <div className="flex-1 w-full">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-fcit-400 to-fcit-200 rounded-3xl transform rotate-1 scale-105 opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-700"></div>
                <div className="relative bg-white border border-fcit-100 rounded-3xl shadow-premium p-8 md:p-10 overflow-hidden group-hover:border-fcit-200 transition-colors">
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                    <GraduationCap className="w-32 h-32" />
                  </div>
                  <h3 className="text-2xl font-bold text-fcit-400 mb-6 relative z-10 text-glow">Why Choose Us?</h3>
                  <ul className="space-y-4 relative z-10">
                    {[
                      "Industry-aligned contemporary curriculum",
                      "State-of-the-art laboratory infrastructure",
                      "Active research and innovation centers",
                      "Strong corporate placement network"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-4 group/li">
                        <div className="w-9 h-9 rounded-full bg-fcit-100/60 flex items-center justify-center flex-shrink-0 group-hover/li:bg-fcit-200/50 transition-colors shadow-sm">
                          <CheckCircle2 className="w-5 h-5 text-fcit-400" />
                        </div>
                        <span className="text-slate-700 font-medium text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Real Functionality: Program Browser */}
      <section className="bg-[#f8fbff] relative py-20 border-t border-slate-100">
         <ProgramBrowser />
      </section>

      <FadeIn className="py-24 bg-[#f8fbff] relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-fcit-200 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2 opacity-50 pointer-events-none animate-pulse" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-fcit-400 to-fcit-200 text-glow">Vision & Mission</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">The guiding principles that drive our pursuit of academic and technological excellence.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <div className="relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-fcit-400 to-fcit-200 rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"></div>
              <div className="relative h-full bg-white rounded-[3rem] p-10 md:p-14 border border-slate-100 shadow-premium overflow-hidden hover:border-fcit-400 transition-all duration-500">
                <div className="absolute top-0 right-0 w-40 h-40 bg-fcit-100/30 rounded-bl-[120px] -z-0 transition-transform duration-700 group-hover:scale-110"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-fcit-100/50 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-fcit-400 transition-colors duration-500">
                    <Globe className="w-8 h-8 text-fcit-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-6 group-hover:text-fcit-400 transition-colors">Vision</h3>
                  <p className="text-slate-700 text-xl leading-relaxed font-light">
                    To be a leading center of excellence in computing and information technology, fostering innovation, research, and transformative learning to shape the digital future.
                  </p>
                  <div className="mt-10 pt-8 border-t border-slate-50">
                    <span className="px-4 py-1.5 rounded-full bg-fcit-100 text-fcit-400 text-xs font-black uppercase tracking-widest">Innovation First</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-fcit-300 to-fcit-100 rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"></div>
              <div className="relative h-full bg-white rounded-[3rem] p-10 md:p-14 border border-slate-100 shadow-premium overflow-hidden hover:border-fcit-300 transition-all duration-500">
                <div className="absolute top-0 right-0 w-40 h-40 bg-fcit-100/30 rounded-bl-[120px] -z-0 transition-transform duration-700 group-hover:scale-110"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-fcit-100/50 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-fcit-300 transition-colors duration-500">
                    <Award className="w-8 h-8 text-fcit-300 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-6 group-hover:text-fcit-300 transition-colors">Mission</h3>
                  <ul className="space-y-5 text-slate-700">
                    {mission.map((m, i) => (
                      <li key={i} className="flex items-start gap-4 p-2 rounded-xl transition-colors">
                        <div className="w-3 h-3 bg-fcit-300 rounded-full mt-2 flex-shrink-0 shadow-[0_0_10px_rgba(218,165,32,0.6)]" />
                        <span className="text-lg leading-relaxed font-light">{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Department Objectives</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-fcit-400 to-fcit-300 mx-auto rounded-full" />
          </div>

          <div className="relative border-l-2 border-fcit-100 ml-4 md:ml-0 lg:pl-0">
            {objectives.map((obj, i) => (
              <div key={i} className="relative pl-8 md:pl-0 mb-12 last:mb-0 group">
                <div className="absolute left-[-9px] md:left-[-9px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-4 border-fcit-400 shadow-lg group-hover:scale-150 group-hover:bg-fcit-400 transition-all duration-300"></div>
                <div className="bg-slate-50 hover:bg-white rounded-2xl border border-slate-100 hover:border-fcit-200 p-6 md:p-8 md:ml-12 shadow-sm hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                  <div className="flex items-center gap-6">
                    <span aria-hidden="true" className="text-5xl md:text-7xl font-black text-fcit-400/10 group-hover:text-fcit-400/20 transition-all duration-500 pointer-events-none select-none text-glow">
                      0{i + 1}
                    </span>
                    <p className="text-xl text-slate-700 leading-relaxed font-medium">{obj}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn className="py-24 bg-[#f8fbff] border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Leadership & <span className="text-transparent bg-clip-text bg-gradient-to-r from-fcit-400 to-fcit-300">Faculty</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-fcit-400 to-fcit-200 mx-auto rounded-full mb-6" />
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
              Our esteemed academic leaders act as mentors, guiding the next generation of tech innovators.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {leadershipPreview.map((f, i) => {
              const isDean = f.designation.includes('Dean')
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: isDean ? 0.95 : 0.9, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
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
                  <p className="text-slate-700 font-medium text-sm mb-4 line-clamp-2">{f.specialization}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </FadeIn>

      <div className="bg-[#fbfcff] pb-10">
        <CampusExperience />
      </div>

      <FadeIn className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Campus <span className="text-transparent bg-clip-text bg-gradient-to-r from-fcit-400 to-fcit-200">Facilities</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-fcit-400 to-fcit-200 mx-auto rounded-full mb-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {facilities.map((fac, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-[3rem] p-12 border border-slate-100 shadow-premium hover:shadow-2xl hover:border-fcit-400 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-fcit-100/20 rounded-bl-[120px] pointer-events-none transition-transform duration-700 group-hover:scale-125" />
                <div className="w-16 h-16 bg-fcit-100/50 flex items-center justify-center rounded-2xl mb-8 relative z-10 group-hover:bg-fcit-400 transition-all duration-500 shadow-sm">
                  <fac.icon className="w-8 h-8 text-fcit-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 relative z-10 group-hover:text-fcit-400 transition-colors">{fac.title}</h3>
                <p className="text-slate-700 font-light leading-relaxed relative z-10 mb-8">{fac.description}</p>
                <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-widest text-fcit-400 opacity-70">Main Campus</span>
                  <div className="w-8 h-8 rounded-full bg-fcit-100/50 flex items-center justify-center group-hover:bg-fcit-400 group-hover:text-white transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeIn>

      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-fcit-100/30 via-[#f8fbff] to-white">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <FadeIn className="p-12 md:p-16 rounded-[3rem] bg-white/70 border border-white/80 backdrop-blur-3xl shadow-[0_20px_60px_-15px_rgba(99,103,255,0.1)] relative overflow-hidden">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
              Ready to Shape <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fcit-400 to-fcit-300">Your Future?</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Join FCIT and become part of a vibrant community of innovators, researchers, and future technology leaders at GM University.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/admissions"
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-fcit-400 to-fcit-300 text-white px-10 py-5 rounded-full font-bold text-lg overflow-hidden transition-transform hover:scale-105 shadow-xl shadow-fcit-400/20"
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <span className="relative z-10">Apply Now</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}


