export default function CallToAction() {
  return (
    <section 
      className="py-16 md:py-20"
      style={{ backgroundColor: '#DBEAFE' }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <svg 
            className="w-16 h-16 md:w-20 md:h-20" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            style={{ color: '#1E3A8A' }}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
            />
          </svg>
        </div>
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#1E3A8A' }}>
          Ready to find your perfect school?
        </h2>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Explore our comprehensive listings and connect with top institutions.
        </p>
        
        {/* Button */}
        <button
          className="px-8 py-4 md:px-10 md:py-5 rounded-lg text-white font-medium text-lg md:text-xl hover:opacity-90 transition-opacity"
          style={{ backgroundColor: '#1E3A8A' }}
        >
          Find Your School
        </button>
      </div>
    </section>
  )
}

