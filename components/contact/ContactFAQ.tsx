'use client'
import { useState } from 'react'

const faqs = [
  { q: 'How do I know my donation reaches the right people?', a: 'We publish monthly transparency reports with photos, receipts, and beneficiary details. Every rupee is tracked and reported.' },
  { q: 'Can I sponsor a specific child or family?', a: 'Yes! Through our Child Sponsorship Program you can choose to support a specific orphan or family and receive regular updates on their progress.' },
  { q: 'Is my donation Zakat-eligible?', a: 'Yes. Our programs qualify for Zakat. We can provide documentation if needed for your records.' },
  { q: 'How can I volunteer with Al Rehman?', a: 'Fill in the contact form selecting "I want to volunteer" and our team will reach out with current opportunities in your area.' },
  { q: 'Do you operate outside Pakistan?', a: 'Our base is Pakistan but we support needy communities worldwide through verified partner organizations.' },
]

export default function ContactFAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <div className="text-green-600 text-xs font-bold uppercase tracking-widest mb-2">FAQ</div>
          <h2 className="font-display text-4xl font-bold text-navy-dark">Common Questions</h2>
        </div>
        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => (
            <div key={i}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left">
                <span className="font-semibold text-navy-dark text-sm">{f.q}</span>
                <span className={`text-navy text-lg font-bold transition-transform shrink-0 ml-4 ${open === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-3">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}