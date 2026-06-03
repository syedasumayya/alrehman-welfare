export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-start">

        {/* Info */}
        <div>
          <div className="flex items-center gap-2 text-green-600 text-xs font-bold uppercase tracking-widest mb-2">
            <span className="block w-6 h-0.5 bg-green-600" />Contact
          </div>
          <h2 className="font-display text-4xl font-bold text-navy-dark mb-4">Get in Touch</h2>
          <p className="text-gray-500 leading-relaxed mb-6">
            Want to donate, volunteer, or partner? We reply within 24 hours.
          </p>
          {[
            ['📷', '@alrehmanwelfare'],
            ['✉️', 'contact@alrehmanwelfare.org'],
            ['📱', '+92 300 0000000'],
          ].map(([icon, text]) => (
            <div key={text} className="flex items-center gap-3 text-sm text-gray-600 mb-3">
              <span>{icon}</span>{text}
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="bg-white border border-gray-200 rounded-xl p-7 shadow-sm">
          <h3 className="font-display text-xl font-bold text-navy-dark mb-5">Send a Message</h3>
          {[
            ['Your Name',        'text',  'Ahmad Khan'],
            ['Email / WhatsApp', 'text',  'your@email.com'],
          ].map(([label, type, ph]) => (
            <div key={label} className="mb-4">
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{label}</label>
              <input type={type} placeholder={ph}
                className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm outline-none focus:border-navy transition-colors" />
            </div>
          ))}
          <div className="mb-5">
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Message</label>
            <textarea rows={4} placeholder="How would you like to help?"
              className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm outline-none focus:border-navy transition-colors resize-none" />
          </div>
          <button className="w-full bg-navy hover:bg-navy-mid text-white font-bold py-3 rounded transition-colors">
            Send Message →
          </button>
        </div>
      </div>
    </section>
  )
}