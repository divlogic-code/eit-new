
import type { ImageAsset } from "@/types";

export interface Recruiter {
  id: string;
  name: string;
  sector?: string;
  logo?: ImageAsset;
}

export const recruiters: Recruiter[] = [
  {
    id: "tcs",
    name: "TCS",
    logo: {
      src: "/images/placements/recruiter-tcs.svg",
      alt: "TCS logo",
    },
  },
  {
    id: "ibm",
    name: "IBM",
    logo: {
      src: "/images/placements/recruiter-ibm.svg",
      alt: "IBM logo",
    },
  },
  {
    id: "kpmg",
    name: "KPMG",
    logo: {
      src: "/images/placements/recruiter-kpmg.svg",
      alt: "KPMG logo",
    },
  },
  {
    id: "infosys",
    name: "Infosys",
    logo: {
      src: "/images/placements/recruiter-infosys.svg",
      alt: "Infosys logo",
    },
  },
  {
    id: "accenture",
    name: "Accenture",
    logo: {
      src: "/images/placements/recruiter-accenture.svg",
      alt: "Accenture logo",
    },
  },
  {
    id: "hsbc",
    name: "HSBC",
    logo: {
      src: "/images/placements/recruiter-hsbc.svg",
      alt: "HSBC logo",
    },
  },
  {
    id: "google",
    name: "Google",
    logo: {
      src: "/images/placements/recruiter-google.svg",
      alt: "Google logo",
    },
  },
  {
    id: "niit",
    name: "NIIT",
    logo: {
      src: "/images/placements/recruiter-niit.svg",
      alt: "NIIT logo",
    },
  },
  {
    id: "samsung",
    name: "Samsung",
    logo: {
      src: "/images/placements/recruiter-samsung.svg",
      alt: "Samsung logo",
    },
  },
  {
    id: "bsnl",
    name: "BSNL",
    logo: {
      src: "/images/placements/recruiter-bsnl.svg",
      alt: "BSNL logo",
    },
  },
  {
    id: "indigo",
    name: "IndiGo",
    logo: {
      src: "/images/placements/recruiter-indigo.svg",
      alt: "IndiGo logo",
    },
  },
  {
    id: "air-india",
    name: "Air India",
    logo: {
      src: "/images/placements/recruiter-air-india.svg",
      alt: "Air India logo",
    },
  },
];
