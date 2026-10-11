import React from "react";
import Link from "next/link";
import { companyData } from "@/data/company";
import { Target, Sparkles, MapPin, Cpu } from "lucide-react";

export const metadata = {
  title: "About AgentAI — Philosophy, Team & AI Sprint Pods",
  description:
    "Learn about AgentAI's agency philosophy, mission, Montreal headquarters, development methodology, and leadership team.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Editorial Eyebrow & Headline */}
        <div className="max-w-4xl mb-20 sm:mb-24">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-accent mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Agency Philosophy & DNA
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display text-white tracking-tight leading-[1.08] mb-8">
            Engineered For The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-rose-500 to-white">
              Autonomous Era
            </span>
          </h1>
          <p className="text-lg sm:text-2xl text-text-secondary leading-relaxed font-light">
            We exist to eliminate the gap between frontier AI capability and practical enterprise execution. Based in Montreal, Canada, we partner with venture-backed founders and forward-thinking enterprises worldwide.
          </p>
        </div>

        {/* Mission & Vision Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="p-8 sm:p-12 rounded-3xl bg-surface/80 border border-white/10 backdrop-blur-xl relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-accent/15 border border-accent/30 flex items-center justify-center text-accent mb-6">
              <Target className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono uppercase tracking-widest text-accent mb-2">
              Our Mission
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4">
              Production-Hardened AI with Measurable ROI
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              {companyData.mission}
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-surface/80 border border-white/10 backdrop-blur-xl relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-accent/15 border border-accent/30 flex items-center justify-center text-accent mb-6">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono uppercase tracking-widest text-accent mb-2">
              Our Vision
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4">
              Multiplying Human Ingenuity
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              {companyData.vision}
            </p>
          </div>
        </div>

        {/* Why AgentAI: Core Pillars */}
        <div className="mb-24">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-mono uppercase tracking-widest text-accent mb-2">
              The AgentAI Advantage
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
              Why Forward-Thinking Leaders Choose Our Sprint Pods
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyData.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-surface-elevated/60 border border-white/[0.08] hover:border-accent/40 transition-colors"
              >
                <div className="text-2xl font-mono font-bold text-accent mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold font-display text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology Sprint Cycles */}
        <div className="p-10 sm:p-14 rounded-3xl bg-surface/90 border border-white/10 backdrop-blur-2xl mb-24">
          <div className="max-w-xl mb-12">
            <div className="text-xs font-mono uppercase tracking-widest text-accent mb-2">
              Process & Cadence
            </div>
            <h2 className="text-3xl font-bold font-display text-white">
              The 4-Stage Sprint Lifecycle
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyData.methodology.map((m) => (
              <div key={m.step} className="p-5 rounded-2xl bg-black/40 border border-white/[0.06]">
                <div className="text-xs font-mono text-accent mb-2">{m.timeline}</div>
                <h4 className="text-base font-bold font-display text-white mb-2">{m.name}</h4>
                <p className="text-xs text-text-secondary leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Leadership */}
        <div className="mb-24">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-mono uppercase tracking-widest text-accent mb-2">
              Principal Architects
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
              Led by Elite Engineers & Researchers
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyData.team.map((member) => (
              <div
                key={member.name}
                className="p-6 rounded-3xl bg-surface/70 border border-white/[0.08] hover:border-accent/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-surface-elevated border border-white/10 flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-display text-white">{member.name}</h3>
                <div className="text-xs font-mono text-accent mb-3">{member.role}</div>
                <p className="text-xs text-text-secondary leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Montreal HQ Callout Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-surface via-surface-elevated to-surface border border-accent/25 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase">
              <MapPin className="w-4 h-4" />
              Montreal AI Corridor
            </div>
            <h3 className="text-2xl font-bold font-display text-white">
              Based in Montreal. Shipping Globally.
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary max-w-xl">
              Rooted in Montreal&apos;s world-renowned deep learning ecosystem, we combine research rigor with rapid commercial product execution.
            </p>
          </div>

          <Link
            href="/start-project"
            className="flex-shrink-0 px-8 py-4 rounded-full bg-accent hover:bg-accent-crimson text-white font-bold text-sm shadow-glow transition-all"
          >
            Start Your Sprint &rarr;
          </Link>
        </div>

      </div>
    </div>
  );
}
