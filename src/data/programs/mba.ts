import { programs, type ProgramDetail } from "./programs";

// Source: previous EIT Program Offered page. Intake figures should be reverified before publication.
export const mba: ProgramDetail = {
  ...programs.find((program) => program.slug === "mba")!,
  // Editorial programme overview; general educational description, not an institute-verified syllabus.
  summary: 'Master of Business Administration (MBA) is a postgraduate management programme that develops analytical, strategic and organisational decision-making skills. Core business disciplines typically include finance, marketing, operations, human resources and business strategy, often explored through cases and group projects.',
  explanation: [
    { heading: 'Understanding the degree', body: 'MBA is a postgraduate management degree concerned with how organisations set goals, allocate resources and respond to changing markets. It combines analytical tools with leadership and decision-making, encouraging students to evaluate business problems from more than one functional perspective.' },
    { heading: 'A cross-functional view of business', body: 'Common fields of study include marketing, finance, operations, human resources, economics and business strategy. Understanding their connections matters: a growth plan affects staffing, budgets, customer experience and operational capacity at the same time.' },
    { heading: 'Decision-making in practice', body: 'Management learning often uses cases, business analysis, presentations and collaborative projects to examine situations without a single obvious answer. Students practice comparing alternatives, explaining trade-offs, working with evidence and communicating recommendations to different stakeholders.' },
    { heading: 'Where the learning can lead', body: 'MBA study may support progression toward business analysis, operations, marketing, consulting, entrepreneurship or management responsibilities. The specific path depends on prior experience, chosen interests and the opportunities available.' },
  ],
  careerPaths: ['Business analysis', 'Operations management', 'Marketing management', 'Consulting and entrepreneurship'],
  specialisations: [
    "Master of Business Administration (Intake: 60)"
  ],
};
