export interface StatItem {
  id: string;
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  description: string;
  trend?: string;
}

export const heroStats: StatItem[] = [
  {
    id: "ai-processed",
    value: "3M+",
    numericValue: 3,
    suffix: "M+",
    label: "AI Processing Activity",
    description: "Daily autonomous tokens & inferences processed across enterprise workloads",
    trend: "+42% MoM",
  },
  {
    id: "client-satisfaction",
    value: "95%",
    numericValue: 95,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Net promoter score from founders, engineering VPs and product leads",
    trend: "Industry Top 1%",
  },
  {
    id: "success-rate",
    value: "88%",
    numericValue: 88,
    suffix: "%",
    label: "Project Success Metric",
    description: "Sprint deployments reaching validated production KPIs within 90 days",
    trend: "2.4x Speedup",
  },
  {
    id: "delivered-projects",
    value: "230+",
    numericValue: 230,
    suffix: "+",
    label: "Delivered Projects",
    description: "Production grade AI products, multi-agent swarms, and custom models",
    trend: "Global Reach",
  },
  {
    id: "tech-partners",
    value: "400+",
    numericValue: 400,
    suffix: "+",
    label: "Technology Ecosystem",
    description: "Integrated cloud providers, model registries, and developer tooling",
    trend: "Enterprise Ready",
  },
];

export const introHighlights = {
  availability: "Available for Q4/Q1 Sprints",
  location: "Montreal, Canada & Distributed Worldwide",
  completedSprints: "120+",
  activeEnterprises: "45+",
};
