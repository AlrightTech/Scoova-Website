'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function RecentlyReviewedSchools() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const schools = [
    {
      id: 1,
      name: 'Harvard-Westlake School',
      location: 'Los Angeles, USA',
      image: '/images/Harvard University.png',
      rating: '1-10',
      reviews: '245 Reviews',
      description: 'Leading preparatory school with exceptional college placement rates.'
    },
    {
      id: 2,
      name: 'International School of Geneva',
      location: 'Geneva, Switzerland',
      image: '/images/Singapore International School.png',
      rating: '1-10',
      reviews: '245 Reviews',
      description: 'Prestigious international school offering world-class education.'
    },
    {
      id: 3,
      name: 'Singapore American School',
      location: 'Singapore',
      image: '/images/Singapore International School.png',
      rating: '1-10',
      reviews: '245 Reviews',
      description: 'Excellence in American curriculum education in Asia.'
    },
    {
      id: 4,
      name: 'Dulwich College London',
      location: 'London, United Kingdom',
      image: '/images/Oxford University.png',
      rating: '1-10',
      reviews: '245 Reviews',
      description: 'Historic British institution with outstanding academic achievements.'
    },
    {
      id: 5,
      name: 'American School of Dubai',
      location: 'Dubai, UAE',
      image: '/images/Singapore International School.png',
      rating: '1-10',
      reviews: '245 Reviews',
      description: 'Premier American curriculum school in the Middle East.'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % schools.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + schools.length) % schools.length)
  }

  return (
    <section 
      className="py-12 md:py-16"
      style={{
        background: 'linear-gradient(90deg, #FEFCE8 0%, #F0FDFA 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#1E3A8A' }}>
            Recently Reviewed Schools
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the world's most prestigious educational institutions.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
            aria-label="Previous slide"
          >
            <Image
              src="/images/left-icon (2).png"
              alt="Previous"
              width={11}
              height={9}
              className="object-contain"
            />
          </button>

          {/* School Card - Horizontal Layout - Full Width */}
          <div className="w-full mx-auto px-4 md:px-0">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row">
                {/* Image Section - Left */}
                <div className="relative w-full md:w-1/2 h-64 md:h-80 lg:h-96">
                  <div className="w-full h-full bg-gray-200 relative overflow-hidden">
                    <Image
                      src={schools[currentSlide].image}
                      alt={schools[currentSlide].name}
                      fill
                      className="object-cover object-center"
                      priority
                    />
                    {/* Editor's Pick Tag */}
                    <div className="absolute top-4 left-4 z-10">
                      <span 
                        className="px-3 py-1 rounded-full text-xs font-medium text-white"
                        style={{ backgroundColor: '#1E3A8A' }}
                      >
                        Editor's Pick
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Content Section - Right */}
                <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                      {schools[currentSlide].name}
                    </h3>
                    
                    {/* Location */}
                    <div className="flex items-center text-gray-600 mb-3">
                      <Image
                        src="/images/loc-icon (1).png"
                        alt="Location"
                        width={16}
                        height={16}
                        className="mr-2"
                      />
                      <span className="text-sm md:text-base">{schools[currentSlide].location}</span>
                    </div>
                    
                    {/* Rating and Reviews */}
                    <div className="mb-4">
                      <span className="text-sm md:text-base text-gray-600">
                        {schools[currentSlide].rating} ({schools[currentSlide].reviews})
                      </span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6">
                      {schools[currentSlide].description}
                    </p>
                  </div>
                  
                  {/* Learn More Button */}
                  <div className="mt-auto">
                    <Link
                      href={`/school/${schools[currentSlide].id}`}
                      className="inline-block px-6 py-3 md:px-8 md:py-4 rounded-lg text-white font-medium text-base md:text-lg hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: '#1E3A8A' }}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
            aria-label="Next slide"
          >
            <Image
              src="/images/right-icon (1).png"
              alt="Next"
              width={11}
              height={9}
              className="object-contain"
            />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {schools.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? '' : 'bg-gray-300'
              }`}
              style={currentSlide === index ? { backgroundColor: '#1E3A8A' } : {}}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

