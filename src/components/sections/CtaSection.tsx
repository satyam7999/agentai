"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Terminal } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="relative py-28 sm:py-36 bg-[#020202] overflow-hidden">
      {/* Central Volumetric Red Atmospheric Flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-accent/15 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-elevated/80 border border-white/10 backdrop-blur-md text-xs font-mono text-text-secondary uppercase tracking-widest mb-8">
          <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
          <span>Sprint Slots Open for Upcoming Quarter</span>
        </div>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display text-white tracking-tight leading-[1.08] mb-8">
          Turn Your AI Ambitions Into{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-rose-500 to-white">
            Deployed Software.
          </span>
        </h2>

        <p className="text-base sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-12">
          Tell us what you want to build. Within 48 hours, our principal architects will return with a concrete technical architecture, feasibility report, and sprint quote.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/start-project"
            className="group inline-flex items-center gap-3 px-9 py-4 rounded-full bg-accent hover:bg-accent-crimson text-white font-bold text-sm shadow-glow transition-all duration-300"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-surface-elevated hover:bg-surface border border-white/15 hover:border-accent/40 text-white font-medium text-sm transition-all duration-300"
          >
            <span>Speak With An Architect</span>
          </Link>
        </div>

        {/* Security / Quality Assurance Badges */}
        <div className="mt-16 pt-10 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-8 text-xs text-text-muted font-mono">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-accent" />
            <span>Strict NDA & Code Sovereignty</span>
          </div>
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-accent" />
            <span>Direct Git Repository Handover</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-accent" />
            <span>Senior Specialists Pod Only</span>
          </div>
        </div>

      </div>
    </section>
  );
}
