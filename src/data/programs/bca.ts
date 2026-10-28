import { programs, type ProgramDetail } from "./programs";

// Source: previous EIT Program Offered page. Intake figures should be reverified before publication.
export const bca: ProgramDetail = {
  ...programs.find((program) => program.slug === "bca")!,
  // Editorial programme overview; general educational description, not an institute-verified syllabus.
  summary: 'Bachelor of Computer Applications (BCA) focuses on the foundations of computing and software development. Students explore programming, databases, web technologies, computer networks and problem-solving, with data-focused topics relevant to the Data Science option.',
  explanation: [
    { heading: 'Understanding the degree', body: 'BCA is an undergraduate degree focused on how computer applications are designed, developed and maintained. It introduces students to the logic behind software, the organisation of information and the ways computers support businesses and everyday services. The emphasis is on applying computing concepts to usable solutions.' },
    { heading: 'Core computing foundations', body: 'Students commonly encounter programming, data structures, database management, operating systems, networking and web technologies. These topics fit together: an application needs code to process information, a database to store it, and systems and networks to make it accessible and reliable.' },
    { heading: 'General and Data Science pathways', body: 'The General pathway provides a broad base in application development and computing. A Data Science pathway adds greater attention to handling datasets, statistical reasoning, visualisation and introductory analytical methods. Both pathways benefit from strong programming habits and an understanding of data quality.' },
    { heading: 'From concepts to applications', body: 'Practical assignments and software projects can help students move from writing small programs to designing complete applications. Graduates may explore entry-level software and technology roles, build a project portfolio, or continue into postgraduate computing studies.' },
  ],
  careerPaths: ['Application development', 'Web development', 'Database support', 'Data analysis'],
  specialisations: [
    "BCA General (Intake: 120)",
    "BCA Data Science (Intake: 60)"
  ],
};
