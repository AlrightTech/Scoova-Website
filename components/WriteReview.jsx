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
    opportunities: 4
  })

  const ratingCategories = [
    {
      id: 'vision',
      title: 'Vision, Mission & Values in Action',
      description: "The school's mission and values are visible in daily practice.",
      iconBg: '#DBEAFE',
      icon: (
        <svg width="24" height="24" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.4375 8.25C14.4375 7.43745 14.2775 6.63285 13.9665 5.88215C13.6556 5.13144 13.1998 4.44934 12.6252 3.87478C12.0507 3.30021 11.3686 2.84445 10.6179 2.5335C9.86715 2.22254 9.06255 2.0625 8.25 2.0625C7.43745 2.0625 6.63285 2.22254 5.88215 2.5335C5.13144 2.84445 4.44934 3.30021 3.87478 3.87478C3.30021 4.44934 2.84445 5.13144 2.5335 5.88215C2.22254 6.63285 2.0625 7.43745 2.0625 8.25C2.0625 9.06255 2.22254 9.86715 2.5335 10.6179C2.84445 11.3686 3.30021 12.0507 3.87478 12.6252C4.44934 13.1998 5.13144 13.6556 5.88215 13.9665C6.63285 14.2775 7.43745 14.4375 8.25 14.4375C9.06255 14.4375 9.86715 14.2775 10.6179 13.9665C11.3686 13.6556 12.0507 13.1998 12.6252 12.6252C13.1998 12.0507 13.6556 11.3686 13.9665 10.6179C14.2775 9.86715 14.4375 9.06255 14.4375 8.25ZM0 8.25C0 6.06196 0.869194 3.96354 2.41637 2.41637C3.96354 0.869194 6.06196 0 8.25 0C10.438 0 12.5365 0.869194 14.0836 2.41637C15.6308 3.96354 16.5 6.06196 16.5 8.25C16.5 10.438 15.6308 12.5365 14.0836 14.0836C12.5365 15.6308 10.438 16.5 8.25 16.5C6.06196 16.5 3.96354 15.6308 2.41637 14.0836C0.869194 12.5365 0 10.438 0 8.25ZM8.25 10.8281C8.93376 10.8281 9.58952 10.5565 10.073 10.073C10.5565 9.58952 10.8281 8.93376 10.8281 8.25C10.8281 7.56624 10.5565 6.91048 10.073 6.42699C9.58952 5.9435 8.93376 5.67188 8.25 5.67188C7.56624 5.67188 6.91048 5.9435 6.42699 6.42699C5.9435 6.91048 5.67188 7.56624 5.67188 8.25C5.67188 8.93376 5.9435 9.58952 6.42699 10.073C6.91048 10.5565 7.56624 10.8281 8.25 10.8281ZM8.25 3.60938C9.48077 3.60938 10.6611 4.0983 11.5314 4.96858C12.4017 5.83887 12.8906 7.01923 12.8906 8.25C12.8906 9.48077 12.4017 10.6611 11.5314 11.5314C10.6611 12.4017 9.48077 12.8906 8.25 12.8906C7.01923 12.8906 5.83887 12.4017 4.96858 11.5314C4.0983 10.6611 3.60938 9.48077 3.60938 8.25C3.60938 7.01923 4.0983 5.83887 4.96858 4.96858C5.83887 4.0983 7.01923 3.60938 8.25 3.60938ZM7.21875 8.25C7.21875 7.9765 7.3274 7.71419 7.5208 7.5208C7.71419 7.3274 7.9765 7.21875 8.25 7.21875C8.5235 7.21875 8.78581 7.3274 8.9792 7.5208C9.1726 7.71419 9.28125 7.9765 9.28125 8.25C9.28125 8.5235 9.1726 8.78581 8.9792 8.9792C8.78581 9.1726 8.5235 9.28125 8.25 9.28125C7.9765 9.28125 7.71419 9.1726 7.5208 8.9792C7.3274 8.78581 7.21875 8.5235 7.21875 8.25Z" fill="#1E3A8A"/>
        </svg>
      ),
      ratingColor: '#1E3A8A'
    },
    {
      id: 'leadership',
      title: 'Leadership, Communication & Trust',
      description: 'Communication from school leadership is clear and timely.',
      iconBg: '#DCFCE7',
      icon: (
        <svg width="24" height="24" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.213 7.73518V7.84153L19.4592 5.59534C20.165 4.88958 20.165 3.74875 19.4592 3.04299L16.9423 0.529321C16.2365 -0.17644 15.0957 -0.17644 14.39 0.529321L13.0977 1.82161C13.0107 1.81194 12.9204 1.80549 12.8302 1.80549H9.22083C8.02522 1.80549 7.04231 2.70784 6.9134 3.86799H6.90051V7.73518C6.90051 8.44739 7.47737 9.02424 8.18958 9.02424C8.90178 9.02424 9.47864 8.44739 9.47864 7.73518V5.41487V5.41164V4.89924H9.99426H14.3771C14.3771 4.89924 14.3771 4.89924 14.3803 4.89924H14.6349C16.0593 4.89924 17.213 6.05295 17.213 7.47737V7.73518ZM10.5099 5.93049V7.73518C10.5099 9.0178 9.47219 10.0555 8.18958 10.0555C6.90696 10.0555 5.86926 9.0178 5.86926 7.73518V3.91311C4.71233 4.11292 3.74875 4.95403 3.42004 6.11096L2.88831 7.96721L0.529321 10.3262C-0.17644 11.032 -0.17644 12.1728 0.529321 12.8785L3.04622 15.3954C3.75198 16.1012 4.8928 16.1012 5.59856 15.3954L6.8135 14.1805C6.8425 14.1805 6.87151 14.1837 6.90051 14.1837H12.0568C12.9108 14.1837 13.6036 13.4908 13.6036 12.6368C13.6036 12.4564 13.5714 12.2823 13.5166 12.1212H13.6036C14.4576 12.1212 15.1505 11.4283 15.1505 10.5743C15.1505 10.1618 14.9894 9.78801 14.7251 9.51086C15.5533 9.34973 16.1785 8.62141 16.1818 7.74485V7.73196C16.1785 6.73938 15.3729 5.93372 14.3771 5.93372H10.5099V5.93049Z" fill="#16A34A"/>
        </svg>
      ),
      ratingColor: '#EB4335'
    },
    {
      id: 'learning',
      title: 'Learning & Academic Growth',
      description: 'My child is challenged and supported academically.',
      iconBg: '#FEF9C3',
      icon: (
        <svg width="24" height="24" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_773_1597)">
            <path d="M10.313 1.85547C10.052 1.85547 9.79415 1.90059 9.54923 1.9876L0.509676 5.25215C0.203523 5.36494 0.00049604 5.65498 0.00049604 5.98047C0.00049604 6.30596 0.203523 6.596 0.509676 6.70879L2.37559 7.38232C1.84708 8.21377 1.54737 9.19668 1.54737 10.2312V11.1367C1.54737 12.052 1.19932 12.9962 0.828719 13.7406C0.619246 14.1596 0.380769 14.5721 0.103621 14.9523C0.000496041 15.0909 -0.0285079 15.2714 0.0294999 15.4357C0.0875078 15.6001 0.222859 15.7226 0.390437 15.7645L2.45294 16.2801C2.58829 16.3155 2.73331 16.2897 2.85255 16.2156C2.97179 16.1415 3.05557 16.019 3.08136 15.8805C3.3585 14.5012 3.21993 13.2637 3.01368 12.3774C2.91055 11.9198 2.77198 11.4525 2.57862 11.0239V10.2312C2.57862 9.25791 2.90733 8.33945 3.47774 7.60469C3.89346 7.10518 4.43165 6.70234 5.06329 6.4542L10.1229 4.46582C10.3871 4.3627 10.6868 4.4916 10.7899 4.75586C10.8931 5.02012 10.7642 5.31982 10.4999 5.42295L5.44034 7.41133C5.04073 7.56924 4.68946 7.81094 4.40264 8.10742L9.546 9.96367C9.79093 10.0507 10.0487 10.0958 10.3098 10.0958C10.5708 10.0958 10.8286 10.0507 11.0735 9.96367L20.1163 6.70879C20.4225 6.59922 20.6255 6.30596 20.6255 5.98047C20.6255 5.65498 20.4225 5.36494 20.1163 5.25215L11.0768 1.9876C10.8318 1.90059 10.574 1.85547 10.313 1.85547ZM4.1255 13.9727C4.1255 15.1103 6.89698 16.293 10.313 16.293C13.729 16.293 16.5005 15.1103 16.5005 13.9727L16.0074 9.28691L11.4248 10.9434C11.0671 11.0723 10.69 11.1367 10.313 11.1367C9.93594 11.1367 9.55567 11.0723 9.20118 10.9434L4.61856 9.28691L4.1255 13.9727Z" fill="#CA8A04"/>
          </g>
          <defs>
            <clipPath id="clip0_773_1597">
              <path d="M0 0.824219H20.625V17.3242H0V0.824219Z" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      ),
      ratingColor: '#B663FF'
    },
    {
      id: 'safety',
      title: 'Student Behaviour, Safety & Wellbeing',
      description: 'The school provides a safe and supportive environment for students.',
      iconBg: '#FEE2E2',
      icon: (
        <svg width="24" height="24" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_773_1624)">
            <path d="M8.68185 0.093457C8.5465 0.0322266 8.40148 0 8.25001 0C8.09855 0 7.95353 0.0322266 7.81818 0.093457L1.74992 2.66836C1.04093 2.96807 0.512417 3.66738 0.51564 4.51172C0.531753 7.70859 1.8466 13.5577 7.39923 16.2164C7.93742 16.4742 8.56261 16.4742 9.1008 16.2164C14.6534 13.5577 15.9683 7.70859 15.9844 4.51172C15.9876 3.66738 15.4591 2.96807 14.7501 2.66836L8.68185 0.093457ZM4.64064 7.13174C4.64064 6.04248 5.52365 5.15625 6.61613 5.15625C7.1382 5.15625 7.64093 5.36572 8.01154 5.73311L8.25001 5.97158L8.48849 5.73311C8.8591 5.3625 9.36183 5.15625 9.8839 5.15625C10.9732 5.15625 11.8594 6.03926 11.8594 7.13174C11.8594 7.65381 11.6499 8.15654 11.2825 8.52715L8.6174 11.1923C8.41759 11.3921 8.08888 11.3921 7.88908 11.1923L5.22394 8.52715C4.85334 8.15654 4.64709 7.65381 4.64709 7.13174H4.64064Z" fill="#DC2626"/>
          </g>
          <defs>
            <clipPath id="clip0_773_1624">
              <path d="M0 0H16.5V16.5H0V0Z" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      ),
      ratingColor: '#FBBC05'
    },
    {
      id: 'opportunities',
      title: 'Wider Opportunities, Pathways & Partnerships',
      description: 'The school provides meaningful opportunities that help my child grow beyond academics.',
      iconBg: '#6366F1',
      icon: (
        <svg width="20" height="20" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.00275 14.0039V13.0039H7.00375V14.0039H4.00275ZM11.0028 5.50393C11.0034 6.31518 10.8238 7.11644 10.4771 7.84986C10.1304 8.58328 9.62508 9.23055 8.99775 9.74493C8.39875 10.2389 8.00275 10.9379 8.00275 11.7149V12.0039H3.00275V11.7799C3.00275 11.0299 2.69975 10.2899 2.10875 9.82693C1.31065 9.20267 0.700772 8.36983 0.346565 7.42051C-0.00764111 6.47119 -0.0923693 5.4424 0.101752 4.44793C0.497752 2.31593 2.19375 0.57093 4.31675 0.12793C5.12071 -0.0484669 5.954 -0.0423723 6.75529 0.145766C7.55659 0.333903 8.30551 0.699297 8.94696 1.21506C9.58841 1.73083 10.1061 2.38385 10.4618 3.12607C10.8176 3.8683 11.0024 4.68084 11.0028 5.50393ZM2.50275 6.00393C2.50275 3.93693 3.68875 2.50393 5.50275 2.50393V1.50393C3.08975 1.50393 1.50275 3.42193 1.50275 6.00393H2.50275Z" fill="#1E3A8A" fillOpacity="0.9"/>
        </svg>
      ),
      ratingColor: '#34A853'
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
      <div className="flex flex-col">
        {/* Stars Row */}
        <div className="flex gap-1 mb-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => onRatingChange(category.id, star)}
              className="focus:outline-none transition-transform hover:scale-110"
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
                  strokeWidth={star <= rating ? 0 : 2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.364 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </button>
          ))}
        </div>
        {/* Labels Row */}
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>Poor</span>
          <span className="text-sm text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>Excellent</span>
        </div>
      </div>
    )
  }

  if (currentStep === 2) {
    return <WriteReviewStep2 schoolName="International School of Geneva" />
  }

  return (
    <>
    <section className="pt-24 pb-12 md:pt-28 md:pb-16" style={{ backgroundColor: '#F0F7FF' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1E3A8A', fontFamily: 'Poppins, sans-serif' }}>
            Write a Review
          </h1>
          <p className="text-gray-600 text-base md:text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
            Share your experience and rate the school to help others make informed decisions.
          </p>
        </div>

        {/* School Information Card */}
        <div className="bg-white rounded-lg p-6 mb-6 flex items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src="/images/Singapore International School.png"
                alt="International School of Geneva"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-lg md:text-xl font-bold mb-1 text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                International School of Geneva
              </h2>
              <div className="flex items-center gap-1 text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm md:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>Geneva, Switzerland</span>
              </div>
            </div>
          </div>
          <button className="px-4 py-2.5 bg-[#1E3A8A] text-white rounded-lg font-medium hover:opacity-90 transition-opacity whitespace-nowrap text-sm md:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
            Change School
          </button>
        </div>

        {/* Role Selection */}
        <div className="mb-8">
          <label className="block text-sm font-medium mb-2 text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
            Select Role
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowRoleDropdown(!showRoleDropdown)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-left flex items-center justify-between focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none"
            >
              <span className="text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>{selectedRole}</span>
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
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {role}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Role Heading and Instruction */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {selectedRole}
          </h2>
          <p className="text-gray-700 text-base md:text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
            Please rate the following based on your experience with the school:
          </p>
        </div>

        {/* Rating Sections */}
        <div className="space-y-6 mb-12">
          {ratingCategories.map((category) => (
            <div key={category.id} className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ 
                    backgroundColor: category.id === 'opportunities' ? '#E2E9FE' : category.iconBg,
                    borderRadius: category.id === 'opportunities' ? '8249.17px' : '50%'
                  }}
                >
                  {category.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2 text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm md:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {category.description}
                  </p>
                  <StarRating
                    category={category}
                    rating={ratings[category.id]}
                    onRatingChange={handleRatingChange}
                  />
                </div>
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
            style={{ fontFamily: 'Inter, sans-serif' }}
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

