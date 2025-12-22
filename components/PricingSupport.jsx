import Link from 'next/link'

export default function PricingSupport() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#EFF6FF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center">
          <h2 
            className="text-4xl font-bold mb-4 text-[#1E3A8A] font-['Poppins',sans-serif]"
          >
            Still have questions?
          </h2>
          <p 
            className="text-lg text-gray-600 mb-8 font-['Inter',sans-serif]"
          >
            Our support team is here to help you get the most out of our platform.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg text-white font-medium hover:opacity-90 transition-opacity bg-[#1E3A8A] font-['Inter',sans-serif]"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  )
}