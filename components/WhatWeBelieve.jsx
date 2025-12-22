import Image from 'next/image'

export default function WhatWeBelieve() {
  const values = [
    {
      icon: '/images/discover-icon.svg',
      title: 'Transparency',
      description: 'Helping users make informed decisions through unbiased, verified educational insights.',
      bgColor: '#EFF6FF'
    },
    {
      icon: '/images/community-icon.svg',
      title: 'Community',
      description: 'Empowering educators, parents, and students to share their voice and experiences.',
      bgColor: '#FFF7ED'
    },
    {
      icon: '/images/growth-icon.svg',
      title: 'Growth',
      description: 'Helping individuals thrive through authentic feedback and data-driven insights.',
      bgColor: '#F0FDFA'
    },
    {
      icon: '/images/innovation-icon.svg',
      title: 'Innovation',
      description: 'Using technology to simplify educational discovery and decision-making processes.',
      bgColor: '#F5F3FF'
    }
  ]

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            What We Believe In
          </h2>
          <p 
            className="text-lg md:text-xl text-gray-600"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Our core values guide everything we do at Scoova.
          </p>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <div 
                className="w-16 h-16 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: value.bgColor }}
              >
                <Image
                  src={value.icon}
                  alt={value.title}
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <h3 
                className="text-xl font-bold mb-3 text-gray-900"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {value.title}
              </h3>
              <p 
                className="text-gray-600 leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

