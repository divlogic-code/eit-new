
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type EventItem = {
  id: string;
  title: string;
  summary?: string;
  image?: {
    src: string;
    alt?: string;
  } | null;
};

type EventsShowcaseProps = {
  events: EventItem[];
};

const SLIDE_DURATION = 5000;

export default function EventsShowcase({
  events,
}: EventsShowcaseProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const count = events.length;

  useEffect(() => {
    if (!count || paused) return;

    const interval = window.setInterval(() => {
      setProgress((current) => {
        if (current >= 100) {
          setActive((index) => (index + 1) % count);
          return 0;
        }

        return Math.min(
          current + (100 * 50) / SLIDE_DURATION,
          100
        );
      });
    }, 50);

    return () => window.clearInterval(interval);
  }, [count, paused]);

  useEffect(() => {
    if (active >= count && count > 0) {
      setActive(0);
    }
  }, [active, count]);

  const changeSlide = (direction: number) => {
    setActive((current) =>
      (current + direction + count) % count
    );
    setProgress(0);
  };

  if (!count) return null;

  const event = events[active];

  return (
    <section className="eit-events-showcase">
      <div className="eit-events-heading">
        <span className="eit-events-eyebrow">
          EVENTS & NOTIFICATIONS
        </span>

        <h2>What's happening at EIT</h2>

        <p>
          Explore innovation, celebrations, competitions
          and memorable moments across our campus.
        </p>
      </div>

      <article
        className="eit-event-card"
        key={event.id}
      >
        <div className="eit-event-photo">
          {event.image?.src ? (
            <Image
              src={event.image.src}
              alt={event.image.alt || event.title}
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              className="eit-event-photo-img"
            />
          ) : (
            <div className="eit-event-photo-fallback">
              EIT Campus Events
            </div>
          )}

          <span className="eit-event-photo-label">
            EIT CAMPUS LIFE
          </span>
        </div>

        <div className="eit-event-card-body">
          <div className="eit-event-card-top">
            <div>
              <span className="eit-event-category">
                CAMPUS HIGHLIGHTS
              </span>

              <h3>{event.title}</h3>
            </div>

            <span className="eit-event-icon">
              ✦
            </span>
          </div>

          {event.summary && (
            <p className="eit-event-description">
              {event.summary}
            </p>
          )}

          <div className="eit-event-progress-track">
            <div
              className="eit-event-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="eit-event-footer">
            <div className="eit-event-indicators">
              {events.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className={
                    index === active
                      ? "eit-event-dot is-active"
                      : "eit-event-dot"
                  }
                  aria-label={`Show ${item.title}`}
                  aria-current={
                    index === active ? "true" : undefined
                  }
                  onClick={() => {
                    setActive(index);
                    setProgress(0);
                  }}
                />
              ))}
            </div>

            <div className="eit-event-controls">
              <button
                type="button"
                onClick={() => setPaused(!paused)}
                aria-label={
                  paused ? "Play slideshow" : "Pause slideshow"
                }
              >
                {paused ? "▶" : "Ⅱ"}
              </button>

              <button
                type="button"
                onClick={() => changeSlide(-1)}
                aria-label="Previous event"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={() => changeSlide(1)}
                aria-label="Next event"
              >
                ›
              </button>
            </div>
          </div>

          <a href="/events" className="eit-event-link">
            Explore All Events <span>↗</span>
          </a>
        </div>
      </article>
    </section>
  );
}
