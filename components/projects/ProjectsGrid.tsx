import Link from 'next/link'

const projects = [
  { emoji: '🍱', tag: 'Food Aid',   title: 'Monthly Ration Drive',         desc: 'Monthly dry ration bags for widows and ultra-poor families across Pakistan.',          raised: 185000, goal: 200000, pct: 92,  urgent: false },
  { emoji: '👶', tag: 'Orphan',     title: 'Orphan Sponsorship Program',   desc: 'Full monthly care — food, clothing, and education — for orphaned children.',          raised: 320000, goal: 400000, pct: 80,  urgent: true },
  { emoji: '🏫', tag: 'Education',  title: 'School Fee Assistance',        desc: 'Paying school fees for children of widows and ultra-poor families.',                  raised: 95000,  goal: 150000, pct: 63,  urgent: true },
  { emoji: '🏥', tag: 'Medical',    title: 'Free Medical Camp',            desc: 'Organizing free medical checkups, medicine, and consultations in underserved areas.',  raised: 60000,  goal: 100000, pct: 60,  urgent: false },
  { emoji: '💧', tag: 'Water',      title: 'Clean Water Project',          desc: 'Installing hand pumps and water filtration units in rural villages.',                  raised: 200000, goal: 200000, pct: 100, urgent: false },
  { emoji: '🏠', tag: 'Shelter',    title: 'Flood Victims Relief',         desc: 'Emergency shelter, blankets, and meals for flood-affected families in Pakistan.',      raised: 75000,  goal: 180000, pct: 42,  urgent: true },
]

const filters = ['All', 'Food Aid', 'Orphan', 'Education', 'Medical', 'Water', 'Shelter']

export default function ProjectsGrid() {
  return (
    <>
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f, i) => (
              <button key={f}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all
                  ${i === 0 ? 'bg-navy text-white border-navy' : 'text-gray-500 border-gray-200 hover:border-navy hover:text-navy'}`}>
                {f}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map(p => (
              <div key={p.title}
                className="relative bg-white border border-gray-200 rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all">
                {p.urgent && p.pct < 100 && (
                  <span className="absolute top-3 right-3 z-10 bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">Urgent</span>
                )}
                {p.pct === 100 && (
                  <span className="absolute top-3 right-3 z-10 bg-green-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">Completed</span>
                )}
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
                    <span>Goal: ₨{p.goal.toLocaleString()}</span>
                  </div>
                  {p.pct < 100
                    ? <Link href="/donate" className="block text-center bg-green-600 hover:bg-green-700 text-white text-sm font-bold py-2.5 rounded transition-colors">Donate to This →</Link>
                    : <div className="text-center bg-gray-100 text-green-700 font-bold text-sm py-2.5 rounded">✓ Goal Reached — Thank You!</div>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-navy py-14 px-6 text-center">
        <div className="font-arabic text-2xl text-yellow-300 mb-1">مَن ذَا الَّذِي يُقْرِضُ اللَّهَ قَرْضًا حَسَنًا</div>
        <div className="text-white/70 italic text-sm mb-1">"Who will lend to Allah a good loan so He may multiply it for them many times over?"</div>
        <div className="text-white/30 text-xs mb-6">— Quran 2:245</div>
        <Link href="/donate" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3.5 rounded text-sm transition-all">
          Donate Now →
        </Link>
      </div>
    </>
  )
}