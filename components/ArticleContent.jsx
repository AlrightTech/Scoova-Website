import Image from 'next/image'

export default function ArticleContent() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Image */}
        <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden mb-8">
          <Image
            src="/images/Singapore International School.png"
            alt="School environment"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>

        {/* Introduction Paragraph */}
        <div className="mb-8">
          <p 
            className="text-[#374151] leading-relaxed"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              fontWeight: 400
            }}
          >
            Choosing a school for your child is one of the most significant decisions a parent can make. In a city as diverse and dynamic as San Francisco, the options can feel both abundant and overwhelming. This guide is designed to demystify the process, providing a clear roadmap for families navigating the educational landscape of the Bay Area.
          </p>
        </div>

        {/* Section Heading */}
        <h2 
          className="text-[#111827] font-bold mb-6"
          style={{ 
            fontFamily: 'Poppins, sans-serif',
            fontSize: '24px',
            fontWeight: 700
          }}
        >
          Understanding Your Options
        </h2>

        {/* Category Introduction */}
        <p 
          className="text-[#374151] leading-relaxed mb-6"
          style={{ 
            fontFamily: 'Inter, sans-serif',
            fontSize: '16px',
            fontWeight: 400
          }}
        >
          San Francisco offers a wide array of educational choices, each with its own philosophy, curriculum, and community. The main categories include:
        </p>

        {/* School Categories */}
        <div className="space-y-6 mb-8">
          {/* Public Schools */}
          <div>
            <p 
              className="text-[#374151] leading-relaxed"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                fontWeight: 400
              }}
            >
              <span className="font-bold text-[#111827]">Public Schools (SFUSD):</span> The San Francisco Unified School District operates a lottery-based enrollment system. Understanding deadlines and application requirements is crucial. Research individual schools' programs, test scores, and community reviews to make informed choices.
            </p>
          </div>

          {/* Charter Schools */}
          <div>
            <p 
              className="text-[#374151] leading-relaxed"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                fontWeight: 400
              }}
            >
              <span className="font-bold text-[#111827]">Charter Schools:</span> These publicly funded but independently operated schools often offer specialized programs. They may have different application processes and enrollment timelines, so early research is essential.
            </p>
          </div>

          {/* Private & Independent Schools */}
          <div>
            <p 
              className="text-[#374151] leading-relaxed"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                fontWeight: 400
              }}
            >
              <span className="font-bold text-[#111827]">Private & Independent Schools:</span> These institutions require tuition and have their own admissions processes, which typically include applications, interviews, and testing. Start the process early, as deadlines can be months in advance.
            </p>
          </div>
        </div>

        {/* Blockquote */}
        <div className="border-l-4 border-[#DBEAFE] pl-6 py-4 my-8">
          <blockquote 
            className="text-[#374151] italic leading-relaxed m-0"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              fontWeight: 400
            }}
          >
            "The best school is not necessarily the one with the highest test scores, but the one that is the best fit for your child's individual needs and your family's values."
          </blockquote>
        </div>

        {/* Bottom Image */}
        <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden mt-8">
          <Image
            src="/images/Oxford University.png"
            alt="Student"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>
      </div>
    </section>
  )
}

