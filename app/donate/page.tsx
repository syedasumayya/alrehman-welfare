'use client'
import { useState } from 'react'
import Link from 'next/link'

const categories = [
  { id:'food',      label:'Food Donation',      icon:'🍱' },
  { id:'medical',   label:'Medical Aid',         icon:'🏥' },
  { id:'orphan',    label:'Orphan Sponsorship',  icon:'👶' },
  { id:'education', label:'Education Fund',      icon:'📚' },
  { id:'sadqa',     label:'Sadqa e Jariah',      icon:'🤲' },
  { id:'zakat',     label:'Zakat',               icon:'☪️' },
]
const amounts = [500, 1000, 2500, 5000, 10000, 25000]
const paymentMethods = [
  { id:'easypaisa', label:'EasyPaisa' },
  { id:'jazzcash',  label:'JazzCash' },
  { id:'bank',      label:'Bank Transfer' },
]

export default function DonatePage() {
  const [category,    setCategory]    = useState('food')
  const [selectedAmt, setSelectedAmt] = useState(1000)
  const [customAmt,   setCustomAmt]   = useState('')
  const [payment,     setPayment]     = useState('easypaisa')

  const finalAmt = customAmt ? parseInt(customAmt) || 0 : selectedAmt
  const catLabel = categories.find(c => c.id === category)?.label ?? ''

  return (
    <>
      <div className="relative bg-gradient-to-br from-navy-dark via-navy to-blue-700 py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage:'radial-gradient(circle,white 1px,transparent 1px)', backgroundSize:'40px 40px' }} />
        <div className="relative z-10">
          <div className="flex justify-center gap-2 text-yellow-300/60 text-xs mb-3">
            <Link href="/" className="hover:text-yellow-300 transition-colors">Home</Link>
            <span>/</span><span className="text-white/50">Donate</span>
          </div>
          <h1 className="font-display text-5xl font-black text-white mb-3">Donate Now</h1>
          <p className="text-white/70 text-lg max-w-md mx-auto">100% goes to verified Palestine aid. Every rupee accounted for.</p>
        </div>
      </div>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Left */}
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
                ['✅','100% Transparent','Monthly reports published'],
                ['🤝','Verified Partners','On-ground orgs in Gaza'],
                ['🔒','Secure Payments','EasyPaisa, JazzCash & Bank'],
                ['📊','Track Donation','Ask us for direct update'],
              ].map(([icon, title, desc]) => (
                <div key={title} className="bg-white border border-gray-200 rounded-lg p-3.5 text-center">
                  <div className="text-2xl mb-1">{icon}</div>
                  <div className="font-bold text-navy text-xs mb-0.5">{title}</div>
                  <div className="text-gray-400 text-[10px] leading-snug">{desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h3 className="font-display text-2xl font-bold text-navy-dark mb-6">Make a Donation</h3>

            <div className="mb-6">
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">1. Choose Category</label>
              <div className="grid grid-cols-3 gap-2">
                {categories.map(c => (
                  <button key={c.id} onClick={() => setCategory(c.id)}
                    className={`p-3 rounded border text-xs font-semibold transition-all text-center
                      ${category === c.id ? 'bg-navy text-white border-navy' : 'bg-white text-gray-600 border-gray-200 hover:border-navy hover:text-navy'}`}>
                    <div className="text-xl mb-1">{c.icon}</div>{c.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">2. Select Amount (PKR)</label>
              <div className="grid grid-cols-3 gap-2 mb-3">
                {amounts.map(a => (
                  <button key={a} onClick={() => { setSelectedAmt(a); setCustomAmt('') }}
                    className={`py-2.5 rounded border font-bold text-sm transition-all
                      ${selectedAmt === a && !customAmt ? 'bg-navy text-white border-navy' : 'bg-white text-navy border-gray-200 hover:border-navy'}`}>
                    ₨{a.toLocaleString()}
                  </button>
                ))}
              </div>
              <input type="number" placeholder="Or enter custom amount (PKR)"
                value={customAmt}
                onChange={e => { setCustomAmt(e.target.value); setSelectedAmt(0) }}
                className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm outline-none focus:border-navy transition-colors" />
            </div>

            <div className="mb-6">
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">3. Your Details</label>
              {[['Full Name','text','Ahmad Khan'],['Phone / WhatsApp','tel','+92 3xx xxxxxxx'],['Email (optional)','email','your@email.com']].map(([lbl,type,ph]) => (
                <div key={lbl} className="mb-3">
                  <label className="block text-xs text-gray-400 mb-1">{lbl}</label>
                  <input type={type} placeholder={ph}
                    className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm outline-none focus:border-navy transition-colors" />
                </div>
              ))}
            </div>

            <div className="mb-6">
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">4. Payment Method</label>
              <div className="grid grid-cols-3 gap-2">
                {paymentMethods.map(m => (
                  <button key={m.id} onClick={() => setPayment(m.id)}
                    className={`py-2.5 rounded border text-xs font-semibold transition-all
                      ${payment === m.id ? 'bg-green-50 border-green-600 text-green-700' : 'bg-white border-gray-200 text-gray-600 hover:border-green-600'}`}>
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 mb-4">
              <div className="flex justify-between text-sm text-gray-500 mb-1">
                <span>Category</span><strong className="text-navy">{catLabel}</strong>
              </div>
              <div className="flex justify-between text-base font-bold text-navy-dark">
                <span>Total</span><span>₨{finalAmt.toLocaleString()}</span>
              </div>
            </div>

            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded text-sm transition-colors">
              Donate ₨{finalAmt.toLocaleString()} Now →
            </button>
            <p className="text-center text-gray-400 text-xs mt-2">🔒 Secure & Transparent. Monthly impact reports published.</p>
          </div>
        </div>
      </section>
    </>
  )
}