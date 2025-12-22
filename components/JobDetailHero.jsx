import Image from 'next/image'

export default function JobDetailHero({ job }) {
  return (
    <section 
      className="py-16 md:py-20"
      style={{
        background: 'linear-gradient(135deg, #F9FAFB 0%, #EFF6FF 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Full-time Tag - Top Right */}
        <div className="absolute top-0 right-4 sm:right-8">
          <span 
            className="px-4 py-1.5 rounded-full text-[#4A90E2] bg-[#DBEAFE] font-['Poppins',sans-serif] font-semibold text-sm"
          >
            {job?.employmentType || 'Full-time'}
          </span>
        </div>

        <div className="text-center">
          {/* Icon with Circular Background */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-[#DBEAFE] flex items-center justify-center">
              <Image
                src="/images/jobview-detailpg.svg"
                alt="Job"
                width={28}
                height={26}
                className="object-contain"
              />
            </div>
          </div>
          
          {/* Job Title */}
          <h1 
            className="text-5xl font-bold mb-4 text-[#111827]"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {job?.title || 'English Language Teacher – Secondary Level'}
          </h1>
          
          {/* Description */}
          <p 
            className="text-lg text-[#4B5563] font-normal mb-6 max-w-3xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Discover open positions from verified schools worldwide.
          </p>

          {/* School Info - Logo on left, name on right, location below */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              {/* Circular Logo */}
              <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/images/job-detail-loc.png"
                  alt="School Logo"
                  width={32}
                  height={32}
                  className="object-contain w-full h-full"
                />
              </div>
              {/* School Name */}
              <p 
                className="text-[#667085] font-['Poppins',sans-serif] font-semibold text-base"
              >
                {job?.schoolName || 'Northwood International School'}
              </p>
            </div>
            {/* Location - Centered below */}
            <p 
              className="text-[#667085] font-['Poppins',sans-serif] font-normal text-base"
            >
              {job?.location || 'London, UK'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

