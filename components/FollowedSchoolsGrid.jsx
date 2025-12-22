'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function FollowedSchoolsGrid() {
  const followedSchools = [
    {
      id: 1,
      name: 'International School of Geneva',
      location: 'Geneva, Switzerland',
      reviews: '1-10 (245 Reviews)',
      tags: ['International', 'IB Programmes', 'Multilingual'],
      image: '/images/Singapore International School.png',
      isPrivate: true
    },
    {
      id: 2,
      name: 'Singapore American School',
      location: 'Singapore',
      reviews: '1-10 (312 Reviews)',
      tags: ['American Curriculum', 'International', 'STEM Focus'],
      image: '/images/Oxford University.png',
      isPrivate: true
    },
    {
      id: 3,
      name: 'Dulwich College London',
      location: 'London, United Kingdom',
      reviews: '1-10 (189 Reviews)',
      tags: ['Boarding', 'British Curriculum', 'Historic'],
      image: '/images/Harvard University.png',
      isPrivate: true
    },
    {
      id: 4,
      name: 'American School of Dubai',
      location: 'Dubai, UAE',
      reviews: '1-10 (278 Reviews)',
      tags: ['American Curriculum', 'International', 'Technology'],
      image: '/images/internantional-acadmy-img.png',
      isPrivate: true
    },
    {
      id: 5,
      name: 'Toronto French School',
      location: 'Toronto, Canada',
      reviews: '1-10 (156 Reviews)',
      tags: ['Bilingual', 'French Programmes'],
      image: '/images/Singapore International School.png',
      isPrivate: true
    },
    {
      id: 6,
      name: 'International School of Bangkok',
      location: 'Bangkok, Thailand',
      reviews: '1-10 (234 Reviews)',
      tags: ['International', 'IB Programmes', 'Multicultural'],
      image: '/images/Oxford University.png',
      isPrivate: true
    }
  ]

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h2 className="text-2xl font-bold text-gray-900 mb-8" style={{ color: '#111827' }}>
          Your Schools
        </h2>

        {/* School Cards Grid - 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {followedSchools.map((school) => (
            <div
              key={school.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full"
            >
              {/* Image with tags */}
              <div className="relative h-48 flex-shrink-0">
                <div className="w-full h-full bg-gray-200 relative overflow-hidden rounded-t-[12px]">
                  <Image
                    src={school.image}
                    alt={school.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Private Tag - Top Left */}
                {school.isPrivate && (
                  <div className="absolute top-3 left-3 bg-[#1E3A8A] text-white px-3 py-1 rounded-full text-xs font-medium">
                    Private
                  </div>
                )}
                
                {/* Heart Icon - Top Right */}
                <div className="absolute top-3 right-3">
                  <svg className="w-6 h-6 text-red-500 fill-current" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{school.name}</h3>
                
                {/* Location */}
                <div className="flex items-center text-gray-600 mb-2 text-sm">
                  <Image
                    src="/images/loc-icon (1).png"
                    alt="Location"
                    width={12}
                    height={12}
                    className="mr-2"
                  />
                  <span>{school.location}</span>
                </div>
                
                {/* Reviews */}
                <div className="mb-3">
                  <span className="text-sm text-gray-500">{school.reviews}</span>
                </div>
                
                {/* Program Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {school.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 rounded-full text-xs text-gray-600 bg-gray-50 border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Button */}
                <Link
                  href={`/school/${school.id}`}
                  className="block w-full text-white hover:opacity-90 transition-opacity bg-[#1E3A8A] font-sans font-normal text-base py-3 rounded-[12px] text-center mt-auto"
                >
                  Review Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mt-12">
          <button className="text-gray-600 hover:text-gray-900 font-medium">
            ← Previous
          </button>
          <button className="bg-[#1E3A8A] text-white px-4 py-2 rounded-lg font-medium">
            1
          </button>
          <button className="text-gray-600 hover:text-gray-900 font-medium">
            Next →
          </button>
        </div>
      </div>
    </section>
  )
}

