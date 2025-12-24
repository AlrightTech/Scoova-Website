'use client'

import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'

export default function UnsubscribeModal({ isOpen, onClose }) {
  const { logout, subscribe } = useAuth()
  const [isUnsubscribing, setIsUnsubscribing] = useState(false)

  const handleUnsubscribe = async () => {
    setIsUnsubscribing(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Remove subscription
      subscribe(null)
      
      // Close modal
      onClose()
    } catch (error) {
      console.error('Error unsubscribing:', error)
    } finally {
      setIsUnsubscribing(false)
    }
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl p-8 max-w-md w-full shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
            <svg 
              className="w-8 h-8 text-red-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </div>
          <h2 
            className="text-2xl font-bold mb-2"
            style={{ 
              color: '#111827',
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            Unsubscribe
          </h2>
          <p 
            className="text-base"
            style={{ 
              color: '#6B7280',
              fontFamily: 'Inter, sans-serif'
            }}
          >
            Are you sure you want to unsubscribe? You will lose access to premium features.
          </p>
        </div>

        {/* Warning Message */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <p 
            className="text-sm"
            style={{ 
              color: '#92400E',
              fontFamily: 'Inter, sans-serif'
            }}
          >
            After unsubscribing, you will no longer have access to:
          </p>
          <ul className="list-disc list-inside mt-2 text-sm space-y-1" style={{ color: '#92400E' }}>
            <li>Full Reviews</li>
            <li>School Insights & Analytics</li>
            <li>Detailed Statistics</li>
            <li>Premium Features</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={onClose}
            disabled={isUnsubscribing}
            className="flex-1 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors disabled:opacity-50"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Cancel
          </button>
          <button
            onClick={handleUnsubscribe}
            disabled={isUnsubscribing}
            className="flex-1 px-6 py-3 rounded-lg text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
            style={{ 
              backgroundColor: '#DC2626',
              fontFamily: 'Inter, sans-serif'
            }}
          >
            {isUnsubscribing ? 'Unsubscribing...' : 'Unsubscribe'}
          </button>
        </div>
      </div>
    </div>
  )
}

