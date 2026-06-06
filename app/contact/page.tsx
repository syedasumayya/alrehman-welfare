import ContactBanner from '@/components/contact/ContactBanner'
import ContactInfo   from '@/components/contact/ContactInfo'
import ContactForm   from '@/components/contact/ContactForm'
import ContactFAQ    from '@/components/contact/ContactFAQ'
import ContactMap    from '@/components/contact/ContactMap'

export default function ContactPage() {
  return (
    <>
      <ContactBanner />

      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>

      <ContactFAQ />
      <ContactMap />
    </>
  )
}