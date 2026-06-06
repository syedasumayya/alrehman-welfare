const contacts = [
  { icon: '📍', label: 'Address',   value: 'Rawalpindi, Punjab, Pakistan' },
  { icon: '✉️', label: 'Email',     value: 'contact@alrehmanwelfare.org' },
  { icon: '📱', label: 'Phone',     value: '+92 300 0000000' },
  { icon: '📷', label: 'Instagram', value: '@alrehmanwelfare' },
  { icon: '🕐', label: 'Hours',     value: 'Mon – Sat, 9am – 6pm PKT' },
]

export default function ContactInfo() {
  return (
    <div>
      <div className="flex items-center gap-2 text-green-600 text-xs font-bold uppercase tracking-widest mb-2">
        <span className="block w-6 h-0.5 bg-green-600" />Get in Touch
      </div>
      <h2 className="font-display text-4xl font-bold text-navy-dark mb-4">
        We Are Here to Help
      </h2>
      <p className="text-gray-500 leading-relaxed mb-8 text-sm">
        Whether you want to donate, volunteer, sponsor a child, or simply learn more about our work — our team is ready to assist you. Reach out through any channel below.
      </p>

      <div className="flex flex-col gap-4 mb-10">
        {contacts.map(c => (
          <div key={c.label} className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-200 rounded-xl hover:border-navy/30 transition-colors">
            <div className="w-10 h-10 bg-navy/10 rounded-lg flex items-center justify-center text-lg shrink-0">
              {c.icon}
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">{c.label}</div>
              <div className="text-sm font-medium text-gray-800">{c.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Social Links */}
      <div>
        <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Follow Us</div>
        <div className="flex gap-2">
          {[
            { icon: '📷', label: 'Instagram' },
            { icon: 'f',  label: 'Facebook' },
            { icon: '▶',  label: 'YouTube' },
            { icon: 'X',  label: 'Twitter' },
          ].map(s => (
            <a key={s.label} href="#"
              className="w-10 h-10 flex items-center justify-center bg-navy/5 border border-navy/10 rounded-lg text-navy/60 text-sm font-bold hover:bg-navy hover:text-white hover:border-navy transition-all"
              title={s.label}>
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}