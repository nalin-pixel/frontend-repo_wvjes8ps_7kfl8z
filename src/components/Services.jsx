import { Bot, Workflow, Code2, Megaphone, Wrench } from 'lucide-react'

const services = [
  {
    icon: Workflow,
    title: 'Workflow Automation',
    desc: 'Multi-agent workflows, approvals, reporting, and human-in-the-loop features.',
  },
  {
    icon: Bot,
    title: 'Agile Copilot',
    desc: 'A multirole AI agent managing sprints, code generation, and QA.',
  },
  {
    icon: Megaphone,
    title: 'Sales & Marketing',
    desc: 'Pipeline automation, personalized outreach, and content generation.',
  },
  {
    icon: Wrench,
    title: 'Custom Projects',
    desc: 'AI-agnostic architecture, integration support, and consulting.',
  },
]

function ServiceCard({ Icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-colors hover:bg-white/10">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-fuchsia-500/30 to-indigo-500/30 text-fuchsia-300">
          <Icon size={20} />
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-white/70">{desc}</p>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="relative z-10 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Services</h2>
          <p className="mt-2 max-w-2xl text-white/70">We deliver end-to-end solutions tailored to business goals and technical realities.</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard key={s.title} Icon={s.icon} title={s.title} desc={s.desc} />
          ))}
        </div>
      </div>
    </section>
  )
}
