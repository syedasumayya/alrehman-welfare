'use client'
import Link from 'next/link'
import {
  FaMapMarkerAlt, FaEnvelope, FaPhone, FaInstagram, FaHeart
} from 'react-icons/fa'

const pages = [
  { label: 'Home',      href: '/' },
  { label: 'About Us',  href: '/about' },
  { label: 'Projects',  href: '/projects' },
  { label: 'Donate',    href: '/donate' },
  { label: 'Volunteer', href: '/volunteer' },
  { label: 'Contact',   href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900">

      {/* ── Main Footer ── */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* LEFT — Brand */}
          <div className="lg:col-span-5">
            <div className="mb-5">
              <div className="font-display text-4xl md:text-5xl font-black text-white tracking-tight leading-none">
                Al <span className="text-yellow-400">Rehman</span>
              </div>
              <div className="text-[10px] font-semibold text-white/50 tracking-[0.3em] uppercase mt-2">
                Welfare · Pakistan
              </div>
            </div>

            <p className="text-white/55 text-sm leading-relaxed mb-5 max-w-sm">
              A youth-led welfare organization supporting orphans, widows, and needy families across Pakistan and worldwide — built on transparency, compassion, and action.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-[10px] font-semibold text-white/50 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                ✓ Registered NGO
              </span>
              <span className="text-[10px] font-semibold text-white/50 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                ✓ Tax Exempt
              </span>
              <span className="text-[10px] font-semibold text-white/50 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                ✓ Zakat Eligible
              </span>
            </div>

            <Link
              href="/donate"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-navy-dark font-bold px-6 py-2.5 rounded-lg text-sm transition-all hover:-translate-y-0.5"
            >
              <FaHeart className="text-xs" />
              Donate Now
            </Link>
          </div>

          {/* RIGHT — Quick Links | Contact Us (tighter gap) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Quick Links */}
            <div>
              <div className="text-yellow-300 text-[10px] font-bold uppercase tracking-widest mb-4">
                Quick Links
              </div>
              <ul className="flex flex-col gap-2.5">
                {pages.map(p => (
                  <li key={p.label}>
                    <Link
                      href={p.href}
                      className="text-white/60 text-sm hover:text-yellow-300 transition-colors inline-flex items-center gap-2"
                    >
                      <span className="text-yellow-400/40 text-xs">▸</span>
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <div className="text-yellow-300 text-[10px] font-bold uppercase tracking-widest mb-4">
                Contact Us
              </div>
              <ul className="flex flex-col gap-2.5">

                {/* Phone */}
                <li>
                  <a
                    href="tel:+923195447944"
                    className="inline-flex items-center gap-3 text-white/60 text-sm hover:text-yellow-300 transition-colors"
                  >
                    <FaPhone className="text-yellow-400 text-xs shrink-0" />
                    +92 319 5447944
                  </a>
                </li>

                {/* Email */}
                <li>
                  <a
                    href="mailto:alrehmanwelfareinitiative@gmail.com"
                    className="inline-flex items-start gap-3 text-white/60 text-sm hover:text-yellow-300 transition-colors break-all"
                  >
                    <FaEnvelope className="text-yellow-400 text-xs shrink-0 mt-1" />
                    alrehmanwelfareinitiative@gmail.com
                  </a>
                </li>

                {/* Instagram */}
                <li>
                  <a
                    href="https://www.instagram.com/alrehmanwelfare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-white/60 text-sm hover:text-yellow-300 transition-colors"
                  >
                    <FaInstagram className="text-yellow-400 text-xs shrink-0" />
                    @alrehmanwelfare
                  </a>
                </li>

                {/* Location */}
                <li className="inline-flex items-center gap-3 text-white/60 text-sm">
                  <FaMapMarkerAlt className="text-yellow-400 text-xs shrink-0" />
                  Islamabad, Pakistan
                </li>

              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="bg-gray-950 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © 2024 Al Rehman Welfare. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-white/40">
            <Link href="#" className="hover:text-yellow-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-yellow-300 transition-colors">Terms of Service</Link>
            <span className="flex items-center gap-1.5">
              Made with <FaHeart className="text-red-500 text-[10px]" /> in Pakistan
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}