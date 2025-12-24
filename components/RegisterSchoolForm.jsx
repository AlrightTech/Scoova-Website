'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function RegisterSchoolForm() {
  const [formData, setFormData] = useState({
    schoolName: '',
    location: '',
    principalDirector: '',
    totalStudents: '',
    schoolRating: '',
    schoolType: 'University',
    foundedYear: '',
    schoolBio: ''
  })

  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: 'Ava Barnes', role: '', image: '/images/Singapore International School.png' }
  ])

  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleTeamMemberRoleChange = (id, role) => {
    setTeamMembers(prev => 
      prev.map(member => 
        member.id === id ? { ...member, role } : member
      )
    )
  }

  const handleRemoveTeamMember = (id) => {
    setTeamMembers(prev => prev.filter(member => member.id !== id))
  }

  const handleAddTeamMember = () => {
    const newId = Math.max(...teamMembers.map(m => m.id), 0) + 1
    setTeamMembers(prev => [
      ...prev,
      { id: newId, name: 'New Member', role: '', image: '/images/Oxford University.png' }
    ])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Show success modal
    setShowSuccessModal(true)
    // Here you can add API call to submit the form data
    // await fetch('/api/register-school', { method: 'POST', body: JSON.stringify(formData) })
  }

  const handleCloseModal = () => {
    setShowSuccessModal(false)
  }

  return (
    <>
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form className="space-y-6 sm:space-y-8" onSubmit={handleSubmit}>
          {/* School Information Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Left Column */}
            <div className="space-y-4 sm:space-y-6">
              {/* School Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  School Name
                </label>
                <input
                  type="text"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={handleInputChange}
                  placeholder="e.g. Birmingham High School"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none"
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="e.g. Springfield, IL"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none"
                />
              </div>

              {/* Principal/Director */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Principal/Director
                </label>
                <input
                  type="text"
                  name="principalDirector"
                  value={formData.principalDirector}
                  onChange={handleInputChange}
                  placeholder="e.g. Dr. Jane Doe"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none"
                />
              </div>

              {/* Total Students */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Total Students
                </label>
                <input
                  type="text"
                  name="totalStudents"
                  value={formData.totalStudents}
                  onChange={handleInputChange}
                  placeholder="e.g. 1500"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none"
                />
              </div>

              {/* School Rating */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  School Rating
                </label>
                <input
                  type="text"
                  name="schoolRating"
                  value={formData.schoolRating}
                  onChange={handleInputChange}
                  placeholder="e.g. 4.5"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4 sm:space-y-6">
              {/* School Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  School Type
                </label>
                <div className="relative">
                  <select
                    name="schoolType"
                    value={formData.schoolType}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none bg-white appearance-none pr-8 sm:pr-10"
                  >
                    <option value="University">University</option>
                    <option value="High School">High School</option>
                    <option value="Elementary School">Elementary School</option>
                    <option value="Middle School">Middle School</option>
                    <option value="Private School">Private School</option>
                  </select>
                  <div className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Founded Year */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Founded Year
                </label>
                <input
                  type="text"
                  name="foundedYear"
                  value={formData.foundedYear}
                  onChange={handleInputChange}
                  placeholder="e.g. 1990"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none"
                />
              </div>

              {/* School Bio */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  School Bio
                </label>
                <textarea
                  name="schoolBio"
                  value={formData.schoolBio}
                  onChange={handleInputChange}
                  placeholder="A brief description of the school's mission and values."
                  rows="6"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none resize-none"
                />
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-300 my-6 sm:my-8"></div>

          {/* Add School Gallery Section */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Add School Gallery</h2>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 sm:p-8 md:p-12 text-center hover:border-[#1E3A8A] transition-colors cursor-pointer">
              <div className="flex flex-col items-center">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-gray-400 mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="text-sm sm:text-base text-gray-600 px-2">
                  Upload school photos and drop them here, or click to browse
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-300 my-6 sm:my-8"></div>

          {/* Add School Management Team Section */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Add School Management Team</h2>
            
            {/* Team Members List */}
            <div className="space-y-3 sm:space-y-4 mb-4">
              {teamMembers.map((member) => (
                <div key={member.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-3 sm:p-4 border border-gray-200 rounded-lg">
                  {/* Profile Picture and Name Container */}
                  <div className="flex items-center gap-3 sm:gap-4 flex-1 w-full sm:w-auto min-w-0">
                    {/* Profile Picture */}
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    {/* Name */}
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm sm:text-base text-gray-900 truncate">{member.name}</p>
                    </div>
                  </div>
                  
                  {/* Role Input and Delete Button Container */}
                  <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto sm:flex-1">
                    {/* Role Input */}
                    <input
                      type="text"
                      placeholder="Role / Designation"
                      value={member.role}
                      onChange={(e) => handleTeamMemberRoleChange(member.id, e.target.value)}
                      className="flex-1 sm:flex-1 px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none"
                    />
                    
                    {/* Delete Button */}
                    <button
                      type="button"
                      onClick={() => handleRemoveTeamMember(member.id)}
                      className="text-red-500 hover:text-red-700 p-2 flex-shrink-0"
                      aria-label="Remove team member"
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Add Team Member Button */}
            <button
              type="button"
              onClick={handleAddTeamMember}
              className="flex items-center gap-2 text-[#1E3A8A] font-medium hover:opacity-80 transition-opacity text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>Add Team Member</span>
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 pt-6 sm:pt-8">
            <button
              type="button"
              className="w-full sm:w-auto px-6 py-2.5 sm:py-3 text-sm sm:text-base text-gray-700 font-medium hover:opacity-80 transition-opacity rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-[#1E3A8A] text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              Submit Registration Request
            </button>
          </div>
        </form>
      </div>
    </section>

    {/* Success Modal */}
    {showSuccessModal && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 sm:p-6">
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
          {/* Close button (optional) */}
          <button
            onClick={handleCloseModal}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-600"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Success Icon */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          {/* Success Message */}
          <div className="text-center mb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Your request has been<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>submitted successfully!
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-2">
              Once approved by the client, your<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>account credentials will be provided<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>by the administrator.
            </p>
          </div>

          {/* OK Button */}
          <div className="flex justify-center mt-6 sm:mt-8">
            <button
              onClick={handleCloseModal}
              className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-[#1E3A8A] text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    )}
    </>
  )
}

