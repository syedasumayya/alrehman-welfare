const timeline = [
  { year: '2022', event: 'Al Rehman founded by Pakistani youth', icon: '🌱' },
  { year: '2022', event: 'First campaign — ₨50,000 raised in 48 hours', icon: '🎯' },
  { year: '2023', event: 'Orphan Sponsorship launched — 50 children', icon: '👶' },
  { year: '2023', event: 'Partnered with on-ground orgs in Gaza', icon: '🤝' },
  { year: '2024', event: 'Ramadan Relief: ₨200,000 raised', icon: '🕌' },
  { year: '2024', event: '500+ families and 120+ orphans supported', icon: '❤️' },
]

export default function AboutTimeline() {
  return (
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
              <div className="absolute left-0 w-12 h-12 bg-navy rounded-full flex items-center justify-center text-lg z-10">
                {t.icon}
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg px-5 py-4 flex-1">
                <div className="text-green-600 text-[10px] font-bold uppercase tracking-widest mb-0.5">{t.year}</div>
                <div className="text-gray-800 text-sm font-medium">{t.event}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}