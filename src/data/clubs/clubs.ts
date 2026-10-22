import type { ImageAsset } from "@/types";

export interface Club {
  id: string;
  name: string;
  summary?: string;
  logo?: ImageAsset;
  coordinators?: string[];
}

export const clubs: Club[] = [
  {
    id: "samvedna-society",
    name: "Samvedna Society",
    summary: "Community service, empathy and meaningful outreach through student-led initiatives.",
    logo: {
      src: "/images/clubs/samvedna-society.webp",
      alt: "Samvedna Society activity photograph from the original EIT website",
    },
  },
  {
    id: "technovation-club",
    name: "Technovation Club",
    summary: "Explore robotics, engineering prototypes and hands-on technical experimentation.",
    logo: {
      src: "/images/clubs/technovation-club.webp",
      alt: "Technovation Club activity photograph from the original EIT website",
    },
  },
  {
    id: "computer-club",
    name: "The Computer Club",
    summary: "Build programming skills through collaborative coding, technical learning and challenges.",
    logo: {
      src: "/images/clubs/computer-club.webp",
      alt: "The Computer Club activity photograph from the original EIT website",
    },
  },
  {
    id: "literary-society",
    name: "Literary Society",
    summary: "Celebrate expression, public speaking, creative writing and thoughtful discussion.",
    logo: {
      src: "/images/clubs/literary-society.webp",
      alt: "Literary Society activity photograph from the original EIT website",
    },
  },
  {
    id: "nss",
    name: "NSS (National Service Scheme)",
    summary: "Take part in community service, environmental awareness and social responsibility.",
    logo: {
      src: "/images/clubs/nss.webp",
      alt: "NSS (National Service Scheme) activity photograph from the original EIT website",
    },
  },
  {
    id: "yuva-kreeda-society",
    name: "Yuva Kreeda Society",
    summary: "Promote fitness, teamwork and sportsmanship through sporting activities.",
    logo: {
      src: "/images/clubs/yuva-kreeda-society.webp",
      alt: "Yuva Kreeda Society activity photograph from the original EIT website",
    },
  },
  {
    id: "kshitij-cultural-society",
    name: "Kshitij Cultural Society",
    summary: "Express creativity through music, dance, theatre and cultural performances.",
    logo: {
      src: "/images/clubs/kshitij-cultural-society.webp",
      alt: "Kshitij Cultural Society activity photograph from the original EIT website",
    },
  },
  {
    id: "ieee-student-branch",
    name: "IEEE Student Branch",
    summary: "Engage with engineering ideas, technical learning and professional development.",
    logo: {
      src: "/images/clubs/ieee-student-branch.webp",
      alt: "Illustrative EIT campus photograph for IEEE Student Branch; not verified as a club activity",
    },
  },
  {
    id: "technical-community",
    name: "Technical Community",
    summary: "Connect with fellow learners to explore coding, engineering and practical technology.",
    logo: {
      src: "/images/clubs/technical-community.webp",
      alt: "Illustrative EIT campus photograph for Technical Community; not verified as a club activity",
    },
  },
  {
    id: "innovation-entrepreneurship",
    name: "Innovation & Entrepreneurship",
    summary: "Develop creative ideas, experiment with prototypes and build an entrepreneurial mindset.",
    logo: {
      src: "/images/clubs/innovation-entrepreneurship.webp",
      alt: "Illustrative EIT campus photograph for Innovation & Entrepreneurship; not verified as a club activity",
    },
  },
  {
    id: "cultural-community",
    name: "Cultural Community",
    summary: "Discover opportunities for expression, performance and campus cultural activities.",
    logo: {
      src: "/images/clubs/cultural-community.webp",
      alt: "Illustrative EIT campus photograph for Cultural Community; not verified as a club activity",
    },
  },
];
