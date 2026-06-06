'use client'
import Link from 'next/link'
import {
  FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedinIn, FaTiktok,
  FaMapMarkerAlt, FaEnvelope, FaPhone, FaArrowRight, FaHeart
} from 'react-icons/fa'

const pages = [
  { label: 'Home',      href: '/' },
  { label: 'About Us',  href: '/about' },
  { label: 'Projects',  href: '/projects' },
  { label: 'Donate',    href: '/donate' },
  { label: 'Volunteer', href: '/volunteer' },
  { label: 'Contact',   href: '/contact' },
]

const donationCats = [
  'Food Donation',
  'Medical Aid',
  'Orphan Sponsorship',
  'Education Fund',
  'Water Projects',
  'Emergency Relief',
]

const socials = [
  { Icon: FaFacebookF,  href: '#', label: 'Facebook',  color: 'hover:bg-blue-600' },
  { Icon: FaTwitter,    href: '#', label: 'Twitter',   color: 'hover:bg-sky-500' },
  { Icon: FaInstagram,  href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
  { Icon: FaYoutube,    href: '#', label: 'YouTube',   color: 'hover:bg-red-600' },
  { Icon: FaLinkedinIn, href: '#', label: 'LinkedIn',  color: 'hover:bg-blue-700' },
  { Icon: FaTiktok,     href: '#', label: 'TikTok',    color: 'hover:bg-gray-900' },
]

export default function Footer() {
  return (
    <footer>

      {/* ── Main Footer ── */}
      <div className="bg-gray-900 px-6 py-14">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Brand Column */}
          <div className="md:col-span-4">
            <div className="bg-navy inline-block px-4 py-3 rounded-lg mb-5 leading-tight">
              <div className="font-display text-2xl font-black text-white">AR</div>
              <div className="text-[9px] text-white/70 tracking-widest uppercase">Welfare · Pakistan</div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed mb-6 max-w-xs">
              Al Rehman Welfare is a youth-led organization dedicated to supporting orphans, widows, and needy families across Pakistan and worldwide through transparent, impactful programs.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2">
              <span className="text-[10px] font-semibold text-white/40 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                ✓ Registered NGO
              </span>
              <span className="text-[10px] font-semibold text-white/40 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                ✓ Tax Exempt
              </span>
              <span className="text-[10px] font-semibold text-white/40 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                ✓ Zakat Eligible
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <div className="text-white font-bold text-xs uppercase tracking-widest mb-5">Quick Links</div>
            <ul className="flex flex-col gap-3">
              {pages.map(p => (
                <li key={p.label}>
                  <Link
                    href={p.href}
                    className="text-sm text-white/50 hover:text-yellow-300 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <FaArrowRight className="text-[8px] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="md:col-span-3">
            <div className="text-white font-bold text-xs uppercase tracking-widest mb-5">Programs</div>
            <ul className="flex flex-col gap-3">
              {donationCats.map(c => (
                <li key={c}>
                  <Link
                    href="/donate"
                    className="text-sm text-white/50 hover:text-yellow-300 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <FaArrowRight className="text-[8px] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <div className="text-white font-bold text-xs uppercase tracking-widest mb-5">Contact</div>
            <ul className="flex flex-col gap-4 mb-6">

              <li className="flex items-start gap-3 text-sm text-white/50">
                <div className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <FaMapMarkerAlt className="text-yellow-400 text-xs" />
                </div>
                <div className="leading-relaxed pt-1">
                  Rawalpindi, Punjab<br />Pakistan
                </div>
              </li>

              <li className="flex items-start gap-3 text-sm text-white/50 hover:text-white transition-colors">
                <div className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <FaEnvelope className="text-yellow-400 text-xs" />
                </div>
                <a href="mailto:contact@alrehmanwelfare.org" className="leading-relaxed pt-1 break-all">
                  contact@alrehmanwelfare.org
                </a>
              </li>

              <li className="flex items-start gap-3 text-sm text-white/50 hover:text-white transition-colors">
                <div className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <FaPhone className="text-yellow-400 text-xs" />
                </div>
                <a href="tel:+923000000000" className="leading-relaxed pt-1">
                  +92 300 0000000
                </a>
              </li>
            </ul>

            {/* Socials */}
            <div className="text-white font-bold text-xs uppercase tracking-widest mb-3">Follow Us</div>
            <div className="flex gap-2 flex-wrap">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className={`w-9 h-9 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg text-white/60 hover:text-white hover:border-transparent transition-all ${s.color}`}
                >
                  <s.Icon className="text-xs" />
                </a>
              ))}
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