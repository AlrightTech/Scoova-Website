'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function JobOpportunitySideBySide() {
  const jobs = [
    {
      id: 1,
      schoolName: 'Northwood Academy',
      location: 'London, UK',
      jobTitle: 'Math Teacher - Secondary Level',
      employmentType: 'Full-time',
      typeColor: 'bg-blue-100 text-blue-800',
      postedDate: 'Posted 2 days ago',
      description: 'Seeking an enthusiastic and qualified Math Teacher to inspire secondary level students and foster a love for',
      logo: null
    },
    {
      id: 2,
      schoolName: 'Greenfield Int\'l',
      location: 'New York, USA',
      jobTitle: 'IT Systems Administrator',
      employmentType: 'Contract',
      typeColor: 'bg-green-100 text-green-800',
      postedDate: 'Posted 5 days ago',
      description: 'Responsible for maintaining and optimizing our school\'s IT infrastructure, ensuring a secure and efficient network',
      logo: null
    },
    {
      id: 3,
      schoolName: 'Lakeside Preparatory',
      location: 'Tokyo, Japan',
      jobTitle: 'Librarian & Media Specialist',
      employmentType: 'Part-time',
      typeColor: 'bg-yellow-100 text-yellow-800',
      postedDate: 'Posted 1 week ago',
      description: 'We are looking for a creative Librarian to manage our library resources and promote literacy across all year',
      logo: null
    },
    {
      id: 4,
      schoolName: 'Greenfield Int\'l',
      location: 'New York, USA',
      jobTitle: 'IT Systems Administrator',
      employmentType: 'Contract',
      typeColor: 'bg-green-100 text-green-800',
      postedDate: 'Posted 5 days ago',
      description: 'Responsible for maintaining and optimizing our school\'s IT infrastructure, ensuring a secure and efficient network',
      logo: null
    },
    {
      id: 5,
      schoolName: 'Greenfield Int\'l',
      location: 'New York, USA',
      jobTitle: 'IT Systems Administrator',
      employmentType: 'Contract',
      typeColor: 'bg-green-100 text-green-800',
      postedDate: 'Posted 5 days ago',
      description: 'Responsible for maintaining and optimizing our school\'s IT infrastructure, ensuring a secure and efficient network',
      logo: null
    },
    {
      id: 6,
      schoolName: 'Greenfield Int\'l',
      location: 'New York, USA',
      jobTitle: 'IT Systems Administrator',
      employmentType: 'Contract',
      typeColor: 'bg-green-100 text-green-800',
      postedDate: 'Posted 5 days ago',
      description: 'Responsible for maintaining and optimizing our school\'s IT infrastructure, ensuring a secure and efficient network',
      logo: null
    },
    {
      id: 7,
      schoolName: 'Greenfield Int\'l',
      location: 'New York, USA',
      jobTitle: 'IT Systems Administrator',
      employmentType: 'Contract',
      typeColor: 'bg-green-100 text-green-800',
      postedDate: 'Posted 5 days ago',
      description: 'Responsible for maintaining and optimizing our school\'s IT infrastructure, ensuring a secure and efficient network',
      logo: null
    },
    {
      id: 8,
      schoolName: 'Greenfield Int\'l',
      location: 'New York, USA',
      jobTitle: 'IT Systems Administrator',
      employmentType: 'Contract',
      typeColor: 'bg-green-100 text-green-800',
      postedDate: 'Posted 5 days ago',
      description: 'Responsible for maintaining and optimizing our school\'s IT infrastructure, ensuring a secure and efficient network',
      logo: null
    }
  ]

  return (
    <section 
      className="py-12 md:py-16 relative"
      style={{
        background: 'radial-gradient(63% 100% at 50% 0%, #D4E7F6 0%, #F1F7FC 82.44%, #F6F7F9 100%)',
        boxShadow: '0px 0px 0px 6px #FFFFFF'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Jobs Badge */}
          <div className="flex justify-center items-center mb-6 gap-0">
            {/* Left Side Horizontal Lines */}
            <div className="flex flex-col gap-[5px]">
              <div 
                className="h-[1px] w-16"
                style={{
                  background: 'linear-gradient(264.02deg, rgba(255, 255, 255, 0) 4.74%, #FFFFFF 98%)'
                }}
              ></div>
              <div 
                className="h-[1px] w-16"
                style={{
                  background: 'linear-gradient(264.02deg, rgba(255, 255, 255, 0) 4.74%, #FFFFFF 98%)'
                }}
              ></div>
            </div>

            {/* Jobs Badge */}
            <div className="inline-flex items-center gap-2 relative rounded-full p-[5px] border border-white" style={{ borderRadius: '100px' }}>
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2">
                <Image
                  src="/images/job-flag.svg"
                  alt="Jobs"
                  width={11}
                  height={11}
                  className="flex-shrink-0"
                />
                <span className="font-medium text-sm text-[#1A1A1A] font-['Inter',sans-serif]">
                  Jobs
                </span>
              </div>
            </div>

            {/* Right Side Horizontal Lines */}
            <div className="flex flex-col gap-[5px]">
              <div 
                className="h-[1px] w-16"
                style={{
                  background: 'linear-gradient(264.02deg, rgba(255, 255, 255, 0) 4.74%, #FFFFFF 98%)'
                }}
              ></div>
              <div 
                className="h-[1px] w-16"
                style={{
                  background: 'linear-gradient(264.02deg, rgba(255, 255, 255, 0) 4.74%, #FFFFFF 98%)'
                }}
              ></div>
            </div>
          </div>
          
          <h2 className="font-bold mb-2 text-[#1A1A1A] text-[32px] font-['Poppins',sans-serif]">
            Job Opportunity side by side
          </h2>
        </div>

        {/* Job Cards Grid - 2 cards left, gap 8, 2 cards right */}
        <div className="flex flex-col gap-6">
          {Array.from({ length: Math.ceil(jobs.length / 4) }).map((_, rowIndex) => {
            const startIndex = rowIndex * 4
            const rowJobs = jobs.slice(startIndex, startIndex + 4)
            const leftJobs = rowJobs.slice(0, 2)
            const rightJobs = rowJobs.slice(2, 4)
            
            return (
              <div key={rowIndex} className="flex gap-8 flex-wrap justify-center">
                {/* Left Group - 2 Cards */}
                <div className="flex gap-4 flex-1 min-w-0">
                  {leftJobs.map((job) => (
                    <div
                      key={job.id}
                      className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex-1 min-w-0"
                    >
                      {/* Top Section - Logo and Posted Date */}
                      <div className="flex items-start justify-between mb-3">
                        {/* School Logo Placeholder */}
                        <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
                          {job.logo ? (
                            <Image
                              src={job.logo}
                              alt={job.schoolName}
                              width={32}
                              height={32}
                              className="object-contain"
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-300 rounded"></div>
                          )}
                        </div>
                        {/* Posted Date */}
                        <p className="text-gray-400 text-[10px]">{job.postedDate}</p>
                      </div>

                      {/* School Name & Location */}
                      <div className="mb-2">
                        <h3 className="text-sm font-bold text-gray-800 mb-0.5">{job.schoolName}</h3>
                        <p className="text-gray-500 text-xs">{job.location}</p>
                      </div>

                      {/* Job Title */}
                      <h4 className="text-base font-bold text-gray-800 mb-2">
                        {job.jobTitle}
                      </h4>

                      {/* Employment Type Tag */}
                      <div className="mb-3">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${job.typeColor}`}>
                          {job.employmentType}
                        </span>
                      </div>

                      {/* Job Description */}
                      <p className="text-gray-600 text-xs mb-4 leading-relaxed">
                        {job.description}
                      </p>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <Link 
                          href={`/job/${job.id}`}
                          className="flex-1 px-3 py-1.5 rounded-lg border border-[#1E3A8A] bg-white text-[#1E3A8A] font-medium text-xs hover:opacity-90 transition-opacity text-center"
                        >
                          View Detail
                        </Link>
                        <button className="flex-1 px-3 py-1.5 rounded-lg bg-[#1E3A8A] text-white font-medium text-xs hover:opacity-90 transition-opacity">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right Group - 2 Cards */}
                {rightJobs.length > 0 && (
                  <div className="flex gap-4 flex-1 min-w-0">
                    {rightJobs.map((job) => (
                      <div
                        key={job.id}
                        className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex-1 min-w-0"
                      >
                        {/* Top Section - Logo and Posted Date */}
                        <div className="flex items-start justify-between mb-3">
                          {/* School Logo Placeholder */}
                          <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
                            {job.logo ? (
                              <Image
                                src={job.logo}
                                alt={job.schoolName}
                                width={32}
                                height={32}
                                className="object-contain"
                              />
                            ) : (
                              <div className="w-full h-full bg-gray-300 rounded"></div>
                            )}
                          </div>
                          {/* Posted Date */}
                          <p className="text-gray-400 text-[10px]">{job.postedDate}</p>
                        </div>

                        {/* School Name & Location */}
                        <div className="mb-2">
                          <h3 className="text-sm font-bold text-gray-800 mb-0.5">{job.schoolName}</h3>
                          <p className="text-gray-500 text-xs">{job.location}</p>
                        </div>

                        {/* Job Title */}
                        <h4 className="text-base font-bold text-gray-800 mb-2">
                          {job.jobTitle}
                        </h4>

                        {/* Employment Type Tag */}
                        <div className="mb-3">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${job.typeColor}`}>
                            {job.employmentType}
                          </span>
                        </div>

                        {/* Job Description */}
                        <p className="text-gray-600 text-xs mb-4 leading-relaxed">
                          {job.description}
                        </p>

                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          <Link 
                            href={`/job/${job.id}`}
                            className="flex-1 px-3 py-1.5 rounded-lg border border-[#1E3A8A] bg-white text-[#1E3A8A] font-medium text-xs hover:opacity-90 transition-opacity text-center"
                          >
                            View Detail
                          </Link>
                          <button className="flex-1 px-3 py-1.5 rounded-lg bg-[#1E3A8A] text-white font-medium text-xs hover:opacity-90 transition-opacity">
                            Apply Now
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

