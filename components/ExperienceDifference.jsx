import Image from 'next/image'

export default function ExperienceDifference() {
  return (
    <section className="py-16 bg-white relative z-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="font-bold mb-4 text-[#111827] text-[28px] sm:text-[32px] lg:text-[36px] font-['Poppins',sans-serif]">
            Experience the Difference
          </h2>
          <p className="font-normal text-[#4B5563] text-[16px] sm:text-[18px] lg:text-[20px] font-['Inter',sans-serif]">
            Discover how subscribing transforms your access, features, and overall experience.
          </p>
        </div>

        {/* Main Content Card with Border */}
        <div className="rounded-[30px] p-4 mt-12 border border-[#1E3A8A33] overflow-visible">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
            {/* Left Side - Images */}
            <div className="relative lg:col-span-7 overflow-hidden lg:overflow-visible lg:min-h-[600px] min-h-[400px] sm:min-h-[450px]">
              {/* Top Image - experience-dif.png (Position Relative) */}
              <div className="relative w-full z-10">
                <Image
                  src="/images/experience-dif.png"
                  alt="School Job Opportunities"
                  width={408}
                  height={234}
                  className="w-full max-w-full sm:max-w-[350px] md:max-w-[408px] h-auto lg:w-[408px] lg:h-[234px] rounded-lg object-cover mx-auto lg:mx-0"
                />
              </div>
              {/* Bottom Image - experience-dif1.png (Position Absolute) */}
              <div className="absolute top-[40%] sm:top-[45%] md:top-[50%] lg:top-[210px] left-1/2 lg:left-[50px] -translate-x-1/2 lg:translate-x-0 z-10 w-[85%] sm:w-[80%] md:w-[75%] max-w-[634px] lg:w-[634px]">
                <Image
                  src="/images/experience-dif1.png"
                  alt="Job Detail"
                  width={634}
                  height={383}
                  className="w-full h-auto rounded-lg shadow-2xl object-cover"
                />
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
                School Job Postings
              </h3>

              {/* Description */}
              <p className="font-normal leading-relaxed text-[14px] lg:text-[16px] text-[#2A2A2A] font-['Inter',sans-serif]">
                Browse exclusive job opportunities posted directly by schools and apply with ease through your Scoova profile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
