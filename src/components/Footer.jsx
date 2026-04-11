import { Facebook, Twitter, Instagram, Linkedin, Youtube, MapPin, Phone, Mail, ArrowRight } from 'lucide-react'

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/gmuniversity', label: 'Facebook', color: 'hover:text-fcit-200 hover:bg-white/20' },
  { icon: Twitter, href: 'https://twitter.com/gmuniversity', label: 'Twitter', color: 'hover:text-fcit-200 hover:bg-white/20' },
  { icon: Instagram, href: 'https://instagram.com/gmuniversity', label: 'Instagram', color: 'hover:text-fcit-200 hover:bg-white/20' },
  { icon: Linkedin, href: 'https://linkedin.com/school/gmuniversity', label: 'LinkedIn', color: 'hover:text-fcit-200 hover:bg-white/20' },
  { icon: Youtube, href: 'https://youtube.com/gmuniversity', label: 'YouTube', color: 'hover:text-fcit-200 hover:bg-white/20' },
]

const exploreLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Research & Pubs', href: '/research-publications' },
  { name: 'Alumni Network', href: '/alumni' },
  { name: 'Contact Us', href: '/contact-us' },
]

const academicLinks = [
  { name: 'Our Programs', href: '/programs' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Faculty Directory', href: '/faculty' },
  { name: 'Placements', href: '/student-internships-placements' },
]

const contactInfo = [
  { icon: MapPin, text: 'FCIT Campus, University Road, City - 577002' },
  { icon: Phone, text: '+91-987-654-3210' },
  { icon: Mail, text: 'info@fcit.edu' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden rounded-t-[3rem] mt-auto">
      {/* Premium Ambient Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-fcit-400/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-fcit-300/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand & Social */}
          <div className="lg:col-span-4 xl:col-span-3">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 flex items-center justify-center bg-white rounded-xl p-1.5 shadow-lg shadow-fcit-400/20">
                <img src="https://cdn.jsdelivr.net/gh/vinni66/Images/assets/gmulogo1.png" alt="GMU Logo" className="h-full w-auto object-contain" />
              </div>
              <h3 className="text-2xl font-black text-white tracking-tight leading-none">
                Faculty of <br /> Computer Applications
              </h3>
            </div>
            <p className="text-slate-300/90 mb-8 leading-relaxed font-light text-sm pr-2">
              Empowering students through excellence in education, innovation, and research. Shaping future leaders in modern technology at GM University.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className={`p-2.5 bg-white/5 border border-white/10 rounded-xl transition-all duration-300 transform hover:-translate-y-1 ${s.color}`}
                  aria-label={s.label}
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore Links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-6 text-white tracking-wide">Explore</h3>
            <ul className="space-y-2">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="flex justify-between items-center px-3 py-2.5 rounded-xl bg-transparent hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300 group"
                  >
                    <span className="text-slate-400 group-hover:text-white font-medium text-sm transition-colors">
                      {link.name}
                    </span>
                    <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:bg-fcit-400/20 transition-all duration-300 shadow-sm">
                      <ArrowRight className="w-3 h-3 text-fcit-400" />
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics Links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-6 text-white tracking-wide">Academics</h3>
            <ul className="space-y-2">
              {academicLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="flex justify-between items-center px-3 py-2.5 rounded-xl bg-transparent hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300 group"
                  >
                    <span className="text-slate-400 group-hover:text-white font-medium text-sm transition-colors">
                      {link.name}
                    </span>
                    <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:bg-fcit-400/20 transition-all duration-300 shadow-sm">
                      <ArrowRight className="w-3 h-3 text-fcit-400" />
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2 lg:col-start-9 xl:col-span-3 xl:col-start-8">
            <h3 className="text-lg font-bold mb-6 text-white tracking-wide">Contact Us</h3>
            <div className="space-y-4">
              {contactInfo.map((c, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <div className="p-2 bg-fcit-400/10 rounded-lg border border-fcit-400/20 group-hover:bg-fcit-400/20 group-hover:border-fcit-400/40 transition-colors mt-0.5">
                    <c.icon className="w-4 h-4 text-fcit-300" />
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-200 transition-colors font-medium">
                    {c.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter / CTA Box style */}
          <div className="lg:col-span-2 xl:col-span-2">
             <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden group hover:border-fcit-400/30 transition-colors">
               <div className="absolute -top-10 -right-10 w-24 h-24 bg-fcit-400/20 rounded-full blur-xl group-hover:bg-fcit-400/40 transition-colors" />
               <h3 className="text-lg font-bold mb-2 text-white relative z-10">Weekly Tech Insights</h3>
               <p className="text-slate-400 text-sm mb-4 leading-relaxed relative z-10">Subscribe to our newsletter for the latest tech trends and campus updates.</p>
               <form className="flex flex-col gap-3 relative z-10" onSubmit={(e) => e.preventDefault()}>
                 <input type="email" placeholder="Email address" required className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-fcit-400 text-sm text-white placeholder-slate-500" />
                 <button className="w-full bg-fcit-400 hover:bg-fcit-300 text-white font-bold py-3 rounded-xl transition-colors text-sm shadow-lg shadow-fcit-400/20">Subscribe</button>
                 <p className="text-[10px] text-slate-500 mt-1 text-center">By subscribing, you agree to our Privacy Policy. No spam.</p>
               </form>
             </div>
          </div>
        </div>
      </div>

      {/* Deep Footer Bar */}
      <div className="border-t border-white/10 bg-black/20 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-500 text-sm font-medium">
              © {year} FCIT - Faculty of Computer Applications. All rights reserved.
            </div>
            <div className="flex items-center space-x-8 text-sm font-medium">
              <a href="#" className="text-slate-500 hover:text-fcit-300 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-slate-500 hover:text-fcit-300 transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
