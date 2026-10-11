"use client";

import React, { useState } from "react";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import InteractiveBackground from "@/components/global/InteractiveBackground";
import CommandPalette from "@/components/global/CommandPalette";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white flex flex-col justify-between selection:bg-accent selection:text-white">
      {/* Background bioluminescent particles and atmospheric glows */}
      <InteractiveBackground />

      {/* Header navigation bar */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Main page content */}
      <div className="relative z-10 flex-1">
        {children}
      </div>

      {/* Global Command Palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
