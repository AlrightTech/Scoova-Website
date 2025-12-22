'use client'

export default function ReviewsSection() {
  const reviews = [
    {
      id: 1,
      rating: '5.00',
      headline: 'Exceptional for Mind and building community',
      text: 'My daughter has been enrolled for 2 years and has made great progress. The teachers are dedicated, the curriculum is challenging, and the school provides a nurturing environment. Highly recommended.',
      reviewer: 'John Doe',
      date: '2 years ago',
      school: 'International Academy of Excellence'
    },
    {
      id: 2,
      rating: '5.00',
      headline: 'Exceptional for Mind and building community',
      text: 'My daughter has been enrolled for 2 years and has made great progress. The teachers are dedicated, the curriculum is challenging, and the school provides a nurturing environment. Highly recommended.',
      reviewer: 'John Doe',
      date: '2 years ago',
      school: 'International Academy of Excellence'
    },
    {
      id: 3,
      rating: '5.00',
      headline: 'Exceptional for Mind and building community',
      text: 'My daughter has been enrolled for 2 years and has made great progress. The teachers are dedicated, the curriculum is challenging, and the school provides a nurturing environment. Highly recommended.',
      reviewer: 'John Doe',
      date: '2 years ago',
      school: 'International Academy of Excellence'
    },
    {
      id: 4,
      rating: '5.00',
      headline: 'Exceptional for Mind and building community',
      text: 'My daughter has been enrolled for 2 years and has made great progress. The teachers are dedicated, the curriculum is challenging, and the school provides a nurturing environment. Highly recommended.',
      reviewer: 'John Doe',
      date: '2 years ago',
      school: 'International Academy of Excellence'
    }
  ]

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#1E3A8A' }}>
          Reviews
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              {/* Rating and Date */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-gray-900">{review.rating}</span>
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-600">{review.date}</span>
              </div>
              
              {/* Headline */}
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {review.headline}
              </h3>
              
              {/* Review Text */}
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                {review.text}
              </p>
              
              {/* Reviewer and Reply */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">{review.reviewer}</p>
                  <p className="text-xs text-gray-600">{review.school}</p>
                </div>
                <button 
                  className="px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#1E3A8A', color: 'white' }}
                >
                  Reply
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* See All Reviews Links */}
        <div className="flex justify-center gap-8">
          <button className="text-sm font-medium hover:underline" style={{ color: '#1E3A8A' }}>
            See all reviews
          </button>
          <button className="text-sm font-medium hover:underline" style={{ color: '#1E3A8A' }}>
            See all reviews
          </button>
        </div>
      </div>
    </section>
  )
}

