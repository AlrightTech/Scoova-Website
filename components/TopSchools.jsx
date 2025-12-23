'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function TopSchools() {
  const schools = [
    {
      id: 1,
      name: 'Yahiya International School',
      location: 'Dubai, UAE',
      fees: 'AED 10,000 - 20,000',
      image: '/images/Singapore International School.png',
    },
    {
      id: 2,
      name: 'Yahiya International School',
      location: 'Dubai, UAE',
      fees: 'AED 10,000 - 20,000',
      image: '/images/Singapore International School.png',
    },
    {
      id: 3,
      name: 'Rajan South International School',
      location: 'Dubai, UAE',
      fees: 'AED 10,000 - 20,000',
      image: '/images/Oxford University.png',
    },
    {
      id: 4,
      name: 'American School of Dubai',
      location: 'Dubai, UAE',
      fees: 'AED 10,000 - 20,000',
      image: '/images/Singapore International School.png',
    },
    {
      id: 5,
      name: 'American School of Dubai',
      location: 'Dubai, UAE',
      fees: 'AED 10,000 - 20,000',
      image: '/images/Singapore International School.png',
    },
    {
      id: 6,
      name: 'Tanzania Female School',
      location: 'Dubai, UAE',
      fees: 'AED 10,000 - 20,000',
      image: '/images/Oxford University.png',
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ color: '#1E3A8A' }}>
            Top Schools
          </h2>
        </div>

        {/* School Cards Grid - 2 rows x 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {schools.map((school) => (
            <div
              key={school.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative h-48 flex-shrink-0">
                <div className="w-full h-full bg-gray-200 relative overflow-hidden rounded-t-[12px]">
                  <Image
                    src={school.image}
                    alt={school.name}
                    fill
                    className="object-cover"
                  />
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
                    width={10}
                    height={10}
                    className="mr-2"
                  />
                  <span>{school.location}</span>
                </div>
                
                {/* Fees */}
                <div className="mb-3">
                  <span className="text-sm text-gray-600">Fees: </span>
                  <span className="text-sm font-medium text-gray-900">{school.fees}</span>
                </div>
                
                {/* Features */}
                <div className="flex gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-full text-xs text-gray-800 bg-gray-50">
                    Top Rated
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs text-gray-800 bg-gray-50">
                    Best Faculty
                  </span>
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
