'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FaPlay, FaTimes } from 'react-icons/fa'

const projects = [
  {
    image:         '/projects/baby-formula.jpg',
    video:         '/projects/baby-formula.mp4',
    fallbackEmoji: '👶',
    tag:           'Baby Care',
    title:         'Baby Formula & Diapers',
    desc:          'Providing baby formula, diapers, and essentials to mothers in war and crisis zones.',
    raised: 145000, goal: 200000, pct: 72, urgent: true,
  },
  {
    image:         '/projects/meat-distribution.jpg',
    video:         '/projects/meat-distribution.mp4',
    fallbackEmoji: '🍖',
    tag:           'Eid ul Adha',
    title:         'Meat Distribution',
    desc:          'Distributing qurbani meat on Eid ul Adha to widows, orphans, and ultra-poor families.',
    raised: 320000, goal: 400000, pct: 80, urgent: false,
  },
  {
    image:         '/projects/eid-clothes.jpg',
    video:         '/projects/eid-clothes.mp4',
    fallbackEmoji: '👕',
    tag:           'Eid ul Fitr',
    title:         'Clothes on Eid ul Fitr',
    desc:          'New Eid clothes for orphans and underprivileged children to share in the joy.',
    raised: 95000, goal: 150000, pct: 63, urgent: false,
  },
  {
    image:         '/projects/water.jpg',
    video:         '/projects/water.mp4',
    fallbackEmoji: '💧',
    tag:           'Water',
    title:         'Monthly Water Distribution',
    desc:          'Clean water distributed every month to villages and families without access.',
    raised: 180000, goal: 220000, pct: 82, urgent: false,
  },
  {
    image:         '/projects/rice-meat.jpg',
    video:         '/projects/rice-meat.mp4',
    fallbackEmoji: '🍛',
    tag:           'Food Aid',
    title:         'Rice with Meat Distribution',
    desc:          'Cooked rice with meat distributed regularly to homeless and ultra-poor families.',
    raised: 110000, goal: 180000, pct: 61, urgent: true,
  },
  {
    image:         '/projects/tents.jpg',
    video:         '/projects/tents.mp4',
    fallbackEmoji: '⛺',
    tag:           'Shelter',
    title:         'Tents for Homeless Families',
    desc:          'Emergency tents and shelter for families displaced by floods, conflict, and disaster.',
    raised: 75000, goal: 180000, pct: 42, urgent: true,
  },
  {
    image:         '/projects/healthcare.jpg',
    video:         '/projects/healthcare.mp4',
    fallbackEmoji: '🏥',
    tag:           'Healthcare',
    title:         'Healthcare Coverage',
    desc:          'Covering medical bills, surgeries, and treatment for families who cannot afford care.',
    raised: 200000, goal: 250000, pct: 80, urgent: false,
  },
]

const filters = ['All', 'Baby Care', 'Eid ul Adha', 'Eid ul Fitr', 'Water', 'Food Aid', 'Shelter', 'Healthcare']

function ProjectCard({ p, onPlayVideo }: { p: typeof projects[0], onPlayVideo: (video: string) => void }) {
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

      {/* Image / Video area */}
      <div className="relative h-56 bg-gray-100 overflow-hidden">
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
          />
        )}

        {/* Video play button overlay */}
        <button
          onClick={() => onPlayVideo(p.video)}
          className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/40 transition-all duration-300 group/play"
        >
          <div className="w-16 h-16 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-2xl scale-0 group-hover:scale-100 transition-transform duration-300 group-hover/play:bg-yellow-400">
            <FaPlay className="text-navy-dark text-lg ml-1" />
          </div>
        </button>

        {/* Gradient bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
      </div>

      {/* Body */}
      <div className="p-5">
        <span className="inline-block bg-navy/10 text-navy text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded mb-2">
          {p.tag}
        </span>
        <h3 className="font-display font-bold text-navy-dark text-lg mb-2 line-clamp-1">{p.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{p.desc}</p>

        {/* Progress */}
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

function VideoModal({ video, onClose }: { video: string, onClose: () => void }) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 animate-fadeIn"
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
      >
        <FaTimes className="text-xl" />
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
      >
        <video
          src={video}
          controls
          autoPlay
          className="w-full h-full"
        >
          Your browser does not support video playback.
        </video>
      </div>
    </div>
  )
}

export default function ProjectsGrid() {
  const [activeFilter, setActiveFilter]   = useState('All')
  const [activeVideo,  setActiveVideo]    = useState<string | null>(null)

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
              <ProjectCard key={p.title} p={p} onPlayVideo={setActiveVideo} />
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

      {/* Video Modal */}
      {activeVideo && (
        <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </>
  )
}