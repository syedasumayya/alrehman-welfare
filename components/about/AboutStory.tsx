import Link from 'next/link'

export default function AboutStory() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex items-center gap-2 text-green-600 text-xs font-bold uppercase tracking-widest mb-2">
            <span className="block w-6 h-0.5 bg-green-600" />Our Story
          </div>
          <h2 className="font-display text-4xl font-bold text-navy-dark mb-5">We Refused to Look Away</h2>
          {[
            'Al Rehman Welfare was founded by young Pakistanis who refused to look away. Driven by faith, justice, and an unshakeable bond with the Palestinian people, we turned grief into action.',
            'We are not just fundraisers — we are a movement. Our network spans students, professionals, and community leaders united by one belief: that one ordinary person can make an extraordinary difference.',
            'We operate with full transparency, publishing regular impact reports and maintaining verified partnerships with on-ground organizations in Palestine.',
          ].map((p, i) => (
            <p key={i} className="text-gray-600 leading-relaxed mb-4 text-sm">{p}</p>
          ))}
          <Link href="/donate"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded text-sm transition-all mt-2">
            Support Our Mission →
          </Link>
        </div>

        <div className="bg-navy rounded-2xl p-10 text-center">
          <div className="font-arabic text-2xl text-yellow-300 mb-4">القيادة خدمة الإنسانية بقلب</div>
          <p className="text-white/70 italic text-lg leading-relaxed mb-4">
            "Leadership is serving humanity with heart."
          </p>
          <p className="text-yellow-400 text-xs uppercase tracking-widest">— Al Rehman Welfare</p>
          <div className="flex justify-center gap-2 mt-7">
            {['#000', '#fff', '#1a5c2e', '#b91c1c'].map((c, i) => (
              <div key={i} style={{ background: c }}
                className="w-2.5 h-10 rounded-sm border border-white/10" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}