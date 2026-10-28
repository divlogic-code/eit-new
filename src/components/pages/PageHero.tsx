
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { BrandMark } from "@/components/layout/BrandMark";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { TextReveal } from "@/components/animations/TextReveal";

import type { CallToAction } from "@/types";

const HERO_BACKGROUND = "/images/page-hero.webp";

type HeroTone =
  | "mist"
  | "sage"
  | "peach"
  | "lilac"
  | "blush"
  | "sand"
  | "butter"
  | "rose";

interface PageHeroProps {
  /** Registered route path for breadcrumbs. */
  path: string;

  eyebrow: string;

  /** One entry per line. */
  title: string[];

  description?: string;

  primaryAction?: CallToAction;

  secondaryAction?: CallToAction;

  /** Preserved for compatibility with existing pages. */
  tone?: HeroTone;

  children?: ReactNode;
}

/**
 * Shared hero banner used by inner pages.
 *
 * - Background image begins at the top of the hero
 * - Image fills the hero without distortion
 * - Gradient maintains readable text
 * - Existing animations and page content are preserved
 */
export function PageHero({
  path,
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  tone = "mist",
  children,
}: PageHeroProps) {
  return (
    <section
      data-tone={tone}
      className="
        relative isolate w-full overflow-hidden
        bg-primary
        pt-10 pb-24
        sm:pt-14 sm:pb-28
        lg:pb-32
      "
    >
      {/* BACKGROUND IMAGE */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <Image
          src={HERO_BACKGROUND}
          alt=""
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-top
          "
        />

        {/* Main overlay */}
        <div
          className="
            absolute inset-0
            bg-black/35
          "
        />

        {/* Top-to-bottom gradient */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-b
            from-black/45
            via-black/15
            to-black/35
          "
        />
      </div>

      {/* HERO CONTENT */}
      <Container className="relative z-10">
        {/* BREADCRUMBS */}
        <div className="text-white [&_a]:text-white [&_nav]:text-white [&_nav_*]:text-white">
          <FadeIn standalone y={10}>
            <Breadcrumbs path={path} />
          </FadeIn>
        </div>

        {/* TEXT CONTENT */}
        <div className="mt-10 max-w-3xl sm:mt-14">
          {/* EYEBROW */}
          <FadeIn standalone delay={0.05}>
            <p className="mb-5 flex items-center gap-3 text-sm font-semibold text-white/90">
              <BrandMark className="size-6" />

              {eyebrow}

              <span
                aria-hidden="true"
                className="h-px w-14 bg-white/50"
              />
            </p>
          </FadeIn>

          {/* MAIN HEADING */}
          <h1
            className="
              text-[clamp(2.75rem,6.2vw,4.75rem)]
              font-extrabold
              leading-[1.02]
              tracking-[-0.04em]
              text-white
            "
          >
            <TextReveal
              lines={title}
              standalone
              delay={0.12}
            />
          </h1>

          {/* DESCRIPTION */}
          {description && (
            <FadeIn standalone delay={0.32}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/90">
                {description}
              </p>
            </FadeIn>
          )}

          {/* ACTION BUTTONS */}
          {(primaryAction || secondaryAction) && (
            <FadeIn
              standalone
              delay={0.42}
              className="mt-9 flex flex-wrap items-center gap-6"
            >
              {primaryAction && (
                <Link
                  href={primaryAction.href}
                  className="
                    inline-flex h-12 items-center gap-2
                    rounded-md
                    bg-white px-6
                    text-[0.9375rem]
                    font-semibold text-primary
                    transition-colors
                    hover:bg-white/90
                  "
                >
                  {primaryAction.label}

                  <ArrowRight
                    aria-hidden="true"
                    className="size-4"
                  />
                </Link>
              )}

              {secondaryAction && (
                <Link
                  href={secondaryAction.href}
                  className="
                    text-[0.9375rem]
                    font-semibold
                    text-white
                    underline
                    decoration-white/70
                    decoration-2
                    underline-offset-4
                    transition-colors
                    hover:text-white/80
                  "
                >
                  {secondaryAction.label}
                </Link>
              )}
            </FadeIn>
          )}

          {/* ADDITIONAL CONTENT */}
          {children && (
            <FadeIn
              standalone
              delay={0.5}
              className="mt-10 text-white"
            >
              {children}
            </FadeIn>
          )}
        </div>
      </Container>
    </section>
  );
}
