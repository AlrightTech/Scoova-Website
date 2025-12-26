import Image from 'next/image'

export default function WorldwideSchoolInformation() {
  return (
    <section className="py-16 bg-white relative z-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Content Card with Border */}
        <div className="rounded-[30px] p-4 mt-12 border border-[#1E3A8A33] overflow-visible">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
            {/* Left Side - Images */}
            <div className="relative lg:col-span-7 overflow-hidden lg:overflow-visible lg:min-h-[600px] min-h-[400px] sm:min-h-[450px]">
              {/* Base Image - experience-dif9.png (Position Relative) */}
              <div className="relative w-full max-w-full lg:max-w-[672px] mx-auto lg:mx-0">
                <Image
                  src="/images/experience-dif9.png"
                  alt="Worldwide School Information Background"
                  width={672}
                  height={411}
                  className="w-full h-auto object-contain sm:object-cover lg:w-[672px] lg:h-[411px]"
                />
                {/* Top Image - experience-dif10.png (Position Absolute, left 30px, top 200px) */}
                <div 
                  className="absolute z-10 left-[10px] sm:left-[15px] md:left-[20px] lg:left-[30px] top-[80px] sm:top-[120px] md:top-[160px] lg:top-[200px] w-[calc(100%-20px)] sm:w-[calc(100%-30px)] md:w-[calc(100%-40px)] lg:w-auto max-w-[calc(100%-20px)] sm:max-w-[calc(100%-30px)] md:max-w-[calc(100%-40px)]"
                >
                  <Image
                    src="/images/experience-dif10.png"
                    alt="Worldwide School Information Interface"
                    width={600}
                    height={400}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="lg:col-span-5 mt-8 lg:mt-0">
              {/* Free User Plan Badge */}
              <div className="inline-block px-6 py-1 mb-6 bg-[#EDEAEA] rounded-full text-[12px] font-normal text-[#0A0A0A] font-['Arial',sans-serif]">
                Free User Plan
              </div>

              {/* Title */}
              <h3 className="font-semibold mb-4 text-[18px] lg:text-[20px] text-[#000000] font-['Poppins',sans-serif]">
                Worldwide School Information
              </h3>

              {/* Description */}
              <p className="font-normal leading-relaxed text-[14px] lg:text-[16px] text-[#2A2A2A] font-['Inter',sans-serif]">
                Discover schools across the globe with verified data and authentic insights — all in one place. Start exploring institutions that match your educational goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

