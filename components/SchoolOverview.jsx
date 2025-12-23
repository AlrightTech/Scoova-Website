import Image from 'next/image'

export default function SchoolOverview() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Left Content - 9 columns */}
          <div className="md:col-span-8">
            <h2 className="font-bold text-[28px] text-[#111827] mb-6">
              About International Academy of Excellence
            </h2>
            
            <p className="font-sans font-normal text-[16px] text-[#374151] mb-8 leading-relaxed">
              International Academy of Excellence is a premier educational institution committed to fostering global citizenship and academic excellence. Our diverse community of learners from over 40 countries creates a rich multicultural environment that prepares students for success in an interconnected world. We offer a comprehensive curriculum that combines rigorous academics with character development, ensuring our graduates are well-prepared for university and beyond.
            </p>

            {/* Information Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left Column */}
              <div className="space-y-4">
                {/* Location */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/images/loc-icon (1).png"
                      alt="Location"
                      width={12}
                      height={12}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-0.5">Location</p>
                    <p className="text-gray-800 font-bold">Marina Bay, Singapore</p>
                  </div>
                </div>

                {/* Established */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/images/founded-icon.svg"
                      alt="Established"
                      width={13}
                      height={13}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-0.5">Established</p>
                    <p className="text-gray-800 font-bold">1995</p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div>
                {/* Curriculum */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/images/carriculam-icon.svg"
                      alt="Curriculum"
                      width={16}
                      height={16}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-0.5">Curriculum</p>
                    <p className="text-gray-800 font-bold">IB, Cambridge, Local</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image - 3 columns */}
          <div className="md:col-span-4 flex items-center justify-center">
            <div className="relative w-full min-h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/images/internantional-acadmy-img.png"
                alt="International Academy of Excellence Campus"
                width={400}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

