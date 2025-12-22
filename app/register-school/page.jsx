import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RegisterSchoolHero from '@/components/RegisterSchoolHero'
import RegisterSchoolForm from '@/components/RegisterSchoolForm'

export default function RegisterSchoolPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <RegisterSchoolHero />
      <RegisterSchoolForm />
      <Footer />
    </main>
  )
}

