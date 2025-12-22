import Image from 'next/image'

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Review',
      description: 'Share your school experience.',
      iconColor: '#F79009',
      bgColor: '#FFFBEB',
      iconPath: '/images/review-icon.svg',
    },
    {
      number: 2,
      title: 'Discover',
      description: 'Find top-rated institutions.',
      iconColor: '#3B82F6',
      bgColor: '#EFF6FF',
      iconPath: '/images/discover-icon.svg',
    },
    {
      number: 3,
      title: 'Subscribe',
      description: 'Unlock trusted, verified insights.',
      iconColor: '#8B5CF6',
      bgColor: '#F5F3FF',
      iconPath: '/images/subscribe-icon.svg',
    },
    {
      number: 4,
      title: 'Connect',
      description: 'Engage with educators and parents worldwide.',
      iconColor: '#10B981',
      bgColor: '#ECFDF5',
      iconPath: '/images/connect-icon.svg',
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-[Poppins] text-[30px] font-bold leading-[40px] text-[#111827] sm:text-[32px]">
            How It Works
          </h2>
          <p className="font-[Inter] mt-3 text-[18px] leading-[28px] text-center font-normal text-[#4B5563]">
            Start exploring schools in just a few simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              {/* Icon tile */}
              <div 
                className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl shadow-[0_10px_25px_rgba(15,23,42,0.06)]"
                style={{ backgroundColor: step.bgColor }}
              >
                <Image
                  src={step.iconPath}
                  alt={step.title}
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>

              {/* Step label */}
              <p className="font-[Inter] text-[12.5px] font-normal leading-[20px] text-[#9CA3AF]">
                {`STEP ${step.number}`}
              </p>

              {/* Step title */}
              <h3 className="font-[Poppins] mt-2 text-[18px] font-bold leading-[28px] text-[#111827]">
                {step.title}
              </h3>

              {/* Step description */}
              <p className="font-[Inter] mt-2 text-[14px] leading-[24px] text-[#4B5563]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            className="font-[Inter] inline-flex items-center justify-center rounded-[12px] px-10 py-4 text-[15px] leading-[24px] font-normal text-white text-center shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)] transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(90deg, #2563EB 0%, #0D9488 100%)' }}
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  )
}

