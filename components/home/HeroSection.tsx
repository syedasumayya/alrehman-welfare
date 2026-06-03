import Link from 'next/link'

const stats = [
  { num: '500+',  label: 'Families Supported' },
  { num: '₨2M+', label: 'Aid Raised' },
  { num: '120+', label: 'Orphans Sponsored' },
  { num: '15K+', label: 'Youth Mobilized' },
]

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-navy-dark via-navy to-blue-700 min-h-[88vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle,white 1px,transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">

        {/* Left — Text */}
        <div>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-yellow-300 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            🇵🇸 Al Rehman Welfare — Pakistan
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-black text-white leading-tight mb-5">
            Stand With<br />
            <span className="text-yellow-300">Palestine.</span><br />
            Act With Heart.
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-4 max-w-md">
            A youth-led organization from Pakistan driven by purpose, compassion, and action.
          </p>
          <div className="flex items-center gap-2 mb-8">
            <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-red-400 text-sm font-semibold">Gaza needs your help right now</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/donate"
              className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded font-bold text-base transition-all hover:-translate-y-0.5 shadow-lg shadow-green-900/40">
              Donate Today →
            </Link>
            <Link href="/projects"
              className="border border-white/30 hover:border-white text-white px-8 py-4 rounded font-semibold text-base transition-all hover:bg-white/10">
              See Our Projects
            </Link>
          </div>
          <p className="text-white/40 text-xs mt-5">🔒 100% transparent · Verified partners · Monthly reports</p>
        </div>

        {/* Right — Image with Stats */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl min-h-[420px] group">
          <img
            src="https://images.unsplash.com/photo-1579705745892-1f5da1e62e68?w=800&q=80"
            alt="Palestinian families — Al Rehman Welfare"
            className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

          {/* Flag stripe */}
          <div className="absolute top-0 left-0 right-0 flex h-1.5">
            <div className="flex-1 bg-black" />
            <div className="flex-1 bg-white" />
            <div className="flex-1 bg-green-700" />
            <div className="w-10 bg-red-600" />
          </div>

          {/* Urgent badge */}
          <div className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse inline-block" />
            Urgent Appeal
          </div>

          {/* Stats overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 grid grid-cols-2 gap-4">
              {stats.map(s => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-2xl font-black text-yellow-300 leading-tight">{s.num}</div>
                  <div className="text-white/60 text-[10px] uppercase tracking-widest mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
            <Link href="/donate"
              className="mt-3 flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-lg text-sm transition-all">
              🤍 Donate Now — Every Rupee Counts
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-navy-dark/60 to-transparent pointer-events-none" />
    </section>
  )
}