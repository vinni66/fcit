import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter, Monitor, Brain, Shield, Database, Cpu, Code, ArrowRight } from 'lucide-react'
import ProgramModal from './ProgramModal'

const allPrograms = [
  { 
    id: 1, 
    title: 'BCA – General', 
    category: 'SCA', 
    icon: Monitor, 
    duration: '3 Years', 
    tags: ['IT', 'Software', 'Computing'],
    gradient: 'from-fcit-400 to-fcit-300',
    eligibility: '10+2 with Mathematics'
  },
  { 
    id: 2, 
    title: 'BCA – AI & Data Analytics', 
    category: 'SCA', 
    icon: Brain, 
    duration: '3 Years', 
    tags: ['AI', 'Data', 'BCA'],
    gradient: 'from-fcit-300 to-fcit-200',
    eligibility: '10+2 with Mathematics'
  },
  { 
    id: 3, 
    title: 'BCA – Data Science', 
    category: 'SCA', 
    icon: Database, 
    duration: '3 Years', 
    tags: ['Data', 'Analytics'],
    gradient: 'from-fcit-200 to-fcit-100',
    eligibility: '10+2 with Mathematics'
  },
  { 
    id: 4, 
    title: 'BCA – Cyber Security', 
    category: 'SCA', 
    icon: Shield, 
    duration: '3 Years', 
    tags: ['Security', 'Cyber'],
    gradient: 'from-fcit-400 via-fcit-300 to-fcit-200',
    eligibility: '10+2 with Mathematics'
  },
  { 
    id: 5, 
    title: 'MCA – General', 
    category: 'SCA', 
    icon: Code, 
    duration: '2 Years', 
    tags: ['Postgrad', 'Software'],
    gradient: 'from-fcit-300 to-fcit-400',
    eligibility: "Bachelor's degree with Mathematics"
  },
  { 
    id: 6, 
    title: 'MSc – AI & Data Analytics', 
    category: 'SCS', 
    icon: Cpu, 
    duration: '2 Years', 
    tags: ['Research', 'AI'],
    gradient: 'from-fcit-400 to-fcit-300',
    eligibility: 'B.Sc/BCA Relevant Fields'
  },
  { 
    id: 7, 
    title: 'MSc – Data Science', 
    category: 'SCS', 
    icon: Database, 
    duration: '2 Years', 
    tags: ['Research', 'Data'],
    gradient: 'from-fcit-300 to-fcit-200',
    eligibility: 'B.Sc/BCA Relevant Fields'
  },
  { 
    id: 8, 
    title: 'MSc – Cyber Security', 
    category: 'SCS', 
    icon: Shield, 
    duration: '2 Years', 
    tags: ['Research', 'Security'],
    gradient: 'from-fcit-200 to-fcit-100',
    eligibility: 'B.Sc/BCA Relevant Fields'
  },
]

export default function ProgramBrowser() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProgram, setSelectedProgram] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openProgramDetails = (p) => {
    setSelectedProgram(p)
    setIsModalOpen(true)
  }

  const filteredPrograms = useMemo(() => {
    return allPrograms.filter(p => {
      const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, activeCategory])

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-20">
      {/* Program Modal */}
      <ProgramModal 
        program={selectedProgram}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Find Your <span className="text-fcit-400 text-glow">Path</span>
          </h2>
          <p className="text-slate-700 text-lg font-medium">Explore our diverse range of industry-aligned programs.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search Bar */}
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-fcit-400 transition-colors" />
            <input
              type="text"
              placeholder="Search programs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-6 py-4 rounded-2xl bg-white border border-slate-300 outline-none focus:border-fcit-400 focus:ring-4 focus:ring-fcit-400/10 transition-all w-full sm:w-64 lg:w-80 shadow-md font-medium text-slate-800"
            />
          </div>

          {/* Category Filter */}
          <div className="flex bg-white p-1.5 rounded-2xl border border-slate-300 shadow-md">
            {['All', 'SCA', 'SCS'].map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-xl font-black transition-all ${
                  activeCategory === cat 
                    ? 'bg-fcit-400 text-white shadow-lg glow-maroon' 
                    : 'text-slate-700 hover:bg-slate-50 hover:text-fcit-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 min-h-[400px]">
        <AnimatePresence mode="popLayout">
          {filteredPrograms.map((prog) => (
            <motion.div
              key={prog.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-[2.5rem] border border-slate-200 flex flex-col justify-between group hover:border-fcit-400 hover:shadow-premium transition-all duration-300"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-fcit-100/50 flex items-center justify-center mb-8 group-hover:bg-fcit-400 transition-colors shadow-sm">
                  <prog.icon className="w-7 h-7 text-fcit-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2 leading-tight group-hover:text-fcit-400 transition-colors">{prog.title}</h3>
                <p className="text-sm text-fcit-400 font-bold mb-6 tracking-wide uppercase opacity-80">{prog.category} • {prog.duration}</p>
                <div className="flex flex-wrap gap-2">
                  {prog.tags.map(tag => (
                    <span key={tag} className="px-3 py-1.5 rounded-lg bg-slate-100 text-[11px] font-black text-slate-700 uppercase tracking-widest group-hover:bg-fcit-100 group-hover:text-fcit-400 transition-all">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <button 
                onClick={() => openProgramDetails(prog)}
                className="mt-10 flex items-center justify-between w-full text-fcit-400 font-black group/btn pt-6 border-t border-slate-50"
              >
                <span className="uppercase text-xs tracking-widest">View Program</span>
                <div className="w-10 h-10 rounded-full bg-fcit-100/50 flex items-center justify-center group-hover/btn:bg-fcit-400 group-hover/btn:text-white transition-all shadow-sm">
                  <ArrowRight className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {filteredPrograms.length === 0 && (
          <div className="col-span-full flex flex-col items-center justify-center py-20 text-slate-400">
            <div className="w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center mb-4">
              <Search className="w-10 h-10" />
            </div>
            <p className="text-lg font-bold">No programs found match your search.</p>
          </div>
        )}
      </div>
    </div>
  )
}
