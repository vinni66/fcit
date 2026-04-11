import { useState } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, Users, Award, ArrowRight, Monitor, Globe, Code, Database, Brain, Shield, Cpu, BarChart3, ChevronDown, CheckCircle2, Mail, Library, Dumbbell, Coffee } from 'lucide-react'
import CampusExperience from '../components/CampusExperience'
import HeroSlider from '../components/HeroSlider'

const stats = [
  { label: 'Programs Offered', value: '11+', icon: BookOpen },
  { label: 'Expert Faculty', value: '11+', icon: Users },
  { label: 'Schools', value: '2', icon: GraduationCap },
  { label: 'Placement Rate', value: '95%', icon: Award },
]

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

const scaPrograms = [
  { title: 'BCA – General', duration: '3 Years', icon: Monitor, gradient: 'from-fcit-400 to-fcit-300', eligibility: '10+2 in any stream with Mathematics' },
  { title: 'BCA – AI & Data Analytics', duration: '3 Years', icon: Brain, gradient: 'from-fcit-300 to-fcit-200', eligibility: '10+2 in any stream with Mathematics' },
  { title: 'BCA – Data Science', duration: '3 Years', icon: BarChart3, gradient: 'from-fcit-200 to-fcit-100', eligibility: '10+2 in any stream with Mathematics' },
  { title: 'BCA – Cyber Security', duration: '3 Years', icon: Shield, gradient: 'from-fcit-400 via-fcit-300 to-fcit-200', eligibility: '10+2 in any stream with Mathematics' },
  { title: 'MCA – General', duration: '2 Years', icon: Code, gradient: 'from-fcit-300 to-fcit-400', eligibility: "Bachelor's degree with Mathematics" },
  { title: 'MCA – AI', duration: '2 Years', icon: Brain, gradient: 'from-fcit-200 to-fcit-300', eligibility: "Bachelor's degree with Mathematics" },
]

const scsPrograms = [
  { title: 'MSc – AI & Data Analytics', duration: '2 Years', icon: Cpu, gradient: 'from-fcit-400 to-fcit-300', eligibility: 'B.Sc/BCA Relevant Fields or B.Tech with Maths' },
  { title: 'MSc – Data Science', duration: '2 Years', icon: Database, gradient: 'from-fcit-300 to-fcit-200', eligibility: 'B.Sc/BCA Relevant Fields or B.Tech with Maths' },
  { title: 'MSc – Cyber Security', duration: '2 Years', icon: Shield, gradient: 'from-fcit-200 to-fcit-100', eligibility: 'B.Sc/BCA Relevant Fields or B.Tech with Maths' },
]

const leadershipPreview = [
  { name: 'Dr. Jane Doe', designation: 'Dean, FCIT', initials: 'JD', gradient: 'from-fcit-400 to-fcit-300', specialization: 'Computer Science' },
  { name: 'Mr. John Smith', designation: 'Director (SCA)', initials: 'JS', gradient: 'from-fcit-300 to-fcit-200', specialization: 'Computer Applications' },
  { name: 'Dr. Emily Chen', designation: 'Director (SCS)', initials: 'EC', gradient: 'from-fcit-200 to-fcit-100', specialization: 'Artificial Intelligence' },
]

const facilities = [
  { title: 'Central Library', description: 'Extensive collection of technical literature, journals, and digital resources with quiet reading spaces.', icon: Library },
  { title: 'Sports Deck', description: 'Modern indoor and outdoor sporting facilities ensuring holistic physical development.', icon: Dumbbell },
  { title: 'Cafeteria', description: 'Hygienic, multi-cuisine dining areas offering an excellent environment for discussions.', icon: Coffee },
]

function ProgramCard({ prog, index }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative bg-white flex flex-col rounded-[2.5rem] p-1 shadow-sm hover:shadow-2xl transition-all duration-300 hover:border-fcit-200"
    >
      {/* Glowing border effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${prog.gradient} rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10`} />
      <div className={`absolute inset-0 bg-gradient-to-br ${prog.gradient} rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />
      
      <div className="h-full bg-white rounded-[2.35rem] p-6 lg:p-8 relative overflow-hidden z-10 border border-slate-100 group-hover:border-transparent transition-colors flex flex-col">
        <div className="absolute top-0 right-0 w-40 h-40 bg-fcit-100/20 rounded-bl-[100px] -z-10 group-hover:bg-fcit-100/50 transition-colors"></div>
        
        {/* Header: Clickable on Mobile to Expand */}
        <div 
          className="flex items-center justify-between lg:block cursor-pointer lg:cursor-default" 
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center gap-4 lg:block">
            <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-[1.5rem] bg-gradient-to-br ${prog.gradient} flex items-center justify-center lg:mb-6 shadow-lg shadow-fcit-400/20 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shrink-0`}>
              <prog.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-slate-900 leading-tight group-hover:text-fcit-400 transition-colors lg:mb-3">{prog.title}</h3>
          </div>
          <ChevronDown className={`w-6 h-6 lg:hidden text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
        </div>

        {/* Collapsible Details */}
        <div className={`lg:block overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0 lg:max-h-none lg:opacity-100 mt-0 lg:mt-auto'}`}>
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-50 text-slate-600 text-sm font-bold border border-slate-100 mb-4">
            {prog.duration} • Full-time
          </div>
          <p className="text-slate-500 text-sm mb-8 leading-relaxed">
            <span className="font-semibold text-slate-700 block mb-1">Eligibility:</span> {prog.eligibility}
          </p>
          
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-fcit-400 font-bold group-hover:text-fcit-300 transition-colors cursor-pointer mt-auto">
            <span>View Details</span>
            <div className="w-10 h-10 rounded-full bg-fcit-100/30 flex items-center justify-center group-hover:bg-fcit-200/50 transition-colors">
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-[#f8fbff] text-slate-700 font-sans"
    >
      {/* Modern Hero Slider */}
      <HeroSlider />

      {/* Remaining sections adapted perfectly to Light Theme */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-fcit-100/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 opacity-60 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row gap-12 items-center"
          >
            <div className="flex-1 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fcit-100/50 border border-fcit-200 text-fcit-400 font-bold text-sm mb-6 uppercase tracking-wider">
                <Globe className="w-4 h-4" /> Discover FCIT
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                Department <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-fcit-400 to-fcit-300">Overview</span>
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-fcit-400 to-fcit-200 rounded-full mb-8" />
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
                Welcome to the Department of Computer Science! Our programs foster technical depth, innovation, and hands-on learning for a fast-changing world. Join us to experience collaborative research, expert faculty, and vibrant student life.
              </p>
            </div>
            
            <div className="flex-1 w-full">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-fcit-300 to-fcit-100 rounded-3xl transform rotate-3 scale-105 opacity-40 blur-xl md:block hidden"></div>
                <div className="relative bg-white border border-fcit-100/50 rounded-3xl shadow-2xl p-8 md:p-10 overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 opacity-5">
                    <GraduationCap className="w-32 h-32" />
                  </div>
                  <h3 className="text-2xl font-bold text-fcit-400 mb-6 relative z-10">Why Choose Us?</h3>
                  <ul className="space-y-4 relative z-10">
                    {[
                      "Industry-aligned contemporary curriculum",
                      "State-of-the-art laboratory infrastructure",
                      "Active research and innovation centers",
                      "Strong corporate placement network"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-fcit-100/60 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-5 h-5 text-fcit-400" />
                        </div>
                        <span className="text-slate-700 font-medium text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission - Glassmorphic Cards */}
      <section className="py-24 bg-[#f8fbff] relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-fcit-200 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 opacity-40 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-fcit-400 to-fcit-300">Vision & Mission</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">The guiding principles that drive our pursuit of academic and technological excellence.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
              className="relative group h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-fcit-400 to-fcit-200 rounded-[2.5rem] blur-xl opacity-10 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"></div>
              <div className="relative h-full bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-xl overflow-hidden hover:border-fcit-300 transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-fcit-100/50 rounded-bl-[100px] -z-0 transition-transform duration-500 group-hover:scale-110"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-fcit-400 to-fcit-300 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-fcit-400/30 transform group-hover:-translate-y-2 transition-transform duration-300">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-6">Vision</h3>
                  <p className="text-slate-600 text-xl leading-relaxed font-light">
                    To be a leading center of excellence in computing and information technology, fostering innovation, research, and transformative learning to shape the digital future.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, type: "spring", delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-fcit-300 to-fcit-100 rounded-[2.5rem] blur-xl opacity-10 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"></div>
              <div className="relative h-full bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-xl overflow-hidden hover:border-fcit-200 transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-fcit-100/50 rounded-bl-[100px] -z-0 transition-transform duration-500 group-hover:scale-110"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-fcit-300 to-fcit-200 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-fcit-300/30 transform group-hover:-translate-y-2 transition-transform duration-300">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-6">Mission</h3>
                  <ul className="space-y-4 text-slate-600">
                    {mission.map((m, i) => (
                      <li key={i} className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-fcit-100/50">
                        <div className="w-3 h-3 bg-fcit-400 rounded-full mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(99,103,255,0.6)]" />
                        <span className="text-lg leading-relaxed font-light">{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Department Objectives - Timeline Style */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Department Objectives</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-fcit-400 to-fcit-300 mx-auto rounded-full" />
          </motion.div>

          <div className="relative border-l-2 border-fcit-100 ml-4 md:ml-0 lg:pl-0">
            {objectives.map((obj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative pl-8 md:pl-0 mb-12 last:mb-0 group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-9px] md:left-[-9px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-4 border-fcit-400 shadow-lg group-hover:scale-150 group-hover:bg-fcit-400 transition-all duration-300"></div>
                
                <div className="bg-slate-50 hover:bg-white rounded-2xl border border-slate-100 hover:border-fcit-200 p-6 md:p-8 md:ml-12 shadow-sm hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                  <div className="flex items-center gap-6">
                    <span aria-hidden="true" className="text-5xl md:text-6xl font-black text-fcit-100/30 group-hover:text-fcit-300/10 transition-colors pointer-events-none select-none">
                      0{i + 1}
                    </span>
                    <p className="text-xl text-slate-700 leading-relaxed font-medium">{obj}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SCA Programs */}
      <section className="py-24 bg-gradient-to-b from-[#f8fbff] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-fcit-200 text-fcit-400 font-bold mb-4 shadow-sm">
              SCA
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              School of <span className="text-transparent bg-clip-text bg-gradient-to-r from-fcit-400 to-fcit-300">Computer Application</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Undergraduate and postgraduate programs designed to build expertise in computer applications and IT professionally.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scaPrograms.map((prog, i) => (
              <ProgramCard key={i} prog={prog} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* SCS Programs */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decor */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-fcit-100),transparent_50%)] pointer-events-none opacity-40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-fcit-200 text-fcit-400 font-bold mb-4 shadow-sm">
              SCS
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              School of <span className="text-transparent bg-clip-text bg-gradient-to-r from-fcit-300 to-fcit-400">Computer Science</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Advanced programs that develop expertise in AI, Data Science, Cyber Security, and cutting-edge computing research.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {scsPrograms.map((prog, i) => (
              <ProgramCard key={i} prog={prog} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Faculty Preview */}
      <section className="py-24 bg-[#f8fbff] border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Leadership & <span className="text-transparent bg-clip-text bg-gradient-to-r from-fcit-400 to-fcit-300">Faculty</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-fcit-400 to-fcit-200 mx-auto rounded-full mb-6" />
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
              Our esteemed academic leaders act as mentors, guiding the next generation of tech innovators.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipPreview.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white/80 backdrop-blur-sm rounded-[2.5rem] border border-white p-8 shadow-[0_10px_30px_-10px_rgba(99,103,255,0.1)] hover:shadow-2xl hover:border-fcit-200 transition-all duration-300 text-center group"
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Experience - Auto-sliding Carousels */}
      <div className="bg-[#fbfcff] pb-10">
        <CampusExperience />
      </div>

      {/* Campus Facilities Preview */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Campus <span className="text-transparent bg-clip-text bg-gradient-to-r from-fcit-400 to-fcit-200">Facilities</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-fcit-400 to-fcit-200 mx-auto rounded-full mb-6" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {facilities.map((fac, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative bg-[#f8fbff] rounded-[2rem] p-10 border border-slate-100 shadow-sm hover:shadow-xl hover:border-fcit-200 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-fcit-100/50 rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-125" />
                <div className="w-16 h-16 bg-white shadow-md rounded-2xl flex items-center justify-center mb-6 relative z-10 group-hover:-translate-y-2 group-hover:bg-fcit-400 transition-all duration-300">
                  <fac.icon className="w-8 h-8 text-fcit-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 relative z-10">{fac.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed relative z-10">{fac.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Light Theme CTA */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-fcit-100/30 via-[#f8fbff] to-white">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-fcit-200/30 rounded-full blur-[100px]" />
           <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-fcit-100/40 rounded-full blur-[80px]" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="p-12 md:p-16 rounded-[3rem] bg-white/70 border border-white/80 backdrop-blur-3xl shadow-[0_20px_60px_-15px_rgba(99,103,255,0.1)] relative overflow-hidden"
          >
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
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
