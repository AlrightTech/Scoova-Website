import Image from 'next/image'

export default function SchoolComparisonTool() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Devices */}
          <div className="relative">
            {/* Laptop */}
            <div className="relative z-10">
              <div className="bg-gray-200 rounded-lg p-2 shadow-xl transform rotate-[-5deg]">
                <div className="bg-white rounded border-4 border-gray-800 p-2">
                  <div className="aspect-video bg-gray-100 rounded"></div>
                </div>
              </div>
            </div>
            {/* Tablet */}
            <div className="absolute top-20 right-0 z-20">
              <div className="bg-gray-200 rounded-lg p-2 shadow-xl transform rotate-[5deg]">
                <div className="bg-white rounded border-4 border-gray-800 p-2 w-64">
                  <div className="aspect-video bg-gray-100 rounded mb-2"></div>
                  <div className="bg-blue-600 text-white text-center py-2 rounded text-sm font-medium">
                    COMPARE SCHOOLS
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <span 
              className="inline-block px-3 py-1 rounded-lg text-xs font-medium mb-4"
              style={{ backgroundColor: '#F3F4F6', color: '#6B7280' }}
            >
              Our Goal/Plan
            </span>
            <h2 
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              School Comparison Tool
            </h2>
            <p 
              className="text-lg text-gray-600 leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Compare schools side by side based on reviews, ratings, and features to find the best fit for your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

