
import type { ImageAsset } from "@/types";

export interface EitEvent {
  id: string;
  title: string;

  /** ISO date (YYYY-MM-DD), when confirmed. */
  date?: string;
  endDate?: string;

  venue?: string;
  summary?: string;
  status: "upcoming" | "past";
  image?: ImageAsset;
  departmentSlug?: string;
}

/**
 * Events section introduction.
 * Content stays here instead of being hardcoded in JSX.
 */
export const eventsIntroduction = {
  eyebrow: "BEYOND THE CLASSROOM",
  title: "Ideas in Motion. Experiences That Matter.",
  description:
    "Explore the conversations, competitions, exhibitions and campus gatherings that bring the EIT community together. From creative problem-solving to industry insights, every event is an opportunity to discover, connect and grow.",
};

/**
 * EIT campus events and activities.
 * Dates are omitted where they have not been verified.
 */
export const events: EitEvent[] = [
  {
    id: "principal-summit",
    title: "Principal Summit",
    status: "past",
    summary:
      "Bringing together academic leaders and distinguished guests to exchange ideas, strengthen institutional collaboration, and explore new directions in education.",
    image: {
      src: "/images/events/principal-summit.webp",
      alt: "Academic leaders and guests attending the Principal Summit at EIT",
    },
  },
  {
    id: "hackindia-hackathon",
    title: "HackIndia Hackathon",
    status: "past",
    summary:
      "A celebration of innovation, coding, and collaborative problem-solving where aspiring developers and technology enthusiasts showcase their creativity and technical abilities.",
    image: {
      src: "/images/events/hackindia-hackathon.webp",
      alt: "Participants and organizers at the HackIndia Hackathon",
    },
  },
  {
    id: "indian-knowledge-system",
    title: "Indian Knowledge System (IKS)",
    status: "past",
    summary:
      "Connecting traditional Indian knowledge with contemporary learning through interactive exhibitions, student presentations, and creative demonstrations.",
    image: {
      src: "/images/events/indian-knowledge-system.webp",
      alt: "Students presenting exhibits at the Indian Knowledge System event",
    },
  },
  {
    id: "hr-conclave",
    title: "HR Conclave",
    status: "past",
    summary:
      "An engaging platform for industry professionals, academic leaders, and students to discuss recruitment trends, workplace expectations, and the future of professional development.",
    image: {
      src: "/images/events/hr-conclave.webp",
      alt: "Guests participating in the HR Conclave at EIT",
    },
  },
  {
    id: "science-exhibition",
    title: "Science Exhibition",
    status: "past",
    summary:
      "Encouraging scientific curiosity, experimentation, and creative thinking through student-led exhibitions and opportunities to share innovative ideas.",
    image: {
      src: "/images/events/science-exhibition.webp",
      alt: "EIT event photograph used for the Science Exhibition gallery entry",
    },
  },
  {
    id: "digital-literacy",
    title: "Digital Literacy and Skill India Initiatives",
    status: "past",
    summary:
      "Empowering students through digital awareness, practical technology skills, entrepreneurship discussions, and learning experiences designed for a rapidly evolving digital world.",
    image: {
      src: "/images/events/digital-literacy.webp",
      alt: "Digital literacy and entrepreneurship session at EIT",
    },
  },
];
