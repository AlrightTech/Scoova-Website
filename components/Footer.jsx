'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    // Handle subscription logic here
    setEmail('')
  }

  return (
    <footer 
      className="border-t"
      style={{ 
        backgroundColor: '#F3F4F6',
        borderTop: '1px solid #E5E7EB'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Column 1: Explore. Review. Trust. */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 
              className="font-bold text-xl sm:text-2xl leading-7 sm:leading-8 align-middle mb-3 sm:mb-4" 
              style={{ 
                color: '#1E3A8A',
                fontFamily: 'Poppins, sans-serif'
              }}
            >
              Explore. Review. Trust.
            </h3>
            <p 
              className="font-normal text-sm sm:text-base leading-6 sm:leading-[26px] align-middle mb-4 sm:mb-6"
              style={{ 
                color: '#4B5563',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              Connecting Schools & Families Globally through trusted insights and authentic reviews.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-2 sm:gap-3 flex-wrap">
              <a 
                href="#" 
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-80 bg-[#1E3A8A]"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a 
                href="#" 
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-80 bg-[#1E3A8A]"
                aria-label="X (Twitter)"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a 
                href="#" 
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-80 bg-[#1E3A8A]"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 
              className="font-semibold text-base sm:text-lg leading-6 sm:leading-[28px] align-middle mb-3 sm:mb-4"
              style={{ 
                color: '#111827',
                fontFamily: 'Poppins, sans-serif'
              }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link 
                  href="/about" 
                  className="font-normal text-sm sm:text-base leading-5 sm:leading-6 align-middle hover:opacity-80 transition-opacity"
                  style={{ 
                    color: '#4B5563',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy" 
                  className="font-normal text-sm sm:text-base leading-5 sm:leading-6 align-middle hover:opacity-80 transition-opacity"
                  style={{ 
                    color: '#4B5563',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms" 
                  className="font-normal text-sm sm:text-base leading-5 sm:leading-6 align-middle hover:opacity-80 transition-opacity"
                  style={{ 
                    color: '#4B5563',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="font-normal text-sm sm:text-base leading-5 sm:leading-6 align-middle hover:opacity-80 transition-opacity"
                  style={{ 
                    color: '#4B5563',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Features */}
          <div>
            <h4 
              className="font-semibold text-base sm:text-lg leading-6 sm:leading-[28px] align-middle mb-3 sm:mb-4"
              style={{ 
                color: '#111827',
                fontFamily: 'Poppins, sans-serif'
              }}
            >
              Features
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link 
                  href="/schools" 
                  className="font-normal text-sm sm:text-base leading-5 sm:leading-6 align-middle hover:opacity-80 transition-opacity"
                  style={{ 
                    color: '#4B5563',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  School Search
                </Link>
              </li>
              <li>
                <Link 
                  href="/write-review" 
                  className="font-normal text-sm sm:text-base leading-5 sm:leading-6 align-middle hover:opacity-80 transition-opacity"
                  style={{ 
                    color: '#4B5563',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  Write Reviews
                </Link>
              </li>
              <li>
                <Link 
                  href="/pricing" 
                  className="font-normal text-sm sm:text-base leading-5 sm:leading-6 align-middle hover:opacity-80 transition-opacity"
                  style={{ 
                    color: '#4B5563',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  Premium Access
                </Link>
              </li>
              <li>
                <Link 
                  href="/analytics" 
                  className="font-normal text-sm sm:text-base leading-5 sm:leading-6 align-middle hover:opacity-80 transition-opacity"
                  style={{ 
                    color: '#4B5563',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  School Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Stay Updated */}
          <div className="sm:col-span-2 lg:col-span-1 w-full">
            <h4 
              className="font-semibold text-base sm:text-lg leading-6 sm:leading-[28px] align-middle mb-3 sm:mb-4"
              style={{ 
                color: '#111827',
                fontFamily: 'Poppins, sans-serif'
              }}
            >
              Stay Updated
            </h4>
            <p 
              className="font-normal text-sm sm:text-base leading-5 sm:leading-6 align-middle mb-3 sm:mb-4"
              style={{ 
                color: '#4B5563',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              Get the latest education insights and platform updates.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row w-full">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 min-w-0 px-3 sm:px-4 py-2 sm:py-2.5 rounded-t-lg sm:rounded-l-lg sm:rounded-r-none sm:rounded-t-none border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm w-full sm:w-auto"
                required
              />
              <button
                type="submit"
                className="text-white px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 font-sans font-normal text-sm sm:text-base hover:opacity-90 transition-opacity rounded-b-lg sm:rounded-r-lg sm:rounded-l-none sm:rounded-b-none bg-[#1E3A8A] w-full sm:w-auto sm:whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 pt-4 sm:pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            {/* Copyright */}
            <p 
              className="font-normal text-xs sm:text-sm leading-4 sm:leading-5 align-middle text-center sm:text-left"
              style={{ 
                color: '#4B5563',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              © 2025 Explore. Review. Trust. All rights reserved.
            </p>
            
            {/* Right Side - Website Builder and Verified Platform */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <span className="text-gray-500 font-normal text-xs sm:text-sm leading-4 sm:leading-5 tracking-normal align-middle">
                Website Builder
              </span>
              <div className="flex items-center gap-2">
                <img src="/images/verfied-icon.png" alt="Verified" className="w-3 h-[12.67px] align-middle" />
                <span className="text-gray-600 font-normal text-xs sm:text-sm leading-4 sm:leading-5 tracking-normal align-middle">
                  Verified Platform
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
