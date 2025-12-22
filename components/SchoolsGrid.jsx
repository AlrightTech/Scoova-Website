'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function SchoolsGrid() {
  const [currentPage, setCurrentPage] = useState(1)
  const schoolsPerPage = 12

  const schools = [
    {
      id: 1,
      name: 'International School of Geneva',
      location: 'Geneva, Switzerland',
      image: '/images/Singapore International School.png',
      type: 'Private',
      rating: '1-10',
      reviews: '245 Reviews',
      tags: ['International', 'IB Programme', 'Multilingual']
    },
    {
      id: 2,
      name: 'Singapore American School',
      location: 'Singapore',
      image: '/images/Singapore International School.png',
      type: 'Private',
      rating: '1-10',
      reviews: '245 Reviews',
      tags: ['American Curriculum', 'International', 'STEM Focus']
    },
    {
      id: 3,
      name: 'Dulwich College London',
      location: 'London, United Kingdom',
      image: '/images/Oxford University.png',
      type: 'Private',
      rating: '1-10',
      reviews: '245 Reviews',
      tags: ['Boarding', 'British Curriculum', 'Historic']
    },
    {
      id: 4,
      name: 'American School of Dubai',
      location: 'Dubai, UAE',
      image: '/images/Singapore International School.png',
      type: 'Private',
      rating: '1-10',
      reviews: '245 Reviews',
      tags: ['International', 'IB Programme']
    },
    {
      id: 5,
      name: 'The British School',
      location: 'Cairo, Egypt',
      image: '/images/Oxford University.png',
      type: 'Private',
      rating: '1-10',
      reviews: '245 Reviews',
      tags: ['British Curriculum', 'International']
    },
    {
      id: 6,
      name: 'International School of Bangkok',
      location: 'Bangkok, Thailand',
      image: '/images/Singapore International School.png',
      type: 'Private',
      rating: '1-10',
      reviews: '245 Reviews',
      tags: ['International', 'IB Programme', 'Multilingual']
    },
    {
      id: 7,
      name: 'QSI International School',
      location: 'Phnom Penh, Cambodia',
      image: '/images/Oxford University.png',
      type: 'Private',
      rating: '1-10',
      reviews: '245 Reviews',
      tags: ['American Curriculum', 'International']
    },
    {
      id: 8,
      name: 'Australian International School',
      location: 'Ho Chi Minh City, Vietnam',
      image: '/images/Singapore International School.png',
      type: 'Private',
      rating: '1-10',
      reviews: '245 Reviews',
      tags: ['Australian Curriculum', 'International', 'STEM Focus']
    },
    {
      id: 9,
      name: 'International School of Paris',
      location: 'Paris, France',
      image: '/images/Oxford University.png',
      type: 'Private',
      rating: '1-10',
      reviews: '245 Reviews',
      tags: ['International', 'IB Programme']
    },
    {
      id: 10,
      name: 'Tokyo International School',
      location: 'Tokyo, Japan',
      image: '/images/Singapore International School.png',
      type: 'Private',
      rating: '1-10',
      reviews: '245 Reviews',
      tags: ['International', 'Multilingual', 'STEM Focus']
    },
    {
      id: 11,
      name: 'Sagar Public School',
      location: 'Bhopal, India',
      image: '/images/Oxford University.png',
      type: 'Private',
      rating: '1-10',
      reviews: '245 Reviews',
      tags: ['Indian Curriculum', 'Boarding']
    },
    {
      id: 12,
      name: 'International School of Brussels',
      location: 'Brussels, Belgium',
      image: '/images/Singapore International School.png',
      type: 'Private',
      rating: '1-10',
      reviews: '245 Reviews',
      tags: ['International', 'IB Programme', 'Multilingual']
    }
  ]

  const totalPages = Math.ceil(schools.length / schoolsPerPage)
  const startIndex = (currentPage - 1) * schoolsPerPage
  const displayedSchools = schools.slice(startIndex, startIndex + schoolsPerPage)
  const totalSchools = schools.length
  const startSchool = startIndex + 1
  const endSchool = Math.min(startIndex + schoolsPerPage, totalSchools)

  return (
    <section className="py-8 md:py-12" style={{ backgroundColor: '#F9FAFB' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          {/* Search Results Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">Search Results</h2>
              <p className="text-gray-600 text-sm md:text-base">Showing {startSchool}-{endSchool} of {totalSchools} schools</p>
            </div>
            <Link
              href="/compare-schools"
              className="flex items-center gap-2 text-white font-sans font-normal text-base pt-4 pr-9 pb-4 pl-9 rounded-[12px] hover:opacity-90 transition-opacity whitespace-nowrap"
              style={{ backgroundColor: '#1E3A8A' }}
            >
              <span>Compare School</span>
              <Image
                src="/images/compare-school-icon.svg"
                alt="Compare"
                width={18}
                height={16}
                className="w-4 h-4"
              />
            </Link>
          </div>

          {/* School Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {displayedSchools.map((school) => (
              <div
                key={school.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full"
              >
                {/* Image Container - Fixed Height */}
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
                    
                    {/* Heart Icon - White circle with black outline */}
                    <button className="absolute top-3 right-3 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors">
                      <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Content Section - Flex grow to maintain equal height */}
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
                  
                  {/* Button - Always at bottom */}
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

          {/* Pagination */}
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
            >
              <Image
                src="/images/left-icon (2).png"
                alt="Previous"
                width={11}
                height={9}
                className="w-3 h-2.5"
              />
              <span>Previous</span>
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  currentPage === page
                    ? 'text-white'
                    : 'text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
                style={currentPage === page ? { backgroundColor: '#1E3A8A' } : {}}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
            >
              <span>Next</span>
              <Image
                src="/images/right-icon (1).png"
                alt="Next"
                width={11}
                height={9}
                className="w-3 h-2.5"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

