import Image from 'next/image'

export default function ArticleHeader() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Tag */}
        <div className="flex justify-center mb-6">
          <span 
            className="inline-block px-4 py-2 rounded-full bg-[#1E3A8A] text-white font-medium text-sm"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Education
          </span>
        </div>

        {/* Main Title */}
        <h1 
          className="text-center font-bold text-[#1E3A8A] mb-6 leading-tight"
          style={{ 
            fontFamily: 'Poppins, sans-serif',
            fontSize: '36px'
          }}
        >
          Navigating the School Choice Process in San Francisco
        </h1>

        {/* Author and Metadata */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {/* Profile Picture */}
          <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="/images/Singapore International School.png"
              alt="Jane Doe"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Name */}
          <span 
            className="font-medium text-[#1E3A8A]"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px' }}
          >
            Jane Doe
          </span>

          {/* Calendar Icon and Date */}
          <div className="flex items-center gap-1">
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M12 2.66667H11.3333V1.33333C11.3333 1.13333 11.1733 0.973333 10.9733 0.973333C10.7733 0.973333 10.6133 1.13333 10.6133 1.33333V2.66667H5.38667V1.33333C5.38667 1.13333 5.22667 0.973333 5.02667 0.973333C4.82667 0.973333 4.66667 1.13333 4.66667 1.33333V2.66667H4C2.89333 2.66667 2 3.56 2 4.66667V13.3333C2 14.44 2.89333 15.3333 4 15.3333H12C13.1067 15.3333 14 14.44 14 13.3333V4.66667C14 3.56 13.1067 2.66667 12 2.66667ZM12.6667 13.3333C12.6667 13.7067 12.3733 14 12 14H4C3.62667 14 3.33333 13.7067 3.33333 13.3333V6.66667H12.6667V13.3333Z" 
                fill="#1E3A8A"
              />
            </svg>
            <span 
              className="font-medium text-[#1E3A8A]"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px' }}
            >
              Oct 28, 2025
            </span>
          </div>

          {/* Location Icon and Location */}
          <div className="flex items-center gap-1">
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M8 0C4.68667 0 2 2.68667 2 6C2 9.66667 8 16 8 16C8 16 14 9.66667 14 6C14 2.68667 11.3133 0 8 0ZM8 8.33333C6.89333 8.33333 6 7.44 6 6.33333C6 5.22667 6.89333 4.33333 8 4.33333C9.10667 4.33333 10 5.22667 10 6.33333C10 7.44 9.10667 8.33333 8 8.33333Z" 
                fill="#1E3A8A"
              />
            </svg>
            <span 
              className="font-medium text-[#1E3A8A]"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px' }}
            >
              San Francisco, CA
            </span>
          </div>
        </div>

        {/* Main Image */}
        <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden">
          <Image
            src="/images/Singapore International School.png"
            alt="Modern library with cityscape view"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>
      </div>
    </section>
  )
}

