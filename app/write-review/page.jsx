import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WriteReview from '@/components/WriteReview'

export default function WriteReviewPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <WriteReview />
      </div>
      <Footer />
    </main>
  )
}

