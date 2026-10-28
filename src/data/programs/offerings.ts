// Migrated from old src/data/academics/academicPrograms.js. Intake values are source-reported, not independently verified.
export interface OfferedCourse { title: string; intake: number; short?: string; description?: string; }
export const offeredPrograms = {
  engineering: [
    {"title": "Computer Science & Engineering", "intake": 240, "short": "CSE", "description": "Study programming, algorithms, data structures and the design of software and computing systems."},
    {"title": "Artificial Intelligence & Machine Learning", "intake": 60, "short": "AI & ML", "description": "Explore data-driven models, machine learning methods and intelligent applications."},
    {"title": "Data Science", "intake": 60, "short": "DS", "description": "Focus on data preparation, statistical reasoning, visualisation and predictive analysis."},
    {"title": "Cyber Security", "intake": 60, "short": "Cyber", "description": "Examine secure computing, network protection, risk assessment and digital threats."},
    {"title": "IoT & Cyber Security with Blockchain", "intake": 60, "short": "IoT", "description": "Connect embedded and networked devices with security principles and distributed-ledger concepts."},
    {"title": "Artificial Intelligence & Data Science", "intake": 60, "short": "AI DS", "description": "Combine machine learning fundamentals with data engineering and analytical techniques."},
    {"title": "Robotics & Artificial Intelligence", "intake": 60, "short": "RAI", "description": "Explore sensing, control, automation and intelligent robotic systems."},
    {"title": "Mechanical Engineering", "intake": 30, "short": "ME", "description": "Study mechanics, manufacturing, materials, thermal systems and mechanical design."},
    {"title": "Civil Engineering", "intake": 30, "short": "CE", "description": "Explore structures, construction materials, surveying and infrastructure engineering."},
    {"title": "Electronics & Communication", "intake": 30, "short": "ECE", "description": "Study electronic circuits, communication systems, signals and embedded technologies."},
    {"title": "Mechatronics", "intake": 30, "short": "MTR", "description": "Integrate mechanical design, electronics, control systems and automation."},
  ] as OfferedCourse[],
  postgraduate: [
    {"title": "M.Tech Computer Science", "intake": 12, "description": "Advance knowledge of computing systems, algorithms and research-oriented software topics."},
    {"title": "M.Tech Mechanical Engineering", "intake": 12, "description": "Deepen expertise in mechanical analysis, design and advanced engineering methods."},
    {"title": "Master of Computer Applications", "intake": 60, "description": "Develop advanced software, database and application engineering skills."},
    {"title": "Master of Business Administration", "intake": 60, "description": "Build business strategy, leadership and management decision-making capabilities."},
  ] as OfferedCourse[],
  management: [
    {"title": "BCA General", "intake": 120, "description": "Develop foundational programming, database and application development skills."},
    {"title": "BCA Data Science", "intake": 60, "description": "Combine core computing with data analysis, statistics and data-oriented programming."},
    {"title": "BBA General", "intake": 120, "description": "Build a broad foundation in business functions and organisational management."},
    {"title": "BBA Digital Marketing", "intake": 60, "description": "Explore online marketing channels, campaign planning and digital customer engagement."},
    {"title": "BBA Financial Services & Banking", "intake": 60, "description": "Study business fundamentals with an emphasis on banking and financial services."},
  ] as OfferedCourse[],
  closing: {
    eyebrow: "ECHELON INSTITUTE OF TECHNOLOGY",
    heading: "Building Engineers, Managers & Technology Leaders",
    description: "EIT offers industry-oriented undergraduate and postgraduate programmes designed to prepare students for leadership, innovation and lifelong learning.",
    buttonText: "Apply Now",
  },
};
