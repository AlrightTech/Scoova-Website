'use client'

import { useState } from 'react'

export default function SchoolReviews() {
  const [showAll, setShowAll] = useState(false)

  const reviews = [
    {
      id: 1,
      rating: 5,
      title: 'Excellent Learning Environment',
      author: 'John Doe',
      date: '2 days ago',
      text: 'This school provides an outstanding learning environment with dedicated teachers and excellent facilities. My child has thrived here and we are very satisfied with the quality of education.',
      verified: true
    },
    {
      id: 2,
      rating: 5,
      title: 'Great Academic Programs',
      author: 'Sarah Smith',
      date: '5 days ago',
      text: 'The academic programs are comprehensive and well-structured. The teachers are highly qualified and supportive. The school truly cares about student success.',
      verified: true
    },
    {
      id: 3,
      rating: 4,
      title: 'Strong Community',
      author: 'Michael Johnson',
      date: '1 week ago',
      text: 'The school has a strong sense of community. Parents and teachers work together to support student success. The extracurricular activities are excellent.',
      verified: true
    },
    {
      id: 4,
      rating: 5,
      title: 'Outstanding Facilities',
      author: 'Emily Brown',
      date: '2 weeks ago',
      text: 'The facilities are modern and well-maintained. The sports facilities and library are particularly impressive. Students have access to excellent resources.',
      verified: true
    },
    {
      id: 5,
      rating: 5,
      title: 'Amazing Experience',
      author: 'David Wilson',
      date: '3 weeks ago',
      text: 'My experience with this school has been amazing. The staff is professional, the curriculum is challenging, and the overall atmosphere is positive.',
      verified: true
    },
    {
      id: 6,
      rating: 4,
      title: 'Well-Rounded Education',
      author: 'Lisa Anderson',
      date: '1 month ago',
      text: 'The school provides a well-rounded education that focuses on both academics and character development. Highly recommend to other parents.',
      verified: true
    }
  ]

  const displayedReviews = showAll ? reviews : reviews.slice(0, 4)

  return (
    <section className="py-12 md:py-16">
        <div className="mb-8 text-center">
          <h2 className="text-[#111827] font-bold text-xl leading-7 tracking-normal text-center align-middle mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            What Our Students Say
          </h2>
          <p className="text-gray-600 text-lg">
            Hear from our students and parents about their experiences
          </p>
        </div>
        
        <div className="space-y-6">
          {displayedReviews.map((review) => (
            <div key={review.id} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              {/* Rating */}
              <div className="flex items-center mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                {review.title}
              </h3>
              
              {/* Author and Date */}
              <p className="text-sm text-gray-600 mb-3">
                {review.author}, {review.date}
              </p>
              
              {/* Review Text */}
              <p className="text-gray-700 mb-4 leading-relaxed">
                {review.text}
              </p>
              
              {/* Verified Badge */}
              {review.verified && (
                <span className="inline-block px-3 py-1 rounded text-xs font-medium bg-green-100 text-green-800">
                  Verified Review
                </span>
              )}
            </div>
          ))}
        </div>
        
      {/* Load More Button */}
      <div className="text-center mt-8">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-8 py-3 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
          style={{ backgroundColor: '#1E3A8A' }}
        >
          {showAll ? 'Show Less' : 'Load More Reviews'}
        </button>
      </div>
    </section>
  )
}

