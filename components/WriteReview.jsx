'use client'

import { useState } from 'react'
import Image from 'next/image'
import WriteReviewStep2 from './WriteReviewStep2'

export default function WriteReview() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedRole, setSelectedRole] = useState('Parent')
  const [showRoleDropdown, setShowRoleDropdown] = useState(false)
  const [ratings, setRatings] = useState({
    vision: 4,
    leadership: 1,
    learning: 2,
    safety: 3,
    opportunities: 5
  })

  const ratingCategories = [
    {
      id: 'vision',
      title: 'Vision, Mission & Values in Action',
      description: "The school's mission and values are visible in daily practice.",
      iconBg: 'bg-blue-100',
      iconColor: '#1E3A8A',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="12" cy="12" r="3" fill="currentColor"/>
        </svg>
      ),
      ratingColor: '#1E3A8A'
    },
    {
      id: 'leadership',
      title: 'Leadership, Communication & Trust',
      description: 'Communication from school leadership is clear and timely.',
      iconBg: 'bg-green-100',
      iconColor: '#10B981',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
      ratingColor: '#EF4444'
    },
    {
      id: 'learning',
      title: 'Learning & Academic Growth',
      description: 'My child is challenged and supported academically.',
      iconBg: 'bg-yellow-100',
      iconColor: '#F59E0B',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
      ratingColor: '#9333EA'
    },
    {
      id: 'safety',
      title: 'Student Behaviour, Safety & Wellbeing',
      description: 'The school provides a safe and supportive environment for students.',
      iconBg: 'bg-red-100',
      iconColor: '#EF4444',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7564 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.0621 22.0329 6.39464C21.7564 5.72718 21.351 5.12075 20.84 4.61Z" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
      ratingColor: '#FBBF24'
    },
    {
      id: 'opportunities',
      title: 'Wider Opportunities, Pathways & Partnerships',
      description: 'The school provides meaningful opportunities that help my child grow beyond academics.',
      iconBg: 'bg-blue-100',
      iconColor: '#1E3A8A',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
      ratingColor: '#10B981'
    }
  ]

  const handleRatingChange = (categoryId, rating) => {
    setRatings(prev => ({
      ...prev,
      [categoryId]: rating
    }))
  }

  const StarRating = ({ category, rating, onRatingChange }) => {
    return (
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500">Poor</span>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => onRatingChange(category.id, star)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill={star <= rating ? category.ratingColor : 'none'}
                stroke={star <= rating ? category.ratingColor : '#D1D5DB'}
                viewBox="0 0 24 24"
                style={{ color: star <= rating ? category.ratingColor : '#D1D5DB' }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.364 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </button>
          ))}
        </div>
        <span className="text-sm text-gray-500">Excellent</span>
      </div>
    )
  }

  if (currentStep === 2) {
    return <WriteReviewStep2 schoolName="International School of Geneva" />
  }

  return (
    <>
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1E3A8A' }}>
            Write a Review
          </h1>
          <p className="text-gray-600 text-lg">
            Share your experience and rate the school to help others make informed decisions.
          </p>
        </div>

        {/* School Information Card */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src="/images/Singapore International School.png"
                alt="International School of Geneva"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-1" style={{ color: '#1E3A8A' }}>
                International School of Geneva
              </h2>
              <p className="text-gray-600">Geneva, Switzerland</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-[#1E3A8A] text-white rounded-lg font-medium hover:opacity-90 transition-opacity whitespace-nowrap">
            Change School
          </button>
        </div>

        {/* Role Selection */}
        <div className="mb-8">
          <label className="block text-sm font-medium mb-2" style={{ color: '#1E3A8A' }}>
            Select Role
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowRoleDropdown(!showRoleDropdown)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-left flex items-center justify-between focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none"
            >
              <span className="text-gray-900">{selectedRole}</span>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {showRoleDropdown && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                {['Educator', 'Parent', 'Alumni'].map((role) => (
                  <button
                    key={role}
                    type="button"
                    onClick={() => {
                      setSelectedRole(role)
                      setShowRoleDropdown(false)
                    }}
                    className="w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg border-b border-gray-200 last:border-b-0"
                  >
                    {role}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Rating Introduction */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2" style={{ color: '#1E3A8A' }}>
            {selectedRole}
          </h2>
          <p className="text-gray-600">
            Please rate the following based on your experience with the school.
          </p>
        </div>

        {/* Rating Sections */}
        <div className="space-y-8 mb-12">
          {ratingCategories.map((category) => (
            <div key={category.id} className="flex gap-4">
              {/* Icon */}
              <div className={`w-12 h-12 ${category.iconBg} rounded-full flex items-center justify-center flex-shrink-0`} style={{ color: category.iconColor }}>
                {category.icon}
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2" style={{ color: '#1E3A8A' }}>
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {category.description}
                </p>
                <StarRating
                  category={category}
                  rating={ratings[category.id]}
                  onRatingChange={handleRatingChange}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <div className="flex justify-end">
          <button 
            type="button"
            onClick={() => setCurrentStep(2)}
            className="px-8 py-3 bg-[#1E3A8A] text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            Next
          </button>
        </div>
      </div>
    </section>

    {/* Step 2 - Detailed Review Form */}
    {currentStep === 2 && (
      <WriteReviewStep2 schoolName="International School of Geneva" />
    )}
    </>
  )
}

