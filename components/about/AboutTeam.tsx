const team = [
  { name: 'Aqil Buzdar', role: 'Founder & Lead',        initials: 'AB' },
  { name: 'Team Member', role: 'Campaigns Director',     initials: 'CD' },
  { name: 'Team Member', role: 'Finance & Transparency', initials: 'FT' },
  { name: 'Team Member', role: 'Volunteer Coordinator',  initials: 'VC' },
]

export default function AboutTeam() {
  return (
    <section className="py-20 px-6 bg-navy-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="text-yellow-300 text-xs font-bold uppercase tracking-widest mb-2">The People</div>
          <h2 className="font-display text-4xl font-bold text-white">Our Team</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {team.map(m => (
            <div key={m.name}
              className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-3 text-yellow-300 font-bold text-lg">
                {m.initials}
              </div>
              <div className="font-display font-bold text-white mb-1">{m.name}</div>
              <div className="text-white/40 text-xs">{m.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}