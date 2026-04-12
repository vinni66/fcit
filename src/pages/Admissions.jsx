import { motion } from 'framer-motion'
import { School, ArrowRight, Calendar, FileText, CheckCircle, UploadCloud, UserCheck, CreditCard } from 'lucide-react'
import TextReveal from '../components/TextReveal'
import FadeIn from '../components/FadeIn'
import AnimatedDivider from '../components/AnimatedDivider'

const eligibility = [
  { program: 'BCA', criteria: '10+2 with Mathematics/Computer Science, min 50% aggregate' },
  { program: 'MCA', criteria: "Bachelor's degree with Mathematics, min 55% aggregate" },
  { program: 'B.Sc IT', criteria: '10+2 from recognized board, min 50% aggregate' },
  { program: 'M.Sc IT', criteria: 'B.Sc IT / BCA / equivalent, min 55% aggregate' },
]

const steps = [
  { step: 1, icon: FileText, title: 'Online Registration', desc: 'Fill the online application form on our portal and create your applicant ID.' },
  { step: 2, icon: UploadCloud, title: 'Document Submission', desc: 'Securely upload your academic transcripts, certificates, and identity documents.' },
  { step: 3, icon: CheckCircle, title: 'Entrance Test / Merit', desc: 'Appear for the scheduled entrance test or qualify based on your merit scores.' },
  { step: 4, icon: UserCheck, title: 'Counseling & Seat Allotment', desc: 'Attend your personalized counseling session and receive your seat assignment.' },
  { step: 5, icon: CreditCard, title: 'Fee Payment & Enrollment', desc: 'Secure your place by completing the fee payment and finalize enrollment.' },
]

export default function Admissions() {
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
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[20%] left-[20%] w-[50%] h-[50%] bg-fcit-200/20 rounded-full blur-[100px]"
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }} 
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 right-[20%] w-[40%] h-[40%] bg-fcit-100/40 rounded-full blur-[80px]"
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
              <School className="w-10 h-10 text-white" />
            </motion.div>
            <TextReveal
              text="Admissions 2025-26"
              highlightFrom={1}
              className="text-5xl sm:text-6xl font-black mb-6 text-slate-900 tracking-tight"
            />
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              Begin your journey with <strong className="font-bold text-fcit-400">FCIT</strong>. Explore eligibility criteria, our streamlined admission process, and apply today to shape your career in technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <TextReveal
              text="Eligibility Criteria"
              highlightFrom={1}
              className="text-4xl md:text-5xl font-black text-slate-900 mb-6"
            />
            <div className="w-24 h-1.5 bg-gradient-to-r from-fcit-400 to-fcit-200 mx-auto rounded-full mb-8" />
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {eligibility.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                style={{ willChange: 'transform, opacity' }}
                className="group bg-[#f8fbff] rounded-[2rem] border border-fcit-100 p-8 shadow-sm hover:shadow-xl hover:border-fcit-200 transition-all duration-300 transform-gpu"
              >
                <div className="flex items-center gap-5 mb-5">
                  <div className="w-16 h-16 bg-gradient-to-br from-fcit-400 to-fcit-300 rounded-2xl flex items-center justify-center shadow-md shadow-fcit-400/20 group-hover:rotate-3 transition-transform">
                    <span className="text-white font-black text-lg">{e.program}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-fcit-400 transition-colors">{e.program} Program</h3>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-fcit-100/50">
                  <p className="text-slate-600 font-medium leading-relaxed">{e.criteria}</p>
                </div>
              </motion.div>
            ))}
          </div>
          </div>
      </section>

      {/* Admission Process - Vertical Timeline Layout */}
      <section className="py-24 bg-[#f8fbff] relative border-t border-fcit-100/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <TextReveal
              text="Admission Process"
              highlightFrom={1}
              className="text-4xl md:text-5xl font-black text-slate-900 mb-6"
            />
            <div className="w-24 h-1.5 bg-gradient-to-r from-fcit-300 to-fcit-400 mx-auto rounded-full mb-8" />
            <p className="text-xl text-slate-600 font-light">Follow these simple steps to complete your enrollment.</p>
          </motion.div>
          
          <div className="relative border-l-2 border-fcit-200 ml-6 md:ml-12 pl-8 md:pl-16 space-y-12">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true, margin: "-50px", amount: 0.1 }}
                style={{ willChange: 'transform, opacity' }}
                className="relative group block transform-gpu"
              >
                {/* Timeline Dot/Icon */}
                <div className="absolute -left-[45px] md:-left-[77px] top-1/2 -translate-y-1/2 w-14 h-14 bg-gradient-to-br from-fcit-400 to-fcit-300 rounded-full flex items-center justify-center border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-300 z-10">
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                
                <div className="bg-white rounded-[2rem] border border-fcit-100 p-8 shadow-sm group-hover:shadow-[0_20px_40px_-15px_rgba(99,103,255,0.15)] group-hover:border-fcit-200 transition-all duration-300 transform group-hover:-translate-y-1">
                  <div className="flex items-start gap-6">
                    <span className="text-6xl font-black text-fcit-100/40 group-hover:text-fcit-200/50 transition-colors pointer-events-none select-none -mt-4">
                      0{s.step}
                    </span>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2 truncate group-hover:text-fcit-400 transition-colors">{s.title}</h3>
                      <p className="text-slate-600 font-medium leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          </div>
      </section>

      {/* CTA Box */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group bg-gradient-to-r from-fcit-400 to-fcit-300 rounded-[3rem] p-12 md:p-16 text-white shadow-[0_20px_50px_-15px_rgba(99,103,255,0.4)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.3),transparent_50%)] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Ready to Apply?</h2>
              <p className="text-fcit-100/90 text-lg md:text-xl font-medium mb-10 max-w-2xl text-center leading-relaxed">
                Applications for the upcoming academic session are now open. Secure your future in technology today.
              </p>
              <a
                href="/contact-us"
                className="inline-flex items-center gap-3 bg-white text-fcit-400 px-10 py-5 rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg group-hover:bg-slate-50"
              >
                Contact Admissions <ArrowRight className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
