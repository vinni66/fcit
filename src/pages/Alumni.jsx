import { motion } from 'framer-motion'
import { GraduationCap, Linkedin, MapPin, Briefcase } from 'lucide-react'

const alumni = [
  { name: 'Aarav Patel', batch: '2020', company: 'Google', role: 'Software Engineer', location: 'Bangalore' },
  { name: 'Ishita Sharma', batch: '2019', company: 'Microsoft', role: 'Program Manager', location: 'Hyderabad' },
  { name: 'Rohan Desai', batch: '2021', company: 'Amazon', role: 'SDE II', location: 'Seattle, US' },
  { name: 'Neha Gupta', batch: '2018', company: 'Meta', role: 'Data Scientist', location: 'London, UK' },
  { name: 'Karthik R', batch: '2020', company: 'Apple', role: 'iOS Engineer', location: 'Cupertino, US' },
  { name: 'Divya Jain', batch: '2022', company: 'Flipkart', role: 'Product Analyst', location: 'Bangalore' },
  { name: 'Arjun M', batch: '2017', company: 'Netflix', role: 'Senior Engineer', location: 'Los Angeles, US' },
  { name: 'Pooja K', batch: '2021', company: 'Adobe', role: 'UI Engineer', location: 'Noida' },
]

const gradients = [
  'from-fcit-400 to-fcit-300',
  'from-fcit-300 to-fcit-200',
  'from-fcit-200 to-fcit-100',
  'from-fcit-400 to-fcit-200',
]

export default function Alumni() {
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
            className="absolute top-[10%] left-[10%] w-[50%] h-[50%] bg-fcit-200/30 rounded-full blur-[100px]"
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }} 
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 right-[15%] w-[40%] h-[40%] bg-fcit-400/10 rounded-full blur-[80px]"
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
              <GraduationCap className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-5xl sm:text-6xl font-black mb-6 text-slate-900 tracking-tight">
              Our <span className="bg-gradient-to-r from-fcit-400 to-fcit-300 bg-clip-text text-transparent drop-shadow-sm">Alumni</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              Our graduates are making a profound impact at leading technology <strong className="font-bold text-fcit-400">companies worldwide</strong>. Meet our incredible alumni network.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Alumni Portrait Grid */}
      <section className="py-24 bg-white relative border-t border-fcit-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {alumni.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-[#f8fbff] rounded-[2.5rem] border border-fcit-100 p-8 shadow-sm hover:shadow-[0_20px_50px_-15px_rgba(99,103,255,0.2)] hover:border-fcit-200 hover:bg-white transition-all duration-300 text-center group flex flex-col"
              >
                <div className={`w-20 h-20 rounded-[1.25rem] bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center mb-6 mx-auto shadow-lg shadow-fcit-400/20 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300`}>
                  <span className="text-white text-2xl font-black">{a.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                
                <h3 className="text-2xl font-black text-slate-900 mb-2 truncate group-hover:text-fcit-400 transition-colors">{a.name}</h3>
                
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-fcit-100 text-fcit-400 font-bold text-sm mb-6 shadow-sm mx-auto group-hover:border-fcit-200 transition-colors">
                  Batch of {a.batch}
                </div>
                
                <div className="bg-white rounded-2xl p-4 border border-fcit-50 mb-6 flex-grow flex flex-col justify-center gap-2 group-hover:border-fcit-100 transition-colors">
                  <div className="flex items-center justify-center gap-2 text-slate-700 font-medium">
                    <Briefcase className="w-4 h-4 text-fcit-300" />
                    <span>{a.role}</span>
                  </div>
                  <p className="text-slate-900 font-black text-lg">{a.company}</p>
                  <div className="flex items-center justify-center gap-2 text-slate-400 text-sm font-medium mt-1">
                    <MapPin className="w-4 h-4" />
                    <span>{a.location}</span>
                  </div>
                </div>
                
                <div className="mt-auto pt-2 border-t border-fcit-100/50">
                  <motion.a 
                    whileHover={{ scale: 1.1 }} 
                    href="#" 
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow mx-auto border border-fcit-100 group-hover:border-fcit-200"
                  >
                    <Linkedin className="w-5 h-5 text-fcit-400" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
