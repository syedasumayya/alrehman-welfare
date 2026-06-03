const values = [
  { icon: '🤝', name: 'Unity',      desc: 'One ummah, one purpose — standing together across borders.' },
  { icon: '❤️', name: 'Compassion', desc: 'Every action driven by sincere care for those suffering.' },
  { icon: '🎯', name: 'Target',     desc: 'Clear goals, measurable results. We deliver.' },
  { icon: '📢', name: 'Action',     desc: 'We mobilize youth, raise funds, ensure aid reaches people.' },
]

export default function AboutValues() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="text-green-600 text-xs font-bold uppercase tracking-widest mb-2">Our Values</div>
          <h2 className="font-display text-4xl font-bold text-navy-dark">What We Stand For</h2>
        </div>
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
  )
}