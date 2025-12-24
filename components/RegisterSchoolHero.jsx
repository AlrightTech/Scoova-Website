import Image from 'next/image'

export default function RegisterSchoolHero() {
  return (
    <section 
      className="py-8 sm:py-10 md:py-12 lg:py-16"
      style={{
        background: 'linear-gradient(135deg, #F9FAFB 0%, #EFF6FF 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Register Icon */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#DBEAFE] rounded-full flex items-center justify-center">
            <Image
              src="/images/register-icon.svg"
              alt="Register"
              width={18}
              height={20}
              className="object-contain w-4 h-4 sm:w-5 sm:h-5 md:w-[18px] md:h-5"
            />
          </div>
        </div>
        
        {/* Title */}
        <h1 
          className="mb-3 sm:mb-4 text-[#111827] font-['Poppins',sans-serif] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-2"
        >
          Register Your School
        </h1>
        
        {/* Subtitle */}
        <p 
          className="mb-4 sm:mb-6 max-w-3xl mx-auto text-[#4B5563] font-['Inter',sans-serif] font-normal text-sm sm:text-base md:text-lg px-2"
        >
          Add your school details to start managing courses, staff, and insights.
        </p>
      </div>
    </section>
  )
}

