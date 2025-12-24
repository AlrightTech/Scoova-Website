'use client'

import Image from 'next/image'
import { useAuth } from '@/contexts/AuthContext'

export default function SchoolInsightsSubscriptionGate() {
  const { isLoggedIn } = useAuth()

  const handleSubscribeClick = () => {
    if (!isLoggedIn) {
      const currentPath = window.location.pathname
      window.location.href = `/signin?returnUrl=${encodeURIComponent(currentPath)}`
    } else {
      window.location.href = '/pricing'
    }
  }

  return (
    <div className="relative z-50 flex items-center justify-center py-8">
      <div 
        className="bg-white rounded-xl p-8 md:p-10 border-2 text-center max-w-lg mx-auto"
        style={{
          borderColor: '#1E3A8A',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
        }}
      >
        {/* Orange Lock Icon */}
        <div className="flex justify-center mb-6">
          <div 
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{ backgroundColor: '#F97316' }}
          >
            <svg 
              className="w-8 h-8 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" 
              />
            </svg>
          </div>
        </div>

        {/* Main Title */}
        <h3 
          className="text-2xl md:text-3xl font-bold mb-8"
          style={{ 
            color: '#111827',
            fontFamily: 'Poppins, sans-serif'
          }}
        >
          Subscribe to Unlock and See<br />
          School Insights & Analytics
        </h3>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Full Reviews Feature */}
          <div className="text-center">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
              style={{ backgroundColor: '#DBEAFE' }}
            >
              <svg 
                className="w-6 h-6"
                style={{ color: '#1E3A8A' }}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
                />
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" 
                />
              </svg>
            </div>
            <h4 
              className="font-bold text-base mb-2"
              style={{ 
                color: '#111827',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              Full Reviews
            </h4>
            <p 
              className="text-sm"
              style={{ 
                color: '#6B7280',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              Read complete, unblurred reviews from verified users
            </p>
          </div>

          {/* Analytics Feature */}
          <div className="text-center">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
              style={{ backgroundColor: '#D1FAE5' }}
            >
              <svg 
                className="w-6 h-6"
                style={{ color: '#10B981' }}
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
            <h4 
              className="font-bold text-base mb-2"
              style={{ 
                color: '#111827',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              Analytics
            </h4>
            <p 
              className="text-sm"
              style={{ 
                color: '#6B7280',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              Access detailed school performance data and trends
            </p>
          </div>
        </div>

        {/* Subscribe Button */}
        <button
          onClick={handleSubscribeClick}
          className="w-full py-4 rounded-xl text-white font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          style={{ 
            backgroundColor: '#F97316',
            fontFamily: 'Poppins, sans-serif'
          }}
        >
          <Image
            src="/images/subscribe-icon.svg"
            alt="Subscribe"
            width={20}
            height={20}
            className="filter brightness-0 invert"
          />
          <span>Subscribe School</span>
        </button>
      </div>
    </div>
  )
}

