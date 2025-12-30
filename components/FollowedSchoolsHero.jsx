import Image from 'next/image'

export default function FollowedSchoolsHero() {
  return (
    <section 
      className="py-16 md:py-20 lg:py-24"
      style={{
        background: 'linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon - Dark Blue Building Icon */}
        <div className="flex justify-center mb-6">
          <div 
            className="w-12 h-12 flex items-center justify-center"
            style={{ color: '#1E3A8A' }}
          >
            <svg 
              width="48" 
              height="48" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: '#1E3A8A' }}
            >
              <path 
                d="M12 2L2 7L2 20L12 22L22 20L22 7L12 2Z" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                fill="none"
              />
              <path 
                d="M12 22L12 12" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                fill="none"
              />
              <path 
                d="M2 7L12 12L22 7" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                fill="none"
              />
              <path 
                d="M7 12L7 17" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                fill="none"
              />
              <path 
                d="M17 12L17 17" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>
        </div>
        
        {/* Title */}
        <h1 
          className="mb-4 text-[#111827] font-['Poppins',sans-serif] font-bold text-4xl md:text-5xl"
        >
          Your Followed Schools
        </h1>
        
        {/* Subtitle */}
        <p 
          className="mb-6 max-w-3xl mx-auto text-[#4B5563] font-['Inter',sans-serif] font-normal text-base md:text-lg"
        >
          Stay connected with the schools you love and explore their latest updates, reviews, and details.
        </p>
      </div>
    </section>
  )
}

