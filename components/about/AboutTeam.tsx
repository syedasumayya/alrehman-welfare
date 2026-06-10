'use client'
import Image from 'next/image'
import { useState } from 'react'
import { FaInstagram, FaLinkedinIn, FaTwitter, FaQuoteLeft } from 'react-icons/fa'

const founder = {
  name:     'Aqil Buzdar',
  role:     'Founder & Lead',
  bio:      'Youth activist and welfare organizer dedicated to creating lasting change through community-driven action. Founded Al Rehman Welfare to channel the energy of Pakistan\'s youth into meaningful, transparent impact for orphans, widows, and needy families across the country and beyond.',
  image:    '/AQIL BHAI.png',
  initials: 'AB',
  quote:    'Leadership is not a title — it is service to those who need us most.',
  instagram:'https://instagram.com/__aqillll__',
  linkedin: '#',
  twitter:  '#',
}

const team = [
  { name: 'Team Member', role: 'Campaigns Director',     initials: 'CD', image: '/team.png' },
  { name: 'Team Member', role: 'Finance & Transparency', initials: 'FT', image: '/member2.png' },
  { name: 'Team Member', role: 'Volunteer Coordinator',  initials: 'VC', image: '/member3.png' },
  { name: 'Team Member', role: 'Field Operations',       initials: 'FO', image: '/member4.png' },
  { name: 'Team Member', role: 'Media & Outreach',       initials: 'MO', image: '/member1.jpg' },
  { name: 'Team Member', role: 'Donor Relations',        initials: 'DR', image: '/member6.jpg' },
  { name: 'Team Member', role: 'Event Coordinator',      initials: 'EC', image: '/team/member7.jpg' },
  { name: 'Team Member', role: 'Photography Lead',       initials: 'PL', image: '/member8.jpg' },
  { name: 'Team Member', role: 'Social Media Manager',   initials: 'SM', image: '/member9.jpg' },
  { name: 'Team Member', role: 'Logistics Coordinator',  initials: 'LC', image: '/team/member10.jpg' },
  { name: 'Team Member', role: 'Education Programs',     initials: 'EP', image: '/team/member11.jpg' },
  { name: 'Team Member', role: 'Community Liaison',      initials: 'CL', image: '/member12.jpg' },
]

function FounderImage() {
  const [error, setError] = useState(false)

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-navy to-navy-dark">
        <span className="font-display text-7xl font-black text-yellow-300/40">{founder.initials}</span>
      </div>
      {!error && (
        <Image
          src={founder.image}
          alt={founder.name}
          fill
          className="object-cover object-top"
          onError={() => setError(true)}
        />
      )}
    </div>
  )
}

function MemberCard({ m }: { m: typeof team[0] }) {
  const [error, setError] = useState(false)

  return (
    <div className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300">

      {/* Image */}
      <div className="relative aspect-square bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center">
            <span className="font-display text-lg font-black text-navy">{m.initials}</span>
          </div>
        </div>

        {!error && (
          <Image
            src={m.image}
            alt={m.name}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
            onError={() => setError(true)}
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Info */}
      <div className="p-4 text-center border-t border-gray-100">
        <div className="font-display font-bold text-navy-dark text-sm mb-0.5 truncate">{m.name}</div>
        <div className="text-green-600 text-[10px] font-semibold uppercase tracking-wider truncate">{m.role}</div>
      </div>
    </div>
  )
}

export default function AboutTeam() {
  return (
    <>
      {/* ── LEADERSHIP SECTION (DARK) ── */}
      <section className="py-20 px-6 bg-navy-dark">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-yellow-300 text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full mb-4">
              <span className="block w-1 h-1 bg-yellow-300 rounded-full" />
              The People
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-3">
              Meet Our <span className="text-yellow-300">Team</span>
            </h2>
            <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              A dedicated group of young changemakers working every day to uplift those in need.
            </p>
          </div>

          {/* Founder Feature Card */}
          <div>
            <div className="text-center mb-6">
              <span className="inline-block bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                ★ Leadership
              </span>
            </div>

            <div className="bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2 relative h-72 md:h-auto md:min-h-[400px]">
                  <FounderImage />
                </div>
                <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                  <div className="text-yellow-300 text-[10px] font-bold uppercase tracking-widest mb-2">
                    Founder & Lead
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                    {founder.name}
                  </h3>

                  <div className="bg-white/[0.04] border-l-2 border-yellow-400 pl-4 py-3 mb-5">
                    <FaQuoteLeft className="text-yellow-400/60 text-sm mb-2" />
                    <p className="text-white/80 italic text-sm md:text-base leading-relaxed">
                      {founder.quote}
                    </p>
                  </div>

                  <p className="text-white/50 text-sm leading-relaxed mb-6">
                    {founder.bio}
                  </p>

                  <div className="flex gap-2">
                    <a href={founder.instagram} target="_blank" rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg text-white/60 hover:bg-pink-600 hover:border-transparent hover:text-white transition-all">
                      <FaInstagram className="text-sm" />
                    </a>
                    <a href={founder.linkedin} target="_blank" rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg text-white/60 hover:bg-blue-600 hover:border-transparent hover:text-white transition-all">
                      <FaLinkedinIn className="text-sm" />
                    </a>
                    <a href={founder.twitter} target="_blank" rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg text-white/60 hover:bg-sky-500 hover:border-transparent hover:text-white transition-all">
                      <FaTwitter className="text-sm" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── CORE TEAM SECTION (WHITE) ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          {/* Section Label */}
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 text-green-600 text-xs font-bold uppercase tracking-widest mb-3">
              <span className="block w-6 h-0.5 bg-green-600" />
              Core Team
              <span className="block w-6 h-0.5 bg-green-600" />
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-navy-dark mb-2">
              The People Behind <span className="text-green-600">Every Mission</span>
            </h3>
            <p className="text-gray-500 text-sm max-w-lg mx-auto">
              Twelve passionate individuals making it all happen on the ground.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {team.map((m) => (
              <MemberCard key={m.role} m={m} />
            ))}
          </div>

        </div>
      </section>

      {/* ── JOIN OUR TEAM CTA (DARK) ── */}
      <section className="py-16 px-6 bg-navy-dark">
        <div className="max-w-2xl mx-auto text-center bg-gradient-to-br from-yellow-400/10 to-amber-500/5 border border-yellow-400/20 rounded-2xl p-8">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-400 rounded-full mb-4 shadow-lg shadow-yellow-400/30">
            <span className="text-xl">🤝</span>
          </div>
          <h3 className="font-display text-xl font-bold text-white mb-2">Want to Join Our Team?</h3>
          <p className="text-white/50 text-sm mb-5 max-w-md mx-auto">
            We are always looking for passionate volunteers to grow with us and make a real difference.
          </p>
          <a
            href="/volunteer"
            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-navy-dark font-bold px-6 py-3 rounded-lg text-sm transition-all hover:-translate-y-0.5 shadow-lg shadow-yellow-400/20"
          >
            Become a Volunteer →
          </a>
        </div>
      </section>
    </>
  )
}