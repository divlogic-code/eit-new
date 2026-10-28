import type { LeadershipMessage, Testimonial } from "@/types";

export const studentsSpeak: Testimonial[] = [];
export const recruitersSpeak: Testimonial[] = [];

// The supplied message does not identify its author by name.
export const placementMessages: LeadershipMessage[] = [
  {
    id: "head-training-placement",
    name: "Head – Division of Training & Placement",
    designation: "Echelon Institute of Technology, Faridabad",
    message: [
      "It is with great enthusiasm that I extend an earnest invitation to you to be a part of the Campus Recruitment Process at Echelon Institute of Technology, Faridabad (EIT).",
      "EIT has earned a prestigious standing as one of the foremost institutions in engineering and technical education across Delhi-NCR. With a legacy built on excellence and innovation, the institute has consistently been recognized among the top technical colleges—respected by academia, industry professionals, and peer institutions alike.",
      "Our approach to education transcends traditional boundaries. We are deeply committed to the all-round development of our students, nurturing not just their technical capabilities but also their creativity, adaptability, and leadership potential. Enriched by a rigorous academic environment and regular exposure to industry through internships, training modules, and industrial visits, our students gain a practical understanding of the evolving professional landscape.",
      "As we strengthen our Industry-Institute synergy, we continue to collaborate on curriculum and skill-building initiatives to match the dynamic needs of the corporate sector. Our students have consistently demonstrated excellence—both in academics and extracurricular pursuits—proving them to be competent, driven, and innovative. We take immense pride in preparing professionals who are ready to meet tomorrow's challenges head-on.",
      "“Arise! Awake! and stop not until the goal is reached.” — Swami Vivekananda",
      "We sincerely hope to establish a long-standing and mutually enriching association with your esteemed organization. I am confident that you will find in our students a blend of knowledge, professionalism, and enthusiasm that aligns well with your recruitment expectations.",
      "At EIT, we look forward to building strong, mutually rewarding partnerships with esteemed organizations like yours. We are confident that you will find our students to be capable, committed, and aligned with your expectations."
    ]
  }
];

export interface StudentSpeakVideo {
  id: string;
  title: string;
  youtubeId: string;
}

export const studentSpeakVideos: StudentSpeakVideo[] = [
  {
    id: "student-video-1",
    title: "Student Experience 01",
    youtubeId: "7hr-TzJQm00",
  },
  {
    id: "student-video-2",
    title: "Student Experience 02",
    youtubeId: "kHXLbMd0e7w",
  },
  {
    id: "student-video-3",
    title: "Student Experience 03",
    youtubeId: "A_VryxBrKpU",
  },
  {
    id: "student-video-4",
    title: "Student Experience 04",
    youtubeId: "qMQFS6uS1jI",
  },
  {
    id: "student-video-5",
    title: "Student Experience 05",
    youtubeId: "LxF796e2FC4",
  },
  {
    id: "student-video-6",
    title: "Student Experience 06",
    youtubeId: "I1baAomcwco",
  },
];
