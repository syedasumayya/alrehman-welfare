import Link from 'next/link'

export default function AboutStory() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex items-center gap-2 text-green-600 text-xs font-bold uppercase tracking-widest mb-2">
            <span className="block w-6 h-0.5 bg-green-600" />Our Story
          </div>
          <h2 className="font-display text-4xl font-bold text-navy-dark mb-5">Born from Empathy. Built on Action.</h2>
          {[
            'Al Rehman Welfare was founded by a group of young Pakistanis who saw suffering around them and chose to do something about it. From orphaned children to flood victims and struggling widows — we believe no one should be left behind.',
            'We are not just a charity — we are a community movement. Our network of volunteers, donors, and partner organizations spans across Pakistan and connects with global supporters who share our belief in human dignity.',
            'We operate with complete transparency, publishing monthly impact reports so every donor knows exactly how their money is changing lives.',
          ].map((p, i) => (
            <p key={i} className="text-gray-600 leading-relaxed mb-4 text-sm">{p}</p>
          ))}
          <Link href="/donate"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded text-sm transition-all mt-2">
            Support Our Mission →
          </Link>
        </div>
        <div className="bg-navy rounded-2xl p-10 text-center">
          <div className="font-arabic text-2xl text-yellow-300 mb-4">خَيرُ النَّاسِ أَنفَعُهُم لِلنَّاس</div>
          <p className="text-white/70 italic text-lg leading-relaxed mb-4">
            "The best of people are those who are most beneficial to others."
          </p>
          <p className="text-yellow-400 text-xs uppercase tracking-widest">— Prophet Muhammad ﷺ</p>
          <div className="grid grid-cols-2 gap-4 mt-8">
            {[
              { num: '2,000+', label: 'Families Helped' },
              { num: '500+',  label: 'Orphans Sponsored' },
              { num: '₨5M+', label: 'Aid Distributed' },
              { num: '6+',   label: 'Years of Service' },
            ].map(s => (
              <div key={s.label} className="bg-white/10 rounded-lg p-3 text-center">
                <div className="font-display text-xl font-black text-yellow-300">{s.num}</div>
                <div className="text-white/50 text-[10px] uppercase tracking-widest mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}