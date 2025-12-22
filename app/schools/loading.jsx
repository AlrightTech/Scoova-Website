export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div 
          className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-solid border-r-transparent mb-4"
          style={{ 
            borderColor: '#1E3A8A', 
            borderRightColor: 'transparent' 
          }}
        ></div>
        <p className="text-gray-700 font-medium text-lg">Loading Schools...</p>
      </div>
    </div>
  )
}

