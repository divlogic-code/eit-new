
import { ScrollAnimator } from "@/components/animations/ScrollAnimator";
import { PageHero } from "@/components/pages/PageHero";
import { PageSection } from "@/components/pages/PageSection";
import {
  QuickLinksGrid,
  type QuickLink,
} from "@/components/pages/QuickLinksGrid";

import { scStCellContent } from "@/data/about/committees";
import { getRoutesInGroup } from "@/data/site/routes";
import { getCommittee } from "@/lib/content";
import { getRouteMetadata } from "@/lib/metadata";

const path = "/about/sc-st-cell";

export const metadata = getRouteMetadata(path);

export default function Page() {
  const committee = getCommittee("sc-st-cell");

  const links: QuickLink[] = getRoutesInGroup("about", [path]).map(
    (route) => ({
      href: route.path,
      label: route.title,
    })
  );

  return (
    <>
      {/* PAGE HERO */}

      <PageHero
        path={path}
        eyebrow="Student welfare"
        title={["SC/ST", "Cell"]}
        description="Institutional support, welfare assistance, and protection of the interests of SC/ST students, faculty, and staff."
        tone="sand"
      />

      {/* CELL OVERVIEW */}

      <PageSection
        name="default"
        eyebrow="SC/ST Cell"
        title={["Purpose and", "constitution"]}
      >
        <div className="max-w-3xl space-y-5">
          <p className="text-base leading-relaxed text-muted-foreground">
            {scStCellContent.overview}
          </p>

          {committee?.description && (
            <p className="text-base leading-relaxed text-muted-foreground">
              {committee.description}
            </p>
          )}
        </div>
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
        eyebrow="Student and Staff Welfare"
        title={["Cell", "responsibilities"]}
      >
        <div className="grid gap-6 md:grid-cols-3">
          {scStCellContent.responsibilities.map(
            (responsibility, index) => (
              <div
                key={responsibility.title}
                data-anim="card"
                className="rounded-2xl border border-primary/10 bg-white p-7"
              >
                <span className="text-sm font-semibold text-primary/40">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-4 text-lg font-semibold text-primary">
                  {responsibility.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {responsibility.description}
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
        title={["Legal", "reference"]}
      >
        <div
          data-anim="card"
          className="max-w-3xl rounded-2xl border border-primary/10 bg-white p-7"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary/50">
            {scStCellContent.regulatoryFramework.authority}
          </p>

          <h3 className="mt-4 text-xl font-semibold text-primary">
            {scStCellContent.regulatoryFramework.act}
          </h3>

          <div className="mt-5 space-y-2 text-sm text-muted-foreground">
            <p>
              <span className="font-semibold text-primary">
                Reference:
              </span>{" "}
              {scStCellContent.regulatoryFramework.actNumber}
            </p>

            <p>
              <span className="font-semibold text-primary">
                Date:
              </span>{" "}
              {scStCellContent.regulatoryFramework.date}
            </p>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            The institute identifies this legislation and AICTE guidelines
            as the basis for reconstituting its SC/ST Committee.
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
