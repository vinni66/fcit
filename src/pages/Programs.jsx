import { motion, AnimatePresence } from 'framer-motion'
import { Monitor, Code, Brain, Shield, Database, BarChart3, Cpu, ArrowRight, Clock, CheckCircle, ChevronDown, Download, Layers, X, BookOpen } from 'lucide-react'
import { useState } from 'react'
import { OFFICIAL_LINKS } from '../constants'
import ProgramModal from '../components/ProgramModal'
import TextReveal from '../components/TextReveal'
import FadeIn from '../components/FadeIn'
import AnimatedDivider from '../components/AnimatedDivider'

const bcaJourney = [
  { sem: 'Sem 1', title: 'Core Foundations', skills: ['C Programming', 'Comp Fundamentals', 'Mathematics'], focus: 'Building strong logic and procedural programming foundations.' },
  { sem: 'Sem 2', title: 'Data Structures', skills: ['C++', 'DS with C++', 'Architecture'], focus: 'Mastering memory management and algorithm optimization.' },
  { sem: 'Sem 3', title: 'Data & Systems', skills: ['Core Java', 'Data Science Intro', 'Cloud Computing'], focus: 'Entering the world of data science and enterprise applications.' },
  { sem: 'Sem 4', title: 'Scripting & DBs', skills: ['Python', 'DBMS', 'IoT'], focus: 'Developing analytical scripting skills and database management.' },
  { sem: 'Sem 5', title: 'Data Intelligence', skills: ['R Programming', 'Data Viz', 'Data Mining'], focus: 'Advanced visualization using Power BI, Tableau and R.' },
  { sem: 'Sem 6', title: 'Cloud & Project', skills: ['Big Data', 'Web Tech (PHP)', 'Major Project'], focus: 'Deploying large-scale projects and mastering big data analytics.' },
]

const mcaJourney = [
  { sem: 'Sem 1', title: 'Advanced Computing', skills: ['Adv Java', 'ML Basics', 'Big Data'], focus: 'High-level application architectures and data science.' },
  { sem: 'Sem 2', title: 'Intelligent Systems', skills: ['Deep Learning', 'DevOps', 'Cloud'], focus: 'Neural networks and automated deployment pipelines.' },
  { sem: 'Sem 3', title: 'Specialization', skills: ['IoT', 'BlockChain', 'AR/VR'], focus: 'Diving deep into emerging technologies and niche sectors.' },
  { sem: 'Sem 4', title: 'Research & Industry', skills: ['Industrial Project', 'Thesis', 'Optimization'], focus: 'Corporate capstone projects and research publications.' },
]

function CurriculumJourney({ data, title }) {
  return (
    <div className="py-20">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-12 px-4"
      >
        <h3 className="text-3xl font-black text-slate-800 mb-2">{title} <span className="text-fcit-400">Journey</span></h3>
        <div className="w-16 h-1 bg-fcit-300 rounded-full" />
      </motion.div>
      
      <div className="flex overflow-x-auto pb-12 pt-4 px-4 gap-8 no-scrollbar scroll-smooth snap-x">
        {data.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true, amount: 0.1 }}
            className="flex-shrink-0 w-[300px] snap-center group relative mt-10"
          >
            {/* Liquid Connector */}
            {i !== data.length - 1 && (
              <div className="absolute top-[28px] left-[50%] w-[100%] h-0.5 bg-gradient-to-r from-fcit-300/50 to-transparent z-0 hidden lg:block" />
            )}
            
            <div className="relative z-10 flex flex-col items-center">
              {/* Semester Node */}
              <div className="w-14 h-14 rounded-2xl bg-white border-2 border-fcit-100 flex items-center justify-center text-fcit-400 font-black text-lg shadow-sm group-hover:bg-fcit-400 group-hover:text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 mb-6 group-hover:shadow-glow-maroon">
                {i + 1}
              </div>
              
              {/* Content Card */}
              <div className="w-full bg-white/60 backdrop-blur-md rounded-[2rem] border border-white/80 p-6 shadow-sm group-hover:shadow-xl group-hover:bg-white transition-all duration-300">
                <span className="text-[10px] font-black text-fcit-300 uppercase tracking-widest mb-1 block">{step.sem}</span>
                <h4 className="text-xl font-black text-slate-900 mb-4 group-hover:text-fcit-400 transition-colors uppercase tracking-tight">{step.title}</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {step.skills.map((s, j) => (
                    <span key={j} className="px-2.5 py-1 rounded-full bg-white border border-slate-100 text-[9px] font-bold text-slate-500 uppercase tracking-tighter">
                      {s}
                    </span>
                  ))}
                </div>
                <p className="text-slate-600 text-xs font-medium leading-relaxed">{step.focus}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
const scaPrograms = [
  {
    title: 'BCA – Computer Applications',
    duration: '3 Years (Full-time)',
    eligibility: 'Pass in 10+2 / PUC in any stream with at least 35% aggregate marks.',
    icon: Monitor,
    category: 'SCA',
    gradient: 'from-fcit-400 to-fcit-300',
    highlights: ['Core Programming', 'Software Engineering', 'Cloud Computing', 'Web Technologies'],
    syllabusUrl: OFFICIAL_LINKS.BCA_SYLLABUS,
    detailedCurriculum: [
      { sem: 'Sem 1', subjects: ['C Programming', 'Computer Fundamentals', 'Mathematical Foundation', 'Life Skills'] },
      { sem: 'Sem 2', subjects: ['C++ Programming', 'Data Structures using C++', 'Operating Systems', 'Indian Constitution'] },
      { sem: 'Sem 3', subjects: ['Core Java', 'Cloud Computing', 'Software Engineering', 'Digital Fluency'] },
      { sem: 'Sem 4', subjects: ['Python Programming', 'DBMS', 'IoT', 'Cyber Ethics'] }
    ]
  },
  {
    title: 'BCA – Data Science',
    duration: '3 Years (Full-time)',
    eligibility: 'Pass in 10+2 / PUC in any stream with at least 35% aggregate marks.',
    icon: BarChart3,
    category: 'SCA',
    gradient: 'from-fcit-300 to-fcit-200',
    highlights: ['Specialization in Data Science', 'Statistical Modeling', 'Python & R', 'Data Mining'],
    syllabusUrl: OFFICIAL_LINKS.BCA_DS_SYLLABUS,
    detailedCurriculum: [
      { sem: 'Sem 1', subjects: ['C Programming', 'Computer Fundamentals', 'Mathematics', 'General English'] },
      { sem: 'Sem 2', subjects: ['C++ Programming', 'DS using C++', 'Environmental Studies', 'Indian Constitution'] },
      { sem: 'Sem 3', subjects: ['Fundamentals of Data Science', 'Core Java', 'Cloud Computing', 'DAA'] },
      { sem: 'Sem 4', subjects: ['Python Programming', 'DBMS', 'Cyber Ethics', 'IoT'] },
      { sem: 'Sem 5', subjects: ['R Programming', 'Data Visualization (Power BI & Tableau)', 'Data Mining', 'Software Engineering'] },
      { sem: 'Sem 6', subjects: ['Big Data Analytics', 'Web Development (PHP-MySQL)', 'Professional Ethics', 'Major Project'] }
    ]
  },
  {
    title: 'BCA – AI and Data Analytics',
    duration: '3 Years (Full-time)',
    eligibility: 'Pass in 10+2 / PUC in any stream with at least 35% aggregate marks.',
    icon: Brain,
    category: 'SCA',
    gradient: 'from-fcit-200 to-fcit-100',
    highlights: ['Machine Learning', 'AI Basics', 'Deep Learning', 'Predictive Analytics'],
    syllabusUrl: OFFICIAL_LINKS.BCA_SYLLABUS,
  },
  {
    title: 'MCA – General',
    duration: '2 Years (Full-time)',
    eligibility: 'Any degree with 50% marks (45% for SC/ST/Cat-I) and PGCET/GMUSET score.',
    fee: '₹ 1,35,000',
    icon: Code,
    category: 'SCA',
    gradient: 'from-fcit-400 via-fcit-300 to-fcit-200',
    highlights: ['Advanced Programming', 'System Design', 'Project Management', 'Full Stack Development'],
    syllabusUrl: OFFICIAL_LINKS.MCA_SYLLABUS,
  },
  {
    title: 'MCA – Data Science',
    duration: '2 Years (Full-time)',
    eligibility: 'Any degree with 50% marks (45% for SC/ST/Cat-I) and PGCET/GMUSET score.',
    fee: '₹ 1,35,000',
    icon: BarChart3,
    category: 'SCA',
    gradient: 'from-fcit-300 to-fcit-200',
    highlights: ['Specialization in Data Science', 'Big Data Analytics', 'Predictive Modeling', 'Machine Learning'],
    syllabusUrl: OFFICIAL_LINKS.MCA_SYLLABUS,
  },
  {
    title: 'MCA – Cyber Security',
    duration: '2 Years (Full-time)',
    eligibility: 'Any degree with 50% marks (45% for SC/ST/Cat-I) and PGCET/GMUSET score.',
    fee: '₹ 1,35,000',
    icon: Shield,
    category: 'SCA',
    gradient: 'from-fcit-400 to-violet-600',
    highlights: ['Advanced Cryptography', 'Ethical Hacking', 'Digital Forensics', 'Network Security'],
    syllabusUrl: OFFICIAL_LINKS.MCA_SYLLABUS,
  },
  {
    title: 'MCA – AI and Data Analytics',
    duration: '2 Years (Full-time)',
    eligibility: 'Any degree with 50% marks (45% for SC/ST/Cat-I) and PGCET/GMUSET score.',
    fee: '₹ 1,35,000',
    icon: Brain,
    category: 'SCA',
    gradient: 'from-fcit-200 to-fcit-100',
    highlights: ['AI & Deep Learning', 'Intelligent Systems', 'Computer Vision', 'Data Visualization'],
    syllabusUrl: OFFICIAL_LINKS.MCA_SYLLABUS,
  },
]

const scsPrograms = [
  {
    title: 'BSc – Information Technology',
    duration: '3 Years (Full-time)',
    eligibility: 'Pass in 10+2 / PUC in any stream.',
    icon: Cpu,
    category: 'SCS',
    gradient: 'from-fcit-400 to-fcit-300',
    highlights: ['Hardware basics', 'Networking', 'IT Infrastructure', 'Programming fundamentals'],
  },
  {
    title: 'MSc – Data Science',
    duration: '2 Years (Full-time)',
    eligibility: 'B.Sc/BCA from a recognized university with at least 50% aggregate marks.',
    icon: Database,
    category: 'SCS',
    gradient: 'from-fcit-300 to-fcit-200',
    highlights: ['Advanced Big Data', 'Statistical Learning', 'Visualization', 'Research Methods'],
  },
  {
    title: 'MSc – AI and Data Analytics',
    duration: '2 Years (Full-time)',
    eligibility: 'B.Sc/BCA from a recognized university with at least 50% aggregate marks.',
    icon: Brain,
    category: 'SCS',
    gradient: 'from-fcit-200 to-fcit-100',
    highlights: ['Deep Learning', 'Neural Networks', 'NLP', 'Computer Vision'],
  },
  {
    title: 'MSc – Cyber Security & Digital Forensics',
    duration: '2 Years (Full-time)',
    eligibility: 'Degree in Computer Science or relevant field with 50% marks.',
    icon: Shield,
    category: 'SCS',
    gradient: 'from-fcit-400 to-violet-600',
    highlights: ['Advanced Cryptography', 'Ethical Hacking', 'Security Auditing', 'Cyber Law'],
  },
  {
    title: 'MSc – Information Technology',
    duration: '2 Years (Full-time)',
    eligibility: 'Bachelor\'s Degree in IT/CS/Relevant stream with 50% marks.',
    icon: Monitor,
    category: 'SCS',
    gradient: 'from-teal-600 to-fcit-400',
    highlights: ['Enterprise Computing', 'Network Management', 'IT Governance', 'Advanced Web Apps'],
  },
]

function ProgramCard({ prog, i, onOpen }) {
  return (
    <motion.div
       variants={{}}
       initial={{ opacity: 0, y: 30 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ delay: i * 0.1, duration: 0.5 }}
       viewport={{ once: true, amount: 0.1 }}
       style={{ willChange: 'transform, opacity' }}
       className="group relative bg-white rounded-[2.5rem] p-1 shadow-sm hover:shadow-[0_20px_60px_-15px_rgba(99,103,255,0.2)] transition-all duration-500"
     >
       <div className={`absolute inset-0 bg-gradient-to-br ${prog.gradient} rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10`} />
       
       <div className="h-full bg-white rounded-[2.35rem] p-8 relative overflow-hidden z-10 border border-slate-100 group-hover:border-transparent transition-colors flex flex-col">
         <div className="absolute top-0 right-0 w-40 h-40 bg-fcit-100/20 rounded-bl-[100px] -z-10 group-hover:bg-fcit-100/50 transition-colors pointer-events-none"></div>
         
         <div className={`w-16 h-16 rounded-[1.5rem] bg-gradient-to-br ${prog.gradient} flex items-center justify-center mb-6 shadow-lg shadow-fcit-400/20 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
           <prog.icon className="w-8 h-8 text-white" />
         </div>
         <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight group-hover:text-fcit-400 transition-colors uppercase tracking-tight">{prog.title}</h3>
         
         <div className="inline-flex items-center self-start px-4 py-2 rounded-full bg-slate-50 text-slate-600 text-[10px] font-black uppercase border border-slate-100 mb-6 group-hover:border-fcit-200/50 transition-colors tracking-widest">
           <Clock className="w-3.5 h-3.5 mr-2 text-fcit-400" />
           {prog.duration}
         </div>
         
         <div className="space-y-4 mb-8 flex-grow">
            <p className="text-xs font-black text-fcit-400 uppercase tracking-widest opacity-60">Program Highlights</p>
            {prog.highlights.map((h, j) => (
              <div key={j} className="flex items-start gap-4 text-sm text-slate-700 font-medium">
                <CheckCircle className="w-5 h-5 text-fcit-400/50 flex-shrink-0" />
                <span className="pt-0.5">{h}</span>
              </div>
            ))}
         </div>

         <button 
           onClick={onOpen}
           className="mt-6 flex items-center justify-between w-full p-6 bg-slate-50 rounded-2xl group/btn hover:bg-fcit-400 transition-all border border-slate-100 hover:border-fcit-400"
         >
           <span className="text-xs font-black uppercase tracking-widest text-slate-900 group-hover/btn:text-white transition-colors">View Details</span>
           <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover/btn:bg-white/20 transition-all shadow-sm">
             <ArrowRight className="w-5 h-5 text-fcit-400 group-hover/btn:text-white transition-colors" />
           </div>
         </button>
        </div>
    </motion.div>
  )
}

export default function Programs() {
  const [showCompare, setShowCompare] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openProgramModal = (p) => {
    setSelectedProgram(p)
    setIsModalOpen(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-[#f8fbff] text-slate-700 pt-24 font-sans"
    >
      {/* Program Details Modal */}
      <ProgramModal 
        program={selectedProgram}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Light Theme Standardized Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }} 
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-[10%] w-[50%] h-[50%] bg-fcit-300/20 rounded-full blur-[100px]"
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], x: [0, -50, 0] }} 
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 right-[10%] w-[40%] h-[40%] bg-fcit-100/40 rounded-full blur-[80px]"
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
               text="Academic Programs"
               highlightFrom={1}
               className="text-5xl sm:text-6xl font-black mb-6 text-slate-900 tracking-tight text-glow"
            />
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed mb-8">
              FCIT offers a comprehensive range of undergraduate and postgraduate degrees across two distinct schools of excellence: <strong className="font-bold text-fcit-400">SCA & SCS</strong>.
            </p>
            <button 
              onClick={() => setShowCompare(true)}
              className="group relative inline-flex items-center gap-3 bg-fcit-400 text-white px-8 py-4 rounded-xl font-black text-sm uppercase tracking-widest shadow-lg shadow-fcit-400/20 hover:bg-fcit-300 transition-all duration-300"
            >
              <Layers className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Compare Specializations
            </button>
          </motion.div>
        </div>
      </section>

      {/* Comparison Modal */}
      <AnimatePresence>
        {showCompare && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[101] bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-[3rem] shadow-2xl border border-white/50"
            >
              <div className="sticky top-0 bg-white border-b border-slate-100 p-8 flex justify-between items-center z-10">
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">Program Comparison</h2>
                <button onClick={() => setShowCompare(false)} className="w-10 h-10 bg-slate-50 hover:bg-fcit-100 flex items-center justify-center rounded-full text-slate-500 hover:text-fcit-400 transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-8 overflow-x-auto">
                <table className="w-full min-w-[700px] text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="p-6 border-b border-slate-200 text-slate-900 font-extrabold uppercase text-xs tracking-widest">Specialization</th>
                      <th className="p-6 border-b border-slate-200 text-slate-900 font-extrabold uppercase text-xs tracking-widest">Key Focus Areas</th>
                      <th className="p-6 border-b border-slate-200 text-slate-900 font-extrabold uppercase text-xs tracking-widest">Career Paths</th>
                      <th className="p-6 border-b border-slate-200 text-slate-900 font-extrabold uppercase text-xs tracking-widest">Math Base</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: 'General', focus: 'Core software eng, databases, networks', career: 'Software Engineer, Architect', base: 'Standard' },
                      { name: 'AI & Data Analytics', focus: 'Generative AI, NLP, Predictive Modeling', career: 'AI Engineer, Analyst', base: 'Strong' },
                      { name: 'Data Science', focus: 'Big Data tech, Advanced Stats, Mining', career: 'Data Scientist, ML Lead', base: 'High' },
                      { name: 'Cyber Security', focus: 'Cryptography, Ethical Hacking, Forensics', career: 'Security Analyst, Pen Tester', base: 'Standard' },
                    ].map((row, i) => (
                      <tr key={i} className="group hover:bg-fcit-100/20 transition-colors">
                        <td className="p-6 border-b border-slate-100 font-black text-fcit-400">{row.name}</td>
                        <td className="p-6 border-b border-slate-100 text-slate-700 font-medium">{row.focus}</td>
                        <td className="p-6 border-b border-slate-100 text-slate-700 font-medium">{row.career}</td>
                        <td className="p-6 border-b border-slate-100">
                          <span className="px-3 py-1 rounded-full bg-slate-100 text-[10px] font-black uppercase text-slate-500">{row.base}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-8 bg-slate-50 border-t border-slate-100 text-xs text-slate-500 font-medium tracking-wide">
                Comparisons shown above are high-level generalizations to help you choose the right path.
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SCA Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-fcit-100/50 border border-fcit-200 text-fcit-400 font-black mb-6 shadow-sm tracking-widest uppercase text-xs">
              SCA
            </div>
            <TextReveal
              text="School of Computer Application"
              highlightFrom={2}
              className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight"
            />
            <div className="w-24 h-1.5 bg-gradient-to-r from-fcit-400 to-fcit-300 mx-auto rounded-full mb-8" />
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Explore undergraduate and postgraduate programs designed to build your expertise in computer applications, programming, and software engineering.
            </p>
          </motion.div>
 
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {scaPrograms.map((prog, i) => (
              <ProgramCard key={i} prog={prog} i={i} onOpen={() => openProgramModal(prog)} />
            ))}
          </div>
        </div>
      </section>

      {/* SCS Section */}
      <section className="py-24 bg-[#f8fbff] relative border-t border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-fcit-100),transparent_50%)] pointer-events-none opacity-40 shrink-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-fcit-200 text-fcit-400 font-black mb-6 shadow-sm tracking-widest uppercase text-xs">
              SCS
            </div>
            <TextReveal
              text="School of Computer Science"
              highlightFrom={2}
              className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight"
            />
            <div className="w-24 h-1.5 bg-gradient-to-r from-fcit-300 to-fcit-400 mx-auto rounded-full mb-8" />
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Explore advanced master's programs that develop deep expertise in AI, Data Science, Cyber Security, and cutting-edge theoretical computing research.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {scsPrograms.map((prog, i) => (
              <ProgramCard key={i} prog={prog} i={i} onOpen={() => openProgramModal(prog)} />
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Experience Phase */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Abstract Background Accents */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_top_right,var(--color-fcit-100),transparent_70%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-surface-100 border border-slate-200 text-slate-400 font-bold mb-6 shadow-sm tracking-widest uppercase text-xs">
              Experience
            </div>
            <TextReveal
              text="Curriculum Journey"
              highlightFrom={1}
              className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight"
            />
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Experience a visual roadmap of your academic evolution. From foundational basics to advanced industry research.
            </p>
          </motion.div>

          <CurriculumJourney title="BCA" data={bcaJourney} />
          
          <AnimatedDivider />
          
          <CurriculumJourney title="MCA" data={mcaJourney} />
        </div>
      </section>
    </motion.div>
  )
}
