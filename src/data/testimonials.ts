export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  metric?: string;
  metricLabel?: string;
}

export const sampleTestimonial: Testimonial = {
  id: "featured-client",
  quote:
    "AgentAI plugged into our engineering team with unprecedented velocity. Within a four-week sprint, they engineered a multi-agent orchestration layer that reduced our cognitive workload by over 70% while elevating user retention.",
  author: "Elena Rostova",
  role: "VP of Product Engineering",
  company: "Apex Synthetic Labs",
  avatar: "/images/client-portrait.jpg",
  metric: "120+",
  metricLabel: "Validated AI Sprint Deliverables",
};

export const clientLogos = [
  { name: "HyperScale AI", symbol: "◈ HYPERSCALE" },
  { name: "Apex Synthesis", symbol: "▲ APEX LABS" },
  { name: "TensorCore", symbol: "❖ TENSORCORE" },
  { name: "Vektor Dynamics", symbol: "⬡ VEKTOR" },
  { name: "QuantumMatrix", symbol: "⬢ MATRIX.AI" },
  { name: "Orbital Compute", symbol: "◎ ORBITAL" },
  { name: "Synapse Global", symbol: "◇ SYNAPSE" },
];
