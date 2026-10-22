export interface Approval {
  id: string;
  authority: string;
  title: string;
  academicYear?: string;
  /** id from data/site/documents.ts. */
  documentId?: string;
}

export const approvals: Approval[] = [
  // AICTE APPROVALS

  {
    id: "aicte-2026-27",
    authority: "All India Council for Technical Education (AICTE)",
    title: "AICTE Approval",
    academicYear: "2026–27",
    documentId: "approval-letter-2026-27",
  },
  {
    id: "aicte-2025-26",
    authority: "All India Council for Technical Education (AICTE)",
    title: "AICTE Approval",
    academicYear: "2025–26",
    documentId: "approval-letter-2025-26",
  },
  {
    id: "aicte-2024-25",
    authority: "All India Council for Technical Education (AICTE)",
    title: "AICTE Approval",
    academicYear: "2024–25",
    documentId: "approval-letter-2024-25",
  },
  {
    id: "aicte-2023-24",
    authority: "All India Council for Technical Education (AICTE)",
    title: "AICTE Approval",
    academicYear: "2023–24",
    documentId: "approval-letter-2023-24",
  },
  {
    id: "aicte-2022-23",
    authority: "All India Council for Technical Education (AICTE)",
    title: "AICTE Approval",
    academicYear: "2022–23",
    documentId: "approval-letter-2022-23",
  },
  {
    id: "aicte-2021-22",
    authority: "All India Council for Technical Education (AICTE)",
    title: "AICTE Approval",
    academicYear: "2021–22",
    documentId: "approval-letter-2021-22",
  },
  {
    id: "aicte-2020-21",
    authority: "All India Council for Technical Education (AICTE)",
    title: "AICTE Approval",
    academicYear: "2020–21",
    documentId: "approval-letter-2020-21",
  },
  {
    id: "aicte-2019-20",
    authority: "All India Council for Technical Education (AICTE)",
    title: "AICTE Approval",
    academicYear: "2019–20",
    documentId: "approval-letter-2019-20",
  },
  {
    id: "aicte-2018-19",
    authority: "All India Council for Technical Education (AICTE)",
    title: "AICTE Approval",
    academicYear: "2018–19",
    documentId: "approval-letter-2018-19",
  },

  // UNIVERSITY AFFILIATIONS

  {
    id: "affiliation-2024",
    authority: "University Affiliation",
    title: "Affiliation Letter",
    academicYear: "2024",
    documentId: "affiliation-letter-2024",
  },
  {
    id: "affiliation-2023",
    authority: "University Affiliation",
    title: "Affiliation Letter",
    academicYear: "2023",
    documentId: "affiliation-letter-2023",
  },
  {
    id: "affiliation-2022",
    authority: "University Affiliation",
    title: "Affiliation Letter",
    academicYear: "2022",
    documentId: "affiliation-letter-2022",
  },
  {
    id: "affiliation-2021-22",
    authority: "University Affiliation",
    title: "Affiliation Letter",
    academicYear: "2021–22",
    documentId: "affiliation-letter-2021-22",
  },
  {
    id: "affiliation-2018",
    authority: "University Affiliation",
    title: "Affiliation Letter",
    academicYear: "2018",
    documentId: "affiliation-letter-2018",
  },

  // ACCREDITATION

  {
    id: "nba-2025",
    authority: "National Board of Accreditation (NBA)",
    title: "NBA Accreditation Letter",
    academicYear: "2025",
    documentId: "nba-letter",
  },
  {
    id: "ece-dcs-report",
    authority: "Accreditation Documentation",
    title: "ECE DCS Report",
    documentId: "ece-dcs-report",
  },
  {
    id: "me-dcs-report",
    authority: "Accreditation Documentation",
    title: "ME DCS Report",
    documentId: "me-dcs-report",
  },
];