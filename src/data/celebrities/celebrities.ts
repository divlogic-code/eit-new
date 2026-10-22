import type { ImageAsset } from "@/types";

export type Celebrity = {
  id: string;
  name: string;
  role: string;
  category?: string;
  bio?: string;
  href?: string;
  photo?: ImageAsset;
};

export const celebrities: Celebrity[] = [
  {
    id: "harrdy-sandhu",
    name: "Harrdy Sandhu",
    role: "Singer, Actor & Performer",
    category: "Celebrity Visit",
    bio: "Harrdy Sandhu visited Echelon Institute of Technology and interacted with the EIT community.",
    photo: {
      src: "/images/celebrities/harrdy-sandhu.webp",
      alt: "Harrdy Sandhu at Echelon Institute of Technology",
    },
  },
  {
    id: "millind-gaba",
    name: "Millind Gaba",
    role: "Singer, Songwriter & Music Producer",
    category: "Celebrity Visit",
    bio: "Millind Gaba visited Echelon Institute of Technology and interacted with students on campus.",
    photo: {
      src: "/images/celebrities/millind-gaba.webp",
      alt: "Millind Gaba at Echelon Institute of Technology",
    },
  },
  {
    id: "maninder-buttar",
    name: "Maninder Buttar",
    role: "Singer & Songwriter",
    category: "Celebrity Visit",
    bio: "Maninder Buttar was among the celebrated artists welcomed to Echelon Institute of Technology.",
    photo: {
      src: "/images/celebrities/maninder-buttar.webp",
      alt: "Maninder Buttar at Echelon Institute of Technology",
    },
  },
  {
    id: "babbal-rai",
    name: "Babbal Rai",
    role: "Singer & Actor",
    category: "Celebrity Visit",
    bio: "Babbal Rai visited Echelon Institute of Technology as part of the institute's campus events.",
    photo: {
      src: "/images/celebrities/babbal-rai.webp",
      alt: "Babbal Rai at Echelon Institute of Technology",
    },
  },
  {
    id: "raftaar",
    name: "Raftaar",
    role: "Rapper, Lyricist & Music Producer",
    category: "Celebrity Visit",
    bio: "Raftaar visited Echelon Institute of Technology and brought his energy to the EIT campus.",
    photo: {
      src: "/images/celebrities/raftaar.webp",
      alt: "Raftaar at Echelon Institute of Technology",
    },
  },
  {
    id: "jassie-gill",
    name: "Jassie Gill",
    role: "Singer & Actor",
    category: "Celebrity Visit",
    bio: "Jassie Gill visited Echelon Institute of Technology and was welcomed by the EIT community.",
    photo: {
      src: "/images/celebrities/jassie-gill.webp",
      alt: "Jassie Gill at Echelon Institute of Technology",
    },
  },
];