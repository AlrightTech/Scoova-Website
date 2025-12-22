import Image from 'next/image'
import Link from 'next/link'

export default function AboutHero() {
  return (
    <section 
      className="relative py-16 md:py-20 lg:py-24 overflow-hidden min-h-[600px]"
      style={{
        backgroundImage: 'url(/images/about-hero-img.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Main Title - Two Lines with Different Colors */}
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          <span style={{ color: '#1E3A8A' }}>Connecting Schools.</span>
          <br />
          <span style={{ color: '#0D9488' }}>Empowering Trust.</span>
        </h1>
        
        {/* Subtitle */}
        <p 
          className="text-2xl text-[#374151] font-['Inter',sans-serif] font-normal mb-12 max-w-4xl mx-auto mt-3"
        >
          At Scoova, we help parents, students, and educators discover transparent, verified insights about schools around the world.
        </p>
        
        {/* Central Graphic with Button */}
        <div className="flex justify-center mb-12 pt-6">
              
              {/* Button Overlaid on Graphic */}
              <div className="relative z-10">
                <Link
                  href="/schools"
                  className="px-8 py-4 rounded-xl text-white font-normal hover:opacity-90 transition-opacity text-base shadow-lg"
                  style={{ backgroundColor: '#1E3A8A', fontFamily: 'Inter, sans-serif' }}
                >
                  Explore Schools
                </Link>
              </div>
            
        </div>
        
        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-12">
          <div>
            <div 
              className="text-xl md:text-3xl font-semibold mb-2"
              style={{ color: '#1E3A8A', fontFamily: 'Poppins, sans-serif' }}
            >
              50K+
            </div>
            <div className="text-[#4B5563] text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
              Schools Worldwide
            </div>
          </div>
          <div>
            <div 
              className="text-xl md:text-3xl font-semibold mb-2"
              style={{ color: '#F59E0B', fontFamily: 'Poppins, sans-serif' }}
            >
              200K+
            </div>
            <div className="text-[#4B5563] text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
              Verified Reviews
            </div>
          </div>
          <div>
            <div 
              className="text-xl md:text-3xl font-semibold mb-2"
              style={{ color: '#0D9488', fontFamily: 'Poppins, sans-serif' }}
            >
              180+
            </div>
            <div className="text-[#4B5563] text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
              Countries Served
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

