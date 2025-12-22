import Image from 'next/image'
import Link from 'next/link'

export default function ContactHero() {
  return (
    <section 
      className="py-16 md:py-20"
      style={{
        background: 'linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text and Buttons */}
          <div>
            <h1 
              className="text-5xl font-bold mb-6 text-[#111827]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              We're Here to Help.
            </h1>
            <p 
              className="text-xl text-[#4B5563] font-normal mb-8 leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Whether you're a parent, educator, or school representative — we'd love to hear from you. Let's work together to make education transparent and accessible worldwide.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/schools"
                className="px-8 py-3 rounded-xl text-white font-normal hover:opacity-90 transition-opacity text-center flex items-center justify-center"
                style={{ backgroundColor: '#1E3A8A', fontFamily: 'Inter, sans-serif' }}
              >
                Explore Schools
              </Link>
              <Link
                href="/review"
                className="px-8 py-3 rounded-xl font-normal hover:opacity-90 transition-opacity text-center border border-[#1E3A8A] flex items-center justify-center"
                style={{ 
                  color: '#1E3A8A',
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                Post a Review
              </Link>
            </div>
          </div>
          
          {/* Right Column - World Map */}
          <div className="relative">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/map-img (2).png"
                alt="World Map"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

