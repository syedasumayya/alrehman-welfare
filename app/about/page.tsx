import Link from 'next/link'

const values   = [
  { icon:'🤝', name:'Unity',      desc:'One ummah, one purpose — standing together across borders.' },
  { icon:'❤️', name:'Compassion', desc:'Every action driven by sincere care for those suffering.' },
  { icon:'🎯', name:'Target',     desc:'Clear goals, measurable results. We deliver, not just talk.' },
  { icon:'📢', name:'Action',     desc:'We mobilize youth, raise funds, ensure aid reaches people.' },
]
const timeline = [
  { year:'2022', event:'Al Rehman founded by Pakistani youth', icon:'🌱' },
  { year:'2022', event:'First campaign — ₨50,000 raised in 48 hours', icon:'🎯' },
  { year:'2023', event:'Orphan Sponsorship launched — 50 children', icon:'👶' },
  { year:'2023', event:'Partnered with on-ground orgs in Gaza', icon:'🤝' },
  { year:'2024', event:'Ramadan Relief: ₨200,000 raised', icon:'🕌' },
  { year:'2024', event:'500+ families and 120+ orphans supported', icon:'❤️' },
]
const team = [
  { name:'Aqil Buzdar', role:'Founder & Lead',        initials:'AB' },
  { name:'Team Member', role:'Campaigns Director',     initials:'CD' },
  { name:'Team Member', role:'Finance & Transparency', initials:'FT' },
  { name:'Team Member', role:'Volunteer Coordinator',  initials:'VC' },
]

export default function AboutPage() {
  return (
    <>
      <div className="relative bg-gradient-to-br from-navy-dark via-navy to-blue-700 py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage:'radial-gradient(circle,white 1px,transparent 1px)', backgroundSize:'40px 40px' }} />
        <div className="relative z-10">
          <div className="flex justify-center gap-2 text-yellow-300/60 text-xs mb-3">
            <Link href="/" className="hover:text-yellow-300 transition-colors">Home</Link>
            <span>/</span><span className="text-white/50">About Us</span>
          </div>
          <h1 className="font-display text-5xl font-black text-white mb-3">About Al Rehman</h1>
          <p className="text-white/70 text-lg max-w-md mx-auto">Youth-led. Pakistan-based. Palestine-focused.</p>
        </div>
      </div>

      {/* Story */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 text-green-600 text-xs font-bold uppercase tracking-widest mb-2">
              <span className="block w-6 h-0.5 bg-green-600" />Our Story
            </div>
            <h2 className="font-display text-4xl font-bold text-navy-dark mb-5">We Refused to Look Away</h2>
            {[
              'Al Rehman Welfare was founded by young Pakistanis who refused to look away. Driven by faith, justice, and an unshakeable bond with the Palestinian people, we turned grief into action.',
              'We are not just fundraisers — we are a movement. Our network spans students, professionals, and community leaders united by one belief: that one ordinary person can make an extraordinary difference.',
              'We operate with full transparency, publishing regular impact reports and maintaining verified partnerships with on-ground organizations in Palestine.',
            ].map((p, i) => <p key={i} className="text-gray-600 leading-relaxed mb-4 text-sm">{p}</p>)}
            <Link href="/donate" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded text-sm transition-all mt-2">
              Support Our Mission →
            </Link>
          </div>
          <div className="bg-navy rounded-2xl p-10 text-center">
            <div className="font-arabic text-2xl text-yellow-300 mb-4">القيادة خدمة الإنسانية بقلب</div>
            <p className="text-white/70 italic text-lg leading-relaxed mb-4">"Leadership is serving humanity with heart."</p>
            <p className="text-yellow-400 text-xs uppercase tracking-widest">— Al Rehman Welfare</p>
            <div className="flex justify-center gap-2 mt-7">
              {['#000','#fff','#1a5c2e','#b91c1c'].map((c, i) => (
                <div key={i} style={{ background:c }} className="w-2.5 h-10 rounded-sm border border-white/10" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-green-600 text-xs font-bold uppercase tracking-widest mb-2">Our Values</div>
            <h2 className="font-display text-4xl font-bold text-navy-dark">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {values.map(v => (
              <div key={v.name} className="bg-white border border-gray-200 border-t-4 border-t-navy rounded-lg p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all">
                <div className="text-3xl mb-3">{v.icon}</div>
                <div className="font-display font-bold text-navy mb-1">{v.name}</div>
                <div className="text-gray-500 text-xs leading-relaxed">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-green-600 text-xs font-bold uppercase tracking-widest mb-2">
            <span className="block w-6 h-0.5 bg-green-600" />Our Journey
          </div>
          <h2 className="font-display text-4xl font-bold text-navy-dark mb-10">How We Got Here</h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />
            {timeline.map((t, i) => (
              <div key={i} className="flex gap-6 mb-7 pl-14 relative">
                <div className="absolute left-0 w-12 h-12 bg-navy rounded-full flex items-center justify-center text-lg z-10">{t.icon}</div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg px-5 py-4 flex-1">
                  <div className="text-green-600 text-[10px] font-bold uppercase tracking-widest mb-0.5">{t.year}</div>
                  <div className="text-gray-800 text-sm font-medium">{t.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-navy-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-yellow-300 text-xs font-bold uppercase tracking-widest mb-2">The People</div>
            <h2 className="font-display text-4xl font-bold text-white">Our Team</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {team.map(m => (
              <div key={m.name} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all">
                <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-3 text-yellow-300 font-bold text-lg">{m.initials}</div>
                <div className="font-display font-bold text-white mb-1">{m.name}</div>
                <div className="text-white/40 text-xs">{m.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}