
import type { CallToAction } from "@/types";

export interface SlideshowSection {
  eyebrow: string;
  /** One entry per line. */
  title: string[];
  description: string;
  /** Time each slide stays on screen, in milliseconds. */
  intervalMs: number;
  action?: CallToAction;
}

export const centresSection: SlideshowSection = {
  eyebrow: "Centres of Excellence",
  title: ["Centres of", "Excellence"],
  description:
    "Dedicated spaces where students and faculty learn by building, testing and innovating.",
  intervalMs: 6500,
  action: {
    label: "Explore All Centres",
    href: "/centres",
  },
};

/**
 * Featured centres displayed on the homepage.
 * IDs must match those in data/centres/centres.ts.
 */
export const featuredCentreIds: string[] = [
  "amazon",
  "apple",
  "microsoft",
  "google",
  "ibm",
  "nvdia",
  "salesforce",
  "oracle",
];
