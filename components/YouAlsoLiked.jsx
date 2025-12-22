'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function YouAlsoLiked() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const schools = [
    {
      id: 1,
      name: 'International School of Geneva',
      location: 'Geneva, Switzerland',
      image: '/images/Singapore International School.png',
      reviews: '2.5K reviews',
      tags: ['IB Curriculum', 'Boarding', 'Facilities'],
      buttonText: 'View School'
    },
    {
      id: 2,
      name: 'Singapore American School',
      location: 'Singapore',
      image: '/images/Singapore International School.png',
      reviews: '2.5K reviews',
      tags: ['IB Curriculum', 'Boarding', 'Facilities'],
      buttonText: 'Enquire Now'
    },
    {
      id: 3,
      name: 'American School of Dubai',
      location: 'Dubai, UAE',
      image: '/images/Oxford University.png',
      reviews: '2.5K reviews',
      tags: ['IB Curriculum', 'Boarding', 'Facilities'],
      buttonText: 'View School'
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % schools.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + schools.length) % schools.length)
  }

  return (
    <section className="py-12 md:py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ color: '#1E3A8A' }}>
        You Also Liked
      </h2>
      
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

        {/* School Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {schools.map((school, index) => {
            const displayIndex = (currentIndex + index) % schools.length
            const schoolToShow = schools[displayIndex]
            
            return (
              <div
                key={schoolToShow.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 md:h-56">
                  <div className="w-full h-full bg-gray-200 relative overflow-hidden">
                    <Image
                      src={schoolToShow.image}
                      alt={schoolToShow.name}
                      fill
                      className="object-cover"
                    />
                    
                    <button className="absolute top-3 right-3 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="p-4 md:p-5">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{schoolToShow.name}</h3>
                  
                  <div className="flex items-center text-gray-600 mb-3 text-sm md:text-base">
                    <Image
                      src="/images/loc-icon (1).png"
                      alt="Location"
                      width={16}
                      height={16}
                      className="mr-2"
                    />
                    <span>{schoolToShow.location}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs md:text-sm text-gray-600">{schoolToShow.reviews}</span>
                    {schoolToShow.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 rounded text-xs md:text-sm text-gray-700 bg-gray-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    href={`/school/${schoolToShow.id}`}
                    className="block w-full px-4 py-2 rounded-lg text-white font-medium text-sm md:text-base hover:opacity-90 transition-opacity text-center"
                    style={{ backgroundColor: '#1E3A8A' }}
                  >
                    {schoolToShow.buttonText}
                  </Link>
                </div>
              </div>
            )
          })}
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
    </section>
  )
}

