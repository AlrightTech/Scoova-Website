'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useAuth } from '@/contexts/AuthContext'

export default function SubscriptionGate() {
  const { isLoggedIn } = useAuth()

  const handleSubscribeClick = () => {
    if (!isLoggedIn) {
      // Redirect to login page with return URL
      const currentPath = window.location.pathname
      window.location.href = `/signin?returnUrl=${encodeURIComponent(currentPath)}`
    } else {
      // Redirect to pricing/subscription page
      window.location.href = '/pricing'
    }
  }

  return (
    <section 
      className="py-12 md:py-16"
      style={{
        background: 'linear-gradient(90deg, #EFF6FF 0%, #F0FDFA 100%)'
      }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1400px' }}>
        <div className="max-w-2xl mx-auto">
          {/* Subscription Card */}
          <div 
            className="bg-white rounded-2xl p-8 md:p-12 text-center border"
            style={{
              borderColor: '#E5E7EB',
              boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.1)'
            }}
          >
            {/* Subscribe Icon */}
            <div className="flex justify-center mb-6">
              <div 
                className="w-16 h-16 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: '#1E3A8A' }}
              >
                <Image
                  src="/images/subscribe-icon.svg"
                  alt="Subscribe"
                  width={26}
                  height={24}
                  className="filter brightness-0 invert"
                />
              </div>
            </div>

            {/* Main Title */}
            <h2 
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
              style={{ 
                color: '#111827',
                fontFamily: 'Poppins, sans-serif'
              }}
            >
              Want to Unlock Full Reviews?
            </h2>

            {/* Description */}
            <p 
              className="text-base md:text-lg text-gray-600 mb-8"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                color: '#6B7280'
              }}
            >
              Get detailed insights and verified opinions from real parents, educators, and alumni.
            </p>

            {/* Feature List */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-8">
              {/* Verified Reviews */}
              <div className="flex items-center gap-2">
                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#10B981' }}
                >
                  <svg 
                    className="w-4 h-4 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                </div>
                <span 
                  className="text-base font-medium"
                  style={{ 
                    color: '#111827',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  Verified Reviews
                </span>
              </div>

              {/* Detailed Insights */}
              <div className="flex items-center gap-2">
                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#10B981' }}
                >
                  <svg 
                    className="w-4 h-4 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                </div>
                <span 
                  className="text-base font-medium"
                  style={{ 
                    color: '#111827',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  Detailed Insights
                </span>
              </div>

              {/* Expert Analysis */}
              <div className="flex items-center gap-2">
                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#10B981' }}
                >
                  <svg 
                    className="w-4 h-4 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                </div>
                <span 
                  className="text-base font-medium"
                  style={{ 
                    color: '#111827',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  Expert Analysis
                </span>
              </div>
            </div>

            {/* Subscribe Now Button */}
            <button
              onClick={handleSubscribeClick}
              className="px-8 py-4 rounded-xl text-white font-bold text-lg mb-6 hover:opacity-90 transition-opacity"
              style={{ 
                backgroundColor: '#1E3A8A',
                fontFamily: 'Poppins, sans-serif'
              }}
            >
              {isLoggedIn ? 'Subscribe Now' : 'Login to Subscribe'}
            </button>

            {/* Footer Text */}
            <p 
              className="text-sm text-gray-500"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                color: '#9CA3AF'
              }}
            >
              Join 50,000+ parents and educators worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

