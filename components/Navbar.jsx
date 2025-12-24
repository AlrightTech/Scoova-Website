'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import UnsubscribeModal from './UnsubscribeModal'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showUnsubscribeModal, setShowUnsubscribeModal] = useState(false)
  const pathname = usePathname()
  const { isLoggedIn, isSubscribed, logout, user } = useAuth()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname?.startsWith(path)
  }

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-xl sm:text-2xl font-bold" style={{ color: '#1E3A8A' }}>Scoova</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center md:space-x-16">
            <Link 
              href="/" 
              className={`text-sm leading-5 tracking-normal align-middle transition-colors ${
                isActive('/') ? 'font-bold' : 'font-medium text-gray-700'
              }`}
              style={isActive('/') ? { color: '#1E3A8A' } : {}}
            >
              Home
            </Link>
            <Link 
              href="/schools" 
              className={`text-sm leading-5 tracking-normal align-middle transition-colors ${
                isActive('/schools') ? 'font-bold' : 'font-medium text-gray-700'
              }`}
              style={isActive('/schools') ? { color: '#1E3A8A' } : {}}
            >
              Schools
            </Link>
            <Link 
              href="/pricing" 
              className={`text-sm leading-5 tracking-normal align-middle transition-colors ${
                isActive('/pricing') ? 'font-bold' : 'font-medium text-gray-700'
              }`}
              style={isActive('/pricing') ? { color: '#1E3A8A' } : {}}
            >
              Pricing
            </Link>
            <Link 
              href="/about" 
              className={`text-sm leading-5 tracking-normal align-middle transition-colors ${
                isActive('/about') ? 'font-bold' : 'font-medium text-gray-700'
              }`}
              style={isActive('/about') ? { color: '#1E3A8A' } : {}}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className={`text-sm leading-5 tracking-normal align-middle transition-colors ${
                isActive('/contact') ? 'font-bold' : 'font-medium text-gray-700'
              }`}
              style={isActive('/contact') ? { color: '#1E3A8A' } : {}}
            >
              Contact
            </Link>
          </div>

          {/* Right Side Actions - Desktop */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {/* Red Heart Icon */}
            <button className="p-2">
              <Image 
                src="/images/like-icon.png" 
                alt="Like" 
                width={28} 
                height={28}
                className="w-7 h-6"
              />
            </button>

            {/* Auth Actions */}
            {!isLoggedIn ? (
              <>
                <Link
                  href="/signin"
                  className="text-sm font-medium leading-5 tracking-normal align-middle transition-colors"
                  style={{ color: '#1E3A8A' }}
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="px-6 py-2 rounded-lg text-sm font-medium leading-5 tracking-normal align-middle text-white hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#1E3A8A' }}
                >
                  Get Started
                </Link>
              </>
            ) : (
              <>
                {isSubscribed ? (
                  <>
                    <span className="text-sm font-medium text-green-600">
                      Subscribed
                    </span>
                    <button
                      onClick={() => setShowUnsubscribeModal(true)}
                      className="text-sm font-medium leading-5 tracking-normal align-middle transition-colors hover:underline"
                      style={{ color: '#DC2626' }}
                    >
                      Unsubscribe
                    </button>
                  </>
                ) : (
                  <Link
                    href="/pricing"
                    className="text-sm font-medium leading-5 tracking-normal align-middle transition-colors"
                    style={{ color: '#1E3A8A' }}
                  >
                    Subscribe
                  </Link>
                )}
                <button
                  onClick={logout}
                  className="px-6 py-2 rounded-lg text-sm font-medium leading-5 tracking-normal align-middle text-white hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#DC2626' }}
                >
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="/" 
                className={`block px-3 py-2 text-sm leading-5 tracking-normal transition-colors rounded-md ${
                  isActive('/') ? 'font-bold' : 'font-medium text-gray-700 hover:bg-gray-50'
                }`}
                style={isActive('/') ? { color: '#1E3A8A' } : {}}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/schools" 
                className={`block px-3 py-2 text-sm leading-5 tracking-normal transition-colors rounded-md ${
                  isActive('/schools') ? 'font-bold' : 'font-medium text-gray-700 hover:bg-gray-50'
                }`}
                style={isActive('/schools') ? { color: '#1E3A8A' } : {}}
                onClick={() => setIsMenuOpen(false)}
              >
                Schools
              </Link>
              <Link 
                href="/pricing" 
                className={`block px-3 py-2 text-sm leading-5 tracking-normal transition-colors rounded-md ${
                  isActive('/pricing') ? 'font-bold' : 'font-medium text-gray-700 hover:bg-gray-50'
                }`}
                style={isActive('/pricing') ? { color: '#1E3A8A' } : {}}
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="/about" 
                className={`block px-3 py-2 text-sm leading-5 tracking-normal transition-colors rounded-md ${
                  isActive('/about') ? 'font-bold' : 'font-medium text-gray-700 hover:bg-gray-50'
                }`}
                style={isActive('/about') ? { color: '#1E3A8A' } : {}}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className={`block px-3 py-2 text-sm leading-5 tracking-normal transition-colors rounded-md ${
                  isActive('/contact') ? 'font-bold' : 'font-medium text-gray-700 hover:bg-gray-50'
                }`}
                style={isActive('/contact') ? { color: '#1E3A8A' } : {}}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile Actions */}
              <div className="pt-4 pb-3 border-t border-gray-200 space-y-2">
                <div className="flex items-center justify-between px-3">
                  <button className="p-2">
                    <Image 
                      src="/images/like-icon.png" 
                      alt="Like" 
                      width={28} 
                      height={28}
                      className="w-7 h-6"
                    />
                  </button>
                </div>
                {!isLoggedIn ? (
                  <>
                    <Link
                      href="/signin"
                      className="block px-3 py-2 text-sm font-medium leading-5 tracking-normal transition-colors rounded-md"
                      style={{ color: '#1E3A8A' }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/signup"
                      className="block px-3 py-2 text-center rounded-lg text-sm font-medium leading-5 tracking-normal text-white hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: '#1E3A8A' }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Get Started
                    </Link>
                  </>
                ) : (
                  <>
                    {isSubscribed ? (
                      <>
                        <span className="block px-3 py-2 text-sm font-medium text-green-600">
                          Subscribed
                        </span>
                        <button
                          onClick={() => {
                            setShowUnsubscribeModal(true)
                            setIsMenuOpen(false)
                          }}
                          className="block w-full text-left px-3 py-2 text-sm font-medium leading-5 tracking-normal transition-colors rounded-md hover:bg-gray-50"
                          style={{ color: '#DC2626' }}
                        >
                          Unsubscribe
                        </button>
                      </>
                    ) : (
                      <Link
                        href="/pricing"
                        className="block px-3 py-2 text-sm font-medium leading-5 tracking-normal transition-colors rounded-md"
                        style={{ color: '#1E3A8A' }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Subscribe
                      </Link>
                    )}
                    <button
                      onClick={() => {
                        logout()
                        setIsMenuOpen(false)
                      }}
                      className="block w-full px-3 py-2 text-center rounded-lg text-sm font-medium leading-5 tracking-normal text-white hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: '#DC2626' }}
                    >
                      Logout
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Unsubscribe Modal */}
      <UnsubscribeModal 
        isOpen={showUnsubscribeModal} 
        onClose={() => setShowUnsubscribeModal(false)} 
      />
    </nav>
  )
}

