import Link from 'next/link'
import { FaHandsHelping } from 'react-icons/fa'

export default function VolunteerBanner() {
  return (
    <div className="relative bg-gradient-to-br from-navy-dark via-navy to-blue-700 py-20 px-6 text-center overflow-hidden">
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle,white 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="relative z-10">
        <div className="flex justify-center gap-2 text-yellow-300/60 text-xs mb-3">
          <Link href="/" className="hover:text-yellow-300 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white/50">Volunteer</span>
        </div>
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 mb-5 shadow-lg">
          <FaHandsHelping className="text-white text-2xl" />
        </div>
        <h1 className="font-display text-5xl font-black text-white mb-3">Become a Volunteer</h1>
        <p className="text-white/70 text-lg max-w-xl mx-auto">
          Join our youth team and make a real difference. Sign up below — we'll reach out within 48 hours.
        </p>
      </div>
    </div>
  )
}