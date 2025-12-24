'use client'

import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter, usePathname } from 'next/navigation'

export default function UnlockSubscriptionCard() {
  const { isSubscribed, isLoggedIn, subscribe } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  const handleSubscribe = () => {
    // Capture current page URL as returnUrl
    const returnUrl = encodeURIComponent(pathname || '/')
    
    if (!isLoggedIn) {
      // First go to login, then to pricing with returnUrl
      router.push(`/signin?returnUrl=${encodeURIComponent(`/pricing?returnUrl=${returnUrl}`)}`)
    } else {
      // Go to pricing page with returnUrl
      router.push(`/pricing?returnUrl=${returnUrl}`)
    }
  }

  return (
    <section 
      className="py-16 md:py-20 lg:py-24"
      style={{
        background: 'linear-gradient(90deg, #FEFCE8 0%, #EFF6FF 100%)'
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
          style={{
            boxShadow: '0px 4px 6px 0px rgba(0, 0, 0, 0.1)'
          }}
        >
          {/* Orange Crown Icon */}
          <div className="flex justify-center mb-6">
            <div 
              className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#F59E0B' }}
            >
              <svg 
                className="w-12 h-12 text-white" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 2L9 8h1.5L12 5.5 13.5 8H15l-3-6zm-1 6h2v10h-2V8zm-4 2h2v8H7v-8zm10 0h2v8h-2v-8zM3 18h18v2H3v-2z"/>
              </svg>
            </div>
          </div>

          {/* Heading */}
          <h2 
            className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Unlock All Reviews & Insights
          </h2>

          {/* Description */}
          <p 
            className="text-base text-center text-gray-600 mb-8 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Subscribe to gain complete access to verified reviews, detailed school analytics, and exclusive insights from our global education community.
          </p>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Full Reviews Feature */}
            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: '#DBEAFE' }}
              >
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
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
                  />
                </svg>
              </div>
              <h3 
                className="font-bold text-lg text-gray-900 mb-2"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Full Reviews
              </h3>
              <p 
                className="text-sm text-gray-600 leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Read complete, unbiased reviews from verified users
              </p>
            </div>

            {/* Analytics Feature */}
            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: '#D1FAE5' }}
              >
                <svg 
                  className="w-8 h-8"
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
              <h3 
                className="font-bold text-lg text-gray-900 mb-2"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Analytics
              </h3>
              <p 
                className="text-sm text-gray-600 leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Access detailed school performance data and trends
              </p>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span 
                className="text-lg text-gray-400 line-through"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                $29.99
              </span>
              <span 
                className="text-3xl font-bold text-gray-900"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                $19.99
              </span>
              <span 
                className="text-lg text-gray-600"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                /month
              </span>
            </div>
            <p 
              className="text-sm font-medium"
              style={{ color: '#10B981', fontFamily: 'Inter, sans-serif' }}
            >
              Save 33% - Limited Time Offer
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            {/* Start Subscription Button */}
            <button
              onClick={handleSubscribe}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-lg text-white font-semibold text-base hover:opacity-90 transition-opacity"
              style={{ 
                backgroundColor: '#F59E0B',
                fontFamily: 'Poppins, sans-serif'
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Start Subscription
            </button>

            {/* Learn More Button */}
            <Link
              href="/pricing"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-lg border-2 bg-white font-semibold text-base hover:opacity-90 transition-opacity"
              style={{ 
                borderColor: '#E5E7EB',
                color: '#374151',
                fontFamily: 'Poppins, sans-serif'
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Learn More
            </Link>
          </div>

          {/* Guarantees */}
          <div className="flex flex-wrap justify-center gap-6 pt-6 border-t border-gray-200">
            {/* 30-day guarantee */}
            <div className="flex items-center gap-2">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#D1FAE5' }}
              >
                <svg className="w-4 h-4" style={{ color: '#10B981' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span 
                className="text-xs text-gray-600"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                30-day money back guarantee
              </span>
            </div>

            {/* Cancel anytime */}
            <div className="flex items-center gap-2">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#DBEAFE' }}
              >
                <svg className="w-4 h-4" style={{ color: '#1E3A8A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <span 
                className="text-xs text-gray-600"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Cancel anytime
              </span>
            </div>

            {/* Secure payment */}
            <div className="flex items-center gap-2">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#D1FAE5' }}
              >
                <svg className="w-4 h-4" style={{ color: '#10B981' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span 
                className="text-xs text-gray-600"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Secure payment
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

