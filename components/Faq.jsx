'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Faq({ showQuestions = true, showHeader = true }) {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'How do I post a school review?',
      answer:
        'Simply create an account, search for your school, and click "Write a Review." You can share your experience about academics, facilities, teachers, and overall school culture. All reviews go through our verification process to ensure authenticity.',
    },
    {
      question: 'Are all reviews verified?',
      answer:
        'Yes. Each submission is reviewed by our team and passes through verification checks before it is published.',
    },
    {
      question: 'What does the subscription include?',
      answer:
        'Subscribers unlock advanced search, saved school lists, notification preferences, and direct support.',
    },
    {
      question: 'Can schools respond to reviews?',
      answer:
        'Schools can publicly respond to reviews to clarify information and engage with their community.',
    },
    {
      question: 'How do you ensure review authenticity?',
      answer:
        'We combine account verification, moderation, and automated fraud detection to keep reviews trustworthy.',
    },
  ]

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-white relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {showHeader && (
          <div className="text-center mb-12">
            <h2 className="text-[#111827] font-bold text-[32px] leading-[40px] tracking-normal text-center align-middle mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-[#4B5563] font-normal text-[18px] leading-7 tracking-normal text-center align-middle" style={{ fontFamily: 'Inter, sans-serif' }}>
              Find answers to common questions about our platform and services.
            </p>
          </div>
        )}

        {/* FAQ Accordion */}
        {showQuestions && (
          <div className="space-y-4 mb-12">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden border border-[#E5E7EB] bg-[#F9FAFB]"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left transition-colors"
                >
                  <span
                    className="text-[#111827] text-[16px] leading-[28px] font-semibold align-middle"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-[#4B5563] transition-transform ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <p
                      className="text-[#4B5563] text-[14px] leading-[26px] font-normal align-middle"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Contact Support Box */}
        <div className="pt-4 px-8 pb-8 rounded-2xl text-center" style={{ background: 'linear-gradient(90deg, #EFF6FF 0%, #F0FDFA 100%)' }}>
          <h3 className="text-[#111827] font-bold text-xl leading-7 tracking-normal text-center align-middle mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Still have questions?
          </h3>
          <p className="text-[#4B5563] font-normal text-base leading-6 tracking-normal text-center align-middle mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
            Our support team is here to help you get the most out of our platform.
          </p>
          <Link 
            href="/contact"
            className="inline-block text-white px-6 py-3 font-sans font-normal text-sm sm:text-base hover:opacity-90 transition-opacity rounded-[12px] w-full sm:w-auto bg-[#1E3A8A] text-center"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  )
}

