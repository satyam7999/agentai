"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, MapPin, CheckCircle2, Quote, Sparkles } from "lucide-react";
import { sampleTestimonial } from "@/data/testimonials";
import { introHighlights } from "@/data/stats";

export default function IntroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/8 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Split Editorial Headline with Red Highlights */}
        <div className="max-w-5xl mb-20 sm:mb-28">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-accent mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Human-Centered AI Philosophy
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display text-white tracking-tight leading-[1.18]"
          >
            We design and deploy{" "}
            <span className="text-accent underline decoration-accent/40 underline-offset-8">
              AI solutions
            </span>{" "}
            with people at the core, ensuring every system enhances{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-300 to-accent">
              real user experiences.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-base sm:text-xl text-text-secondary max-w-3xl leading-relaxed"
          >
            Too many AI initiatives remain trapped in proof-of-concept limbo. We bridge foundational machine learning models with polished, intuitive product craft to turn experimental AI into everyday utility.
          </motion.p>
        </div>

        {/* Two-Column Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Availability, Montreal, Start Project, Large Project Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-surface/80 border border-white/10 backdrop-blur-xl">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-semibold text-white">
                    {introHighlights.availability}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-text-secondary">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  <span>{introHighlights.location}</span>
                </div>
              </div>

              <Link
                href="/start-project"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent hover:bg-accent-crimson text-white text-xs font-semibold shadow-glow-sm hover:shadow-glow transition-all"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Large Cinematic Project Image with Red Treatment */}
            <div className="group relative rounded-3xl overflow-hidden border border-white/15 bg-surface aspect-[16/10] shadow-card">
              <Image
                src="/images/intro-project.jpg"
                alt="Cinematic AI neural network project showcase"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-110"
              />
              {/* Crimson tint gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-accent/10 mix-blend-color" />

              {/* Foreground Image Badge */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-accent bg-black/60 px-2.5 py-1 rounded-full border border-accent/30">
                    Neural Flow Engine
                  </span>
                  <h4 className="text-lg font-bold text-white font-display mt-2">
                    Autonomous Multi-Layer Model Pipeline
                  </h4>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs text-text-secondary">
                  <Sparkles className="w-3 h-3 text-accent" />
                  <span>Sub-second Latency</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Trust Indicators, 120+ Metric, Testimonial, Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* 120+ Metric Showcase Card */}
            <div className="p-8 rounded-3xl bg-surface/90 border border-white/10 relative overflow-hidden backdrop-blur-xl group hover:border-accent/40 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-extrabold font-display text-white tracking-tight">
                  {sampleTestimonial.metric}
                </span>
                <span className="text-accent text-2xl font-bold">+</span>
              </div>
              <div className="text-sm font-semibold text-white mb-2">
                {sampleTestimonial.metricLabel}
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                Deployed across enterprise workflows, autonomous logistics, fintech underwriting, and high-growth venture-backed software.
              </p>

              {/* Trust checklist */}
              <div className="grid grid-cols-2 gap-2 mt-6 pt-6 border-t border-white/[0.08] text-xs text-text-secondary">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>SOC2 Type II Aligned</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>Private VPC Dedicated</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>Zero-Data Retention</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>Senior Pods Only</span>
                </div>
              </div>
            </div>

            {/* Client Testimonial & Portrait Card */}
            <div className="p-8 rounded-3xl bg-surface-elevated/70 border border-white/10 backdrop-blur-xl relative">
              <Quote className="w-8 h-8 text-accent/30 mb-4" />
              
              <blockquote className="text-sm text-text-secondary leading-relaxed italic mb-6">
                &ldquo;{sampleTestimonial.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4 pt-4 border-t border-white/[0.08]">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-accent/40 flex-shrink-0 shadow-glow-sm">
                  <Image
                    src={sampleTestimonial.avatar}
                    alt={sampleTestimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-white font-display">
                    {sampleTestimonial.author}
                  </div>
                  <div className="text-xs text-text-secondary">
                    {sampleTestimonial.role}
                  </div>
                  <div className="text-[11px] font-mono text-accent">
                    {sampleTestimonial.company}
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.05] text-[10px] text-text-muted font-mono">
                * Editable sample client testimonial placeholder per design system specifications
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
