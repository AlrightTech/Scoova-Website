import Image from 'next/image'

export default function VerifiedEmployeeReviews() {
  return (
    <section className="py-16 bg-white relative z-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Content Card with Border */}
        <div className="rounded-[30px] p-4 mt-12 overflow-visible">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
            {/* Left Side - Content */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              {/* Premium User Badge */}
              <div className="inline-block px-6 py-1 mb-6 bg-[#EDEAEA] rounded-[12px] text-[12px] font-normal text-[#0A0A0A] font-['Arial',sans-serif]">
                Premium User
              </div>

              {/* Title */}
              <h3 className="font-semibold mb-4 text-[18px] lg:text-[20px] text-[#000000] font-['Poppins',sans-serif]">
                Verified Employee Reviews
              </h3>

              {/* Description */}
              <p className="font-normal leading-relaxed text-[14px] lg:text-[16px] text-[#2A2A2A] font-['Inter',sans-serif]">
                Read authentic, verified reviews from current and former school employees to understand internal culture and leadership.
              </p>
            </div>

            {/* Right Side - Images */}
            <div className="relative lg:col-span-7 overflow-hidden lg:overflow-visible lg:min-h-[470px] min-h-[250px] sm:min-h-[300px] order-1 lg:order-2">
              {/* Main Image - experience-dif6.png (Contains all three overlapping cards) */}
              <div className="relative z-10 w-full max-w-full mx-auto lg:mx-0">
                <Image
                  src="/images/experience-dif6.png"
                  alt="Verified Employee Reviews Cards"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain sm:object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

