import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PremiumSchoolPlans from '@/components/PremiumSchoolPlans'
import SchoolExperienceDifference from '@/components/SchoolExperienceDifference'
import SchoolGeneralInformation from '@/components/SchoolGeneralInformation'
import SchoolImageGallery from '@/components/SchoolImageGallery'
import SchoolReplyToReviews from '@/components/SchoolReplyToReviews'
import SchoolSeniorLeadership from '@/components/SchoolSeniorLeadership'
import SchoolPulseSurvey from '@/components/SchoolPulseSurvey'
import SchoolRecruitmentPlatform from '@/components/SchoolRecruitmentPlatform'
import SchoolSupportNotifications from '@/components/SchoolSupportNotifications'
import Faq from '@/components/Faq'

export default function PremiumSchoolPlanPage() {
  return (
    <main className="min-h-screen bg-white relative overflow-x-hidden">
      <Navbar />
      <div className="relative z-0 pt-16">
        <PremiumSchoolPlans />
        <SchoolExperienceDifference />
        <SchoolGeneralInformation />
        <SchoolImageGallery />
        <SchoolReplyToReviews />
        <SchoolSeniorLeadership />
        <SchoolPulseSurvey />
        <SchoolRecruitmentPlatform />
        <SchoolSupportNotifications />
        <div className="relative z-20">
          <Faq showQuestions={false} showHeader={false} />
        </div>
      </div>
      <Footer />
    </main>
  )
}

