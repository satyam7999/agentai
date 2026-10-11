"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight, Bot, Briefcase } from "lucide-react";
import { servicesData } from "@/data/services";
import { projectsData } from "@/data/projects";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // parent handles toggle
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const filteredServices = servicesData.filter((s) =>
    s.title.toLowerCase().includes(query.toLowerCase()) ||
    s.shortDescription.toLowerCase().includes(query.toLowerCase())
  );

  const filteredProjects = projectsData.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="relative w-full max-w-2xl bg-[#0d0d0d] border border-white/15 rounded-2xl shadow-[0_20px_70px_rgba(255,41,41,0.15)] overflow-hidden z-10"
        >
          {/* Search Input Bar */}
          <div className="flex items-center px-4 border-b border-white/10 bg-[#121212]">
            <Search className="w-5 h-5 text-accent mr-3" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services, case studies, technologies, or pages..."
              autoFocus
              className="w-full py-4 bg-transparent text-white placeholder-text-muted focus:outline-none text-sm font-sans"
            />
            <button
              onClick={onClose}
              className="p-1 rounded-md text-text-muted hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Results List */}
          <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6">
            {/* Quick Links */}
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-text-muted px-2 mb-2">
                Core Pages
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    router.push("/start-project");
                    onClose();
                  }}
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-surface hover:bg-surface-elevated border border-white/5 hover:border-accent/30 text-left transition-colors group"
                >
                  <Bot className="w-4 h-4 text-accent" />
                  <div>
                    <div className="text-xs font-semibold text-white group-hover:text-accent">
                      Start AI Sprint
                    </div>
                    <div className="text-[10px] text-text-muted">Onboard in 3 mins</div>
                  </div>
                </button>
                <button
                  onClick={() => {
                    router.push("/works");
                    onClose();
                  }}
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-surface hover:bg-surface-elevated border border-white/5 hover:border-accent/30 text-left transition-colors group"
                >
                  <Briefcase className="w-4 h-4 text-accent" />
                  <div>
                    <div className="text-xs font-semibold text-white group-hover:text-accent">
                      Portfolio & Works
                    </div>
                    <div className="text-[10px] text-text-muted">Explore deployments</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Services */}
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-text-muted px-2 mb-2">
                AI Services ({filteredServices.length})
              </div>
              <div className="space-y-1">
                {filteredServices.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => {
                      router.push(`/services/${service.slug}`);
                      onClose();
                    }}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-white/[0.04] text-left transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <div>
                        <div className="text-xs font-semibold text-white group-hover:text-accent">
                          {service.title}
                        </div>
                        <div className="text-[11px] text-text-secondary truncate max-w-md">
                          {service.shortDescription}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-text-muted group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>

            {/* Case Studies */}
            {filteredProjects.length > 0 && (
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-text-muted px-2 mb-2">
                  Featured Case Studies ({filteredProjects.length})
                </div>
                <div className="space-y-1">
                  {filteredProjects.map((project) => (
                    <button
                      key={project.id}
                      onClick={() => {
                        router.push(`/works/${project.slug}`);
                        onClose();
                      }}
                      className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-white/[0.04] text-left transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-surface-elevated border border-white/10 text-text-secondary">
                          {project.category}
                        </span>
                        <div>
                          <div className="text-xs font-semibold text-white group-hover:text-accent">
                            {project.title}
                          </div>
                          <div className="text-[11px] text-text-muted">
                            Client: {project.client}
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-text-muted group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer note */}
          <div className="p-3 bg-[#0a0a0a] border-t border-white/10 flex items-center justify-between text-[11px] text-text-muted">
            <span className="flex items-center gap-1 font-mono">
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white text-[10px]">ESC</kbd> to close
            </span>
            <span className="font-mono text-accent">AgentAI Command Mesh v2.4</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
