import Link from 'next/link'

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center items-center gap-2 text-green-600 text-xs font-bold uppercase tracking-widest mb-2">
          <span className="block w-6 h-0.5 bg-green-600" />Contact Us<span className="block w-6 h-0.5 bg-green-600" />
        </div>
        <h2 className="font-display text-4xl font-bold text-navy-dark mb-4">Have Questions?</h2>
        <p className="text-gray-500 leading-relaxed mb-8 max-w-xl mx-auto">
          Whether you want to donate, volunteer, or simply learn more — our team is here for you. Visit our dedicated contact page.
        </p>
        
        <Link href="/contact"
          className="inline-block bg-navy hover:bg-navy-mid text-white font-bold px-8 py-3.5 rounded-lg text-sm transition-all hover:-translate-y-0.5">
          Go to Contact Page →
        </Link>
      </div>
    </section>
  )
}