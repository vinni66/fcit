import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'

// Layout & Core
import Navbar from './components/Navbar'
import BottomNav from './components/BottomNav'
import BackToTop from './components/BackToTop'
import ChatBot from './components/ChatBot'
import ScrollProgress from './components/ScrollProgress'
import LiveBackground from './components/LiveBackground'

// Lazy Load Pages
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Programs = lazy(() => import('./pages/Programs'))
const Resources = lazy(() => import('./pages/Resources'))
const Faculty = lazy(() => import('./pages/Faculty'))
const Research = lazy(() => import('./pages/Research'))
const Achievements = lazy(() => import('./pages/Achievements'))
const Placements = lazy(() => import('./pages/Placements'))
const Alumni = lazy(() => import('./pages/Alumni'))
const Admissions = lazy(() => import('./pages/Admissions'))
const Contact = lazy(() => import('./pages/Contact'))
const Gallery = lazy(() => import('./pages/Gallery'))

// Lazy Load Heavy Footer
const Footer = lazy(() => import('./components/Footer'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [pathname])
  return null
}

const LoadingFallback = () => (
  <div className="min-h-screen bg-slate-50 flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-fcit-400 border-t-transparent rounded-full animate-spin" />
  </div>
)

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />
      <LiveBackground />
      <main>
        <Suspense fallback={<LoadingFallback />}>
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
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
          <BottomNav />
          <BackToTop />
          <ChatBot />
          <Footer />
        </Suspense>
      </main>
    </BrowserRouter>
  )
}

