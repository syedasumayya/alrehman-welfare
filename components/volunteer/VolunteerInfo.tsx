import { FaUsers, FaClock, FaHandHoldingHeart, FaGraduationCap } from 'react-icons/fa'

const benefits = [
  { Icon: FaUsers,            title: 'Make Real Impact',   desc: 'Directly help families, orphans, and widows on the ground.' },
  { Icon: FaClock,             title: 'Flexible Hours',     desc: 'Volunteer when you can — weekends, evenings, or remote.' },
  { Icon: FaHandHoldingHeart,  title: 'Build Community',    desc: 'Meet like-minded people working toward common goals.' },
  { Icon: FaGraduationCap,     title: 'Gain Experience',    desc: 'Develop leadership, organizing, and communication skills.' },
]

export default function VolunteerInfo() {
  return (
    <div>
      <div className="flex items-center gap-2 text-green-600 text-xs font-bold uppercase tracking-widest mb-2">
        <span className="block w-6 h-0.5 bg-green-600" />Why Volunteer
      </div>
      <h2 className="font-display text-4xl font-bold text-navy-dark mb-4">
        Be the Change You Want to See
      </h2>
      <p className="text-gray-500 text-sm leading-relaxed mb-8">
        Our volunteers are the heart of every campaign we run. Whether you have a few hours a week or want to lead a project — there's a place for you.
      </p>

      <div className="grid grid-cols-1 gap-4">
        {benefits.map(b => (
          <div key={b.title} className="flex items-start gap-4 p-4 bg-gray-50 border border-gray-200 rounded-xl">
            <div className="w-11 h-11 bg-navy/10 rounded-lg flex items-center justify-center shrink-0">
              <b.Icon className="text-navy text-lg" />
            </div>
            <div>
              <div className="font-display font-bold text-navy mb-0.5">{b.title}</div>
              <div className="text-gray-500 text-sm">{b.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-navy rounded-2xl p-6 text-center">
        <div className="font-arabic text-xl text-yellow-300 mb-2">خَيرُ النَّاسِ أَنفَعُهُم لِلنَّاس</div>
        <p className="text-white/70 italic text-sm">
          "The best of people are those most beneficial to others."
        </p>
        <p className="text-yellow-400 text-xs mt-2 uppercase tracking-widest">— Prophet Muhammad ﷺ</p>
      </div>
    </div>
  )
}