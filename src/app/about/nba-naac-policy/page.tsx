
import { ScrollAnimator } from "@/components/animations/ScrollAnimator";
import { PageHero } from "@/components/pages/PageHero";
import { PageSection } from "@/components/pages/PageSection";
import {
  QuickLinksGrid,
  type QuickLink,
} from "@/components/pages/QuickLinksGrid";

import { nbaNaacContent } from "@/data/about/committees";
import { documents } from "@/data/site/documents";
import { getRoutesInGroup } from "@/data/site/routes";
import { getRouteMetadata } from "@/lib/metadata";

const path = "/about/nba-naac-policy";

export const metadata = getRouteMetadata(path);

export default function Page() {
  const nbaLetter = documents.find(
    (document) => document.id === "nba-letter"
  );

  const nbaLetterUrl = nbaLetter
    ? nbaLetter.available
      ? nbaLetter.file
      : `https://eitfaridabad.com${nbaLetter.legacyPath}`
    : null;

  const links: QuickLink[] = getRoutesInGroup("about", [path]).map(
    (route) => ({
      href: route.path,
      label: route.title,
    })
  );

  return (
    <>
      <PageHero
        path={path}
        eyebrow="Quality assurance"
        title={["NBA and NAAC", "Policy"]}
        description="Policy, program and process framework aligned with NBA and NAAC frameworks and the institutional Vision and Mission."
        tone="sage"
      />

      {/* OVERVIEW */}

      <PageSection
        name="default"
        eyebrow="Accreditation"
        title={["Policy", "overview"]}
      >
        <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
          {nbaNaacContent.overview}
        </p>
      </PageSection>

      {/* VISION & MISSION */}

      <PageSection
        name="default"
        bg="surface"
        eyebrow="Institutional Direction"
        title={["Vision and", "Mission"]}
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <div
            data-anim="card"
            className="rounded-2xl border border-primary/10 bg-white p-7"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-primary/50">
              Vision
            </p>

            <p className="mt-5 text-base leading-relaxed text-primary/80">
              {nbaNaacContent.vision}
            </p>
          </div>

          <div className="space-y-4">
            {nbaNaacContent.mission.map((mission) => (
              <div
                key={mission.id}
                data-anim="card"
                className="rounded-2xl border border-primary/10 bg-white p-6"
              >
                <p className="text-sm font-semibold text-primary">
                  {mission.id}
                </p>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {mission.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* POLICY FRAMEWORK */}

      <PageSection
        name="default"
        eyebrow="Policy Framework"
        title={["Policies for", "institutional quality"]}
      >
        <div className="grid gap-6 md:grid-cols-2">
          {nbaNaacContent.policies.map((policy, index) => (
            <div
              key={policy.title}
              data-anim="card"
              className="rounded-2xl border border-primary/10 bg-white p-7"
            >
              <span className="text-sm font-semibold text-primary/40">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-4 text-lg font-semibold text-primary">
                {policy.title}
              </h3>

              <ul className="mt-4 space-y-3">
                {policy.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </PageSection>

      {/* PROGRAM STRUCTURE */}

      <PageSection
        name="default"
        bg="surface"
        eyebrow="Program Structure"
        title={["Programs that support", "the framework"]}
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {nbaNaacContent.programs.map((program, index) => (
            <article
              key={program.title}
              data-anim="card"
              className="rounded-2xl border border-primary/10 bg-white p-6"
            >
              <span className="text-xs font-semibold tracking-widest text-primary/40">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-4 text-base font-semibold text-primary">
                {program.title}
              </h3>

              <ul className="mt-4 space-y-3">
                {program.points.map((point) => (
                  <li
                    key={point}
                    className="text-sm leading-relaxed text-muted-foreground"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </PageSection>

      {/* PROCESS STRUCTURE */}

      <PageSection
        name="default"
        eyebrow="Process Structure"
        title={["From policy", "to practice"]}
      >
        <div className="divide-y divide-primary/10 border-y border-primary/10">
          {nbaNaacContent.processes.map((process, index) => (
            <div
              key={process.title}
              data-anim="row"
              className="grid gap-4 py-7 md:grid-cols-[80px_1fr_2fr]"
            >
              <span className="text-sm font-semibold text-primary/40">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="font-semibold text-primary">
                {process.title}
              </h3>

              <ul className="space-y-2">
                {process.points.map((point) => (
                  <li
                    key={point}
                    className="text-sm leading-relaxed text-muted-foreground"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </PageSection>

      {/* ACCREDITATION ALIGNMENT */}

      <PageSection
        name="default"
        bg="surface"
        eyebrow="Accreditation Alignment"
        title={["Aligned with", "NBA and NAAC"]}
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div
            data-anim="card"
            className="rounded-2xl border border-primary/10 bg-white p-7"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-primary/50">
              NBA
            </p>

            <h3 className="mt-3 text-xl font-semibold text-primary">
              NBA Alignment
            </h3>

            <ul className="mt-5 space-y-4">
              {nbaNaacContent.accreditation.nba.map((point) => (
                <li
                  key={point}
                  className="text-sm leading-relaxed text-muted-foreground"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div
            data-anim="card"
            className="rounded-2xl border border-primary/10 bg-white p-7"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-primary/50">
              NAAC
            </p>

            <h3 className="mt-3 text-xl font-semibold text-primary">
              NAAC Alignment
            </h3>

            <ul className="mt-5 space-y-4">
              {nbaNaacContent.accreditation.naac.map((point) => (
                <li
                  key={point}
                  className="text-sm leading-relaxed text-muted-foreground"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PageSection>

      {/* PUBLIC VALUE */}

      <PageSection
        name="default"
        eyebrow="Public Value"
        title={["Institutional", "distinctiveness"]}
      >
        <div className="grid gap-6 md:grid-cols-3">
          {nbaNaacContent.distinctiveness.map((item, index) => (
            <div
              key={item.title}
              data-anim="card"
              className="rounded-2xl border border-primary/10 bg-white p-7"
            >
              <span className="text-sm font-semibold text-primary/40">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-4 text-lg font-semibold text-primary">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </PageSection>

      {/* NBA ACCREDITATION LETTER */}

      {nbaLetter && nbaLetterUrl && (
        <PageSection
          name="default"
          bg="surface"
          eyebrow="Official Documents"
          title={["NBA Accreditation", "Letter"]}
        >
          <div className="max-w-xl">
            <a
              href={nbaLetterUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-anim="card"
              className="group block rounded-2xl border border-primary/10 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg, #D1EDD3 0%, #F0FAF0 100%)",
              }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-primary/60">
                National Board of Accreditation
              </p>

              <h3 className="mt-4 text-xl font-semibold text-primary">
                {nbaLetter.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                View the official NBA accreditation letter of Echelon
                Institute of Technology.
              </p>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                View PDF <span aria-hidden="true">↗</span>
              </span>
            </a>
          </div>
        </PageSection>
      )}

      {/* ABOUT NAVIGATION */}

      <PageSection
        name="default"
        eyebrow="More"
        title={["Explore", "About EIT"]}
      >
        <QuickLinksGrid links={links} columns={3} />
      </PageSection>

      <ScrollAnimator />
    </>
  );
}
