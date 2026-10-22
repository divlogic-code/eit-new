import { ScrollAnimator } from "@/components/animations/ScrollAnimator";
import { PageHero } from "@/components/pages/PageHero";
import { PageSection } from "@/components/pages/PageSection";
import {
  QuickLinksGrid,
  type QuickLink,
} from "@/components/pages/QuickLinksGrid";

import { whyEitContent } from "@/data/about/why-eit";
import { getRoutesInGroup } from "@/data/site/routes";
import { getRouteMetadata } from "@/lib/metadata";

const path = "/about/why-eit";

export const metadata = getRouteMetadata(path);

export default function Page() {
  const links: QuickLink[] = getRoutesInGroup("about", [path]).map(
    (route) => ({
      href: route.path,
      label: route.title,
    })
  );

  return (
    <>
      {/* HERO */}

      <PageHero
        path={path}
        eyebrow={whyEitContent.eyebrow}
        title={whyEitContent.title}
        description={whyEitContent.description}
        tone="sand"
      />

      {/* INTRODUCTION */}

      <PageSection
        name="default"
        eyebrow="The Echelon Advantage"
        title={["More than", "a classroom"]}
      >
        <div className="max-w-3xl">
          <p className="text-base leading-relaxed text-muted-foreground">
            Echelon Institute of Technology brings together academic
            learning, industry exposure, mentoring, innovation, sports,
            sustainability, and personal development to create a broader
            educational experience for its students.
          </p>
        </div>
      </PageSection>

      {/* WHY ECHELON */}

      <PageSection
        name="default"
        bg="surface"
        eyebrow="Why EIT"
        title={["24 reasons to", "choose Echelon"]}
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {whyEitContent.reasons.map((reason) => (
            <article
              key={reason.id}
              data-anim="card"
              className="group flex h-full flex-col rounded-2xl border border-primary/10 bg-white p-7"
            >
              <div className="flex items-start justify-between gap-5">
                <span className="text-sm font-semibold tracking-wider text-primary/40">
                  {String(reason.id).padStart(2, "0")}
                </span>

                <span
                  aria-hidden="true"
                  className="h-px flex-1 translate-y-2 bg-primary/10"
                />
              </div>

              <h2 className="mt-6 text-xl font-semibold leading-snug text-primary">
                {reason.title}
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </PageSection>

      {/* EXPERIENCE SUMMARY */}

      <PageSection
        name="default"
        eyebrow="Campus Experience"
        title={["Learning beyond", "academics"]}
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div
            data-anim="card"
            className="rounded-2xl border border-primary/10 p-6"
          >
            <p className="text-3xl font-semibold text-primary">17.5</p>
            <p className="mt-2 text-sm font-medium text-primary">
              Acre Campus
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Modern academic, sports, residential, and student facilities.
            </p>
          </div>

          <div
            data-anim="card"
            className="rounded-2xl border border-primary/10 p-6"
          >
            <p className="text-3xl font-semibold text-primary">50+</p>
            <p className="mt-2 text-sm font-medium text-primary">
              Ph.D. Faculty
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Academic and industry experience brought into the classroom.
            </p>
          </div>

          <div
            data-anim="card"
            className="rounded-2xl border border-primary/10 p-6"
          >
            <p className="text-3xl font-semibold text-primary">3000</p>
            <p className="mt-2 text-sm font-medium text-primary">
              Sq. Ft. Leadership Space
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              The Last Centre is dedicated to conscious leadership
              development.
            </p>
          </div>

          <div
            data-anim="card"
            className="rounded-2xl border border-primary/10 p-6"
          >
            <p className="text-3xl font-semibold text-primary">24</p>
            <p className="mt-2 text-sm font-medium text-primary">
              EIT Advantages
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              From academics and mentoring to innovation, sports, and
              industry exposure.
            </p>
          </div>
        </div>
      </PageSection>

      {/* CORE AREAS */}

      <PageSection
        name="default"
        bg="parchment"
        eyebrow="EIT Experience"
        title={["Built around", "student growth"]}
      >
        <div className="grid gap-8 lg:grid-cols-3">
          <div data-anim="card">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary/50">
              Learn
            </p>

            <h3 className="mt-3 text-xl font-semibold text-primary">
              Academic Excellence
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Quality faculty, mentoring, competitive examination
              preparation, digital learning infrastructure, and
              industry-integrated education support academic development.
            </p>
          </div>

          <div data-anim="card">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary/50">
              Explore
            </p>

            <h3 className="mt-3 text-xl font-semibold text-primary">
              Innovation & Industry
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Centres of Excellence, internships, industry partnerships,
              innovation initiatives, and emerging technology training
              connect learning with professional practice.
            </p>
          </div>

          <div data-anim="card">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary/50">
              Grow
            </p>

            <h3 className="mt-3 text-xl font-semibold text-primary">
              Holistic Development
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Sports, clubs, leadership development, social engagement,
              hostel life, sustainability, and emotional learning contribute
              to development beyond academics.
            </p>
          </div>
        </div>
      </PageSection>

      {/* ABOUT NAVIGATION */}

      <PageSection
        name="default"
        bg="surface"
        eyebrow="More"
        title={["Explore", "About EIT"]}
      >
        <QuickLinksGrid links={links} columns={3} />
      </PageSection>

      <ScrollAnimator />
    </>
  );
}