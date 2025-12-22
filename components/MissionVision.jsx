import Image from 'next/image'

export default function MissionVision() {
  return (
    <section className="py-16 md:py-20 lg:py-24" style={{ backgroundColor: '#F9FAFB' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Our Mission & Vision
          </h2>
          <p 
            className="text-lg md:text-xl text-gray-600"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Driving transparency and trust in global education
          </p>
        </div>
        
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-start gap-4">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#EFF6FF' }}
              >
                <Image
                  src="/images/mission-icon.svg"
                  alt="Mission"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <div className="flex-1">
                <h3 
                  className="text-2xl font-bold mb-4 text-gray-900"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Our Mission
                </h3>
                <p 
                  className="text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  To empower users with authentic information and bridge the gap between schools and communities. We believe every family deserves access to transparent, verified insights that help them make the best educational choices for their future.
                </p>
              </div>
            </div>
          </div>
          
          {/* Vision Card */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-start gap-4">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#F0FDFA' }}
              >
                <Image
                  src="/images/vision-icon.svg"
                  alt="Vision"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <div className="flex-1">
                <h3 
                  className="text-2xl font-bold mb-4 text-gray-900"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Our Vision
                </h3>
                <p 
                  className="text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  A world where education choices are informed, transparent, and accessible to everyone. We envision a global education ecosystem where trust, quality, and community feedback drive continuous improvement and excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

