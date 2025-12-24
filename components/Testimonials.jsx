'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 0,
      rating: 5,
      quote:
        '"This platform helped us find the perfect school for our daughter. The reviews were honest and detailed, giving us real insights into the school culture."',
      name: 'Sarah Johnson',
      role: 'Parent',
      location: 'New York, USA',
      image: '/images/say1.png',
    },
    {
      id: 1,
      rating: 5,
      quote:
        'As an educator, I value how transparent and thorough the reviews are. It helps schools improve and parents choose with confidence.',
      name: 'Michael Lee',
      role: 'Educator',
      location: 'Austin, USA',
      image: '/images/Singapore International School.png',
    },
    {
      id: 2,
      rating: 5,
      quote:
        'Finding a school abroad felt overwhelming, but the verified reviews here made the decision straightforward and reassuring.',
      name: 'Aisha Khan',
      role: 'Parent',
      location: 'Dubai, UAE',
      image: '/images/Oxford University.png',
    },
    {
      id: 3,
      rating: 5,
      quote:
        "The platform's clarity and verified feedback saved me so much time while shortlisting universities.",
      name: 'Daniel Carter',
      role: 'Student',
      location: 'Toronto, Canada',
      image: '/images/Harvard University.png',
    },
  ]

  const renderStars = (rating) => (
    <div className="flex items-center justify-center gap-1 mb-6">
      {[...Array(rating)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-[#FBBF24] fill-current" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  )

  const handlePrev = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const active = testimonials[currentTestimonial]

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 bg-[linear-gradient(135deg,_#FEFCE8_0%,_#FFF7ED_100%)]">
      {/* Decorative Background Icons */}
      <div className="absolute top-10 left-10 opacity-10">
        <Image
          src="/images/story.svg"
          alt=""
          width={40}
          height={40}
          className="object-contain"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-[Poppins] text-[#111827] text-[30px] sm:text-[32px] leading-[44px] font-bold">
            What Our Users Say
          </h2>
          <p className="font-[Inter] mt-3 text-[#4B5563] text-[16px] sm:text-[18px] leading-[28px] font-normal text-center">
            Hear from parents, educators, and students who trust our platform for educational insights.
          </p>
        </div>

        <div className="relative flex items-center justify-center">
          {/* Testimonial Card */}
          <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-lg px-8 sm:px-12 py-10">
            {/* Left Arrow Button - Overlapping card edge */}
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-20 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow border border-[#E5E7EB]"
            >
              <Image
                src="/images/left-icon (2).png"
                alt="Previous"
                width={11}
                height={9}
                className="object-contain"
              />
            </button>
            {/* Quote Icon */}
            <div className="flex justify-center mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#BFDBFE]">
                <Image
                  src="/images/story-sec.png"
                  alt="Quote"
                  width={15}
                  height={15}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Stars */}
            {renderStars(active.rating)}

            {/* Testimonial Text */}
            <blockquote className="font-[Inter] mb-8 text-center text-[22px] leading-[28px] italic font-normal text-[#374151]">
              {active.quote}
            </blockquote>

            {/* User Info - Centered */}
            <div className="flex items-center justify-center gap-4">
              <Image
                src={active.image}
                alt={active.name}
                width={50}
                height={50}
                className="w-[50px] h-[50px] rounded-full object-cover flex-shrink-0"
              />
              <div className="text-left">
                <div className="font-[Poppins] mb-1 text-[16px] sm:text-[18px] font-semibold leading-6 text-[#111827]">
                  {active.name}
                </div>
                <div className="font-[Inter] mb-1 text-[14px] leading-5 text-[#3B82F6]">
                  {active.role}
                </div>
                <div className="font-[Inter] text-[14px] leading-5 text-[#6B7280]">
                  {active.location}
                </div>
              </div>
              
            </div>

            {/* Right Arrow Button - Overlapping card edge */}
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-20 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow border border-[#E5E7EB]"
            >
              <Image
                src="/images/right-icon (1).png"
                alt="Next"
                width={11}
                height={9}
                className="object-contain"
              />
            </button>
          </div>
        </div>

        {/* Pagination Dots - Same as TopSchools */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setCurrentTestimonial(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentTestimonial === index ? '' : 'bg-gray-300'
              }`}
              style={currentTestimonial === index ? { backgroundColor: '#1E3A8A' } : {}}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

