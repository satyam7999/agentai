import React from "react";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { ArrowRight, ArrowUpRight, Check, Compass, Cpu, Bot, Workflow, BrainCircuit, Sparkles, Eye, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "AI Engineering & Development Services",
  description:
    "Explore AgentAI's end-to-end capabilities: Autonomous AI Agents, Machine Learning, Computer Vision, Generative AI, Workflow Automation, and Strategy.",
};

const iconMap: Record<string, React.ElementType> = {
  Compass,
  Cpu,
  Bot,
  Workflow,
  BrainCircuit,
  Sparkles,
  Eye,
  ShieldCheck,
};

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-20 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-accent mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          End-to-End Capabilities
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold font-display text-white tracking-tight leading-[1.1] mb-6 max-w-3xl">
          Full-Stack AI Engineering Built for Enterprise Scale
        </h1>
        <p className="text-base sm:text-lg text-text-secondary max-w-2xl leading-relaxed">
          We embed specialized senior sprint pods to help you discover, design, develop, and deploy intelligent AI systems. Every capability is engineered for production reliability and quantifiable business outcomes.
        </p>
      </div>

      {/* Services Grid (All 8 Core Services) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.iconName] || Bot;
            return (
              <div
                key={service.id}
                className="group p-8 sm:p-10 rounded-3xl bg-surface/70 border border-white/10 hover:border-accent/40 backdrop-blur-xl shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-surface-elevated border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors shadow-glow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-text-muted">
                        0{index + 1}
                      </span>
                      <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent font-semibold">
                        {service.accentBadge}
                      </span>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold font-display text-white group-hover:text-accent transition-colors mb-4">
                    {service.title}
                  </h2>

                  <p className="text-sm text-text-secondary leading-relaxed mb-6">
                    {service.fullDescription}
                  </p>

                  {/* Deliverables snippet */}
                  <div className="space-y-2 mb-6">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-white/70">
                      Deliverables:
                    </div>
                    {service.deliverables.slice(0, 3).map((del, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-text-secondary">
                        <Check className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {service.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/[0.04] text-text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom actions */}
                <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-accent transition-colors"
                  >
                    <span>Full Specification</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href={`/start-project?service=${service.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent hover:bg-accent-crimson text-white text-xs font-bold shadow-glow-sm hover:shadow-glow transition-all"
                  >
                    <span>Book Sprint</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
