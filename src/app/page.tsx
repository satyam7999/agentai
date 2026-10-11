import React from "react";
import HeroSection from "@/components/hero/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import TrustedBy from "@/components/sections/TrustedBy";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WorksShowcase from "@/components/sections/WorksShowcase";
import ProcessSection from "@/components/sections/ProcessSection";
import RoiCalculator from "@/components/sections/RoiCalculator";
import CtaSection from "@/components/sections/CtaSection";

export const metadata = {
  title: "AgentAI — Your AI Sprint Team On Demand | Premium AI Development Agency",
  description:
    "An elite AI development agency. From discovery to deployment, we build autonomous multi-agent swarms, predictive machine learning pipelines, and frontier AI experiences.",
};

export default function HomePage() {
  return (
    <main className="relative flex flex-col w-full overflow-hidden">
      {/* Hero Section Recreating Reference */}
      <HeroSection />

      {/* Introduction Section with 2-Column Split & Testimonial */}
      <IntroSection />

      {/* Trusted By Client Logo Marquee */}
      <TrustedBy />

      {/* End-to-End AI Services Experience */}
      <ServicesGrid />

      {/* Works / Case Studies Portfolio Showcase */}
      <WorksShowcase />

      {/* The 4-Step AI Sprint Framework */}
      <ProcessSection />

      {/* Interactive ROI & Velocity Calculator */}
      <RoiCalculator />

      {/* Final Call to Action */}
      <CtaSection />
    </main>
  );
}
