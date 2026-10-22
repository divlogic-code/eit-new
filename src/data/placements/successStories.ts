
import type { ImageAsset } from "@/types";

export interface SuccessStory {
  id: string;
  studentName: string;
  batch?: string;
  company: string;
  role?: string;
  story?: string;
  package?: string;
  photo?: ImageAsset;
}

export const successStories: SuccessStory[] = [
  {
    id: "yash-bedi",
    studentName: "Yash Bedi",
    company: "",
    role: "Technical Head, Sale Tax",
    package: "60+ LPA",
    photo: {
      src: "/images/placements/yash-bedi-story.webp",
      alt: "Illustrative portrait, not an actual photograph",
    },
  },
  {
    id: "mohd-sameer-ansari",
    studentName: "Mohd. Sameer Ansari",
    company: "",
    role: "Mid Senior Software Engineer",
    package: "52 LPA",
    photo: {
      src: "/images/placements/mohd-sameer-ansari-story.webp",
      alt: "Illustrative portrait, not an actual photograph",
    },
  },
  {
    id: "rama-shankar",
    studentName: "Rama Shankar",
    company: "",
    role: "Software Developer Engineer",
    package: "40+ LPA",
    photo: {
      src: "/images/placements/rama-shankar-story.webp",
      alt: "Illustrative portrait, not an actual photograph",
    },
  },
  {
    id: "arpit-kela",
    studentName: "Arpit Kela",
    company: "",
    role: "General Manager",
    package: "40+ LPA",
    photo: {
      src: "/images/placements/arpit-kela-story.webp",
      alt: "Illustrative portrait, not an actual photograph",
    },
  },
  {
    id: "romil-kumar-toom",
    studentName: "Romil Kumar Toom",
    company: "",
    role: "Inspector (Preventive Officer)",
    package: "50 LPA",
    photo: {
      src: "/images/placements/romil-kumar-toom-story.webp",
      alt: "Illustrative portrait, not an actual photograph",
    },
  },
  {
    id: "yatharth-arora",
    studentName: "Yatharth Arora",
    company: "",
    role: "Sr. Developer",
    package: "32 LPA",
    photo: {
      src: "/images/placements/yatharth-arora-story.webp",
      alt: "Illustrative portrait, not an actual photograph",
    },
  },
  {
    id: "vipin-singh",
    studentName: "Vipin Singh",
    company: "",
    role: "Sr. Developer",
    package: "32 LPA",
    photo: {
      src: "/images/placements/vipin-singh-story.webp",
      alt: "Illustrative portrait, not an actual photograph",
    },
  },
  {
    id: "rakesh-kr-sharma",
    studentName: "Rakesh Kr Sharma",
    company: "",
    role: "Sr. PHP Developer",
    package: "22+ LPA",
    photo: {
      src: "/images/placements/rakesh-kr-sharma-story.webp",
      alt: "Illustrative portrait, not an actual photograph",
    },
  },
];
