export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 py-10 text-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-gradient-to-br from-purple-500 via-fuchsia-500 to-blue-500" />
            <span className="text-sm font-semibold text-white/80">Flames.AI</span>
          </div>
          <div className="text-sm">© {new Date().getFullYear()} Flames.AI — All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
