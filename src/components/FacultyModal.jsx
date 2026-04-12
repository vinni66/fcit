import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, BookOpen, Award, GraduationCap, MapPin, Globe, Linkedin, Github, ExternalLink } from 'lucide-react'

export default function FacultyModal({ faculty, isOpen, onClose }) {
  if (!faculty) return null

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
            className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-white/50"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-slate-500 hover:text-fcit-400 hover:bg-white shadow-lg transition-all"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Sidebar / Profile Header */}
            <div className={`w-full md:w-[350px] bg-gradient-to-br ${faculty.gradient} p-10 flex flex-col items-center text-center text-white relative overflow-hidden flex-shrink-0`}>
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />
              
              {/* Initials or Photo Avatar */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="w-40 h-40 rounded-[2.5rem] bg-white/20 backdrop-blur-xl border-4 border-white/30 flex items-center justify-center mb-8 relative z-10 shadow-2xl overflow-hidden"
              >
                {faculty.photoUrl ? (
                  <img 
                    src={faculty.photoUrl} 
                    alt={faculty.name} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-6xl font-black">{faculty.initials}</span>
                )}
              </motion.div>

              <div className="relative z-10 w-full">
                <h2 className="text-3xl font-black mb-2 tracking-tight">{faculty.name}</h2>
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-xs font-black uppercase tracking-[0.2em] mb-4">
                  {faculty.designation}
                </div>
                <p className="text-white/80 font-medium text-sm mb-8">{faculty.specialization}</p>
                
                <div className="flex flex-col gap-3 w-full">
                  <a href={`mailto:${faculty.email || 'info@fcit.edu'}`} className="flex items-center justify-center gap-3 bg-white text-fcit-400 py-4 rounded-2xl font-black text-sm hover:scale-105 transition-transform shadow-xl">
                    <Mail className="w-4 h-4" /> Send Email
                  </a>
                  <div className="flex justify-center gap-4 mt-4 text-white/60">
                     <Linkedin className="w-6 h-6 hover:text-white cursor-pointer transition-colors" />
                     <Globe className="w-6 h-6 hover:text-white cursor-pointer transition-colors" />
                     <Github className="w-6 h-6 hover:text-white cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>

              {/* Decorative background glow */}
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-[80px]" />
            </div>

            {/* Main Content Area */}
            <div className="flex-1 overflow-y-auto p-8 md:p-14 bg-white custom-scrollbar">
              <div className="max-w-2xl mx-auto space-y-12">
                
                {/* Biography */}
                <section>
                  <div className="flex items-center gap-4 mb-6">
                     <div className="w-10 h-10 rounded-xl bg-fcit-100 flex items-center justify-center text-fcit-400">
                        <GraduationCap className="w-6 h-6 " />
                     </div>
                     <h3 className="text-2xl font-black text-slate-900 tracking-tight">Biography</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-lg font-light">
                    {faculty.bio || `${faculty.name} is a distinguished faculty member at the Faculty of Computer Applications and Information Technology (FCIT). With extensive experience in ${faculty.specialization}, they have contributed significantly to both teaching and institutional development.`}
                  </p>
                </section>

                {/* Academic Profile */}
                <section>
                   <div className="flex items-center gap-4 mb-6">
                     <div className="w-10 h-10 rounded-xl bg-fcit-100 flex items-center justify-center text-fcit-400">
                        <BookOpen className="w-6 h-6 " />
                     </div>
                     <h3 className="text-2xl font-black text-slate-900 tracking-tight">Academic Profile</h3>
                  </div>
                  <div className="space-y-4">
                    {(faculty.education || ['Ph.D. in Computer Science', 'M.Tech / MCA with Honors', 'Active Researcher']).map((item, i) => (
                      <div key={i} className="flex items-start gap-4 p-5 rounded-3xl bg-slate-50 border border-slate-100 group hover:border-fcit-200 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-fcit-400 mt-2.5 shadow-[0_0_8px_rgba(114,28,36,0.5)]" />
                        <span className="text-lg text-slate-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Research & Publications */}
                <section>
                   <div className="flex items-center gap-4 mb-6">
                     <div className="w-10 h-10 rounded-xl bg-fcit-100 flex items-center justify-center text-fcit-400">
                        <Award className="w-6 h-6 " />
                     </div>
                     <h3 className="text-2xl font-black text-slate-900 tracking-tight">Research & Awards</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {['20+ Publications', 'Multiple Patents', 'Best Mentor Award', 'Grant Recipient'].map((award, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 rounded-2xl border border-fcit-100 bg-fcit-100/20 text-fcit-400 font-bold text-sm">
                        <Award className="w-4 h-4" />
                        {award}
                      </div>
                    ))}
                  </div>
                </section>

                {/* Footer Tag */}
                <div className="pt-10 border-t border-slate-50 flex items-center justify-between opacity-50">
                  <span className="text-xs font-black uppercase tracking-widest text-slate-400">FCIT • GM UNIVERSITY</span>
                  <ExternalLink className="w-4 h-4 text-slate-400" />
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
