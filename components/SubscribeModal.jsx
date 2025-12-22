'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function SubscribeModal({ 
  isOpen, 
  onClose, 
  title = "Subscribe to Unlock and See School Insights & Analytics",
  buttonText = "Subscribe School",
  showFeatures = true
}) {
  if (!isOpen) return null

  return (
    <>
      {/* Backdrop - scoped to section only */}
      <div 
        className="absolute inset-0 bg-white bg-opacity-90 backdrop-blur-sm z-40 rounded-2xl"
        onClick={onClose}
      />
      
      {/* Modal - positioned relative to parent section */}
      <div className="absolute inset-0 z-50 flex items-center justify-center p-4">
        <div 
          className="bg-white rounded-2xl shadow-2xl max-w-lg w-full relative border-2"
          style={{ borderColor: '#BEDBFF' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div className="p-8">
            {/* Orange Headset Icon - Large Circular */}
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F59E0B' }}>
                <svg 
                  className="w-14 h-14 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" 
                  />
                </svg>
              </div>
            </div>

            {/* Main Message */}
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {title}
            </h2>

            {/* Features Grid - Conditional */}
            {showFeatures && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Full Reviews Feature */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#DBEAFE' }}>
                  {/* Shield with Eye Icon */}
                  <svg 
                    className="w-8 h-8" 
                    style={{ color: '#1E3A8A' }}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
                    />
                    <circle cx="12" cy="12" r="2" fill="currentColor" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Full Reviews
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  READ COMPLETE, UNFILTERED REVIEWS from verified users
                </p>
              </div>

              {/* Analytics Feature */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#DBEAFE' }}>
                  {/* Bar Chart Icon */}
                  <svg 
                    className="w-8 h-8" 
                    style={{ color: '#1E3A8A' }}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" 
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Analytics
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  ACCESS DETAILED SCHOOL PERFORMANCE data and trends
                </p>
              </div>
            </div>
            )}

            {/* Subscribe Button - Orange */}
            <Link
              href="/pricing"
              className="block w-full text-center px-6 py-4 rounded-lg text-white font-semibold text-lg hover:opacity-90 transition-opacity"
              style={{ 
                backgroundColor: '#F59E0B',
                fontFamily: 'Poppins, sans-serif'
              }}
              onClick={onClose}
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

