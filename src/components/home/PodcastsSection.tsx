
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Pause,
  Play,
  X,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { podcastsSection } from "@/data/home/podcasts";
import type { EpisodeView } from "@/types/sections";

import { Marquee } from "./Marquee";
import { SectionHeading } from "./SectionHeading";

const ORIGINAL_IDS = [
  "snfxS_vlnRc",
  "n00bIGd7P3A",
  "HU55RJ50kB0",
  "LbvhPh1VfKU",
];

const NEW_IDS = [
  "LKYRWlP_ejc",
  "71yobGgFJ4I",
  "D3cr_hf1v5I",
  "ggCSIf4rEOg",
  "Erliyj_BQXA",
];

type PodcastItem = {
  id: string;
  videoId: string;
  title: string;
  summary?: string;
};

function getYouTubeId(raw?: string): string | null {
  if (!raw) return null;

  try {
    const url = new URL(raw);
    const host = url.hostname.toLowerCase();

    if (
      host === "youtu.be" ||
      host === "www.youtu.be"
    ) {
      return url.pathname.split("/")[1] || null;
    }

    if (
      host === "youtube.com" ||
      host === "www.youtube.com" ||
      host === "m.youtube.com" ||
      host === "youtube-nocookie.com" ||
      host === "www.youtube-nocookie.com"
    ) {
      if (
        url.pathname.startsWith("/embed/") ||
        url.pathname.startsWith("/shorts/") ||
        url.pathname.startsWith("/live/")
      ) {
        return url.pathname.split("/")[2] || null;
      }

      return url.searchParams.get("v");
    }
  } catch {
    return null;
  }

  return null;
}

function PodcastCard({
  episode,
  index,
  onPlay,
}: {
  episode: PodcastItem;
  index: number;
  onPlay: (episode: PodcastItem) => void;
}) {
  const thumbnail =
    `https://img.youtube.com/vi/${episode.videoId}/hqdefault.jpg`;

  return (
    <article className="eit-podcast-card">
      {/* VIDEO THUMBNAIL */}
      <div className="eit-podcast-image">
        <img
          src={thumbnail}
          alt=""
          aria-hidden="true"
          loading="lazy"
          draggable={false}
          className="eit-podcast-image-blur"
        />

        <img
          src={thumbnail}
          alt={`Preview of ${episode.title}`}
          loading="lazy"
          draggable={false}
          className="eit-podcast-cover-photo"
        />
      </div>

      <div className="eit-podcast-overlay" />

      {/* CARD CONTENT */}
      <div className="eit-podcast-content">
        <div className="eit-podcast-card-top">
          <span className="eit-podcast-number">
            EPISODE {String(index + 1).padStart(2, "0")}
          </span>

          <ArrowUpRight size={19} aria-hidden="true" />
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

          <button
            type="button"
            onClick={() => onPlay(episode)}
            className="eit-podcast-watch"
            aria-label={`Watch ${episode.title}`}
          >
            <Play
              size={16}
              fill="currentColor"
              aria-hidden="true"
            />

            Watch Episode

            <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
}

function PodcastPlayer({
  episode,
  onClose,
}: {
  episode: PodcastItem;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md sm:p-8"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Playing ${episode.title}`}
        className="w-full max-w-6xl"
      >
        <div className="mb-4 flex items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              The Echelon Podcast
            </p>

            <h3 className="mt-1 truncate text-lg font-semibold text-white sm:text-2xl">
              {episode.title}
            </h3>
          </div>

          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close video"
          >
            <X size={22} aria-hidden="true" />
          </button>
        </div>

        <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-2xl">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${episode.videoId}?autoplay=1&rel=0`}
            title={episode.title}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </div>
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
    action,
  } = podcastsSection;

  const [paused, setPaused] = useState(false);
  const [playing, setPlaying] =
    useState<PodcastItem | null>(null);

  const triggerRef = useRef<HTMLElement | null>(null);

  const closePlayer = useCallback(() => {
    setPlaying(null);

    requestAnimationFrame(() => {
      triggerRef.current?.focus();
    });
  }, []);

  const openPlayer = useCallback(
    (episode: PodcastItem) => {
      triggerRef.current =
        document.activeElement instanceof HTMLElement
          ? document.activeElement
          : null;

      setPlaying(episode);
    },
    []
  );

  // Preserve existing episodes and avoid duplicate videos.
  const existingIds = new Set<string>();

  const originalEpisodes: PodcastItem[] = episodes
    .map((episode, index) => {
      const videoId =
        getYouTubeId(episode.url) ??
        ORIGINAL_IDS[index] ??
        "";

      return {
        id: String(episode.id),
        videoId,
        title: episode.title,
        summary: episode.summary,
      };
    })
    .filter((episode) => {
      if (!episode.videoId) return false;

      if (existingIds.has(episode.videoId)) {
        return false;
      }

      existingIds.add(episode.videoId);
      return true;
    });

  const additionalEpisodes: PodcastItem[] = NEW_IDS
    .filter((id) => !existingIds.has(id))
    .map((id, index) => ({
      id: `echelon-new-${id}`,
      videoId: id,
      title: `Echelon Podcast | New Episode ${index + 1}`,
      summary:
        "Watch this episode of The Echelon Podcast.",
    }));

  const allEpisodes = [
    ...originalEpisodes,
    ...additionalEpisodes,
  ];

  if (allEpisodes.length === 0) return null;

  return (
    <>
      <section
        aria-label="Podcast episodes"
        data-scroll-section="podcasts"
        className="eit-podcasts-section overflow-x-clip"
      >
        {/* SECTION HEADER */}
        <Container>
          <div className="eit-podcasts-header">
            <SectionHeading
              eyebrow={eyebrow}
              title={title}
              description={description}
            />

            <button
              type="button"
              onClick={() =>
                setPaused((value) => !value)
              }
              aria-label={
                paused
                  ? "Resume podcasts"
                  : "Pause podcasts"
              }
              aria-pressed={paused}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/20 text-primary transition-colors hover:bg-primary/10"
            >
              {paused ? (
                <Play
                  size={18}
                  aria-hidden="true"
                />
              ) : (
                <Pause
                  size={18}
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
        </Container>

        {/* SINGLE HORIZONTAL MOVING ROW */}
        <div className="eit-podcasts-marquee mt-12 w-full overflow-hidden">
          <div data-anim="marquee-row">
            <Marquee
              seconds={65}
              paused={paused || Boolean(playing)}
            >
              {allEpisodes.map((episode, index) => (
                <div
                  key={episode.id}
                  className="w-[290px] shrink-0 sm:w-[340px] lg:w-[380px]"
                >
                  <PodcastCard
                    episode={episode}
                    index={index}
                    onPlay={openPlayer}
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        {/* SECTION FOOTER */}
        {action && (
          <Container>
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
          </Container>
        )}
      </section>

      {/* EMBEDDED VIDEO PLAYER */}
      {playing && (
        <PodcastPlayer
          episode={playing}
          onClose={closePlayer}
        />
      )}
    </>
  );
}
