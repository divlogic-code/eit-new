// Governing Body of Echelon Institute of Technology.
// Content is kept here so the page remains fully data-driven.

import type { ImageAsset } from "@/types";

export interface GoverningBodyMember {
  id: string;
  name: string;
  role: string;
  organisation?: string;
  photo?: ImageAsset;
}

export const governingBody: GoverningBodyMember[] = [
  {
    id: "prabhat-agarwal",
    name: "Shri Prabhat Agarwal",
    role: "Chairman",
    organisation: "Echelon Institute of Technology",
  },
  {
    id: "arvind-kumar-pandey",
    name: "Dr. Arvind Kumar Pandey",
    role: "Member Secretary",
    organisation: "Director, Echelon Institute of Technology",
  },
  {
    id: "manan-sharma",
    name: "Shri Manan Sharma",
    role: "Member",
    organisation:
      "Director, Manas Hospital (A unit of Sharma Medical Centre Pvt Ltd)",
  },
  {
    id: "debashish-majumdar",
    name: "Mr. Debashish Majumdar",
    role: "Member",
    organisation:
      "Principal Architect, Line and Form Architects’ Services Pvt. Ltd., Delhi",
  },
  {
    id: "keya-dharamvir",
    name: "Prof. Keya Dharamvir",
    role: "Member",
    organisation:
      "Professor, Physics & Coordinator Nanoscience, Panjab University, Chandigarh",
  },
  {
    id: "ss-tyagi",
    name: "Dr. S.S Tyagi",
    role: "Academic Member",
    organisation:
      "Dean Affiliation, Gurugram University, Gurugram, Haryana",
  },
  {
    id: "suresh-gupta",
    name: "Shri Suresh Gupta",
    role: "Academic Member",
    organisation:
      "National Treasurer, Akhil Bhartiya Pravaasee Kaaryakarta Shiksha Sanskriti Utthan Nyas",
  },
  {
    id: "komal-bhatia",
    name: "Dr. Komal Bhatia",
    role: "University Nominee",
    organisation:
      "Professor, J.C. Bose University of Science & Technology, Faridabad, Haryana",
  },
  {
    id: "naresh-gupta",
    name: "Dr. Naresh Gupta",
    role: "Industry Member",
    organisation: "Founder, Accuracap Consultant Private Limited",
  },
  {
    id: "n-guruprasad",
    name: "Dr. N. Guruprasad",
    role: "Academic Member",
    organisation:
      "Dean Academics, Don Bosco Institute of Technology, Bengaluru",
  },
  {
    id: "rajesh-garg",
    name: "Mr. Rajesh Garg",
    role: "Member",
    organisation: "Retired Additional District Judge, Palwal",
  },
  {
    id: "kiran-dm",
    name: "Mr. Kiran DM",
    role: "Member",
    organisation: "President, Sewa Bridge Foundation",
  },
  {
    id: "vikesh-kumar",
    name: "Dr. Vikesh Kumar",
    role: "Member",
    organisation:
      "Professor-CSE, Echelon Institute of Technology, Faridabad",
  },
  {
    id: "sima-kumari",
    name: "Dr. Sima Kumari",
    role: "Member",
    organisation:
      "Professor & Dean, Department of Management Studies, Echelon Institute of Technology",
  },
];