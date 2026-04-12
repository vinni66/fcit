import { motion, AnimatePresence } from 'framer-motion'
import { X, Clock, CheckCircle, GraduationCap, Briefcase, Layers, Download, ArrowRight, BookOpen, Monitor } from 'lucide-react'

export default function ProgramModal({ program, isOpen, onClose }) {
  if (!program) return null

  // Mock extended data if not present
  const extendedData = {
    careerPaths: ['Software Architect', 'Data Scientist', 'System Analyst', 'Full Stack Developer', 'Cloud Engineer'],
    curriculumHighlights: [
      { sem: 'Phase 1', subjects: ['Fundamentals of IT', 'Programming in C', 'Web Technologies', 'Mathematics'] },
      { sem: 'Phase 2', subjects: ['Data Structures', 'Database Systems', 'Operating Systems', 'Software Engineering'] },
      { sem: 'Phase 3', subjects: ['Advanced JAVA', 'Cloud Computing', 'Machine Learning', 'Big Data Analytics'] }
    ],
    prerequisites: ['Basic Mathematics knowledge', 'Analytical thinking', 'Passion for technology']
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
            className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-white/50"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-slate-500 hover:text-fcit-400 hover:bg-white shadow-lg transition-all"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Sidebar / Overview */}
            <div className={`w-full md:w-[380px] bg-gradient-to-br ${program.gradient || 'from-fcit-400 to-fcit-300'} p-10 flex flex-col text-white relative overflow-hidden flex-shrink-0`}>
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />
              
              {/* Icon Section */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-8 relative z-10 shadow-xl"
              >
                {program.icon ? <program.icon className="w-10 h-10" /> : <Monitor className="w-10 h-10" />}
              </motion.div>

              <div className="relative z-10">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                  {program.category || 'SCA'} • Academic Program
                </div>
                <h2 className="text-3xl font-black mb-6 leading-tight tracking-tight">{program.title}</h2>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-black text-white/60 tracking-widest">Duration</p>
                      <p className="font-bold">{program.duration || '3 Years'}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-black text-white/60 tracking-widest">Eligibility</p>
                      <p className="font-bold text-sm leading-snug">{program.eligibility || '10+2 with Mathematics'}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/20">
                  <button className="w-full flex items-center justify-center gap-3 bg-white text-fcit-400 py-4 rounded-2xl font-black text-sm hover:scale-105 transition-transform shadow-xl">
                    <Download className="w-4 h-4" /> Download Prospectus
                  </button>
                </div>
              </div>

              {/* Decorative background glow */}
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-[100px]" />
            </div>

            {/* Main Content Area */}
            <div className="flex-1 overflow-y-auto p-8 md:p-14 bg-white custom-scrollbar focus:outline-none">
              <div className="max-w-3xl mx-auto space-y-16">
                
                {/* Introduction */}
                <section>
                  <div className="flex items-center gap-4 mb-8">
                     <div className="w-12 h-12 rounded-2xl bg-fcit-100 flex items-center justify-center text-fcit-400 shadow-sm">
                        <BookOpen className="w-6 h-6" />
                     </div>
                     <h3 className="text-3xl font-black text-slate-900 tracking-tight">Program Overview</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-lg font-light">
                    This program is meticulously designed to provide a strong theoretical foundation combined with intensive practical training. It focuses on emerging technologies and industry standards to ensure students are ready for the global job market.
                  </p>
                </section>

                {/* Curriculum Highlights */}
                <section>
                   <div className="flex items-center gap-4 mb-8">
                     <div className="w-12 h-12 rounded-2xl bg-fcit-100 flex items-center justify-center text-fcit-400 shadow-sm">
                        <Layers className="w-6 h-6" />
                     </div>
                     <h3 className="text-3xl font-black text-slate-900 tracking-tight">Curriculum Structure</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    {(program.detailedCurriculum || extendedData.curriculumHighlights).map((item, i) => (
                      <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-6 p-6 rounded-[2rem] bg-slate-50 border border-slate-100 group hover:border-fcit-200 transition-all">
                        <div className="flex-shrink-0 w-24 text-center">
                          <span className="text-xs font-black uppercase text-fcit-400 tracking-widest">{item.sem}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {item.subjects.map((sub, j) => (
                            <span key={j} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 shadow-sm group-hover:border-fcit-100 transition-colors">
                              {sub}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Career Prospects */}
                <section>
                   <div className="flex items-center gap-4 mb-8">
                     <div className="w-12 h-12 rounded-2xl bg-fcit-100 flex items-center justify-center text-fcit-400 shadow-sm">
                        <Briefcase className="w-6 h-6" />
                     </div>
                     <h3 className="text-3xl font-black text-slate-900 tracking-tight">Career Opportunities</h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {extendedData.careerPaths.map((role, i) => (
                      <div key={i} className="px-4 py-3 rounded-xl border border-fcit-100 bg-fcit-100/30 text-fcit-400 font-black text-[11px] uppercase tracking-wider flex items-center justify-center text-center shadow-sm">
                        {role}
                      </div>
                    ))}
                  </div>
                </section>

                {/* Footer CTA */}
                <div className="pt-16 border-t border-slate-100">
                   <div className="bg-[#f8fbff] p-8 rounded-[2.5rem] border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
                      <div>
                        <h4 className="text-xl font-black text-slate-900 mb-1">Admissions are Open</h4>
                        <p className="text-slate-500 text-sm">Secure your seat for the next academic batch.</p>
                      </div>
                      <a href="/admissions" className="bg-fcit-400 text-white px-8 py-3 rounded-full font-black text-sm hover:bg-fcit-300 transition-all flex items-center gap-2 shadow-lg shadow-fcit-400/20">
                        Apply Now <ArrowRight className="w-4 h-4" />
                      </a>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        
          <style dangerouslySetInnerHTML={{__html: `
            .custom-scrollbar::-webkit-scrollbar {
              width: 6px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: transparent;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: #e2e8f0;
              border-radius: 10px;
            }
            .custom-scrollbar:hover::-webkit-scrollbar-thumb {
              background: #cbd5e1;
            }
          `}} />
        </div>
      )}
    </AnimatePresence>
  )
}
