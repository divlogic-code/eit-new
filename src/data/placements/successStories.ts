
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
    id: "Shagun-Kumari",
    studentName: "Shagun Kumari",
    company: "Snowman Logistics",
    role: "Data Analyst",
    package: "",
    photo: {
      src: "/images/placements/shagun-kumari-story.webp",
      alt: "Illustrative portrait, not an actual photograph",
    },
  },
  {
    id: "Nikita",
    studentName: "Nikita",
    company: "Sony India",
    role: "Tech Support Executive",
    package: "",
    photo: {
      src: "/images/placements/nikita-story.webp",
      alt: "Illustrative portrait, not an actual photograph",
    },
  },
  {
    id: "Yash-Tanwar",
    studentName: "Yash Tanwar",
    company: "SRF Ltd",
    role: "IT Applications Intern",
    package: "",
    photo: {
      src: "/images/placements/yash-tanwar-story.webp",
      alt: "Illustrative portrait, not an actual photograph",
    },
  },
  {
    id: "Mohak",
    studentName: "Mohak",
    company: "SRF Ltd",
    role: "IT Application Intern ",
    package: "",
    photo: {
      src: "/images/placements/mohak-story.webp",
      alt: "Illustrative portrait, not an actual photograph",
    },
  },
  {
    id: "Naina-Sharma",
    studentName: "Naina Sharma",
    company: "One Tick Technologies",
    role: "Digital Marketing Intern",
    package: "",
    photo: {
      src: "/images/placements/naina-sharma-story.webp",
      alt: "Illustrative portrait, not an actual photograph",
    },
  },
  {
    id: "Utkarsh-Yadav",
    studentName: "Utkarsh Yadav",
    company: "Vindhya Telelinks, Birla Grp",
    role: "Data Analyst Intern",
    package: "",
    photo: {
      src: "/images/placements/utkarsh-yadav-story.webp",
      alt: "Illustrative portrait, not an actual photograph",
    },
  },
  {
    id: "ayush-jha",
    studentName: "Ayush-jha",
    company: "Sofcon Systems India pvt ltd",
    role: "Digital Marketing",
    package: "",
    photo: {
      src: "/images/placements/ayush-jha-story.webp",
      alt: "Illustrative portrait, not an actual photograph",
    },
  },
];
