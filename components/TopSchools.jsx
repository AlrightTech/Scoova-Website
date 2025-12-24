'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function TopSchools() {
  const schools = [
    {
      id: 1,
      name: 'Yahiya International School',
      location: 'Dubai, UAE',
      type: 'Private',
      rating: '1-10',
      reviews: '245 Reviews',
      image: '/images/Singapore International School.png',
      tags: ['Top Rated', 'Best Faculty']
    },
    {
      id: 2,
      name: 'Yahiya International School',
      location: 'Dubai, UAE',
      type: 'Private',
      rating: '1-10',
      reviews: '245 Reviews',
      image: '/images/Singapore International School.png',
      tags: ['Top Rated', 'Best Faculty']
    },
    {
      id: 3,
      name: 'Rajan South International School',
      location: 'Dubai, UAE',
      type: 'Private',
      rating: '1-10',
      reviews: '245 Reviews',
      image: '/images/Oxford University.png',
      tags: ['Top Rated', 'Best Faculty']
    },
    {
      id: 4,
      name: 'American School of Dubai',
      location: 'Dubai, UAE',
      type: 'Private',
      rating: '1-10',
      reviews: '245 Reviews',
      image: '/images/Singapore International School.png',
      tags: ['Top Rated', 'Best Faculty']
    },
    {
      id: 5,
      name: 'American School of Dubai',
      location: 'Dubai, UAE',
      type: 'Private',
      rating: '1-10',
      reviews: '245 Reviews',
      image: '/images/Singapore International School.png',
      tags: ['Top Rated', 'Best Faculty']
    },
    {
      id: 6,
      name: 'Tanzania Female School',
      location: 'Dubai, UAE',
      type: 'Private',
      rating: '1-10',
      reviews: '245 Reviews',
      image: '/images/Oxford University.png',
      tags: ['Top Rated', 'Best Faculty']
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Top Schools
          </h2>
        </div>

        {/* School Cards Grid - 2 rows x 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {schools.map((school) => (
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
      </div>
    </section>
  )
}
