export default function ArticleContent() {
  return (
    <section className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction Paragraph */}
        <p className="font-sans font-normal text-base text-[#1E293B] leading-relaxed">
          Choosing a school for your child is one of the most significant decisions a parent can make. In a city as diverse and dynamic as San Francisco, the options can feel both abundant and overwhelming. This guide is designed to demystify the process, providing a clear roadmap for families navigating the educational landscape of the Bay Area.
        </p>

        {/* Section Heading */}
        <h2 className="font-sans font-bold text-base text-[#1E293B]">
          Understanding Your Options
        </h2>

        {/* Category Introduction */}
        <p className="font-sans font-normal text-base text-[#1E293B] leading-relaxed">
          San Francisco offers a wide array of educational choices, each with its own philosophy, curriculum, and community. The main categories include:
        </p>

        {/* School Categories */}
        {/* Public Schools */}
        <p className="font-sans font-normal text-base text-[#1E293B] leading-relaxed">
          <span className="font-sans font-bold text-base text-[#1E293B]">
            Public Schools (SFUSD):
          </span> The San Francisco Unified School District has a complex lottery-based enrollment system. Understanding the deadlines and school assignment process is crucial.
        </p>

        {/* Charter Schools */}
        <p className="font-sans font-normal text-base text-[#1E293B] leading-relaxed">
          <span className="font-sans font-bold text-base text-[#1E293B]">
            Charter Schools:
          </span> Publicly funded but independently operated, charter schools often have specialized programs or teaching methods.
        </p>

        {/* Private & Independent Schools */}
        <p className="font-sans font-normal text-base text-[#1E293B] leading-relaxed">
          <span className="font-sans font-bold text-base text-[#1E293B]">
            Private & Independent Schools:
          </span> These schools require tuition and have their own admissions processes, which can include applications, interviews, and testing.
        </p>

        {/* Blockquote */}
        <div className="border-l-4 border-[#93C5FD] pl-6 py-4">
          <blockquote className="font-sans font-normal text-base text-[#1E293B] italic leading-relaxed m-0">
            "The best school is not necessarily the one with the highest test scores, but the one that is the best fit for your child's individual needs and your family's values."
          </blockquote>
        </div>
      </div>
    </section>
  )
}

