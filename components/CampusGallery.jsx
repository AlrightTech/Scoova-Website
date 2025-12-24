'use client'

import { useRef } from 'react'
import Image from 'next/image'

export default function CampusGallery() {
  const gallery1Ref = useRef(null)
  const gallery2Ref = useRef(null)

  const galleryImages1 = [
    {
      src: '/images/Singapore International School.png',
      alt: 'Modern Library'
    },
    {
      src: '/images/Oxford University.png',
      alt: 'Science Laboratory'
    },
    {
      src: '/images/Harvard University.png',
      alt: 'Indoor Basketball Court'
    },
    {
      src: '/images/Singapore International School.png',
      alt: 'Campus View 4'
    },
    {
      src: '/images/Oxford University.png',
      alt: 'Campus View 5'
    },
    {
      src: '/images/Harvard University.png',
      alt: 'Campus View 6'
    }
  ]

  const galleryImages2 = [
    {
      src: '/images/Singapore International School.png',
      alt: 'Campus View 1'
    },
    {
      src: '/images/Oxford University.png',
      alt: 'Campus View 2'
    },
    {
      src: '/images/Harvard University.png',
      alt: 'Campus View 3'
    },
    {
      src: '/images/Singapore International School.png',
      alt: 'Campus View 4'
    },
    {
      src: '/images/Oxford University.png',
      alt: 'Campus View 5'
    },
    {
      src: '/images/Harvard University.png',
      alt: 'Campus View 6'
    }
  ]

  const scrollGallery = (galleryRef, direction) => {
    if (galleryRef.current) {
      const scrollAmount = 166 // Width of one image (150px) + gap (16px)
      const currentScroll = galleryRef.current.scrollLeft
      const maxScroll = galleryRef.current.scrollWidth - galleryRef.current.clientWidth
      
      let newScroll
      if (direction === 'left') {
        newScroll = Math.max(0, currentScroll - scrollAmount)
      } else {
        newScroll = Math.min(maxScroll, currentScroll + scrollAmount)
      }
      
      galleryRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="py-12 md:py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          className="text-[32px] font-bold mb-8 text-[#111827] text-center"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Campus Gallery
        </h2>
        
        {/* Two Containers with Gap Between - Same Row */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Container 1 */}
          <div 
            className="bg-[#F9FAFB] rounded-[20px] border border-[#00000033] p-4 md:p-6 flex-1 relative overflow-hidden"
            style={{ opacity: 1 }}
          >
            {/* Left Arrow */}
            <button
              onClick={() => scrollGallery(gallery1Ref, 'left')}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Previous image"
            >
              <Image
                src="/images/left-icon (2).png"
                alt="Previous"
                width={11}
                height={9}
                className="object-contain"
              />
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => scrollGallery(gallery1Ref, 'right')}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Next image"
            >
              <Image
                src="/images/right-icon (1).png"
                alt="Next"
                width={11}
                height={9}
                className="object-contain"
              />
            </button>

            <div 
              ref={gallery1Ref}
              className="flex gap-4 overflow-x-auto scrollbar-hide"
              style={{ scrollBehavior: 'smooth' }}
            >
              {galleryImages1.map((image, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 w-[150px] h-[110px] overflow-hidden rounded-[10px] bg-gray-200"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover rounded-[10px]"
                    sizes="150px"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Container 2 */}
          <div 
            className="bg-[#F9FAFB] rounded-[20px] border border-[#00000033] p-4 md:p-6 flex-1 relative overflow-hidden"
            style={{ opacity: 1 }}
          >
            {/* Left Arrow */}
            <button
              onClick={() => scrollGallery(gallery2Ref, 'left')}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Previous image"
            >
              <Image
                src="/images/left-icon (2).png"
                alt="Previous"
                width={11}
                height={9}
                className="object-contain"
              />
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => scrollGallery(gallery2Ref, 'right')}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Next image"
            >
              <Image
                src="/images/right-icon (1).png"
                alt="Next"
                width={11}
                height={9}
                className="object-contain"
              />
            </button>

            <div 
              ref={gallery2Ref}
              className="flex gap-4 overflow-x-auto scrollbar-hide"
              style={{ scrollBehavior: 'smooth' }}
            >
              {galleryImages2.map((image, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 w-[150px] h-[110px] overflow-hidden rounded-[10px] bg-gray-200"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover rounded-[10px]"
                    sizes="150px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

