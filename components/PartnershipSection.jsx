import Link from 'next/link'

export default function PartnershipSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24" style={{ backgroundColor: '#EFF6FF' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
            style={{ color: '#1E3A8A', fontFamily: 'Poppins, sans-serif' }}
          >
            Want to partner with Scova or list your school?
          </h2>
          <p 
            className="text-lg text-gray-600 mb-8"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Join our global network of trusted institutions today and help shape the future of education.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/claim-school"
              className="px-8 py-3 rounded-lg text-white font-medium hover:opacity-90 transition-opacity text-center"
              style={{ backgroundColor: '#1E3A8A', fontFamily: 'Inter, sans-serif' }}
            >
              Claim Your School Page
            </Link>
            <Link
              href="/learn-more"
              className="px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity text-center border-2"
              style={{ 
                borderColor: '#1E3A8A', 
                color: '#1E3A8A',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

