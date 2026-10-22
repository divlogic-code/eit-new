import type { LeadershipMessage } from "@/types";

export const leadershipMessages: LeadershipMessage[] = [
  {
    id: "chairman",
    name: "Shri Prabhat Agarwal",
    designation: "Chairman of EIT",
    photo: {
      src: "/images/about/chairman.webp",
      alt: "Shri Prabhat Agarwal, Chairman of EIT",
    },
    message: [
      "It's my great honor to be able to talk to you people in the capacity of the Chairman of this august institute.",
      "Our endeavour incorporates practical demands with the aspirations of a healthy, vibrant and inquisitive campus life.",
      "You are invited to come, participate and grow as leader, creator, and an agent of transformation of technology and culture.",
    ],
  },
  {
    id: "director",
    name: "Prof. (Dr.) Arvind Kumar Pandey",
    designation: "Director",
    photo: {
      src: "/images/about/director.webp",
      alt: "Prof. (Dr.) Arvind Kumar Pandey, Director of EIT",
    },
    message: [
      "At EIT, we are committed to delivering an education that goes beyond traditional classrooms and textbooks.",
      "We strive to nurture not only competent professionals, but also confident, responsible, and visionary individuals who can lead with innovation, empathy, and integrity.",
      "We invite you to be part of this enriching journey. Together, let's shape the future through learning, innovation, and purpose.",
    ],
  },
];