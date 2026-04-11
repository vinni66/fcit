import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BottomNav from './components/BottomNav'
import BackToTop from './components/BackToTop'
import Home from './pages/Home'
import Programs from './pages/Programs'
import Faculty from './pages/Faculty'
import Research from './pages/Research'
import Achievements from './pages/Achievements'
import Placements from './pages/Placements'
import Alumni from './pages/Alumni'
import Contact from './pages/Contact'
import About from './pages/About'
import Resources from './pages/Resources'
import Admissions from './pages/Admissions'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/learning-resources" element={<Resources />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/research-publications" element={<Research />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/student-internships-placements" element={<Placements />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <BottomNav />
      <BackToTop />
      <Footer />
    </BrowserRouter>
  )
}
