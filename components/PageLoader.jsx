'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function PageLoader() {
  const pathname = usePathname()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = () => setLoading(true)
    const handleComplete = () => setLoading(false)

    // Set loading when pathname changes
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 300)

    return () => {
      clearTimeout(timer)
      setLoading(false)
    }
  }, [pathname])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-90 backdrop-blur-sm">
      <div className="text-center">
        <div 
          className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-solid border-r-transparent mb-4"
          style={{ borderColor: '#1E3A8A', borderRightColor: 'transparent' }}
        ></div>
        <p className="text-gray-700 font-medium text-lg">Loading...</p>
      </div>
    </div>
  )
}

