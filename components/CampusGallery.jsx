import Image from 'next/image'

export default function CampusGallery() {
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
    }
  ]

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#1E3A8A' }}>
          Campus Gallery
        </h2>
        
        {/* Two Containers with Gap Between - Same Row */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Container 1 */}
          <div 
            className="bg-white rounded-[20px] border border-[#00000033] p-4 md:p-6 flex-1"
            style={{ opacity: 1 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {galleryImages1.map((image, index) => (
                <div
                  key={index}
                  className="relative w-full h-full overflow-hidden rounded-[10px] bg-gray-200 aspect-[168/130]"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover rounded-[10px]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Container 2 */}
          <div 
            className="bg-white rounded-[20px] border border-[#00000033] p-4 md:p-6 flex-1"
            style={{ opacity: 1 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {galleryImages2.map((image, index) => (
                <div
                  key={index}
                  className="relative w-full h-full overflow-hidden rounded-[10px] bg-gray-200 aspect-[168/130]"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover rounded-[10px]"
                    sizes="(max-width: 768px) 100vw, 33vw"
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

