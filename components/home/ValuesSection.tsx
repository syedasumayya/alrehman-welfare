import {
  FaUsers, FaUtensils, FaChild, FaTint,
  FaHome, FaHospital, FaBook, FaAmbulance
} from 'react-icons/fa'
import Link from 'next/link'

const stats = [
  { Icon: FaUsers,     num: '2,000+',  label: 'Lives Impacted',       bg: 'bg-blue-50',    iconColor: 'text-blue-600' },
  { Icon: FaUtensils,  num: '12,500+', label: 'Food Packs Delivered', bg: 'bg-orange-50',  iconColor: 'text-orange-600' },
  { Icon: FaChild,     num: '500+',    label: 'Orphans Sponsored',    bg: 'bg-amber-50',   iconColor: 'text-amber-600' },
  { Icon: FaTint,      num: '50+',     label: 'Water Projects',       bg: 'bg-cyan-50',    iconColor: 'text-cyan-600' },
  { Icon: FaHome,      num: '120+',    label: 'Families Sheltered',   bg: 'bg-purple-50',  iconColor: 'text-purple-600' },
  { Icon: FaHospital,  num: '15+',     label: 'Free Medical Camps',   bg: 'bg-pink-50',    iconColor: 'text-pink-600' },
  { Icon: FaBook,      num: '800+',    label: 'Children in School',   bg: 'bg-green-50',   iconColor: 'text-green-600' },
  { Icon: FaAmbulance, num: '10+',     label: 'Ambulance Services',   bg: 'bg-red-50',     iconColor: 'text-red-600' },
]

export default function ImpactSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 text-green-600 text-xs font-bold uppercase tracking-widest mb-3">
            <span className="block w-6 h-0.5 bg-green-600" />
            Our Impact
            <span className="block w-6 h-0.5 bg-green-600" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-dark mb-4">
            Our Impact in 2026
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
            Through your generous support, Al Rehman Welfare continues to create lasting change — reaching thousands of orphans, widows, and needy families across Pakistan and beyond.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="group flex items-center gap-4 p-5 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300 bg-white"
            >
              {/* Icon circle */}
              <div className={`w-14 h-14 rounded-2xl ${s.bg} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                <s.Icon className={`${s.iconColor} text-2xl`} />
              </div>

              {/* Text */}
              <div className="min-w-0">
                <div className="font-display text-2xl font-black text-navy-dark leading-tight">
                  {s.num}
                </div>
                <div className="text-gray-500 text-xs font-semibold mt-0.5 leading-tight">
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm mb-5">
            These numbers grow every month — thanks to donors like you.
          </p>
          <Link
            href="/donate"
            className="inline-block bg-navy hover:bg-navy-mid text-white font-bold px-8 py-3.5 rounded-lg text-sm transition-all hover:-translate-y-0.5"
          >
            Add to This Impact →
          </Link>
        </div>

      </div>
    </section>
  )
}