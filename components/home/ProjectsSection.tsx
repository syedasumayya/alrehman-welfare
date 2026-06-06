import Link from 'next/link'

const projects = [
  { emoji: '🍱', tag: 'Food Aid',   title: 'Monthly Ration Packages',    desc: 'Delivering monthly dry ration bags to widows and needy families across Pakistan.',  raised: 185000, goal: 200000, pct: 92 },
  { emoji: '👶', tag: 'Orphan',     title: 'Orphan Sponsorship Program', desc: 'Full monthly care — food, clothes, education — for orphaned children in need.',      raised: 320000, goal: 400000, pct: 80 },
  { emoji: '🏫', tag: 'Education',  title: 'School Fee Assistance',      desc: 'Paying school fees for children of widows and ultra-poor families to keep them in school.', raised: 95000, goal: 150000, pct: 63 },
]

export default function ProjectsSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end flex-wrap gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-green-600 text-xs font-bold uppercase tracking-widest mb-2">
              <span className="block w-6 h-0.5 bg-green-600" />Active Campaigns
            </div>
            <h2 className="font-display text-4xl font-bold text-navy-dark">Programs That Need You</h2>
          </div>
          <Link href="/projects"
            className="border border-navy text-navy px-5 py-2.5 rounded text-sm font-semibold hover:bg-navy hover:text-white transition-all">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map(p => (
            <div key={p.title}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all">
              <div className="h-44 bg-gray-100 flex items-center justify-center text-5xl">{p.emoji}</div>
              <div className="p-5">
                <span className="inline-block bg-navy/10 text-navy text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded mb-2">{p.tag}</span>
                <h3 className="font-display font-bold text-navy-dark text-lg mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">{p.desc}</p>
                <div className="bg-gray-100 rounded-full h-1.5 mb-2">
                  <div className="bg-green-500 h-1.5 rounded-full" style={{ width: `${p.pct}%` }} />
                </div>
                <div className="flex justify-between text-xs text-gray-500 mb-4">
                  <span>Raised: <strong className="text-navy">₨{p.raised.toLocaleString()}</strong></span>
                  <span>{p.pct}%</span>
                </div>
                <Link href="/donate"
                  className="block text-center bg-green-600 hover:bg-green-700 text-white text-sm font-bold py-2.5 rounded transition-colors">
                  Donate to This →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}