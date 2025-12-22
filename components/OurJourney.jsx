import Image from 'next/image'

export default function OurJourney() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Our Journey
            </h2>
            <div className="space-y-4 text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
              <p className="text-base md:text-lg leading-relaxed">
                Scoova was founded with a simple yet powerful vision: to bridge the information gap between schools and families seeking quality education. We recognized that making educational decisions is one of the most important choices families make, yet finding reliable, transparent information was often challenging.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Our journey began with extensive research and conversations with parents, students, and educators worldwide. We discovered that what families needed most was authentic, verified feedback from real experiences—not just marketing materials or incomplete data.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Today, Scoova has grown into a trusted platform connecting thousands of schools with millions of families globally. We continue to innovate, ensuring our platform remains the most reliable source for educational insights, helping families make informed decisions that shape futures.
              </p>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/journey-img.png"
                alt="Our Journey"
                fill
                className="object-cover"
              />
              {/* Gradient Overlay */}
              <div 
                className="absolute bottom-0 left-0 w-full h-32"
                style={{
                  background: 'linear-gradient(to top, rgba(16, 185, 129, 0.3), transparent)'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

