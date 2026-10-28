import { programs, type ProgramDetail } from "./programs";

// Source: previous EIT Program Offered page. Intake figures should be reverified before publication.
export const btech: ProgramDetail = {
  ...programs.find((program) => program.slug === "btech")!,
  // Editorial programme overview; general educational description, not an institute-verified syllabus.
  summary: 'Bachelor of Technology (B.Tech) introduces students to engineering principles, mathematics, computing and applied problem-solving. Depending on the chosen specialisation, students explore software systems, intelligent technologies, electronics, infrastructure or mechanical design through coursework and practical projects.',
  explanation: [
    { heading: 'Understanding the degree', body: 'B.Tech is an undergraduate engineering degree that connects scientific and mathematical ideas with the design of practical solutions. Students learn to break down technical problems, evaluate possible approaches, and understand how engineered systems behave under real-world constraints. The precise subjects vary by branch, but careful analysis, experimentation and iterative improvement are common to engineering disciplines.' },
    { heading: 'What students explore', body: 'Early engineering study commonly builds foundations in mathematics, scientific reasoning, programming or engineering fundamentals. As students progress, their chosen branch becomes more specialised. Computing-focused branches explore software, data and intelligent systems; electronics-focused branches investigate circuits and communication; mechanical and civil branches address machines, materials, structures and infrastructure.' },
    { heading: 'Learning through application', body: 'Engineering education is not only about remembering formulas. Laboratory exercises, design assignments, simulations and technical projects can help students test assumptions and understand why a solution succeeds or fails. Team-based problem solving also develops documentation, communication and the ability to explain technical decisions.' },
    { heading: 'Beyond the degree', body: 'Graduates can use their branch-specific knowledge in engineering and technology roles, pursue advanced study, or build solutions through entrepreneurship. The best direction depends on the specialisation selected, practical experience, and the skills developed beyond the classroom.' },
  ],
  careerPaths: ['Software development', 'Systems engineering', 'Technical consulting', 'Research and higher studies'],
  specialisations: [
    "Computer Science & Engineering (Intake: 240)",
    "Artificial Intelligence & Machine Learning (Intake: 60)",
    "Data Science (Intake: 60)",
    "Cyber Security (Intake: 60)",
    "IoT & Cyber Security with Blockchain (Intake: 60)",
    "Artificial Intelligence & Data Science (Intake: 60)",
    "Robotics & Artificial Intelligence (Intake: 60)",
    "Mechanical Engineering (Intake: 30)",
    "Civil Engineering (Intake: 30)",
    "Electronics & Communication (Intake: 30)",
    "Mechatronics (Intake: 30)"
  ],
};
