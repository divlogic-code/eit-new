
import { ScrollAnimator } from "@/components/animations/ScrollAnimator";
import { PageHero } from "@/components/pages/PageHero";
import { PageSection } from "@/components/pages/PageSection";
import {
  QuickLinksGrid,
  type QuickLink,
} from "@/components/pages/QuickLinksGrid";

import { getRoutesInGroup } from "@/data/site/routes";
import { documents } from "@/data/site/documents";
import { getApprovals } from "@/lib/content";
import { getRouteMetadata } from "@/lib/metadata";

const path = "/about/approvals";

const LEGACY_SITE = "https://eitfaridabad.com";

export const metadata = getRouteMetadata(path);

export default function Page() {
  const approvals = getApprovals();

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
        eyebrow="Governance"
        title={["Approvals and", "Affiliations"]}
        description="Explore the official approval, affiliation and accreditation documents associated with Echelon Institute of Technology."
        tone="peach"
      />

      {/* APPROVALS AND DOCUMENTS: SINGLE CARD SECTION */}

      <PageSection
        name="default"
        eyebrow="Institutional Records"
        title={["Approvals,", "Affiliations & Accreditation"]}
      >
        {approvals.length > 0 ? (
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {approvals.map((approval, index) => {
              const document = documents.find(
                (item) => item.id === approval.documentId
              );

              const documentUrl = document
                ? document.available
                  ? document.file
                  : document.legacyPath
                    ? `${LEGACY_SITE}${document.legacyPath}`
                    : null
                : null;

              return (
                <li
                  key={approval.id}
                  data-anim="card"
                  className={`approval-gradient-card approval-gradient-card--${index % 3}`}
                >
                  <div className="flex h-full flex-col">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-widest text-primary/50">
                        {approval.academicYear || "Official Record"}
                      </span>

                      <span
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/5 text-primary"
                        aria-hidden="true"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <path d="M14 2v6h6" />
                          <path d="M8 13h8M8 17h8" />
                        </svg>
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-primary">
                      {approval.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {approval.authority}
                    </p>

                    <div className="mt-auto pt-6">
                      {documentUrl ? (
                        <a
                          href={documentUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View PDF: ${document?.title ?? approval.title}`}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-opacity hover:opacity-60"
                        >
                          View PDF
                          <span aria-hidden="true">↗</span>
                        </a>
                      ) : (
                        <span className="text-xs text-muted-foreground">
                          Document unavailable
                        </span>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="text-sm text-muted-foreground">
            Approval and affiliation records will appear here
            once supplied by the institute.
          </p>
        )}
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
