export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Works", href: "/works" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks = [
  { label: "X / Twitter", href: "https://twitter.com", handle: "@AgentAI_Tech" },
  { label: "GitHub", href: "https://github.com", handle: "agentai-labs" },
  { label: "LinkedIn", href: "https://linkedin.com", handle: "agentai-agency" },
  { label: "Discord", href: "https://discord.com", handle: "AgentAI Community" },
];
