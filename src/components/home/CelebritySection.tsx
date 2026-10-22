"use client";

import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { celebritiesSection } from "@/data/home/celebrities";
import type { CelebrityView } from "@/types/sections";
import { SmartImage, initials } from "./SmartImage";

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

            {person.role && (
              <p>{person.role}</p>
            )}
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
  if (people.length === 0) return null;

  return (
    <section
      data-scroll-section="celebrities"
      aria-label="Celebrity visits"
      className="eit-celebrities-section"
    >
      <Container>
        <div className="eit-celebrities-heading">
          <p className="eit-celebrities-eyebrow">
            {eyebrow}
          </p>
        </div>

        <div className="eit-celebrities-grid">
          {people.map((person) => (
            <CelebrityCard
              key={person.id}
              person={person}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}