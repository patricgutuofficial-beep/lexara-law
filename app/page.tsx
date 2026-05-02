import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { PracticeAreas } from "@/components/practice-areas"
import { AboutStrip } from "@/components/about-strip"
import { TeamPreview } from "@/components/team-preview"
import { Testimonial } from "@/components/testimonial"
import { ContactCTA } from "@/components/contact-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Marquee />
      <PracticeAreas />
      <AboutStrip />
      <TeamPreview />
      <Testimonial />
      <ContactCTA />
      <Footer />
    </main>
  )
}
