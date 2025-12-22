'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function SchoolsSearchBar() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [filters, setFilters] = useState({
    location: 'All Location',
    rating: 'All Ratings',
    type: 'All Type',
    country: 'All Countries',
    reviewType: 'All Reviewrs',
    sortBy: 'Most Reviewed'
  })

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  const clearAllFilters = () => {
    setFilters({
      location: 'All Location',
      rating: 'All Ratings',
      type: 'All Type',
      country: 'All Countries',
      reviewType: 'All Reviewrs',
      sortBy: 'Most Reviewed'
    })
  }

  const applyFilters = () => {
    // Handle filter application logic here
    setIsFilterOpen(false)
  }

  return (
    <div className="mb-0">
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        {/* Search Input */}
        <div className="flex-1 w-full">
          <div className="relative">
            {/* Search Icon */}
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
              placeholder="Search schools by name or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-[#6B7280] placeholder:font-sans placeholder:font-normal placeholder:text-sm"
            />
          </div>
        </div>
        
        {/* Filters Button */}
        <button 
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center gap-2 px-6 py-3 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap"
        >
          <Image
            src="/images/filter-icon.svg"
            alt="Filter"
            width={12}
            height={8}
            className="w-3 h-2"
          />
          <span className="text-gray-700 font-medium">Filters</span>
          <svg 
            className={`w-4 h-4 text-gray-700 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Filter Panel */}
      {isFilterOpen && (
        <div className="mt-4 border border-[#0000001A] bg-[#F8F8F8] rounded-lg p-6">
          {/* All Filters in One Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
            {/* Location */}
            <div>
              <label className="block text-[#333333] font-['Poppins',sans-serif] font-medium text-sm mb-2">
                Location
              </label>
              <div className="relative">
                <select
                  value={filters.location}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                  className="w-full px-4 py-2.5 border border-[#D1D5DB] rounded-xl bg-white text-[#666666] font-['Poppins',sans-serif] font-normal text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer"
                >
                  <option>All Location</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Canada</option>
                  <option>Australia</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Rating */}
            <div>
              <label className="block text-[#333333] font-['Poppins',sans-serif] font-medium text-sm mb-2">
                Rating
              </label>
              <div className="relative">
                <select
                  value={filters.rating}
                  onChange={(e) => handleFilterChange('rating', e.target.value)}
                  className="w-full px-4 py-2.5 border border-[#D1D5DB] rounded-xl bg-white text-[#666666] font-['Poppins',sans-serif] font-normal text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer"
                >
                  <option>All Ratings</option>
                  <option>5 Stars</option>
                  <option>4+ Stars</option>
                  <option>3+ Stars</option>
                  <option>2+ Stars</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Type */}
            <div>
              <label className="block text-[#333333] font-['Poppins',sans-serif] font-medium text-sm mb-2">
                Type
              </label>
              <div className="relative">
                <select
                  value={filters.type}
                  onChange={(e) => handleFilterChange('type', e.target.value)}
                  className="w-full px-4 py-2.5 border border-[#D1D5DB] rounded-xl bg-white text-[#666666] font-['Poppins',sans-serif] font-normal text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer"
                >
                  <option>All Type</option>
                  <option>University</option>
                  <option>International School</option>
                  <option>Private School</option>
                  <option>Public School</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Country */}
            <div>
              <label className="block text-[#333333] font-['Poppins',sans-serif] font-medium text-sm mb-2">
                Country
              </label>
              <div className="relative">
                <select
                  value={filters.country}
                  onChange={(e) => handleFilterChange('country', e.target.value)}
                  className="w-full px-4 py-2.5 border border-[#D1D5DB] rounded-xl bg-white text-[#666666] font-['Poppins',sans-serif] font-normal text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer"
                >
                  <option>All Countries</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Canada</option>
                  <option>Australia</option>
                  <option>Singapore</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Review Type */}
            <div>
              <label className="block text-[#333333] font-['Poppins',sans-serif] font-medium text-sm mb-2">
                Review Type
              </label>
              <div className="relative">
                <select
                  value={filters.reviewType}
                  onChange={(e) => handleFilterChange('reviewType', e.target.value)}
                  className="w-full px-4 py-2.5 border border-[#D1D5DB] rounded-xl bg-white text-[#666666] font-['Poppins',sans-serif] font-normal text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer"
                >
                  <option>All Reviewrs</option>
                  <option>Student Reviews</option>
                  <option>Parent Reviews</option>
                  <option>Teacher Reviews</option>
                  <option>Alumni Reviews</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-[#333333] font-['Poppins',sans-serif] font-medium text-sm mb-2">
                Sort By
              </label>
              <div className="relative">
                <select
                  value={filters.sortBy}
                  onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                  className="w-full px-4 py-2.5 border border-[#D1D5DB] rounded-xl bg-white text-[#666666] font-['Poppins',sans-serif] font-normal text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer"
                >
                  <option>Most Reviewed</option>
                  <option>Highest Rated</option>
                  <option>Newest First</option>
                  <option>Oldest First</option>
                  <option>Alphabetical</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4">
            <button
              onClick={clearAllFilters}
              className="text-[#333333] font-['Poppins',sans-serif] font-medium text-[15px] hover:opacity-80 transition-opacity"
            >
              Clear All Filters
            </button>
            <button
              onClick={applyFilters}
              className="py-2 px-4 rounded-md bg-[#1E3A8A] text-white font-['Inter',sans-serif] font-normal text-sm hover:opacity-90 transition-opacity"
            >
              Apply Filter
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

