import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PricingPlans from '@/components/PricingPlans'
import ExperienceDifference from '@/components/ExperienceDifference'
import SchoolRatings from '@/components/SchoolRatings'
import AnalyticalReview from '@/components/AnalyticalReview'
import Faq from '@/components/Faq'

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white relative overflow-x-hidden">
      <Navbar />
      <div className="relative z-0">
        <PricingPlans />
        <ExperienceDifference />
        <SchoolRatings />
        <AnalyticalReview />
        <div className="relative z-20">
          <Faq showQuestions={false} showHeader={false} />
        </div>
      </div>
      <Footer />
    </main>
  )
}

