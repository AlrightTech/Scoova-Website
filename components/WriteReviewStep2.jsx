'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'

export default function WriteReviewStep2({ schoolName = 'International School of Geneva' }) {
  const [mounted, setMounted] = useState(false)
  const [overallRating, setOverallRating] = useState(5)
  const [title, setTitle] = useState('')
  const [experience, setExperience] = useState('')
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (showSuccessModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [showSuccessModal])

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowSuccessModal(true)
  }

  const starColors = [
    '#EF4444', // Red
    '#9333EA', // Purple
    '#FBBF24', // Yellow
    '#1E3A8A', // Dark Blue
    '#10B981'  // Green
  ]

  return (
    <>
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#111827' }}>
              {schoolName}
            </h1>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Overall Scoova Rating */}
            <div className="mb-8">
              <label className="block text-lg font-medium text-gray-900 mb-4">
                Overall Scoova Rating
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setOverallRating(star)}
                    className="focus:outline-none"
                  >
                    <svg
                      className="w-8 h-8"
                      fill={star <= overallRating ? starColors[star - 1] : 'none'}
                      stroke={star <= overallRating ? starColors[star - 1] : '#D1D5DB'}
                      viewBox="0 0 24 24"
                      style={{ color: star <= overallRating ? starColors[star - 1] : '#D1D5DB' }}
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
            </div>

            {/* Title Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enter Title (Optional)
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="enter text here"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none"
              />
            </div>

            {/* Experience Textarea */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Please share more about your Experience
              </label>
              <textarea
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                rows="8"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none resize-none"
                placeholder="Write your experience here..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-8 py-3 bg-[#1E3A8A] text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccessModal && mounted && createPortal(
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4"
          onClick={() => setShowSuccessModal(false)}
        >
          <div 
            className="bg-white rounded-lg shadow-xl max-w-md w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            {/* Success Message */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Thanks For Your Feedback
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Your responses have been recorded successfully. Your voice helps schools improve learning experiences for every student.
              </p>
            </div>

            {/* Submit Another Response Button */}
            <div className="flex justify-center">
              <button
                onClick={() => {
                  setShowSuccessModal(false)
                  // Reset form or redirect
                  setTitle('')
                  setExperience('')
                  setOverallRating(5)
                }}
                className="px-6 py-3 bg-[#1E3A8A] text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                Submit Another Response
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}

