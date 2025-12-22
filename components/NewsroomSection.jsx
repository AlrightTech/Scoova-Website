import Image from 'next/image'

export default function NewsroomSection({ title = "Latest From Our Newsroom" }) {
  const articles = [
    {
      id: 1,
      title: 'New Science Lab Opens for Students',
      date: 'November 20, 2025',
      image: '/images/Singapore International School.png'
    },
    {
      id: 2,
      title: 'Annual Sports Day Celebration',
      date: 'November 15, 2025',
      image: '/images/Oxford University.png'
    },
    {
      id: 3,
      title: 'Student Achievements in International Competition',
      date: 'November 10, 2025',
      image: '/images/Harvard University.png'
    }
  ]

  return (
    <section className="py-12 md:py-16">
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#1E3A8A' }}>
          {title}
        </h2>
        <p className="text-gray-600 text-lg">
          Stay updated with the latest news and events from our schools
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                {article.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{article.date}</p>
              <button
                className="text-sm font-medium hover:opacity-80 transition-opacity"
                style={{ color: '#1E3A8A' }}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

