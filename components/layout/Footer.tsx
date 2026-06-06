'use client'
import Link from 'next/link'
import { useState } from 'react'

const socials      = ['f', 'X', '▶', '◎', 'in', '♪']
const pages        = ['Home', 'Projects', 'About Us', 'Donate', 'Contact']
const donationCats = ['Food Donation', 'Medical Aid', 'Orphan Sponsorship', 'Education Fund', 'Sadqa e Jariah', 'Zakat']


export default function Footer() {
  const [amounts, setAmounts] = useState(['', '', ''])

  return (
    <footer>

      {/* Main Footer */}
      <div className="bg-gray-900 px-6 py-14">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="bg-navy inline-block px-3 py-2 rounded mb-4">
              <div className="font-display text-xl font-black text-white">AR</div>
              <div className="text-[9px] text-white/70 tracking-widest uppercase">Welfare · Pakistan</div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed mb-5 max-w-[240px]">
              Al Rehman Welfare is a youth-led organization dedicated to standing with Palestine through fundraising, awareness, and direct aid.
            </p>
            <div className="flex gap-2">
              {socials.map((s, i) => (
                <a key={i} href="#"
                  className="w-9 h-9 flex items-center justify-center bg-white/5 border border-white/10 rounded text-white/50 text-sm hover:bg-navy hover:border-navy hover:text-white transition-all">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <div className="text-white font-bold text-xs uppercase tracking-widest mb-4">Pages</div>
            <ul className="flex flex-col gap-2.5">
              {pages.map(p => (
                <li key={p}>
                  <Link
                    href={p === 'Home' ? '/' : `/${p.toLowerCase().replace(' ', '')}`}
                    className="text-sm text-white/50 hover:text-yellow-300 transition-colors">
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Donation Categories */}
          <div>
            <div className="text-white font-bold text-xs uppercase tracking-widest mb-4">Donation Categories</div>
            <ul className="flex flex-col gap-2.5">
              {donationCats.map(c => (
                <li key={c}>
                  <Link href="/donate" className="text-sm text-white/50 hover:text-yellow-300 transition-colors">
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-white font-bold text-xs uppercase tracking-widest mb-4">Contact Us</div>
            <ul className="flex flex-col gap-3">
              {[
                ['📍', 'Rawalpindi, Punjab, Pakistan'],
                ['✉️', 'contact@alrehmanwelfare.org'],
                ['📱', '+92 300 0000000'],
                ['📷', '@alrehmanwelfare'],
                ['👤', '@__aqillll__ (Founder)'],
              ].map(([icon, text]) => (
                <li key={text} className="flex items-start gap-2.5 text-sm text-white/50">
                  <span className="text-yellow-400 mt-0.5 shrink-0">{icon}</span>{text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-4 text-center">
        <p className="text-xs text-white/30">
          © 2024 Al Rehman Welfare. Made with <span className="text-red-500">♥</span> in Pakistan — Standing for Palestine.
        </p>
      </div>
    </footer>
  )
}