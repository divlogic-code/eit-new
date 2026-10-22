// Campus Life ("Beyond Classrooms") section.

import type { CallToAction, ImageAsset } from "@/types";

export interface CampusMoment {
  id: string;
  title: string;
  caption?: string;
  image: ImageAsset;
}

export const campusLifeSection = {
  eyebrow: "Campus Life",
  title: ["Beyond", "Classrooms"],
  description: "A vibrant campus life that inspires friendships, creativity and personal growth.",
  /** Handwritten phrase beside the photographs. */
  script: ["More", "Than", "A Campus"],
  /** Time between photograph changes, in milliseconds. */
  intervalMs: 4500,
  action: { label: "Explore Campus Life", href: "/campus-life" } as CallToAction,
};

/** Photographs for the collage. The collage shows five at a time and rotates through the rest. */
export const campusMoments: CampusMoment[] = [
  {
    id: "campus-moment-1",
    title: "Campus Life",
    caption: "Life beyond the classroom",
    image: {
      src: "/images/campus/campus-moment-1.webp",
      alt: "Students enjoying life on the EIT campus",
    },
  },
  {
    id: "campus-moment-2",
    title: "Campus Events",
    caption: "Memorable moments together",
    image: {
      src: "/images/campus/campus-moment-2.webp",
      alt: "Students participating in a campus event at EIT",
    },
  },
  {
    id: "campus-moment-3",
    title: "Student Activities",
    caption: "Learning, exploring and growing",
    image: {
      src: "/images/campus/campus-moment-3.webp",
      alt: "Students taking part in activities at EIT",
    },
  },
  {
    id: "campus-moment-4",
    title: "Sports and Recreation",
    caption: "Energy beyond academics",
    image: {
      src: "/images/campus/campus-moment-4.webp",
      alt: "Students participating in sports and recreation",
    },
  },
  {
    id: "campus-moment-5",
    title: "Campus Community",
    caption: "Connections that last",
    image: {
      src: "/images/campus/campus-moment-5.webp",
      alt: "Students gathering together on campus",
    },
  },
];
