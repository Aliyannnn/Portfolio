import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import TechStackSection from "@/components/tech-stack-section"
import BuildLogsSection from "@/components/build-logs-section"
import CTASection from "@/components/cta-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TechStackSection />
      <BuildLogsSection />
      <CTASection />
    </>
  );
}