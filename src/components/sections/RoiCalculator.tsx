"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calculator, ArrowRight, Zap, Clock, DollarSign } from "lucide-react";

export default function RoiCalculator() {
  const [projectScope, setProjectScope] = useState<"mvp" | "full" | "enterprise">("full");

  const scopeDetails = {
    mvp: {
      weeks: 3,
      costSavings: "$45,000",
      speedMultiplier: "3.5x",
      description: "Functional PoC with live model integration and evaluated dataset benchmarks.",
    },
    full: {
      weeks: 5,
      costSavings: "$120,000",
      speedMultiplier: "4.2x",
      description: "Production web application, autonomous agent swarm, streaming UI, and private vector database.",
    },
    enterprise: {
      weeks: 8,
      costSavings: "$280,000+",
      speedMultiplier: "5.0x",
      description: "Multi-cluster private VPC deployment, fine-tuned custom weights, air-gapped security, and 24/7 SLA.",
    },
  };

  const active = scopeDetails[projectScope];

  return (
    <section className="relative py-28 sm:py-36 bg-[#030303] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Explainer */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-accent">
              <Calculator className="w-3.5 h-3.5" />
              Efficiency Modeling
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-[1.1]">
              Sprint Pod Velocity vs Traditional In-House Hiring
            </h2>

            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              Recruiting senior AI PhDs, MLOps architects, and creative frontend engineers takes an average of 4 to 6 months before a single commit is made. With AgentAI, your senior sprint pod starts shipping in days.
            </p>

            <div className="space-y-3 pt-2 text-xs text-text-secondary">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Zero recruiting overhead or equity dilution</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Immediate access to battle-tested agent scaffolding</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Full IP and proprietary code ownership transferred on delivery</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Scope Selector & Impact Card */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-surface/90 border border-white/10 backdrop-blur-2xl shadow-card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

              <h3 className="text-lg font-bold font-display text-white mb-6">
                Configure Project Tier:
              </h3>

              {/* Scope Segmented Control */}
              <div className="grid grid-cols-3 gap-2 p-1.5 rounded-2xl bg-surface-elevated border border-white/[0.08] mb-8">
                {(["mvp", "full", "enterprise"] as const).map((scope) => (
                  <button
                    key={scope}
                    onClick={() => setProjectScope(scope)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold capitalize transition-all ${
                      projectScope === scope
                        ? "bg-accent text-white shadow-glow-sm"
                        : "text-text-secondary hover:text-white"
                    }`}
                  >
                    {scope === "mvp" ? "Rapid MVP" : scope === "full" ? "Production Pod" : "Enterprise"}
                  </button>
                ))}
              </div>

              {/* Dynamic Metrics Output */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-black/50 border border-white/[0.06]">
                  <div className="flex items-center gap-1.5 text-text-muted text-[11px] font-mono mb-1">
                    <Clock className="w-3.5 h-3.5 text-accent" />
                    Delivery Timeline
                  </div>
                  <div className="text-2xl font-black font-display text-white">
                    {active.weeks} <span className="text-xs font-normal text-text-secondary">Weeks</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-black/50 border border-white/[0.06]">
                  <div className="flex items-center gap-1.5 text-text-muted text-[11px] font-mono mb-1">
                    <DollarSign className="w-3.5 h-3.5 text-accent" />
                    Est. Cost Reduction
                  </div>
                  <div className="text-2xl font-black font-display text-white text-emerald-400">
                    {active.costSavings}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-black/50 border border-white/[0.06]">
                  <div className="flex items-center gap-1.5 text-text-muted text-[11px] font-mono mb-1">
                    <Zap className="w-3.5 h-3.5 text-accent" />
                    Speedup vs Hiring
                  </div>
                  <div className="text-2xl font-black font-display text-accent">
                    {active.speedMultiplier}
                  </div>
                </div>
              </div>

              <p className="text-xs text-text-secondary leading-relaxed mb-8 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                {active.description}
              </p>

              {/* Action Button */}
              <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
                <span className="text-xs text-text-muted font-mono">
                  Guaranteed SLA Milestones
                </span>
                <Link
                  href={`/start-project?tier=${projectScope}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent hover:bg-accent-crimson text-white text-xs font-bold shadow-glow-sm hover:shadow-glow transition-all"
                >
                  <span>Select {projectScope.toUpperCase()} Sprint</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
