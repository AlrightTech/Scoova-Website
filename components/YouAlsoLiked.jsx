'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function YouAlsoLiked() {
  const [currentPage, setCurrentPage] = useState(0)

  const allSchools = [
    {
      id: 1,
      name: 'Singapore American School',
      location: 'Singapore',
      image: '/images/Singapore International School.png',
      type: 'Private',
      rating: '1-10',
      reviews: '245 Reviews',
      tags: ['American Curriculum', 'International', 'STEM Focus']
    },
    {
      id: 2,
      name: 'International School of Singapore',
      location: 'Singapore',
      image: '/images/Singapore International School.png',
      type: 'Private',
      rating: '1-10',
      reviews: '245 Reviews',
      tags: ['International', 'IB Programme', 'Multilingual']
    },
    {
      id: 3,
      name: 'Singapore International School',
      location: 'Singapore',
      image: '/images/Oxford University.png',
      type: 'Private',
      rating: '1-10',
      reviews: '245 Reviews',
      tags: ['International', 'IB Programme', 'STEM Focus']
    },
    {
      id: 4,
      name: 'Toronto French School',
      location: 'Toronto, Canada',
      image: '/images/Singapore International School.png',
      type: 'Private',
      rating: '1-10',
      reviews: '245 Reviews',
      tags: ['Bilingual', 'French Programme', 'IB']
    },
    {
      id: 5,
      name: 'American School of Dubai',
      location: 'Dubai, UAE',
      image: '/images/Oxford University.png',
      type: 'Private',
      rating: '1-10',
      reviews: '245 Reviews',
      tags: ['American Curriculum', 'Technology', 'International']
    },
    {
      id: 6,
      name: 'Toronto French School',
      location: 'Toronto, Canada',
      image: '/images/Singapore International School.png',
      type: 'Private',
      rating: '1-10',
      reviews: '245 Reviews',
      tags: ['Bilingual', 'French Programme', 'IB']
    }
  ]

  const schoolsPerPage = 3
  const totalPages = Math.ceil(allSchools.length / schoolsPerPage)
  const startIndex = currentPage * schoolsPerPage
  const displayedSchools = allSchools.slice(startIndex, startIndex + schoolsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Navigation */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#1E293B]">
              You May Also Like
            </h2>
            <p className="font-sans font-normal text-base text-[#374151]">
              Similar schools in Singapore with excellent ratings
            </p>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevPage}
              className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
              aria-label="Previous"
            >
              <Image
                src="/images/left-icon (2).png"
                alt="Previous"
                width={11}
                height={9}
                className="object-contain"
              />
            </button>
            <button
              onClick={nextPage}
              className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
              aria-label="Next"
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
        </div>

        {/* School Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
          {displayedSchools.map((school) => (
            <div
              key={school.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-48 md:h-56 flex-shrink-0">
                <div className="w-full h-full bg-gray-200 relative overflow-hidden rounded-t-[12px]">
                  <Image
                    src={school.image}
                    alt={school.name}
                    fill
                    className="object-cover"
                  />
                  
                  {/* Type Tag */}
                  <div className="absolute top-3 left-3 z-10">
                    <span 
                      className="px-3 py-1 rounded-full text-xs font-medium text-white"
                      style={{ backgroundColor: '#1E3A8A' }}
                    >
                      {school.type}
                    </span>
                  </div>
                  
                  {/* Heart Icon */}
                  <button className="absolute top-3 right-3 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors">
                    <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-5 flex flex-col flex-grow">
                {/* School Name */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{school.name}</h3>
                
                {/* Location */}
                <div className="flex items-center text-gray-600 mb-2 text-sm">
                  <Image
                    src="/images/loc-icon (1).png"
                    alt="Location"
                    width={10}
                    height={10}
                    className="mr-2 flex-shrink-0"
                  />
                  <span className="truncate">{school.location}</span>
                </div>
                
                {/* Rating and Reviews */}
                <div className="mb-3">
                  <span className="text-sm" style={{ color: '#1E3A8A' }}>
                    {school.rating}
                  </span>
                  <span className="text-sm text-gray-600">
                    {' '}({school.reviews})
                  </span>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {school.tags && school.tags.length > 0 && school.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 rounded-full text-xs text-gray-800 bg-gray-50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Button */}
                <Link
                  href={`/school/${school.id}`}
                  className="block w-full text-white hover:opacity-90 transition-opacity bg-[#1E3A8A] font-sans font-normal text-base pt-4 pr-9 pb-4 pl-9 rounded-[12px] text-center mt-auto"
                >
                  Review Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Indicators */}
        <div className="flex justify-center gap-2 mb-6">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-[10px] h-[10px] rounded-full transition-colors ${
                currentPage === index ? 'bg-[#1E3A8A]' : 'bg-gray-300'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>

        {/* Explore All Schools Button */}
        <div className="flex justify-center">
          <Link
            href="/schools"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-200 text-gray-700 font-sans font-normal text-base hover:bg-gray-300 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Explore All Schools
          </Link>
        </div>
      </div>
    </section>
  )
}

