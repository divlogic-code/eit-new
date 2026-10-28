
import { ScrollAnimator } from "@/components/animations/ScrollAnimator";
import { PageHero } from "@/components/pages/PageHero";
import { PageSection } from "@/components/pages/PageSection";
import {
  QuickLinksGrid,
  type QuickLink,
} from "@/components/pages/QuickLinksGrid";
import { getRoutesInGroup } from "@/data/site/routes";
import { getRouteMetadata } from "@/lib/metadata";

const path = "/placements/expert-lectures";

export const metadata = getRouteMetadata(path);

const gallery = [
  {
    src: "https://eitfaridabad.com/images/industry-expert/1.jpg",
    alt: "Industry Expert Lecture Series at Echelon Institute of Technology",
  },
  {
    src: "https://eitfaridabad.com/images/industry-expert/2.jpg",
    alt: "Industry expert interacting with students",
  },
  {
    src: "https://eitfaridabad.com/images/industry-expert/3.jpg",
    alt: "Industry Expert Lecture Series event",
  },
  {
    src: "https://eitfaridabad.com/images/industry-expert/4.jpg",
    alt: "Students participating in an expert lecture",
  },
  {
    src: "https://eitfaridabad.com/images/industry-expert/5.jpg",
    alt: "Technology and industry knowledge-sharing session",
  },
  {
    src: "https://eitfaridabad.com/images/industry-expert/6.jpg",
    alt: "Industry Expert Lecture Series gathering",
  },
  {
    src: "https://eitfaridabad.com/images/industry-expert/7.jpg",
    alt: "Expert lecture and student engagement",
  },
  {
    src: "https://eitfaridabad.com/images/industry-expert/8.jpg",
    alt: "Industry Expert Lecture Series event highlights",
  },
];

const topics = [
  {
    number: "01",
    title: "Artificial Intelligence & Machine Learning",
    description:
      "Explore intelligent systems, emerging AI applications and the ways machine learning is transforming industries.",
  },
  {
    number: "02",
    title: "Cloud Computing",
    description:
      "Understand modern cloud infrastructure, scalable services and the technologies behind connected digital products.",
  },
  {
    number: "03",
    title: "Cybersecurity & Blockchain",
    description:
      "Discover approaches to digital security, data protection, trust and emerging decentralised technologies.",
  },
  {
    number: "04",
    title: "Data Science & Smart Networking",
    description:
      "Explore data-driven decision-making, connected systems and networking solutions shaping digital experiences.",
  },
];

const experiences = [
  {
    number: "01",
    title: "Learn from Practitioners",
    description:
      "Hear perspectives from technocrats, entrepreneurs and domain experts working across technology and innovation.",
  },
  {
    number: "02",
    title: "Connect Theory with Practice",
    description:
      "Explore practical applications of academic concepts, industry challenges and emerging business opportunities.",
  },
  {
    number: "03",
    title: "Ask, Explore and Engage",
    description:
      "Use interactive discussions and Q&A sessions to explore technical questions and professional experiences.",
  },
  {
    number: "04",
    title: "Discover Career Pathways",
    description:
      "Gain perspectives on career planning, entrepreneurial thinking, mentorship and professional growth.",
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
        title={["Industry Expert", "Lecture Series."]}
        description="Bringing classroom learning closer to the real world through expert perspectives, emerging technologies and meaningful industry conversations."
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
              Echelon Institute of Technology
            </p>

            <div className="mt-10 max-w-3xl">
              <p className="text-sm font-semibold tracking-[0.2em] text-[#e6b995]">
                LEARN BEYOND THE CLASSROOM
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
                Ideas that shape
                <br />
                what comes next.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                A platform connecting students with the technologists,
                entrepreneurs and domain experts shaping the future of
                technology, business and innovation.
              </p>
            </div>

            <div className="mt-12 grid gap-4 border-t border-white/15 pt-6 sm:grid-cols-3">
              {[
                { label: "Learning", value: "Expert-led" },
                { label: "Approach", value: "Interactive" },
                { label: "Focus", value: "Industry-ready" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <p className="text-2xl font-semibold tracking-tight text-[#d9e8c8]">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm text-white/60">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </header>

          <div className="px-6 py-10 sm:px-10 sm:py-14 lg:px-16">
            <section className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/60">
                About the initiative
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                Bringing industry knowledge into the classroom
              </h2>

              <p className="mt-5 leading-8 text-muted-foreground">
                At Echelon Institute of Technology, learning extends beyond
                the classroom through the Industry Expert Lecture Series.
                This initiative connects students with professionals from
                established technology companies, innovative startups and
                diverse industry domains, giving them insight into the
                developments shaping tomorrow&apos;s workplace.
              </p>

              <p className="mt-4 leading-8 text-muted-foreground">
                Renowned technocrats, entrepreneurs and domain experts share
                their knowledge of emerging technologies, industry practices
                and professional expectations. These sessions help students
                understand how innovation influences business, creates new
                opportunities and changes the skills employers seek.
              </p>

              <p className="mt-4 leading-8 text-muted-foreground">
                Interactive discussions, question-and-answer sessions and
                networking opportunities encourage students to explore
                real-world applications, career strategies and entrepreneurial
                thinking. The series supports EIT&apos;s commitment to
                connecting academic learning with professional practice.
              </p>
            </section>

            <section className="mt-12" aria-labelledby="expert-topics-title">
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/60">
                  Explore the topics
                </p>

                <h3
                  id="expert-topics-title"
                  className="mt-2 text-2xl font-semibold tracking-tight text-primary"
                >
                  Technologies shaping tomorrow
                </h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {topics.map((topic) => (
                  <article
                    key={topic.number}
                    data-anim="card"
                    className="rounded-2xl border border-primary/10 bg-[#faf9f6] p-6"
                  >
                    <p className="text-sm font-semibold tracking-widest text-primary/45">
                      {topic.number}
                    </p>

                    <h4 className="mt-4 text-lg font-semibold text-primary">
                      {topic.title}
                    </h4>

                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {topic.description}
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
        eyebrow="The learning experience"
        title={["Knowledge shared.", "Possibilities expanded."]}
      >
        <div className="grid gap-5 sm:grid-cols-2">
          {experiences.map((item) => (
            <article
              key={item.number}
              data-anim="card"
              className="rounded-2xl border border-primary/10 bg-white p-6 sm:p-8"
            >
              <p className="text-sm font-semibold tracking-widest text-primary/45">
                {item.number}
              </p>

              <h3 className="mt-3 text-xl font-semibold text-primary">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </PageSection>

      <PageSection
        name="default"
        eyebrow="Event highlights"
        title={["Inside the", "lecture series"]}
      >
        <p className="mb-8 max-w-2xl leading-7 text-muted-foreground">
          Browse photographs capturing the expert sessions, shared knowledge
          and industry interactions at Echelon Institute of Technology.
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
                  Industry Expert Lecture Series
                </span>

                <span className="shrink-0 text-xs font-semibold tracking-widest text-primary/45">
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
        title={["More placement", "resources"]}
      >
        <QuickLinksGrid links={links} columns={3} />
      </PageSection>

      <ScrollAnimator />
    </main>
  );
}
