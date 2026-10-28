
import { ScrollAnimator } from "@/components/animations/ScrollAnimator";
import { PageHero } from "@/components/pages/PageHero";
import { PageSection } from "@/components/pages/PageSection";
import {
  QuickLinksGrid,
  type QuickLink,
} from "@/components/pages/QuickLinksGrid";
import { getRoutesInGroup } from "@/data/site/routes";
import { getRouteMetadata } from "@/lib/metadata";

const path = "/placements/hr-conclave";

export const metadata = getRouteMetadata(path);

const gallery = [
  {
    src: "https://eitfaridabad.com/images/hr-conclave/1.jpg",
    alt: "HR Conclave at Echelon Institute of Technology, photograph 1",
  },
  {
    src: "https://eitfaridabad.com/images/hr-conclave/2.jpg",
    alt: "Corporate professionals attending the HR Conclave, photograph 2",
  },
  {
    src: "https://eitfaridabad.com/images/hr-conclave/3.jpg",
    alt: "HR Conclave event highlights, photograph 3",
  },
  {
    src: "https://eitfaridabad.com/images/hr-conclave/4.jpg",
    alt: "Industry interaction during the HR Conclave, photograph 4",
  },
  {
    src: "https://eitfaridabad.com/images/hr-conclave/5.jpg",
    alt: "HR Conclave participants, photograph 5",
  },
  {
    src: "https://eitfaridabad.com/images/hr-conclave/6.jpg",
    alt: "HR Conclave at EIT, photograph 6",
  },
  {
    src: "https://eitfaridabad.com/images/hr-conclave/7.jpg",
    alt: "HR Conclave gathering, photograph 7",
  },
  {
    src: "https://eitfaridabad.com/images/hr-conclave/8.jpg",
    alt: "HR Conclave event moments, photograph 8",
  },
];

const highlights = [
  {
    number: "50+",
    label: "Corporate professionals",
  },
  {
    number: "MAR",
    label: "March 2025",
  },
  {
    number: "EIT",
    label: "Faridabad",
  },
];

const outcomes = [
  {
    number: "01",
    title: "Industry Insights",
    description:
      "Understand emerging workplace trends, hiring expectations and the changing needs of employers across industries.",
  },
  {
    number: "02",
    title: "Career Readiness",
    description:
      "Gain actionable guidance on the skills, professional behaviours and preparation needed to enter the workforce.",
  },
  {
    number: "03",
    title: "Academic–Industry Collaboration",
    description:
      "Create a platform for corporate professionals and educators to exchange perspectives on industry requirements.",
  },
];

export default function Page() {
  const links: QuickLink[] = getRoutesInGroup("placements", [path]).map(
    (route) => ({
      href: route.path,
      label: route.title,
    }),
  );

  return (
    <main>
      <PageHero
        path={path}
        eyebrow="Industry Interaction"
        title={["HR Conclave.", "Ideas Into Impact."]}
        description="Connecting corporate expertise with student potential through meaningful conversations about careers, skills and the future of work."
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

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d9e8c8]">
              Echelon Institute of Technology · Faridabad
            </p>

            <div className="mt-10 max-w-3xl">
              <p className="text-sm font-semibold tracking-[0.2em] text-[#e6b995]">
                MARCH 2025
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
                Where industry
                <br />
                meets ambition.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                Echelon Institute of Technology successfully organised an HR
                Conclave bringing together over 50 distinguished corporate
                professionals from diverse industries to discuss evolving
                workplace expectations and career opportunities.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-4 border-t border-white/15 pt-6 sm:grid-cols-3 sm:gap-6">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <p className="text-3xl font-semibold tracking-tight text-[#d9e8c8] sm:text-4xl">
                    {item.number}
                  </p>
                  <p className="mt-2 text-sm text-white/65">{item.label}</p>
                </div>
              ))}
            </div>
          </header>

          <div className="px-6 py-10 sm:px-10 sm:py-14 lg:px-16">
            <section className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/60">
                About the event
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                Conversations that prepare students for tomorrow
              </h2>

              <p className="mt-5 leading-8 text-muted-foreground">
                The HR Conclave provided valuable insights into emerging
                industry trends, hiring expectations and the evolving skill
                demands of the modern workplace. By bringing corporate
                professionals into conversation with the academic community,
                the event helped students better understand the expectations
                they may encounter in their professional journeys.
              </p>

              <p className="mt-4 leading-8 text-muted-foreground">
                The conclave also created a strategic platform to strengthen
                academic–industry collaboration and inform curriculum
                development through practical industry perspectives. It
                reaffirmed EIT&apos;s commitment to holistic student development
                and its vision of producing future-ready professionals.
              </p>
            </section>

            <section className="mt-12" aria-labelledby="event-outcomes-title">
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/60">
                  Key takeaways
                </p>
                <h3
                  id="event-outcomes-title"
                  className="mt-2 text-2xl font-semibold tracking-tight text-primary"
                >
                  Three areas of impact
                </h3>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {outcomes.map((item) => (
                  <article
                    key={item.number}
                    data-anim="card"
                    className="rounded-2xl border border-primary/10 bg-[#faf9f6] p-6"
                  >
                    <p className="text-sm font-semibold tracking-widest text-primary/45">
                      {item.number}
                    </p>
                    <h4 className="mt-4 text-lg font-semibold text-primary">
                      {item.title}
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
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
        eyebrow="Event highlights"
        title={["A closer look", "at the conclave"]}
      >
        <p className="mb-8 max-w-2xl leading-7 text-muted-foreground">
          Explore moments from the HR Conclave and the conversations bringing
          industry perspectives to the Echelon campus.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((image, index) => (
            <figure
              key={image.src}
              data-anim="card"
              className={`group overflow-hidden rounded-2xl border border-primary/10 bg-white ${
                index === 0 ? "sm:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div
                className={`overflow-hidden bg-[#f2f0e9] ${
                  index === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image.src}
                  alt={image.alt}
                  loading={index < 3 ? "eager" : "lazy"}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
              </div>

              <figcaption className="flex items-center justify-between gap-3 px-4 py-3">
                <span className="text-sm font-medium text-primary">
                  HR Conclave
                </span>
                <span className="text-xs font-semibold tracking-widest text-primary/45">
                  {String(index + 1).padStart(2, "0")} / 08
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </PageSection>

      <PageSection
        name="default"
        bg="surface"
        eyebrow="Continue exploring"
        title={["More placement", "opportunities"]}
      >
        <QuickLinksGrid links={links} columns={3} />
      </PageSection>

      <ScrollAnimator />
    </main>
  );
}
