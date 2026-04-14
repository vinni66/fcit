import { Facebook, Twitter, Instagram, Linkedin, Youtube, MapPin, Phone, Mail, ArrowRight, ExternalLink } from 'lucide-react'
import { UNIVERSITY_INFO, OFFICIAL_LINKS } from '../constants'

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
  { icon: MapPin, text: UNIVERSITY_INFO.LOCATION },
  { icon: Phone, text: UNIVERSITY_INFO.PHONE.join(' / ') },
  { icon: Mail, text: UNIVERSITY_INFO.EMAIL },
]

const universityLinks = [
  { name: 'Official Website', href: OFFICIAL_LINKS.MAIN_SITE },
  { name: 'Academic Circulars', href: OFFICIAL_LINKS.CIRCULARS },
  { name: 'University Notifications', href: OFFICIAL_LINKS.NOTIFICATIONS },
  { name: 'Student ERP Portal', href: OFFICIAL_LINKS.STUDENT_ERP },
  { name: 'Admission Enquiry', href: OFFICIAL_LINKS.ADMISSIONS },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-white text-slate-900 overflow-hidden rounded-t-[3rem] mt-auto border-t border-fcit-400/5">
      {/* Premium Ambient Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-fcit-400/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-fcit-300/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Brand & Social */}
          <div className="lg:col-span-4 xl:col-span-3">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-10 lg:h-12 flex items-center justify-center bg-white rounded-xl p-1.5 shadow-lg shadow-fcit-400/10 border border-fcit-400/5">
                <img src="https://cdn.jsdelivr.net/gh/vinni66/Images@main/assets/gmulogo1.png" alt="FCIT Logo" className="h-full w-auto object-contain" />
              </div>
              <h3 className="text-xl lg:text-2xl font-black text-fcit-400 tracking-tight leading-none uppercase">
                Faculty of <br /> Computing and IT
              </h3>
            </div>
            <p className="text-slate-500 mb-8 leading-relaxed font-light text-sm pr-2">
              Empowering students through excellence in education, innovation, and research. Shaping future leaders in modern technology at GM University.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className={`p-2.5 bg-fcit-100 border border-fcit-400/10 rounded-xl transition-all duration-300 transform hover:-translate-y-1 text-fcit-400 ${s.color}`}
                  aria-label={s.label}
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Sub Grid for Links to look better on Mobile */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            {/* Explore Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-fcit-400 tracking-wide">Explore</h3>
              <ul className="space-y-2">
                {exploreLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="flex justify-between items-center px-2 py-2 rounded-xl bg-transparent hover:bg-fcit-100 border border-transparent hover:border-fcit-400/10 transition-all duration-300 group"
                    >
                      <span className="text-slate-600 group-hover:text-fcit-400 font-medium text-sm transition-colors">
                        {link.name}
                      </span>
                      <div className="w-5 h-5 rounded-full bg-fcit-100 flex items-center justify-center scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:bg-fcit-400/20 transition-all duration-300 shadow-sm">
                        <ArrowRight className="w-3 h-3 text-fcit-400" />
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* University Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-fcit-400 tracking-wide">University Resources</h3>
              <ul className="space-y-2">
                {universityLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-between items-center px-2 py-2 rounded-xl bg-transparent hover:bg-fcit-100 border border-transparent hover:border-fcit-400/10 transition-all duration-300 group"
                    >
                      <span className="text-slate-600 group-hover:text-fcit-400 font-medium text-sm transition-colors flex items-center gap-1.5">
                        {link.name} <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2 lg:col-start-9 xl:col-span-3 xl:col-start-8">
            <h3 className="text-lg font-bold mb-6 text-fcit-400 tracking-wide">Contact Us</h3>
            <div className="space-y-4">
              {contactInfo.map((c, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <div className="p-2 bg-fcit-100 rounded-lg border border-fcit-400/10 group-hover:bg-fcit-400/10 group-hover:border-fcit-400/20 transition-colors mt-0.5">
                    <c.icon className="w-4 h-4 text-fcit-300" />
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed group-hover:text-fcit-400 transition-colors font-medium">
                    {c.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter / CTA Box style */}
          <div className="lg:col-span-2 xl:col-span-2">
             <div className="bg-fcit-100 border border-fcit-400/5 rounded-2xl p-6 relative overflow-hidden group hover:border-fcit-400/30 transition-colors shadow-sm">
               <div className="absolute -top-10 -right-10 w-24 h-24 bg-fcit-400/5 rounded-full blur-xl group-hover:bg-fcit-400/10 transition-colors" />
               <h3 className="text-lg font-bold mb-2 text-fcit-400 relative z-10">Weekly Tech Insights</h3>
               <p className="text-slate-500 text-sm mb-4 leading-relaxed relative z-10">Subscribe to our newsletter for the latest tech trends and campus updates.</p>
               <form className="flex flex-col gap-3 relative z-10 w-full" onSubmit={(e) => e.preventDefault()}>
                 <div className="relative">
                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                     <Mail className="h-5 w-5 text-slate-400" />
                   </div>
                   <input type="email" placeholder="Email address" required className="block w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-fcit-400 focus:border-fcit-400 text-sm text-slate-900 placeholder-slate-400 shadow-sm" />
                 </div>
                 <button className="w-full bg-fcit-400 hover:bg-fcit-300 text-white font-bold py-3 rounded-xl transition-colors text-sm shadow-lg shadow-fcit-400/20">Subscribe Now</button>
                 <p className="text-[10px] text-slate-400 mt-1 text-center">By subscribing, you agree to our Privacy Policy.</p>
               </form>
             </div>
          </div>
        </div>
      </div>

      {/* Deep Footer Bar */}
      <div className="border-t border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm font-medium">
              © {year} FCIT - Faculty of Computing and IT. All rights reserved.
            </div>
            <div className="flex items-center space-x-8 text-sm font-medium">
              <a href="#" className="text-slate-400 hover:text-fcit-400 transition-colors duration-300 uppercase tracking-tighter">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-fcit-400 transition-colors duration-300 uppercase tracking-tighter">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
