
import { Play, Video } from "lucide-react";

import { ScrollAnimator } from "@/components/animations/ScrollAnimator";
import { PageHero } from "@/components/pages/PageHero";
import { PageSection } from "@/components/pages/PageSection";
import {
  QuickLinksGrid,
  type QuickLink,
} from "@/components/pages/QuickLinksGrid";

import { studentSpeakVideos } from "@/data/placements/testimonials";
import { getRoutesInGroup } from "@/data/site/routes";
import { getRouteMetadata } from "@/lib/metadata";

const path = "/placements/students-speak";

export const metadata = getRouteMetadata(path);

export default function Page() {
  const links: QuickLink[] = getRoutesInGroup(
    "placements",
    [path]
  ).map((route) => ({
    href: route.path,
    label: route.title,
  }));

  return (
    <>
      {/* PAGE HERO */}
      <PageHero
        path={path}
        eyebrow="Placements"
        title={["Students", "Speak"]}
        description="Real experiences, real journeys, and real stories from Echelon students."
        tone="butter"
      />

      {/* VIDEO TESTIMONIALS */}
      <PageSection
        name="default"
        bg="parchment"
        eyebrow="Student testimonials"
        title={["Hear it from", "our students"]}
      >
        <div className="mb-10 max-w-2xl">
          <p className="text-base leading-relaxed text-muted-foreground">
            Discover student experiences at Echelon Institute
            of Technology through their own video testimonials.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {studentSpeakVideos.map((video, index) => (
            <article
              key={video.id}
              data-anim="card"
              className="group overflow-hidden rounded-2xl border border-primary/10 bg-eit-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* VIDEO PLAYER */}
              <div className="relative aspect-video w-full overflow-hidden bg-black">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>

              {/* VIDEO INFORMATION */}
              <div className="flex items-center justify-between gap-4 p-5">
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Student Voice {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="text-base font-bold text-primary">
                    {video.title}
                  </h3>
                </div>

                <a
                  href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Watch ${video.title} on YouTube`}
                  className="grid size-11 shrink-0 place-items-center rounded-full border border-primary/15 text-primary transition-colors hover:bg-primary hover:text-white"
                >
                  <Play
                    aria-hidden="true"
                    className="size-4 fill-current"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* YOUTUBE LINK */}
        <div
          data-anim="card"
          className="mt-12 flex flex-wrap items-center justify-between gap-5 rounded-2xl border border-primary/10 bg-eit-surface p-6"
        >
          <div className="flex items-center gap-4">
            <div className="grid size-12 place-items-center rounded-xl bg-red-600/10 text-red-600">
              <Video
                aria-hidden="true"
                className="size-6"
              />
            </div>

            <div>
              <p className="font-bold text-primary">
                More student experiences
              </p>
              <p className="text-sm text-muted-foreground">
                Explore videos and student stories on YouTube.
              </p>
            </div>
          </div>

          <a
            href="https://www.youtube.com/results?search_query=Echelon+Institute+of+Technology+Faridabad"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-85"
          >
            Explore on YouTube
            <Play aria-hidden="true" className="size-4" />
          </a>
        </div>
      </PageSection>

      {/* PLACEMENT QUICK LINKS */}
      <PageSection
        name="default"
        bg="surface"
        eyebrow="More"
        title={["Explore", "placements"]}
      >
        <QuickLinksGrid links={links} columns={3} />
      </PageSection>

      <ScrollAnimator />
    </>
  );
}
