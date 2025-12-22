'use client'

import { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export default function NavigationLoader() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [pathname, searchParams])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white bg-opacity-95 backdrop-blur-sm">
      <div className="text-center">
        <div 
          className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-solid border-r-transparent mb-4"
          style={{ 
            borderColor: '#1E3A8A', 
            borderRightColor: 'transparent' 
          }}
        ></div>
        <p className="text-gray-700 font-medium text-lg">Loading...</p>
      </div>
    </div>
  )
}
