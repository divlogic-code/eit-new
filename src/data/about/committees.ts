import type { CommitteeMember } from "@/types";

export type CommitteeSlug =
  | "iqac"
  | "grievance-redressal"
  | "internal-committee-women-cell"
  | "sc-st-cell"
  | "nba-naac";

export interface Committee {
  slug: CommitteeSlug;
  name: string;
  description?: string;
  members: CommitteeMember[];
}

export const committees: Committee[] = [
  {
    slug: "iqac",
    name: "Internal Quality Assurance Cell (IQAC)",
    description:
      "The IQAC at Echelon Institute of Technology (EIT) serves as a key driver for ensuring continuous improvement in the institution's academic and administrative performance. It operates with a strategic focus on fostering quality enhancement, aligning with the institute's commitment to excellence in education and stakeholder satisfaction.",
    members: [
      {
        name: "Prof. Arvind Kumar Pandey",
        role: "Chairperson",
        designation: "Director",
      },
      {
        name: "Prof. Sunil Verma",
        role: "Head-IQAC",
        designation: "Professor-HAS",
      },
      {
        name: "Prof. M.K. Saini",
        role: "Member",
        designation: "Dean Students’ Welfare & Professor-ECE",
      },
      {
        name: "Prof. Sima Kumari",
        role: "Member",
        designation: "Dean DMS & Professor-DMS",
      },
      {
        name: "Prof. Pramod Singh",
        role: "Member",
        designation: "Dean Research & Professor-ECE",
      },
      {
        name: "Prof. Anupama Jain",
        role: "Member",
        designation: "Professor & Head-HAS",
      },
      {
        name: "Prof. Manisha Vashisht",
        role: "Member",
        designation: "Professor & Head-CSE",
      },
      {
        name: "Prof. Irfanullah Khan",
        role: "Member",
        designation: "Professor & Head-DMS",
      },
      {
        name: "Dr. Sindhu Kumar",
        role: "Member",
        designation: "Associate Professor-ME & Head MEI",
      },
      {
        name: "Ms. Shalu Hassija",
        role: "Member",
        designation: "Assistant Professor & Head-DCA",
      },
      {
        name: "Prof. Shital Prasad",
        role: "Member",
        designation: "Professor-HAS",
      },
      {
        name: "Dr. Stuti Saxena",
        role: "Member",
        designation:
          "Chief Skill Development Officer & Associate Professor-CSE",
      },
      {
        name: "Mr. Prabhakar",
        role: "Member",
        designation: "Registrar",
      },
      {
        name: "Mr. Manoj Bhati",
        role: "Member",
        designation: "Local Society",
      },
      {
        name: "Mr. Mahesh",
        role: "Member",
        designation: "Student",
      },
      {
        name: "Ms. Vidushi Gandhi",
        role: "Member",
        designation: "Alumni",
      },
      {
        name: "Mr. Manan Sharma",
        role: "Member",
        designation: "Management",
      },
      {
        name: "Mr. Manish Kumar",
        role: "Member",
        designation: "Employers",
      },
      {
        name: "Mr. Amitabh Chaudhary",
        role: "Member",
        designation: "Industrialist",
      },
      {
        name: "Ms. Ranjana Sahoo",
        role: "Member",
        designation: "Stakeholder (Parent)",
      },
    ],
  },

  {
    slug: "grievance-redressal",
    name: "Grievance Redressal Committee",
    description:
      "As per the All India Council for Technical Education, New Delhi guidelines for establishment of Mechanism for Grievance Redressal Regulations, 2012, vide F. No. 37-3/Legal/2012 dated 25.05.2012, the Grievance Redressal Committee has been re-constituted at Echelon Institute of Technology, Kabulpur, Faridabad.",
    members: [
      {
        name: "Prof. (Dr.) Arvind Kumar Pandey",
        designation: "Director",
        role: "Chairperson",
      },
      {
        name: "Dr. M.K. Saini",
        designation: "Professor",
        role: "Faculty Member",
      },
      {
        name: "Dr. Sunil Verma",
        designation: "Professor",
        role: "Faculty Member",
      },
      {
        name: "Ms. Shefali Madan",
        designation: "Associate Professor",
        role: "Faculty Member",
      },
      {
        name: "Mr. Hunny Mittal",
        designation: "Student",
        role: "Student Special Invitee",
      },
      {
        name: "Mr. Raj Nandini Pandey",
        designation: "Student",
        role: "Student Special Invitee",
      },
    ],
  },

  {
    slug: "internal-committee-women-cell",
    name: "Internal Committee / Women Cell",
    description:
      "As per the All India Council for Technical Education, New Delhi guidelines for establishment of the Internal Committee, F.AICTE/WH/2016/01 dated 10 June 2016, the Internal Committee has been re-constituted at Echelon Institute of Technology, Kabulpur, Faridabad.",
    members: [
      {
        name: "Prof. Vanadana Agarwal",
        designation: "Professor",
        role: "Chairperson",
      },
      {
        name: "Dr. Poonam Rani",
        designation: "Associate Professor",
        role: "Member",
      },
      {
        name: "Ms. Shefali Madan",
        designation: "Associate Professor",
        role: "Member",
      },
      {
        name: "Ms. Mamta Kaushik",
        designation: "Librarian",
        role: "Member",
      },
      {
        name: "Ms. Nitya Yadav",
        designation: "Student",
        role: "Member",
      },
      {
        name: "Ms. Chetna",
        designation: "Student",
        role: "Member",
      },
      {
        name: "Ms. Angela Sahoo",
        designation: "Student",
        role: "Member",
      },
      {
        name: "Ms. Harmeet Kaur",
        designation: "Chairman, Haseerat Foundation",
        role: "Member",
      },
    ],
  },

  {
    slug: "sc-st-cell",
    name: "SC/ST Cell",
    description:
      "The SC/ST Committee has been reconstituted at Echelon Institute of Technology, Kabulpur, Faridabad, in accordance with the AICTE guidelines referenced by the institute and the Scheduled Castes and the Scheduled Tribes (Prevention of Atrocities) Act, 1989 (Act No. 33 of 1989). The committee supports students, faculty, and staff belonging to Scheduled Caste and Scheduled Tribe categories.",
    members: [
      {
        name: "Mr. Sagardeep Thakuria",
        designation: "Assistant Professor",
        role: "Chairperson",
      },
      {
        name: "Ms. Richa Suryavanshi",
        designation: "Assistant Professor",
        role: "Member",
      },
      {
        name: "Ms. Arti Kardam",
        designation: "Assistant Professor",
        role: "Member",
      },
      {
        name: "Mr. Rone",
        designation: "Assistant Professor",
        role: "Member",
      },
      {
        name: "Ms. Sonam",
        designation: "Assistant Professor",
        role: "Member",
      },
    ],
  },
];

export const iqacContent = {
  objectives: [
    {
      title: "Enhance Quality Culture",
      description:
        "Develop and implement a quality culture across academic and administrative domains.",
    },
    {
      title: "Continuous Improvement",
      description:
        "Promote a process-driven approach for consistent improvement in teaching, learning, and evaluation.",
    },
    {
      title: "Stakeholder Engagement",
      description:
        "Facilitate active participation of stakeholders, including students, faculty, and management, in the quality assurance process.",
    },
    {
      title: "Innovative Practices",
      description:
        "Encourage adoption of innovative pedagogical practices to meet emerging educational and professional standards.",
    },
  ],

  qualityPolicy: [
    "Enhancing teaching-learning quality with outcome-based education and faculty development.",
    "Promoting research and industry collaboration for innovation and real-world impact.",
    "Ensuring continuous quality improvement through audits, feedback, and best practices.",
    "Fostering ethical and holistic development to nurture responsible and skilled professionals.",
  ],

  functions: [
    {
      title: "Develop Quality Benchmarks",
      description:
        "Establish parameters for academic and administrative activities.",
    },
    {
      title: "Feedback Mechanism",
      description:
        "Implement a structured feedback system from students, parents, and other stakeholders for quality sustenance.",
    },
    {
      title: "Academic & Administrative Audit",
      description:
        "Conduct periodic reviews of academic and administrative activities to identify areas for improvement.",
    },
    {
      title: "Promote Research",
      description:
        "Encourage faculty and students to engage in research and development.",
    },
    {
      title: "Documentation",
      description:
        "Maintain records of quality assurance initiatives and outcomes to support accreditation and rankings.",
    },
  ],

  impact: [
    "Enhanced student satisfaction and learning outcomes.",
    "Improved faculty teaching practices through workshops and seminars.",
    "Development of state-of-the-art infrastructure aligned with academic needs.",
    "Recognition of EIT as a quality-driven institution in higher education.",
  ],

  head: {
    name: "Prof. Sunil Verma",
    designation: "Head IQAC",
    email: "iqac@echeloninstitute.co.in",

    about: [
      "Prof. Sunil Verma, a seasoned academician and proficient administrator, leads the Internal Quality Assurance Cell (IQAC) at Echelon Institute of Technology, Faridabad. With extensive national and international experience, Prof. Verma has expertly managed diverse academic programs in Science, Engineering, Pharmacy, Medicine, Nursing, Public Health, and Management across Full-Time, Part-Time, Online, and Blended Learning modes.",
      "A recognized authority in accreditation processes, Prof. Verma has successfully handled frameworks such as NBA, AICTE, HEA, HPCZ, and GNCZ. His contributions to curriculum development for leading institutions and universities reflect his commitment to aligning academic offerings with global standards.",
      "In addition to his administrative expertise, Prof. Verma excels in teaching, research, and quality assurance. He has published and presented research in peer-reviewed journals and conferences, demonstrating his dedication to advancing knowledge and fostering innovation.",
      "With a proven record of accomplishment, Prof. Verma’s leadership ensures that the IQAC at Echelon Institute continues to drive excellence, fostering a culture of quality improvement and institutional growth.",
    ],

    message: [
      "Greetings!",
      "It is my privilege to welcome you to the Internal Quality Assurance Cell (IQAC) of our Institute. Established in accordance with the guidelines of the National Assessment and Accreditation Council (NAAC), the IQAC serves as a pivotal body committed to the continuous enhancement of quality in every academic and administrative endeavor of the Institution.",
      "At our Institute, quality is not a one-time achievement but a continuous journey. The IQAC plays a vital role in planning, guiding, and monitoring quality assurance and enhancement activities. We work collaboratively with all stakeholders—faculty, students, non-teaching staff, alumni, employers, and community members—to foster a culture of excellence, innovation, and accountability.",
      "Through structured feedback mechanisms, data-driven decision-making, and adoption of best practices, IQAC ensures that our teaching-learning processes, infrastructure, research initiatives, and extension activities align with the highest benchmarks of academic quality and institutional growth.",
      "As the Head IQAC, I invite all stakeholders to engage proactively in this shared journey of institutional development. Your valuable inputs, suggestions, and participation will continue to strengthen our collective mission of building a vibrant, inclusive, and future-ready academic environment.",
    ],
  },
};

export const nbaNaacContent = {
  overview:
    "Echelon Institute of Technology's policy, program and process framework is aligned with NBA and NAAC frameworks and the institutional Vision and Mission.",

  vision:
    "Technical and Management leaders engaged in the evolution of life, being at the frontiers of the continuous technological and administrative breakthroughs, inspired by ongoing exploration of self, society, and nature through self-reflective consciousness by building a culture of inspiration, exploration and growth.",

  mission: [
    {
      id: "M-1",
      text: "Having a culture of inspiration, exploration and invention through effective, experiential teaching-learning giving rise to ever evolving knowledge and wisdom.",
    },
    {
      id: "M-2",
      text: "To have self-inspired students ever engaged in continually working upon and sharpening and deepening computational, creative, and innovative and leadership consciousness.",
    },
    {
      id: "M-3",
      text: "Having students established in self-reflective consciousness, committed to personal, social & human integrity and engaged in deep inquiry and conversation, giving rise to shared, inter-subjective human values and consciousness.",
    },
  ],

  policies: [
    {
      title: "Academic Excellence Policy",
      points: [
        "Curriculum crafted in accordance with AICTE, UGC, NAAC, and NBA standards.",
        "Emphasis on outcome-based education (OBE) — mapping of COs, POs, and PSOs.",
        "Continuous curriculum enrichment through industry-academia interaction and Board of Studies (BoS).",
      ],
    },
    {
      title: "Student-Centric Development Policy",
      points: [
        "Development of intellectual, emotional, and ethical potential through reflective learning, innovation labs, and leadership training.",
        "Personalized mentorship system and career readiness programs embedded in every semester.",
      ],
    },
    {
      title: "Quality Assurance Policy",
      points: [
        "Robust IQAC mechanism for planning, execution, and review of academic and administrative processes.",
        "Transparent evaluation methods, academic audits, and feedback loops involving all stakeholders.",
      ],
    },
    {
      title: "Faculty Empowerment Policy",
      points: [
        "Regular Faculty Development Programs (FDPs) and workshops on pedagogy, research, and ICT tools.",
        "Performance-based incentives and transparent appraisal systems.",
      ],
    },
    {
      title: "Research, Innovation & Incubation Policy",
      points: [
        "Support for faculty and student-led research through internal funding, incubation center, and patent facilitation.",
        "Participation in national innovation contests, hackathons, and technical symposiums.",
      ],
    },
  ],

  programs: [
    {
      title: "Academic Programs",
      points: [
        "Undergraduate and Postgraduate Programs in Engineering, Computer Applications, and Management.",
        "Interdisciplinary value-added certification programs in AI, Cybersecurity, Data Science, etc.",
      ],
    },
    {
      title: "Teaching-Learning Program",
      points: [
        "Reflective and experiential learning through flipped classrooms, project-based learning, and innovation challenges.",
        "Integration of soft skills and spiritual intelligence modules for holistic growth.",
      ],
    },
    {
      title: "Industry Interface & Skill Development Program",
      points: [
        "Strategic tie-ups with industries for internships, live projects, and guest lectures.",
        "Skill enhancement through trainings from industry persons.",
      ],
    },
    {
      title: "Value & Character Building Program",
      points: [
        "Consciousness Hour (The Last Centre) for deep self-reflection, mindfulness, and value dialogue.",
        "Student participation in social engagement and national service programs (e.g., NSS).",
      ],
    },
    {
      title: "Research and Innovation Program",
      points: [
        "Promotion of innovation through Innovation & Incubation Cell.",
        "Annual Research Conclave and Idea Labs to showcase student and faculty research.",
        "Mentorship support for research paper publication, funding proposals, and patents.",
      ],
    },
  ],

  processes: [
    {
      title: "Academic Delivery Process",
      points: [
        "Pre-semester planning with lesson plans, course outcomes, and academic calendars.",
        "Teaching monitored through ERP-based dashboards and periodic academic audits.",
      ],
    },
    {
      title: "OBE Implementation Process",
      points: [
        "Each course is mapped with COs, POs, and PSOs using Bloom’s taxonomy.",
        "Attainment is calculated using direct and indirect tools with regular review cycles.",
      ],
    },
    {
      title: "Continuous Evaluation Process",
      points: [
        "Evaluation based on assignments, internal tests, lab work, and viva — all mapped to COs.",
        "Grievance redressal and revaluation mechanisms in place for academic fairness.",
      ],
    },
    {
      title: "Quality Assurance and Feedback Loop",
      points: [
        "IQAC-led internal audits, peer reviews, and stakeholder surveys conducted every semester.",
        "Action Taken Reports (ATRs) implemented with measurable KPIs.",
      ],
    },
    {
      title: "Faculty Development Process",
      points: [
        "Faculty Induction and orientation sessions at the start of every academic year.",
        "Defined KPIs based on teaching effectiveness, student feedback, research output, and contributions to institutional development.",
      ],
    },
    {
      title: "Student Progression and Support Process",
      points: [
        "Tracking academic, co-curricular, and career progression via ERP and mentor reviews.",
        "Dedicated placement cell and alumni connect programs for ongoing career support.",
      ],
    },
  ],

  accreditation: {
    nba: [
      "Clear articulation and attainment of COs, POs, and PSOs.",
      "Program Educational Objectives (PEOs) framed to reflect institutional vision and national graduate attributes.",
      "Strong industry and alumni feedback loop for curriculum revision and upgradation.",
    ],

    naac: [
      "Implementation of all NAAC criteria: Curricular Aspects, Teaching-Learning & Evaluation, Research, Innovation & Extension, Infrastructure & Learning Resources, Student Support & Progression, Governance, Leadership & Management, Institutional Values & Best Practices.",
      "Active documentation of best practices, green initiatives, and academic benchmarking.",
    ],
  },

  distinctiveness: [
    {
      title: "Consciousness-Centric Education",
      description:
        "Going beyond skills to nurture awareness, self-reflection, and ethical grounding.",
    },
    {
      title: "Holistic Student Development",
      description:
        "Focusing on intellect, innovation, integrity, and inquiry.",
    },
    {
      title: "Future-Ready Leaders",
      description:
        "Equipped not just with employable skills but the ability to lead in uncertain, complex, and value-driven environments.",
    },
  ],
};

export const grievanceRedressalContent = {
  responsibilities: [
    "Ensure that grievances received from students and staff are properly diarized and acknowledged.",
    "Fix an appropriate time limit for the disposal of grievances.",
    "Deal fairly with every grievance received by the committee.",
    "Remain available to assist students and staff with grievances arising within the institute campus.",
  ],
};

export const internalCommitteeWomenCellContent = {
  responsibilities: [
    "Ensure that grievances and complaints received from students and staff are properly diarized and acknowledged.",
    "Fix an appropriate time limit for the disposal of grievances and complaints.",
    "Ensure that every grievance is handled fairly and appropriately.",
    "Remain available to assist students and staff with grievances arising within the institute campus.",
  ],

  regulatoryFramework: {
    authority: "All India Council for Technical Education, New Delhi",
    reference: "F.AICTE/WH/2016/01",
    date: "10 June 2016",
  },
};

export const scStCellContent = {
  overview:
    "The SC/ST Cell is constituted to provide institutional support to students, faculty, and staff belonging to Scheduled Caste and Scheduled Tribe categories. The committee works to safeguard their interests and facilitate access to applicable government schemes.",

  responsibilities: [
    {
      title: "Safeguarding Interests",
      description:
        "Protect the interests and benefits of students, faculty, and staff belonging to Scheduled Caste and Scheduled Tribe categories.",
    },
    {
      title: "Government Scheme Assistance",
      description:
        "Help eligible SC/ST students, faculty, and staff access applicable government schemes and benefits.",
    },
    {
      title: "Institutional Support",
      description:
        "Remain available to assist SC/ST students, faculty, and staff within the institute campus.",
    },
  ],

  regulatoryFramework: {
    authority: "All India Council for Technical Education, New Delhi",
    act: "Scheduled Castes and Scheduled Tribes (Prevention of Atrocities) Act, 1989",
    actNumber: "Act No. 33 of 1989",
    date: "11 September 1989",
  },
};