import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/home/hero-section"
import { FeaturesSection } from "@/components/home/features-section"
import { HowItWorksSection } from "@/components/home/how-it-works-section"
import { BenefitsSection } from "@/components/home/benefits-section"
import { TopPicksSection } from "@/components/home/top-picks-section"
import { ComparisonSection } from "@/components/home/comparison-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { FAQSection } from "@/components/home/faq-section"
import { StatsSection } from "@/components/home/stats-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <BenefitsSection />
      <TopPicksSection />
      <ComparisonSection />
      <TestimonialsSection />
      <StatsSection />
      <FAQSection />
      <CTASection />
    </main>
  )
}
