import { motion } from 'framer-motion'
import { Monitor, Code, Brain, Shield, Database, BarChart3, Cpu, ArrowRight, Clock, CheckCircle } from 'lucide-react'

const scaPrograms = [
  {
    title: 'BCA – General',
    duration: '3 Years (Full-time)',
    eligibility: '10+2 in any stream with Mathematics',
    icon: Monitor,
    gradient: 'from-fcit-400 to-fcit-300',
    highlights: ['Core Programming', 'Software Engineering', 'Database Management', 'Web Technologies'],
  },
  {
    title: 'BCA – AI and Data Analytics',
    duration: '3 Years (Full-time)',
    eligibility: '10+2 in any stream with Mathematics',
    icon: Brain,
    gradient: 'from-fcit-300 to-fcit-200',
    highlights: ['Machine Learning', 'Deep Learning', 'Data Visualization', 'Predictive Analytics'],
  },
  {
    title: 'BCA – Data Science',
    duration: '3 Years (Full-time)',
    eligibility: '10+2 in any stream with Mathematics',
    icon: BarChart3,
    gradient: 'from-fcit-200 to-fcit-100',
    highlights: ['Big Data', 'Statistical Modeling', 'Python & R', 'Data Mining'],
  },
  {
    title: 'BCA – Cyber Security',
    duration: '3 Years (Full-time)',
    eligibility: '10+2 in any stream with Mathematics',
    icon: Shield,
    gradient: 'from-fcit-400 via-fcit-300 to-fcit-200',
    highlights: ['Network Security', 'Ethical Hacking', 'Cryptography', 'Digital Forensics'],
  },
  {
    title: 'MCA – General',
    duration: '2 Years (Full-time)',
    eligibility: "Bachelor's degree with Mathematics",
    icon: Code,
    gradient: 'from-fcit-300 to-fcit-400',
    highlights: ['Advanced Programming', 'Cloud Computing', 'System Design', 'Project Management'],
  },
  {
    title: 'MCA – AI',
    duration: '2 Years (Full-time)',
    eligibility: "Bachelor's degree with Mathematics",
    icon: Brain,
    gradient: 'from-fcit-200 to-fcit-300',
    highlights: ['Artificial Intelligence', 'Neural Networks', 'NLP', 'Computer Vision'],
  },
  {
    title: 'MCA – Data Science',
    duration: '2 Years (Full-time)',
    eligibility: "Bachelor's degree with Mathematics",
    icon: Database,
    gradient: 'from-fcit-400 to-fcit-300',
    highlights: ['Advanced Analytics', 'Machine Learning', 'Big Data Technologies', 'Data Engineering'],
  },
  {
    title: 'MCA – Cyber Security',
    duration: '2 Years (Full-time)',
    eligibility: "Bachelor's degree with Mathematics",
    icon: Shield,
    gradient: 'from-fcit-300 to-fcit-100',
    highlights: ['Advanced Cryptography', 'Penetration Testing', 'Security Architecture', 'Incident Response'],
  },
]

const scsPrograms = [
  {
    title: 'MSc – AI and Data Analytics',
    duration: '2 Years (Full-time)',
    eligibility: 'B.Sc/BCA Relevant Fields or B.Tech with Maths',
    icon: Cpu,
    gradient: 'from-fcit-400 to-fcit-300',
    highlights: ['Advanced AI', 'Data Analytics', 'Research Methodology', 'Applied ML'],
  },
  {
    title: 'MSc – Data Science',
    duration: '2 Years (Full-time)',
    eligibility: 'B.Sc/BCA Relevant Fields or B.Tech with Maths',
    icon: Database,
    gradient: 'from-fcit-300 to-fcit-200',
    highlights: ['Statistical Learning', 'Data Warehousing', 'Visualization', 'Research Methods'],
  },
  {
    title: 'MSc – Cyber Security',
    duration: '2 Years (Full-time)',
    eligibility: 'B.Sc/BCA Relevant Fields or B.Tech with Maths',
    icon: Shield,
    gradient: 'from-fcit-200 to-fcit-100',
    highlights: ['Advanced Security', 'Malware Analysis', 'Security Auditing', 'Cyber Law'],
  },
]

function ProgramCard({ prog, i }) {
  return (
    <motion.div
       initial={{ opacity: 0, y: 30 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ delay: i * 0.1, duration: 0.5 }}
       viewport={{ once: true }}
       whileHover={{ y: -10 }}
       className="group relative bg-white rounded-[2.5rem] p-1 shadow-sm hover:shadow-[0_20px_60px_-15px_rgba(99,103,255,0.2)] transition-all duration-300 hover:border-fcit-200"
     >
       <div className={`absolute inset-0 bg-gradient-to-br ${prog.gradient} rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10`} />
       <div className={`absolute inset-0 bg-gradient-to-br ${prog.gradient} rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />
       
       <div className="h-full bg-white rounded-[2.35rem] p-8 relative overflow-hidden z-10 border border-slate-100 group-hover:border-transparent transition-colors flex flex-col">
         <div className="absolute top-0 right-0 w-40 h-40 bg-fcit-100/20 rounded-bl-[100px] -z-10 group-hover:bg-fcit-100/50 transition-colors"></div>
         
         <div className={`w-16 h-16 rounded-[1.5rem] bg-gradient-to-br ${prog.gradient} flex items-center justify-center mb-6 shadow-lg shadow-fcit-400/20 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
           <prog.icon className="w-8 h-8 text-white" />
         </div>
         <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-fcit-400 transition-colors">{prog.title}</h3>
         
         <div className="inline-flex items-center self-start px-4 py-2 rounded-full bg-slate-50 text-slate-600 text-sm font-bold border border-slate-100 mb-6 group-hover:border-fcit-200/50 transition-colors">
           <Clock className="w-4 h-4 mr-2 text-fcit-300" />
           {prog.duration}
         </div>
         
         <p className="text-slate-500 text-sm mb-8 leading-relaxed font-medium bg-fcit-100/30 p-4 rounded-2xl border border-fcit-100/50">
           <span className="font-bold text-fcit-400 block mb-1">Eligibility:</span> {prog.eligibility}
         </p>
         
         <div className="space-y-3 mb-8 flex-grow">
           {prog.highlights.map((h, j) => (
             <div key={j} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
               <CheckCircle className="w-5 h-5 text-fcit-300 flex-shrink-0" />
               <span className="pt-0.5">{h}</span>
             </div>
           ))}
         </div>

         <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-fcit-400 font-bold group-hover:text-fcit-300 transition-colors cursor-pointer mt-auto">
           <span>Explore Curriculum</span>
           <div className="w-12 h-12 rounded-full bg-fcit-100/30 flex items-center justify-center group-hover:bg-fcit-200/50 transition-colors">
             <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
           </div>
         </div>
       </div>
    </motion.div>
  )
}

export default function Programs() {
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
            <h1 className="text-5xl sm:text-6xl font-black mb-6 text-slate-900 tracking-tight">
              Academic <span className="bg-gradient-to-r from-fcit-400 to-fcit-300 bg-clip-text text-transparent drop-shadow-sm">Programs</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              FCIT offers a comprehensive range of undergraduate and postgraduate degrees across two distinct schools of excellence: <strong className="font-bold text-fcit-400">SCA & SCS</strong>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SCA Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-fcit-100/50 border border-fcit-200 text-fcit-400 font-bold mb-6 shadow-sm tracking-widest uppercase text-sm">
              SCA
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              School of <span className="bg-gradient-to-r from-fcit-400 to-fcit-300 bg-clip-text text-transparent">Computer Application</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-fcit-400 to-fcit-200 mx-auto rounded-full mb-8" />
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Explore undergraduate and postgraduate programs designed to build your expertise in computer applications, programming, and software engineering.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {scaPrograms.map((prog, i) => (
              <ProgramCard key={i} prog={prog} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* SCS Section */}
      <section className="py-24 bg-[#f8fbff] relative border-t border-fcit-100/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-fcit-100),transparent_50%)] pointer-events-none opacity-40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-fcit-200 text-fcit-400 font-bold mb-6 shadow-sm tracking-widest uppercase text-sm">
              SCS
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              School of <span className="bg-gradient-to-r from-fcit-300 to-fcit-400 bg-clip-text text-transparent">Computer Science</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-fcit-300 to-fcit-400 mx-auto rounded-full mb-8" />
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Explore advanced master's programs that develop deep expertise in AI, Data Science, Cyber Security, and cutting-edge theoretical computing research.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {scsPrograms.map((prog, i) => (
              <ProgramCard key={i} prog={prog} i={i} />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
