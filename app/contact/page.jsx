import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactHero from '@/components/ContactHero'
import ContactForm from '@/components/ContactForm'
import PartnershipSection from '@/components/PartnershipSection'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ContactHero />
      <ContactForm />
      <PartnershipSection />
      <Footer />
    </main>
  )
}

