import DonateBanner from '@/components/donate/DonateBanner'
import DonateInfo   from '@/components/donate/DonateInfo'
import DonateForm   from '@/components/donate/DonateForm'

export default function DonatePage() {
  return (
    <>
      <DonateBanner />
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <DonateInfo />
          <DonateForm />
        </div>
      </section>
    </>
  )
}