import Image from 'next/image'

export default function SchoolRecruitmentPlatform() {
  return (
    <section className="py-16 bg-white relative z-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Content Card with Border */}
        <div className="rounded-[30px] p-4 mt-12 border border-[#1E3A8A33] overflow-visible">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
            {/* Left Side - Images */}
            <div className="relative lg:col-span-7 overflow-hidden lg:overflow-visible lg:min-h-[600px] min-h-[400px] sm:min-h-[450px]">
              {/* Image - schoolplan6.png */}
              <div className="relative w-full max-w-full lg:max-w-[672px] mx-auto lg:mx-0">
                <Image
                  src="/images/schoolplan6.png"
                  alt="Recruitment Platform"
                  width={672}
                  height={411}
                  className="w-full h-auto object-contain sm:object-cover lg:w-[672px] lg:h-[411px]"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="lg:col-span-5 mt-8 lg:mt-0">
              {/* Premium School Plan Badge */}
              <div className="inline-block px-6 py-1 mb-6 bg-[#EDEAEA] rounded-[12px] text-[12px] font-normal text-[#0A0A0A] font-['Arial',sans-serif]">
                Premium School Plan
              </div>

              {/* Title */}
              <h3 className="font-semibold mb-4 text-[18px] lg:text-[20px] text-[#000000] font-['Poppins',sans-serif]">
                Recruitment Platform
              </h3>

              {/* Description */}
              <p className="font-normal leading-relaxed text-[14px] lg:text-[16px] text-[#2A2A2A] font-['Inter',sans-serif]">
                Post job openings, manage applications, and find the best candidates for your school. Our integrated recruitment platform streamlines the hiring process from posting to onboarding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

