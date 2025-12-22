import Image from 'next/image'

export default function SchoolsHero() {
  return (
    <section 
      className="py-12 md:py-16 lg:py-18"
      style={{
        background: 'linear-gradient(90deg, #EFF6FF 0%, #F0FDFA 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* School Building Icon */}
        <div className="flex justify-center mb-6">
          <Image
            src="/images/explore-schol-icon.svg"
            alt="Explore Schools"
            width={112}
            height={104}
            className="w-7 h-7"
          />
        </div>
        
        {/* Title */}
        <h1 
          className="mb-0 text-[#111827] font-poppins font-bold text-[42px]"
        >
          Explore  Schools
        </h1>
        
        {/* Subtitle */}
        <p 
          className="mb-6 max-w-3xl mx-auto text-[#4B5563] font-sans font-normal text-[18px]"
        >
          Search and compare schools worldwide based on verified reviews and ratings.
        </p>
        
        {/* Action Button */}
        <div className="flex justify-center">
          <button 
            className="text-white hover:opacity-90 transition-opacity bg-[#1E3A8A] font-sans font-normal text-base pt-4 pr-9 pb-4 pl-9 rounded-[12px]"
          >
            Register Your School
          </button>
        </div>
      </div>
    </section>
  )
}

