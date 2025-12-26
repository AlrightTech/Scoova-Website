import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SchoolDetailHero from '@/components/SchoolDetailHero'
import SchoolOverview from '@/components/SchoolOverview'
import SchoolOpportunities from '@/components/SchoolOpportunities'
import StudentInsights from '@/components/StudentInsights'
import YouAlsoLiked from '@/components/YouAlsoLiked'
import UnlockSubscriptionCard from '@/components/UnlockSubscriptionCard'
import Link from 'next/link'

export default async function SchoolDetailPage({ params }) {
  const { id } = await params
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <SchoolDetailHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SchoolOverview />
        <SchoolOpportunities />
      </div>
      <StudentInsights />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <YouAlsoLiked />
      </div>
      
      {/* Unlock Subscription Card Section */}
      <UnlockSubscriptionCard />
      
      {/* Share Experience Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#EFF6FF] rounded-2xl p-8 text-center">
            {/* Circular Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-[#BFDBFE] flex items-center justify-center">
                <svg width="18" height="20" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                  <path d="M1.70491 6.9601L6.75982 1.90519L6.05193 1.1973L0.997024 6.26218V6.9601H1.70491ZM2.11369 7.95712H0V5.84343L5.70298 0.140457C5.79603 0.0474014 5.91235 0.000873566 6.05193 0.000873566C6.19152 0.000873566 6.30784 0.0474014 6.40089 0.140457L7.81667 1.55623C7.91637 1.64929 7.96622 1.76561 7.96622 1.90519C7.96622 2.04477 7.91637 2.16442 7.81667 2.26412L2.11369 7.95712ZM0 8.95415H8.97321V9.95117H0V8.95415Z" fill="#1E3A8A"/>
                </svg>
              </div>
            </div>
            
            <h2 
              className="text-[#111827] font-bold text-xl leading-7 tracking-normal text-center align-middle mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Share Your Experience
            </h2>
            <p 
              className="text-[#4B5563] font-normal text-base leading-6 tracking-normal text-center align-middle mb-5" style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Help other families by sharing your honest review of this school.
            </p>
            <Link
              href="/write-review"
              className="inline-block px-8 py-3 rounded-xl text-white font-normal hover:opacity-90 transition-opacity bg-[#1E3A8A] font-['Inter',sans-serif]"
            >
              + Write a Review
            </Link>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </main>
  )
}

