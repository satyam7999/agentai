"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, ArrowLeft, Bot, Sparkles, Cpu, Eye, Workflow, BrainCircuit, Loader2, PartyPopper } from "lucide-react";
import confetti from "canvas-confetti";

export default function StartProjectPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Form State
  const [formData, setFormData] = useState({
    projectType: "Custom AI Agents & Multi-Agent Swarms",
    hostingTarget: "Private Dedicated VPC (AWS / GCP / Azure)",
    techIntegrations: ["OpenAI / Anthropic", "Vector Database (Qdrant / Pinecone)"],
    budget: "$25,000 - $50,000 (Standard Sprint)",
    timeline: "Within 1 Month",
    fullName: "",
    email: "",
    company: "",
    description: "",
  });

  const projectTypes = [
    { title: "Custom AI Agents", desc: "Autonomous tool execution, memory, and multi-agent coordination.", icon: Bot },
    { title: "AI Product Development", desc: "Full-stack web & mobile AI products with streaming interfaces.", icon: Cpu },
    { title: "Computer Vision & Edge", desc: "Spatial perception, YOLOv10 object detection, edge deployment.", icon: Eye },
    { title: "Machine Learning Solutions", desc: "Fine-tuned models, distillation, and sub-10ms inference engines.", icon: BrainCircuit },
    { title: "Cognitive Automation", desc: "Self-healing enterprise workflows and intelligent document parsing.", icon: Workflow },
    { title: "AI Strategy & Architecture", desc: "Feasibility audits, vector search roadmaps, and model benchmarks.", icon: Sparkles },
  ];

  const hostingTargets = [
    "Private Dedicated VPC (AWS / GCP / Azure)",
    "Air-Gapped On-Premises Infrastructure",
    "Edge Devices (NVIDIA Jetson / Apple Silicon)",
    "Managed Cloud Serverless / Vercel AI SDK",
  ];

  const budgetOptions = [
    "< $25,000 (Rapid Proof of Concept)",
    "$25,000 - $50,000 (Standard 4-Week Sprint)",
    "$50,000 - $100,000 (Dedicated Multi-Sprint Pod)",
    "$100,000+ (Full Enterprise Transformation)",
  ];

  const timelineOptions = [
    "Immediate (Next 1-2 Weeks)",
    "Within 1 Month",
    "Next Quarter (Q4/Q1)",
    "Flexible / Exploring Feasibility",
  ];

  const handleNext = () => {
    setErrorMsg("");
    if (step === 1 && !formData.projectType) {
      setErrorMsg("Please select a capability focus.");
      return;
    }
    if (step === 2 && !formData.hostingTarget) {
      setErrorMsg("Please choose your target deployment environment.");
      return;
    }
    if (step === 3 && (!formData.budget || !formData.timeline)) {
      setErrorMsg("Please choose budget and timeline options.");
      return;
    }
    setStep((prev) => Math.min(prev + 1, 4));
  };

  const handleBack = () => {
    setErrorMsg("");
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.company) {
      setErrorMsg("Please fill in your name, company, and corporate email.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          company: formData.company,
          projectType: formData.projectType,
          description: formData.description || `Configured via Onboarding Wizard. Target: ${formData.hostingTarget}. Budget: ${formData.budget}`,
          budget: formData.budget,
          timeline: formData.timeline,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setIsCompleted(true);
        try {
          confetti({
            particleCount: 120,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#FF2929", "#ffffff", "#C81020"],
          });
        } catch {
          // ignore if canvas blocked
        }
      } else {
        setErrorMsg(data.message || "Submission failed. Please check inputs.");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-accent mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Interactive Sprint Configurator
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-[1.1] mb-4">
            Scope Your AI Sprint Pod
          </h1>
          <p className="text-sm sm:text-base text-text-secondary max-w-xl mx-auto">
            Select your architectural goals and technical requirements to receive a customized sprint roadmap within 48 hours.
          </p>
        </div>

        {/* Wizard Container */}
        <div className="rounded-3xl bg-surface/90 border border-white/10 p-6 sm:p-10 backdrop-blur-2xl shadow-card relative overflow-hidden">
          
          {/* Progress Indicator */}
          {!isCompleted && (
            <div className="mb-10">
              <div className="flex items-center justify-between text-xs font-mono text-text-muted mb-3">
                <span className="text-accent font-bold">Step 0{step} of 04</span>
                <span>
                  {step === 1 && "Core Capability Focus"}
                  {step === 2 && "Deployment & Infrastructure"}
                  {step === 3 && "Budget & Delivery Cadence"}
                  {step === 4 && "Contact & Team Brief"}
                </span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-accent"
                  initial={{ width: "25%" }}
                  animate={{ width: `${(step / 4) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          )}

          {errorMsg && (
            <div className="mb-6 p-4 rounded-xl bg-red-950/40 border border-red-500/30 text-red-300 text-xs">
              {errorMsg}
            </div>
          )}

          {/* STEP CONTENT */}
          <AnimatePresence mode="wait">
            {isCompleted ? (
              <motion.div
                key="completed"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-6"
              >
                <div className="w-20 h-20 rounded-full bg-accent/20 border border-accent/50 flex items-center justify-center text-accent mx-auto shadow-glow">
                  <PartyPopper className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-extrabold font-display text-white">
                  Sprint Pod Request Initialized!
                </h2>
                <p className="text-sm sm:text-base text-text-secondary max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{formData.fullName}</span>. Your technical scope for <span className="text-accent">{formData.projectType}</span> has been routed to our Lead AI Architect.
                </p>
                <div className="p-6 rounded-2xl bg-surface-elevated border border-white/10 max-w-lg mx-auto text-left space-y-2 text-xs font-mono">
                  <div className="text-text-muted uppercase text-[10px] tracking-wider mb-2">
                    Scope Confirmation Summary:
                  </div>
                  <div className="text-text-secondary">
                    Company: <span className="text-white">{formData.company}</span>
                  </div>
                  <div className="text-text-secondary">
                    Environment: <span className="text-white">{formData.hostingTarget}</span>
                  </div>
                  <div className="text-text-secondary">
                    Sprint Budget: <span className="text-white">{formData.budget}</span>
                  </div>
                  <div className="text-text-secondary">
                    Target Timeline: <span className="text-white">{formData.timeline}</span>
                  </div>
                </div>

                <div className="pt-4 flex justify-center gap-4">
                  <Link
                    href="/"
                    className="px-8 py-3.5 rounded-full bg-accent hover:bg-accent-crimson text-white font-bold text-xs shadow-glow transition-all"
                  >
                    Return to Homepage
                  </Link>
                </div>
              </motion.div>
            ) : (
              <div>
                {/* STEP 1: Capability Focus */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-bold font-display text-white mb-2">
                      Select your primary AI initiative:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {projectTypes.map((pt) => {
                        const Icon = pt.icon;
                        const isSelected = formData.projectType === pt.title;
                        return (
                          <div
                            key={pt.title}
                            onClick={() => setFormData({ ...formData, projectType: pt.title })}
                            className={`p-5 rounded-2xl cursor-pointer border transition-all text-left flex flex-col justify-between ${
                              isSelected
                                ? "bg-surface-elevated border-accent shadow-[0_0_20px_rgba(255,41,41,0.2)]"
                                : "bg-black/30 border-white/10 hover:border-white/30"
                            }`}
                          >
                            <div className="flex items-center justify-between mb-3">
                              <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${isSelected ? "bg-accent text-white" : "bg-white/5 text-text-secondary"}`}>
                                <Icon className="w-5 h-5" />
                              </div>
                              {isSelected && <Check className="w-4 h-4 text-accent" />}
                            </div>
                            <div>
                              <h4 className="text-sm font-bold font-display text-white mb-1">
                                {pt.title}
                              </h4>
                              <p className="text-xs text-text-secondary leading-relaxed">
                                {pt.desc}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: Hosting & Infrastructure */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-bold font-display text-white mb-2">
                      Where will your models and data live?
                    </h3>
                    <div className="space-y-3">
                      {hostingTargets.map((target) => {
                        const isSelected = formData.hostingTarget === target;
                        return (
                          <div
                            key={target}
                            onClick={() => setFormData({ ...formData, hostingTarget: target })}
                            className={`p-4 rounded-2xl cursor-pointer border transition-all flex items-center justify-between ${
                              isSelected
                                ? "bg-surface-elevated border-accent shadow-glow-sm"
                                : "bg-black/30 border-white/10 hover:border-white/30"
                            }`}
                          >
                            <span className="text-sm font-medium text-white">{target}</span>
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${isSelected ? "border-accent bg-accent" : "border-white/20"}`}>
                              {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: Budget & Timeline */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div>
                      <h3 className="text-lg font-bold font-display text-white mb-3">
                        Estimated Budget Allocation:
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {budgetOptions.map((b) => (
                          <div
                            key={b}
                            onClick={() => setFormData({ ...formData, budget: b })}
                            className={`p-4 rounded-xl cursor-pointer border text-xs font-mono transition-all ${
                              formData.budget === b
                                ? "bg-surface-elevated border-accent text-white shadow-glow-sm"
                                : "bg-black/30 border-white/10 text-text-secondary hover:text-white"
                            }`}
                          >
                            {b}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold font-display text-white mb-3">
                        Target Launch Timeline:
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {timelineOptions.map((t) => (
                          <div
                            key={t}
                            onClick={() => setFormData({ ...formData, timeline: t })}
                            className={`p-4 rounded-xl cursor-pointer border text-xs font-mono transition-all ${
                              formData.timeline === t
                                ? "bg-surface-elevated border-accent text-white shadow-glow-sm"
                                : "bg-black/30 border-white/10 text-text-secondary hover:text-white"
                            }`}
                          >
                            {t}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: Contact & Project Brief */}
                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-bold font-display text-white mb-2">
                      Where should our architecture team send your sprint proposal?
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-text-secondary mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Elena Rostova"
                          className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-white/10 text-white text-sm focus:border-accent focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-text-secondary mb-1">
                          Corporate Email *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="elena@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-white/10 text-white text-sm focus:border-accent focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-text-secondary mb-1">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Apex Synthetic Labs"
                        className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-white/10 text-white text-sm focus:border-accent focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-text-secondary mb-1">
                        Additional Technical Details or Specific Model Requirements (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        placeholder="Share any context about existing data sources, APIs, compliance constraints..."
                        className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-white/10 text-white text-sm focus:border-accent focus:outline-none"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Navigation Buttons */}
                <div className="mt-10 pt-6 border-t border-white/[0.08] flex items-center justify-between">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-5 py-2.5 rounded-full bg-surface-elevated border border-white/10 text-xs text-text-secondary hover:text-white transition-colors flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 4 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-7 py-3 rounded-full bg-accent hover:bg-accent-crimson text-white font-bold text-xs shadow-glow-sm hover:shadow-glow transition-all flex items-center gap-2"
                    >
                      <span>Continue to Step 0{step + 1}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="px-8 py-3.5 rounded-full bg-accent hover:bg-accent-crimson disabled:opacity-50 text-white font-bold text-xs shadow-glow transition-all flex items-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Generating Sprint Scope...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Sprint Request</span>
                          <Sparkles className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </div>
  );
}
