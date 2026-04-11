import { motion } from 'framer-motion'
import { BookOpen, ExternalLink, FileText, Calendar, Quote, TrendingUp } from 'lucide-react'

const publications = [
  { title: 'Deep Learning Approaches for Natural Language Processing in Low-Resource Languages', authors: 'Dr. Rajesh Kumar, Dr. Priya Sharma', journal: 'IEEE Trans. on Neural Networks', year: 2025, citations: 28 },
  { title: 'A Hybrid Framework for Cloud Security Using Blockchain and AI', authors: 'Dr. Suresh Babu, Prof. Vikram Joshi', journal: 'Journal of Cloud Computing', year: 2025, citations: 15 },
  { title: 'Optimizing Big Data Analytics for Real-Time Healthcare Applications', authors: 'Dr. Priya Sharma, Dr. Meena Patil', journal: 'Springer Healthcare Informatics', year: 2024, citations: 42 },
  { title: 'Federated Learning for Privacy-Preserving IoT Systems', authors: 'Dr. Rajesh Kumar, Prof. Vikram Joshi', journal: 'ACM Computing Surveys', year: 2024, citations: 35 },
  { title: 'Automated Software Testing Using Reinforcement Learning', authors: 'Prof. Sneha Rao, Dr. Meena Patil', journal: 'IEEE Software Engineering', year: 2024, citations: 19 },
  { title: 'Quantum Computing Applications in Cryptography', authors: 'Dr. Suresh Babu', journal: 'International Journal of Quantum Information', year: 2023, citations: 52 },
]

export default function Research() {
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
            animate={{ scale: [1, 1.1, 1], x: [0, 60, 0] }} 
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-[10%] w-[40%] h-[60%] bg-fcit-300/20 rounded-full blur-[100px]"
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], y: [0, -30, 0] }} 
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-[20%] w-[30%] h-[40%] bg-fcit-100/40 rounded-full blur-[80px]"
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
              <BookOpen className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-5xl sm:text-6xl font-black mb-6 text-slate-900 tracking-tight">
              Research <span className="bg-gradient-to-r from-fcit-400 to-fcit-300 bg-clip-text text-transparent drop-shadow-sm">Publications</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              Explore the cutting-edge research contributions and groundbreaking findings from our esteemed faculty and brilliant scholars.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Publications Timeline */}
      <section className="py-24 bg-white relative border-t border-fcit-100/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative border-l-2 border-fcit-200 ml-6 md:ml-12 pl-8 md:pl-16 space-y-12">
            {publications.map((pub, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative group block"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[43px] md:-left-[75px] top-6 w-8 h-8 rounded-full bg-white border-4 border-fcit-400 shadow-xl group-hover:scale-125 group-hover:bg-fcit-400 transition-all duration-300 z-10" />
                
                <div className="bg-[#f8fbff] rounded-[2rem] border border-fcit-100 p-8 shadow-sm group-hover:shadow-[0_20px_40px_-15px_rgba(99,103,255,0.15)] group-hover:border-fcit-200 group-hover:bg-white transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white border border-fcit-100 rounded-full text-sm font-bold text-fcit-500 shadow-sm">
                          <Calendar className="w-4 h-4" /> {pub.year}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-green-50 text-green-600 rounded-full text-sm font-bold shadow-sm">
                          <TrendingUp className="w-4 h-4" /> {pub.citations} Citations
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-fcit-400 transition-colors">
                        {pub.title}
                      </h3>
                      
                      <div className="flex items-center gap-4 text-slate-600 font-medium bg-white p-4 rounded-xl border border-fcit-50 w-max max-w-full">
                        <Quote className="w-5 h-5 text-fcit-300 flex-shrink-0" />
                        <span className="truncate">{pub.authors}</span>
                      </div>
                      
                      <div className="mt-6 font-semibold text-slate-500 flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-fcit-300" />
                        Published in: <span className="text-slate-700">{pub.journal}</span>
                      </div>
                    </div>

                    <motion.a
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      href="#"
                      className="w-14 h-14 bg-fcit-100/50 rounded-2xl flex items-center justify-center hover:bg-fcit-200/60 transition-colors flex-shrink-0 border border-fcit-200 mt-4 md:mt-0 shadow-md hover:shadow-xl"
                    >
                      <ExternalLink className="w-6 h-6 text-fcit-400" />
                    </motion.a>
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
