import Image from 'next/image'

export default function ArticleSteps() {
  const steps = [
    {
      title: 'Research and Discovery',
      description: 'Begin by exploring school websites, attending virtual or in-person open houses, and talking to other parents in your community.'
    },
    {
      title: 'Application Submission',
      description: 'Pay close attention to deadlines. Each school or system will have its own timeline and required documents.'
    },
    {
      title: 'School Visits and Interviews',
      description: 'Whenever possible, visit the schools you are most interested in. This gives you a feel for the campus culture and community that you can\'t get from a brochure.'
    },
    {
      title: 'Decision and Enrollment',
      description: 'Once you receive offers, carefully consider your options before making a final decision and completing the enrollment paperwork.'
    }
  ]

  return (
    <section className="py-8 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Image above steps */}
        <div className="relative w-full h-[320px] mb-8 overflow-hidden rounded-[12px] border border-[#E5E7EB]">
          <Image
            src="/images/Singapore International School.png"
            alt="Process illustration"
            fill
            className="object-cover rounded-[12px]"
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>

        {/* Main Heading */}
        <h2 
          className="text-base font-normal text-[#1E293B]"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Key Steps in the Process
        </h2>

        {/* Introductory Paragraph */}
        <p 
          className="text-base font-normal text-[#374151] leading-relaxed"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Regardless of the path you choose, the journey generally involves a few key stages. Start early, stay organized, and don't be afraid to ask questions.
        </p>

        {/* Key Stages */}
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={index}>
              <p 
                className="text-base font-normal text-[#374151] leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <span className="font-bold text-base text-[#1E293B]">{step.title}:</span> {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Concluding Paragraph */}
        <p 
          className="text-base font-normal text-[#374151] leading-relaxed"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Ultimately, finding the right school is about finding a community where your child will thrive academically, socially, and emotionally. With thoughtful research and planning, San Francisco families can confidently navigate the school choice process and find the perfect educational home for their children.
        </p>

        {/* Separator Line */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Share Section */}
        <div className="flex items-center justify-center gap-4">
          <span 
            className="text-[#6B7280] font-normal"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              fontWeight: 400
            }}
          >
            Share this article:
          </span>
          
          {/* Social Media Icons */}
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors">
              <span className="text-[#374151] font-bold text-sm">f</span>
            </button>
            
            {/* Generic Share */}
            <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors">
              <span className="text-[#374151] font-bold text-sm">?</span>
            </button>
            
            {/* LinkedIn */}
            <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors">
              <span className="text-[#374151] font-bold text-xs">in</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

