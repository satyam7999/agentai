"use client";

import React from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function JellyfishVisual() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const translateX = useTransform(smoothX, [-0.5, 0.5], [-18, 18]);
  const translateY = useTransform(smoothY, [-0.5, 0.5], [-14, 14]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[620px] aspect-square flex items-center justify-center select-none"
    >
      {/* Volumetric Red Atmospheric Underglow */}
      <div className="absolute inset-0 rounded-full bg-radial-gradient from-accent/30 via-accent/10 to-transparent blur-[80px] pointer-events-none transform scale-90 animate-pulse-slow" />

      {/* Secondary Ambient Rim Ray */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[380px] h-[380px] rounded-full bg-accent-crimson/25 blur-[95px] pointer-events-none" />

      {/* Floating 3D Jellyfish Container with Interactive Mouse Spring */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          x: translateX,
          y: translateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          y: [0, -16, 0],
          rotateZ: [0, 1.5, -1, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
          ease: "easeInOut",
        }}
        className="relative w-full h-full flex items-center justify-center z-10"
      >
        {/* Glow Ring Orbit Behind Bell */}
        <div className="absolute top-[18%] w-[260px] h-[100px] rounded-full border border-accent/20 blur-[1px] rotate-[-5deg] animate-pulse pointer-events-none" />

        {/* Jellyfish Image with Translucent Blend and Depth */}
        <div className="relative w-[92%] h-[92%] drop-shadow-[0_0_55px_rgba(255,41,41,0.65)]">
          <Image
            src="/images/jellyfish-hero.jpg"
            alt="AgentAI Bioluminescent Red Jellyfish"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 620px"
            className="object-contain mix-blend-screen scale-105 filter brightness-110 contrast-125"
          />

          {/* Bioluminescent neural highlight pulse overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-accent/10 to-transparent mix-blend-overlay pointer-events-none animate-pulse-slow" />
        </div>

        {/* Interactive glowing energy core dot */}
        <div className="absolute top-[28%] left-[50%] -translate-x-1/2 w-4 h-4 rounded-full bg-white shadow-[0_0_24px_10px_rgba(255,41,41,0.9)] animate-ping pointer-events-none opacity-70" />
      </motion.div>
    </div>
  );
}
