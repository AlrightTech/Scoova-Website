'use client'

import { useState } from 'react'
import Image from 'next/image'
import RatingSummary from './RatingSummary'
import SubscribeModal from './SubscribeModal'
import ReviewsSection from './ReviewsSection'

export default function StudentInsights() {
  const [activeTab, setActiveTab] = useState('reviews')
  // For demo: Set to false to show modal (non-subscriber view)
  // In production, this would come from user authentication/subscription status
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [showModal, setShowModal] = useState(!isSubscribed)

  const ratingBreakdown = [
    { stars: 5, count: 198 },
    { stars: 4, count: 89 },
    { stars: 3, count: 34 },
    { stars: 2, count: 14 },
    { stars: 1, count: 7 }
  ]

  const performanceCategories = [
    { 
      label: 'Academic Excellence', 
      rating: 4.9,
      icon: '/images/acadmic-excellece.svg',
      isPrimary: true
    },
    { 
      label: 'Teaching Quality', 
      rating: 4.8,
      icon: '/images/blue-user-icon.svg',
      isPrimary: false
    },
    { 
      label: 'Facilities', 
      rating: 4.7,
      icon: '/images/facilities-icon.svg',
      isPrimary: false
    },
    { 
      label: 'Student Support', 
      rating: 4.6,
      icon: '/images/heart-icon.svg',
      isPrimary: false
    },
    { 
      label: 'Communication', 
      rating: 4.4,
      icon: '/images/mesg-icon.svg',
      isPrimary: false
    }
  ]

  const getMaxCount = () => {
    return Math.max(...ratingBreakdown.map(item => item.count))
  }

  const CategoryCard = ({ category }) => {
    const percentage = (category.rating / 5) * 100
    const isPrimary = category.isPrimary
    
    return (
      <div 
        className={`rounded-xl p-6 ${
          isPrimary 
            ? 'bg-[#1E3A8A]' 
            : 'bg-white'
        }`}
      >
        {/* Top Section: Icon, Label, Rating/1-10 */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {/* Icon with circular background */}
            <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
              isPrimary ? 'bg-[#DBEAFE] border border-[#1E3A8A]' : 'bg-[#DBEAFE]'
            }`}>
              <Image
                src={category.icon}
                alt={category.label}
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>
            {/* Label */}
            <span className={`font-medium text-base ${
              isPrimary ? 'text-white' : 'text-[#111827]'
            }`}>
              {category.label}
            </span>
          </div>
          {/* 1-10 */}
          <span className={`font-medium text-base ${
            isPrimary ? 'text-white' : 'text-[#111827]'
          }`}>
            1-10
          </span>
        </div>
        
        {/* Bottom Section: Progress Bar */}
        <div>
          {/* Progress Bar */}
          <div className={`w-full rounded-full h-2 overflow-hidden ${
            isPrimary ? 'bg-[#DBEAFE]' : 'bg-[#E5E7EB]'
          }`}>
            <div
              className={`h-2 rounded-full transition-all ${
                isPrimary ? 'bg-white' : 'bg-[#1E3A8A]'
              }`}
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tabbed Navigation */}
        <div className="bg-gray-50 py-4 px-4 rounded-t-lg mb-8">
          <div className="flex items-end justify-center">
          <button
            onClick={() => setActiveTab('reviews')}
            className={`px-6 py-3 bg-white rounded-t-lg transition-colors relative ${
              activeTab === 'reviews' 
                ? 'font-medium' 
                : 'font-normal text-gray-500'
            }`}
            style={activeTab === 'reviews' ? { color: '#1E3A8A' } : {}}
          >
            <span>School Reviews</span>
            {activeTab === 'reviews' && (
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#1E3A8A] rounded-t-full"></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab('information')}
            className={`px-6 py-3 bg-white rounded-t-lg transition-colors relative ${
              activeTab === 'information' 
                ? 'font-medium' 
                : 'font-normal text-gray-500'
            }`}
            style={activeTab === 'information' ? { color: '#1E3A8A' } : {}}
          >
            <span>School Information</span>
            {activeTab === 'information' && (
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#1E3A8A] rounded-t-full"></div>
            )}
          </button>
          </div>
        </div>

        {/* Reviews Tab Content */}
        {activeTab === 'reviews' && (
          <>
            {/* Main Content Heading - Only for Reviews Tab */}
            <div className="mb-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#111827' }}>
                School Insights & Analytics
              </h2>
              <p className="text-base text-center max-w-3xl mx-auto font-normal" style={{ color: '#4B5563' }}>
                Comprehensive data and feedback from our school community to help you make informed decisions.
              </p>
            </div>
            
            {/* Content Container with relative positioning for modal */}
            <div className="relative min-h-[500px]">
              {/* Modal - positioned relative to section only */}
              <SubscribeModal 
                isOpen={showModal && !isSubscribed} 
                onClose={() => setShowModal(false)}
                title="Unlock And See School Reviews"
                buttonText="Subscribe to View Reviews"
                showFeatures={false}
              />
              
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 ${showModal && !isSubscribed ? 'blur-sm pointer-events-none' : ''}`}>
            {/* Left Section - Rating Summary (4 columns) */}
            <div className="lg:col-span-4">
              <RatingSummary />
            </div>
            
            {/* Right Section - Performance by Category (8 columns) */}
            <div className="lg:col-span-8">
              
              <div className="bg-[#F9FAFB] rounded-[16px] p-[32px]">
                <h3 className="text-xl font-bold mb-6 text-[#111827]">
                  Performance by Category
                </h3>
                <div className="space-y-4">
                  {/* Row 1: Academic Excellence and Teaching Quality */}
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <CategoryCard category={performanceCategories[0]} />
                    </div>
                    <div className="flex-1">
                      <CategoryCard category={performanceCategories[1]} />
                    </div>
                  </div>
                  
                  {/* Row 2: Facilities and Student Support */}
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <CategoryCard category={performanceCategories[2]} />
                    </div>
                    <div className="flex-1">
                      <CategoryCard category={performanceCategories[3]} />
                    </div>
                  </div>
                  
                  {/* Row 3: Communication */}
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <CategoryCard category={performanceCategories[4]} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Reviews Section with Grey Background */}
          <div className="bg-gray-50 w-full  py-12 md:py-16 mt-4">
            <ReviewsSection />
          </div>
            </div>
          </>
        )}

        {/* School Information Tab Content */}
        {activeTab === 'information' && (
          <div className="relative min-h-[500px]">
            {/* Modal - positioned relative to section only */}
            <SubscribeModal 
              isOpen={showModal && !isSubscribed} 
              onClose={() => setShowModal(false)}
              title="Unlock And See School Information"
              buttonText="Subscribe to View Information"
              showFeatures={false}
            />
            
            <div className={showModal && !isSubscribed ? 'blur-sm pointer-events-none' : ''}>
            {/* Campus Gallery Section */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#111827' }}>
                Campus Gallery
              </h2>
              
              {/* Gallery Grid - 4 Images */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Image 1 - Library/Study Hall */}
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <Image
                    src="/images/Singapore International School.png"
                    alt="Modern Library and Study Hall"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                
                {/* Image 2 - Science Laboratory */}
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <Image
                    src="/images/Oxford University.png"
                    alt="Science Laboratory"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                
                {/* Image 3 - Indoor Gymnasium */}
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <Image
                    src="/images/Harvard University.png"
                    alt="Indoor Gymnasium"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                
                {/* Image 4 - Children's Activity/Cooking Class */}
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <Image
                    src="/images/internantional-acadmy-img.png"
                    alt="Children's Activity and Cooking Class"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>

            {/* Leadership Team Section */}
            <div className="mt-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1E3A8A' }}>
                  Meet Our Leadership Team
                </h2>
                <p className="text-base text-gray-600 max-w-3xl mx-auto">
                  Our experienced educators and administrators are dedicated to providing exceptional education and support for every student.
                </p>
              </div>

              {/* Profile Cards Grid - 3 columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Profile Card 1 - Dr. Sarah Johnson */}
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="relative inline-block mb-4">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto">
                      <Image
                        src="/images/Singapore International School.png"
                        alt="Dr. Sarah Johnson"
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Person Icon Overlay */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-8 h-8 bg-[#1E3A8A] rounded-full flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                        <circle cx="12" cy="7" r="4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#1E3A8A' }}>
                    Dr. Sarah Johnson
                  </h3>
                  <p className="text-sm" style={{ color: '#1E3A8A' }}>
                    Principal
                  </p>
                </div>

                {/* Profile Card 2 - Mr. David Chen */}
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="relative inline-block mb-4">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto">
                      <Image
                        src="/images/Oxford University.png"
                        alt="Mr. David Chen"
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Person Icon Overlay */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-8 h-8 bg-[#1E3A8A] rounded-full flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                        <circle cx="12" cy="7" r="4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#1E3A8A' }}>
                    Mr. David Chen
                  </h3>
                  <p className="text-sm" style={{ color: '#1E3A8A' }}>
                    Vice Principal
                  </p>
                </div>

                {/* Profile Card 3 - Ms. Emily Rodriguez */}
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="relative inline-block mb-4">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto">
                      <Image
                        src="/images/Harvard University.png"
                        alt="Ms. Emily Rodriguez"
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Person Icon Overlay */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-8 h-8 bg-[#1E3A8A] rounded-full flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                        <circle cx="12" cy="7" r="4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#1E3A8A' }}>
                    Ms. Emily Rodriguez
                  </h3>
                  <p className="text-sm" style={{ color: '#1E3A8A' }}>
                    Head of Academics
                  </p>
                </div>

                {/* Profile Card 4 */}
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="relative inline-block mb-4">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto">
                      <Image
                        src="/images/internantional-acadmy-img.png"
                        alt="Dr. James Park"
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Person Icon Overlay */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-8 h-8 bg-[#1E3A8A] rounded-full flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                        <circle cx="12" cy="7" r="4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#1E3A8A' }}>
                    Dr. James Park
                  </h3>
                  <p className="text-sm" style={{ color: '#1E3A8A' }}>
                    Head of Science
                  </p>
                </div>

                {/* Profile Card 5 */}
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="relative inline-block mb-4">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto">
                      <Image
                        src="/images/Singapore International School.png"
                        alt="Ms. Lisa Wang"
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Person Icon Overlay */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-8 h-8 bg-[#1E3A8A] rounded-full flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                        <circle cx="12" cy="7" r="4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#1E3A8A' }}>
                    Ms. Lisa Wang
                  </h3>
                  <p className="text-sm" style={{ color: '#1E3A8A' }}>
                    Head of Languages
                  </p>
                </div>

                {/* Profile Card 6 */}
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="relative inline-block mb-4">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto">
                      <Image
                        src="/images/Oxford University.png"
                        alt="Mr. Michael Brown"
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Person Icon Overlay */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-8 h-8 bg-[#1E3A8A] rounded-full flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                        <circle cx="12" cy="7" r="4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#1E3A8A' }}>
                    Mr. Michael Brown
                  </h3>
                  <p className="text-sm" style={{ color: '#1E3A8A' }}>
                    Head of Student Affairs
                  </p>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-3 mt-8 justify-center">
              <button className="px-6 py-2 rounded-lg border border-[#1E3A8A] bg-white text-[#1E3A8A] font-medium text-sm hover:opacity-90 transition-opacity">
                View Detail
              </button>
              <button className="px-6 py-2 rounded-lg bg-[#1E3A8A] text-white font-medium text-sm hover:opacity-90 transition-opacity">
                Apply Now
              </button>
            </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

