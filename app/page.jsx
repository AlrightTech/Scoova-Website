import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Pricing from '@/components/Pricing'
import RecentReviewsNearYou from '@/components/RecentReviewsNearYou'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import Faq from '@/components/Faq'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Pricing />
      <RecentReviewsNearYou />
      <HowItWorks />
      <Testimonials />
      <Faq />
      <Footer />
    </main>
  )
}

