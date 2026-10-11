export * from "@/data/navigation";
export * from "@/data/services";
export * from "@/data/projects";
export * from "@/data/stats";
export * from "@/data/testimonials";
export * from "@/data/company";

export interface ProjectInquiryFormData {
  fullName: string;
  email: string;
  company: string;
  projectType: string;
  description: string;
  budget: string;
  timeline: string;
}
