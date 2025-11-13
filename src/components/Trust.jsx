export default function Trust() {
  return (
    <section id="trust" className="relative z-10 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Trusted by forward-thinking teams</h2>
            <p className="mt-2 max-w-2xl text-white/70">We partner with enterprises and high-growth startups to ship real value.</p>
          </div>
          <a href="#cases" className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/15">Explore case studies</a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex h-20 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60">
              Business {i + 1}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
