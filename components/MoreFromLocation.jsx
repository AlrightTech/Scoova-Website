import Image from 'next/image'
import Link from 'next/link'

export default function MoreFromLocation() {
  const articles = [
    {
      id: 1,
      title: 'Top 5 Family-Friendly Weekend Activities',
      image: '/images/Singapore International School.png',
      link: '#'
    },
    {
      id: 2,
      title: 'Parenting in the Digital Age: Local Workshops',
      image: '/images/Oxford University.png',
      link: '#'
    },
    {
      id: 3,
      title: 'SF Annual Student Science Fair Highlights',
      image: '/images/Harvard University.png',
      link: '#'
    }
  ]

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Heading */}
        <h2 
          className="text-center font-bold text-2xl text-[#111827] mb-8 md:mb-12"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          More from San Francisco
        </h2>
        
        {/* Cards Grid */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
          {articles.map((article) => (
            <div 
              key={article.id}
              className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[12px] overflow-hidden w-full md:max-w-[220px] flex-shrink-0"
            >
              {/* Image */}
              <div className="relative w-full h-[130px] overflow-hidden rounded-t-[15px]">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover rounded-t-[15px]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              
              {/* Text Block */}
              <div className="p-6 bg-[#F8FAFC]">
                <h3 
                  className="font-semibold text-base text-[#1E293B] mb-3"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {article.title}
                </h3>
                <Link
                  href={article.link}
                  className="inline-flex items-center gap-2 text-[#1E3A8A] font-medium text-sm"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Read More
                  <Image
                    src="/images/blue-arrow.svg"
                    alt="Arrow"
                    width={10}
                    height={12}
                    className="w-[10px] h-[12px]"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

