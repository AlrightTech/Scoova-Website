"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [charCount, setCharCount] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (name === "message") {
      setCharCount(value.length);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Form */}
          <div>
            <h2
              className="text-3xl font-bold mb-8 text-black-900"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Send Us a Message
            </h2>

            <div
              className="bg-white rounded-[16px] p-6"
              style={{
                boxShadow:
                  "0px 4px 6px -4px #0000001A, 0px 10px 15px -3px #0000001A",
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name."
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address."
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <option value="">Select a subject.</option>
                    <option value="general">General Inquiry</option>
                    <option value="school">School Listing</option>
                    <option value="review">Review Related</option>
                    <option value="support">Support</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    rows={6}
                    maxLength={500}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  />
                  <div
                    className="text-sm text-gray-500 mt-1"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {charCount}/500 characters
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-8 py-3 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
                  style={{
                    backgroundColor: "#1E3A8A",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Right Column - Contact Details */}
          <div>
            <h2
              className="text-3xl font-bold mb-8 text-black-900"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Get in Touch
            </h2>

            {/* <div
              className="bg-white rounded-[16px] p-6"
              style={{
                boxShadow:
                  "0px 4px 6px -4px #0000001A, 0px 10px 15px -3px #0000001A",
              }}
            > */}
              <div className="space-y-6 mb-8">
                {/* Office Address */}
                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-[42px] h-[42px] rounded-[12px] bg-[#DBEAFE] flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3
                        className="font-bold text-gray-900 mb-1"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        Office Address
                      </h3>
                      <p
                        className="text-gray-600"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        London, United Kingdom
                        <br />
                        Global Education Hub
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-[42px] h-[42px] rounded-[12px] bg-[#FEF3C7] flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        style={{ color: '#D97706' }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3
                        className="font-bold text-gray-900 mb-1"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        Email
                      </h3>
                      <a
                        href="mailto:support@scova.com"
                        className="text-gray-600 hover:text-[#1E3A8A] transition-colors"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        support@scova.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-[42px] h-[42px] rounded-[12px] bg-[#DCFCE7] flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        style={{ color: '#16A34A' }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3
                        className="font-bold text-gray-900 mb-1"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        Phone
                      </h3>
                      <a
                        href="tel:+441234567890"
                        className="text-gray-600 hover:text-[#1E3A8A] transition-colors"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        +44 123 456 7890
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-[#EFF6FF] rounded-[16px] p-6">
                <h3
                  className="mb-2"
                  style={{ 
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 600,
                    fontSize: '16px',
                    color: '#1E3A8A'
                  }}
                >
                  Response Time
                </h3>
                <p
                  style={{ 
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: '14px',
                    color: '#1D4ED8'
                  }}
                >
                  We typically respond to all inquiries within 24 hours during
                  business days. For urgent matters, please call us directly.
                </p>
              </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
