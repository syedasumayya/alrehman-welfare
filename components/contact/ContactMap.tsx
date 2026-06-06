export default function ContactMap() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 text-green-600 text-xs font-bold uppercase tracking-widest mb-2">
          <span className="block w-6 h-0.5 bg-green-600" />Our Location
        </div>
        <h2 className="font-display text-3xl font-bold text-navy-dark mb-6">Find Us</h2>
        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-72">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.0!2d73.0479!3d33.5651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDMzJzU0LjQiTiA3M8KwMDInNTIuNCJF!5e0!3m2!1sen!2spk!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="text-xs text-gray-400 mt-2 text-center">Rawalpindi, Punjab, Pakistan</p>
      </div>
    </section>
  )
}