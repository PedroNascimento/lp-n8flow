import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { PainPointsSection } from "@/components/sections/PainPointsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyN8flowSection } from "@/components/sections/WhyN8flowSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { AuthoritySection } from "@/components/sections/AuthoritySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <PainPointsSection />
        <AboutSection />
        <ServicesSection />
        <WhyN8flowSection />
        <HowItWorksSection />
        <AuthoritySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
