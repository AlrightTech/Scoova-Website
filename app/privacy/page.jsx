import Navbar from '@/components/Navbar'
import SimpleFooter from '@/components/SimpleFooter'
import PrivacyHero from '@/components/PrivacyHero'
import PrivacyPolicyContent from '@/components/PrivacyPolicyContent'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PrivacyHero />
      <PrivacyPolicyContent />
      <SimpleFooter />
    </main>
  )
}

