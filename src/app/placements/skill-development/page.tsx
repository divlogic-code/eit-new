
import {
  ArrowUpRight,
  BrainCircuit,
  GraduationCap,
  Layers3,
} from "lucide-react";

import { ScrollAnimator } from "@/components/animations/ScrollAnimator";
import { PageHero } from "@/components/pages/PageHero";
import { PageSection } from "@/components/pages/PageSection";
import {
  QuickLinksGrid,
  type QuickLink,
} from "@/components/pages/QuickLinksGrid";

import { skillDevelopment } from "@/data/placements/skill-development";
import { getRoutesInGroup } from "@/data/site/routes";
import { getRouteMetadata } from "@/lib/metadata";

const path = "/placements/skill-development";

export const metadata = getRouteMetadata(path);

export default function Page() {
  const links: QuickLink[] = getRoutesInGroup(
    "placements",
    [path]
  ).map((route) => ({
    href: route.path,
    label: route.title,
  }));

  const pillarIcons = [GraduationCap, BrainCircuit];

  return (
    <>
      <PageHero
        path={path}
        eyebrow="Training & Placements"
        title={["Skill", "Development"]}
        description="Developing industry-ready professionals through technical training, emerging technologies and essential workplace skills."
        tone="butter"
      />

      {/* DEPARTMENT INTRODUCTION */}
      <PageSection
        name="default"
        bg="surface"
        eyebrow="About the department"
        title={["Building skills", "for the future"]}
      >
        <div
          data-anim="panel-left"
          className="max-w-4xl"
        >
          <p className="text-base leading-8 text-primary/80 md:text-lg">
            {skillDevelopment.description}
          </p>
        </div>
      </PageSection>

      {/* CORE PILLARS */}
      <PageSection
        name="default"
        bg="parchment"
        eyebrow="Our approach"
        title={["Core pillars of", "the department"]}
      >
        <div className="grid gap-6 md:grid-cols-2">
          {skillDevelopment.pillars.map(
            (pillar, index) => {
              const Icon =
                pillarIcons[index] ?? Layers3;

              return (
                <article
                  key={pillar.id}
                  data-anim="card"
                  className="rounded-2xl border border-primary/10 bg-eit-surface p-7 transition-shadow duration-300 hover:shadow-lg md:p-9"
                >
                  <div className="mb-7 flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon
                      aria-hidden="true"
                      className="size-7"
                    />
                  </div>

                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    Pillar {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mb-4 text-xl font-bold tracking-tight text-primary md:text-2xl">
                    {pillar.title}
                  </h3>

                  <p className="text-sm leading-7 text-muted-foreground md:text-base">
                    {pillar.description}
                  </p>
                </article>
              );
            }
          )}
        </div>
      </PageSection>

      {/* TRAINING PARTNERS */}
      <PageSection
        name="default"
        bg="surface"
        eyebrow="Industry collaboration"
        title={["Training partners", "and technologies"]}
      >
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <p className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
            Explore the organizations and training areas
            included in EIT's Skill Development programs.
          </p>

          <span className="rounded-full border border-primary/15 px-4 py-2 text-xs font-semibold text-primary">
            {skillDevelopment.partners.length} Training Entries
          </span>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillDevelopment.partners.map(
            (partner, index) => (
              <article
                key={partner.id}
                data-anim="card"
                className="group flex h-full flex-col rounded-2xl border border-primary/10 bg-eit-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-6 flex items-center justify-between gap-3">
                  <div className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
                    <GraduationCap
                      aria-hidden="true"
                      className="size-5"
                    />
                  </div>

                  <span className="text-xs font-semibold tabular-nums text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mb-3 text-lg font-bold text-primary">
                  {partner.name}
                </h3>

                <div className="mt-auto border-t border-primary/10 pt-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Training Area
                  </p>

                  <p className="flex items-start gap-2 text-sm font-medium leading-6 text-primary/85">
                    <ArrowUpRight
                      aria-hidden="true"
                      className="mt-1 size-4 shrink-0"
                    />
                    {partner.technologies ||
                      "Not specified"}
                  </p>
                </div>
              </article>
            )
          )}
        </div>
      </PageSection>

      {/* MORE PLACEMENT PAGES */}
      <PageSection
        name="default"
        bg="surface"
        eyebrow="More"
        title={["Explore", "placements"]}
      >
        <QuickLinksGrid
          links={links}
          columns={3}
        />
      </PageSection>

      <ScrollAnimator />
    </>
  );
}
