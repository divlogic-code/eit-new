import { ScrollAnimator } from "@/components/animations/ScrollAnimator";
import { PageHero } from "@/components/pages/PageHero";
import { PageSection } from "@/components/pages/PageSection";
import {
  QuickLinksGrid,
  type QuickLink,
} from "@/components/pages/QuickLinksGrid";

import { internalCommitteeWomenCellContent } from "@/data/about/committees";
import { getRoutesInGroup } from "@/data/site/routes";
import { getCommittee } from "@/lib/content";
import { getRouteMetadata } from "@/lib/metadata";

const path = "/about/internal-committee-women-cell";

export const metadata = getRouteMetadata(path);

export default function Page() {
  const committee = getCommittee("internal-committee-women-cell");

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
        eyebrow="Student welfare"
        title={["Internal Committee", "and Women Cell"]}
        description="A dedicated institutional mechanism for addressing grievances and supporting students and staff within the institute."
        tone="blush"
      />

      {/* COMMITTEE OVERVIEW */}

      <PageSection
        name="default"
        eyebrow="Internal Committee"
        title={["Purpose and", "constitution"]}
      >
        {committee?.description && (
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
            {committee.description}
          </p>
        )}
      </PageSection>

      {/* COMMITTEE MEMBERS */}

      <PageSection
        name="default"
        bg="surface"
        eyebrow="Committee"
        title={["Members and", "composition"]}
      >
        {committee && committee.members.length > 0 && (
          <div className="divide-y divide-primary/10 border-y border-primary/10">
            {committee.members.map((member, index) => (
              <div
                key={`${member.name}-${index}`}
                data-anim="row"
                className="grid gap-3 py-6 sm:grid-cols-[60px_1fr_auto] sm:items-center"
              >
                <span className="text-sm font-semibold text-primary/40">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <p className="text-base font-semibold text-primary">
                    {member.name}
                  </p>

                  {member.designation && (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {member.designation}
                    </p>
                  )}
                </div>

                <div className="sm:text-right">
                  <p className="text-sm font-medium text-primary">
                    {member.role}
                  </p>

                  {member.contact && (
                    <p className="mt-1 text-xs text-muted-foreground">
                      {member.contact}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </PageSection>

      {/* RESPONSIBILITIES */}

      <PageSection
        name="default"
        eyebrow="Responsibilities"
        title={["Committee", "responsibilities"]}
      >
        <div className="grid gap-6 md:grid-cols-2">
          {internalCommitteeWomenCellContent.responsibilities.map(
            (responsibility, index) => (
              <div
                key={responsibility}
                data-anim="card"
                className="rounded-2xl border border-primary/10 bg-white p-7"
              >
                <span className="text-sm font-semibold text-primary/40">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {responsibility}
                </p>
              </div>
            )
          )}
        </div>
      </PageSection>

      {/* REGULATORY FRAMEWORK */}

      <PageSection
        name="default"
        bg="surface"
        eyebrow="Regulatory Framework"
        title={["AICTE", "guidelines"]}
      >
        <div
          data-anim="card"
          className="max-w-3xl rounded-2xl border border-primary/10 bg-white p-7"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary/50">
            {
              internalCommitteeWomenCellContent.regulatoryFramework
                .authority
            }
          </p>

          <h3 className="mt-4 text-xl font-semibold text-primary">
            Internal Committee Guidelines
          </h3>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            The Internal Committee has been constituted in accordance with
            AICTE guidelines under reference{" "}
            <span className="font-semibold text-primary">
              {
                internalCommitteeWomenCellContent.regulatoryFramework
                  .reference
              }
            </span>
            , dated{" "}
            <span className="font-semibold text-primary">
              {internalCommitteeWomenCellContent.regulatoryFramework.date}
            </span>
            .
          </p>
        </div>
      </PageSection>

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