'use client'

import { useState } from 'react'
import PricingCard from './PricingCard'

export default function Pricing() {
  const [userType, setUserType] = useState('general')

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* User Type Selector */}
        <div className="flex justify-center mb-3">
          <div className="inline-flex rounded-full p-1 bg-gray-200">
            <button
              onClick={() => setUserType('general')}
              className={`flex items-center gap-2 px-12 py-1 rounded-full font-sans font-medium text-sm transition-all ${
                userType === 'general'
                  ? 'bg-white text-gray-900 border border-gray-300 shadow-sm'
                  : 'bg-gray-200 text-gray-600 hover:text-gray-900'
              }`}
            >
              <img src="/images/icons (2).png" alt="General Users" className="w-4 h-4" />
              General Users
            </button>
            <button
              onClick={() => setUserType('schools')}
              className={`flex items-center gap-2 px-12 py-1 rounded-full font-sans font-medium text-sm transition-all ${
                userType === 'schools'
                  ? 'bg-white text-gray-900 border border-gray-300 shadow-sm'
                  : 'bg-gray-200 text-gray-600 hover:text-gray-900'
              }`}
            >
              <img src="/images/icons (1).png" alt="Schools" className="w-4 h-4" />
              Schools
            </button>
          </div>
        </div>

        {/* Instructional Text */}
        <p className="text-center text-green-600 font-sans font-normal text-sm mb-12">
          Choose the plan that fits your needs and unlock more Scoova features.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-7xl mx-auto">
          {/* Free User Card */}
          <PricingCard 
            type="free"
            variant="home"
            badgeText="Current Plan"
            buttonText="Your Current Plan"
          />

          {/* Premium User Card */}
          <PricingCard 
            type="premium"
            variant="home"
            buttonText="Upgrade Now"
          />
        </div>
      </div>
    </section>
  )
}

