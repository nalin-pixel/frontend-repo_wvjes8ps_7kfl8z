import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 via-fuchsia-500 to-blue-500 shadow-[0_0_40px_-10px_rgba(168,85,247,0.8)]" />
            <span className="text-sm font-semibold tracking-tight text-white/90">Flames.AI</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#process" className="hover:text-white transition-colors">Process</a>
            <a href="#trust" className="hover:text-white transition-colors">Trust</a>
            <a href="#cases" className="hover:text-white transition-colors">Case Studies</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden sm:inline-flex rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/10 transition-colors">Get in touch</a>
            <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white/80">
              <Menu size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
