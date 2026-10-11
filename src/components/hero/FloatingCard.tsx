"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FloatingCardProps {
  icon: LucideIcon;
  badge: string;
  title: string;
  metric: string;
  trend?: string;
  className?: string;
  delay?: number;
}

export default function FloatingCard({
  icon: Icon,
  badge,
  title,
  metric,
  trend,
  className = "",
  delay = 0,
}: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, scale: 1.02 }}
      className={`glass-panel rounded-2xl p-4 border border-white/10 hover:border-accent/40 shadow-card backdrop-blur-xl transition-all duration-300 ${className}`}
    >
      <div className="flex items-center justify-between gap-3 mb-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-surface-elevated border border-white/10 flex items-center justify-center text-accent">
            <Icon className="w-3.5 h-3.5" />
          </div>
          <span className="text-[11px] font-mono tracking-wider text-text-secondary uppercase">
            {badge}
          </span>
        </div>
        {trend && (
          <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-accent/15 border border-accent/30 text-accent">
            {trend}
          </span>
        )}
      </div>

      <div className="text-xs text-text-secondary mb-1">{title}</div>
      <div className="text-base font-bold font-display text-white tracking-tight flex items-baseline gap-1">
        <span>{metric}</span>
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse inline-block" />
      </div>
    </motion.div>
  );
}
