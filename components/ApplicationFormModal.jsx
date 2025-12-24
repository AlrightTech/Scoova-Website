'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

export default function ApplicationFormModal({ jobTitle, onClose }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    currentJobTitle: '',
    yearsOfExperience: '',
    preferredStartDate: '',
    coverLetter: '',
    linkedInProfile: '',
    allowProfileSharing: false
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    onClose()
  }

  const modalContent = (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-xl max-w-4xl w-full my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              Application Form - {jobTitle}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="e.g. Jane Doe"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none"
                required
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="jane.doe@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="e.g. (123) 456-7890"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none"
                required
              />
            </div>

            {/* Current Job Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Job Title / Role
              </label>
              <input
                type="text"
                name="currentJobTitle"
                value={formData.currentJobTitle}
                onChange={handleInputChange}
                placeholder="e.g. Mathematics Teacher"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none"
              />
            </div>

            {/* Years of Experience */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Years of Experience
              </label>
              <div className="relative">
                <select
                  name="yearsOfExperience"
                  value={formData.yearsOfExperience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none bg-white appearance-none pr-10"
                  required
                >
                  <option value="">Select years</option>
                  <option value="0-1">0-1 years</option>
                  <option value="2-5">2-5 years</option>
                  <option value="6-10">6-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Preferred Start Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Start Date
              </label>
              <input
                type="date"
                name="preferredStartDate"
                value={formData.preferredStartDate}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none"
              />
            </div>
          </div>

          {/* Upload CV / Resume */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload CV / Resume
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-[#1E3A8A] transition-colors cursor-pointer">
              <div className="flex flex-col items-center">
                <svg className="w-12 h-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="text-gray-600 mb-2">
                  Upload a file or drag and drop
                </p>
                <p className="text-sm text-gray-500">
                  PDF, DOC, DOCX up to 10MB
                </p>
              </div>
            </div>
          </div>

          {/* Cover Letter */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cover Letter / Message <span className="text-gray-500">(Optional)</span>
            </label>
            <textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleInputChange}
              placeholder="Write a brief message to the hiring manager..."
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none resize-none"
            />
          </div>

          {/* LinkedIn Profile */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              LinkedIn Profile <span className="text-gray-500">(Optional)</span>
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <input
                type="url"
                name="linkedInProfile"
                value={formData.linkedInProfile}
                onChange={handleInputChange}
                placeholder="https://linkedin.com/in/yourprofile"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none"
              />
            </div>
          </div>

          {/* Privacy Checkbox */}
          <div className="mb-6">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="allowProfileSharing"
                checked={formData.allowProfileSharing}
                onChange={handleInputChange}
                className="mt-1 w-4 h-4 text-[#1E3A8A] border-gray-300 rounded focus:ring-[#1E3A8A]"
              />
              <span className="text-sm text-gray-700">
                Allow Scoosa to share my profile with similar schools hiring for related positions.
              </span>
            </label>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel & Go Back
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-[#1E3A8A] text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  )

  if (!mounted) return null

  return createPortal(modalContent, document.body)
}

