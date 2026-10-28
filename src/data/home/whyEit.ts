
import type { CallToAction } from "@/types";

export interface WhyEitPoint {
  id: string;
  title: string;
  body: string;
  href: string;
  /** Pastel accent (hex) from the EIT palette. */
  accent: string;
}

export const whyEitSection = {
  eyebrow: "Why EIT",
  title: ["Reasons to", "choose EIT"],
  description:
    "Discover the technology, industry partnerships, advanced laboratories, and holistic learning experiences that make EIT different.",
  action: {
    label: "About EIT",
    href: "/about",
  } as CallToAction,
};

export const whyEitPoints: WhyEitPoint[] = [
  {
    id: "ai-campus",
    title: "AI Enabled Campus",
    body:
      "An AI-focused learning environment that encourages students to explore artificial intelligence, emerging technologies, intelligent systems, and practical innovation.",
    href: "/research",
    accent: "#CFE7EC",
  },
  {
    id: "microsoft-campus",
    title: "Microsoft Enabled Campus",
    body:
      "A technology-driven campus focused on Microsoft technologies, digital learning, industry-relevant tools, and developing future-ready technical skills.",
    href: "/centres",
    accent: "#D3E9DC",
  },
  {
    id: "ibm-partner",
    title: "Academic Partner IBM",
    body:
      "Academic collaboration with IBM to support industry-oriented learning, technical knowledge, and exposure to technologies shaping the modern professional world.",
    href: "/centres/ibm",
    accent: "#F3C4AA",
  },
  {
    id: "centres-of-excellence",
    title:
      "27+ Next-Gen Cutting-Edge Industry-Integrated Laboratories and COEs",
    body:
      "Explore industry-integrated laboratories and Centres of Excellence designed to connect classroom knowledge with emerging technologies, practical training, and innovation.",
    href: "/centres",
    accent: "#F5ED8F",
  },
  {
    id: "high-tech-labs",
    title: "90+ High-Tech Curriculum Laboratories",
    body:
      "Modern curriculum-focused laboratories provide hands-on technical experience, practical experimentation, and opportunities to apply theoretical knowledge.",
    href: "/departments",
    accent: "#C8A5C9",
  },
  {
    id: "holistic-development",
    title: "Wholesome 360° Development",
    body:
      "A balanced approach to student development through academics, leadership, sports, cultural activities, professional skills, creativity, and personal growth.",
    href: "/campus-life",
    accent: "#E79BB2",
  },
];
