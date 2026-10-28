
"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Pause, Play } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { clubsSection } from "@/data/home/clubs";
import type { ClubView } from "@/types/sections";

import { Marquee } from "./Marquee";
import { SectionHeading } from "./SectionHeading";
import { SmartImage, initials } from "./SmartImage";

function ClubCard({ club }: { club: ClubView }) {
  return (
    <article className="eit-club-card">
      <div className="eit-club-card-image">
        <SmartImage
          image={club.logo}
          accent={club.accent}
          label={initials(club.name)}
          sizes="(max-width: 640px) 290px, 360px"
          imageClassName="object-cover"
        />
      </div>

      <div className="eit-club-card-content">
        <h3 className="eit-club-card-title">
          {club.name}
        </h3>

        {club.summary && (
          <p className="eit-club-card-description">
            {club.summary}
          </p>
        )}

        <Link
          href="/clubs"
          className="eit-club-card-link"
          aria-label={`Explore ${club.name}`}
        >
          Explore Clubs
          <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export function ClubsSection({
  clubs,
}: {
  clubs: ClubView[];
}) {
  const {
    eyebrow,
    title,
    description,
    marqueeSeconds,
    action,
    secondaryAction,
  } = clubsSection;

  const [paused, setPaused] = useState(false);

  if (clubs.length === 0) return null;

  // Ensure enough cards for smooth continuous scrolling.
  const marqueeClubs =
    clubs.length >= 6
      ? clubs
      : Array.from(
          { length: 6 },
          (_, index) => clubs[index % clubs.length]
        );

  return (
    <section
      aria-label="Clubs and activities"
      data-scroll-section="clubs"
      className="overflow-x-clip bg-eit-surface py-20 lg:py-28"
    >
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />

          <div className="flex flex-wrap items-center gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full"
            >
              <Link href={action.href}>
                {action.label}
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="ghost"
              className="rounded-full border border-primary/25 hover:bg-primary/5"
            >
              <Link href={secondaryAction.href}>
                {secondaryAction.label}
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="rounded-full border border-primary/25 text-primary hover:bg-primary/5"
              onClick={() => setPaused((value) => !value)}
              aria-pressed={paused}
              aria-label={
                paused
                  ? "Play clubs ticker"
                  : "Pause clubs ticker"
              }
            >
              {paused ? (
                <Play aria-hidden="true" />
              ) : (
                <Pause aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </Container>

      {/* SINGLE CONTINUOUS MOVING ROW */}
      <div className="eit-clubs-marquee mt-12">
        <div data-anim="marquee-row">
          <Marquee
            seconds={marqueeSeconds}
            paused={paused}
          >
            {marqueeClubs.map((club, index) => (
              <ClubCard
                key={`${club.id}-${index}`}
                club={club}
              />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
