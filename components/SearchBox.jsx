'use client'

import { useState } from 'react'

export default function SearchBox() {
  const [searchQuery, setSearchQuery] = useState('')
  const [location, setLocation] = useState('all')

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-stretch md:items-center bg-white rounded-[12px] shadow-lg overflow-hidden p-2 gap-2 md:gap-0">
        {/* Search Input - Left side, seamlessly integrated */}
        <div className="flex-1 flex items-center px-3 sm:px-4 py-2 sm:py-3">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mr-2 sm:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Find schools"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 outline-none text-gray-700 placeholder-gray-500 bg-transparent font-sans font-normal text-base sm:text-lg w-full min-w-0"
          />
        </div>

        {/* Country Dropdown - Middle-right, with #F9FAFB background */}
        <div className="relative md:mx-2 w-full md:w-auto">
          <div className="rounded-lg px-3 sm:px-4 py-2 sm:py-3 flex items-center w-full md:min-w-[140px]" style={{ backgroundColor: '#F9FAFB' }}>
            <select
              value={location} 
              onChange={(e) => setLocation(e.target.value)}
              className="appearance-none bg-transparent outline-none text-gray-600 cursor-pointer pr-6 w-full text-sm sm:text-base font-sans"
            >
              <option value="all">All Countries</option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="ca">Canada</option>
              <option value="au">Australia</option>
              <option value="sg">Singapore</option>
            </select>
            <svg className="w-4 h-4 text-gray-400 absolute right-3 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Search Button - Far right */}
        <button 
          className="text-white px-6 sm:px-8 py-3 sm:py-5 font-sans font-normal text-sm sm:text-base hover:opacity-90 transition-opacity rounded-[12px] w-full md:w-auto" 
          style={{ backgroundColor: '#1E3A8A', fontFamily: 'Inter, sans-serif' }}
        >
          Search
        </button>
      </div>
    </div>
  )
}

