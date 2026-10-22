
"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, ArrowUpRight, Play } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { podcastsSection } from "@/data/home/podcasts";
import { useCarousel } from "@/hooks/use-carousel";
import type { EpisodeView } from "@/types/sections";
import { CarouselControls } from "./CarouselControls";
import { SectionHeading } from "./SectionHeading";

const YOUTUBE_IDS = [
  "snfxS_vlnRc",
  "n00bIGd7P3A",
  "HU55RJ50kB0",
  "LbvhPh1VfKU",
];

function getWatchUrl(
  episode: EpisodeView,
  index: number
): string {
  const raw = episode.url;

  if (raw) {
    try {
      const url = new URL(raw);

      if (
        [
          "youtube.com",
          "www.youtube.com",
          "m.youtube.com",
        ].includes(url.hostname) &&
        url.pathname.startsWith("/embed/")
      ) {
        const videoId = url.pathname.split("/")[2];

        if (videoId) {
          return `https://www.youtube.com/watch?v=${videoId}`;
        }
      }

      return raw;
    } catch {
      return raw;
    }
  }

  const videoId = YOUTUBE_IDS[index];

  return videoId
    ? `https://www.youtube.com/watch?v=${videoId}`
    : "/podcasts";
}

function getThumbnail(
  episode: EpisodeView,
  index: number
): string | undefined {
  const raw = episode.url;

  if (raw) {
    try {
      const url = new URL(raw);

      if (
        ["youtube.com", "www.youtube.com", "m.youtube.com"].includes(
          url.hostname
        )
      ) {
        const videoId = url.pathname.startsWith("/embed/")
          ? url.pathname.split("/")[2]
          : url.searchParams.get("v");

        if (videoId) {
          return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        }
      }

      if (url.hostname === "youtu.be") {
        const videoId = url.pathname.split("/")[1];

        if (videoId) {
          return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        }
      }
    } catch {
      // Use the known episode order below.
    }
  }

  const videoId = YOUTUBE_IDS[index];

  return videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : undefined;
}

function PodcastCard({
  episode,
  index,
  active,
}: {
  episode: EpisodeView;
  index: number;
  active: boolean;
}) {
  const watchUrl = getWatchUrl(episode, index);
  const thumbnail = getThumbnail(episode, index);
  const external = watchUrl.startsWith("http");

  return (
    <article
      className="eit-podcast-card"
      data-active={active}
      data-episode-index={index}
    >
      {/* Complete thumbnail + blurred background */}
      <div className="eit-podcast-image">
        <img
          src={`https://img.youtube.com/vi/${
            [
              "snfxS_vlnRc",
              "n00bIGd7P3A",
              "HU55RJ50kB0",
              "LbvhPh1VfKU",
            ][index]
          }/hqdefault.jpg`}
          alt=""
          aria-hidden="true"
          className="eit-podcast-image-blur"
        />

        <img
          src={`https://img.youtube.com/vi/${
            [
              "snfxS_vlnRc",
              "n00bIGd7P3A",
              "HU55RJ50kB0",
              "LbvhPh1VfKU",
            ][index]
          }/hqdefault.jpg`}
          alt={`Preview of ${episode.title}`}
          loading="lazy"
          className="eit-podcast-cover-photo"
        />
      </div>

      <div className="eit-podcast-overlay" />

      <div className="eit-podcast-content">
        <div className="eit-podcast-card-top">
          <span className="eit-podcast-number">
            EPISODE {String(index + 1).padStart(2, "0")}
          </span>

          <ArrowUpRight
            size={19}
            aria-hidden="true"
          />
        </div>

        <div className="eit-podcast-card-bottom">
          <span className="eit-podcast-series">
            THE ECHELON PODCAST
          </span>

          <h3>{episode.title}</h3>

          {episode.summary && (
            <p className="eit-podcast-description">
              {episode.summary}
            </p>
          )}

          <div className="eit-podcast-tags">
            <span>Podcast</span>
            <span>Echelon</span>
          </div>

          <a
            href={watchUrl}
            {...(external
              ? {
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {})}
            className="eit-podcast-watch"
            aria-label={`Watch ${episode.title}`}
          >
            <Play
              size={16}
              fill="currentColor"
              aria-hidden="true"
            />
            Watch Episode
            <ArrowRight
              size={16}
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </article>
  );
}

export function PodcastsSection({
  episodes,
}: {
  episodes: EpisodeView[];
}) {
  const {
    eyebrow,
    title,
    description,
    intervalMs,
    action,
  } = podcastsSection;

  const { rootRef, bind, ...carousel } =
    useCarousel<HTMLElement>({
      count: Math.max(episodes.length, 1),
      intervalMs,
    });

  const trackRef = useRef<HTMLDivElement>(null);

  
  useEffect(() => {
    const track = trackRef.current;

    // Make sure the carousel container exists
    if (!track) return;

    const active = track.children[carousel.index];

    if (!(active instanceof HTMLElement)) return;

    // Check whether the carousel needs horizontal scrolling
    const isScrollable =
      track.scrollWidth > track.clientWidth + 1;

    if (!isScrollable) return;

    // Respect the user's reduced-motion preference
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    active.scrollIntoView({
      behavior: reducedMotion ? "instant" : "smooth",
      block: "nearest",
      inline: "nearest",
    });
  }, [carousel.index]);


  if (episodes.length === 0) return null;

  return (
    <section
      ref={rootRef}
      {...bind}
      aria-label="Podcast episodes"
      data-scroll-section="podcasts"
      className="eit-podcasts-section"
    >
      <Container>
        <div className="eit-podcasts-header">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />

          <div className="eit-podcasts-controls">
            <CarouselControls
              label="episode"
              onPrev={carousel.prev}
              onNext={carousel.next}
              onTogglePause={carousel.togglePause}
              userPaused={carousel.userPaused}
              timed={carousel.timed}
            />
          </div>
        </div>

        <div
          ref={trackRef}
          className="eit-podcasts-track"
          aria-label="Echelon podcast episodes"
        >
          {episodes.map((episode, index) => (
            <PodcastCard
              key={episode.id}
              episode={episode}
              index={index}
              active={index === carousel.index}
            />
          ))}
        </div>

        {action && (
          <div className="eit-podcasts-footer">
            <a
              href={action.href}
              className="eit-podcasts-explore"
            >
              {action.label}
              <ArrowRight
                size={18}
                aria-hidden="true"
              />
            </a>
          </div>
        )}
      </Container>
    </section>
  );
}
