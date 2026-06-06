import Link from 'next/link'
import { FaHandHoldingHeart, FaDonate, FaHandsHelping } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'

const items = [
  {
    number: '01',
    Icon: FaHandHoldingHeart,
    title: 'One-Time Donation',
    desc: 'Make a single donation toward any of our active programs.',
    href: '/donate',
    cta: 'Donate Now',
    accent: 'from-green-500 to-emerald-600',
  },
  {
    number: '02',
    Icon: FaDonate,
    title: 'Donate Funds',
    desc: 'Become a regular donor and create lasting, ongoing impact.',
    href: '/donate',
    cta: 'Donate Funds',
    accent: 'from-yellow-400 to-amber-500',
    featured: true,
  },
  {
    number: '03',
    Icon: FaHandsHelping,
    title: 'Volunteer With Us',
    desc: 'Join our youth team on the ground and create real change.',
    href: '/volunteer',
    cta: 'Volunteer Now',
    accent: 'from-blue-500 to-indigo-600',
  },
]

export default function HowToHelp() {
  return (
    <section className="relative py-16 px-6 bg-navy-dark overflow-hidden">

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-yellow-400/5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-yellow-300 text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full mb-4">
            <span className="block w-1 h-1 bg-yellow-300 rounded-full" />
            Get Involved
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
            Three Ways to <span className="text-yellow-300">Make a Difference</span>
          </h2>
          <p className="text-white/50 text-sm max-w-lg mx-auto leading-relaxed">
            Whether you give your wealth, your time, or your voice — every contribution creates real change.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((item) => (
            <div
              key={item.title}
              className={`group relative bg-white/[0.03] border ${item.featured ? 'border-yellow-300/30' : 'border-white/10'} rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.06] hover:border-white/20`}
            >
              {/* Featured ribbon */}
              {item.featured && (
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-amber-500 text-navy-dark text-[9px] font-black uppercase tracking-widest px-3 py-0.5 rounded-full shadow-lg">
                  Most Impactful
                </div>
              )}

              {/* Number badge */}
              <div className="absolute top-4 right-4 font-display text-2xl font-black text-white/[0.06] group-hover:text-white/[0.1] transition-colors">
                {item.number}
              </div>

              {/* Icon */}
              <div className={`relative inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${item.accent} mb-4 shadow-lg group-hover:scale-110 transition-all duration-300`}>
                <item.Icon className="text-white text-lg" />
                <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} rounded-xl blur-lg opacity-40 -z-10`} />
              </div>

              {/* Title */}
              <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-white/50 text-sm leading-relaxed mb-5">
                {item.desc}
              </p>

              {/* CTA */}
              <Link
                href={item.href}
                className="group/btn inline-flex items-center justify-center gap-2 text-white font-semibold text-xs py-2.5 px-4 rounded-lg border border-white/15 hover:bg-white hover:text-navy-dark transition-all duration-200 w-full"
              >
                {item.cta}
                <HiArrowRight className="text-sm group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-8 pt-6 border-t border-white/5">
          <p className="text-white/40 text-xs">
            Not sure where to start?{' '}
            <Link href="/contact" className="text-yellow-300 hover:text-yellow-200 font-semibold underline underline-offset-2 decoration-yellow-300/30 hover:decoration-yellow-300 transition-colors">
              Get in touch
            </Link>
            {' '}— we'll help you find the best way to contribute.
          </p>
        </div>

      </div>
    </section>
  )
}