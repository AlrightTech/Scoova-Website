import Image from 'next/image'
import PricingCard from './PricingCard'

export default function PricingPlans() {
  return (
    <>
      {/* Hero Section with Background */}
      <section 
        className="py-16 md:py-18 relative overflow-hidden"
        style={{
          backgroundImage: 'url(/images/pricing-plan-img.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundBlendMode: 'overlay'
        }}
      >

        

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <Image
                src="/images/pricing-plan-icon.svg"
                alt="Pricing Plan"
                width={26}
                height={24}
                className="object-contain"
              />
            </div>
            <h1 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-[#111827]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Choose Your Scoova Plan
            </h1>
            <p 
              className="text-base sm:text-lg lg:text-xl text-[#4B5563] font-normal"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Unlock verified school insights, management tools, and premium analytics.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section - No Background */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto">
            {/* Free User Card */}
            <PricingCard 
              type="free"
              variant="pricing"
              badgeText="Current Plan"
              buttonText="Free Plan"
            />

            {/* Premium User Card */}
            <PricingCard 
              type="premium"
              variant="pricing"
              buttonText="Your Current Plan"
            />
          </div>
        </div>
      </section>
    </>
  )
}

