
"use client";

import { useState } from "react";
import { ArrowUpRight, Pause, Play } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { celebritiesSection } from "@/data/home/celebrities";
import type { CelebrityView } from "@/types/sections";

import { Marquee } from "./Marquee";
import { SmartImage, initials } from "./SmartImage";

const additionalCelebrities = [
  {
    id: "sunanda-sharma",
    name: "Sunanda Sharma",
    role: "Singer & Performer",
    category: "Celebrity Visit",
    accent: "#E9C6D2",
  },
  {
    id: "aastha-gill",
    name: "Aastha Gill",
    role: "Singer & Performer",
    category: "Celebrity Visit",
    accent: "#D4D1F0",
  },
  {
    id: "mohit-chauhan",
    name: "Mohit Chauhan",
    role: "Playback Singer",
    category: "Celebrity Visit",
    accent: "#C9E4DC",
  },
] as CelebrityView[];

function CelebrityCard({
  person,
}: {
  person: CelebrityView;
}) {
  return (
    <article className="eit-celebrity-card">
      <div className="eit-celebrity-card-image">
        <SmartImage
          image={person.photo}
          accent={person.accent}
          label={initials(person.name)}
          sizes="
            (min-width: 1024px) 380px,
            (min-width: 640px) 50vw,
            90vw
          "
        />
      </div>

      <div
        className="eit-celebrity-card-overlay"
        aria-hidden="true"
      />

      <div className="eit-celebrity-card-content">
        {person.category && (
          <span className="eit-celebrity-category">
            {person.category}
          </span>
        )}

        <div className="eit-celebrity-card-bottom">
          <div>
            <h3>{person.name}</h3>

            {person.role && <p>{person.role}</p>}
          </div>

          <span
            className="eit-celebrity-arrow"
            aria-hidden="true"
          >
            <ArrowUpRight size={20} />
          </span>
        </div>
      </div>
    </article>
  );
}

export function CelebritySection({
  people,
}: {
  people: CelebrityView[];
}) {
  const { eyebrow } = celebritiesSection;
  const [paused, setPaused] = useState(false);

  const existingNames = new Set(
    people.map((person) => person.name.toLowerCase().trim())
  );

  const allPeople = [
    ...people,
    ...additionalCelebrities.filter(
      (person) =>
        !existingNames.has(person.name.toLowerCase().trim())
    ),
  ];

  if (allPeople.length === 0) return null;

  return (
    <section
      data-scroll-section="celebrities"
      aria-label="Celebrity visits"
      className="eit-celebrities-section overflow-x-clip"
    >
      <Container>
        <div className="eit-celebrities-heading flex items-center justify-between gap-4">
          <p className="eit-celebrities-eyebrow">
            {eyebrow}
          </p>

          <button
            type="button"
            onClick={() => setPaused((value) => !value)}
            aria-label={
              paused
                ? "Resume celebrity carousel"
                : "Pause celebrity carousel"
            }
            aria-pressed={paused}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/20 text-primary transition-colors hover:bg-primary/10"
          >
            {paused ? (
              <Play size={18} aria-hidden="true" />
            ) : (
              <Pause size={18} aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      {/* SINGLE CONTINUOUS MOVING ROW */}
      <div className="eit-celebrities-marquee mt-10 w-full overflow-hidden">
        <div data-anim="marquee-row">
          <Marquee seconds={45} paused={paused}>
            {allPeople.map((person) => (
              <div
                key={person.id}
                className="w-[280px] shrink-0 sm:w-[340px] lg:w-[380px]"
              >
                <CelebrityCard person={person} />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
