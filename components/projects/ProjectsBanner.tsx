import Link from 'next/link'
import Image from 'next/image'

export default function ProjectsBanner() {
  return (
    <div className="relative min-h-[450px] md:min-h-[500px] flex items-center justify-center px-6 text-center overflow-hidden">

      {/* Background Image */}
      <Image
        src="/projectpic.png"
        alt=""
        fill
        priority
        className="object-cover -z-20"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/85 via-navy/75 to-blue-700/65 -z-10" />

      {/* Dot Pattern */}
      <div className="absolute inset-0 opacity-5 -z-10"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 py-10">
        <div className="flex justify-center gap-2 text-yellow-300/80 text-xs mb-4">
          <Link href="/" className="hover:text-yellow-300 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white/70">Projects</span>
        </div>

        <h1 className="font-display text-5xl md:text-6xl font-black text-white mb-4 drop-shadow-2xl">
          Our Projects
        </h1>

        <p className="text-white/85 text-base md:text-lg max-w-lg mx-auto drop-shadow-lg">
          Every campaign is a lifeline. Choose where your donation goes.
        </p>
      </div>
    </div>
  )
}