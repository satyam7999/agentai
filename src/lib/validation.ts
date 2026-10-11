import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters." })
    .max(80, { message: "Name is too long." }),
  email: z
    .string()
    .email({ message: "Please provide a valid corporate email address." }),
  company: z
    .string()
    .min(2, { message: "Company or organization name is required." }),
  projectType: z.string().min(1, { message: "Please select a project type." }),
  description: z
    .string()
    .min(15, { message: "Please provide at least 15 characters describing your objective." })
    .max(2000, { message: "Project description is too long." }),
  budget: z.string().min(1, { message: "Please choose an estimated budget range." }),
  timeline: z.string().min(1, { message: "Please choose your desired timeline." }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
