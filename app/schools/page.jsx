import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SchoolsHero from '@/components/SchoolsHero'
import SchoolsSearchBar from '@/components/SchoolsSearchBar'
import SchoolsGrid from '@/components/SchoolsGrid'
import RecentlyReviewedSchoolsGate from '@/components/RecentlyReviewedSchoolsGate'

export default function SchoolsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <SchoolsHero />
      
      {/* Search Filter Section - Separate Section */}
      <section className="bg-white py-4 border-b border-[#E5E7EB] shadow-[0px_1px_2px_0px_#0000000D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SchoolsSearchBar />
        </div>
      </section>
      
      {/* Search Results Section - Separate Section */}
      <SchoolsGrid />
      
      <RecentlyReviewedSchoolsGate />
      <Footer />
    </main>
  )
}

