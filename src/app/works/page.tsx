import React from "react";
import WorksShowcase from "@/components/sections/WorksShowcase";

export const metadata = {
  title: "Works & Case Studies | AgentAI",
  description:
    "Explore production-grade AI systems deployed by AgentAI across autonomous multi-agent reasoning, spatial computer vision, and enterprise LLMs.",
};

export default function WorksPage() {
  return (
    <div className="pt-20">
      <WorksShowcase />
    </div>
  );
}
