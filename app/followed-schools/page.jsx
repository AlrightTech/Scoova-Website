import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FollowedSchoolsHero from '@/components/FollowedSchoolsHero'
import FollowedSchoolsGrid from '@/components/FollowedSchoolsGrid'

export default function FollowedSchoolsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <FollowedSchoolsHero />
      <FollowedSchoolsGrid />
      </div>
      <Footer />
    </main>
  )
}

