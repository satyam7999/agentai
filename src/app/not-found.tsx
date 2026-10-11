import React from "react";
import Link from "next/link";
import { ArrowLeft, Bot } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-20">
      <div className="w-16 h-16 rounded-2xl bg-surface-elevated border border-accent/40 flex items-center justify-center text-accent mb-6 shadow-glow">
        <Bot className="w-8 h-8" />
      </div>

      <div className="text-xs font-mono uppercase tracking-widest text-accent mb-2">
        Error 404 // Node Not Found
      </div>

      <h1 className="text-4xl sm:text-6xl font-extrabold font-display text-white mb-4">
        Page Outside Agent Graph
      </h1>

      <p className="text-sm sm:text-base text-text-secondary max-w-md mb-8">
        The requested pathway does not exist in the AgentAI neural cluster. Return to the homepage or search via the command palette.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-accent hover:bg-accent-crimson text-white text-xs font-bold shadow-glow transition-all"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Return to Homepage</span>
      </Link>
    </div>
  );
}
