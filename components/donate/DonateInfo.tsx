export default function DonateInfo() {
  return (
    <div>
      <div className="flex items-center gap-2 text-green-600 text-xs font-bold uppercase tracking-widest mb-2">
        <span className="block w-6 h-0.5 bg-green-600" />Why Donate
      </div>
      <h2 className="font-display text-4xl font-bold text-navy-dark mb-4">Your Money, Their Lifeline</h2>
      <p className="text-gray-500 text-sm leading-relaxed mb-6">
        Channelled through verified on-ground partners in Gaza and West Bank. Monthly impact reports published.
      </p>

      {[
        ['₨300',    'feeds one person for a day'],
        ['₨1,000',  "provides a family's weekly groceries"],
        ['₨5,000',  'sponsors an orphan for one month'],
        ['₨25,000', 'funds an emergency medical kit'],
      ].map(([amt, impact]) => (
        <div key={amt} className="flex items-center gap-4 py-3.5 border-b border-gray-200">
          <span className="bg-navy text-white text-xs font-bold px-3 py-1.5 rounded shrink-0">{amt}</span>
          <span className="text-gray-700 text-sm">{impact}</span>
        </div>
      ))}

      <div className="mt-6 bg-navy rounded-xl p-5">
        <div className="font-arabic text-xl text-yellow-300 mb-1">وَأَنفِقُوا فِي سَبِيلِ اللَّهِ</div>
        <div className="text-white/70 italic text-sm">"Spend in the way of Allah..." — Quran 2:195</div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-6">
        {[
          ['✅', '100% Transparent', 'Monthly reports published'],
          ['🤝', 'Verified Partners', 'On-ground orgs in Gaza'],
          ['🔒', 'Secure Payments',  'EasyPaisa, JazzCash & Bank'],
          ['📊', 'Track Donation',   'Ask us for direct update'],
        ].map(([icon, title, desc]) => (
          <div key={title} className="bg-white border border-gray-200 rounded-lg p-3.5 text-center">
            <div className="text-2xl mb-1">{icon}</div>
            <div className="font-bold text-navy text-xs mb-0.5">{title}</div>
            <div className="text-gray-400 text-[10px] leading-snug">{desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}