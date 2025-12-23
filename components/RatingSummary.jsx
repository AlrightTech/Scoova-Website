import Image from 'next/image'

export default function RatingSummary() {
  const overallRating = 4.8
  const totalReviews = 342
  
  const ratingBreakdown = [
    { stars: 5, count: 198 },
    { stars: 4, count: 89 },
    { stars: 3, count: 34 },
    { stars: 2, count: 14 },
    { stars: 1, count: 7 }
  ]

  const maxCount = Math.max(...ratingBreakdown.map(r => r.count))

  return (
    <div 
      className="rounded-2xl p-8"
      style={{
        background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)',
        borderRadius: '16px',
        padding: '32px'
      }}
    >
      {/* Overall Rating */}
      <div className="text-center mb-2">
        <div className="text-[#1E3A8A] font-['Inter',sans-serif] font-bold text-5xl mb-1">
          {overallRating}
        </div>
        
        {/* 1-10 Rating Scale */}
        <div className="mb-0">
          <span className="font-['Inter',sans-serif] font-semibold text-[14px] text-[#4B5563]">
            1-10
          </span>
        </div>
        
        {/* Review Count */}
        <p className="text-[#4B5563] font-['Inter',sans-serif] font-normal text-base">
          Based on {totalReviews} reviews
        </p>
      </div>

      {/* Rating Distribution */}
      <div className="mt-6 space-y-3">
        {ratingBreakdown.map((rating, index) => {
          const percentage = (rating.count / maxCount) * 100
          return (
            <div key={index} className="flex items-center gap-3">
              {/* Rating Label */}
              <span className="text-[#4B5563] font-['Inter',sans-serif] font-normal text-sm w-8 flex-shrink-0">
                1-10
              </span>
              
              {/* Progress Bar */}
              <div className="flex-1 h-2 bg-white rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#FBBF24] rounded-full transition-all"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              
              {/* Count */}
              <span className="text-[#4B5563] font-['Inter',sans-serif] font-normal text-sm w-10 text-right flex-shrink-0">
                {rating.count}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

