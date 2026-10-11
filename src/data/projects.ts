export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: "Autonomous Agents" | "Computer Vision" | "Enterprise LLM" | "Workflow Automation";
  eyebrow: string;
  summary: string;
  fullOverview: string;
  heroImage: string;
  metrics: { value: string; label: string }[];
  technologies: string[];
  challenge: string;
  solution: string;
  architecturalHighlights: string[];
  featured: boolean;
  year: string;
}

export const projectsData: Project[] = [
  {
    id: "aegis-vision-robotics",
    slug: "aegis-vision-robotics",
    title: "AEGIS Spatial Vision & Drone Telemetry",
    client: "Orbital Inspect Labs",
    category: "Computer Vision",
    eyebrow: "Sub-Millimeter Industrial Drone AI",
    summary: "Real-time edge neural inference for automated aerospace component inspection and 3D point cloud mesh validation.",
    fullOverview: "Orbital Inspect needed an autonomous drone perception system capable of detecting micro-fractures in rocket propulsion nozzles with sub-millimeter precision. AgentAI designed and deployed a custom TensorRT-quantized vision pipeline that runs directly on edge UAV compute modules.",
    heroImage: "/images/vision-case.jpg",
    metrics: [
      { value: "0.003mm", label: "Defect Detection Threshold" },
      { value: "120 FPS", label: "Edge Inference Rate" },
      { value: "94%", label: "Manual Inspection Time Saved" }
    ],
    technologies: ["YOLOv10 Custom", "TensorRT", "CUDA C++", "NVIDIA Jetson", "ROS2", "Next.js Dashboard"],
    challenge: "Off-the-shelf object detection models were too sluggish to operate on airborne drone hardware and suffered high false positives in metallic reflective environments.",
    solution: "We engineered a specialized synthetic dataset combining physical laser scans with custom raytraced lighting to fine-tune a high-speed multi-stage spatial bounding pipeline.",
    architecturalHighlights: [
      "Zero-copy frame transfer between camera sensors and onboard GPU buffers",
      "Dynamic 3D point-cloud bounding box projection with automated focal tracking",
      "Edge-to-cloud telemetry sync with automatic bandwidth throttling and offline cache"
    ],
    featured: true,
    year: "2025"
  },
  {
    id: "pulse-agent-network",
    slug: "pulse-agent-network",
    title: "PULSE Multi-Agent Reasoning Swarm",
    client: "Pelk Intelligence",
    category: "Autonomous Agents",
    eyebrow: "Cognitive Decision Matrix & Orchestration",
    summary: "Autonomous swarm architecture handling multi-step reasoning, dynamic tool execution, and self-healing logic trees for enterprise operations.",
    fullOverview: "Pelk required an autonomous decision engine capable of orchestrating complex cross-departmental operations. AgentAI built a hierarchical multi-agent framework where specialized cognitive agents collaborate, debate hypotheses, and execute verified actions with strict human oversight guards.",
    heroImage: "/images/pulse-agent-case.jpg",
    metrics: [
      { value: "2.1ms", label: "Decision Loop Latency" },
      { value: "18,450", label: "Tokens Processed / Second" },
      { value: "98.9%", label: "Autonomous Resolution Rate" }
    ],
    technologies: ["LangGraph", "Python 3.12", "FastAPI", "Temporal.io", "Qdrant Vector DB", "Tailwind CSS"],
    challenge: "Early agent prototypes suffered from hallucination cascades where a single bad tool response would derail the entire downstream pipeline.",
    solution: "We implemented an iterative consensus verification layer with automated fallback rollback, ensuring agents only commit state mutations once multiple critique agents agree.",
    architecturalHighlights: [
      "Graph-based state machine with idempotent task rollbacks",
      "Persistent session memory with semantic deduplication",
      "Real-time visual node graph dashboard showing real-time agent reasoning trees"
    ],
    featured: true,
    year: "2025"
  },
  {
    id: "strata-enterprise-nexus",
    slug: "strata-enterprise-nexus",
    title: "STRATA Enterprise AI Blueprint & Governance",
    client: "Strata Global Financial",
    category: "Enterprise LLM",
    eyebrow: "Private Model Gateway & Zero-Trust Architecture",
    summary: "Air-gapped enterprise generative AI infrastructure unifying confidential data lakes with sub-second retrieval augmented generation.",
    fullOverview: "A premier private equity institution required an institutional-grade knowledge retrieval engine to query decades of confidential transaction memorandums without risking intellectual property leakage to external public LLM APIs.",
    heroImage: "/images/strategy-case.jpg",
    metrics: [
      { value: "100%", label: "Private VPC Data Isolation" },
      { value: "450ms", label: "Semantic Search Latency" },
      { value: "8.2M", label: "Confidential Documents Indexed" }
    ],
    technologies: ["Llama 3.3 70B", "vLLM", "Milvus", "Kubernetes", "AWS GovCloud", "OpenTelemetry"],
    challenge: "Handling complex tabular balance sheets, scanned PDFs, and multi-currency footnotes with strict attribution and zero hallucination risk.",
    solution: "AgentAI deployed a dual-vector hybrid search engine combining BM25 keyword matching with custom dense financial embeddings and verifiable citation anchors.",
    architecturalHighlights: [
      "PII redaction and token sanitization proxy before prompt consumption",
      "Dynamic model routing between lightweight 8B classifiers and 70B synthesizers",
      "Audit trail logging ensuring full compliance with SOC2 Type II and SEC regulations"
    ],
    featured: true,
    year: "2024"
  },
  {
    id: "neural-mesh-pipeline",
    slug: "neural-mesh-pipeline",
    title: "Synapse Cognitive Workflow Orchestrator",
    client: "Vektor Supply Chain",
    category: "Workflow Automation",
    eyebrow: "Self-Healing Automated Enterprise Pipeline",
    summary: "Automated event-driven logistics broker converting unstructured shipper communications into validated customs declarations.",
    fullOverview: "Global logistics provider Vektor handled tens of thousands of unstructured cargo manifests and customs documents daily across 40 countries. AgentAI built a self-healing cognitive workflow mesh that processes, validates, and dispatches customs declarations in real time.",
    heroImage: "/images/intro-project.jpg",
    metrics: [
      { value: "72%", label: "Reduction in Processing Delays" },
      { value: "99.2%", label: "Field Extraction Precision" },
      { value: "$1.4M", label: "Annual Operational Savings" }
    ],
    technologies: ["Kafka", "Next.js 14", "Docker", "PyTorch OCR", "PostgreSQL", "Tailwind CSS"],
    challenge: "Handwritten bills of lading, multilingual packing slips, and varying tariff codes created massive customs clearance backlogs.",
    solution: "We combined fine-tuned vision-language models with automated schema validation gates to achieve near-instantaneous document reconciliation.",
    architecturalHighlights: [
      "Event-driven streaming queue with automated rate limiting",
      "Continuous active learning loop flagging borderline documents for single-click human sign-off",
      "Direct API integration with international customs clearing houses"
    ],
    featured: false,
    year: "2024"
  }
];

export const projectCategories = [
  "All",
  "Autonomous Agents",
  "Computer Vision",
  "Enterprise LLM",
  "Workflow Automation",
] as const;
