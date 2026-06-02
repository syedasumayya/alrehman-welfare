import Link from 'next/link'

const projects = [
  { emoji:'🍱', tag:'Food Aid',  title:'Emergency Food Packages',   desc:'Delivering nutritious food to displaced families across Gaza and West Bank.', raised:85000,  goal:100000, pct:85,  urgent:true },
  { emoji:'🏥', tag:'Medical',   title:'Medical Supply Drive',       desc:'Funding medicine and surgical supplies through trusted medical teams.',        raised:42000,  goal:60000,  pct:70,  urgent:false },
  { emoji:'👶', tag:'Orphan',    title:'Orphan Sponsorship Program', desc:'Monthly sponsorships for food, clothing, education and wellbeing.',            raised:120000, goal:150000, pct:80,  urgent:false },
  { emoji:'📚', tag:'Education', title:'Education Continuity Fund',  desc:'Scholarships and digital learning support for Palestinian children.',          raised:30000,  goal:75000,  pct:40,  urgent:true },
  { emoji:'🕌', tag:'Ramadan',   title:'Ramadan Relief 2024',        desc:'Iftar, suhoor, and zakat-eligible packages for vulnerable families.',           raised:200000, goal:200000, pct:100, urgent:false },
  { emoji:'🏠', tag:'Shelter',   title:'Emergency Shelter Support',  desc:'Tents, blankets, and shelter materials for displaced families.',               raised:55000,  goal:120000, pct:46,  urgent:true },
]

const filters = ['All','Food Aid','Medical','Orphan','Education','Ramadan','Shelter']

export default function ProjectsPage() {
  return (
    <>
      <div className="relative bg-gradient-to-br from-navy-dark via-navy to-blue-700 py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage:'radial-gradient(circle,white 1px,transparent 1px)', backgroundSize:'40px 40px' }} />
        <div className="relative z-10">
          <div className="flex justify-center gap-2 text-yellow-300/60 text-xs mb-3">
            <Link href="/" className="hover:text-yellow-300 transition-colors">Home</Link>
            <span>/</span><span className="text-white/50">Projects</span>
          </div>
          <h1 className="font-display text-5xl font-black text-white mb-3">Our Projects</h1>
          <p className="text-white/70 text-lg max-w-md mx-auto">Every campaign is a lifeline. Choose where your donation goes.</p>
        </div>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f, i) => (
              <button key={f} className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all
                ${i === 0 ? 'bg-navy text-white border-navy' : 'text-gray-500 border-gray-200 hover:border-navy hover:text-navy'}`}>
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map(p => (
              <div key={p.title} className="relative bg-white border border-gray-200 rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all">
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
                    <div className="bg-green-500 h-1.5 rounded-full" style={{ width:`${p.pct}%` }} />
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
        <div className="font-arabic text-2xl text-yellow-300 mb-1">لَن تَنَالُوا الْبِرَّ حَتَّىٰ تُنفِقُوا مِمَّا تُحِبُّونَ</div>
        <div className="text-white/70 italic text-sm mb-1">"You will never attain righteousness until you donate from what you cherish."</div>
        <div className="text-white/30 text-xs mb-6">— Quran 3:92</div>
        <Link href="/donate" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3.5 rounded text-sm transition-all">
          Start Your Donation →
        </Link>
      </div>
    </>
  )
}