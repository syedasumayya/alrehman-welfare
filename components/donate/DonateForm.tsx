'use client'
import { useState } from 'react'

const categories = [
  { id: 'food',      label: 'Food Donation',     icon: '🍱' },
  { id: 'medical',   label: 'Medical Aid',        icon: '🏥' },
  { id: 'orphan',    label: 'Orphan Sponsorship', icon: '👶' },
  { id: 'education', label: 'Education Fund',     icon: '📚' },
  { id: 'sadqa',     label: 'Sadqa e Jariah',     icon: '🤲' },
  { id: 'zakat',     label: 'Zakat',              icon: '☪️' },
]

const amounts = [500, 1000, 2500, 5000, 10000, 25000]

const paymentMethods = [
  { id: 'easypaisa', label: 'EasyPaisa' },
  { id: 'jazzcash',  label: 'JazzCash' },
  { id: 'bank',      label: 'Bank Transfer' },
]

export default function DonateForm() {
  const [category,    setCategory]    = useState('food')
  const [selectedAmt, setSelectedAmt] = useState(1000)
  const [customAmt,   setCustomAmt]   = useState('')
  const [payment,     setPayment]     = useState('easypaisa')

  const finalAmt = customAmt ? parseInt(customAmt) || 0 : selectedAmt
  const catLabel = categories.find(c => c.id === category)?.label ?? ''

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <h3 className="font-display text-2xl font-bold text-navy-dark mb-6">Make a Donation</h3>

      {/* Step 1 */}
      <div className="mb-6">
        <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
          1. Choose Category
        </label>
        <div className="grid grid-cols-3 gap-2">
          {categories.map(c => (
            <button key={c.id} onClick={() => setCategory(c.id)}
              className={`p-3 rounded border text-xs font-semibold transition-all text-center
                ${category === c.id
                  ? 'bg-navy text-white border-navy'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-navy hover:text-navy'}`}>
              <div className="text-xl mb-1">{c.icon}</div>
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Step 2 */}
      <div className="mb-6">
        <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
          2. Select Amount (PKR)
        </label>
        <div className="grid grid-cols-3 gap-2 mb-3">
          {amounts.map(a => (
            <button key={a} onClick={() => { setSelectedAmt(a); setCustomAmt('') }}
              className={`py-2.5 rounded border font-bold text-sm transition-all
                ${selectedAmt === a && !customAmt
                  ? 'bg-navy text-white border-navy'
                  : 'bg-white text-navy border-gray-200 hover:border-navy'}`}>
              ₨{a.toLocaleString()}
            </button>
          ))}
        </div>
        <input type="number" placeholder="Or enter custom amount (PKR)"
          value={customAmt}
          onChange={e => { setCustomAmt(e.target.value); setSelectedAmt(0) }}
          className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm outline-none focus:border-navy transition-colors" />
      </div>

      {/* Step 3 */}
      <div className="mb-6">
        <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
          3. Your Details
        </label>
        {[
          ['Full Name',        'text',  'Ahmad Khan'],
          ['Phone / WhatsApp', 'tel',   '+92 3xx xxxxxxx'],
          ['Email (optional)', 'email', 'your@email.com'],
        ].map(([lbl, type, ph]) => (
          <div key={lbl} className="mb-3">
            <label className="block text-xs text-gray-400 mb-1">{lbl}</label>
            <input type={type} placeholder={ph}
              className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm outline-none focus:border-navy transition-colors" />
          </div>
        ))}
      </div>

      {/* Step 4 */}
      <div className="mb-6">
        <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
          4. Payment Method
        </label>
        <div className="grid grid-cols-3 gap-2">
          {paymentMethods.map(m => (
            <button key={m.id} onClick={() => setPayment(m.id)}
              className={`py-2.5 rounded border text-xs font-semibold transition-all
                ${payment === m.id
                  ? 'bg-green-50 border-green-600 text-green-700'
                  : 'bg-white border-gray-200 text-gray-600 hover:border-green-600'}`}>
              {m.label}
            </button>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 mb-4">
        <div className="flex justify-between text-sm text-gray-500 mb-1">
          <span>Category</span>
          <strong className="text-navy">{catLabel}</strong>
        </div>
        <div className="flex justify-between text-base font-bold text-navy-dark">
          <span>Total</span>
          <span>₨{finalAmt.toLocaleString()}</span>
        </div>
      </div>

      <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded text-sm transition-colors">
        Donate ₨{finalAmt.toLocaleString()} Now →
      </button>
      <p className="text-center text-gray-400 text-xs mt-2">
        🔒 Secure & Transparent. Monthly impact reports published.
      </p>
    </div>
  )
}