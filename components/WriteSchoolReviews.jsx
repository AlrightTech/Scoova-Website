import Image from 'next/image'

export default function WriteSchoolReviews() {
  return (
    <section className="py-16 bg-white relative z-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Content Card with Border */}
        <div className="rounded-[30px] p-4 mt-12 overflow-visible">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
            {/* Left Side - Form Image */}
            <div className="relative lg:col-span-7 overflow-hidden lg:overflow-visible order-1 lg:order-1">
              {/* Main Image - experience-dif15.png (Write a Review Form) */}
              <div className="relative z-10 w-full max-w-full sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] mx-auto lg:mx-0">
                <Image
                  src="/images/experience-dif15.png"
                  alt="Write School Reviews Form"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain sm:object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="lg:col-span-5 mt-8 lg:mt-0 order-2 lg:order-2">
              {/* Free User Plan Badge */}
              <div className="inline-block px-6 py-1 mb-6 bg-[#EDEAEA] rounded-[12px] text-[12px] font-normal text-[#0A0A0A] font-['Arial',sans-serif]">
                Free User Plan
              </div>

              {/* Title */}
              <h3 className="font-semibold mb-4 text-[18px] lg:text-[20px] text-[#000000] font-['Poppins',sans-serif]">
                Write School Reviews
              </h3>

              {/* Description */}
              <p className="font-normal leading-relaxed text-[14px] lg:text-[16px] text-[#2A2A2A] font-['Inter',sans-serif]">
                Share your experiences and opinions to help others make informed decisions about schools worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

