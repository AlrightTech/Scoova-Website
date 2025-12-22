import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CompareSchoolsHero from '@/components/CompareSchoolsHero'
import CompareSchoolsInput from '@/components/CompareSchoolsInput'
import SchoolsSearchBar from '@/components/SchoolsSearchBar'
import SchoolsGrid from '@/components/SchoolsGrid'
import SchoolInsights from '@/components/SchoolInsights'
import ReviewsSection from '@/components/ReviewsSection'
import CampusGallery from '@/components/CampusGallery'
import TopSchools from '@/components/TopSchools'
import Image from 'next/image'

export default function CompareSchoolsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <CompareSchoolsHero />
      
      {/* Search Filter Section - Separate Section */}
      <section className="bg-white py-4 border-b border-[#E5E7EB] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SchoolsSearchBar />
        </div>
      </section>
      
      {/* Compare Schools Header Section - Full Width Background */}
      <section className="bg-[#F9FAFB] w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-6">
            <div>
              <h2 className="font-poppins font-bold text-[24px] text-[#111827] mb-2">
                Compare Schools
              </h2>
              <p className="font-sans font-normal text-base text-[#4B5563]">
                Compare schools side by side with verified data and analytics.
              </p>
            </div>
            <button 
              className="px-6 py-2.5 rounded-lg font-medium text-white bg-gray-400 cursor-not-allowed whitespace-nowrap flex items-center gap-2"
              disabled
            >
              <span>Compare School</span>
              <Image
                src="/images/compare-school-icon.svg"
                alt="Compare"
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>
      </section>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CompareSchoolsInput />
      </div>
      <SchoolInsights />
      <ReviewsSection />
      <CampusGallery />
      <TopSchools />
      <Footer />
    </main>
  )
}

