import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import JobDetail from '@/components/JobDetail'

export default async function JobDetailPage({ params }) {
  const { id } = await params
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <JobDetail jobId={id} />
      </div>
      <Footer />
    </main>
  )
}

