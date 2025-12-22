import Image from 'next/image'

export default function FollowedSchoolsHero() {
  return (
    <section 
      className="py-16 md:py-20 lg:py-24"
      style={{
        background: 'linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <Image
            src="/images/pricing-plan-icon.svg"
            alt="Followed Schools"
            width={28}
            height={26}
            className="object-contain"
          />
        </div>
        
        {/* Title */}
        <h1 
          className="mb-4 text-[#111827] font-['Poppins',sans-serif] font-bold text-5xl"
        >
          Your Followed Schools
        </h1>
        
        {/* Subtitle */}
        <p 
          className="mb-6 max-w-3xl mx-auto text-[#4B5563] font-['Inter',sans-serif] font-normal text-lg"
        >
          Stay connected with the schools you love and explore their latest updates, reviews, and details.
        </p>
      </div>
    </section>
  )
}

