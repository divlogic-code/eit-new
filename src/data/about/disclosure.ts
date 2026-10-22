
export interface DisclosureItem {
  id: string;
  title: string;
  /** id from data/site/documents.ts. */
  documentId?: string;
  href?: string;
}

export const mandatoryDisclosure: DisclosureItem[] = [
  {
    id: "mandatory-disclosure",
    title: "Mandatory Disclosure",
    href: "https://eitfaridabad.com/mandatory-disclosure.php",
  },
  {
    id: "institutional-profile",
    title: "Institutional Profile and General Information",
    href: "https://eitfaridabad.com/blog/mandatory-disclosure/",
  },
  {
    id: "institutional-overview",
    title: "Echelon Institute of Technology at a Glance",
    href: "https://eitfaridabad.com/blog/echelon-at-a-glance/",
  },
  {
    id: "fees-structure",
    title: "Official Fee Structure",
    href: "https://eitfaridabad.com/fees-structure.php",
  },
  {
    id: "courses-programs",
    title: "Academic Programs and Courses",
    href: "https://eitfaridabad.com/courses.php",
  },
  {
    id: "aicte-approvals",
    title: "AICTE Approvals",
    href: "https://eitfaridabad.com/aicte-approvals.php",
  },
  {
    id: "scholarship-schemes",
    title: "Scholarship Schemes",
    href: "https://eitfaridabad.com/scholarship.php",
  },
];
