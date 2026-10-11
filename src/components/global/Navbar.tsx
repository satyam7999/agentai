"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Command } from "lucide-react";
import { navItems } from "@/data/navigation";

interface NavbarProps {
  onOpenCommandPalette?: () => void;
}

export default function Navbar({ onOpenCommandPalette }: NavbarProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-[#050505]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2.5 relative z-10">
            <div className="w-8 h-8 rounded-lg bg-surface border border-white/15 flex items-center justify-center relative overflow-hidden group-hover:border-accent/60 transition-colors">
              <span className="w-2.5 h-2.5 rounded-full bg-accent shadow-glow group-hover:scale-125 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex items-baseline tracking-tight">
              <span className="text-xl font-bold tracking-tight text-white font-display">
                AGENT<span className="text-accent">AI</span>
              </span>
              <span className="ml-1.5 text-[9px] font-mono uppercase tracking-widest text-text-secondary border border-white/10 rounded px-1 py-0.2">
                AGY
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-surface/70 border border-white/[0.08] rounded-full px-4 py-1.5 backdrop-blur-lg">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-1.5 text-sm font-medium transition-colors rounded-full ${
                    isActive
                      ? "text-white"
                      : "text-text-secondary hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-accent/15 border border-accent/40 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action / CTA */}
          <div className="hidden md:flex items-center gap-3">
            {onOpenCommandPalette && (
              <button
                onClick={onOpenCommandPalette}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-elevated/60 border border-white/[0.08] text-text-secondary text-xs hover:border-white/20 hover:text-white transition-colors"
                title="Search agency docs and services (Cmd+K)"
              >
                <Command className="w-3.5 h-3.5 text-accent" />
                <span className="font-mono text-[11px]">⌘K</span>
              </button>
            )}

            <Link
              href="/start-project"
              className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent hover:bg-accent-crimson text-white text-sm font-semibold shadow-glow-sm hover:shadow-glow transition-all duration-300"
            >
              <span>Start Project</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-surface border border-white/10 text-white hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[70px] z-40 bg-[#050505]/95 backdrop-blur-2xl border-b border-white/10 md:hidden p-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="text-xs uppercase tracking-widest text-text-muted font-mono mb-2">
                Navigation
              </div>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-3 text-2xl font-display font-semibold transition-colors border-b border-white/[0.05] ${
                    pathname === item.href
                      ? "text-accent"
                      : "text-white hover:text-accent"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10 space-y-4">
              <Link
                href="/start-project"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-accent text-white font-semibold shadow-glow"
              >
                <span>Start Project</span>
                <ArrowUpRight className="w-5 h-5" />
              </Link>

              <div className="flex items-center justify-between text-xs text-text-secondary pt-2">
                <span>Montreal, QC • Available</span>
                <span className="flex items-center gap-1 text-accent">
                  <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                  Q4/Q1 Booking
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
