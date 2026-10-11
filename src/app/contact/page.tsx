"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormValues } from "@/lib/validation";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2, Mail, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMessage, setResponseMessage] = useState<string>("");
  const [referenceId, setReferenceId] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      projectType: "Custom AI Agents",
      description: "",
      budget: "$25,000 - $50,000",
      timeline: "Within 1 Month",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSubmissionStatus("loading");
    setResponseMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setSubmissionStatus("success");
        setResponseMessage(result.message);
        setReferenceId(result.metadata?.referenceId || "AGY-PROD");
        reset();
      } else {
        setSubmissionStatus("error");
        setResponseMessage(result.message || "Something went wrong. Please check your submission.");
      }
    } catch {
      setSubmissionStatus("error");
      setResponseMessage("Network error. Please try again or email us directly at sprints@agentai.agency");
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-accent mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Direct Engagement
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-display text-white tracking-tight leading-[1.08] mb-6">
            Initiate An AI Sprint Inquiry
          </h1>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            Fill out the technical brief below. A principal AI architect will assess your stack and schedule a 30-minute discovery session with your engineering leads.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-surface/80 border border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-2xl shadow-card">
            
            {submissionStatus === "success" ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent mx-auto shadow-glow">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-display text-white">
                  Sprint Brief Successfully Logged
                </h3>
                <p className="text-sm text-text-secondary max-w-md mx-auto leading-relaxed">
                  {responseMessage}
                </p>
                <div className="p-4 rounded-xl bg-surface-elevated border border-white/10 inline-block font-mono text-xs text-text-muted">
                  Reference Tracking Code: <span className="text-accent font-bold">{referenceId}</span>
                </div>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmissionStatus("idle")}
                    className="px-6 py-2.5 rounded-full bg-surface-elevated hover:bg-surface border border-white/15 text-xs text-white font-medium transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                
                {submissionStatus === "error" && (
                  <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/40 text-red-300 text-xs flex items-center gap-2.5">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{responseMessage}</span>
                  </div>
                )}

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-text-secondary mb-2 uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      {...register("fullName")}
                      type="text"
                      placeholder="e.g. Elena Rostova"
                      className={`w-full px-4 py-3 rounded-xl bg-surface-elevated border text-white text-sm focus:outline-none focus:border-accent transition-colors ${
                        errors.fullName ? "border-red-500/60" : "border-white/10"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-text-secondary mb-2 uppercase tracking-wider">
                      Corporate Email *
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="elena@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-surface-elevated border text-white text-sm focus:outline-none focus:border-accent transition-colors ${
                        errors.email ? "border-red-500/60" : "border-white/10"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Company & Project Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-text-secondary mb-2 uppercase tracking-wider">
                      Company / Organization *
                    </label>
                    <input
                      {...register("company")}
                      type="text"
                      placeholder="e.g. Apex Synthesis"
                      className={`w-full px-4 py-3 rounded-xl bg-surface-elevated border text-white text-sm focus:outline-none focus:border-accent transition-colors ${
                        errors.company ? "border-red-500/60" : "border-white/10"
                      }`}
                    />
                    {errors.company && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.company.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-text-secondary mb-2 uppercase tracking-wider">
                      Project Type *
                    </label>
                    <select
                      {...register("projectType")}
                      className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-white/10 text-white text-sm focus:outline-none focus:border-accent transition-colors"
                    >
                      <option value="Custom AI Agents">Custom AI Agents & Swarms</option>
                      <option value="AI Product Development">AI Product Development</option>
                      <option value="Computer Vision">Computer Vision & Robotics</option>
                      <option value="Machine Learning Solutions">Machine Learning & Custom Weights</option>
                      <option value="Workflow Automation">Cognitive Workflow Automation</option>
                      <option value="AI Strategy & Mapping">AI Strategy & Architecture Audit</option>
                      <option value="Generative AI Integration">Generative AI Integration</option>
                      <option value="Other">Custom AI Engagement</option>
                    </select>
                  </div>
                </div>

                {/* Budget & Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-text-secondary mb-2 uppercase tracking-wider">
                      Estimated Budget Range *
                    </label>
                    <select
                      {...register("budget")}
                      className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-white/10 text-white text-sm focus:outline-none focus:border-accent transition-colors"
                    >
                      <option value="< $25,000">Under $25,000 (Rapid PoC)</option>
                      <option value="$25,000 - $50,000">$25,000 — $50,000 (Standard Sprint)</option>
                      <option value="$50,000 - $100,000">$50,000 — $100,000 (Multi-Sprint Pod)</option>
                      <option value="$100,000+">$100,000+ (Enterprise Transformation)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-text-secondary mb-2 uppercase tracking-wider">
                      Target Timeline *
                    </label>
                    <select
                      {...register("timeline")}
                      className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-white/10 text-white text-sm focus:outline-none focus:border-accent transition-colors"
                    >
                      <option value="Immediate (< 2 Weeks)">Immediate (Next 2 Weeks)</option>
                      <option value="Within 1 Month">Within 1 Month</option>
                      <option value="Q4/Q1 Roadmap">Upcoming Quarter</option>
                      <option value="Exploratory">Exploratory / Discovery</option>
                    </select>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-xs font-mono text-text-secondary mb-2 uppercase tracking-wider">
                    Project Objective & Problem Description *
                  </label>
                  <textarea
                    {...register("description")}
                    rows={4}
                    placeholder="Describe your current bottlenecks, target model integrations, expected user volume, or architectural goals..."
                    className={`w-full px-4 py-3 rounded-xl bg-surface-elevated border text-white text-sm focus:outline-none focus:border-accent transition-colors ${
                      errors.description ? "border-red-500/60" : "border-white/10"
                    }`}
                  />
                  {errors.description && (
                    <p className="text-[11px] text-red-400 mt-1">{errors.description.message}</p>
                  )}
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={submissionStatus === "loading"}
                  className="w-full py-4 rounded-full bg-accent hover:bg-accent-crimson disabled:opacity-50 text-white font-bold text-sm shadow-glow flex items-center justify-center gap-2 transition-all duration-300"
                >
                  {submissionStatus === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Inquiry to Architecture Pod...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Inquiry to Principal Architects</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-text-muted pt-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                  <span>Submissions protected under Mutual Non-Disclosure Agreement</span>
                </div>
              </form>
            )}

          </div>

          {/* Right Column: Contact Details & SLA */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-surface/50 border border-white/10 space-y-6">
              <h3 className="text-xl font-bold font-display text-white">
                Direct Communications
              </h3>

              <div className="space-y-4 text-sm text-text-secondary">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-white font-medium">Headquarters</div>
                    <div className="text-xs text-text-muted">
                      1250 René-Lévesque Blvd W, Montreal, QC H3B 4W8, Canada
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-white font-medium">Sprint Inquiries</div>
                    <div className="text-xs text-text-muted font-mono">
                      sprints@agentai.agency
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-white font-medium">Guaranteed Response</div>
                    <div className="text-xs text-text-muted">
                      Every submission is reviewed by a Senior AI Engineer within 24-48 business hours.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fast Track Alternative Link */}
            <div className="p-8 rounded-3xl bg-surface-elevated/80 border border-accent/25 space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-accent">
                Interactive Wizard
              </span>
              <h4 className="text-lg font-bold font-display text-white">
                Prefer a guided multi-step onboarding?
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                Use our dynamic 4-step Sprint Configurator to scope deliverables, timeline, and compute tiers step-by-step.
              </p>
              <Link
                href="/start-project"
                className="inline-flex items-center gap-2 text-xs font-bold text-accent hover:underline pt-1"
              >
                <span>Launch Multi-Step Project Onboarding &rarr;</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
