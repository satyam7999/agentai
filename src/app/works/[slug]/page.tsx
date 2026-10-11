import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import { ArrowLeft, CheckCircle2, Cpu } from "lucide-react";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return projectsData.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props) {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return { title: "Case Study Not Found" };
  return {
    title: `${project.title} — Case Study | AgentAI`,
    description: project.summary,
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Back Link */}
        <Link
          href="/works"
          className="inline-flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-white transition-colors mb-10"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-accent" />
          <span>Back to All Case Studies</span>
        </Link>

        {/* Header Metadata */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/25">
              {project.category}
            </span>
            <span className="text-xs font-mono text-text-muted">
              Client: {project.client} • {project.year}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold font-display text-white tracking-tight leading-[1.08] mb-6">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-3xl">
            {project.summary}
          </p>
        </div>

        {/* Hero Visual Display */}
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-white/15 bg-black shadow-card mb-12">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1000px"
            className="object-cover filter contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>

        {/* Production Metrics Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          {project.metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-surface/90 border border-white/10 text-center"
            >
              <div className="text-3xl sm:text-4xl font-extrabold font-display text-accent mb-1">
                {m.value}
              </div>
              <div className="text-xs text-text-secondary font-mono">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Overview & Context */}
        <div className="mb-16 space-y-6">
          <h2 className="text-2xl font-bold font-display text-white">Project Overview</h2>
          <p className="text-base text-text-secondary leading-relaxed">
            {project.fullOverview}
          </p>
        </div>

        {/* Challenge vs Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-3xl bg-surface/60 border border-white/10 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-rose-400">
              The Engineering Challenge
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-surface-elevated/70 border border-accent/30 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-accent">
              The AgentAI Architecture
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Architectural Highlights */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold font-display text-white mb-6 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-accent" />
            Key System Architectural Milestones
          </h2>
          <div className="space-y-3">
            {project.architecturalHighlights.map((hl, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-surface/40 border border-white/[0.06] flex items-center gap-3.5"
              >
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm text-text-primary">{hl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Used */}
        <div className="mb-16">
          <h2 className="text-lg font-bold font-display text-white mb-4">
            Technology Stack & Frameworks
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-3.5 py-1.5 rounded-xl bg-white/[0.05] border border-white/10 text-xs font-mono text-text-secondary"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 rounded-3xl bg-surface-elevated border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold font-display text-white">
              Want similar results for your product?
            </h3>
            <p className="text-xs text-text-secondary">
              We can deploy a sprint pod focused on {project.category}.
            </p>
          </div>

          <Link
            href="/start-project"
            className="flex-shrink-0 px-6 py-3 rounded-full bg-accent hover:bg-accent-crimson text-white text-xs font-bold shadow-glow-sm hover:shadow-glow transition-all"
          >
            Start a Similar Sprint &rarr;
          </Link>
        </div>

      </div>
    </div>
  );
}
