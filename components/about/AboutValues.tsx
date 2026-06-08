import { FaHandshake, FaHeart, FaBullseye, FaBullhorn } from 'react-icons/fa'

const values = [
  {
    Icon: FaHandshake,
    name: 'Unity',
    desc: 'One ummah, one purpose — standing together across borders.',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    border: 'border-t-blue-500',
  },
  {
    Icon: FaHeart,
    name: 'Compassion',
    desc: 'Every action driven by sincere care for those suffering.',
    iconBg: 'bg-pink-50',
    iconColor: 'text-pink-600',
    border: 'border-t-pink-500',
  },
  {
    Icon: FaBullseye,
    name: 'Target',
    desc: 'Clear goals, measurable results. We deliver.',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    border: 'border-t-amber-500',
  },
  {
    Icon: FaBullhorn,
    name: 'Action',
    desc: 'We mobilize youth, raise funds, ensure aid reaches people.',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
    border: 'border-t-green-500',
  },
]

export default function AboutValues() {
  return (
    <section className="py-14 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 text-green-600 text-xs font-bold uppercase tracking-widest mb-3">
            <span className="block w-6 h-0.5 bg-green-600" />
            Our Values
            <span className="block w-6 h-0.5 bg-green-600" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-dark mb-3">
            What We Stand For
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
            Four pillars that shape every program, every campaign, and every act of service we undertake.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((v) => (
            <div
              key={v.name}
              className={`bg-white border border-gray-200 border-t-4 ${v.border} rounded-xl p-5 text-center hover:-translate-y-1 hover:shadow-lg transition-all group`}
            >
              <div className={`w-12 h-12 ${v.iconBg} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                <v.Icon className={`${v.iconColor} text-xl`} />
              </div>
              <h3 className="font-display font-bold text-navy-dark mb-1">{v.name}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}