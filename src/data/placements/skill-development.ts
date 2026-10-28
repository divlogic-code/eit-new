
export interface SkillPillar {
  id: string;
  title: string;
  description: string;
}

export interface SkillTrainingPartner {
  id: string;
  name: string;
  technologies: string;
}

export const skillDevelopment = {
  title: "Skill Development",

  description:
    "The Skill Development Department serves as a dynamic engine powering student transformation from academic learners into industry-ready professionals. Supporting a wide spectrum of programs—B.Tech, MBA, BBA, MCA, and BCA—this department is at the forefront of empowering students with the future-facing skills that today’s competitive job market demands.",

  pillars: [
    {
      id: "soft-skills",
      title: "21st Century Soft Skills Development",
      description:
        "Through high-impact training in communication, leadership, teamwork, emotional intelligence, and public speaking, students build a personal brand that shines in both interviews and the workplace.",
    },
    {
      id: "emerging-technologies",
      title: "Early Immersion in Emerging Technologies",
      description:
        "Hands-on workshops and lab sessions introduce students to cutting-edge tools and frameworks, ensuring they stay ahead in rapidly evolving fields.",
    },
  ] satisfies SkillPillar[],

  partners: [
    {
      id: "paul-alto",
      name: "Paul Alto",
      technologies: "Cloud Security Fundamental",
    },
    {
      id: "wipro",
      name: "Wipro",
      technologies: "",
    },
    {
      id: "ibm-skill-builds",
      name: "IBM Skill Builds",
      technologies: "Personality Development",
    },
    {
      id: "gtt-barclays",
      name: "GTT Barclays Training",
      technologies: "",
    },
    {
      id: "cisco",
      name: "Cisco",
      technologies: "Cyber Security",
    },
    {
      id: "ict-digital-marketing",
      name: "ICT Academy",
      technologies: "Digital Marketing",
    },
    {
      id: "code-squad",
      name: "Code squad",
      technologies: "Business Analytics",
    },
    {
      id: "intellus-data",
      name: "Intellus Design",
      technologies: "Data Analytics",
    },
    {
      id: "intellus-full-stack",
      name: "Intellus Design",
      technologies: "Full Stack Development",
    },
    {
      id: "nitd",
      name: "Netcoreinfo Institute of Training Development (NITD)",
      technologies:
        "Professional & Technical Skill Development",
    },
    {
      id: "sofcon",
      name: "Sofcon India Pvt. Ltd.",
      technologies: "Mechatronics",
    },
    {
      id: "defronix",
      name: "Defronix",
      technologies: "Cyber Security & Cyber Essentials",
    },
    {
      id: "centum-infosys",
      name: "Centum-Infosys",
      technologies:
        "Skill Up Program Empowering The Next Generation",
    },
    {
      id: "zenith",
      name: "Zenith",
      technologies: "Aptitude, Reasoning & Soft Skills",
    },
    {
      id: "softpro",
      name: "Softpro India",
      technologies: "IoT",
    },
    {
      id: "ict-honeywell",
      name: "ICT-Honeywell",
      technologies: "Artificial Intelligence",
    },
    {
      id: "kvch",
      name: "KVCH",
      technologies: "Python & NLP",
    },
    {
      id: "infosys-foundation",
      name: "Infosys Foundation",
      technologies: "Java Development",
    },
    {
      id: "ict-future-skills",
      name: "ICT Academy",
      technologies: "Future Skills for Employability",
    },
    {
      id: "nasscom",
      name: "Nasscom",
      technologies: "Coding Skills",
    },
  ] satisfies SkillTrainingPartner[],
};
