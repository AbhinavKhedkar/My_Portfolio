"use client"
import AboutSection from '@/components/AboutSection'
import AchievementsSection from '@/components/AchievementsSection'
import EmailSection from '@/components/EmailSection'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import ProjectSection from '@/components/ProjectSection'
import Scroll from '@/components/Scroll'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-primary-500 via-secondary-500 to-tertiary-500">
      <Navbar />
      <div className="container mx-auto">
        <HeroSection />
      </div>
      <div className="container mx-auto px-12">
        <AchievementsSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
      <Scroll/>
    </main>
  )
}
