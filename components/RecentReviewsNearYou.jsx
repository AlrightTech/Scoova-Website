import Image from 'next/image'

export default function RecentReviewsNearYou() {
  const reviews = [
    {
      id: 1,
      headline: 'An inspiring place for young minds...',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...',
      schoolName: 'Northwood High School',
      distance: '2.1 miles away'
    },
    {
      id: 2,
      headline: 'Exceptional focus on arts & sciences.',
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident...',
      schoolName: 'Riverdale Academy',
      distance: 'Oak Creek'
    },
    {
      id: 3,
      headline: 'A strong community and great teachers.',
      text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt...',
      schoolName: 'Maple Grove Elementary',
      distance: '5.8 miles away'
    }
  ]

  return (
    <section 
      className="py-16 md:py-20 lg:py-24 relative overflow-hidden"
      style={{
        background: 'radial-gradient(167.9% 569.76% at -83.02% -85.67%, #FFFFFF 0%, #1E3A8A 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-bold mb-4 text-white text-[32px] font-['Poppins',sans-serif]">
            Recent Reviews Near You
          </h2>
          <p className="text-white text-[15px] font-normal font-['Inter',sans-serif]">
            See what parents, educators, and alumni are saying about schools in your area.
          </p>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-[16px] p-6 border border-[#E9EEF4]"
            >
              {/* Review Headline with Lock Icon */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-semibold text-[#2C4081] flex-1 text-[20px] font-['Poppins',sans-serif]">
                  "{review.headline}"
                </h3>
                <Image
                  src="/images/lock-grey.svg"
                  alt="Lock"
                  width={16}
                  height={16}
                  className="ml-2 flex-shrink-0"
                />
              </div>

              {/* Review Text */}
              <p className="mb-4 text-[#4A5568] text-[16px] font-normal font-['Inter',sans-serif]">
                {review.text}
              </p>

              {/* Border Separator */}
              <div className="border-t border-[#E9EEF4] mb-4"></div>

              {/* School Name and Distance */}
              <div>
                <h4 className="font-medium text-[#2C4081] mb-1 text-[16px] font-['Inter',sans-serif]">
                  {review.schoolName}
                </h4>
                <p className="text-[#A0AEC0] text-[14px] font-normal font-['Inter',sans-serif]">
                  {review.distance}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Reviews Button */}
        <div className="text-center">
          <button 
            className="px-20 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity bg-[#3751A2] border border-white text-[14spx] font-['Poppins',sans-serif]"
            style={{
              boxShadow: '0px 4px 6px 0px rgba(0, 0, 0, 0.1)'
            }}
          >
            View All Reviews
          </button>
        </div>
      </div>
    </section>
  )
}

