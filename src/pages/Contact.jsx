import { motion } from 'framer-motion'
import { Mail, Phone, User, ArrowRight, Clock, GraduationCap, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

const contacts = [
  {
    icon: Mail,
    title: 'Department Office',
    description: 'General inquiries, student services, and administrative support.',
    link: 'mailto:office@fcit.edu',
    linkText: 'office@fcit.edu',
    gradient: 'from-fcit-400 to-fcit-300',
  },
  {
    icon: Phone,
    title: 'Phone Number',
    description: 'Direct telephone line for immediate assistance.',
    link: 'tel:+911234567890',
    linkText: '+91-123-456-7890',
    gradient: 'from-fcit-300 to-fcit-200',
    hours: 'Mon-Fri, 9:00 AM - 5:00 PM',
  },
  {
    icon: User,
    title: 'Dean / Head of Faculty',
    description: 'Academic leadership and strategic partnerships.',
    link: 'mailto:dean@fcit.edu',
    linkText: 'dean@fcit.edu',
    gradient: 'from-fcit-200 to-fcit-100',
  },
]

export default function Contact() {
  const [showAdmission, setShowAdmission] = useState(true)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-[#f8fbff] text-slate-700 pt-24 font-sans"
    >
      {/* Dynamic Admission Popup (Glassmorphism) */}
      {showAdmission && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white/90 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] max-w-md w-full p-8 border border-white relative overflow-hidden"
          >
            {/* Soft Glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-fcit-200/40 rounded-full blur-[50px] pointer-events-none" />

            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br from-fcit-400 to-fcit-300 shadow-lg shadow-fcit-400/30 relative z-10">
              <GraduationCap className="text-white w-8 h-8" />
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-3 relative z-10">Admission Enquiries</h2>
            <p className="text-slate-600 mb-8 leading-relaxed font-light relative z-10">
              Applying for the current session? Please visit the official FCIT admissions portal for eligibility and fast-track processing.
            </p>
            <div className="flex flex-col gap-3 relative z-10">
              <a
                href="/admissions"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-fcit-400 to-fcit-300 text-white px-6 py-4 rounded-full font-bold shadow-xl shadow-fcit-400/20 hover:scale-[1.02] transition-transform duration-300"
              >
                Visit Admissions <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => setShowAdmission(false)}
                className="w-full px-6 py-4 rounded-full bg-slate-100/80 text-slate-600 font-bold hover:bg-slate-200 transition-colors"
              >
                Continue to Contacts
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Light Theme Standardized Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
           <motion.div 
            animate={{ scale: [1, 1.1, 1], x: [0, 50, 0] }} 
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 right-0 w-[40%] h-[50%] bg-fcit-200/30 rounded-full blur-[100px]"
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], y: [0, -50, 0] }} 
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-[10%] w-[30%] h-[40%] bg-fcit-100/40 rounded-full blur-[80px]"
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
              Get in <span className="bg-gradient-to-r from-fcit-400 to-fcit-300 bg-clip-text text-transparent drop-shadow-sm">Touch</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              We're here to help. Reach out to the <strong className="font-bold text-fcit-400">FCIT</strong> department for academic inquiries, administrative support, and partnerships.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12">
          
          {/* Quick Contacts Grid */}
          <div className="lg:w-5/12 flex flex-col gap-6">
            {contacts.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group w-full"
              >
                <div className="bg-white rounded-[2rem] border border-fcit-100 p-8 shadow-sm group-hover:shadow-[0_20px_40px_-15px_rgba(99,103,255,0.15)] group-hover:border-fcit-200 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 rounded-[1.25rem] flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${c.gradient} shadow-lg shadow-fcit-400/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                      <c.icon className="text-white w-7 h-7" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{c.title}</h3>
                      <p className="text-slate-600 font-medium text-sm leading-relaxed mb-4">{c.description}</p>
                      <a
                        href={c.link}
                        className="inline-flex items-center gap-2 text-fcit-400 hover:text-fcit-300 font-bold transition-colors"
                      >
                        {c.linkText}
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </a>
                      {c.hours && (
                        <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-slate-500 text-xs font-bold">
                          <Clock className="w-3.5 h-3.5" />
                          {c.hours}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form Block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-7/12"
          >
            <div className="bg-white rounded-[3rem] border border-white shadow-[0_20px_60px_-15px_rgba(99,103,255,0.15)] p-10 md:p-14 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-fcit-100/30 rounded-full blur-[80px] pointer-events-none" />
              
              <h2 className="text-3xl font-black text-slate-900 mb-2 relative z-10">Send us a Message</h2>
              <p className="text-slate-500 mb-10 font-medium relative z-10">Fill out the form below and we'll get back to you shortly.</p>

              <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-2">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-full focus:outline-none focus:ring-4 focus:ring-fcit-100 focus:border-fcit-300 transition-all text-slate-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-2">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-full focus:outline-none focus:ring-4 focus:ring-fcit-100 focus:border-fcit-300 transition-all text-slate-700"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-2">Subject</label>
                  <input 
                    type="text" 
                    placeholder="How can we help?" 
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-full focus:outline-none focus:ring-4 focus:ring-fcit-100 focus:border-fcit-300 transition-all text-slate-700"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-2">Your Message</label>
                  <textarea 
                    placeholder="Write your message here..." 
                    rows={5}
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-3xl focus:outline-none focus:ring-4 focus:ring-fcit-100 focus:border-fcit-300 transition-all text-slate-700 resize-none"
                  />
                </div>
                <button className="group w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-fcit-400 to-fcit-300 text-white px-8 py-5 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-fcit-400/30 hover:scale-[1.02] transition-all duration-300">
                  <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </section>
    </motion.div>
  )
}
