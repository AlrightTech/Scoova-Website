import Image from 'next/image'
import Link from 'next/link'

export default function JoinMission() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="bg-white rounded-lg shadow-lg p-8 md:p-12 relative overflow-hidden"
          style={{
            background: 'linear-gradient(to bottom, white 0%, #FEFCE8 100%)'
          }}
        >
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div 
              className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#EFF6FF' }}
            >
              <Image
                src="/images/explore-schol-icon.svg"
                alt="Join Mission"
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </div>
          </div>
          
          {/* Heading */}
          <h2 
            className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Want to be part of our mission?
          </h2>
          
          {/* Text */}
          <p 
            className="text-center text-gray-600 mb-8 text-base md:text-lg leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Join our network of educators and contributors helping shape the future of education. Whether you're a school administrator, teacher, parent, or student - your voice matters in building a more transparent educational ecosystem.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/get-started"
              className="px-8 py-3 rounded-lg text-white font-medium hover:opacity-90 transition-opacity text-center"
              style={{ backgroundColor: '#1E3A8A', fontFamily: 'Inter, sans-serif' }}
            >
              Get Started
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity text-center border-2"
              style={{ 
                borderColor: '#1E3A8A', 
                color: '#1E3A8A',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              Contact Us
            </Link>
          </div>
          
          {/* Icons with Labels */}
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mb-2">
                <Image
                  src="/images/review-icon.svg"
                  alt="Share Reviews"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <span className="text-sm text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                Share Reviews
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-2">
                <Image
                  src="/images/explore-schol-icon.svg"
                  alt="List Your School"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <span className="text-sm text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                List Your School
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                <Image
                  src="/images/join-community-icon.svg"
                  alt="Join Community"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <span className="text-sm text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                Join Community
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

