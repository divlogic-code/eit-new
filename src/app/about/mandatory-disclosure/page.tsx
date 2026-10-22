import { FileText } from "lucide-react";

import { ScrollAnimator } from "@/components/animations/ScrollAnimator";
import { PageHero } from "@/components/pages/PageHero";
import { PageSection } from "@/components/pages/PageSection";
import {
  QuickLinksGrid,
  type QuickLink,
} from "@/components/pages/QuickLinksGrid";
import { SectionNote } from "@/components/pages/SectionNote";

import { getRoutesInGroup } from "@/data/site/routes";
import { getMandatoryDisclosure } from "@/lib/content";
import { getRouteMetadata } from "@/lib/metadata";

const path = "/about/mandatory-disclosure";

export const metadata = getRouteMetadata(path);

const institutionalDetails = [
  {
    label: "Institution",
    value: "Echelon Institute of Technology (EIT), Faridabad",
  },
  {
    label: "Location",
    value:
      "Village Kabulpur, Jasana-Manjhawali Road, Faridabad - 121001, Haryana",
  },
  {
    label: "Campus",
    value: "17.5-acre campus",
  },
  {
    label: "Running Body",
    value: "Echelon Educational & Welfare Society (Regd.)",
  },
  {
    label: "Affiliation",
    value:
      "J.C. Bose University of Science and Technology, YMCA, Faridabad",
  },
  {
    label: "Approval",
    value:
      "All India Council for Technical Education (AICTE), Ministry of Education, Government of India",
  },
  {
    label: "Academic & Office Hours",
    value: "8:50 AM to 4:10 PM",
  },
];

const academicHighlights = [
  "Mentorship system supporting student academic and professional development.",
  "Centre of Excellence supporting advanced learning and technical development.",
  "Centre of Entrepreneurship supporting innovation and entrepreneurial development.",
  "Digitalized ERP-enabled campus supporting academic and administrative operations.",
];

const feeStructure = [
  {
    course: "B.Tech",
    firstYear: "₹1,87,200",
    subsequentYear: "₹1,75,200",
  },
  {
    course: "BBA",
    firstYear: "₹1,49,700",
    subsequentYear: "₹1,37,700",
  },
  {
    course: "BCA",
    firstYear: "₹1,47,600",
    subsequentYear: "₹1,35,600",
  },
  {
    course: "M.Tech",
    firstYear: "₹1,41,500",
    subsequentYear: "₹1,29,500",
  },
  {
    course: "MBA",
    firstYear: "₹2,21,700",
    subsequentYear: "₹2,09,700",
  },
  {
    course: "MCA",
    firstYear: "₹2,21,700",
    subsequentYear: "₹2,09,700",
  },
];

const feeComponents = [
  {
    label: "University Fee",
    value: "₹20,000 per year",
  },
  {
    label: "Security Deposit",
    value: "₹10,000 one-time, refundable",
  },
  {
    label: "Examination Fee",
    value: "₹3,000 per year",
  },
  {
    label: "Alumni Contribution",
    value: "₹2,000 one-time",
  },
  {
    label: "Student Welfare Activity Fee",
    value: "₹1,000 per year",
  },
  {
    label: "Innovation & Incubation Fee",
    value: "₹500 per year",
  },
];

const btechIntake = [
  ["Computer Science & Engineering (CSE)", "240"],
  ["Artificial Intelligence & Machine Learning (CSE)", "60"],
  ["Data Science (CSE)", "60"],
  ["Cyber Security (CSE)", "60"],
  ["IoT and Cyber Security including Blockchain", "60"],
  ["Artificial Intelligence and Data Science", "60"],
  ["Robotics and Artificial Intelligence", "60"],
  ["Mechanical Engineering (ME)", "30"],
  ["Civil Engineering (CE)", "30"],
  ["Electronics & Communication Engineering (ECE)", "30"],
  ["Mechatronics", "30"],
];

export default function Page() {
  const items = getMandatoryDisclosure();

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
        eyebrow="Governance"
        title={["Mandatory", "Disclosure"]}
        description="Statutory institutional, academic and administrative information disclosed by Echelon Institute of Technology."
        tone="blush"
      />

      {/* INSTITUTIONAL PROFILE */}

      <PageSection
        name="default"
        eyebrow="Institutional Profile"
        title={["Echelon", "at a glance"]}
      >
        <div className="grid gap-x-10 gap-y-0 md:grid-cols-2">
          {institutionalDetails.map((item) => (
            <div
              key={item.label}
              data-anim="row"
              className="border-b border-primary/10 py-5"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-primary/50">
                {item.label}
              </p>

              <p className="mt-2 text-base leading-relaxed text-primary">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </PageSection>

      {/* ACADEMIC & OPERATIONAL */}

      <PageSection
        name="default"
        bg="surface"
        eyebrow="Academic & Operational"
        title={["Learning", "environment"]}
      >
        <div className="grid gap-6 sm:grid-cols-2">
          {academicHighlights.map((item, index) => (
            <div
              key={item}
              data-anim="card"
              className="rounded-2xl border border-primary/10 bg-white p-6"
            >
              <span className="text-sm font-semibold text-primary/40">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {item}
              </p>
            </div>
          ))}
        </div>
      </PageSection>

      {/* FEE STRUCTURE */}

      <PageSection
        name="default"
        eyebrow="Academic Session 2026–27"
        title={["Course-wise", "annual fees"]}
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[650px] border-collapse">
            <thead>
              <tr className="border-b border-primary/20 text-left">
                <th className="py-4 pr-6 text-sm font-semibold text-primary">
                  Course
                </th>

                <th className="px-6 py-4 text-sm font-semibold text-primary">
                  First-Year Total Fee
                </th>

                <th className="py-4 pl-6 text-sm font-semibold text-primary">
                  2nd Year Onwards
                </th>
              </tr>
            </thead>

            <tbody>
              {feeStructure.map((item) => (
                <tr
                  key={item.course}
                  data-anim="row"
                  className="border-b border-primary/10"
                >
                  <td className="py-5 pr-6 font-semibold text-primary">
                    {item.course}
                  </td>

                  <td className="px-6 py-5 text-muted-foreground">
                    {item.firstYear}
                  </td>

                  <td className="py-5 pl-6 text-muted-foreground">
                    {item.subsequentYear}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </PageSection>

      {/* FEE COMPONENTS */}

      <PageSection
        name="default"
        bg="surface"
        eyebrow="Fee Details"
        title={["Fee component", "breakdown"]}
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {feeComponents.map((item) => (
            <div
              key={item.label}
              data-anim="card"
              className="rounded-2xl border border-primary/10 bg-white p-6"
            >
              <p className="text-sm font-semibold text-primary">
                {item.label}
              </p>

              <p className="mt-2 text-sm text-muted-foreground">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </PageSection>

      {/* APPROVED INTAKE */}

      <PageSection
        name="default"
        eyebrow="Approved Intake"
        title={["B.Tech", "programs"]}
      >
        <div className="divide-y divide-primary/10 border-y border-primary/10">
          {btechIntake.map(([program, seats], index) => (
            <div
              key={program}
              data-anim="row"
              className="grid gap-2 py-5 sm:grid-cols-[60px_1fr_auto] sm:items-center"
            >
              <span className="text-sm font-semibold text-primary/40">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="font-medium text-primary">
                {program}
              </p>

              <p className="text-sm font-semibold text-muted-foreground">
                {seats} seats
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div
            data-anim="card"
            className="rounded-2xl border border-primary/10 p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-primary/50">
              Business & Management
            </p>

            <h3 className="mt-3 text-lg font-semibold text-primary">
              BBA
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              240 seats across General, Digital Marketing and Financial
              specializations.
            </p>
          </div>

          <div
            data-anim="card"
            className="rounded-2xl border border-primary/10 p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-primary/50">
              Computer Applications
            </p>

            <h3 className="mt-3 text-lg font-semibold text-primary">
              BCA
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              180 seats across core Computer Applications tracks including
              Data Science formats.
            </p>
          </div>
        </div>
      </PageSection>

      {/* OFFICIAL DISCLOSURE DOCUMENTS */}

      <PageSection
        name="default"
        bg="surface"
        eyebrow="Official Documents"
        title={["Mandatory disclosure", "documents"]}
      >
        {items.length > 0 ? (
          <ul className="divide-y divide-primary/10 border-y border-primary/10">
            {items.map((item) => (
              <li
                key={item.id}
                data-anim="row"
                className="flex items-center gap-4 py-5"
              >
                <span
                  aria-hidden
                  className="grid size-10 shrink-0 place-items-center rounded-full bg-eit-mist text-primary"
                >
                  <FileText aria-hidden className="size-5" />
                </span>

                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-semibold text-primary underline decoration-eit-accent decoration-2 underline-offset-4"
                  >
                    {item.title}
                  </a>
                ) : (
                  <span className="text-base font-semibold text-primary">
                    {item.title}
                  </span>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <SectionNote title="Mandatory disclosure documents are being compiled">
            Official mandatory disclosure documents will appear here once
            supplied by the institute.
          </SectionNote>
        )}
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