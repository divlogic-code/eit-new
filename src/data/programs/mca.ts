import { programs, type ProgramDetail } from "./programs";

// Source: previous EIT Program Offered page. Intake figures should be reverified before publication.
export const mca: ProgramDetail = {
  ...programs.find((program) => program.slug === "mca")!,
  // Editorial programme overview; general educational description, not an institute-verified syllabus.
  summary: 'Master of Computer Applications (MCA) develops advanced understanding of software systems and their design. Common areas of study include algorithms, application development, databases, software engineering and modern computing technologies, supported by project-based learning.',
  explanation: [
    { heading: 'Understanding the degree', body: 'MCA is a postgraduate degree in computer applications that develops more advanced knowledge of software and computing systems. It builds on foundational programming and problem-solving skills, with an emphasis on designing applications that are reliable, maintainable and useful in real settings.' },
    { heading: 'Software and systems knowledge', body: 'Typical areas include algorithms, software engineering, database systems, application architecture, networking and contemporary development tools. Students learn to consider not only whether a program works, but also how it performs, how it handles data and how it can be improved over time.' },
    { heading: 'Developing practical solutions', body: 'Larger programming tasks and project work can bring several disciplines together. Designing an application may involve planning requirements, selecting technologies, structuring data, testing functionality and explaining design decisions to others. These are transferable habits across different software roles.' },
    { heading: 'Professional progression', body: 'MCA graduates may pursue software development, application engineering, systems analysis, testing, technical support or further specialisation. Career direction depends on individual strengths, portfolio work and the technologies mastered.' },
  ],
  careerPaths: ['Software engineering', 'Full-stack development', 'Systems analysis', 'Technology consulting'],
  specialisations: [
    "Master of Computer Applications (Intake: 60)"
  ],
};
