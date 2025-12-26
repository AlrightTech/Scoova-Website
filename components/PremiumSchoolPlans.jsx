import Image from 'next/image'

export default function PremiumSchoolPlans() {
  return (
    <>
      {/* Hero Section with Background */}
      <section 
        className="pt-24 pb-16 md:pt-28 md:pb-18 relative overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #EFF6FF 0%, #FFFFFF 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <svg 
                width="26" 
                height="24" 
                viewBox="0 0 26 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: '#1E3A8A' }}
              >
                <path 
                  d="M13 2L2 8L13 14L24 8L13 2Z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M2 16L13 22L24 16" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M2 12L13 18L24 12" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h1 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-[#111827]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Choose Your Scoova Plan
            </h1>
            <p 
              className="text-base sm:text-lg lg:text-xl text-[#4B5563] font-normal"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Unlock verified school insights, management tools, and premium analytics.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto">
            {/* Basic School Plan Card */}
            <div className="bg-white rounded-[18px] p-8 relative border-2 flex flex-col" style={{ borderColor: '#0000001A' }}>
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl" style={{ color: '#0A0A0A', fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                    Basic School Plan
                  </h3>
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
              </div>

              {/* Description */}
              <p className="font-sans font-normal text-[18px] mb-4" style={{ color: '#717182' }}>
                Free access for schools
              </p>

              {/* Pricing */}
              <div className="mb-8">
                <span className="font-sans font-normal text-[18px]" style={{ color: '#0A0A0A' }}>
                  $0
                </span>
                <span className="font-sans font-normal text-[18px]" style={{ color: '#717182' }}>
                  {' '}/month
                </span>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <svg 
                    className="w-7 h-8 flex-shrink-0 mt-0.5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    style={{ color: '#000000' }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span 
                    className="font-sans font-normal text-[18.5px]" 
                    style={{ 
                      color: '#0A0A0AE5',
                      lineHeight: '31.35px',
                      letterSpacing: '0px'
                    }}
                  >
                    Users can view basic school info
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg 
                    className="w-7 h-8 flex-shrink-0 mt-0.5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    style={{ color: '#000000' }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span 
                    className="font-sans font-normal text-[18.5px]" 
                    style={{ 
                      color: '#0A0A0AE5',
                      lineHeight: '31.35px',
                      letterSpacing: '0px'
                    }}
                  >
                    Users can view reviews
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg 
                    className="w-7 h-8 flex-shrink-0 mt-0.5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    style={{ color: '#000000' }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span 
                    className="font-sans font-normal text-[18.5px]" 
                    style={{ 
                      color: '#0A0A0AE5',
                      lineHeight: '31.35px',
                      letterSpacing: '0px'
                    }}
                  >
                    Profile visibility
                  </span>
                </li>
              </ul>

              {/* Button */}
              <button 
                className="w-full px-6 py-3 rounded-lg font-semibold text-[16px] hover:opacity-90 transition-opacity mt-auto"
                style={{ 
                  backgroundColor: '#E8F0FE',
                  color: '#1E3A8A',
                  border: '1px solid #D1D5DB',
                  fontFamily: 'Poppins, sans-serif',
                  lineHeight: '100%',
                  letterSpacing: '0px'
                }}
              >
                Free Access
              </button>
            </div>

            {/* Premium School Plan Card */}
            <div className="bg-white rounded-[18px] p-8 relative border-2 flex flex-col" style={{ borderColor: '#BEDBFF', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
              {/* Best Value Badge */}
              <div 
                className="absolute top-0 right-0 text-white px-6 py-1 font-bold text-[18px] z-10" 
                style={{ 
                  background: '#1E3A8A',
                  fontFamily: 'Poppins, sans-serif', 
                  lineHeight: '31.35px', 
                  letterSpacing: '0px', 
                  borderTopLeftRadius: '0px', 
                  borderBottomLeftRadius: '12px', 
                  borderTopRightRadius: '12px', 
                  borderBottomRightRadius: '0px' 
                }}
              >
                Best Value
              </div>

              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl" style={{ color: '#0A0A0A', fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                    Premium School Plan
                  </h3>
                  <svg className="w-6 h-6" style={{ color: '#60A5FA' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>

              {/* Description */}
              <p className="font-sans font-normal text-[18px] mb-4" style={{ color: '#717182' }}>
                Complete school management platform
              </p>

              {/* Pricing */}
              <div className="mb-8">
                <span className="font-sans font-normal text-[18px]" style={{ color: '#0A0A0A' }}>
                  $29.99
                </span>
                <span className="font-sans font-normal text-[18px]" style={{ color: '#717182' }}>
                  {' '}/month
                </span>
              </div>

              {/* Complete school toolkit section */}
              <div className="px-4 py-3 rounded-[12px] mb-6" style={{ backgroundColor: '#E8F0FE', borderTop: '1.31px solid #BEDBFF' }}>
                <p className="font-sans font-normal text-[18px]" style={{ color: '#1C398E', lineHeight: '31.35px', letterSpacing: '0px' }}>
                  Complete school toolkit:
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <svg 
                    className="w-7 h-8 flex-shrink-0 mt-0.5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    style={{ color: '#155DFC' }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span 
                    className="font-sans font-normal text-[18.5px]" 
                    style={{ 
                      color: '#0A0A0AE5',
                      lineHeight: '31.35px',
                      letterSpacing: '0px'
                    }}
                  >
                    Update general information
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg 
                    className="w-7 h-8 flex-shrink-0 mt-0.5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    style={{ color: '#155DFC' }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span 
                    className="font-sans font-normal text-[18.5px]" 
                    style={{ 
                      color: '#0A0A0AE5',
                      lineHeight: '31.35px',
                      letterSpacing: '0px'
                    }}
                  >
                    Create image gallery
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg 
                    className="w-7 h-8 flex-shrink-0 mt-0.5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    style={{ color: '#155DFC' }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span 
                    className="font-sans font-normal text-[18.5px]" 
                    style={{ 
                      color: '#0A0A0AE5',
                      lineHeight: '31.35px',
                      letterSpacing: '0px'
                    }}
                  >
                    Reply to reviews
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg 
                    className="w-7 h-8 flex-shrink-0 mt-0.5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    style={{ color: '#155DFC' }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span 
                    className="font-sans font-normal text-[18.5px]" 
                    style={{ 
                      color: '#0A0A0AE5',
                      lineHeight: '31.35px',
                      letterSpacing: '0px'
                    }}
                  >
                    Manage senior leadership
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg 
                    className="w-7 h-8 flex-shrink-0 mt-0.5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    style={{ color: '#155DFC' }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span 
                    className="font-sans font-normal text-[18.5px]" 
                    style={{ 
                      color: '#0A0A0AE5',
                      lineHeight: '31.35px',
                      letterSpacing: '0px'
                    }}
                  >
                    Access Pulse Survey Tool
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg 
                    className="w-7 h-8 flex-shrink-0 mt-0.5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    style={{ color: '#155DFC' }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span 
                    className="font-sans font-normal text-[18.5px]" 
                    style={{ 
                      color: '#0A0A0AE5',
                      lineHeight: '31.35px',
                      letterSpacing: '0px'
                    }}
                  >
                    Recruitment platform (job postings & applications)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg 
                    className="w-7 h-8 flex-shrink-0 mt-0.5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    style={{ color: '#155DFC' }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span 
                    className="font-sans font-normal text-[18.5px]" 
                    style={{ 
                      color: '#0A0A0AE5',
                      lineHeight: '31.35px',
                      letterSpacing: '0px'
                    }}
                  >
                    System Support + Notifications
                  </span>
                </li>
              </ul>

              {/* Button */}
              <button 
                className="w-full px-6 py-3 rounded-lg font-bold text-[16px] text-white hover:opacity-90 transition-opacity mt-auto"
                style={{ 
                  backgroundColor: '#1E3A8A',
                  fontFamily: 'Poppins, sans-serif',
                  lineHeight: '100%',
                  letterSpacing: '0px'
                }}
              >
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

