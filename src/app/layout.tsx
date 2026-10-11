import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/global/AppShell";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agentai.agency"),
  title: {
    default: "AgentAI — Your AI Sprint Team On Demand | Premium AI Development Agency",
    template: "%s | AgentAI",
  },
  description:
    "An internationally recognised AI development agency. From discovery to deployment, we build autonomous multi-agent swarms, predictive machine learning pipelines, and frontier AI experiences.",
  keywords: [
    "AI Development Agency",
    "AI Sprint Team",
    "Autonomous Agents",
    "Machine Learning Solutions",
    "Computer Vision",
    "Generative AI",
    "Next.js AI Agency",
    "Montreal AI Agency"
  ],
  authors: [{ name: "AgentAI Studios Inc." }],
  openGraph: {
    title: "AgentAI — Your AI Sprint Team On Demand",
    description:
      "From discovery to deployment, we plug into your stack to prototype, validate, and launch AI experiences your users actually love.",
    url: "https://agentai.agency",
    siteName: "AgentAI",
    images: [
      {
        url: "/images/jellyfish-hero.jpg",
        width: 1200,
        height: 630,
        alt: "AgentAI Cinematic Brand",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} dark`}>
      <body className="bg-[#050505] text-white font-sans antialiased selection:bg-[#FF2929] selection:text-white">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
