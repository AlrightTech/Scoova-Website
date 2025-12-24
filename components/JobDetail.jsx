'use client'

import { useState } from 'react'
import Image from 'next/image'
import JobDetailHero from './JobDetailHero'
import ApplicationFormModal from './ApplicationFormModal'

export default function JobDetail({ jobId }) {
  const [showApplicationModal, setShowApplicationModal] = useState(false)
  // In a real app, this would fetch data based on jobId
  const job = {
    id: jobId || 1,
    title: 'English Language Teacher – Secondary Level',
    employmentType: 'Full-time',
    schoolName: 'Northwood International School',
    location: 'London, UK',
    aboutRole: "We are seeking a passionate and dedicated English Language Teacher to join our dynamic secondary school faculty. The ideal candidate will be responsible for developing students' literacy skills, fostering a love for literature, and preparing them for advanced studies. You will create engaging lesson plans, assess student progress, and collaborate with a team of committed educators to provide a supportive and challenging learning environment.",
    responsibilities: [
      'Design and implement engaging lesson plans that align with the curriculum.',
      'Foster a positive and inclusive classroom environment that encourages student participation.',
      'Assess and monitor student progress, providing regular feedback to students and parents.',
      'Utilize a variety of teaching methods and technologies to cater to different learning styles.',
      'Collaborate with colleagues on curriculum development and school-wide initiatives.',
      'Participate in extracurricular activities and school events.'
    ],
    requirements: [
      "Bachelor's degree in English, Education, or a related field (Master's preferred).",
      'Valid teaching certification for secondary education.',
      'Minimum of 2 years of teaching experience at the secondary level.',
      'Excellent communication, interpersonal, and classroom management skills.',
      'Proficiency in using educational technology and digital learning tools.'
    ],
    jobType: 'Full-time',
    experienceLevel: 'Mid-Senior',
    postedOn: 'Oct 27, 2025',
    applicationDeadline: 'July 15, 2026',
    salary: 'Competitive, based on experience',
    startDate: 'August 1, 2028'
  }

  return (
    <>
      {/* Hero Section */}
      <JobDetailHero job={job} />

      {/* Job Details Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* About the Role */}
        <div 
          className="bg-white rounded-xl p-6 md:p-8 mb-6 border"
          style={{
            borderColor: '#EAEBEF',
            boxShadow: '0px 1px 2px 0px #0000000D'
          }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">About the Role</h3>
          <p className="text-gray-700 leading-relaxed">
            {job.aboutRole}
          </p>
        </div>

        {/* Responsibilities */}
        <div 
          className="bg-white rounded-lg p-6 md:p-8 mb-6 border"
          style={{
            borderColor: '#EAEBEF',
            boxShadow: '0px 1px 2px 0px #0000000D'
          }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">Responsibilities</h3>
          <ul className="space-y-3">
            {job.responsibilities.map((responsibility, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-[#1E3A8A] mt-1.5">•</span>
                <span className="text-gray-700">{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Requirements */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Requirements</h3>
          <ul className="space-y-3">
            {job.requirements.map((requirement, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-[#1E3A8A] mt-1.5">•</span>
                <span className="text-gray-700">{requirement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Job Summary and Details */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">Job Summary</h3>
            <button className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
              Follow
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="text-gray-600 text-sm mb-1">Job Type</p>
              <p className="text-gray-900 font-semibold">{job.jobType}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm mb-1">Experience Level</p>
              <p className="text-gray-900 font-semibold">{job.experienceLevel}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm mb-1">Posted On</p>
              <p className="text-gray-900 font-semibold">{job.postedOn}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm mb-1">Application Deadline</p>
              <p className="text-gray-900 font-semibold">{job.applicationDeadline}</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 space-y-4">
            <div>
              <p className="text-gray-600 text-sm mb-1">Salary / Benefits</p>
              <p className="text-gray-900 font-semibold">{job.salary}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm mb-1">Start Date</p>
              <p className="text-gray-900 font-semibold">{job.startDate}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm mb-1">Application Deadline</p>
              <p className="text-gray-900 font-semibold">{job.applicationDeadline}</p>
            </div>
          </div>
        </div>

          {/* Apply Button */}
          <div className="flex justify-end">
            <button 
              onClick={() => setShowApplicationModal(true)}
              className="px-8 py-3 bg-[#1E3A8A] text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              Apply for this Position
            </button>
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {showApplicationModal && (
        <ApplicationFormModal
          jobTitle={job.title}
          onClose={() => setShowApplicationModal(false)}
        />
      )}
    </>
  )
}

