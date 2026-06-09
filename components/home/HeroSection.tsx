import Link from 'next/link'

const stats = [
  { num: '2,000+', label: 'Families Helped' },
  { num: '₨5M+',  label: 'Aid Distributed' },
  { num: '500+',  label: 'Orphans Sponsored' },
  { num: '30K+',  label: 'Lives Impacted' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">

      {/* ── BACKGROUND VIDEO ── */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/herovideo.mp4" type="video/mp4" />
        </video>

        {/* Lighter overlay — video clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/85 via-navy-dark/60 to-transparent" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* ── CONTENT ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">

        {/* Left — Text (over dark overlay) */}
        <div>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-yellow-300 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            🌍 Al Rehman Welfare — Pakistan & Worldwide
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-black text-white leading-tight mb-5 drop-shadow-lg">
            Helping Those<br />
            <span className="text-yellow-300">Who Need It</span><br />
            Most.
          </h1>
          <p className="text-white/90 text-lg leading-relaxed mb-4 max-w-md drop-shadow">
            A youth-led welfare organization supporting orphans, widows, and needy families across Pakistan and beyond.
          </p>
          <div className="flex items-center gap-2 mb-8">
            <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-red-300 text-sm font-semibold drop-shadow">
              Thousands of families need your help right now
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/donate"
              className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded font-bold text-base transition-all hover:-translate-y-0.5 shadow-lg shadow-green-900/50">
              Donate Today →
            </Link>
            <Link href="/projects"
              className="bg-white/10 backdrop-blur border border-white/30 hover:border-white text-white px-8 py-4 rounded font-semibold text-base transition-all hover:bg-white/20">
              See Our Projects
            </Link>
          </div>
          <p className="text-white/70 text-xs mt-5 drop-shadow">
            🔒 100% transparent · Verified partners · Monthly reports
          </p>
        </div>

        {/* Right — Glass Stats Card (transparent — video shows through) */}
        <div className="relative">

          {/* Urgent badge */}
          <div className="absolute -top-3 right-4 z-20 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse inline-block" />
            Urgent Need
          </div>

          {/* Glass card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl">

            {/* Heading */}
            <div className="text-center mb-5">
              <div className="text-yellow-300 text-[10px] font-bold uppercase tracking-widest mb-1">
                Our Impact
              </div>
              <h3 className="font-display text-xl font-bold text-white">
                Your Support Changes Lives
              </h3>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              {stats.map(s => (
                <div
                  key={s.label}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all"
                >
                  <div className="font-display text-3xl font-black text-yellow-300 leading-tight drop-shadow">
                    {s.num}
                  </div>
                  <div className="text-white/70 text-[10px] uppercase tracking-widest mt-1 font-semibold">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/donate"
              className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3.5 rounded-lg text-sm transition-all hover:-translate-y-0.5 shadow-lg shadow-green-900/40"
            >
              🤍 Donate Now — Every Rupee Counts
            </Link>

            {/* Trust line */}
            <p className="text-center text-white/50 text-[10px] mt-3">
              🔒 Secure · Verified · Transparent
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}