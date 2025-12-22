'use client'

import Image from 'next/image'

export default function PricingCard({ 
  type = 'free', // 'free' or 'premium'
  variant = 'home', // 'home' or 'pricing'
  badgeText,
  buttonText,
  isCurrentPlan = false
}) {
  const freeFeatures = [
    'Worldwide School Information',
    'Local Area Guides',
    'Write School Reviews',
    'Write Senior Leadership Reviews',
    'School Comparison Tool'
  ]

  const premiumFeatures = [
    'School Job Postings',
    'Scoova School Ratings',
    'Analytical Review Breakdown',
    'Verified Employee Reviews',
    'School Replies to Reviews',
    'Follow Schools for Updates'
  ]

  const isFree = type === 'free'
  const isHome = variant === 'home'
  const isPricing = variant === 'pricing'
  const features = isFree ? freeFeatures : premiumFeatures

  // Home variant styles (same design for both home and pricing, but border colors swapped for pricing)
  if (isHome || isPricing) {
    // For pricing page, swap border colors: Free gets Premium's color, Premium gets Free's color
    const borderColor = isPricing
      ? (isFree ? '#BEDBFF' : '#0000001A')  // Swapped for pricing page
      : (isFree ? '#0000001A' : '#BEDBFF')  // Normal for home page
    
    // For pricing page, swap background colors: Free gets Premium's gradient, Premium gets Free's white
    const backgroundClass = isPricing
      ? (isFree ? 'bg-gradient-to-br from-[#EFF6FF] to-white' : 'bg-white')  // Swapped for pricing page
      : (isFree ? 'bg-white' : 'bg-gradient-to-br from-[#EFF6FF] to-white')  // Normal for home page
    
    return (
      <div className={`rounded-[18px] p-8 relative border-2 flex flex-col ${backgroundClass}`} style={{ 
        borderColor: borderColor
      }}>
        {/* Popular Badge - Premium only */}
        {!isFree && (
          <div className="absolute top-0 right-0 text-white px-6 py-1 font-normal text-[18px] z-10" style={{ 
            background: 'linear-gradient(135deg, #155DFC 0%, #4F39F6 100%)', 
            fontFamily: 'Arial, sans-serif', 
            lineHeight: '31.35px', 
            letterSpacing: '0px', 
            borderTopLeftRadius: '0px', 
            borderBottomLeftRadius: '12px', 
            borderTopRightRadius: '12px', 
            borderBottomRightRadius: '0px' 
          }}>
            Popular
          </div>
        )}

        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className={isFree ? '' : 'mb-4'}>
            <div className={`flex items-center ${isFree ? '' : 'gap-5 mb-2'}`}>
              <h3 className="text-2xl" style={{ color: '#0A0A0A', fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                {isFree ? 'Free User' : 'Premium User'}
              </h3>
              {!isFree && (
                <img src="/images/premium-icon.png" alt="Premium" className="w-8 h-8" />
              )}
            </div>
            {!isFree && (
              <p className="font-sans font-normal text-[18px]" style={{ color: '#717182' }}>
                Unlock all features & insights
              </p>
            )}
          </div>
          {isFree && badgeText && (
            <div className="px-3 py-1 rounded-[10px] font-normal text-[13.5px] text-black" style={{ backgroundColor: '#ECEEF2', fontFamily: 'Arial, sans-serif' }}>
              {badgeText}
            </div>
          )}
        </div>

        {/* Description - Free only */}
        {isFree && (
          <p className="font-sans font-normal text-[18px] mb-4" style={{ color: '#717182' }}>
            Perfect for exploring schools
          </p>
        )}

        {/* Pricing */}
        <div className="mb-8">
          <span className="font-sans font-normal text-[18px]" style={{ color: '#0A0A0A' }}>
            {isFree ? '$0' : '$9.99'}
          </span>
          <span className="font-sans font-normal text-[18px]" style={{ color: '#717182' }}>
            {' '}/month
          </span>
        </div>

        {/* Everything in Free box - Premium only */}
        {!isFree && (
          <div className="px-4 py-3 rounded-[12px] mb-6 bg-[#DBEAFE]" style={{ borderTop: '1.31px solid #BEDBFF' }}>
            <p className="font-sans font-normal text-[18px]" style={{ color: '#1C398E', lineHeight: '31.35px', letterSpacing: '0px' }}>
              Everything in Free, plus:
            </p>
          </div>
        )}

        {/* Features List */}
        <ul className={`${isHome ? 'space-y-4' : 'space-y-3'} mb-10`}>
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <svg 
                className={`${isHome ? 'w-7 h-8' : 'w-5 h-5'} flex-shrink-0 mt-0.5`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                style={{ color: isFree ? '#000000' : (isHome ? '#155DFC' : '#1E3A8A') }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span 
                className={`font-sans font-normal ${isHome ? 'text-[18.5px]' : 'text-base'}`} 
                style={{ 
                  color: isHome ? '#0A0A0AE5' : '#4B5563',
                  lineHeight: isHome ? '31.35px' : 'normal',
                  letterSpacing: isHome ? '0px' : 'normal'
                }}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* Button */}
        <button 
          className={`w-full px-6 ${isHome ? 'py-2' : 'py-3'} rounded-lg font-${isHome ? 'semibold' : 'medium'} text-[16px] hover:opacity-90 transition-opacity mt-auto`}
          style={{ 
            backgroundColor: isFree ? 'white' : '#1E3A8A',
            color: isFree ? '#1E3A8A' : 'white',
            border: isFree ? '1px solid #1E3A8A' : 'none',
            fontFamily: 'Poppins, sans-serif',
            lineHeight: isHome ? '100%' : 'normal',
            letterSpacing: isHome ? '0px' : 'normal'
          }}
        >
          {buttonText || (isFree ? 'Your Current Plan' : 'Upgrade Now')}
        </button>
      </div>
    )
  }

  // Pricing page variant styles
  return (
    <div className={`bg-white rounded-lg shadow-lg p-8 relative ${!isFree ? 'border-2' : ''}`} style={{ 
      borderColor: !isFree ? '#1E3A8A' : 'transparent'
    }}>
      {/* Badge */}
      {badgeText && (
        <div className={`absolute ${isFree ? 'top-4 right-4' : '-top-3 right-6'}`}>
          <span 
            className={`px-${isFree ? '3' : '4'} py-1 ${isFree ? 'rounded-full text-xs' : 'rounded-lg text-sm'} font-medium`}
            style={{ 
              backgroundColor: isFree ? '#F3F4F6' : '#1E3A8A',
              color: isFree ? '#6B7280' : 'white'
            }}
          >
            {badgeText}
          </span>
        </div>
      )}

      {/* Header */}
      <div className={`flex items-center ${isFree ? '' : 'gap-2'} mb-2`}>
        <h2 
          className="text-2xl font-bold text-gray-900"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {isFree ? 'Free User' : 'Premium User'}
        </h2>
        {!isFree && (
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        )}
      </div>

      {/* Description */}
      <p 
        className="text-gray-600 mb-4"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {isFree ? 'Perfect for exploring schools.' : 'Unlock all features & insights.'}
      </p>

      {/* Pricing */}
      <div 
        className="text-4xl font-bold mb-6"
        style={{ color: '#1E3A8A', fontFamily: 'Poppins, sans-serif' }}
      >
        {isFree ? '$0' : '$9.99'} <span className="text-lg text-gray-600 font-normal">/month</span>
      </div>

      {/* Everything in Free box - Premium only */}
      {!isFree && (
        <div 
          className="rounded-lg p-4 mb-6"
          style={{ backgroundColor: '#EFF6FF' }}
        >
          <p 
            className="text-sm font-medium"
            style={{ color: '#1E3A8A', fontFamily: 'Inter, sans-serif' }}
          >
            Everything in Free, plus:
          </p>
        </div>
      )}

      {/* Features List */}
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <button 
        className={`w-full px-6 py-3 rounded-lg font-medium text-center ${isFree ? 'border-2' : ''}`}
        style={{ 
          borderColor: isFree ? '#1E3A8A' : 'transparent',
          color: isFree ? '#1E3A8A' : 'white',
          backgroundColor: isFree ? 'transparent' : '#1E3A8A',
          fontFamily: 'Inter, sans-serif'
        }}
      >
        {buttonText || (isFree ? 'Free Plan' : 'Your Current Plan')}
      </button>
    </div>
  )
}

