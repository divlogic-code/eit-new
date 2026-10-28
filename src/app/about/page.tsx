
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
        eyebrow="Welcome to the Future of Education"
        title={["Why Choose", "Echelon Institute of Technology"]}
        description="For more than two decades, Echelon Institute of Technology has inspired students through experiential learning, innovation, industry integration, and holistic development. At EIT, education goes beyond degrees to create future-ready professionals, entrepreneurs, and responsible leaders."
        tone="sand"
      />

      {/* INTRODUCTION */}
      <PageSection
        name="default"
        eyebrow="The Echelon Advantage"
        title={["Education Beyond", "Classrooms"]}
      >
        <div className="max-w-4xl">
          <p className="text-base leading-relaxed text-muted-foreground">
            Echelon Institute of Technology believes that true education is
            achieved through exploration, innovation, and practical learning.
            Students engage with industry projects, Centres of Excellence,
            modern laboratories, entrepreneurship initiatives, leadership
            programs, research opportunities, and community engagement to
            develop both technical competence and personal excellence.
          </p>

          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Guided by the philosophy of Inspiration, Exploration and Evolution,
            EIT provides a learning environment where students gain practical
            experience, industry exposure, leadership skills, creativity, and
            global perspectives that prepare them for successful careers and
            lifelong learning.
          </p>
        </div>
      </PageSection>

      {/* WHY ECHELON */}
      <PageSection
        name="default"
        bg="surface"
        eyebrow="Why EIT"
        title={["24 Reasons", "Students Choose EIT"]}
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {whyEitContent.reasons.map((reason) => (
            <article
              key={reason.id}
              data-anim="card"
              className="group flex h-full flex-col rounded-2xl border border-primary/10 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
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
        eyebrow="EIT in Numbers"
        title={["Campus Highlights", "& Achievements"]}
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div
            data-anim="card"
            className="rounded-2xl border border-primary/10 bg-white p-6"
          >
            <p className="text-4xl font-bold text-primary">27+</p>
            <p className="mt-3 text-lg font-semibold text-primary">
              Centres of Excellence
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Industry Integrated Centres of Excellence focused on emerging
              technologies, innovation, and real-world skills.
            </p>
          </div>

          <div
            data-anim="card"
            className="rounded-2xl border border-primary/10 bg-white p-6"
          >
            <p className="text-4xl font-bold text-primary">90+</p>
            <p className="mt-3 text-lg font-semibold text-primary">
              High-Tech Labs
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Modern laboratories and workshops equipped with industry-standard
              infrastructure for practical learning.
            </p>
          </div>

          <div
            data-anim="card"
            className="rounded-2xl border border-primary/10 bg-white p-6"
          >
            <p className="text-4xl font-bold text-primary">₹100 Cr+</p>
            <p className="mt-3 text-lg font-semibold text-primary">
              Scholarships
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Merit-based scholarship opportunities encouraging academic
              excellence and student success.
            </p>
          </div>

          <div
            data-anim="card"
            className="rounded-2xl border border-primary/10 bg-white p-6"
          >
            <p className="text-4xl font-bold text-primary">10,000+</p>
            <p className="mt-3 text-lg font-semibold text-primary">
              Placement Offers
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Outstanding placement record supported by dedicated training,
              career guidance, internships, and industry partnerships.
            </p>
          </div>
        </div>
      </PageSection>
      
      {/* VISION AND MISSION */}
      <PageSection
        name="default"
        bg="parchment"
        eyebrow="The EIT Experience"
        title={["Vision", "& Mission"]}
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* VISION */}
          <div
            data-anim="card"
            className="h-full rounded-2xl border border-primary/10 bg-white p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/50">
              Our
            </p>

            <h3 className="mt-4 text-2xl font-semibold text-primary">
              Vision
            </h3>

            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              Technical and Management leaders engaged in the evolution of
              life, being at the frontiers of the continuous technological
              and administrative breakthroughs, inspired by ongoing
              exploration of self, society, and nature through
              self-reflective consciousness by building a culture of
              inspiration, exploration and growth.
            </p>
          </div>

          {/* MISSION */}
          <div
            data-anim="card"
            className="h-full rounded-2xl border border-primary/10 bg-white p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/50">
              Our
            </p>

            <h3 className="mt-4 text-2xl font-semibold text-primary">
              Mission
            </h3>

            <div className="mt-5 space-y-5 text-sm leading-7 text-muted-foreground">
              <p>
                <span className="font-bold text-primary">M-1: </span>
                Having a culture of inspiration, exploration, and invention
                through effective, experiential teaching-learning giving rise
                to ever-evolving knowledge and wisdom.
              </p>

              <p>
                <span className="font-bold text-primary">M-2: </span>
                To have self-inspired students ever engaged in continually
                working upon &amp; sharpening and deepening computational,
                creative, innovative, &amp; leadership consciousness.
              </p>

              <p>
                <span className="font-bold text-primary">M-3: </span>
                Having students established in self-reflective consciousness,
                committed to personal, social and human integrity, and engaged
                in deep inquiry and conversation, giving rise to shared,
                intersubjective human values and consciousness.
              </p>
            </div>
          </div>
        </div>
      </PageSection>


      {/* CAMPUS LIFE */}
      <PageSection
        name="default"
        eyebrow="Campus Life"
        title={["A Vibrant Campus", "Filled With Opportunities"]}
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div
            data-anim="card"
            className="rounded-2xl border border-primary/10 bg-white p-8"
          >
            <h3 className="text-2xl font-semibold text-primary">
              Student Societies &amp; Leadership
            </h3>

            <p className="mt-5 leading-7 text-muted-foreground">
              EIT encourages students to participate in more than twenty
              technical, cultural, literary, sports, photography,
              entrepreneurship, robotics, open-source, AI, and social
              initiatives that develop creativity, confidence, leadership,
              teamwork, and communication skills.
            </p>
          </div>

          <div
            data-anim="card"
            className="rounded-2xl border border-primary/10 bg-white p-8"
          >
            <h3 className="text-2xl font-semibold text-primary">
              Innovation &amp; Career Development
            </h3>

            <p className="mt-5 leading-7 text-muted-foreground">
              Dedicated training and placement support, live industry projects,
              startup incubation, hackathons, industrial visits, guest
              lectures, workshops, and entrepreneurship development prepare
              students for successful professional careers.
            </p>
          </div>
        </div>
      </PageSection>

      {/* ABOUT NAVIGATION */}
      <PageSection
        name="default"
        bg="surface"
        eyebrow="Discover More"
        title={["Explore More", "About EIT"]}
      >
        <QuickLinksGrid links={links} columns={3} />
      </PageSection>

      <ScrollAnimator />
    </>
  );
}
