import type { ImageAsset } from "@/types";

export interface StudentProject {
  id: string;
  title: string;
  team: string[];
  departmentSlug?: string;
  year?: number;
  summary?: string;
  images?: ImageAsset[];
  url?: string;
}

// Innovation gallery: descriptive labels, not verified formal project titles.
// Team members and project years are omitted until confirmed.
export const studentProjects: StudentProject[] = [
  {
    id: "robotics-intelligent-systems",
    title: "Robotics & Intelligent Systems",
    team: [],
    summary: "Students exploring robotics prototypes and intelligent systems in an engineering laboratory.",
    images: [
      {
        src: "/images/students/robotics-intelligent-systems.webp",
        alt: "Students examining a robotics prototype in a laboratory",
      },
    ],
  },
  {
    id: "student-innovation-showcase",
    title: "Student Innovation Showcase",
    team: [],
    summary: "A collaborative exhibition where students present working models, discuss their ideas, and share practical demonstrations.",
    images: [
      {
        src: "/images/students/student-innovation-showcase.webp",
        alt: "Students demonstrating a technology prototype at an exhibition",
      },
    ],
  },
  {
    id: "drone-engineering-prototyping",
    title: "Drone Engineering & Prototyping",
    team: [],
    summary: "Hands-on exploration of unmanned aerial systems, from mechanical assembly to the testing of drone components.",
    images: [
      {
        src: "/images/students/drone-engineering-prototyping.webp",
        alt: "Students inspecting and assembling a multi-rotor drone",
      },
    ],
  },
  {
    id: "collaborative-robotics-development",
    title: "Collaborative Robotics Development",
    team: [],
    summary: "Team-based learning brings design, electronics, and experimentation together as students develop and explain robotic models.",
    images: [
      {
        src: "/images/students/collaborative-robotics-development.webp",
        alt: "Students presenting a small robotics model in a laboratory",
      },
    ],
  },
  {
    id: "advanced-robotics-automation",
    title: "Advanced Robotics & Automation",
    team: [],
    summary: "An opportunity to investigate robotic mechanisms, motion, and automation through practical laboratory demonstrations.",
    images: [
      {
        src: "/images/students/advanced-robotics-automation.webp",
        alt: "Students observing an advanced robotic mechanism",
      },
    ],
  },
  {
    id: "creative-models-student-exhibitions",
    title: "Creative Models & Student Exhibitions",
    team: [],
    summary: "Innovation extends beyond machines: student exhibitions provide space for research models, creative thinking, and communicating ideas visually.",
    images: [
      {
        src: "/images/students/creative-models-student-exhibitions.webp",
        alt: "Students exhibiting educational models and displays",
      },
    ],
  },
];
