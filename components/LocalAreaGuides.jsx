import Image from 'next/image'

export default function LocalAreaGuides() {
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
                Local Area Guides
              </h3>

              {/* Description */}
              <p className="font-normal leading-relaxed text-[14px] lg:text-[16px] text-[#2A2A2A] font-['Inter',sans-serif] mb-4">
                Get to know the surroundings before you decide — explore neighborhoods, facilities, and resources near each school.
              </p>

              {/* Bullet List */}
              <ul className="space-y-2">
                <li className="flex items-center text-[14px] lg:text-[16px] text-[#2A2A2A] font-['Inter',sans-serif]">
                  <span className="mr-2">•</span>
                  <span>Hospital</span>
                </li>
                <li className="flex items-center text-[14px] lg:text-[16px] text-[#2A2A2A] font-['Inter',sans-serif]">
                  <span className="mr-2">•</span>
                  <span>Parks</span>
                </li>
                <li className="flex items-center text-[14px] lg:text-[16px] text-[#2A2A2A] font-['Inter',sans-serif]">
                  <span className="mr-2">•</span>
                  <span>Bus Stop</span>
                </li>
              </ul>
            </div>

            {/* Right Side - Images */}
            <div className="relative lg:col-span-7 overflow-hidden lg:overflow-visible lg:min-h-[500px] min-h-[450px] sm:min-h-[480px] order-1 lg:order-2">
              {/* Hospital Image - experience-dif12.png (Bottom-left, on top, z-10) */}
              <div className="absolute bottom-0 left-0 sm:left-[10px] md:left-[15px] lg:left-[20px] z-10 w-full max-w-[140px] sm:max-w-[160px] md:max-w-[180px] lg:max-w-[192px]">
                <Image
                  src="/images/experience-dif12.png"
                  alt="Local Area Guide - Hospital"
                  width={234}
                  height={275}
                  className="w-full h-auto object-contain sm:object-cover rounded-[10px] shadow-md"
                />
              </div>
              {/* Parks Image - experience-dif14.png (Top-right, behind image 12, z-0) */}
              <div className="absolute top-[40px] sm:top-[60px] md:top-[80px] lg:top-[120px] right-[20px] sm:right-[40px] md:right-[100px] lg:right-[228px] z-0 w-full max-w-[140px] sm:max-w-[160px] md:max-w-[180px] lg:max-w-[192px]">
                <Image
                  src="/images/experience-dif14.png"
                  alt="Local Area Guide - Parks"
                  width={234}
                  height={275}
                  className="w-full h-auto object-contain sm:object-cover rounded-[10px] shadow-md"
                />
              </div>
              {/* Bus Stop Image - experience-dif13.png (Separate on right side, not overlapping) */}
              <div className="absolute top-[50%] sm:top-[45%] md:top-[40%] lg:top-[30%] right-0 sm:right-[10px] md:right-[15px] lg:right-[20px] -translate-y-1/2 lg:translate-y-0 z-10 w-full max-w-[140px] sm:max-w-[160px] md:max-w-[180px] lg:max-w-[192px]">
                <Image
                  src="/images/experience-dif13.png"
                  alt="Local Area Guide - Bus Stop"
                  width={234}
                  height={275}
                  className="w-full h-auto object-contain sm:object-cover rounded-[10px] shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

