'use client'

import { useState, useRef } from 'react'

export default function RegisterSchoolForm() {
  const [formData, setFormData] = useState({
    schoolName: '',
    location: '',
    principalName: '',
    totalStudents: '',
    schoolWebsiteUrl: '',
    schoolType: 'Private',
    foundedYear: '',
    schoolBio: ''
  })

  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: '', role: '', image: null }
  ])

  const [galleryImages, setGalleryImages] = useState([])
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef(null)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleTeamMemberChange = (id, field, value) => {
    setTeamMembers(prev => 
      prev.map(member => 
        member.id === id ? { ...member, [field]: value } : member
      )
    )
  }

  const handleTeamMemberImageChange = (id, file) => {
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setTeamMembers(prev => 
          prev.map(member => 
            member.id === id ? { ...member, image: reader.result } : member
          )
        )
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemoveTeamMember = (id) => {
    setTeamMembers(prev => prev.filter(member => member.id !== id))
  }

  const handleAddTeamMember = () => {
    const newId = Math.max(...teamMembers.map(m => m.id), 0) + 1
    setTeamMembers(prev => [
      ...prev,
      { id: newId, name: '', role: '', image: null }
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

  const handleGalleryFileSelect = (files) => {
    const validFiles = Array.from(files).filter(file => {
      const isValidType = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'].includes(file.type)
      const isValidSize = file.size <= 10 * 1024 * 1024 // 10MB
      return isValidType && isValidSize
    })

    const newImages = validFiles.map(file => ({
      id: Date.now() + Math.random(),
      file,
      preview: URL.createObjectURL(file)
    }))

    setGalleryImages(prev => [...prev, ...newImages])
  }

  const handleGalleryClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileInputChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleGalleryFileSelect(e.target.files)
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleGalleryFileSelect(e.dataTransfer.files)
    }
  }

  const handleRemoveGalleryImage = (id) => {
    setGalleryImages(prev => {
      const imageToRemove = prev.find(img => img.id === id)
      if (imageToRemove) {
        URL.revokeObjectURL(imageToRemove.preview)
      }
      return prev.filter(img => img.id !== id)
    })
  }

  return (
    <>
      <section className="py-6 sm:py-8 md:py-10 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 md:px-6">
          <form className="space-y-6 sm:space-y-8" onSubmit={handleSubmit}>
          {/* School Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {/* Left Column */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {/* School Name */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                  School Name
                </label>
                <input
                  type="text"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={handleInputChange}
                  placeholder="e.g. Northwood High School"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none"
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                  Location
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="e.g. Springfield, IL"
                    className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {/* Principal Name */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                  Principal Name
                </label>
                <input
                  type="text"
                  name="principalName"
                  value={formData.principalName}
                  onChange={handleInputChange}
                  placeholder="e.g. Dr. Jane Doe"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none"
                />
              </div>

              {/* Total Students */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                  Total Students
                </label>
                <input
                  type="text"
                  name="totalStudents"
                  value={formData.totalStudents}
                  onChange={handleInputChange}
                  placeholder="e.g. 1200"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none"
                />
              </div>

              {/* School Website URL */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                  School Website URL
                </label>
                <input
                  type="text"
                  name="schoolWebsiteUrl"
                  value={formData.schoolWebsiteUrl}
                  onChange={handleInputChange}
                  placeholder="e.g. www.greenschool.co.uk"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none"
                />
                <p className="text-red-500 text-xs mt-1">Gmail, Yahoo, Hotmail emails would not be accepted.</p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {/* School Type */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                  School Type
                </label>
                <div className="relative">
                  <select
                    name="schoolType"
                    value={formData.schoolType}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none bg-white appearance-none pr-8 sm:pr-10"
                  >
                    <option value="Private">Private</option>
                    <option value="Public">Public</option>
                    <option value="University">University</option>
                    <option value="High School">High School</option>
                    <option value="Elementary School">Elementary School</option>
                    <option value="Middle School">Middle School</option>
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
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                  Founded Year
                </label>
                <input
                  type="text"
                  name="foundedYear"
                  value={formData.foundedYear}
                  onChange={handleInputChange}
                  placeholder="e.g. 1985"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none"
                />
              </div>

              {/* School Bio */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
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
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileInputChange}
              accept="image/png,image/jpeg,image/jpg,image/gif"
              multiple
              className="hidden"
            />
            <div
              onClick={handleGalleryClick}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-lg p-6 sm:p-8 md:p-10 lg:p-12 text-center transition-colors cursor-pointer ${
                isDragging 
                  ? 'border-[#1E3A8A] bg-blue-50' 
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <div className="flex flex-col items-center">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-gray-400 mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="text-sm sm:text-base text-gray-600 mb-1">
                  Upload a file or drag and drop
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
            
            {/* Display uploaded images */}
            {galleryImages.length > 0 && (
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {galleryImages.map((image) => (
                  <div key={image.id} className="relative group">
                    <img
                      src={image.preview}
                      alt="Gallery preview"
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleRemoveGalleryImage(image.id)
                      }}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-300 my-6 sm:my-8"></div>

          {/* Add School Management Team Section */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Add School Management Team</h2>
            
            {/* Team Members List */}
            <div className="space-y-3 sm:space-y-4 mb-4">
              {teamMembers.map((member) => (
                <div key={member.id} className="flex items-center gap-3 sm:gap-4">
                  {/* Profile Picture */}
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt="Team member"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-200">
                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleTeamMemberImageChange(member.id, e.target.files[0])}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </div>
                  
                  {/* Full Name Input */}
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={member.name}
                    onChange={(e) => handleTeamMemberChange(member.id, 'name', e.target.value)}
                    className="flex-1 px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none"
                  />
                  
                  {/* Role Input */}
                  <input
                    type="text"
                    placeholder="Role / Designation"
                    value={member.role}
                    onChange={(e) => handleTeamMemberChange(member.id, 'role', e.target.value)}
                    className="flex-1 px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none"
                  />
                  
                  {/* Delete Button */}
                  <button
                    type="button"
                    onClick={() => handleRemoveTeamMember(member.id)}
                    className="text-gray-400 hover:text-red-500 p-2 flex-shrink-0 transition-colors"
                    aria-label="Remove team member"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
            
            {/* Add Team Member Button */}
            <button
              type="button"
              onClick={handleAddTeamMember}
              className="flex items-center gap-2 px-4 py-2.5 bg-[#E8F0FE] border border-gray-300 rounded-lg text-[#1E3A8A] font-bold hover:bg-[#D2E3FC] transition-colors text-sm sm:text-base"
            >
              <svg className="w-5 h-5 text-[#1E3A8A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              <span>Add Team Member</span>
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 pt-6 sm:pt-8">
            <button
              type="button"
              className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base text-gray-700 font-medium hover:opacity-80 transition-opacity rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-[#1E3A8A] text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
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

