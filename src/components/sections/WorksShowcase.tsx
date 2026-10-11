"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { projectsData, projectCategories } from "@/data/projects";

export default function WorksShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="works" className="relative py-28 sm:py-36 bg-[#030303] overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent/6 blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header with Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-accent mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Verified Case Studies
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-[1.1]">
              Engineered Deployments In Production
            </h2>
          </div>

          <Link
            href="/works"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-accent transition-colors"
          >
            <span>View All Works Index</span>
            <ArrowRight className="w-4 h-4 text-accent transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Filter Pill Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-accent text-white shadow-glow-sm"
                  : "bg-surface-elevated/70 text-text-secondary hover:text-white border border-white/[0.08]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-3xl bg-surface/80 border border-white/10 hover:border-accent/40 overflow-hidden shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Preview Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95 group-hover:brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                  {/* Top Pill Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-white">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent font-semibold">
                      {project.year}
                    </span>
                  </div>

                  {/* Metrics Overlay Bar */}
                  <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2 bg-black/80 backdrop-blur-md p-3 rounded-2xl border border-white/10">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-sm sm:text-base font-bold font-display text-white group-hover:text-accent transition-colors">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-text-muted truncate">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-accent mb-2">
                      Client: {project.client}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-accent transition-colors mb-3">
                      {project.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/works/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-accent transition-colors"
                    >
                      <span>Read Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
