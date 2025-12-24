'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'

export default function CompareSchoolsInput() {
  const [school1, setSchool1] = useState('Greenwood Academy')
  const [school2, setSchool2] = useState('American School of Dubai')
  const [showComparison, setShowComparison] = useState(true)
  const { isSubscribed } = useAuth()

  const schools = [
    {
      id: 1,
      name: 'Greenwood Academy',
      location: 'Singapore, Singapore',
      rating: '1-10',
      reviews: '245 Reviews',
      founded: '1995',
      principal: 'Dr. Sarah Johnson',
      students: '1,250',
      image: '/images/Singapore International School.png',
      tags: ['International', 'Cambridge', 'Bilingual'],
      description: 'A leading institution focused on holistic development and academic rigor. Our mission is to foster a community of lifelong learners.',
      aboutTags: ['Top Rated', 'Accredited']
    },
    {
      id: 2,
      name: 'American School of Dubai',
      location: 'Dubai, UAE',
      rating: '1-10',
      reviews: '245 Reviews',
      founded: '1999',
      principal: 'SKim Johnson',
      students: '1000',
      image: '/images/Singapore International School.png',
      tags: ['International', 'Cambridge', 'Bilingual'],
      description: 'A leading institution focused on holistic development and academic rigor. Our mission is to foster a community of lifelong learners.',
      aboutTags: ['Accredited']
    }
  ]

  const handleCompare = () => {
    setShowComparison(true)
  }

  return (
    <section className="mb-12">
      {/* Input Fields and Compare Button - Horizontal Layout */}
      <div className="flex flex-col sm:flex-row gap-4 items-end mb-4">
        {/* Select School 1 */}
        <div className="flex-1 w-full sm:w-auto">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select School 1
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <Image
                src="/images/search-icon.svg"
                alt="Search"
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </div>
            <input
              type="text"
              value={school1}
              onChange={(e) => setSchool1(e.target.value)}
              placeholder="Greenwood Academy"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
            />
          </div>
        </div>
        
        {/* Select School 2 */}
        <div className="flex-1 w-full sm:w-auto">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select School 2
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <Image
                src="/images/search-icon.svg"
                alt="Search"
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </div>
            <input
              type="text"
              value={school2}
              onChange={(e) => setSchool2(e.target.value)}
              placeholder="American School of Dubai"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
            />
          </div>
        </div>
        
        {/* Compare Button */}
        <div className="w-full sm:w-auto">
          <button 
            onClick={handleCompare}
            className="w-full sm:w-auto px-8 py-3 rounded-lg text-white font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
            style={{ backgroundColor: '#1E3A8A' }}
          >
            Compare
          </button>
        </div>
      </div>
      
      {/* Instructional Text */}
      <p className="text-center text-gray-600 text-sm mb-8">
        Choose any two schools to begin comparison.
      </p>
      
      {/* Comparison Cards */}
      {showComparison && (
        <div className="py-6 sm:py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {schools.map((school) => (
            <div key={school.id} className="space-y-4">
              {/* Main Card */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Image */}
                <div className="relative h-48 sm:h-56 md:h-64 rounded-t-lg overflow-hidden">
                  <div className="w-full h-full bg-gray-200 relative">
                    <Image
                      src={school.image}
                      alt={school.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="px-4 py-6 relative">
                  {/* School Name with Private Tag - Top Right */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-[#111827] font-['Poppins',sans-serif] flex-1">
                      {school.name}
                    </h3>
                    {/* Private Tag - Top Right of Content Section */}
                    <span 
                      className="rounded-full py-[3.5px] px-3 text-white text-sm font-medium ml-4 flex-shrink-0"
                      style={{ backgroundColor: '#1E3A8AE5' }}
                    >
                      Private
                    </span>
                  </div>
                  
                  {/* Location - Left Start */}
                  <div className="flex items-center text-[#4B5563] mb-2">
                    <Image
                      src="/images/loc-icon (1).png"
                      alt="Location"
                      width={14}
                      height={14}
                      className="mr-2"
                    />
                    <span className="font-['Inter',sans-serif] font-normal text-[13.46px]">
                      {school.location}
                    </span>
                  </div>
                  
                  {/* Rating and Reviews - Left Start, Below Location */}
                  <div className={`mb-4 ${!isSubscribed ? 'blur-sm select-none' : ''}`}>
                    <span className="font-['Inter',sans-serif] font-medium text-sm text-[#1E3A8A]">
                      {school.rating}
                    </span>
                    <span className="font-['Inter',sans-serif] font-normal text-sm text-[#6B7280] ml-1">
                      ({school.reviews})
                    </span>
                  </div>
                  
                  {/* Key Statistics - Three Columns, Left Aligned */}
                  <div className="flex gap-4 mb-4">
                    {/* Founded */}
                    <div className="flex flex-col items-start">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                        <Image
                          src="/images/founded-icon.svg"
                          alt="Founded"
                          width={16}
                          height={16}
                          className="w-4 h-4"
                        />
                      </div>
                      <p className="font-['Inter',sans-serif] font-normal text-[10.47px] text-[#4B5563] mb-1">
                        Founded
                      </p>
                      <p className={`font-['Inter',sans-serif] font-semibold text-[11.96px] text-[#111827] ${!isSubscribed ? 'blur-sm select-none' : ''}`}>
                        {school.founded}
                      </p>
                    </div>
                    
                    {/* Principal */}
                    <div className="flex flex-col items-start">
                      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mb-2">
                        <Image
                          src="/images/profile-icon.svg"
                          alt="Principal"
                          width={16}
                          height={16}
                          className="w-4 h-4"
                        />
                      </div>
                      <p className="font-['Inter',sans-serif] font-normal text-[10.47px] text-[#4B5563] mb-1">
                        Principal
                      </p>
                      <p className={`font-['Inter',sans-serif] font-semibold text-[11.96px] text-[#111827] ${!isSubscribed ? 'blur-sm select-none' : ''}`}>
                        {school.principal}
                      </p>
                    </div>
                    
                    {/* Students */}
                    <div className="flex flex-col items-start">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-2">
                        <Image
                          src="/images/students-icon.svg"
                          alt="Students"
                          width={16}
                          height={16}
                          className="w-4 h-4"
                        />
                      </div>
                      <p className="font-['Inter',sans-serif] font-normal text-[10.47px] text-[#4B5563] mb-1">
                        Students
                      </p>
                      <p className={`font-['Inter',sans-serif] font-semibold text-[11.96px] text-[#111827] ${!isSubscribed ? 'blur-sm select-none' : ''}`}>
                        {school.students}
                      </p>
                    </div>
                  </div>
                  
                  {/* Tags and View Full Page - Same Row */}
                  <div className="flex items-center justify-between">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {school.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="rounded-full py-[5.98px] px-[11.96px] font-['Inter',sans-serif] font-medium text-[10.47px] text-[#1E3A8A] bg-[#DBEAFE]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* View Full Page Link */}
                    <Link
                      href={`/school/${school.id}`}
                      className="flex items-center gap-1 font-['Inter',sans-serif] font-medium text-sm text-[#1E3A8A] hover:opacity-80 transition-opacity flex-shrink-0"
                    >
                      <span>View Full Page</span>
                      <Image
                        src="/images/blue-arrow.svg"
                        alt="Arrow"
                        width={16}
                        height={16}
                        className="w-4 h-4"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* About Section */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  About {school.name}
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  {school.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {school.aboutTags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        tag === 'Top Rated'
                          ? 'bg-green-500 text-white'
                          : 'bg-yellow-400 text-gray-900'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      )}
    </section>
  )
}

