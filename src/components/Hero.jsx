import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(124,58,237,0.25)_0%,rgba(2,6,23,0.2)_55%,rgba(2,6,23,1)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs text-white/80 backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-fuchsia-400"></span>
            Enterprise AI Partner
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_40px_rgba(168,85,247,0.35)]">
            AI-First Services for Modern Businesses
          </h1>
          <p className="mt-6 text-base sm:text-lg text-white/80 max-w-xl">
            We design agentic systems, orchestrate multi-agent workflows, and craft LLM-powered strategies that drive measurable outcomes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="pointer-events-auto inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(168,85,247,0.8)] transition-transform hover:scale-[1.02]">
              Get in touch
            </a>
            <a href="#services" className="pointer-events-auto inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/15">
              View services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
