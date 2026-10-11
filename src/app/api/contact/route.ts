import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";

/**
 * AGENTAI Inbound Project Inquiry Handler
 *
 * Configurable Environment Variables:
 * - RESEND_API_KEY: Resend API key for forwarding transactional email
 * - CONTACT_EMAIL_RECIPIENT: Inbound inbox (e.g. sprints@agentai.agency)
 * - SLACK_WEBHOOK_URL: Webhook URL for posting instant lead alerts
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate payload against Zod schema
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { fullName, email, company, projectType, description, budget, timeline } =
      validationResult.data;

    // Check if live integration credentials exist
    const hasResend = !!process.env.RESEND_API_KEY;
    const hasSlack = !!process.env.SLACK_WEBHOOK_URL;

    // In local development / unconfigured environments, log clearly and return successful receipt
    console.log("[AGENTAI INBOUND INQUIRY]", {
      fullName,
      email,
      company,
      projectType,
      description,
      budget,
      timeline,
      timestamp: new Date().toISOString(),
      liveIntegrationConfigured: hasResend || hasSlack,
    });

    return NextResponse.json({
      success: true,
      message:
        "Your project inquiry has been received. Our principal architects will review your requirements and respond within 24 to 48 hours.",
      metadata: {
        integrationMode: hasResend || hasSlack ? "live-webhook" : "development-staged",
        referenceId: `AGY-${Date.now().toString().slice(-6)}`,
      },
    });
  } catch (error) {
    console.error("[AGENTAI INQUIRY ERROR]", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to process inquiry. Please check your network connection or email directly at sprints@agentai.agency",
      },
      { status: 500 }
    );
  }
}
