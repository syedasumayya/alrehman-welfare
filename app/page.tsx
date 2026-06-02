import Link from 'next/link'

const stats = [
  { num:'500+',  label:'Families Supported' },
  { num:'₨2M+', label:'Aid Raised' },
  { num:'120+', label:'Orphans Sponsored' },
  { num:'15K+', label:'Youth Mobilized' },
]

const values = [
  { icon:'🤝', name:'Unity',      desc:'One ummah, one purpose, one voice.' },
  { icon:'❤️', name:'Compassion', desc:'Every action driven by sincere care.' },
  { icon:'🎯', name:'Target',     desc:'Clear goals, measurable impact.' },
  { icon:'📢', name:'Action',     desc:'We mobilize, raise, and deliver.' },
]

const projects = [
  { emoji:'🍱', tag:'Food Aid', title:'Emergency Food Packages',   desc:'Delivering nutritious food to displaced families across Gaza.', raised:85000,  goal:100000, pct:85 },
  { emoji:'🏥', tag:'Medical',  title:'Medical Supply Drive',       desc:'Funding medicine and equipment through verified medical teams.', raised:42000,  goal:60000,  pct:70 },
  { emoji:'👶', tag:'Orphan',   title:'Orphan Sponsorship Program', desc:'Monthly care covering food, clothing and education.',            raised:120000, goal:150000, pct:80 },
]

const howToHelp = [
  { icon:'💰', title:'Donate Funds',     desc:'Every rupee goes directly to verified aid.',              href:'/donate',   cta:'Donate Now' },
  { icon:'👥', title:'Volunteer',         desc:'Join our youth network and help run campaigns.',           href:'/#contact', cta:'Join Us' },
  { icon:'📣', title:'Spread Awareness', desc:'Follow us, share campaigns, keep Palestinian voices alive.',href:'https://instagram.com/alrehmanwelfare', cta:'Follow Us' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-dark via-navy to-blue-700 min-h-[88vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage:'radial-gradient(circle,white 1px,transparent 1px)', backgroundSize:'40px 40px' }} />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-yellow-300 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              🇵🇸 Al Rehman Welfare — Pakistan
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-black text-white leading-tight mb-5">
              Stand With<br />
              <span className="text-yellow-300">Palestine.</span><br />
              Act With Heart.
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-md">
              A youth-led organization from Pakistan driven by purpose, compassion, and action.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/donate"
                className="bg-green-600 hover:bg-green-700 text-white px-7 py-3.5 rounded font-bold text-sm transition-all hover:-translate-y-0.5">
                Donate Today →
              </Link>
              <Link href="/projects"
                className="border border-white/30 hover:border-white text-white px-7 py-3.5 rounded font-semibold text-sm transition-all hover:bg-white/10">
                See Our Projects
              </Link>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur border border-white/10 rounded-xl p-8 grid grid-cols-2 gap-8">
            {stats.map(s => (
              <div key={s.label}>
                <div className="font-display text-4xl font-black text-yellow-300">{s.num}</div>
                <div className="text-white/50 text-xs uppercase tracking-widest mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-green-600 text-xs font-bold uppercase tracking-widest mb-2">
            <span className="block w-6 h-0.5 bg-green-600" />Our Values
          </div>
          <h2 className="font-display text-4xl font-bold text-navy-dark mb-3">What Drives Us</h2>
          <p className="text-gray-500 mb-10 max-w-lg leading-relaxed">
            Built on four pillars that guide every campaign, every donation, every action.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {values.map(v => (
              <div key={v.name}
                className="bg-white border border-gray-200 border-t-4 border-t-navy rounded-lg p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all">
                <div className="text-3xl mb-3">{v.icon}</div>
                <div className="font-display font-bold text-navy mb-1">{v.name}</div>
                <div className="text-gray-500 text-xs leading-relaxed">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quran Band */}
      <div className="bg-navy py-10 px-6 text-center">
        <div className="font-arabic text-2xl text-yellow-300 mb-1">وَمَن يَنصُرُ اللَّهَ يَنصُرْهُ</div>
        <div className="text-white/70 italic text-sm">"And whoever supports the cause of Allah — He will support them."</div>
        <div className="text-white/30 text-xs mt-1">— Quran 47:7</div>
      </div>

      {/* Projects */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end flex-wrap gap-4 mb-10">
            <div>
              <div className="flex items-center gap-2 text-green-600 text-xs font-bold uppercase tracking-widest mb-2">
                <span className="block w-6 h-0.5 bg-green-600" />Active Campaigns
              </div>
              <h2 className="font-display text-4xl font-bold text-navy-dark">Projects That Need You</h2>
            </div>
            <Link href="/projects" className="border border-navy text-navy px-5 py-2.5 rounded text-sm font-semibold hover:bg-navy hover:text-white transition-all">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map(p => (
              <div key={p.title} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all">
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
                    <span>{p.pct}%</span>
                  </div>
                  <Link href="/donate" className="block text-center bg-green-600 hover:bg-green-700 text-white text-sm font-bold py-2.5 rounded transition-colors">
                    Donate to This →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Help */}
      <section className="py-20 px-6 bg-navy-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-yellow-300 text-xs font-bold uppercase tracking-widest mb-2">Get Involved</div>
            <h2 className="font-display text-4xl font-bold text-white">Three Ways to Help</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {howToHelp.map(item => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-xl p-8">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-display text-white font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">{item.desc}</p>
                <Link href={item.href} className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm font-bold px-5 py-2.5 rounded transition-colors">
                  {item.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          <div>
            <div className="flex items-center gap-2 text-green-600 text-xs font-bold uppercase tracking-widest mb-2">
              <span className="block w-6 h-0.5 bg-green-600" />Contact
            </div>
            <h2 className="font-display text-4xl font-bold text-navy-dark mb-4">Get in Touch</h2>
            <p className="text-gray-500 leading-relaxed mb-6">Want to donate, volunteer, or partner? We reply within 24 hours.</p>
            {[['📷','@alrehmanwelfare'],['✉️','contact@alrehmanwelfare.org'],['📱','+92 300 0000000']].map(([icon, text]) => (
              <div key={text} className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                <span>{icon}</span>{text}
              </div>
            ))}
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-7 shadow-sm">
            <h3 className="font-display text-xl font-bold text-navy-dark mb-5">Send a Message</h3>
            {[['Your Name','text','Ahmad Khan'],['Email / WhatsApp','text','your@email.com']].map(([label, type, ph]) => (
              <div key={label} className="mb-4">
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{label}</label>
                <input type={type} placeholder={ph}
                  className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm outline-none focus:border-navy transition-colors" />
              </div>
            ))}
            <div className="mb-5">
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Message</label>
              <textarea rows={4} placeholder="How would you like to help?"
                className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm outline-none focus:border-navy transition-colors resize-none" />
            </div>
            <button className="w-full bg-navy hover:bg-navy-mid text-white font-bold py-3 rounded transition-colors">
              Send Message →
            </button>
          </div>
        </div>
      </section>
    </>
  )
}