'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function SchoolOpportunities() {
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
    }
  ]

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">
            School Job Opportunities
          </h2>
          <p className="text-gray-600 text-base">
            Discover open positions from verified schools worldwide.
          </p>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Top Section - Logo and Posted Date */}
              <div className="flex items-start justify-between mb-4">
                {/* School Logo Placeholder */}
                <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
                  {job.logo ? (
                    <Image
                      src={job.logo}
                      alt={job.schoolName}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-300 rounded"></div>
                  )}
                </div>
                {/* Posted Date */}
                <p className="text-gray-400 text-xs">{job.postedDate}</p>
              </div>

              {/* School Name & Location */}
              <div className="mb-3">
                <h3 className="text-lg font-bold text-gray-800 mb-1">{job.schoolName}</h3>
                <p className="text-gray-500 text-sm">{job.location}</p>
              </div>

              {/* Job Title */}
              <h4 className="text-xl font-bold text-gray-800 mb-3">
                {job.jobTitle}
              </h4>

              {/* Employment Type Tag */}
              <div className="mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${job.typeColor}`}>
                  {job.employmentType}
                </span>
              </div>

              {/* Job Description */}
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {job.description}
              </p>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Link 
                  href={`/job/${job.id}`}
                  className="flex-1 px-4 py-2 rounded-lg border border-blue-600 text-blue-600 font-medium text-sm hover:bg-blue-50 transition-colors text-center"
                >
                  View Detail
                </Link>
                <button className="flex-1 px-4 py-2 rounded-lg bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

