import Image from 'next/image'

export default function SchoolRatings() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white relative z-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Content Card with Border */}
        <div className="rounded-[30px] p-4 mt-12s overflow-visible mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Side - Content */}
            <div className="lg:col-span-5">
              {/* Premium User Badge */}
              <div className="inline-block px-6 py-1 mb-6 bg-[#EDEAEA] rounded-[12px] text-[12px] font-normal text-[#0A0A0A] font-['Arial',sans-serif]">
                Premium User
              </div>

              {/* Title */}
              <h3 className="font-semibold mb-4 text-[20px] text-[#000000] font-['Poppins',sans-serif]">
                Scoova School Ratings
              </h3>

              {/* Description */}
              <p className="font-normal leading-relaxed text-[16px] text-[#2A2A2A] font-['Inter',sans-serif]">
                Access detailed 1-10 rating insights powered by verified community feedback and analytics.
              </p>
            </div>

            {/* Right Side - Images */}
            <div className="relative lg:col-span-7 overflow-visible" style={{ minHeight: '600px' }}>
              {/* Bottom Image - experience-dif3.png (Behind, Position Absolute) */}
              <div className="absolute top-[216px] left-[289px] z-0">
                <Image
                  src="/images/experience-dif3.png"
                  alt="School Rating Detail"
                  width={301}
                  height={252}
                  className="object-cover"
                  style={{
                    boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.21)',
                    borderRadius: '9px'
                  }}
                />
              </div>
              {/* Top Image - experience-dif2.png (On Top, Position Relative) */}
              <div className="relative z-10">
                <Image
                  src="/images/experience-dif2.png"
                  alt="School Rating Card"
                  width={513}
                  height={229}
                  className="object-cover rounded-[9px]"
                />
              </div>
              {/* Orange Arrow - Pointing to Rating Section */}
              <div className="absolute top-[13px] right-[7px] z-20">
                <Image
                  src="/images/orange-arrow.svg"
                  alt="Arrow pointing to rating"
                  width={250}
                  height={180}
                  className="w-auto h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

