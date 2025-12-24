import Image from 'next/image'
import Link from 'next/link'

export default function PrivacyPolicyContent() {
  const sections = [
    {
      number: 1,
      title: 'Introduction',
      content: 'This Privacy Policy describes how Scova collects, uses, and protects the personal information of our users. We are committed to maintaining the highest standards of privacy protection and transparency in all our operations.'
    },
    {
      number: 2,
      title: 'Information We Collect',
      content: (
        <div className="space-y-3">
          <div>
            <strong>Personal Data:</strong> We collect email addresses and payment information for subscription services. This information is necessary to provide you with access to premium features and maintain your account.
          </div>
          <div>
            <strong>Review Data:</strong> When you submit reviews, we collect the content of your review along with your rating. However, we do not store personal identifiers that could link reviews back to individual users, ensuring anonymity.
          </div>
          <div>
            <strong>Usage Information:</strong> We may collect information about how you use our website, including pages visited, time spent, and interaction patterns.
          </div>
        </div>
      )
    },
    {
      number: 3,
      title: 'How We Use Your Information',
      content: (
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>To provide you with subscription access and accurate billing.</li>
          <li>To send you updates, newsletters, or push notifications (if you have opted in).</li>
          <li>To improve our services and user experience.</li>
          <li>To respond to your customer support inquiries.</li>
          <li>To ensure the security and integrity of our site platform.</li>
        </ul>
      )
    },
    {
      number: 4,
      title: 'Data Security & Storage',
      content: 'All data is stored securely within the EU, complying with GDPR regulations. We use industry-standard security measures, including encryption, secure servers, and regular security audits to protect your information.'
    },
    {
      number: 5,
      title: 'Cookies & Tracking',
      content: 'We use essential cookies for analytics to improve our services and user experience. You can manage your cookie preferences through your browser settings. Disabling cookies may affect some website functionality.'
    },
    {
      number: 6,
      title: 'Your Rights (GDPR)',
      content: (
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>Right to Access:</strong> You can request a copy of your personal data.</li>
          <li><strong>Right to Rectification:</strong> You can request correction of inaccurate data.</li>
          <li><strong>Right to Erasure:</strong> You can request deletion of your personal data.</li>
          <li><strong>Right to Portability:</strong> You can request transfer of your data to another service.</li>
          <li><strong>Right to Object:</strong> You can object to our processing of your data.</li>
        </ul>
      )
    },
    {
      number: 7,
      title: 'Contact Information',
      content: (
        <div className="space-y-3">
          <p>
            For privacy concerns or to exercise your GDPR rights, please contact us at{' '}
            <a href="mailto:privacy@scuna.com" className="text-blue-600 hover:underline">
              privacy@scuna.com
            </a>
            . We will respond to all requests within 30 days.
          </p>
          <p className="text-sm text-gray-500">
            Last Updated: January 2023
          </p>
        </div>
      )
    }
  ]

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content Sections */}
        <div 
          className="space-y-8 mb-12 border rounded-xl p-8"
          style={{ 
            borderColor: '#F3F4F6',
            boxShadow: '0px 1px 2px 0px #0000000D'
          }}
        >
          {sections.map((section, index) => (
            <div 
              key={index} 
              className={`flex gap-6 ${index > 0 ? 'pt-8' : ''}`}
              style={index > 0 ? { borderTop: '1px solid #E5E7EB' } : {}}
            >
              {/* Number Icon */}
              <div className="flex-shrink-0">
                <div 
                  className="w-[28px] h-[28px] rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#DBEAFE' }}
                >
                  <span 
                    style={{ 
                      color: '#1E3A8A', 
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 700,
                      fontSize: '13px'
                    }}
                  >
                    {section.number}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h2 
                  className="mb-4"
                  style={{ 
                    color: '#111827', 
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                    fontSize: '22px'
                  }}
                >
                  {section.title}
                </h2>
                <div 
                  className="leading-relaxed"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '14px',
                    color: '#374151'
                  }}
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

