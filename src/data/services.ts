export interface Service {
  id: string;
  slug: string;
  title: string;
  eyebrow: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  glowColor: string;
  accentBadge: string;
  deliverables: string[];
  techStack: string[];
  useCases: { title: string; desc: string }[];
  timeline: string;
  highlightMetric: string;
}

export const servicesData: Service[] = [
  {
    id: "strategy-mapping",
    slug: "ai-strategy-and-mapping",
    title: "AI Strategy & Mapping",
    eyebrow: "Phase 01 — Architectural Foundation",
    shortDescription: "Identify high-leverage AI opportunities, validate technical feasibility, and construct defensible multi-quarter execution roadmaps.",
    fullDescription: "Before writing code, we dissect your operational bottlenecks and product roadmap to pinpoint where intelligent systems generate exponential value. We benchmark frontier models, calculate token economics, audit proprietary datasets, and deliver an airtight technical blueprint designed for immediate sprint execution.",
    iconName: "Compass",
    glowColor: "from-red-600/30 via-rose-500/10 to-transparent",
    accentBadge: "Strategy & Audit",
    deliverables: [
      "AI Opportunity & Feasibility Matrix",
      "Model Architecture & Selection Blueprint",
      "Token Economics & Infrastructure Cost Modeling",
      "Data Readiness & Governance Assessment",
      "Phased 12-Month Tactical Sprint Roadmap"
    ],
    techStack: ["OpenAI API", "Anthropic Claude", "LangChain", "LlamaIndex", "Pinecone", "Weights & Biases"],
    useCases: [
      {
        title: "Enterprise Knowledge Retrieval",
        desc: "Transforming 200k+ siloed legal and compliance documents into sub-second verifiable query engines."
      },
      {
        title: "Proprietary Data Moat Discovery",
        desc: "Unlocking hidden value in transactional records through tailored embedding spaces."
      }
    ],
    timeline: "2 - 3 Weeks",
    highlightMetric: "4.8x ROI Projection"
  },
  {
    id: "product-development",
    slug: "ai-product-development",
    title: "AI Product Development",
    eyebrow: "Phase 02 — End-to-End Build",
    shortDescription: "Turn innovative AI concepts into polished, production-hardened web and mobile applications with world-class UX.",
    fullDescription: "We engineer full-stack AI applications combining intuitive human-in-the-loop interfaces with high-throughput backend model orchestration. From streaming generative canvases to conversational copilots, we build software users love interacting with daily.",
    iconName: "Cpu",
    glowColor: "from-crimson via-red-900/20 to-transparent",
    accentBadge: "Full-Stack Core",
    deliverables: [
      "Reactive Streaming UI / Canvas Interfaces",
      "Edge-Optimized Model Serving API Layer",
      "Multi-Modal Input (Voice, Vision, Text) Pipelines",
      "SOC2-Compliant Telemetry & User Session Auditing",
      "Automated CI/CD for Model Versioning & Fallbacks"
    ],
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "FastAPI", "PostgreSQL", "Redis", "Vercel AI SDK"],
    useCases: [
      {
        title: "Real-Time Collaborative Copilot",
        desc: "Zero-latency multi-user canvas where AI agents co-author design systems and code."
      },
      {
        title: "Autonomous Customer Experience Hub",
        desc: "Self-resolving 82% of tier-1 support tickets with multi-step reasoning agents."
      }
    ],
    timeline: "4 - 8 Weeks",
    highlightMetric: "99.9% Uptime SLA"
  },
  {
    id: "custom-ai-agents",
    slug: "custom-ai-agents",
    title: "Custom AI Agents",
    eyebrow: "Phase 03 — Autonomous Reasoning",
    shortDescription: "Autonomous multi-agent swarms equipped with tool execution, state memory, dynamic replanning, and verification loops.",
    fullDescription: "Move beyond simple one-shot chatbots. We construct goal-oriented autonomous agent swarms capable of breaking ambiguous business directives into discrete subtasks, querying disparate APIs, self-reflecting on errors, and executing complex workflows without human intervention.",
    iconName: "Bot",
    glowColor: "from-red-500/30 via-red-950 to-transparent",
    accentBadge: "Agentic Systems",
    deliverables: [
      "Dynamic Goal Decomposition & ReAct Engine",
      "Safe Sandboxed Tool & API Execution Gateway",
      "Hierarchical Long-Term Vector & Graph Memory",
      "Human-in-the-Loop Escalation & Override Protocol",
      "Comprehensive Agent Observability & Tracing Suite"
    ],
    techStack: ["LangGraph", "AutoGen", "Python 3.12", "Temporal.io", "Qdrant", "Docker Sandboxes"],
    useCases: [
      {
        title: "Financial Due Diligence Swarm",
        desc: "Automated analysis of 10-K filings, earnings calls, and news feeds in under 4 minutes."
      },
      {
        title: "Autonomous Lead Qualification Agent",
        desc: "Researches inbound leads across CRM and web sources to tailor bespoke outreach packages."
      }
    ],
    timeline: "3 - 6 Weeks",
    highlightMetric: "10x Operational Speed"
  },
  {
    id: "workflow-automation",
    slug: "workflow-automation",
    title: "Workflow Automation",
    eyebrow: "Phase 04 — Enterprise Efficiency",
    shortDescription: "Eliminate repetitive manual tasks by weaving cognitive intelligence directly into your existing enterprise pipeline.",
    fullDescription: "We transform fragmented manual processes into resilient, self-healing cognitive automations. By linking your CRM, ERP, messaging systems, and data lakes through intelligent triggers, we eliminate friction and drastically accelerate cross-team throughput.",
    iconName: "Workflow",
    glowColor: "from-rose-600/25 via-zinc-900 to-transparent",
    accentBadge: "Cognitive Pipelines",
    deliverables: [
      "Zero-Downtime Event-Driven Automation Pipelines",
      "Intelligent Document Ingestion & Extraction (OCR+LLM)",
      "Webhook & Enterprise Connector Mesh",
      "Automated Fallback & Human Escalation Triggers",
      "Executive Efficiency & Latency Dashboards"
    ],
    techStack: ["Temporal", "Kafka", "Node.js", "Make / n8n Enterprise", "Postgres", "AWS Lambda"],
    useCases: [
      {
        title: "Insurance Claim Verification",
        desc: "Ingests police reports and repair estimates, running automated fraud verification in 30 seconds."
      },
      {
        title: "Global Supply Chain Re-Routing",
        desc: "Automatically adapts inventory allocation in response to freight delay sensor signals."
      }
    ],
    timeline: "2 - 4 Weeks",
    highlightMetric: "75% Cost Reduction"
  },
  {
    id: "machine-learning-solutions",
    slug: "machine-learning-solutions",
    title: "Machine Learning Solutions",
    eyebrow: "Phase 05 — Predictive Intelligence",
    shortDescription: "Custom predictive models, anomaly detection systems, and fine-tuned open-source architectures tailored to proprietary data.",
    fullDescription: "When off-the-shelf APIs fail to hit accuracy thresholds, we train, fine-tune, and distill custom ML models tailored specifically to your data distribution. We prioritize sub-10ms inference latencies, parameter efficiency (LoRA/QLoRA), and predictable edge hosting costs.",
    iconName: "BrainCircuit",
    glowColor: "from-red-600/30 via-black to-transparent",
    accentBadge: "Custom Models",
    deliverables: [
      "Curated Dataset Cleaning & Synthetic Data Generation",
      "Model Fine-Tuning & Distillation (Llama, Mistral, Gemma)",
      "Quantization & ONNX / TensorRT Acceleration",
      "Continuous Evaluation Benchmarks & Drift Detection",
      "Self-Hosted Private VPC Serving Infrastructure"
    ],
    techStack: ["PyTorch", "Hugging Face", "vLLM", "Triton Server", "Kubernetes", "Ray"],
    useCases: [
      {
        title: "Microsecond High-Frequency Risk Engine",
        desc: "Predicting transaction fraud under 8 milliseconds with custom distilled transformer architectures."
      },
      {
        title: "Predictive Equipment Failure",
        desc: "Analyzing acoustic sensor telemetry to foresee industrial turbine degradation weeks in advance."
      }
    ],
    timeline: "4 - 8 Weeks",
    highlightMetric: "99.4% F1-Score"
  },
  {
    id: "generative-ai-integration",
    slug: "generative-ai-integration",
    title: "Generative AI Integration",
    eyebrow: "Phase 06 — Creative Multi-Modal",
    shortDescription: "Incorporate state-of-the-art multi-modal generation—synthetic voice, generative video, photorealistic imagery, and structured synthesis.",
    fullDescription: "Harness generative frontier models to supercharge creative output and digital synthesis. We orchestrate diffusion models, voice cloning, and structured JSON generation pipelines with rigorous safety boundaries and brand consistency guidelines.",
    iconName: "Sparkles",
    glowColor: "from-rose-500/35 via-zinc-950 to-transparent",
    accentBadge: "Multi-Modal GenAI",
    deliverables: [
      "Custom LoRA Styles & Visual Consistency Pipelines",
      "Ultra-Low Latency Streaming Voice Synthesis Engines",
      "Dynamic Interactive Prompt Encoders",
      "Content Moderation & Red-Teaming Safety Guardrails",
      "Multi-Modal Asset Library Architecture"
    ],
    techStack: ["ComfyUI", "Diffusers", "ElevenLabs SDK", "Deepgram", "Fal.ai", "RunPod"],
    useCases: [
      {
        title: "Hyper-Personalized Video Generation",
        desc: "Rendering dynamic 4K promotional video variations localized into 18 languages automatically."
      },
      {
        title: "Interactive Game Asset Generation",
        desc: "Real-time procedural 3D texture and dialogue generation tailored to player choices."
      }
    ],
    timeline: "3 - 5 Weeks",
    highlightMetric: "60 FPS Generation"
  },
  {
    id: "computer-vision",
    slug: "computer-vision",
    title: "Computer Vision",
    eyebrow: "Phase 07 — Spatial & Visual AI",
    shortDescription: "Spatial intelligence, real-time object detection, video analysis, 3D point-cloud processing, and OCR systems.",
    fullDescription: "Enable machines to perceive and interpret physical reality. We build edge-deployable visual inspection models, tracking systems, and spatial reasoning networks engineered to operate reliably in low-power and noisy real-world environments.",
    iconName: "Eye",
    glowColor: "from-red-600/30 via-red-950/40 to-transparent",
    accentBadge: "Vision & Edge",
    deliverables: [
      "Real-Time Object Detection & Segmentation (YOLOv10 / SAM)",
      "Edge Device Compilation (NVIDIA Jetson, Apple CoreML)",
      "3D Spatial Reconstruction & Point Cloud Meshing",
      "Video Stream Ingestion & Multi-Camera Tracking",
      "Custom Annotation Tools & Model Re-training Loops"
    ],
    techStack: ["OpenCV", "YOLOv10", "Segment Anything (SAM)", "CUDA", "TensorRT", "DeepStream"],
    useCases: [
      {
        title: "Autonomous Robotic Sorting",
        desc: "Sub-millimeter parcel orientation detection operating at 45 items per second."
      },
      {
        title: "Medical Imaging Pathology Assist",
        desc: "Microscopic cellular abnormality identification with explainable heatmaps for clinicians."
      }
    ],
    timeline: "4 - 7 Weeks",
    highlightMetric: "120 FPS Edge Speed"
  },
  {
    id: "consulting-deployment",
    slug: "ai-consulting-and-deployment",
    title: "AI Consulting & Deployment",
    eyebrow: "Phase 08 — Scale & Governance",
    shortDescription: "Hardened MLOps, private on-premise model hosting, latency optimization, and governance frameworks for enterprise scale.",
    fullDescription: "Taking models from laboratory benchmarks into mission-critical production requires resilient infrastructure. We audit security protocols, set up zero-trust model gateways, configure automated failovers, and guarantee enterprise-grade privacy and cost controls.",
    iconName: "ShieldCheck",
    glowColor: "from-red-500/25 via-zinc-950 to-transparent",
    accentBadge: "MLOps & Cloud",
    deliverables: [
      "Zero-Trust Private VPC Model Deployment (AWS, GCP, Azure)",
      "Dynamic Load Balancing & Autoscaling Cluster Provisioning",
      "Automated Prompt Injection & Jailbreak Defense Shields",
      "Latency & Cache Layer Optimization (Semantic Caching)",
      "24/7 Model Health Telemetry & PagerDuty Integration"
    ],
    techStack: ["Kubernetes", "Terraform", "ArgoCD", "Prometheus", "Grafana", "Cloudflare Workers"],
    useCases: [
      {
        title: "Banking Private AI Gateway",
        desc: "Sanitizing PII data before token forwarding, achieving compliance with strict banking secrecy laws."
      },
      {
        title: "High-Traffic E-Commerce Search",
        desc: "Vector search scaling to 45,000 requests/sec with semantic caching reducing LLM costs by 68%."
      }
    ],
    timeline: "2 - 5 Weeks",
    highlightMetric: "99.99% Availability"
  }
];
