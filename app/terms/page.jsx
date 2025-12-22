import Navbar from '@/components/Navbar'
import SimpleFooter from '@/components/SimpleFooter'
import TermsHero from '@/components/TermsHero'
import TermsContent from '@/components/TermsContent'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <TermsHero />
      <TermsContent />
      <SimpleFooter />
    </main>
  )
}

