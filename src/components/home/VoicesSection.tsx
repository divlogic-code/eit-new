
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Play, X } from "lucide-react";

import { BrandMark } from "@/components/layout/BrandMark";
import { Container } from "@/components/layout/Container";

import {
  storiesSection,
  testimonialVideos,
} from "@/data/home/stories";

import { useCarousel } from "@/hooks/use-carousel";
import { useMediaQuery } from "@/hooks/use-media-query";
import { easing } from "@/lib/animations";

import type { VoiceView } from "@/types/sections";
import { CarouselControls } from "./CarouselControls";

function getOffset(
  index: number,
  active: number,
  total: number
) {
  let offset = ((index - active) % total + total) % total;

  if (offset > total / 2) {
    offset -= total;
  }

  return offset;
}

export function VoicesSection({
  voices: _voices,
}: {
  voices: VoiceView[];
}) {
  const [activeVideo, setActiveVideo] = useState<string | null>(
    null
  );
  const [mounted, setMounted] = useState(false);

  const reduceMotion = useMediaQuery(
    "(prefers-reduced-motion: reduce)"
  );

  const total = testimonialVideos.length;

  const { rootRef, bind, ...carousel } =
    useCarousel<HTMLElement>({
      count: Math.max(total, 1),
      intervalMs: storiesSection.intervalMs,
    });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!activeVideo) return;

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveVideo(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    document.addEventListener("keydown", onEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onEscape);
    };
  }, [activeVideo]);

  if (total === 0) return null;

  return (
    <section
      ref={rootRef}
      {...bind}
      data-scroll-section="voices"
      className="eit-video-testimonials"
      aria-label="Student video testimonials"
      aria-roledescription="carousel"
    >
      <Container>
        {/* SECTION HEADING */}

        <div className="eit-video-testimonials__header">
          <div className="eit-video-testimonials__heading">
            <p className="eit-video-testimonials__eyebrow">
              <span className="eit-video-testimonials__eyebrow-mark">
                <BrandMark className="size-6" />
              </span>

              {storiesSection.eyebrow}
            </p>

            <h2 className="eit-video-testimonials__title">
              <span className="eit-video-testimonials__title-main">
                {storiesSection.title[0]}
              </span>

              <span className="eit-video-testimonials__title-accent">
                {storiesSection.title[1]}
              </span>
            </h2>

            <span
              className="eit-video-testimonials__title-line"
              aria-hidden="true"
            />

            <p className="eit-video-testimonials__description">
              {storiesSection.description}
            </p>
          </div>

          <Link
            href={storiesSection.channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="eit-video-testimonials__channel"
          >
            View More Videos
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>

        {/* OVERLAPPING VIDEO CAROUSEL */}

        <div
          className="eit-video-testimonials__carousel"
          aria-live={carousel.running ? "off" : "polite"}
        >
          {testimonialVideos.map((video, index) => {
            const offset = getOffset(
              index,
              carousel.index,
              total
            );

            const distance = Math.abs(offset);
            const isActive = offset === 0;
            const visible = distance <= 1;

            return (
              <motion.button
                key={video.id}
                type="button"
                className="eit-video-testimonials__slide"
                style={{
                  zIndex: isActive ? 30 : visible ? 20 : 1,
                  pointerEvents: visible ? "auto" : "none",
                }}
                initial={false}
                animate={{
                  x: `${offset * 64}%`,
                  scale: isActive ? 1 : 0.82,
                  opacity: isActive
                    ? 1
                    : visible
                      ? 0.65
                      : 0,
                }}
                transition={{
                  duration: reduceMotion ? 0.01 : 0.85,
                  ease: easing.out,
                }}
                tabIndex={visible ? 0 : -1}
                aria-hidden={!visible}
                aria-label={`Play ${video.title}`}
                onClick={() => {
                  if (!isActive) {
                    carousel.goTo(index);
                    return;
                  }

                  setActiveVideo(video.youtubeId);
                }}
              >
                <img
                  src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
                  alt=""
                  loading="lazy"
                  className="eit-video-testimonials__thumbnail"
                />

                <span className="eit-video-testimonials__shade" />

                <span className="eit-video-testimonials__play">
                  <Play
                    size={26}
                    fill="currentColor"
                    aria-hidden="true"
                  />
                </span>

                <span className="eit-video-testimonials__info">
                  <span className="eit-video-testimonials__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="eit-video-testimonials__name">
                    {video.title}
                  </span>
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* CAROUSEL CONTROLS */}

        <div className="eit-video-testimonials__controls">
          <CarouselControls
            label="video"
            onPrev={carousel.prev}
            onNext={carousel.next}
            onTogglePause={carousel.togglePause}
            userPaused={carousel.userPaused}
            timed={carousel.timed}
          />

          <div className="eit-video-testimonials__dots">
            {testimonialVideos.map((video, index) => (
              <button
                key={video.id}
                type="button"
                onClick={() => carousel.goTo(index)}
                className={
                  index === carousel.index
                    ? "eit-video-testimonials__dot is-active"
                    : "eit-video-testimonials__dot"
                }
                aria-label={`Go to video ${index + 1}`}
                aria-current={
                  index === carousel.index
                    ? "true"
                    : undefined
                }
              />
            ))}
          </div>
        </div>
      </Container>

      {/* YOUTUBE VIDEO POPUP */}

      {mounted &&
        activeVideo &&
        createPortal(
          <div
            className="eit-video-testimonials__modal"
            role="dialog"
            aria-modal="true"
            aria-label="Student testimonial video"
            onClick={() => setActiveVideo(null)}
          >
            <div
              className="eit-video-testimonials__player-wrap"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="eit-video-testimonials__close"
                onClick={() => setActiveVideo(null)}
                aria-label="Close video"
                autoFocus
              >
                <X size={24} />
              </button>

              <iframe
                key={activeVideo}
                src={`https://www.youtube-nocookie.com/embed/${activeVideo}?autoplay=1&rel=0`}
                title="Student testimonial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
