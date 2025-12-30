'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function SchoolDetailHero({ isClaimed: initialIsClaimed = false }) {
  // State to track if school is claimed (in real app, this would come from props/API)
  const [isClaimed, setIsClaimed] = useState(initialIsClaimed)

  const handleClaimClick = () => {
    // In a real app, this would open a modal or navigate to claim page
    // For now, we'll just toggle the state to show the claimed state
    setIsClaimed(true)
  }
  return (
    <section className="relative overflow-hidden ">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/reviews-hero-img.png"
          alt="School Campus"
          width={1920}
          height={700}
          className="w-full  object-cover"
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-start py-8">
        {/* Left Side - Info Card */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl max-w-2xl w-full">
          {/* Title - Top of Card */}
          <h1 className="font-bold text-[23.92px] text-[#111827] mb-2 leading-tight">
            International Academy of Excellence
          </h1>
          
          {/* Location - Below Title */}
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/images/loc-icon (1).png"
              alt="Location"
              width={8}
              height={8}
              className="object-contain"
            />
            <span className="font-sans font-normal text-[11px] text-[#4B5563]">
              Singapore, Singapore
            </span>
          </div>
          
          {/* Key Metrics - 4 columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {/* Founded */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center">
                <Image
                  src="/images/founded-icon.svg"
                  alt="Founded"
                  width={12}
                  height={12}
                  className="object-contain"
                />
              </div>
              <p className="font-sans font-normal text-[10px] text-[#4B5563] mb-1">Founded</p>
              <p className="text-[11px] font-semibold text-gray-800 font-sans">1995</p>
            </div>

            {/* Principal */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 w-9 h-9 rounded-full bg-yellow-100 flex items-center justify-center">
                <Image
                  src="/images/profile-icon.svg"
                  alt="Principal"
                  width={10}
                  height={10}
                  className="object-contain"
                />
              </div>
              <p className="font-sans font-normal text-[10px] text-[#4B5563] mb-1">Principal</p>
              <p className="text-[11px] font-semibold text-gray-800 leading-tight font-sans">Dr. Sarah Johnson</p>
            </div>

            {/* Students */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 w-9 h-9 rounded-full bg-green-100 flex items-center justify-center">
                <Image
                  src="/images/students-icon.svg"
                  alt="Students"
                  width={12}
                  height={12}
                  className="object-contain"
                />
              </div>
              <p className="font-sans font-normal text-[10px] text-[#4B5563] mb-1">Students</p>
              <p className="text-[11px] font-semibold text-gray-800 font-sans">1,250</p>
            </div>

            {/* Rating */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 w-9 h-9 rounded-full bg-yellow-100 flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>
              <p className="font-sans font-normal text-[10px] text-[#4B5563] mb-1">Rating</p>
              <p className="text-[11px] font-semibold text-gray-800 font-sans">
                <span>4.8</span> <span className="text-gray-500 font-normal">1-10/7</span>
              </p>
            </div>
          </div>

          {/* Curriculum Tags */}
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="font-sans font-normal text-[10px] text-[#1E3A8A] bg-[#DBEAFE] rounded-full py-1.5 px-2.5">
              International
            </span>
            <span className="font-sans font-normal text-[10px] text-[#1E3A8A] bg-[#DBEAFE] rounded-full py-1.5 px-2.5">
              Cambridge
            </span>
            <span className="font-sans font-normal text-[10px] text-[#1E3A8A] bg-[#DBEAFE] rounded-full py-1.5 px-2.5">
              Bilingual
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Follow School */}
            <Link 
              href="/followed-schools"
              className="flex items-center justify-center gap-2 font-sans font-medium text-[10.5px] text-[#374151] bg-[#F3F4F6] rounded-[8px] py-[7px] px-[17.95px] hover:opacity-90 transition-opacity"
            >
              <Image
                src="/images/heart-icon.svg"
                alt="Follow"
                width={10}
                height={9}
                className="object-contain"
                style={{ filter: 'brightness(0) saturate(100%) invert(29%) sepia(7%) saturate(930%) hue-rotate(177deg) brightness(95%) contrast(88%)' }}
              />
              <span>Follow School</span>
            </Link>

            {/* Write a Review */}
            <Link 
              href="/write-review"
              className="flex items-center justify-center gap-2 border border-[#FBBF24] rounded-lg py-2 px-4 text-[#FBBF24] font-['Inter',sans-serif] font-normal text-[10.5px] hover:opacity-90 transition-opacity"
            >
              <Image
                src="/images/write-icon (2).svg"
                alt="Write"
                width={8}
                height={7}
                className="object-contain"
              />
              <span>Write a Review</span>
            </Link>

            {/* Claim / Claimed Button */}
            {isClaimed ? (
              <button 
                disabled
                className="flex items-center justify-center gap-2 text-[#999999] font-['Inter',sans-serif] font-normal text-[11px] bg-[#DDDDDD] rounded-lg py-2 px-4 cursor-not-allowed"
              >
                Claimed
              </button>
            ) : (
              <Link
                href="/register-school"
                onClick={handleClaimClick}
                className="flex items-center justify-center gap-2 text-white font-['Inter',sans-serif] font-normal text-[11px] bg-[#1E3A8A] rounded-lg py-2 px-4 hover:opacity-90 transition-opacity"
              >
                Claim
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

