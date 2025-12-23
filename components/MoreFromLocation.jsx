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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 
          className="text-center font-bold text-[#111827] mb-8 md:mb-12"
          style={{ fontFamily: 'Poppins, sans-serif', fontSize: '28px' }}
        >
          More from San Francisco
        </h2>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article) => (
            <div 
              key={article.id}
              className="bg-white rounded-t-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              
              {/* Text Block */}
              <div className="p-6 bg-white">
                <h3 
                  className="font-bold text-[#111827] mb-3"
                  style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px' }}
                >
                  {article.title}
                </h3>
                <Link
                  href={article.link}
                  className="inline-flex items-center gap-2 text-[#1E3A8A] font-medium hover:underline"
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px' }}
                >
                  Read More
                  <Image
                    src="/images/blue-arrow.svg"
                    alt="Arrow"
                    width={17}
                    height={14}
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

