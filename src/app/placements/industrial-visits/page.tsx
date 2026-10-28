
import { ScrollAnimator } from "@/components/animations/ScrollAnimator";
import { PageHero } from "@/components/pages/PageHero";
import { PageSection } from "@/components/pages/PageSection";
import {
  QuickLinksGrid,
  type QuickLink,
} from "@/components/pages/QuickLinksGrid";
import { getRoutesInGroup } from "@/data/site/routes";
import { getRouteMetadata } from "@/lib/metadata";

const path = "/placements/industrial-visits";

export const metadata = getRouteMetadata(path);

const companies = [
  {
    name: "Wipro",
    image: "https://eitfaridabad.com/images/industrial/38.png",
    description:
      "Explore professional technology environments and connect academic knowledge with real-world industry applications.",
  },
  {
    name: "Excellencia Infinitum",
    image: "https://eitfaridabad.com/images/industrial/36.png",
    description:
      "Gain exposure to professional practices, industrial environments and the expectations of the workplace.",
  },
  {
    name: "Accenture",
    image: "https://eitfaridabad.com/images/industrial/37.png",
    description:
      "Discover how classroom concepts relate to technology, business services and professional problem-solving.",
  },
];

const gallery = [
  ...Array.from({ length: 13 }, (_, index) => {
    const imageNumber = index + 36;

    const company =
      imageNumber === 36
        ? "Excellencia Infinitum"
        : imageNumber === 37
          ? "Accenture"
          : imageNumber === 38
            ? "Wipro"
            : "Industry Visit";

    return {
      src: `https://eitfaridabad.com/images/industrial/${imageNumber}.png`,
      alt: `${company} industrial visit photograph`,
      company,
    };
  }),
  ...Array.from({ length: 8 }, (_, index) => ({
    src: `https://eitfaridabad.com/images/industrial-gallery/${index + 1}.jpg`,
    alt: `Industrial visit gallery photograph ${index + 14}`,
    company: "Industrial Visits",
  })),
];

const learningPoints = [
  {
    number: "01",
    title: "Learning beyond campus",
    description:
      "Connect classroom concepts with their practical application in industrial environments.",
  },
  {
    number: "02",
    title: "Technology in practice",
    description:
      "Explore emerging technologies, operational systems and real-world processes.",
  },
  {
    number: "03",
    title: "Workplace exposure",
    description:
      "Observe professional environments, workplace cultures and industry practices.",
  },
  {
    number: "04",
    title: "Career perspective",
    description:
      "Develop a clearer understanding of professional expectations and career opportunities.",
  },
];

export default function IndustrialVisitsPage() {
  const placementRoutes = getRoutesInGroup("placements", [path]);

  const placementLinks: QuickLink[] = placementRoutes.map((route) => ({
    href: route.path,
    label: route.title,
  }));

  return (
    <main className="overflow-hidden bg-[#f7f7f2] text-[#18352e]">
      <PageHero
        path={path}
        eyebrow="Learning Beyond Campus"
        title={["Industrial", "Visits."]}
        description="Step inside the world of industry. Connect classroom knowledge with real technologies, working environments and professional practices."
        tone="peach"
      />

      {/* Introduction */}
      <section className="relative overflow-hidden bg-[#142b27] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#e6b99c]">
              Education in the real world
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Knowledge takes
              <span className="block text-[#e6b99c]">
                a field trip.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-white/75 sm:text-lg">
            The Institute facilitates regular industrial visits across all
            courses. These experiential trips bridge classroom concepts and
            actual industrial applications, allowing students to explore
            emerging technologies, operational systems and workplace cultures.
            Direct engagement with industry experts enriches their practical
            understanding and supports their professional development.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-7xl grid-cols-2 gap-6 border-t border-white/15 pt-8 sm:grid-cols-4">
          {[
            "Industry exposure",
            "Practical learning",
            "Technology insights",
            "Career awareness",
          ].map((label, index) => (
            <div key={label}>
              <p className="mb-2 text-xs tracking-[0.2em] text-[#e6b99c]">
                0{index + 1}
              </p>
              <p className="text-sm font-medium sm:text-base">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured organizations */}
      <PageSection
        name="industrial-visit-organizations"
        eyebrow="Industry Connections"
        title={["Learning from", "the workplace."]}
        description="Explore the organizations featured in our industrial visit collection and see how industry exposure enriches the student experience."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {companies.map((company, index) => (
            <article
              key={company.name}
              className="group overflow-hidden rounded-2xl border border-[#18352e]/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#e9ece5]">
                <img
                  src={company.image}
                  alt={`${company.name} industrial visit`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <span className="absolute left-4 top-4 rounded-full bg-[#142b27]/90 px-3 py-1.5 text-xs font-semibold tracking-wider text-white">
                  0{index + 1}
                </span>
              </div>

              <div className="p-6 sm:p-7">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#a66e4e]">
                  Featured organization
                </p>

                <h3 className="text-2xl font-semibold tracking-tight">
                  {company.name}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#52645e]">
                  {company.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </PageSection>

      {/* Learning outcomes */}
      <section className="bg-[#eaece4] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#a66e4e]">
              The value of experience
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              Four ways real-world exposure changes learning.
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-[#52645e]">
              Industrial visits help students understand the relationship
              between academic knowledge and the demands of professional life.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-[#18352e]/10 bg-[#18352e]/10 sm:grid-cols-2 lg:grid-cols-4">
            {learningPoints.map((point) => (
              <article
                key={point.number}
                className="bg-[#f7f7f2] p-6 sm:p-8"
              >
                <p className="mb-8 text-sm font-semibold tracking-[0.2em] text-[#a66e4e]">
                  {point.number}
                </p>

                <h3 className="text-xl font-semibold">
                  {point.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#52645e]">
                  {point.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Photo gallery */}
      <PageSection
        name="industrial-visit-gallery"
        eyebrow="Inside the Experience"
        title={["Moments from our", "industrial visits."]}
        description="Browse photographs from the industrial visit collection. Select any image to view it at full size."
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {gallery.map((item, index) => (
            <a
              key={item.src}
              href={item.src}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${item.company} photo ${index + 1} in a new tab`}
              className={`group relative block overflow-hidden rounded-xl bg-[#e9ece5] ${
                index % 7 === 0
                  ? "aspect-[3/4] sm:row-span-2"
                  : "aspect-[4/3]"
              }`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#142b27]/80 via-transparent to-transparent opacity-80 transition group-hover:opacity-100" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 text-white sm:p-4">
                <div>
                  <p className="text-sm font-semibold">
                    {item.company}
                  </p>

                  <p className="mt-1 text-xs text-white/75">
                    Photograph {String(index + 1).padStart(2, "0")}
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="text-lg transition-transform group-hover:translate-x-1"
                >
                  ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </PageSection>

      {/* Placement navigation */}
      <section className="bg-[#142b27] px-5 py-16 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e6b99c]">
            Explore more
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Discover opportunities beyond the classroom.
          </h2>

          <p className="mt-3 max-w-xl leading-7 text-white/70">
            Explore other placement initiatives, industry interactions and
            career development activities.
          </p>

          <div className="mt-8">
            <QuickLinksGrid links={placementLinks} />
          </div>
        </div>
      </section>

      <ScrollAnimator />
    </main>
  );
}
