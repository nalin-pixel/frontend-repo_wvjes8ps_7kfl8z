import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Trust from './components/Trust'
import Footer from './components/Footer'

function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-0 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_50%_-10%,rgba(91,33,182,0.25)_0%,rgba(2,6,23,0.6)_55%,rgba(2,6,23,1)_100%)]" />
      <div className="absolute inset-0 opacity-30" style={{backgroundImage: 'radial-gradient(circle at 25% 10%, rgba(168,85,247,0.15), transparent 35%), radial-gradient(circle at 75% 20%, rgba(59,130,246,0.15), transparent 35%), radial-gradient(circle at 50% 60%, rgba(236,72,153,0.12), transparent 35%)'}} />
    </div>
  )
}

function App() {
  return (
    <div className="relative min-h-screen text-white">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Trust />
      </main>
      <Footer />
    </div>
  )
}

export default App
