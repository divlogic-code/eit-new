// Real placement activity content belongs here.

import type { ImageAsset } from "@/types";

export type PlacementActivityKind =
  | "industrial-visit"
  | "expert-lecture"
  | "hr-conclave"
  | "job-fair"
  | "skill-development";

export interface PlacementActivity {
  id: string;
  kind: PlacementActivityKind;
  title: string;
  date?: string;
  description?: string;
  images?: ImageAsset[];
}

const jobFairImages: ImageAsset[] = [
  {
    src: "/images/placements/job-fair/1.jpg",
    alt: "Mega Job Fair at Echelon Institute of Technology",
  },
  {
    src: "/images/placements/job-fair/2.jpg",
    alt: "Recruiters and students participating in the Mega Job Fair",
  },
  {
    src: "/images/placements/job-fair/3.jpg",
    alt: "Students interacting with recruiters at the job fair",
  },
  {
    src: "/images/placements/job-fair/4.jpg",
    alt: "Recruitment activities during the EIT Mega Job Fair",
  },
  {
    src: "/images/placements/job-fair/5.jpg",
    alt: "Recruiters meeting prospective candidates",
  },
  {
    src: "/images/placements/job-fair/6.jpg",
    alt: "Students exploring employment opportunities",
  },
  {
    src: "/images/placements/job-fair/7.jpg",
    alt: "Mega Job Fair event at Echelon Institute of Technology",
  },
  {
    src: "/images/placements/job-fair/8.jpg",
    alt: "Participants at the EIT Mega Job Fair",
  },
];


export const placementActivities: PlacementActivity[] = [
  {
    id: "eit-mega-job-fair",
    kind: "job-fair",
    title: "Mega Job Fair",
    description:
      "Echelon Institute of Technology (EIT) proudly hosted a Mega Job Fair, reaffirming its commitment to bridging the gap between academic learning and industry employment. This large-scale event served as a dynamic platform where over 50 renowned companies across diverse sectors came together to connect with EIT's talented and job-ready graduates.\n\nDesigned with the vision of ensuring meaningful employment opportunities for students completing their courses, the fair was a hub of interactions, on-the-spot interviews, and offer rollouts. The initiative showcased EIT's proactive approach in aligning its academic environment with real-world industry expectations.\n\nBeyond just placements, the event fostered career guidance, resume-building sessions, and expert talks, empowering students to make informed career choices. The overwhelming response from both recruiters and participants marked the fair as a grand success.\n\nEIT is proud to institutionalize this Mega Job Fair as an annual flagship event, continuously striving to enhance student employability through industry collaboration with more than 100 companies for employment opportunities.",
    images: jobFairImages,
  },
  {
    id: "eit-skill-development",
    kind: "skill-development",
    title: "Skill Development",
    description:
      "The Skill Development Department serves as a dynamic engine powering student transformation from academic learners into industry-ready professionals. Supporting B.Tech, MBA, BBA, MCA, and BCA programs, this department empowers students with the future-facing skills demanded by today's competitive job market.\n\n21st Century Soft Skills Development: Through high-impact training in communication, leadership, teamwork, emotional intelligence, and public speaking, students build a personal brand that shines in interviews and the workplace.\n\nEarly Immersion in Emerging Technologies: Hands-on workshops and lab sessions introduce students to cutting-edge tools and frameworks, ensuring they stay ahead in rapidly evolving fields.",
  },
];
