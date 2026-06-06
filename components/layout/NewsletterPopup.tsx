'use client'
import { useState, useEffect } from 'react'
import { FaArrowRight, FaTimes } from 'react-icons/fa'

export default function NewsletterPopup() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // How far has the user scrolled?
      const scrollTop   = window.scrollY
      const windowHeight = window.innerHeight
      const fullHeight  = document.documentElement.scrollHeight

      // Has the user reached the last 25% of the page?
      const reachedBottom = scrollTop + windowHeight >= fullHeight - 300

      if (reachedBottom && !dismissed) {
        setVisible(true)
      } else if (!reachedBottom) {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // run once on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [dismissed])

  if (dismissed) return null

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ease-out
        ${visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'}`}
    >
      <div className="bg-navy border-t-4 border-yellow-400 shadow-2xl">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center gap-5 relative">

          {/* Close button */}
          <button
            onClick={() => setDismissed(true)}
            aria-label="Close"
            className="absolute top-3 right-3 md:relative md:top-auto md:right-auto md:order-3 w-8 h-8 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 rounded-lg transition-all"
          >
            <FaTimes className="text-sm" />
          </button>

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-display text-lg md:text-xl font-bold text-white mb-0.5">
              Join Our Mission
            </h3>
            <p className="text-white/60 text-xs md:text-sm leading-snug">
              Monthly impact updates and stories from the field — straight to your inbox.
            </p>
          </div>

          {/* Form */}
          {subscribed ? (
            <div className="bg-green-500/20 border border-green-500/40 rounded-lg px-4 py-2.5 flex items-center gap-2">
              <span className="text-green-300 text-lg">✓</span>
              <span className="text-green-300 text-sm font-semibold">Subscribed!</span>
            </div>
          ) : (
            <div className="flex gap-0 w-full md:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 md:w-72 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm px-4 py-2.5 rounded-l-lg outline-none focus:bg-white/15 focus:border-yellow-400/50 transition-all"
              />
              <button
                onClick={() => { if (email.includes('@')) setSubscribed(true) }}
                className="bg-yellow-400 hover:bg-yellow-300 text-navy-dark text-sm font-bold px-5 py-2.5 rounded-r-lg transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <FaArrowRight className="text-xs" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}