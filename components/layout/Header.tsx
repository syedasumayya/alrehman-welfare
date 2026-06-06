'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { label: 'Home',     href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About Us', href: '/about' },
  { label: 'Donate',   href: '/donate' },
  { label: 'Contact',  href: '/#contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* Ticker */}
      <div className="bg-red-600 text-white text-xs font-semibold overflow-hidden py-2">
        <div className="flex gap-16 whitespace-nowrap animate-ticker">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="flex gap-16">
              <span>🇵🇸 Stand With Palestine</span>
              <span className="text-red-300">✦</span>
              <span>Youth-Led. Purpose-Driven.</span>
              <span className="text-red-300">✦</span>
              <span>From Pakistan With Solidarity</span>
              <span className="text-red-300">✦</span>
              <span>Unity · Compassion · Action</span>
              <span className="text-red-300">✦</span>
              <span>Every Rupee Makes a Difference</span>
              <span className="text-red-300">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-[70px]">

          <Link href="/" className="flex items-center">
            <div className="bg-navy text-white px-3 py-2 rounded leading-tight text-center">
              <div className="font-display text-xl font-black tracking-tight">AR</div>
              <div className="text-[9px] font-semibold tracking-widest uppercase opacity-80">Welfare</div>
              <div className="text-[8px] tracking-widest uppercase opacity-60">Pakistan</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(l => (
              <Link key={l.href} href={l.href}
                className={`px-4 py-2 text-sm font-medium rounded transition-colors
                  ${pathname === l.href
                    ? 'text-navy font-semibold bg-blue-50'
                    : 'text-gray-500 hover:text-navy hover:bg-gray-50'}`}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Link href="/donate"
              className="bg-navy text-white px-4 py-2 rounded text-sm font-semibold hover:bg-navy-mid transition-all hover:-translate-y-0.5">
              Donate 🤍
            </Link>
            <Link href="/donate"
              className="bg-blue-700 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-blue-600 transition-all hover:-translate-y-0.5">
              Donate Pakistan
            </Link>
          </div>

          <button className="md:hidden text-gray-700 text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-3">
            {navLinks.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-gray-700 hover:text-navy">
                {l.label}
              </Link>
            ))}
            <Link href="/donate"
              className="bg-navy text-white text-center py-2 rounded text-sm font-semibold mt-2">
              Donate Now
            </Link>
          </div>
        )}
      </header>
    </>
  )
}