

/** Ids from data/students/testimonials.ts, in display order. Empty = show all. */
export const featuredStoryIds: string[] = [];
export interface TestimonialVideo {
  id: string;
  title: string;
  youtubeId: string;
}

export const storiesSection = {
  eyebrow: "Student Testimonials",
  title: ["Stories That", "Inspire"],
  script: ["Real", "People", "Real Impact"],
  description: "Hear directly from our students about their experiences.",
  channelUrl: "https://www.youtube.com/channel/UCYUk-0QqiX2Ae3k1as0m3Jw",
  intervalMs: 4500,
};

export const testimonialVideos: TestimonialVideo[] = [
  {
    id: "testimonial-1",
    title: "Student Testimonial 01",
    youtubeId: "7hr-TzJQm00",
  },
  {
    id: "testimonial-2",
    title: "Student Testimonial 02",
    youtubeId: "kHXLbMd0e7w",
  },
  {
    id: "testimonial-3",
    title: "Student Testimonial 03",
    youtubeId: "LxF796e2FC4",
  },
  {
    id: "testimonial-4",
    title: "Student Testimonial 04",
    youtubeId: "I1baAomcwco",
  },
];