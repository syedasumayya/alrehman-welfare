'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=1200&q=80',
    fallbackEmoji: '👶',
    tag: 'Baby Care',
    title: 'Baby Formula & Diapers',
    desc: 'Providing baby formula, diapers, and essentials to mothers in war and crisis zones.',
    raised: 145000,
    goal: 200000,
    pct: 72,
    urgent: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1593504049359-74330189a345?w=1200&q=80',
    fallbackEmoji: '🍖',
    tag: 'Eid ul Adha',
    title: 'Meat Distribution',
    desc: 'Distributing qurbani meat on Eid ul Adha to widows, orphans, and ultra-poor families.',
    raised: 320000,
    goal: 400000,
    pct: 80,
    urgent: false,
  },
  {
    image: 'https://media.istockphoto.com/id/1362787530/photo/donation-box-with-stuff.jpg?s=612x612&w=0&k=20&c=AFX1S73Ml80a5S09JTmR8q9WWhEEonUuQJfG-tuzRk0=',
    fallbackEmoji: '👕',
    tag: 'Eid ul Fitr',
    title: 'Clothes on Eid ul Fitr',
    desc: 'New Eid clothes for orphans and underprivileged children to share in the joy.',
    raised: 95000,
    goal: 150000,
    pct: 63,
    urgent: false,
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTEnM1yDO1XHuP22aVIKrVrN9pRcvcxsCBvw&s',
    fallbackEmoji: '💧',
    tag: 'Water',
    title: 'Monthly Water Distribution',
    desc: 'Clean drinking water delivered every month to villages and families without access.',
    raised: 180000,
    goal: 220000,
    pct: 82,
    urgent: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80',
    fallbackEmoji: '🍛',
    tag: 'Food Aid',
    title: 'Rice with Meat Distribution',
    desc: 'Cooked rice with meat distributed regularly to homeless and ultra-poor families.',
    raised: 110000,
    goal: 180000,
    pct: 61,
    urgent: true,
  },
  {
    image: 'data:image/jpeg;base64,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',
    fallbackEmoji: '⛺',
    tag: 'Shelter',
    title: 'Tents for Homeless Families',
    desc: 'Emergency tents and shelter for families displaced by floods, conflict, and disaster.',
    raised: 75000,
    goal: 180000,
    pct: 42,
    urgent: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80',
    fallbackEmoji: '🏥',
    tag: 'Healthcare',
    title: 'Healthcare Coverage',
    desc: 'Covering medical bills, surgeries, and treatment for families who cannot afford care.',
    raised: 200000,
    goal: 250000,
    pct: 80,
    urgent: false,
  },
]

const filters = ['All', 'Baby Care', 'Eid ul Adha', 'Eid ul Fitr', 'Water', 'Food Aid', 'Shelter', 'Healthcare']

function ProjectCard({ p }: { p: typeof projects[0] }) {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all group">

      {/* Urgent / Completed badge */}
      {p.urgent && p.pct < 100 && (
        <span className="absolute top-3 right-3 z-20 bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-lg">
          Urgent
        </span>
      )}
      {p.pct === 100 && (
        <span className="absolute top-3 right-3 z-20 bg-green-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-lg">
          Completed
        </span>
      )}

      {/* Image */}
      <div className="relative h-52 bg-gray-100 overflow-hidden">
        {imgError ? (
          <div className="h-full flex items-center justify-center text-6xl">
            {p.fallbackEmoji}
          </div>
        ) : (
          <Image
            src={p.image}
            alt={p.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgError(true)}
            unoptimized
          />
        )}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
      </div>

      {/* Body */}
      <div className="p-5">
        <span className="inline-block bg-navy/10 text-navy text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded mb-2">
          {p.tag}
        </span>
        <h3 className="font-display font-bold text-navy-dark text-lg mb-2">{p.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{p.desc}</p>

        <div className="bg-gray-100 rounded-full h-2 mb-2 overflow-hidden">
          <div
            className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${p.pct}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-gray-500 mb-4">
          <span>Raised: <strong className="text-navy">₨{p.raised.toLocaleString()}</strong></span>
          <span>Goal: ₨{p.goal.toLocaleString()}</span>
        </div>

        {p.pct < 100 ? (
          <Link
            href="/donate"
            className="block text-center bg-green-600 hover:bg-green-700 text-white text-sm font-bold py-2.5 rounded-lg transition-colors"
          >
            Donate to This →
          </Link>
        ) : (
          <div className="text-center bg-green-50 text-green-700 font-bold text-sm py-2.5 rounded-lg border border-green-200">
            ✓ Goal Reached — Thank You!
          </div>
        )}
      </div>
    </div>
  )
}

export default function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.tag === activeFilter)

  return (
    <>
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all
                  ${activeFilter === f
                    ? 'bg-navy text-white border-navy'
                    : 'text-gray-500 border-gray-200 hover:border-navy hover:text-navy bg-white'}`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Count */}
          <div className="text-sm text-gray-500 mb-6">
            Showing <strong className="text-navy">{filtered.length}</strong> active {filtered.length === 1 ? 'program' : 'programs'}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(p => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>

        </div>
      </section>

      {/* Bottom Quran Banner */}
      <div className="bg-navy py-14 px-6 text-center">
        <div className="font-arabic text-2xl text-yellow-300 mb-1">مَن ذَا الَّذِي يُقْرِضُ اللَّهَ قَرْضًا حَسَنًا</div>
        <div className="text-white/70 italic text-sm mb-1">
          "Who will lend to Allah a good loan so He may multiply it for them many times over?"
        </div>
        <div className="text-white/30 text-xs mb-6">— Quran 2:245</div>
        <Link
          href="/donate"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3.5 rounded-lg text-sm transition-all hover:-translate-y-0.5"
        >
          Donate Now →
        </Link>
      </div>
    </>
  )
}