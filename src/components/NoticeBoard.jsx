import { motion } from 'framer-motion'
import { Megaphone, ExternalLink, Calendar, FileText, Bell, Inbox } from 'lucide-react'
import { OFFICIAL_LINKS } from '../constants'

const notices = [
  {
    title: 'Academic Assessment',
    description: 'Latest exam timetables, assessment patterns, and academic calendars 2024-25.',
    link: OFFICIAL_LINKS.CIRCULARS,
    icon: Calendar,
    color: 'bg-blue-600',
  },
  {
    title: 'University Notifications',
    description: 'Direct access to official PhD, recruitment, and administrative circulars.',
    link: OFFICIAL_LINKS.NOTIFICATIONS,
    icon: Bell,
    color: 'bg-amber-500',
  },
  {
    title: 'Admission Enquiry 2026',
    description: 'Official portal for prospective students for current and next academic batch.',
    link: OFFICIAL_LINKS.ADMISSIONS,
    icon: Inbox,
    color: 'bg-fcit-400',
  },
  {
    title: 'Self-Service ERP',
    description: 'Track your internal marks, attendance, and feedback on the official GMU portal.',
    link: OFFICIAL_LINKS.STUDENT_ERP,
    icon: FileText,
    color: 'bg-indigo-600',
  },
]


export default function NoticeBoard() {
  return (
    <div className="py-24 relative overflow-hidden bg-slate-50">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-fcit-200/20 rounded-full blur-[120px] -transition-y-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fcit-100 text-fcit-400 font-bold text-sm mb-4 uppercase tracking-widest"
            >
              <Megaphone className="w-4 h-4" /> Live Announcements
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Official Notice Board
            </h2>
          </div>
          <p className="text-lg text-slate-500 max-w-md md:text-right font-light">
            Stay updated with the latest circulars and academic notifications from GM University.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {notices.map((notice, i) => (
            <motion.a
              key={i}
              href={notice.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-premium hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col items-start text-left"
            >
              <div className={`w-14 h-14 ${notice.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-black/5 group-hover:scale-110 transition-transform duration-500`}>
                <notice.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-fcit-400 transition-colors">
                {notice.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                {notice.description}
              </p>

              <div className="flex items-center gap-2 text-fcit-400 font-bold text-xs uppercase tracking-widest group-hover:gap-3 transition-all">
                Visit Portal <ExternalLink className="w-4 h-4" />
              </div>

              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[80px] -z-10 group-hover:bg-fcit-50 transition-colors" />
            </motion.a>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
            <motion.a
              href={OFFICIAL_LINKS.MAIN_SITE}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white border border-fcit-100 rounded-full text-fcit-400 font-bold flex items-center gap-3 shadow-lg hover:bg-fcit-400 hover:text-white transition-all duration-300"
            >
                View Main University Website <ExternalLink className="w-5 h-5" />
            </motion.a>
        </div>
      </div>
    </div>
  )
}
