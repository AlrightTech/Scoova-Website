import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AboutHero from '@/components/AboutHero'
import OurJourney from '@/components/OurJourney'
import MissionVision from '@/components/MissionVision'
import WhatWeBelieve from '@/components/WhatWeBelieve'
import JoinMission from '@/components/JoinMission'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <AboutHero />
      <OurJourney />
      <MissionVision />
      <WhatWeBelieve />
      <JoinMission />
      <Footer />
    </main>
  )
}

