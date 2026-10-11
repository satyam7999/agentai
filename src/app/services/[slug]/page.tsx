import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Layers, Zap } from "lucide-react";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props) {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | AgentAI Services`,
    description: service.shortDescription,
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Back Link */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-white transition-colors mb-10"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-accent" />
          <span>Back to All Capabilities</span>
        </Link>

        {/* Header Pill & Title */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/25">
              {service.eyebrow}
            </span>
            <span className="text-xs font-mono text-text-muted">
              Estimated Timeline: {service.timeline}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold font-display text-white tracking-tight leading-[1.08] mb-6">
            {service.title}
          </h1>

          <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-3xl">
            {service.fullDescription}
          </p>
        </div>

        {/* High-Impact Stat Callout Banner */}
        <div className="p-8 rounded-3xl bg-surface/80 border border-white/10 backdrop-blur-xl mb-14 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-xs font-mono text-text-muted uppercase">Target Benchmark</div>
            <div className="text-3xl font-extrabold font-display text-accent">
              {service.highlightMetric}
            </div>
            <div className="text-xs text-text-secondary">
              Achieved through our dedicated senior sprint pods
            </div>
          </div>

          <Link
            href={`/start-project?service=${service.slug}`}
            className="flex-shrink-0 px-8 py-4 rounded-full bg-accent hover:bg-accent-crimson text-white font-bold text-sm shadow-glow transition-all"
          >
            Initiate Sprint Inquiry &rarr;
          </Link>
        </div>

        {/* Deliverables Deep Dive */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold font-display text-white mb-6 flex items-center gap-2.5">
            <Layers className="w-5 h-5 text-accent" />
            Verified Sprint Deliverables
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.deliverables.map((del, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-surface-elevated/70 border border-white/[0.08] flex items-start gap-3.5"
              >
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-text-primary leading-relaxed font-medium">
                  {del}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold font-display text-white mb-6 flex items-center gap-2.5">
            <Zap className="w-5 h-5 text-accent" />
            Real-World Production Scenarios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.useCases.map((uc, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-surface/50 border border-white/[0.08] space-y-2"
              >
                <h3 className="text-base font-bold font-display text-white text-accent">
                  {uc.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {uc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Mesh */}
        <div className="mb-16">
          <h2 className="text-xl font-bold font-display text-white mb-4">
            Engineered With Frontier Technology
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {service.techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="p-10 rounded-3xl bg-gradient-to-r from-surface to-surface-elevated border border-accent/30 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Ready to deploy {service.title}?
          </h3>
          <p className="text-sm text-text-secondary max-w-lg mx-auto">
            Book an architecture consultation with our engineering team to review technical feasibility and sprint scope.
          </p>
          <Link
            href={`/start-project?service=${service.slug}`}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent hover:bg-accent-crimson text-white font-bold text-sm shadow-glow transition-all"
          >
            <span>Start Sprint Onboarding</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
