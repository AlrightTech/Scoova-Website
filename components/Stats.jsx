export default function Stats() {
  const stats = [
    {
      number: '50K+',
      label: 'Schools Listed',
      color: '#1E3A8A', // Blue
    },
    {
      number: '200K+',
      label: 'Verified Reviews',
      color: '#F59E0B', // Orange
    },
    {
      number: '180+',
      label: 'Countries Covered',
      color: '#0D9488', // Green
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 max-w-4xl mx-auto">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-[30px] md:text-[28px] font-sans" style={{ color: stat.color, fontWeight: 700 }}>
            {stat.number}
          </div>
          <div className="font-sans font-normal text-base" style={{ color: '#4B5563' }}>
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}

