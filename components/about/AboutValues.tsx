import { FaHandshake, FaHeart, FaBullseye, FaBullhorn } from 'react-icons/fa'

const values = [
  {
    Icon: FaHandshake,
    name: 'Unity',
    desc: 'One ummah, one purpose — united across borders.',
    iconBg: 'bg-blue-500',
    accent: 'border-t-blue-500',
  },
  {
    Icon: FaHeart,
    name: 'Compassion',
    desc: 'Every action driven by sincere care for those suffering.',
    iconBg: 'bg-pink-500',
    accent: 'border-t-pink-500',
  },
  {
    Icon: FaBullseye,
    name: 'Target',
    desc: 'Clear goals, measurable results. We commit to action.',
    iconBg: 'bg-amber-500',
    accent: 'border-t-amber-500',
  },
  {
    Icon: FaBullhorn,
    name: 'Action',
    desc: 'We mobilize youth and ensure aid reaches those in need.',
    iconBg: 'bg-green-500',
    accent: 'border-t-green-500',
  },
]

export default function AboutValues() {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 text-green-600 text-[10px] font-bold uppercase tracking-widest mb-2">
            <span className="block w-5 h-0.5 bg-green-600" />
            Our Values
            <span className="block w-5 h-0.5 bg-green-600" />
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-dark mb-2">
            What We Stand For
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Four pillars that shape every act of service we undertake.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {values.map((v) => (
            <div
              key={v.name}
              className={`bg-white border border-gray-200 border-t-2 ${v.accent} rounded-lg p-4 text-center hover:-translate-y-0.5 hover:shadow-md transition-all group`}
            >
              <div className={`w-10 h-10 ${v.iconBg} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                <v.Icon className="text-white text-base" />
              </div>
              <h3 className="font-display font-bold text-navy-dark text-base mb-1">{v.name}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}