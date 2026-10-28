import { programs, type ProgramDetail } from "./programs";

// Source: previous EIT Program Offered page. Intake figures should be reverified before publication.
export const mtech: ProgramDetail = {
  ...programs.find((program) => program.slug === "mtech")!,
  // Editorial programme overview; general educational description, not an institute-verified syllabus.
  summary: 'Master of Technology (M.Tech) is an advanced engineering programme for graduates who want to deepen technical expertise. Study typically emphasises specialised subjects, analytical methods, research literature and substantial technical or research projects.',
  explanation: [
    { heading: 'Understanding the degree', body: 'M.Tech is a postgraduate engineering degree intended for students who want to move beyond introductory engineering knowledge and study a technical field in greater depth. Compared with a broad undergraduate program, postgraduate work typically places more emphasis on specialised concepts, independent investigation and the critical evaluation of existing methods.' },
    { heading: 'Areas of advanced study', body: 'Computer Science students may explore advanced algorithms, software systems, intelligent computing and computational research methods. Mechanical Engineering students may investigate advanced design, modelling, manufacturing, materials or thermal and mechanical analysis. Exact modules depend on the approved curriculum.' },
    { heading: 'Research and technical practice', body: 'An important part of postgraduate engineering is learning to frame a technical question, review relevant work, choose an appropriate method and assess the results. Projects, simulations, experiments and technical reports can strengthen the ability to work on complex problems with limited or uncertain information.' },
    { heading: 'Future directions', body: 'The degree can support progression toward research and development, specialised technical roles, further academic study or work requiring deeper engineering analysis. Outcomes depend on the chosen field and the student’s expertise.' },
  ],
  careerPaths: ['Research and development', 'Advanced engineering roles', 'Technical leadership', 'Doctoral studies'],
  specialisations: [
    "M.Tech Computer Science (Intake: 12)",
    "M.Tech Mechanical Engineering (Intake: 12)"
  ],
};
