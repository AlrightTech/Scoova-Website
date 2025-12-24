'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'

export default function SignUpPage() {
  const router = useRouter()
  const { login } = useAuth()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      setIsLoading(false)
      return
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters')
      setIsLoading(false)
      return
    }

    // Simulate signup API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Login using AuthContext
      login({
        email: formData.email,
        fullName: formData.fullName,
        loggedIn: true
      })

      // Redirect to home or previous page
      const returnUrl = new URLSearchParams(window.location.search).get('returnUrl') || '/'
      router.push(returnUrl)
    } catch (err) {
      setError('An error occurred. Please try again.')
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Logo Section */}
      <div className="pt-8 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-block">
            <span className="text-2xl sm:text-3xl font-bold" style={{ color: '#1E3A8A' }}>Scoova</span>
          </Link>
        </div>
      </div>
      
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            {/* Sign Up Card */}
            <div 
              className="bg-white rounded-xl p-8 md:p-10 shadow-lg border"
              style={{
                borderColor: '#EAEBEF',
                boxShadow: '0px 1px 2px 0px #0000000D'
              }}
            >
              {/* Header */}
              <div className="text-center mb-8">
                <h1 
                  className="text-3xl md:text-4xl font-bold mb-2"
                  style={{ 
                    color: '#111827',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                >
                  Create Account
                </h1>
                <p 
                  className="text-base text-gray-600"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    color: '#6B7280'
                  }}
                >
                  Sign up to get started with Scoova
                </p>
              </div>

              {/* Error Message */}
              {error && (
                <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200">
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              )}

              {/* Sign Up Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name Field */}
                <div>
                  <label 
                    htmlFor="fullName"
                    className="block text-sm font-medium mb-2"
                    style={{ 
                      color: '#374151',
                      fontFamily: 'Inter, sans-serif'
                    }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none transition-all"
                    style={{
                      borderColor: '#D1D5DB',
                      fontFamily: 'Inter, sans-serif'
                    }}
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label 
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                    style={{ 
                      color: '#374151',
                      fontFamily: 'Inter, sans-serif'
                    }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none transition-all"
                    style={{
                      borderColor: '#D1D5DB',
                      fontFamily: 'Inter, sans-serif'
                    }}
                  />
                </div>

                {/* Password Field */}
                <div>
                  <label 
                    htmlFor="password"
                    className="block text-sm font-medium mb-2"
                    style={{ 
                      color: '#374151',
                      fontFamily: 'Inter, sans-serif'
                    }}
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Create a password"
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none transition-all pr-12"
                      style={{
                        borderColor: '#D1D5DB',
                        fontFamily: 'Inter, sans-serif'
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.29 3.29m0 0L12 12m-5.71-5.71L12 12" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm Password Field */}
                <div>
                  <label 
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium mb-2"
                    style={{ 
                      color: '#374151',
                      fontFamily: 'Inter, sans-serif'
                    }}
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm your password"
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none transition-all pr-12"
                      style={{
                        borderColor: '#D1D5DB',
                        fontFamily: 'Inter, sans-serif'
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showConfirmPassword ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.29 3.29m0 0L12 12m-5.71-5.71L12 12" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 rounded-lg text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ 
                    backgroundColor: '#1E3A8A',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  {isLoading ? 'Creating Account...' : 'Sign Up'}
                </button>
              </form>

              {/* Divider */}
              <div className="my-8 flex items-center">
                <div className="flex-1 border-t border-gray-300"></div>
                <span 
                  className="px-4 text-sm"
                  style={{ 
                    color: '#6B7280',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  OR
                </span>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>

              {/* Social Sign Up Buttons */}
              <div className="space-y-3">
                <button
                  type="button"
                  className="w-full py-3 px-4 border rounded-lg flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors"
                  style={{
                    borderColor: '#D1D5DB',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span style={{ color: '#374151' }}>Continue with Google</span>
                </button>
              </div>

              {/* Sign In Link */}
              <div className="mt-8 text-center">
                <p 
                  className="text-sm"
                  style={{ 
                    color: '#6B7280',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  Already have an account?{' '}
                  <Link
                    href="/signin"
                    className="font-medium hover:underline"
                    style={{ 
                      color: '#1E3A8A',
                      fontFamily: 'Inter, sans-serif'
                    }}
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

