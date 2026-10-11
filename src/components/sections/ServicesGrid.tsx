"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  Cpu,
  Bot,
  Workflow,
  BrainCircuit,
  Sparkles,
  Eye,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  Check,
  Layers,
  ChevronRight,
} from "lucide-react";
import { servicesData, Service } from "@/data/services";

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

export default function ServicesGrid() {
  const [activeService, setActiveService] = useState<Service>(servicesData[2]); // Default to Custom AI Agents

  return (
    <section id="services" className="relative py-28 sm:py-36 bg-[#040404] overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-accent/8 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-accent mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              End-to-End Capabilities
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-[1.1]">
              Architecting Intelligence Across Every Layer
            </h2>
          </div>
          <p className="text-sm sm:text-base text-text-secondary max-w-md leading-relaxed">
            From strategic vector search roadmaps to hardened edge computer vision, we assemble bespoke multidisciplinary sprint teams to build AI systems that scale.
          </p>
        </div>

        {/* Interactive Dynamic Layout: Left Navigation Cards + Right Deep Inspection View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Varied Editorial List Cards */}
          <div className="lg:col-span-5 space-y-3">
            {servicesData.map((service, index) => {
              const Icon = iconMap[service.iconName] || Bot;
              const isSelected = activeService.id === service.id;

              return (
                <div
                  key={service.id}
                  onClick={() => setActiveService(service)}
                  className={`group relative p-5 rounded-2xl cursor-pointer transition-all duration-300 border text-left ${
                    isSelected
                      ? "bg-surface-elevated/90 border-accent/60 shadow-[0_4px_24px_rgba(255,41,41,0.2)]"
                      : "bg-surface/50 border-white/[0.06] hover:bg-surface/80 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                          isSelected
                            ? "bg-accent text-white shadow-glow-sm"
                            : "bg-surface-elevated border border-white/10 text-text-secondary group-hover:text-accent group-hover:border-accent/30"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono text-text-muted">
                            0{index + 1}
                          </span>
                          <span className="text-[10px] font-mono text-accent">
                            {service.accentBadge}
                          </span>
                        </div>
                        <h3 className="text-base font-bold font-display text-white">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected
                          ? "text-accent translate-x-1"
                          : "text-text-muted group-hover:text-white"
                      }`}
                    />
                  </div>

                  {isSelected && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-3 text-xs text-text-secondary leading-relaxed pt-2 border-t border-white/[0.06]"
                    >
                      {service.shortDescription}
                    </motion.p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep Inspection Panel for Selected Service */}
          <div className="lg:col-span-7 sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="rounded-3xl bg-surface/90 border border-white/15 p-8 sm:p-10 backdrop-blur-2xl relative overflow-hidden shadow-card"
              >
                {/* Radial Glow Header */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-accent/15 rounded-full blur-3xl pointer-events-none" />

                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/25">
                    {activeService.eyebrow}
                  </span>
                  <div className="flex items-center gap-3 text-xs font-mono text-text-muted">
                    <span>Timeline: {activeService.timeline}</span>
                    <span>•</span>
                    <span className="text-white font-semibold">{activeService.highlightMetric}</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold font-display text-white tracking-tight mb-4">
                  {activeService.title}
                </h3>

                <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-8">
                  {activeService.fullDescription}
                </p>

                {/* Key Deliverables Grid */}
                <div className="mb-8">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-white/80 mb-4 flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-accent" />
                    Key Sprint Deliverables
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeService.deliverables.map((del, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-surface-elevated/70 border border-white/[0.06] text-xs text-text-primary"
                      >
                        <Check className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="mb-8">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-white/80 mb-3">
                    Engineered With
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeService.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-text-secondary font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Interactive CTAs */}
                <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                  <Link
                    href={`/services/${activeService.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-accent transition-colors"
                  >
                    <span>Read Full Service Specification</span>
                    <ArrowRight className="w-4 h-4 text-accent" />
                  </Link>

                  <Link
                    href={`/start-project?service=${activeService.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent hover:bg-accent-crimson text-white text-xs font-bold shadow-glow-sm hover:shadow-glow transition-all"
                  >
                    <span>Request Sprint Pod</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
