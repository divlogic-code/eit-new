
import { ScrollAnimator } from "@/components/animations/ScrollAnimator";
import { PageHero } from "@/components/pages/PageHero";
import { PageSection } from "@/components/pages/PageSection";
import {
  QuickLinksGrid,
  type QuickLink,
} from "@/components/pages/QuickLinksGrid";
import { SectionNote } from "@/components/pages/SectionNote";

import { iqacContent } from "@/data/about/committees";
import { getRoutesInGroup } from "@/data/site/routes";
import { getCommittee } from "@/lib/content";
import { getRouteMetadata } from "@/lib/metadata";

const path = "/about/iqac";

export const metadata = getRouteMetadata(path);

export default function Page() {
  const committee = getCommittee("iqac");

  const links: QuickLink[] = getRoutesInGroup("about", [
    path,
  ]).map((route) => ({
    href: route.path,
    label: route.title,
  }));

  return (
    <>
      <PageHero
        path={path}
        eyebrow="Quality assurance"
        title={["Internal Quality", "Assurance Cell"]}
        description="Driving continuous academic and administrative quality improvement at Echelon Institute of Technology."
        tone="mist"
      />

      {/* OVERVIEW */}

      <PageSection
        name="default"
        eyebrow="About IQAC"
        title={["A culture of", "continuous improvement"]}
      >
        <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
          {committee?.description}
        </p>
      </PageSection>

      {/* OBJECTIVES */}

      <PageSection
        name="default"
        bg="surface"
        eyebrow="Our Objectives"
        title={["Building", "quality culture"]}
      >
        <div className="grid gap-6 sm:grid-cols-2">
          {iqacContent.objectives.map((item, index) => (
            <div
              key={index}
              data-anim="card"
              className="rounded-2xl border border-primary/10 bg-white p-7"
            >
              <span className="text-sm font-semibold text-primary/40">
                0{index + 1}
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

      {/* QUALITY POLICY */}

      <PageSection
        name="default"
        eyebrow="Quality Policy"
        title={["Our commitment", "to excellence"]}
      >
        <ul className="grid gap-4 sm:grid-cols-2">
          {iqacContent.qualityPolicy.map((item, index) => (
            <li
              key={index}
              data-anim="card"
              className="rounded-2xl border border-primary/10 bg-white p-6 text-sm leading-relaxed text-primary/80"
            >
              {item}
            </li>
          ))}
        </ul>
      </PageSection>

      {/* KEY FUNCTIONS */}

      <PageSection
        name="default"
        bg="surface"
        eyebrow="Responsibilities"
        title={["Key functions", "of IQAC"]}
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {iqacContent.functions.map((item, index) => (
            <div
              key={index}
              data-anim="card"
              className="rounded-2xl border border-primary/10 bg-white p-6"
            >
              <h3 className="text-base font-semibold text-primary">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </PageSection>

      {/* IMPACT */}

      <PageSection
        name="default"
        eyebrow="Institutional Impact"
        title={["Strengthening", "academic excellence"]}
      >
        <ul className="space-y-4">
          {iqacContent.impact.map((item, index) => (
            <li
              key={index}
              data-anim="row"
              className="flex gap-4 border-b border-primary/10 py-4"
            >
              <span className="font-semibold text-primary/40">
                0{index + 1}
              </span>

              <p className="text-base text-primary/80">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </PageSection>

      {/* IQAC COMPOSITION */}

      <PageSection
        name="default"
        bg="surface"
        eyebrow="IQAC Composition"
        title={["The people behind", "quality assurance"]}
      >
        {committee && committee.members.length > 0 ? (
          <ul className="divide-y divide-primary/10 border-y border-primary/10">
            {committee.members.map((member, index) => (
              <li
                key={index}
                data-anim="row"
                className="flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-base font-semibold text-primary">
                    {member.name}
                  </p>

                  {member.designation && (
                    <p className="text-sm text-muted-foreground">
                      {member.designation}
                    </p>
                  )}
                </div>

                <p className="text-sm font-medium text-muted-foreground">
                  {member.role}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <SectionNote title="IQAC composition is being finalised">
            Member details will appear once supplied.
          </SectionNote>
        )}
      </PageSection>

      {/* ABOUT HEAD IQAC */}

      <PageSection
        name="default"
        eyebrow="Head IQAC"
        title={["Meet", "Prof. Sunil Verma"]}
      >
        <div className="max-w-4xl space-y-5">
          {iqacContent.head.about.map((paragraph, index) => (
            <p
              key={index}
              className="text-base leading-relaxed text-muted-foreground"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </PageSection>

      {/* MESSAGE FROM HEAD IQAC */}

      <PageSection
        name="default"
        bg="surface"
        eyebrow="Leadership Message"
        title={["A message from", "Head IQAC"]}
      >
        <div className="max-w-4xl space-y-5">
          {iqacContent.head.message.map((paragraph, index) => (
            <p
              key={index}
              className="text-base leading-relaxed text-primary/80"
            >
              {paragraph}
            </p>
          ))}

          <div className="border-t border-primary/10 pt-6">
            <p className="font-semibold text-primary">
              {iqacContent.head.name}
            </p>

            <p className="text-sm text-muted-foreground">
              {iqacContent.head.designation}
            </p>

            <a
              href={`mailto:${iqacContent.head.email}`}
              className="mt-2 inline-block text-sm font-medium text-primary underline underline-offset-4"
            >
              {iqacContent.head.email}
            </a>
          </div>
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
