import Link from 'next/link'

const items = [
  { icon: '💰', title: 'Donate Funds',     desc: 'Every rupee goes directly to verified aid.',               href: '/donate',                              cta: 'Donate Now' },
  { icon: '👥', title: 'Volunteer',         desc: 'Join our youth network and help run campaigns.',           href: '/#contact',                            cta: 'Join Us' },
  { icon: '📣', title: 'Spread Awareness', desc: 'Follow us, share campaigns, keep Palestinian voices alive.', href: 'https://instagram.com/alrehmanwelfare', cta: 'Follow Us' },
]

export default function HowToHelp() {
  return (
    <section className="py-20 px-6 bg-navy-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-yellow-300 text-xs font-bold uppercase tracking-widest mb-2">Get Involved</div>
          <h2 className="font-display text-4xl font-bold text-white">Three Ways to Help</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map(item => (
            <div key={item.title} className="bg-white/5 border border-white/10 rounded-xl p-8">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-display text-white font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">{item.desc}</p>
              <Link href={item.href}
                className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm font-bold px-5 py-2.5 rounded transition-colors">
                {item.cta} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}