'use client'
import { useState } from 'react'

const interests = [
  'Field work (aid distribution)',
  'Event organization',
  'Social media & marketing',
  'Fundraising campaigns',
  'Photography / videography',
  'Teaching / tutoring',
  'Administrative help',
  'Other',
]

const availability = ['Weekends only', 'Evenings only', 'Flexible', 'Remote only', 'Full-time']

export default function VolunteerForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', phone: '', city: '', age: '', occupation: '',
    interest: '', availability: '', experience: '', motivation: ''
  })

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  if (submitted) {
    return (
      <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-sm text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">🤝</span>
        </div>
        <h3 className="font-display text-2xl font-bold text-navy-dark mb-2">Welcome to the Team!</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          Thank you for signing up to volunteer with Al Rehman Welfare. Our team will reach out within 48 hours, in sha Allah.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name:'', email:'', phone:'', city:'', age:'', occupation:'', interest:'', availability:'', experience:'', motivation:'' }) }}
          className="bg-navy text-white px-6 py-2.5 rounded text-sm font-semibold hover:bg-navy-mid transition-colors">
          Register Someone Else
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <h3 className="font-display text-2xl font-bold text-navy-dark mb-1">Volunteer Registration</h3>
      <p className="text-gray-400 text-xs mb-6">Fields marked with * are required</p>

      {/* Personal Info */}
      <div className="mb-6">
        <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
          Personal Information
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input name="name" value={form.name} onChange={handle} type="text" placeholder="Full Name *"
            className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-navy transition-colors" />
          <input name="age" value={form.age} onChange={handle} type="number" placeholder="Age *"
            className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-navy transition-colors" />
          <input name="email" value={form.email} onChange={handle} type="email" placeholder="Email *"
            className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-navy transition-colors" />
          <input name="phone" value={form.phone} onChange={handle} type="tel" placeholder="Phone / WhatsApp *"
            className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-navy transition-colors" />
          <input name="city" value={form.city} onChange={handle} type="text" placeholder="City *"
            className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-navy transition-colors" />
          <input name="occupation" value={form.occupation} onChange={handle} type="text" placeholder="Occupation / Student"
            className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-navy transition-colors" />
        </div>
      </div>

      {/* Interest */}
      <div className="mb-4">
        <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
          Area of Interest *
        </label>
        <select name="interest" value={form.interest} onChange={handle}
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-navy transition-colors bg-white">
          <option value="">Select what you'd like to help with...</option>
          {interests.map(i => <option key={i} value={i}>{i}</option>)}
        </select>
      </div>

      {/* Availability */}
      <div className="mb-4">
        <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
          Availability *
        </label>
        <select name="availability" value={form.availability} onChange={handle}
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-navy transition-colors bg-white">
          <option value="">When can you volunteer?</option>
          {availability.map(a => <option key={a} value={a}>{a}</option>)}
        </select>
      </div>

      {/* Experience */}
      <div className="mb-4">
        <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
          Previous Volunteer Experience
        </label>
        <textarea name="experience" value={form.experience} onChange={handle} rows={3}
          placeholder="Any previous experience with charity, community work, or volunteering... (optional)"
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-navy transition-colors resize-none" />
      </div>

      {/* Motivation */}
      <div className="mb-6">
        <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
          Why Do You Want to Volunteer? *
        </label>
        <textarea name="motivation" value={form.motivation} onChange={handle} rows={4}
          placeholder="Tell us what motivates you to help others..."
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-navy transition-colors resize-none" />
      </div>

      <button
        onClick={() => {
          if (form.name && form.email && form.phone && form.city && form.age && form.interest && form.availability && form.motivation) {
            setSubmitted(true)
          }
        }}
        className="w-full bg-navy hover:bg-navy-mid text-white font-bold py-3.5 rounded-lg transition-colors text-sm">
        Submit Registration →
      </button>
      <p className="text-center text-gray-400 text-xs mt-3">
        We'll reach out within 48 hours, in sha Allah.
      </p>
    </div>
  )
}