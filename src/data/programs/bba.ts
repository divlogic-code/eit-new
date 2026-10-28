import { programs, type ProgramDetail } from "./programs";

// Source: previous EIT Program Offered page. Intake figures should be reverified before publication.
export const bba: ProgramDetail = {
  ...programs.find((program) => program.slug === "bba")!,
  // Editorial programme overview; general educational description, not an institute-verified syllabus.
  summary: 'Bachelor of Business Administration (BBA) introduces the fundamentals of business, including management, marketing, finance, operations and organisational behaviour. Students can relate these foundations to areas such as digital marketing or financial services, depending on their selected programme.',
  explanation: [
    { heading: 'Understanding the degree', body: 'BBA is an undergraduate degree that introduces how organisations operate and make decisions. Rather than focusing on one business function alone, it brings together management, marketing, finance, human resources and operations so students can understand how decisions in one area affect the others.' },
    { heading: 'Learning business fundamentals', body: 'Students typically examine how businesses plan, manage resources, communicate with customers, evaluate costs and coordinate teams. Concepts from economics, accounting and organisational behaviour help explain why organisations choose particular strategies and how performance can be assessed.' },
    { heading: 'Exploring the available pathways', body: 'The General pathway offers a broad management foundation. Digital Marketing focuses attention on online audiences, campaign planning, content and performance measurement. Financial Services & Banking connects business concepts with financial products, banking operations and the management of financial information.' },
    { heading: 'Applying business thinking', body: 'Case discussions, presentations, group assignments and analysis of business situations can help students develop judgement and communication skills. The degree can provide a foundation for business operations, marketing, financial services, entrepreneurship or postgraduate management education.' },
  ],
  careerPaths: ['Marketing and sales', 'Business operations', 'Financial services', 'Entrepreneurship'],
  specialisations: [
    "BBA General (Intake: 120)",
    "BBA Digital Marketing (Intake: 60)",
    "BBA Financial Services & Banking (Intake: 60)"
  ],
};
