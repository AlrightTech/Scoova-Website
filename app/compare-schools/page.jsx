import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CompareSchoolsHero from '@/components/CompareSchoolsHero'
import CompareSchoolsInput from '@/components/CompareSchoolsInput'
import SchoolsSearchBar from '@/components/SchoolsSearchBar'
import SchoolsGrid from '@/components/SchoolsGrid'
import SchoolInsights from '@/components/SchoolInsights'
import JobOpportunitySideBySide from '@/components/JobOpportunitySideBySide'
import ReviewsSection from '@/components/ReviewsSection'
import CampusGallery from '@/components/CampusGallery'
import TopSchools from '@/components/TopSchools'
import Image from 'next/image'

export default function CompareSchoolsPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
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
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 md:gap-6 py-4 sm:py-5 md:py-12">
            <div className="w-full sm:w-auto">
              <h2 className="font-poppins font-bold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[21px] text-[#111827] mb-1 sm:mb-2">
                Compare Schools
              </h2>
              <p className="font-sans font-normal text-sm md:text-base text-[#4B5563] leading-relaxed">
                Compare schools side by side with verified data and analytics.
              </p>
            </div>
            <button 
              className="px-4 sm:px-4 md:px-4 py-2 sm:py-2.5 md:py-3 rounded-xl font-normal text-base text-white bg-[#999999] cursor-not-allowed whitespace-nowrap flex items-center justify-center gap-2 w-full sm:w-auto mt-2 sm:mt-0"
              style={{ fontFamily: 'Inter, sans-serif' }}
              disabled
            >
              <span>Compare School</span>
              <Image
                src="/images/compare-school-icon.svg"
                alt="Compare"
                width={16}
                height={16}
                className="w-3 h-3 sm:w-4 sm:h-4"
              />
            </button>
          </div>
        </div>
      </section>
      
      {/* All sections with same background #F9FAFB */}
      <div className="bg-[#F9FAFB] w-full overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <CompareSchoolsInput />
        </div>
        <SchoolInsights />
        <JobOpportunitySideBySide />
        <ReviewsSection />
        <CampusGallery />
        <TopSchools />
      </div>
      
      <Footer />
    </main>
  )
}

