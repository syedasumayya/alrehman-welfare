import AboutBanner   from '@/components/about/AboutBanner'
import AboutStory    from '@/components/about/AboutStory'
import AboutValues   from '@/components/about/AboutValues'
import AboutTimeline from '@/components/about/AboutTimeline'
import AboutTeam     from '@/components/about/AboutTeam'

export default function AboutPage() {
  return (
    <>
      <AboutBanner />
      <AboutStory />
      <AboutValues />
      <AboutTimeline />
      <AboutTeam />
    </>
  )
}