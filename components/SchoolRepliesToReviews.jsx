import Image from 'next/image'

export default function SchoolRepliesToReviews() {
  return (
    <section className="py-16 bg-white relative z-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Content Card with Border */}
        <div className="rounded-[30px] p-4 mt-12 overflow-visible">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
            {/* Left Side - Images */}
            <div className="relative lg:col-span-7 overflow-hidden lg:overflow-visible lg:min-h-[500px] min-h-[350px] sm:min-h-[400px]">
              {/* Base Image - experience-dif8.png (Position Relative) */}
              <div className="relative w-full max-w-full lg:max-w-[672px] mx-auto lg:mx-0">
                <Image
                  src="/images/experience-dif8.png"
                  alt="School Reply Background"
                  width={672}
                  height={411}
                  className="w-full h-auto object-contain sm:object-cover lg:w-[672px] lg:h-[411px]"
                />
                {/* Top Image - experience-dif7.png (Position Absolute, left 30px, bottom 0) */}
                <div className="absolute left-[10px] sm:left-[15px] md:left-[20px] lg:left-[30px] bottom-0 z-10 w-[calc(100%-20px)] sm:w-[calc(100%-30px)] md:w-[calc(100%-40px)] lg:w-auto max-w-[calc(100%-20px)] sm:max-w-[calc(100%-30px)] md:max-w-[calc(100%-40px)]">
                  <Image
                    src="/images/experience-dif7.png"
                    alt="School Replies Interface"
                    width={600}
                    height={400}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="lg:col-span-5 mt-8 lg:mt-0">
              {/* Premium User Badge */}
              <div className="inline-block px-6 py-1 mb-6 bg-[#EDEAEA] rounded-[12px] text-[12px] font-normal text-[#0A0A0A] font-['Arial',sans-serif]">
                Premium User
              </div>

              {/* Title */}
              <h3 className="font-semibold mb-4 text-[18px] lg:text-[20px] text-[#000000] font-['Poppins',sans-serif]">
                School Replies to Reviews
              </h3>

              {/* Description */}
              <p className="font-normal leading-relaxed text-[14px] lg:text-[16px] text-[#2A2A2A] font-['Inter',sans-serif]">
                See official school responses to reviews for better context and transparency in communication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

