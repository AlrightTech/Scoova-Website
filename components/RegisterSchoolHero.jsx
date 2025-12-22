import Image from 'next/image'

export default function RegisterSchoolHero() {
  return (
    <section 
      className="py-12 md:py-16 lg:py-18"
      style={{
        background: 'linear-gradient(135deg, #F9FAFB 0%, #EFF6FF 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Register Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-[#DBEAFE] rounded-full flex items-center justify-center">
            <Image
              src="/images/register-icon.svg"
              alt="Register"
              width={18}
              height={20}
              className="object-contain"
            />
          </div>
        </div>
        
        {/* Title */}
        <h1 
          className="mb-4 text-[#111827] font-['Poppins',sans-serif] font-bold text-5xl"
        >
          Register Your School
        </h1>
        
        {/* Subtitle */}
        <p 
          className="mb-6 max-w-3xl mx-auto text-[#4B5563] font-['Inter',sans-serif] font-normal text-lg"
        >
          Add your school details to start managing courses, staff, and insights.
        </p>
      </div>
    </section>
  )
}

