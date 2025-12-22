import SearchBox from './SearchBox'
import Stats from './Stats'

export default function Hero() {
  return (
    <section 
      className="relative py-16 md:py-24 overflow-hidden min-h-[600px]"
      style={{
        backgroundImage: 'url(/images/hero-section.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold mb-4">
            <span style={{ color: '#1E3A8A' }}>Explore.</span>{' '}
            <span style={{ color: '#F59E0B' }}>Review.</span>{' '}
            <span style={{ color: '#0D9488' }}>Trust.</span>
          </h1>
          <p className="font-sans text-2xl text-gray-700 font-medium mb-2">
            The Global Platform for School Insights
          </p>
          <p className="text-base md:text-lg text-gray-600">
            Search, compare, and review schools and educators from around the world.
          </p>
        </div>

        {/* Search Box */}
        <div className="mb-8">
          <SearchBox />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="text-white px-6 sm:px-8 py-3 sm:py-4 font-sans font-normal text-sm sm:text-base hover:opacity-90 transition-opacity rounded-[12px] w-full sm:w-auto" style={{ backgroundColor: '#1E3A8A' }}>
            Post a Review
          </button>
          <button className="bg-transparent border-2 px-6 sm:px-8 py-3 sm:py-4 font-sans font-normal text-sm sm:text-base hover:opacity-90 transition-opacity rounded-[12px] w-full sm:w-auto" style={{ borderColor: '#1E3A8A', color: '#1E3A8A' }}>
            Subscribe to Unlock Reviews
          </button>
        </div>

        {/* Stats */}
        <Stats />
      </div>

      {/* Talk with Us Floating Button */}
      {/* <button 
        className="fixed bottom-6 right-6 flex items-center gap-2 text-white px-4 sm:px-6 py-3 sm:py-4 font-sans font-medium text-sm hover:opacity-90 transition-opacity rounded-[12px] shadow-lg z-50"
        style={{ backgroundColor: '#1E3A8A' }}
      >
        <img 
          src="/images/talk-headphones.png" 
          alt="Talk with Us" 
          className="w-5 h-5 sm:w-6 sm:h-6"
        />
        <span>Talk with Us</span>
      </button> */}
    </section>
  )
}

