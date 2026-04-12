import { motion } from 'framer-motion'
import { GraduationCap, Award, Target, BookOpen, Cpu, Globe, Shield, Database, Cloud, Code } from 'lucide-react'

const domains = [
  { name: 'Artificial Intelligence', icon: Cpu },
  { name: 'Data Science', icon: Database },
  { name: 'Cloud Computing', icon: Cloud },
  { name: 'Cybersecurity', icon: Shield },
  { name: 'Internet of Things (IoT)', icon: Globe },
  { name: 'Blockchain', icon: Code },
  { name: 'Software Engineering', icon: BookOpen },
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

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-white text-slate-700 pt-24"
    >
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-fcit-400 to-fcit-300 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-black mb-6"
          >
            About <span className="bg-gradient-to-r from-fcit-100 to-fcit-200 bg-clip-text text-transparent drop-shadow-sm">FCIT</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-fcit-100 max-w-3xl mx-auto leading-relaxed"
          >
            Faculty of Computing and IT — GM University
          </motion.p>
        </div>
      </section>

      {/* QS Ranking Banner Image */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex justify-center">
           <motion.img 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             src="https://gmu.ac.in/FCIT/images/background.jpg" 
             alt="QS World University Rankings 2026 Banner" 
             className="w-full h-auto max-h-[400px] object-cover rounded-3xl shadow-2xl border border-fcit-200"
           />
        </div>
      </section>

      {/* Department Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Department Overview</h2>
            <div className="w-16 h-1 bg-fcit-400 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-fcit-100 p-8 shadow-lg max-w-4xl mx-auto"
          >
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              The Faculty of Computing and IT (FCIT) offers a dynamic learning environment that blends academic excellence with hands-on experience. It provides undergraduate, postgraduate, and doctoral programs designed to prepare students for careers in cutting-edge areas of computing.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              With strong industry collaborations, internships, technical events, and student-led activities, FCIT ensures holistic development and career readiness. The department continually strives to nurture skilled professionals, innovators, and researchers who can contribute to the ever-evolving digital world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Domains */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Key Domains</h2>
            <div className="w-16 h-1 bg-fcit-400 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {domains.map((domain, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="bg-white rounded-2xl border border-fcit-100 p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-fcit-400 to-fcit-300 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform">
                  <domain.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-sm font-bold text-slate-800">{domain.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Vision & Mission
            </h2>
            <div className="w-16 h-1 bg-fcit-400 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-2xl border border-fcit-100 p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-fcit-400 to-fcit-400 rounded-xl flex items-center justify-center mb-6 shadow-md">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Vision</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                To be a leading center of excellence in computing and information technology, fostering innovation, research, and transformative learning to shape the digital future.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-2xl border border-fcit-100 p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-fcit-200 to-fcit-400 rounded-xl flex items-center justify-center mb-6 shadow-md">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Mission</h3>
              <ul className="space-y-3 text-slate-600">
                {mission.map((m, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-fcit-300 rounded-full mt-2.5 flex-shrink-0" />
                    <span className="text-base leading-relaxed">{m}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Department Objectives</h2>
            <div className="w-16 h-1 bg-fcit-400 mx-auto rounded-full" />
          </motion.div>

          <div className="space-y-4">
            {objectives.map((obj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 8 }}
                className="flex items-start gap-4 bg-white rounded-xl border border-fcit-100 p-5 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-fcit-400 to-fcit-300 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="text-white font-bold text-sm">{i + 1}</span>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed">{obj}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
