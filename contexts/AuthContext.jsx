'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [subscription, setSubscription] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load user and subscription from localStorage on mount
    if (typeof window !== 'undefined') {
      const userData = localStorage.getItem('user')
      const subscriptionData = localStorage.getItem('subscription')
      
      setUser(userData ? JSON.parse(userData) : null)
      setSubscription(subscriptionData ? JSON.parse(subscriptionData) : null)
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    // Listen for storage changes
    const handleStorageChange = (e) => {
      if (e.key === 'user') {
        setUser(e.newValue ? JSON.parse(e.newValue) : null)
      }
      if (e.key === 'subscription') {
        setSubscription(e.newValue ? JSON.parse(e.newValue) : null)
      }
    }

    // Listen for custom events
    const handleUserUpdate = () => {
      const userData = localStorage.getItem('user')
      setUser(userData ? JSON.parse(userData) : null)
    }

    const handleSubscriptionUpdate = () => {
      const subscriptionData = localStorage.getItem('subscription')
      setSubscription(subscriptionData ? JSON.parse(subscriptionData) : null)
    }

    window.addEventListener('storage', handleStorageChange)
    window.addEventListener('userUpdated', handleUserUpdate)
    window.addEventListener('subscriptionUpdated', handleSubscriptionUpdate)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('userUpdated', handleUserUpdate)
      window.removeEventListener('subscriptionUpdated', handleSubscriptionUpdate)
    }
  }, [])

  const login = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData))
    setUser(userData)
    window.dispatchEvent(new Event('userUpdated'))
  }

  const logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('subscription')
    setUser(null)
    setSubscription(null)
    window.dispatchEvent(new Event('userUpdated'))
    window.dispatchEvent(new Event('subscriptionUpdated'))
  }

  const subscribe = (subscriptionData) => {
    localStorage.setItem('subscription', JSON.stringify(subscriptionData))
    setSubscription(subscriptionData)
    window.dispatchEvent(new Event('subscriptionUpdated'))
  }

  // User states
  const isGuest = !user
  const isLoggedIn = !!user
  const isSubscribed = !!subscription
  const isNonSubscriber = isLoggedIn && !isSubscribed

  const value = {
    user,
    subscription,
    isLoading,
    isGuest,
    isLoggedIn,
    isSubscribed,
    isNonSubscriber,
    login,
    logout,
    subscribe
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}

