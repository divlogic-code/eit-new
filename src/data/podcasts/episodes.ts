
import type { ImageAsset } from "@/types";

export interface PodcastEpisode {
  id: string;
  title: string;
  /** Ids from data/podcasts/speakers.ts. */
  speakerIds: string[];
  date?: string;
  duration?: string;
  summary?: string;
  cover?: ImageAsset;
  embedUrl?: string;
}

export const episodes: PodcastEpisode[] = [
  {
    id: "echelon-podcast-episode-1",
    title: "Safar Se Safalta Tak | Episode 1",
    speakerIds: [],
    summary:
      "The Echelon Podcast. Conversations about experiences, learning, and journeys beyond the classroom.",
    cover: {
      src: "https://img.youtube.com/vi/snfxS_vlnRc/hqdefault.jpg",
      alt: "The Echelon Podcast, Safar Se Safalta Tak, Episode 1",
    },
    embedUrl: "https://www.youtube.com/embed/snfxS_vlnRc",
  },
  {
    id: "echelon-podcast-episode-2",
    title: "Safar Se Safalta Tak | Episode 2",
    speakerIds: [],
    summary:
      "The Echelon Podcast. Exploring perspectives on ambition, personal development, and growth.",
    cover: {
      src: "https://img.youtube.com/vi/n00bIGd7P3A/hqdefault.jpg",
      alt: "The Echelon Podcast, Safar Se Safalta Tak, Episode 2",
    },
    embedUrl: "https://www.youtube.com/embed/n00bIGd7P3A",
  },
  {
    id: "echelon-podcast-episode-3",
    title: "Safar Se Safalta Tak | Episode 3",
    speakerIds: [],
    summary:
      "The Echelon Podcast. Stories, ideas, and conversations that encourage learning and discovery.",
    cover: {
      src: "https://img.youtube.com/vi/HU55RJ50kB0/hqdefault.jpg",
      alt: "The Echelon Podcast, Safar Se Safalta Tak, Episode 3",
    },
    embedUrl: "https://www.youtube.com/embed/HU55RJ50kB0",
  },
  {
    id: "echelon-podcast-beyond-the-resume",
    title: "Beyond the Resume | Episode 1",
    speakerIds: [],
    summary:
      "The Echelon Podcast. A conversation exploring professional development and opportunities beyond qualifications.",
    cover: {
      src: "https://img.youtube.com/vi/LbvhPh1VfKU/hqdefault.jpg",
      alt: "The Echelon Podcast, Beyond the Resume, Episode 1",
    },
    embedUrl: "https://www.youtube.com/embed/LbvhPh1VfKU",
  },
];
