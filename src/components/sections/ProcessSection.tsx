"use client";

import React from "react";
import { motion } from "framer-motion";
import { companyData } from "@/data/company";
import Link from "next/link";

export default function ProcessSection() {
  return (
    <section className="relative py-28 sm:py-36 bg-[#040404] border-t border-white/[0.06] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-accent/8 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-accent mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Execution Methodology
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-[1.1] mb-6">
            The AI Sprint Framework
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            We operate in high-velocity, milestone-driven sprint pods. No endless discovery phases—we deliver production code with measurable KPIs every two weeks.
          </p>
        </div>

        {/* Process Steps Horizontal / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyData.methodology.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, borderColor: "rgba(255, 41, 41, 0.4)" }}
              className="group p-6 sm:p-7 rounded-3xl bg-surface/70 border border-white/[0.08] backdrop-blur-xl relative overflow-hidden transition-all duration-300 flex flex-col justify-between"
            >
              {/* Step indicator top */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black font-display text-white/20 group-hover:text-accent transition-colors">
                    {step.step}
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-text-secondary">
                    {step.timeline}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-display text-white mb-3 group-hover:text-accent transition-colors">
                  {step.name}
                </h3>

                <p className="text-xs text-text-secondary leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-text-muted">
                <span>Phase Milestone</span>
                <span className="text-accent group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sprint Pod Commitment Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-surface-elevated/60 border border-accent/25 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_10px_40px_-15px_rgba(255,41,41,0.25)]">
          <div className="space-y-1">
            <h4 className="text-lg font-bold font-display text-white">
              Need to accelerate your internal AI roadmap?
            </h4>
            <p className="text-xs text-text-secondary">
              We deploy dedicated pods consisting of 1 Lead AI Architect, 1 Senior Systems Engineer, and 1 Creative Interface Designer.
            </p>
          </div>

          <Link
            href="/start-project"
            className="flex-shrink-0 px-6 py-3 rounded-full bg-accent hover:bg-accent-crimson text-white text-xs font-bold shadow-glow-sm hover:shadow-glow transition-all"
          >
            Check Sprint Availability &rarr;
          </Link>
        </div>

      </div>
    </section>
  );
}
