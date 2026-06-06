'use client'
import { useState } from 'react'

const reasons = [
  'I want to donate',
  'I want to volunteer',
  'I want to sponsor a child',
  'I want to partner / collaborate',
  'Media / Press inquiry',
  'General question',
]

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', reason: '', message: '' })

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  if (submitted) {
    return (
      <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-sm text-center">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="font-display text-2xl font-bold text-navy-dark mb-2">Message Sent!</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          Thank you for reaching out. Our team will get back to you within 24 hours, in sha Allah.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', reason: '', message: '' }) }}
          className="bg-navy text-white px-6 py-2.5 rounded text-sm font-semibold hover:bg-navy-mid transition-colors">
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <h3 className="font-display text-2xl font-bold text-navy-dark mb-6">Send a Message</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Full Name *</label>
          <input name="name" value={form.name} onChange={handle} type="text" placeholder="Ahmad Khan"
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-navy transition-colors" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Phone</label>
          <input name="phone" value={form.phone} onChange={handle} type="tel" placeholder="+92 3xx xxxxxxx"
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-navy transition-colors" />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Email *</label>
        <input name="email" value={form.email} onChange={handle} type="email" placeholder="your@email.com"
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-navy transition-colors" />
      </div>

      <div className="mb-4">
        <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Reason for Contact *</label>
        <select name="reason" value={form.reason} onChange={handle}
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-navy transition-colors bg-white text-gray-700">
          <option value="">Select a reason...</option>
          {reasons.map(r => <option key={r} value={r}>{r}</option>)}
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Message *</label>
        <textarea name="message" value={form.message} onChange={handle} rows={5}
          placeholder="Tell us how we can help or how you'd like to get involved..."
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-navy transition-colors resize-none" />
      </div>

      <button
        onClick={() => { if (form.name && form.email && form.message) setSubmitted(true) }}
        className="w-full bg-navy hover:bg-navy-mid text-white font-bold py-3.5 rounded-lg transition-colors text-sm">
        Send Message →
      </button>
      <p className="text-center text-gray-400 text-xs mt-2">We reply within 24 hours, in sha Allah.</p>
    </div>
  )
}