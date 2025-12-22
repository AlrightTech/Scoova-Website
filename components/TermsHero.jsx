import Image from 'next/image'

export default function TermsHero() {
  return (
    <section 
      className="py-16 md:py-20 lg:py-24"
      style={{
        background: 'linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center bg-[#DBEAFE]"
            >
              <Image
                src="/images/terms-condition-icon.svg"
                alt="Terms"
                width={17}
                height={16}
                className="object-contain"
              />
            </div>
          </div>
          
          {/* Heading */}
          <h1 
            className="text-5xl font-bold mb-4 text-[#111827]"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Our Terms — Transparent & Fair
          </h1>
          
          {/* Subtitle */}
          <p 
            className="text-lg text-[#4B5563] font-normal max-w-3xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            We're committed to protecting your information and ensuring full transparency in how Scova operates.
          </p>
        </div>
      </div>
    </section>
  )
}

