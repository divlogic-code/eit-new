
import { ScrollAnimator } from "@/components/animations/ScrollAnimator";
import { PageHero } from "@/components/pages/PageHero";
import { PageSection } from "@/components/pages/PageSection";
import { QuickLinksGrid, type QuickLink } from "@/components/pages/QuickLinksGrid";
import { getRoutesInGroup } from "@/data/site/routes";
import { getRouteMetadata } from "@/lib/metadata";

const path = "/placements/highest-performers";

export const metadata = getRouteMetadata(path);

const performers = [
  {
    name: "Sameer Ansari",
    role: "Software Developer",
    package: "50.5 LPA",
    image: "https://eitfaridabad.com/images/students/ansari.png",
    featured: true,
  },
  {
    name: "Arzoo Malik",
    role: "Software Engineer",
    package: "20 LPA",
    image: "https://eitfaridabad.com/images/Arzoo-Malik.png",
    featured: false,
  },
  {
    name: "Rohit Redua",
    role: "Sub Divisional Officer (SDO)",
    package: null,
    image: "https://eitfaridabad.com/images/Rohit-Redhu.png",
    featured: false,
  },
  {
    name: "Gaurav Saini",
    role: "Sub Inspector (CBI)",
    package: null,
    image: "https://eitfaridabad.com/images/gaurav-saini.png",
    featured: false,
  },
  {
    name: "Rounak Kumar",
    role: "O&M Engineer",
    package: null,
    image: "https://eitfaridabad.com/images/Rounak-kumar.png",
    featured: false,
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
        eyebrow="Student Achievement"
        title={["Highest", "Performers."]}
        description="Celebrating Echelon students who are building successful careers across software development, engineering and public service."
        tone="peach"
      />

      <PageSection name="default">
        <div className="relative overflow-hidden rounded-3xl bg-[#142b27] px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-14">
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#c8e2c8]/15 blur-3xl"
          />

          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d9e8c8]">
                Excellence in action
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
                Ambition meets opportunity.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                Meet students recognised for their career achievements in
                technology, engineering and public service.
              </p>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/5 px-6 py-5 md:min-w-44">
              <p className="text-4xl font-semibold tracking-tight text-[#d9e8c8]">
                {performers.length.toString().padStart(2, "0")}
              </p>
              <p className="mt-2 text-sm text-white/65">
                Featured achievers
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection
        name="default"
        eyebrow="The achievers"
        title={["Talent that", "moves forward"]}
      >
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {performers.map((performer, index) => (
            <article
              key={performer.name}
              data-anim="card"
              className={`group overflow-hidden rounded-3xl border border-primary/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                performer.featured ? "sm:col-span-2 xl:col-span-1" : ""
              }`}
            >
              <div className="relative flex h-64 items-center justify-center overflow-hidden bg-[#f2f0e9] sm:h-72">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#142b27]/10 to-transparent"
                />

                <span className="absolute left-5 top-5 z-10 rounded-full border border-white/70 bg-white/85 px-3 py-1.5 text-xs font-semibold tracking-wider text-primary backdrop-blur">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={performer.image}
                  alt={`Portrait of ${performer.name}`}
                  loading={index < 3 ? "eager" : "lazy"}
                  className="relative h-full w-full object-contain object-bottom transition duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/50">
                  Career achievement
                </p>

                <h3 className="mt-3 text-xl font-semibold tracking-tight text-primary sm:text-2xl">
                  {performer.name}
                </h3>

                <p className="mt-2 min-h-12 text-sm leading-6 text-muted-foreground">
                  {performer.role}
                </p>

                {performer.package && (
                  <div className="mt-5 border-t border-primary/10 pt-5">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                      Reported package
                    </p>
                    <p className="mt-2 text-3xl font-semibold tracking-tight text-primary">
                      {performer.package}
                    </p>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-xs leading-6 text-muted-foreground">
          Salary figures are shown only where supplied in the provided content.
          No package figure has been assumed for the other profiles.
        </p>
      </PageSection>

      <PageSection
        name="default"
        bg="surface"
        eyebrow="Explore more"
        title={["Your placement", "resources"]}
      >
        <QuickLinksGrid links={links} columns={3} />
      </PageSection>

      <ScrollAnimator />
    </main>
  );
}
