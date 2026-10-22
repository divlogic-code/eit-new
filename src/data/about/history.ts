
/**
 * EIT institutional history and milestones.
 * Used by the About page's HistoryTimeline component.
 *
 * Only the establishment year (2007) is specified.
 * Other developments are grouped under that starting year
 * until their individual dates are confirmed.
 */

export interface HistoryMilestone {
  id: string;
  year: string;
  title: string;
  description?: string;
}

export const history: HistoryMilestone[] = [
  {
    id: "establishment",
    year: "2007",
    title: "The Beginning of EIT",
    description:
      "Echelon Institute of Technology (EIT) was established in 2007 at Kabulpur, on Jasana-Manjhawali Road in the Naharpar area of Faridabad, Haryana. The institute began its journey with a focus on engineering and technical education.",
  },
  {
    id: "campus-development",
    year: "2007",
    title: "A Campus Built for Learning",
    description:
      "EIT developed a 17.5-acre green campus with modern academic infrastructure, including more than 50 classrooms, over 70 laboratories and workshops, and a central library.",
  },
  {
    id: "approvals-accreditation",
    year: "2007",
    title: "Academic Recognition and Accreditation",
    description:
      "The institute is approved by the All India Council for Technical Education (AICTE), New Delhi, and holds a NAAC A+ grade accreditation.",
  },
  {
    id: "university-affiliations",
    year: "2007",
    title: "University Affiliations",
    description:
      "EIT has affiliations with Guru Gobind Singh Indraprastha University (GGSIPU), Delhi, and J.C. Bose University of Science and Technology (YMCA), Faridabad.",
  },
  {
    id: "academic-expansion",
    year: "2007",
    title: "Expanding Academic Horizons",
    description:
      "From core engineering disciplines such as Mechanical Engineering, Computer Science, Civil Engineering, and Electronics and Communication Engineering, EIT expanded into management, computer applications, and postgraduate education through programs including BBA, BCA, M.Tech, MBA, and MCA.",
  },
  {
    id: "emerging-technologies",
    year: "2007",
    title: "Embracing Emerging Technologies",
    description:
      "EIT's academic development has extended into emerging fields such as Artificial Intelligence, Data Science, Robotics, and Cyber Security, reflecting the growing importance of technology-driven education.",
  },
];
