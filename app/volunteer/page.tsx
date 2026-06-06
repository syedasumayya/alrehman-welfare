import VolunteerBanner from '@/components/volunteer/VolunteerBanner'
import VolunteerInfo   from '@/components/volunteer/VolunteerInfo'
import VolunteerForm   from '@/components/volunteer/VolunteerForm'

export default function VolunteerPage() {
  return (
    <>
      <VolunteerBanner />
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <VolunteerInfo />
          <VolunteerForm />
        </div>
      </section>
    </>
  )
}