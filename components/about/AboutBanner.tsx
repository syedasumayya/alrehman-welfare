import Link from 'next/link'

export default function AboutBanner() {
  return (
    <div className="relative bg-gradient-to-br from-navy-dark via-navy to-blue-700 py-20 px-6 text-center overflow-hidden">
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle,white 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="relative z-10">
        <div className="flex justify-center gap-2 text-yellow-300/60 text-xs mb-3">
          <Link href="/" className="hover:text-yellow-300 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white/50">About Us</span>
        </div>
        <h1 className="font-display text-5xl font-black text-white mb-3">About Al Rehman</h1>
        <p className="text-white/70 text-lg max-w-md mx-auto">Youth-led. Pakistan-based. Palestine-focused.</p>
      </div>
    </div>
  )
}