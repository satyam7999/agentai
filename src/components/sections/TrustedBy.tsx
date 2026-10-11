"use client";

import React from "react";
import { clientLogos } from "@/data/testimonials";

export default function TrustedBy() {
  return (
    <section className="relative py-14 border-y border-white/[0.06] bg-[#070707] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-6 text-center">
        <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-text-muted">
          Powering Frontier AI Workloads For Next-Gen Engineering Teams
        </p>
      </div>

      {/* Infinite Logo Marquee Track */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left & Right Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-[#070707] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-[#070707] to-transparent z-10 pointer-events-none" />

        <div className="flex items-center gap-12 sm:gap-16 whitespace-nowrap animate-[marquee_28s_linear_infinite] hover:[animation-play-state:paused]">
          {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, idx) => (
            <div
              key={`${logo.name}-${idx}`}
              className="group flex items-center gap-2 cursor-pointer transition-all duration-300"
            >
              <span className="font-mono text-sm sm:text-base font-bold tracking-wider text-text-muted/60 group-hover:text-accent group-hover:drop-shadow-[0_0_12px_rgba(255,41,41,0.6)] transition-all">
                {logo.symbol}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
