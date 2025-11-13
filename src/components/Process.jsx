const steps = [
  {
    title: 'Analyzing',
    desc: 'We assess workflows, data sources, and objectives to identify automations with the highest ROI.',
    img: (
      <div className="h-36 w-full rounded-xl border border-white/10 bg-gradient-to-br from-slate-800/60 to-slate-900/60" />
    ),
  },
  {
    title: 'Development',
    desc: 'We design agentic systems with robust evaluation, testing strategies, and safety controls.',
    img: (
      <div className="h-36 w-full rounded-xl border border-white/10 bg-gradient-to-br from-slate-800/60 to-slate-900/60" />
    ),
  },
  {
    title: 'Integration',
    desc: 'We connect services across your stack, deploy securely, and align with your IT policies.',
    img: (
      <div className="h-36 w-full rounded-xl border border-white/10 bg-gradient-to-br from-slate-800/60 to-slate-900/60" />
    ),
  },
  {
    title: 'Optimization',
    desc: 'We iterate with analytics, human-in-the-loop feedback, and cost-performance tuning.',
    img: (
      <div className="h-36 w-full rounded-xl border border-white/10 bg-gradient-to-br from-slate-800/60 to-slate-900/60" />
    ),
  },
]

export default function Process() {
  return (
    <section id="process" className="relative z-10 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Transformation Path</h2>
          <p className="mt-2 max-w-2xl text-white/70">A clear, pragmatic journey from discovery to outcomes.</p>
        </div>

        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs uppercase tracking-wide text-white/50">{s.title}</div>
              <div className="mt-3">{s.img}</div>
              <p className="mt-3 text-sm text-white/70">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
