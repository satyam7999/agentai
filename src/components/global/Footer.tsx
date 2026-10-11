import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { socialLinks } from "@/data/navigation";
import { servicesData } from "@/data/services";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.08] bg-[#030303] pt-20 pb-12 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-accent/8 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/[0.08]">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-surface border border-white/15 flex items-center justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-accent shadow-glow" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white font-display">
                AGENT<span className="text-accent">AI</span>
              </span>
            </Link>

            <p className="text-text-secondary text-sm leading-relaxed max-w-sm">
              Your AI Sprint Team on Demand. We architect, build, and deploy production-grade multi-agent swarms, predictive machine learning pipelines, and frontier AI digital products.
            </p>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-elevated border border-white/10 text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-text-secondary font-mono">Agent Core: v2.4 Active</span>
              </div>
              <span className="text-xs text-text-muted">Montreal, QC</span>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-mono text-white/70 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-text-secondary">
              {servicesData.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-accent transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-accent hover:underline flex items-center gap-1 text-xs pt-1 font-medium"
                >
                  All 8 Capabilities &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-mono text-white/70 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-text-secondary">
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About AgentAI
                </Link>
              </li>
              <li>
                <Link href="/works" className="hover:text-accent transition-colors">
                  Works & Case Studies
                </Link>
              </li>
              <li>
                <Link href="/start-project" className="hover:text-accent transition-colors">
                  Sprint Onboarding
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Direct Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect / Socials */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-mono text-white/70 mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5 text-sm text-text-secondary">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between hover:text-white transition-colors"
                  >
                    <span>{social.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-text-muted group-hover:text-accent transition-colors" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <div>
            &copy; {new Date().getFullYear()} AgentAI Studios Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-text-secondary transition-colors cursor-pointer">
              Privacy Protocol
            </span>
            <span className="hover:text-text-secondary transition-colors cursor-pointer">
              Terms of Engagement
            </span>
            <span className="hover:text-text-secondary transition-colors cursor-pointer">
              Security & SOC2 Compliance
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
