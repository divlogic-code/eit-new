
import { ScrollAnimator } from "@/components/animations/ScrollAnimator";
import { PageHero } from "@/components/pages/PageHero";
import { PageSection } from "@/components/pages/PageSection";
import {
  QuickLinksGrid,
  type QuickLink,
} from "@/components/pages/QuickLinksGrid";
import { PrintBrochureButton } from "@/components/placements/PrintBrochureButton";
import { getRoutesInGroup } from "@/data/site/routes";
import { recruiters } from "@/data/placements/recruiters";
import { getRouteMetadata } from "@/lib/metadata";

const path = "/placements/brochure";

export const metadata = getRouteMetadata(path);

const highlights = [
  { value: "Industry", label: "Connections and collaboration" },
  { value: "Career", label: "Guidance and preparation" },
  { value: "Recruitment", label: "Placement opportunities" },
  { value: "Skills", label: "Professional development" },
];

const focusAreas = [
  {
    number: "01",
    title: "Career Readiness",
    description:
      "Develop communication, aptitude, interview and professional presentation skills.",
  },
  {
    number: "02",
    title: "Industry Interaction",
    description:
      "Learn about employer expectations through career sessions and industry engagement.",
  },
  {
    number: "03",
    title: "Recruitment Coordination",
    description:
      "Access information about eligibility criteria, recruitment schedules and selection stages.",
  },
  {
    number: "04",
    title: "Continuous Development",
    description:
      "Strengthen technical knowledge, practical skills and workplace readiness throughout your studies.",
  },
];

const process = [
  {
    number: "01",
    title: "Student Registration",
    description:
      "Register with the Training and Placement Cell and provide the academic and career information required for placement activities.",
  },
  {
    number: "02",
    title: "Training and Preparation",
    description:
      "Prepare through aptitude practice, communication development, technical preparation and interview guidance.",
  },
  {
    number: "03",
    title: "Recruiter Engagement",
    description:
      "Explore opportunities communicated by the placement team and review the requirements of participating organisations.",
  },
  {
    number: "04",
    title: "Selection Process",
    description:
      "Participate in the selection rounds specified by the recruiting organisation, subject to its eligibility criteria.",
  },
];

export default function Page() {
  const links: QuickLink[] = getRoutesInGroup("placements", [path]).map(
    (route) => ({
      href: route.path,
      label: route.title,
    }),
  );

  const recruiterList = recruiters.slice(0, 12);

  return (
    <main className="placements-brochure">
      <PageHero
        path={path}
        eyebrow="Training & Placement"
        title={["Your Career.", "Your Next Chapter."]}
        description="Discover the placement support, professional preparation and industry connections available to students at Echelon Institute of Technology."
        tone="peach"
      />

      <PageSection name="default">
        <article className="overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-sm">
          <header className="relative isolate overflow-hidden bg-[#142b27] px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-20 -z-10 h-72 w-72 rounded-full bg-[#c8e2c8]/20 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-24 left-1/3 -z-10 h-64 w-64 rounded-full bg-[#e6b995]/20 blur-3xl"
            />

            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d9e8c8]">
                Echelon Institute of Technology
              </p>

              <p className="mt-10 text-sm font-semibold tracking-[0.2em] text-[#e6b995]">
                TRAINING & PLACEMENT CELL
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                Turning potential
                <br />
                into possibilities.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
                A guide to career preparation, recruitment activities,
                industry engagement and the journey from campus to career.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 print:hidden">
              <PrintBrochureButton />

              <a
                href="#brochure-content"
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore the brochure
              </a>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-5 border-t border-white/15 pt-6 sm:grid-cols-4">
              {highlights.map((item) => (
                <div key={item.value}>
                  <p className="text-lg font-semibold">{item.value}</p>
                  <p className="mt-1 text-sm leading-6 text-white/60">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </header>

          <div
            id="brochure-content"
            className="scroll-mt-24 px-6 py-10 sm:px-10 sm:py-14 lg:px-16"
          >
            <section className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/60">
                About the cell
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                Preparing students for the professional world
              </h2>

              <p className="mt-5 leading-8 text-muted-foreground">
                The Training and Placement Cell supports students in preparing
                for employment and engaging with recruiting organisations.
                Its activities can include career guidance, employability
                training, recruitment coordination and communication between
                students and employers.
              </p>

              <p className="mt-4 leading-8 text-muted-foreground">
                Recruitment opportunities and selection criteria vary by
                organisation, role, eligibility requirements and hiring cycle.
                Students should follow the official instructions shared for
                each opportunity.
              </p>
            </section>

            <section className="mt-12" aria-labelledby="focus-areas-title">
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/60">
                  Our focus
                </p>
                <h3
                  id="focus-areas-title"
                  className="mt-2 text-2xl font-semibold tracking-tight text-primary"
                >
                  Building career-ready graduates
                </h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {focusAreas.map((item) => (
                  <article
                    key={item.number}
                    data-anim="card"
                    className="rounded-2xl border border-primary/10 bg-[#faf9f6] p-6"
                  >
                    <span className="text-sm font-semibold tracking-widest text-primary/50">
                      {item.number}
                    </span>

                    <h4 className="mt-3 text-lg font-semibold text-primary">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </article>
      </PageSection>

      <PageSection
        name="default"
        bg="surface"
        eyebrow="The journey"
        title={["From campus", "to career"]}
      >
        <div className="grid gap-5 md:grid-cols-2">
          {process.map((step) => (
            <article
              key={step.number}
              data-anim="card"
              className="rounded-2xl border border-primary/10 bg-white p-6 sm:p-8"
            >
              <p className="text-sm font-semibold tracking-widest text-primary/50">
                STEP {step.number}
              </p>

              <h3 className="mt-3 text-xl font-semibold text-primary">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </PageSection>

      <PageSection
        name="default"
        eyebrow="Industry connections"
        title={["Recruiters and", "industry partners"]}
      >
        <p className="mb-8 max-w-2xl leading-7 text-muted-foreground">
          Explore organisations listed in the institute&apos;s placement
          recruiter directory. Their appearance here does not guarantee
          recruitment in a particular academic year.
        </p>

        {recruiterList.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {recruiterList.map((recruiter) => (
              <article
                key={recruiter.id}
                className="flex min-h-24 items-center justify-center rounded-2xl border border-primary/10 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                {recruiter.logo?.src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={recruiter.logo.src}
                    alt={recruiter.logo.alt || recruiter.name}
                    className="max-h-14 w-full object-contain"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-center text-sm font-semibold text-primary">
                    {recruiter.name}
                  </span>
                )}
              </article>
            ))}
          </div>
        ) : (
          <p className="rounded-2xl border border-primary/10 bg-white p-6 text-sm text-muted-foreground">
            Recruiter information will be published here when available.
          </p>
        )}
      </PageSection>

      <PageSection
        name="default"
        bg="surface"
        eyebrow="Continue exploring"
        title={["Your placement", "resources"]}
      >
        <QuickLinksGrid links={links} columns={3} />
      </PageSection>

      <ScrollAnimator />
    </main>
  );
}
