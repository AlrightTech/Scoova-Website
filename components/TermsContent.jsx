import Image from 'next/image'
import Link from 'next/link'

export default function TermsContent() {
  const sections = [
    {
      number: 1,
      title: 'Introduction',
      content: 'These Terms and Conditions govern your use of the Scope website and services. By accessing or using our platform, you agree to be bound by these terms. Please read them carefully before using our services.'
    },
    {
      number: 2,
      title: 'User Responsibilities',
      content: (
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>You agree to provide accurate and truthful information when using our platform.</li>
          <li>You will not use our services for spam, harassment, or any illegal activities.</li>
          <li>You will respect the privacy and rights of other users.</li>
          <li>You will not submit content that infringes on copyrights or intellectual property rights.</li>
          <li>You will use the platform only for its intended educational and informational purposes.</li>
        </ul>
      )
    },
    {
      number: 3,
      title: 'Subscription & Payments',
      content: (
        <div className="space-y-3">
          <div>
            <strong>Subscription Terms:</strong> Premium plans follow a monthly or annual fee model for exclusive information access.
          </div>
          <div>
            <strong>Automatic Renewal:</strong> Subscriptions automatically renew unless canceled 24 hours before the cycle ends.
          </div>
          <div>
            <strong>Refund Policy:</strong> We offer a 30-day money-back guarantee for new users. No full refunds for cancellations or university leave.
          </div>
          <div>
            <strong>Price Changes:</strong> Scope reserves the right to modify subscription prices with 30 days' advance notice.
          </div>
        </div>
      )
    },
    {
      number: 4,
      title: 'Anonymous Reviews Policy',
      content: (
        <div className="space-y-3">
          <p>Our review system is designed to protect user privacy while upholding authenticity.</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Reviews are anonymous to protect reviewer privacy.</li>
            <li>Only verified users can submit reviews.</li>
            <li>Scope reserves the right to remove reviews that violate community guidelines.</li>
            <li>Reviews must be based on genuine experiences.</li>
            <li>False or malicious reviews will be removed and may result in account suspension.</li>
          </ul>
        </div>
      )
    },
    {
      number: 5,
      title: 'School Claims & Verification',
      content: (
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Schools must provide institutional verification to claim their profiles.</li>
          <li>Each school must designate a primary contact person.</li>
          <li>Schools are responsible for maintaining accurate information on their profiles.</li>
          <li>Schools must respond to user inquiries professionally and promptly.</li>
          <li>Schools may not manipulate reviews or engage in fraudulent activity.</li>
        </ul>
      )
    },
    {
      number: 6,
      title: 'Limitation of Liability',
      content: (
        <div className="space-y-3">
          <p>Scope provides information and services to help users make informed decisions. However:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>We do not guarantee the accuracy of all user-generated content.</li>
            <li>Scope is not responsible for decisions made based on information from our platform.</li>
            <li>Users should conduct their own research before making important decisions.</li>
            <li>Our liability is limited to the amount paid for subscription services.</li>
          </ul>
        </div>
      )
    },
    {
      number: 7,
      title: 'Changes to Terms',
      content: 'Scope reserves the right to modify these terms at any time. Users will be notified of significant changes via email or website notice. Continued use of our services after changes are posted implies acceptance of the new terms.'
    },
    {
      number: 8,
      title: 'Contact Information',
      content: (
        <div className="space-y-3">
          <p>
            For legal inquiries or questions about these terms, please contact us at{' '}
            <a href="mailto:legal@scope.com" className="text-blue-600 hover:underline">
              legal@scope.com
            </a>
            . We are committed to providing prompt and transparent responses.
          </p>
          <p className="text-sm text-gray-500">
            Last Updated: January 1st, 2024
          </p>
        </div>
      )
    }
  ]

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content Sections */}
        <div className="space-y-8 mb-12">
          {sections.map((section, index) => (
            <div key={index} className="flex gap-6">
              {/* Number Icon */}
              <div className="flex-shrink-0">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#EFF6FF' }}
                >
                  <span 
                    className="text-xl font-bold"
                    style={{ color: '#1E3A8A', fontFamily: 'Poppins, sans-serif' }}
                  >
                    {section.number}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h2 
                  className="text-2xl md:text-3xl font-bold mb-4 text-gray-900"
                  style={{ color: '#1E3A8A', fontFamily: 'Poppins, sans-serif' }}
                >
                  {section.number}. {section.title}
                </h2>
                <div 
                  className="text-gray-700 leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {section.content}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h3 
            className="text-2xl md:text-3xl font-bold mb-4 text-gray-900"
            style={{ color: '#1E3A8A', fontFamily: 'Poppins, sans-serif' }}
          >
            Have questions about our policies?
          </h3>
          <p 
            className="text-gray-600 mb-6"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Reach out to our support team for clarification or assistance.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#1E3A8A', fontFamily: 'Inter, sans-serif' }}
          >
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  )
}

