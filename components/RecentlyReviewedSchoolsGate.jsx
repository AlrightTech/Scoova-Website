'use client'

import RecentlyReviewedSchools from './RecentlyReviewedSchools'
import SubscriptionGate from './SubscriptionGate'
import { useAuth } from '@/contexts/AuthContext'

export default function RecentlyReviewedSchoolsGate() {
  const { isSubscribed, isLoading } = useAuth()

  // Show loading state
  if (isLoading) {
    return (
      <section 
        className="py-12 md:py-16"
        style={{
          background: 'linear-gradient(90deg, #FEFCE8 0%, #F0FDFA 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
      </section>
    )
  }

  // If user is subscribed, show the actual content
  if (isSubscribed) {
    return <RecentlyReviewedSchools />
  }

  // If not subscribed, show subscription gate
  return <SubscriptionGate />
}

