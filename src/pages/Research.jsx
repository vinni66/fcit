import { motion } from 'framer-motion'
import { BookOpen, ExternalLink, FileText, Calendar, Quote, TrendingUp, Award, Layers } from 'lucide-react'
import TextReveal from '../components/TextReveal'
import FadeIn from '../components/FadeIn'
import AnimatedDivider from '../components/AnimatedDivider'

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
            <TextReveal
               text="Research Publications"
               highlightFrom={1}
               className="text-5xl sm:text-6xl font-black mb-6 text-slate-900 tracking-tight"
            />
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              Explore the cutting-edge research contributions and groundbreaking findings from our esteemed faculty and brilliant scholars.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Publications Masonry Grid */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {publications.map((pub, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true, amount: 0.1 }}
                className="break-inside-avoid group"
              >
                <div className="bg-[#f8fbff] rounded-[2.5rem] border border-fcit-100 p-8 shadow-sm group-hover:shadow-[0_25px_60px_-15px_rgba(99,103,255,0.2)] group-hover:border-fcit-200 group-hover:bg-white transition-all duration-500 relative overflow-hidden">
                   {/* Background Decorative Element */}
                   <div className="absolute -top-10 -right-10 w-24 h-24 bg-fcit-100/30 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                   
                   <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                         <div className="flex gap-2">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-fcit-100 rounded-lg text-[10px] font-black text-fcit-400 uppercase tracking-widest shadow-sm">
                               <Calendar className="w-3 h-3" /> {pub.year}
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 border border-green-100 rounded-lg text-[10px] font-black text-green-600 uppercase tracking-widest shadow-sm">
                               <TrendingUp className="w-3 h-3" /> {pub.citations} Cit
                            </span>
                         </div>
                         <motion.div 
                           whileHover={{ rotate: 15 }}
                           className="w-10 h-10 bg-fcit-100/50 rounded-xl flex items-center justify-center text-fcit-400 border border-fcit-200"
                         >
                            <FileText className="w-5 h-5" />
                         </motion.div>
                      </div>

                      <h3 className="text-xl font-black text-slate-900 mb-6 leading-tight group-hover:text-fcit-400 transition-colors uppercase tracking-tight">
                         {pub.title}
                      </h3>

                      <div className="space-y-4 mb-8">
                         <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/60 border border-fcit-50 group-hover:border-fcit-100 transition-all">
                            <Award className="w-5 h-5 text-fcit-300 flex-shrink-0 mt-1" />
                            <div>
                               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Lead Authors</p>
                               <p className="text-slate-700 font-bold text-sm leading-relaxed">{pub.authors}</p>
                            </div>
                         </div>
                         <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/60 border border-fcit-50 group-hover:border-fcit-100 transition-all">
                            <Layers className="w-5 h-5 text-fcit-300 flex-shrink-0 mt-1" />
                            <div>
                               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Journal / Conference</p>
                               <p className="text-slate-700 font-bold text-sm leading-relaxed italic">{pub.journal}</p>
                            </div>
                         </div>
                      </div>

                      <div className="flex justify-between items-center pt-6 border-t border-fcit-50">
                         <div className="flex -space-x-2">
                             {[0,1,2].map(x => (
                               <div key={x} className="w-8 h-8 rounded-full bg-fcit-100 border-2 border-white flex items-center justify-center text-[10px] font-black text-fcit-400">
                                 {pub.authors.split(',')[x]?.trim()[0] || 'S'}
                               </div>
                             ))}
                         </div>
                         <motion.a
                           whileHover={{ scale: 1.1, x: 5 }}
                           href="#"
                           className="flex items-center gap-2 text-fcit-400 font-black text-xs uppercase tracking-widest group/link"
                         >
                            View Paper <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                         </motion.a>
                      </div>
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
