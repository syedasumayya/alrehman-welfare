import HeroSection     from '@/components/home/HeroSection'
import ValuesSection   from '@/components/home/ValuesSection'
import QuranBand       from '@/components/home/QuranBand'
import ProjectsSection from '@/components/home/ProjectsSection'
import HowToHelp       from '@/components/home/HowToHelp'
import ContactSection  from '@/components/home/ContactSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValuesSection />
      <QuranBand />
      <ProjectsSection />
      <HowToHelp />
      <ContactSection />
    </>
  )
}