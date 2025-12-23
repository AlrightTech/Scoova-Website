'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ReviewsSection() {
  const [expandedReviews, setExpandedReviews] = useState({})
  const [expandedReplies, setExpandedReplies] = useState({})
  const [openReplies, setOpenReplies] = useState({})

  const reviews = [
    {
      id: 1,
      category: 'Academic Excellence',
      rating: '1-10',
      reviewerType: 'Parent',
      reviewerRating: '1-10',
      timeAgo: '2 weeks ago',
      title: 'Exceptional education and caring community',
      content: 'My daughter has been at IAE for 3 years and the growth we\'ve seen is remarkable. The teachers are dedicated, the curriculum is challenging yet supporti...',
      fullContent: 'My daughter has been at IAE for 3 years and the growth we\'ve seen is remarkable. The teachers are dedicated, the curriculum is challenging yet supportive, and the international community has broadened her perspective tremendously. The IB program preparation is excellent and the university counseling team provided invaluable guidance. Highly recommend this school to any family looking for quality international education.',
      schoolReply: {
        name: 'International Academy of Excellence',
        content: 'Thank you so much for your kind words and trust in IAE. We\'re delighted to hear about your daughter\'s growth and success over the past three years. Our team takes great pride in providing a sup....',
        fullContent: 'Thank you so much for your kind words and trust in IAE. We\'re delighted to hear about your daughter\'s growth and success over the past three years. Our team takes great pride in providing a supportive and challenging environment where every student can thrive. We truly appreciate your recommendation and are honored to be part of your family\'s educational journey.'
      }
    },
    {
      id: 2,
      category: 'Academic Excellence',
      rating: '1-10',
      reviewerType: 'Parent',
      reviewerRating: '1-10',
      timeAgo: '2 weeks ago',
      title: 'Exceptional education and caring community',
      content: 'My daughter has been at IAE for 3 years and the growth we\'ve seen is remarkable. The teachers are dedicated, the curriculum is challenging yet supporti...',
      fullContent: 'My daughter has been at IAE for 3 years and the growth we\'ve seen is remarkable. The teachers are dedicated, the curriculum is challenging yet supportive, and the international community has broadened her perspective tremendously. The IB program preparation is excellent and the university counseling team provided invaluable guidance. Highly recommend this school to any family looking for quality international education.',
      schoolReply: {
        name: 'International Academy of Excellence',
        content: 'Thank you so much for your kind words and trust in IAE. We\'re delighted to hear about your daughter\'s growth and success over the past three years. Our team takes great pride in providing a sup....',
        fullContent: 'Thank you so much for your kind words and trust in IAE. We\'re delighted to hear about your daughter\'s growth and success over the past three years. Our team takes great pride in providing a supportive and challenging environment where every student can thrive. We truly appreciate your recommendation and are honored to be part of your family\'s educational journey.'
      }
    }
  ]

  const toggleExpand = (reviewId) => {
    setExpandedReviews(prev => ({
      ...prev,
      [reviewId]: !prev[reviewId]
    }))
  }

  const toggleReply = (reviewId) => {
    setOpenReplies(prev => ({
      ...prev,
      [reviewId]: !prev[reviewId]
    }))
  }

  const toggleExpandReply = (reviewId) => {
    setExpandedReplies(prev => ({
      ...prev,
      [reviewId]: !prev[reviewId]
    }))
  }

  return (
    <section className="py-12 md:py-16 bg-transparent">
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        {/* <h2 
          className="text-[32px] font-bold mb-8 text-[#111827] text-center"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Reviews
        </h2> */}
        
        {/* Reviews - Single Column Center */}
        <div className="grid grid-cols-1 gap-12 mb-8 max-w-4xl mx-auto">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-white rounded-xl"
              style={{
                boxShadow: '0px 1px 2px 0px #0000000D'
              }}
            >
              {/* Academic Excellence Header Row */}
              <div className="px-8 pt-8 pb-2">
                <div className="flex items-center gap-[20px] mb-2">
                  <div className="w-12 h-12 rounded-full bg-[#DBEAFE] flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/images/acadmic-excellece.svg"
                      alt="Academic Excellence"
                      width={24}
                      height={24}
                      className="w-6 h-6 brightness-0 invert"
                    />
                  </div>
                  <h3 
                    className="font-semibold text-[22px] text-[#1E3A8A]"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                  >
                    {review.category}
                  </h3>
                </div>
                {/* Rating below header */}
                <div className="mb-4">
                  <span 
                    className="font-bold text-[22px] text-[#1E3A8A]"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                  >
                    {review.rating}
                  </span>
                </div>
              </div>

              <div className="px-8 pb-4">

                {/* Parent Review Card */}
                <div className="mb-4 pt-12">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className="w-12 h-12 rounded-full bg-[#DBEAFE] flex items-center justify-center flex-shrink-0">
                      <Image
                        src="/images/double-blue-user-icon.svg"
                        alt="Parent"
                        width={24}
                        height={24}
                        className="w-4 h-4"
                      />
                    </div>
                    
                    {/* Badge and Rating/Time Column */}
                    <div className="flex flex-col">
                      {/* Badge */}
                      <div 
                        className="inline-flex items-center justify-center rounded-full px-4 py-1 mb-2"
                        style={{ 
                          backgroundColor: '#F3F4F6',
                          fontFamily: 'Inter, sans-serif'
                        }}
                      >
                        <span 
                          className="font-medium text-[12px] text-[#374151]"
                          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                        >
                          {review.reviewerType}
                        </span>
                      </div>

                      {/* Rating and Time - Column form below Parent */}
                      <div className="flex flex-col">
                        {/* Rating */}
                        <span 
                          className="font-bold text-[16px] text-[#1E3A8A]"
                          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                        >
                          {review.reviewerRating}
                        </span>

                        {/* Time */}
                        <span 
                          className="font-normal text-[12px] text-[#6B7280]"
                          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                        >
                          {review.timeAgo}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Review Title */}
                  <h4 
                    className="font-semibold text-[16px] text-[#111827] mb-2 mt-3"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {review.title}
                  </h4>

                  {/* Review Content - Show full by default */}
                  <div className="mb-3">
                    <p 
                      className="font-normal text-[14px] text-[#374151] leading-relaxed"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                    >
                      {expandedReviews[review.id] !== undefined ? (expandedReviews[review.id] ? review.fullContent : review.content) : review.fullContent}
                    </p>
                    {expandedReviews[review.id] === false && (
                      <button
                        onClick={() => toggleExpand(review.id)}
                        className="underline ml-1"
                        style={{ fontFamily: 'Inter, sans-serif', color: '#1E3A8A' }}
                      >
                        expand
                      </button>
                    )}
                    {expandedReviews[review.id] === true && (
                      <button
                        onClick={() => toggleExpand(review.id)}
                        className="underline ml-1"
                        style={{ fontFamily: 'Inter, sans-serif', color: '#1E3A8A' }}
                      >
                        close
                      </button>
                    )}
                  </div>

                  {/* School Reply Section - Always visible by default */}
                  <div className="mt-4">
                    {/* School Name Row */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-[#1E3A8A] flex items-center justify-center flex-shrink-0">
                        <Image
                          src="/images/reply-icon-img.png"
                          alt="School Reply"
                          width={48}
                          height={48}
                          className="w-12 h-12 rounded-full"
                        />
                      </div>
                      <h5 
                        className="font-semibold text-[16px] text-[#111827]"
                        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                      >
                        {review.schoolReply.name}
                      </h5>
                    </div>

                    {/* Reply Content */}
                    <div>
                      <p 
                        className="font-normal text-[14px] text-[#374151] leading-relaxed"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                      >
                        {expandedReplies[review.id] !== undefined ? (expandedReplies[review.id] ? review.schoolReply.fullContent : review.schoolReply.content) : review.schoolReply.fullContent}
                      </p>
                      {expandedReplies[review.id] === false && (
                        <button
                          onClick={() => toggleExpandReply(review.id)}
                          className="underline ml-1"
                          style={{ fontFamily: 'Inter, sans-serif', color: '#1E3A8A' }}
                        >
                          expand
                        </button>
                      )}
                      {expandedReplies[review.id] === true && (
                        <button
                          onClick={() => toggleExpandReply(review.id)}
                          className="underline ml-1"
                          style={{ fontFamily: 'Inter, sans-serif', color: '#1E3A8A' }}
                        >
                          close
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
