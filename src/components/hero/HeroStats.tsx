"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { heroStats, StatItem } from "@/data/stats";
import { TrendingUp } from "lucide-react";

export default function HeroStats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 mt-12 sm:mt-16 z-20"
    >
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
        {heroStats.map((stat, index) => (
          <StatCard
            key={stat.id}
            stat={stat}
            index={index}
            isInView={isInView}
          />
        ))}
      </div>
    </div>
  );
}

function StatCard({
  stat,
  index,
  isInView,
}: {
  stat: StatItem;
  index: number;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1800; // ms
    const target = stat.numericValue;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, stat.numericValue]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, borderColor: "rgba(255, 41, 41, 0.45)" }}
      className="group relative p-5 rounded-2xl bg-surface/80 border border-white/[0.08] backdrop-blur-xl transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(255,41,41,0.25)] overflow-hidden"
    >
      {/* Red ambient highlight bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-mono tracking-widest text-text-muted uppercase">
          {`0${index + 1} //`}
        </span>
        {stat.trend && (
          <span className="flex items-center gap-1 text-[10px] font-mono text-accent">
            <TrendingUp className="w-2.5 h-2.5" />
            {stat.trend}
          </span>
        )}
      </div>

      <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-white tracking-tight mb-1 group-hover:text-accent transition-colors">
        {isInView ? count : 0}
        <span className="text-accent">{stat.suffix}</span>
      </div>

      <div className="text-xs font-semibold text-text-primary mb-1">
        {stat.label}
      </div>

      <p className="text-[11px] text-text-secondary leading-relaxed line-clamp-2">
        {stat.description}
      </p>
    </motion.div>
  );
}
