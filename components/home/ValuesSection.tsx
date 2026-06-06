const values = [
  { icon: '🤝', name: 'Unity',       desc: 'Together as one community, supporting those left behind.' },
  { icon: '❤️', name: 'Compassion',  desc: 'Every action guided by genuine care for the vulnerable.' },
  { icon: '🎯', name: 'Impact',      desc: 'Focused programs with real, measurable change on the ground.' },
  { icon: '📢', name: 'Advocacy',    desc: 'Raising voices for orphans, widows, and needy families.' },
]

export default function ValuesSection() {
  return (
    <section className="py-20 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 text-green-600 text-xs font-bold uppercase tracking-widest mb-2">
          <span className="block w-6 h-0.5 bg-green-600" />Our Values
        </div>
        <h2 className="font-display text-4xl font-bold text-navy-dark mb-3">What Drives Us</h2>
        <p className="text-gray-500 mb-10 max-w-lg leading-relaxed">
          Four pillars that shape every program, every campaign, and every act of service we undertake.
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
  )
}