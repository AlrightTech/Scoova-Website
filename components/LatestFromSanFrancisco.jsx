'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function LatestFromSanFrancisco() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filters = ['All', 'Education', 'Parenting', 'Community', 'Events']

  const articles = [
    {
      id: 1,
      title: 'Navigating the School Choice Process in San Francisco',
      description: 'A comprehensive guide for parents on finding the right school, from public to private options in the Bay Area.',
      image: '/images/Singapore International School.png',
      category: 'Education',
      author: 'Jane Doe',
      date: 'Oct 28, 2025'
    },
    {
      id: 2,
      title: 'Top 5 Family-Friendly Weekend Activities in the City',
      description: 'Explore parks, museums, and hidden gems that offer fun and learning for the whole family this weekend.',
      image: '/images/Oxford University.png',
      category: 'Parenting',
      author: 'John Smith',
      date: 'Oct 25, 2025'
    },
    {
      id: 3,
      title: 'Parenting in the Digital Age: Local Workshops & Resources',
      description: 'Discover local workshops in San Francisco designed to help parents manage screen time and digital citizenship.',
      image: '/images/Singapore International School.png',
      category: 'Community',
      author: 'Emily White',
      date: 'Oct 22, 2025'
    }
  ]

  return (
    <section className="bg-[#F8FAFC] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="font-['Poppins'] font-bold text-[36px] text-[#1E293B] mb-6">
            Latest from San Francisco
          </h2>
          <p className="font-sans font-normal text-base text-[#374151] max-w-2xl mx-auto">
            Discover stories, news, and educational insights from schools and families in your city.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full font-sans font-normal text-base transition-colors ${
                activeFilter === filter
                  ? 'bg-[#1E293B] text-white border-0'
                  : 'bg-white text-[#374151] border border-[#E2E8F0] hover:bg-gray-50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative w-full h-48 flex-shrink-0">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-sans font-bold text-base text-[#1E293B] mb-3 leading-tight">
                  {article.title}
                </h3>
                <p className="font-sans font-normal text-base text-[#374151] leading-relaxed mb-4">
                  {article.description}
                </p>
                
                {/* Author and Date */}
                <p className="font-sans font-normal text-base text-[#374151] mb-4">
                  By {article.author} • {article.date}
                </p>
                
                {/* Read More Link */}
                <Link
                  href={`/school/${article.id}`}
                  className="font-sans font-normal text-base text-[#374151] hover:text-[#1E293B] transition-colors inline-flex items-center gap-1"
                >
                  Read More
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block"
                  >
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

