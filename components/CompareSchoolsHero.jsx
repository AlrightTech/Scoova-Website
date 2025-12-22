import Image from "next/image";

export default function CompareSchoolsHero() {
  return (
    <section
      className="py-12 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/compare-school-hero-sec.png')",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* School Building Icon */}
        <div className="flex justify-center mb-4">
          <Image
            src="/images/explore-schol-icon.svg"
            alt="Compare Schools"
            width={112}
            height={104}
            className="w-7 h-7"
          />
        </div>

        {/* Title */}
        <h1 className="mb-0 text-[#111827] font-poppins font-bold text-[42px]">
          Compare Schools
        </h1>

        {/* Subtitle */}
        <p className="mb-6 max-w-3xl mx-auto text-[#4B5563] font-sans font-normal text-[18px]">
          Search and compare schools worldwide based on verified reviews and
          ratings.{" "}
        </p>

        
      </div>
    </section>
  );
}
