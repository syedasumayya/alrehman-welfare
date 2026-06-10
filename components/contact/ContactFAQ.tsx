'use client'
import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'

const faqs = [
  {
    q: 'How do I know my donation reaches the right people?',
    a: 'We publish monthly transparency reports with photos, receipts, and beneficiary details. Every rupee is tracked and shared with our donors.',
  },
  {
    q: 'Can I sponsor a specific child or family?',
    a: 'Yes! Through our Child Sponsorship Program you can choose to support a specific orphan or family and receive regular updates on their progress.',
  },
  {
    q: 'Is my donation Zakat-eligible?',
    a: 'Yes. Our programs qualify for Zakat. We can provide documentation if needed for your records.',
  },
  {
    q: 'How can I volunteer with Al Rehman?',
    a: 'Fill in the volunteer registration form selecting your area of interest and our team will reach out with current opportunities in your area.',
  },
  {
    q: 'Do you operate outside Pakistan?',
    a: 'Our base is in Pakistan but we support needy communities worldwide through verified partner organizations and global outreach.',
  },
]

export default function ContactFAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="relative py-20 px-6 bg-navy-dark overflow-hidden">

      {/* Decorative background */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      {/* Glowing accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-yellow-300 text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full mb-4">
            <span className="block w-1 h-1 bg-yellow-300 rounded-full" />
            FAQ
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-3">
            Common <span className="text-yellow-300">Questions</span>
          </h2>
          <p className="text-white/50 text-sm md:text-base max-w-lg mx-auto">
            Everything you might want to know before donating or volunteering with us.
          </p>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className={`bg-white/[0.04] border rounded-xl overflow-hidden transition-all duration-300
                  ${isOpen
                    ? 'border-yellow-400/40 bg-white/[0.06]'
                    : 'border-white/10 hover:border-white/20 hover:bg-white/[0.06]'}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left group"
                >
                  <span className={`font-semibold text-sm md:text-base transition-colors
                    ${isOpen ? 'text-yellow-300' : 'text-white group-hover:text-yellow-300'}`}>
                    {f.q}
                  </span>

                  {/* Animated plus icon */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ml-4 transition-all duration-300
                    ${isOpen
                      ? 'bg-yellow-400 rotate-45'
                      : 'bg-white/10 group-hover:bg-white/20'}`}>
                    <FaPlus className={`text-xs transition-colors
                      ${isOpen ? 'text-navy-dark' : 'text-white'}`} />
                  </div>
                </button>

                {/* Answer — smooth slide animation */}
                <div
                  className={`grid transition-all duration-500 ease-in-out
                    ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-5 pt-1 border-t border-white/5">
                      <p className="text-white/70 text-sm leading-relaxed">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        
      </div>
    </section>
  )
}