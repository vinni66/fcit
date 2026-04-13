import CampusExperience from '../components/CampusExperience'

export default function Gallery() {
  return (
    <div className="pt-20 min-h-screen bg-[#f8fbff]">
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tighter">
          Official <span className="text-fcit-400">Media Gallery</span>
        </h1>
        <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">
          Explore the vibrant academic life, technical milestones, and cultural celebrations at GM University's Faculty of Computing & IT.
        </p>
      </div>
      <CampusExperience />
    </div>
  )
}
