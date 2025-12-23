import Image from 'next/image'

export default function WriteSeniorLeadershipReviews() {
  return (
    <section className="py-16 bg-white relative z-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Content Card with Border */}
        <div className="rounded-[30px] p-4 mt-12 overflow-visible">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
            {/* Left Side - Content */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              {/* Free User Plan Badge */}
              <div className="inline-block px-6 py-1 mb-6 bg-[#EDEAEA] rounded-[12px] text-[12px] font-normal text-[#0A0A0A] font-['Arial',sans-serif]">
                Free User Plan
              </div>

              {/* Title */}
              <h3 className="font-semibold mb-4 text-[18px] lg:text-[20px] text-[#000000] font-['Poppins',sans-serif]">
                Write Senior Leadership Reviews
              </h3>

              {/* Description */}
              <p className="font-normal leading-relaxed text-[14px] lg:text-[16px] text-[#2A2A2A] font-['Inter',sans-serif]">
                Provide feedback on school leadership teams to contribute to transparency and continuous improvement.
              </p>
            </div>

            {/* Right Side - Images */}
            <div className="relative lg:col-span-7 overflow-hidden lg:overflow-visible lg:min-h-[450px] min-h-[400px] sm:min-h-[420px] order-1 lg:order-2">
              {/* Top Image - experience-dif16.png (Senior Leadership Card) */}
              <div className="relative z-10 w-full max-w-full sm:max-w-[300px] md:max-w-[340px] lg:max-w-[369px] mx-auto lg:mx-0 lg:mr-auto">
                <Image
                  src="/images/experience-dif16.png"
                  alt="Senior Leadership Card"
                  width={369}
                  height={211}
                  className="w-full h-auto object-contain sm:object-cover rounded-lg shadow-md"
                />
              </div>
              {/* Bottom Image - experience-dif17.png (Employee Performance Evaluation) - Positioned directly below right edge of image 16, no gap */}
              <div className="relative z-10 w-full max-w-full sm:max-w-[300px] md:max-w-[340px] lg:max-w-[369px] mx-auto lg:mx-0 lg:ml-auto lg:mr-0 mt-4 lg:mt-0 lg:absolute lg:top-[211px] lg:right-0" style={{ marginTop: 0 }}>
                <Image
                  src="/images/experience-dif17.png"
                  alt="Employee Performance Evaluation"
                  width={369}
                  height={211}
                  className="w-full h-auto object-contain sm:object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

