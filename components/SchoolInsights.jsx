'use client'

import { useState } from 'react'
import Image from 'next/image'
import SubscribeModal from './SubscribeModal'

export default function SchoolInsights() {
  // For demo: Set to false to show modal (non-subscriber view)
  // In production, this would come from user authentication/subscription status
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [showModal, setShowModal] = useState(!isSubscribed)
  const school1Data = [
    { label: 'Academic Excellence', rating: 4.9, icon: '/images/acadmic-excellece.svg' },
    { label: 'Teaching Quality', rating: 4.8, icon: '/images/blue-user-icon.svg' },
    { label: 'Facilities', rating: 4.7, icon: '/images/facilities-icon.svg' },
    { label: 'Communication', rating: 4.4, icon: '/images/acadmic-excellece.svg' },
    { label: 'Student Support', rating: 4.6, icon: '/images/heart-icon.svg' }
  ]

  const school2Data = [
    { label: 'Academic Excellence', rating: 4.5, icon: '/images/acadmic-excellece.svg' },
    { label: 'Teaching Quality', rating: 4.3, icon: '/images/blue-user-icon.svg' },
    { label: 'Facilities', rating: 4.2, icon: '/images/facilities-icon.svg' },
    { label: 'Communication', rating: 4.1, icon: '/images/acadmic-excellece.svg' },
    { label: 'Student Support', rating: 4.4, icon: '/images/heart-icon.svg' }
  ]

  const CategoryItem = ({ label, rating, icon }) => {
    const percentage = (rating / 5) * 100
    
    return (
      <div className="rounded-xl p-4 bg-[#F9FAFB] mb-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            {/* Icon with circular background */}
            <div className="w-10 h-10 rounded-full bg-[#DBEAFE] flex items-center justify-center flex-shrink-0">
              <Image
                src={icon}
                alt={label}
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </div>
            {/* Category Name */}
            <span className="text-[#111827] font-['Inter',sans-serif] font-medium text-base">
              {label}
            </span>
          </div>
          {/* Rating */}
          <span className="text-[#111827] font-['Inter',sans-serif] font-bold text-base">
            {rating}
          </span>
        </div>
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="h-2 rounded-full transition-all duration-300"
            style={{ 
              width: `${percentage}%`,
              backgroundColor: '#1E3A8A'
            }}
          />
        </div>
      </div>
    )
  }

  return (
    <section className="py-12 md:py-16 bg-[#F9FAFB] relative w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] font-['Poppins',sans-serif] text-center mb-8 sm:mb-12">
          School Insights & Analytics
        </h2>
        
        {/* Content Container with relative positioning for modal */}
        <div className="relative min-h-[500px]">
              {/* Modal - positioned relative to section only */}
              <SubscribeModal 
                isOpen={showModal && !isSubscribed} 
                onClose={() => setShowModal(false)}
                title="Subscribe to Unlock and See School Insights & Analytics"
                buttonText="Subscribe School"
                showFeatures={true}
              />
          
          {/* Content Grid */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 ${showModal && !isSubscribed ? 'blur-sm pointer-events-none' : ''}`}>
          {/* School 1 - Greenwood Academy */}
            <div className="bg-white rounded-[20px] shadow-md p-4 sm:p-6 md:p-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-gray-900">
              Performance by Category
            </h3>
            {school1Data.map((item, index) => (
              <CategoryItem key={index} label={item.label} rating={item.rating} icon={item.icon} />
            ))}
            <div className="flex justify-end mt-6">
              <button
                className="px-6 py-3 rounded-lg text-white font-medium hover:opacity-90 transition-opacity bg-[#1E3A8A]"
              >
                See Reviews
              </button>
            </div>
          </div>
          
          {/* School 2 - American School of Dubai */}
            <div className="bg-white rounded-[20px] shadow-md p-4 sm:p-6 md:p-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-gray-900">
              Performance by Category
            </h3>
            {school2Data.map((item, index) => (
              <CategoryItem key={index} label={item.label} rating={item.rating} icon={item.icon} />
            ))}
            <div className="flex justify-end mt-6">
              <button
                className="px-6 py-3 rounded-lg text-white font-medium hover:opacity-90 transition-opacity bg-[#1E3A8A]"
              >
                See Reviews
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

