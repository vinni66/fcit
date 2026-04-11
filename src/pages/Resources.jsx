import { motion } from 'framer-motion'
import { BookMarked, ExternalLink, Play, FileText, Code, Video } from 'lucide-react'

const resources = [
  {
    category: 'Programming Fundamentals',
    icon: Code,
    gradient: 'from-fcit-400 to-fcit-300',
    items: [
      { title: 'C Programming Tutorial', type: 'Video', link: '#' },
      { title: 'Data Structures & Algorithms', type: 'PDF', link: '#' },
      { title: 'Object-Oriented Programming in Java', type: 'Video', link: '#' },
      { title: 'Python for Beginners', type: 'Tutorial', link: '#' },
    ],
  },
  {
    category: 'Web Development',
    icon: Code,
    gradient: 'from-fcit-300 to-fcit-200',
    items: [
      { title: 'HTML, CSS & JavaScript Masterclass', type: 'Video', link: '#' },
      { title: 'React.js Complete Guide', type: 'Tutorial', link: '#' },
      { title: 'Node.js Backend Development', type: 'Video', link: '#' },
      { title: 'Full Stack MERN Project', type: 'Project', link: '#' },
    ],
  },
  {
    category: 'Database Management',
    icon: FileText,
    gradient: 'from-fcit-400 to-fcit-200',
    items: [
      { title: 'SQL Fundamentals', type: 'PDF', link: '#' },
      { title: 'MongoDB NoSQL Database', type: 'Tutorial', link: '#' },
      { title: 'Database Design Principles', type: 'PDF', link: '#' },
      { title: 'PL/SQL Programming', type: 'Video', link: '#' },
    ],
  },
  {
    category: 'AI & Machine Learning',
    icon: Code,
    gradient: 'from-fcit-200 to-fcit-100',
    items: [
      { title: 'Machine Learning with Python', type: 'Video', link: '#' },
      { title: 'Deep Learning Fundamentals', type: 'Tutorial', link: '#' },
      { title: 'TensorFlow & Keras Guide', type: 'PDF', link: '#' },
      { title: 'NLP with Transformers', type: 'Video', link: '#' },
    ],
  },
]

const typeIcons = { Video: Video, PDF: FileText, Tutorial: BookMarked, Project: Code }
const typeColors = { Video: 'text-red-500 bg-red-50 group-hover:bg-red-100', PDF: 'text-fcit-400 bg-fcit-100/50 group-hover:bg-fcit-200/50', Tutorial: 'text-green-500 bg-green-50 group-hover:bg-green-100', Project: 'text-purple-500 bg-purple-50 group-hover:bg-purple-100' }

export default function Resources() {
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
            animate={{ scale: [1, 1.1, 1], rotate: [0, -90, 0] }} 
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-[25%] w-[40%] h-[50%] bg-fcit-200/30 rounded-full blur-[100px]"
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], x: [0, 60, 0] }} 
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-[15%] w-[35%] h-[45%] bg-fcit-100/50 rounded-full blur-[80px]"
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
              <BookMarked className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-5xl sm:text-6xl font-black mb-6 text-slate-900 tracking-tight">
              Learning <span className="bg-gradient-to-r from-fcit-400 to-fcit-300 bg-clip-text text-transparent drop-shadow-sm">Resources</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              Curated, high-quality learning materials, tutorials, and deep-dive documentation to relentlessly supplement your <strong className="font-bold text-fcit-400">academic journey</strong>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resources Bento Library */}
      <section className="py-24 bg-white relative border-t border-fcit-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-[2.5rem] border border-fcit-100 shadow-[0_10px_30px_-10px_rgba(99,103,255,0.08)] hover:shadow-[0_20px_50px_-15px_rgba(99,103,255,0.15)] hover:border-fcit-200 transition-all duration-300 overflow-hidden flex flex-col group"
              >
                {/* Header Block inside Card */}
                <div className={`bg-gradient-to-br ${cat.gradient} p-8 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-bl-[100px] pointer-events-none group-hover:scale-110 transition-transform duration-500" />
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                      <cat.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-white">{cat.category}</h3>
                  </div>
                </div>

                {/* List Block */}
                <div className="p-8 space-y-4 flex-grow bg-[#f8fbff]/50">
                  {cat.items.map((item, j) => {
                    const TypeIcon = typeIcons[item.type] || FileText
                    const colorClasses = typeColors[item.type] || 'text-slate-500 bg-slate-100 group-hover:bg-slate-200'
                    return (
                      <motion.a
                        key={j}
                        href={item.link}
                        className="flex items-center justify-between p-4 rounded-2xl bg-white border border-fcit-50 shadow-sm hover:shadow-md hover:border-fcit-200 transition-all duration-300 group/link"
                      >
                        <div className="flex items-center gap-4 flex-1 pr-4">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${colorClasses}`}>
                            <TypeIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="block text-slate-800 font-bold group-hover/link:text-fcit-400 transition-colors">{item.title}</span>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{item.type}</span>
                          </div>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 group-hover/link:bg-fcit-100/50 transition-colors">
                          <ExternalLink className="w-4 h-4 text-slate-400 group-hover/link:text-fcit-400" />
                        </div>
                      </motion.a>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
