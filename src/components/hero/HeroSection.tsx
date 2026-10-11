"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Zap } from "lucide-react";
import JellyfishVisual from "./JellyfishVisual";
import FloatingCard from "./FloatingCard";
import HeroStats from "./HeroStats";
import { socialLinks } from "@/data/navigation";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-16 flex flex-col justify-center overflow-hidden">
      {/* Top Red Atmospheric Spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-b from-accent/15 via-accent/5 to-transparent blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[600px]">
          
          {/* Left Column: Typography, Eyebrow & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center z-20 space-y-8"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-elevated/80 border border-white/10 w-fit backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
              <span className="text-xs font-mono uppercase tracking-widest text-text-secondary">
                AI-Driven Agency
              </span>
              <span className="text-white/20">|</span>
              <span className="text-xs font-mono text-accent">Montreal & Remote</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white leading-[1.08]">
              Your AI Sprint Team{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-rose-500 to-white">
                On Demand
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-text-secondary max-w-xl leading-relaxed font-normal">
              From discovery to deployment, we plug into your stack to prototype,
              validate, and launch AI experiences your users actually love.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/services"
                className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-accent hover:bg-accent-crimson text-white font-semibold text-sm shadow-glow transition-all duration-300"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/start-project"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-surface-elevated hover:bg-surface border border-white/15 hover:border-accent/40 text-white font-medium text-sm transition-all duration-300 backdrop-blur-md"
              >
                <span>View Sprint Plans</span>
              </Link>
            </div>

            {/* Floating Trust Pill & Social Channels */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full bg-zinc-800 border-2 border-[#050505] flex items-center justify-center text-[10px] font-bold text-accent">
                    ML
                  </div>
                  <div className="w-7 h-7 rounded-full bg-zinc-700 border-2 border-[#050505] flex items-center justify-center text-[10px] font-bold text-white">
                    AG
                  </div>
                  <div className="w-7 h-7 rounded-full bg-accent border-2 border-[#050505] flex items-center justify-center text-[10px] font-bold text-white">
                    UX
                  </div>
                </div>
                <span className="text-xs text-text-secondary">
                  Specialist Sprint Pods • 2-to-6 Wk Sprints
                </span>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 text-xs text-text-muted">
                {socialLinks.slice(0, 3).map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    {social.label.split(" ")[0]}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Realistic Translucent Jellyfish & Floating Performance Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center min-h-[460px] sm:min-h-[540px]"
          >
            {/* The Jellyfish 3D Visual Asset */}
            <JellyfishVisual />

            {/* Floating Performance Card 1: Top Left */}
            <div className="absolute top-4 -left-4 sm:-left-8 z-20 pointer-events-auto">
              <FloatingCard
                icon={Bot}
                badge="Multi-Agent Mesh"
                title="Swarm Decision Loop"
                metric="2.1ms Latency"
                trend="98.9% Acc"
                delay={0.4}
                className="w-48 sm:w-56"
              />
            </div>

            {/* Floating Performance Card 2: Bottom Right */}
            <div className="absolute bottom-6 -right-4 sm:-right-8 z-20 pointer-events-auto">
              <FloatingCard
                icon={Zap}
                badge="Model Serving"
                title="Daily Autonomous Tokens"
                metric="3,240,000+"
                trend="+42% MoM"
                delay={0.6}
                className="w-52 sm:w-60"
              />
            </div>

            {/* Floating Performance Card 3: Top Right Tiny Indicator */}
            <div className="absolute -top-4 right-4 z-20 hidden sm:block pointer-events-auto">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="glass-panel px-3 py-1.5 rounded-full border border-accent/30 text-[11px] font-mono text-white flex items-center gap-2 shadow-glow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                <span>Air-Gapped VPC Ready</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Hero Statistics Section (Section 3) */}
      <HeroStats />
    </section>
  );
}
