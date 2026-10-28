// Centre records migrated from the supplied updated lab DOCX files and the 2026–27 booklet.
// These sources list different centres; keep source attribution until the college confirms its current roster.
import type { ImageAsset, VideoAsset } from "@/types";
export interface CentreSection { heading: string; paragraphs: string[] }
export interface Centre { id: string; name: string; summary?: string; description?: string; href?: string; accent?: string; image?: ImageAsset; video?: VideoAsset; source?: string; sections?: CentreSection[] }
export const centres: Centre[] = [
  {
    "id": "amazon",
    "name": "Amazon Centre of Excellence",
    "image": { "src": "/images/centres/amazon-centre.svg", "alt": "Illustration representing AWS Cloud at EIT", "width": 1200, "height": 900 },
    "summary": "At Echelon Institute of Technology, the Amazon Centre of Excellence is dedicated to preparing students for careers in cloud computing by providing industry-relevant education through Amazon Web Services (AWS). The centre is designed to introduce learners to the principles of cloud technology and help them understand how organiza",
    "description": "At Echelon Institute of Technology, the Amazon Centre of Excellence is dedicated to preparing students for careers in cloud computing by providing industry-relevant education through Amazon Web Services (AWS). The centre is designed to introduce learners to the principles of cloud technology and help them understand how organizations build reliable, secure, and scalable digital solutions using AWS. Through structured training, practical demonstrations, and certification-focused learning, students gain valuable insights into the world's leading cloud platform while developing skills that are highly sought after across industries.",
    "href": "/centres/amazon",
    "source": "Updated laboratory content (DOCX)",
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "At Echelon Institute of Technology, the Amazon Centre of Excellence is dedicated to preparing students for careers in cloud computing by providing industry-relevant education through Amazon Web Services (AWS). The centre is designed to introduce learners to the principles of cloud technology and help them understand how organizations build reliable, secure, and scalable digital solutions using AWS.",
          "Through structured training, practical demonstrations, and certification-focused learning, students gain valuable insights into the world's leading cloud platform while developing skills that are highly sought after across industries.",
          "Whether you're an aspiring Cloud Engineer, DevOps Professional, System Administrator, or Software Developer, the Amazon Centre of Excellence provides the knowledge and experience needed to begin your cloud journey."
        ]
      },
      {
        "heading": "Why Amazon Centre of Excellence at Echelon?",
        "paragraphs": [
          "The Amazon Centre of Excellence provides a modern learning ecosystem where students explore cloud technologies through practical experiences and real-world business scenarios.",
          "Students benefit from:"
        ]
      },
      {
        "heading": "Certification Preparation Resources",
        "paragraphs": [
          "Students develop a clear understanding of cloud technologies while gaining confidence in using AWS services."
        ]
      },
      {
        "heading": "AWS Certified Cloud Practitioner Training",
        "paragraphs": [
          "The training program is based on the globally recognized AWS Certified Cloud Practitioner certification and is designed for beginners who want to establish a strong foundation in cloud computing.",
          "The curriculum introduces learners to essential AWS concepts while helping them understand how cloud technologies are implemented across modern enterprises.",
          "Students receive training in:"
        ]
      },
      {
        "heading": "Certification Readiness",
        "paragraphs": [
          "The program combines conceptual learning with practical examples to simplify cloud technologies for beginners."
        ]
      },
      {
        "heading": "Official AWS Learning Program",
        "paragraphs": [
          "The Amazon Centre of Excellence prepares students for:"
        ]
      },
      {
        "heading": "Certification Preparation",
        "paragraphs": [
          "Students build a strong understanding of AWS services and cloud best practices while preparing for certification."
        ]
      },
      {
        "heading": "Skills You Will Gain",
        "paragraphs": [
          "After completing the program, students will be able to:"
        ]
      },
      {
        "heading": "Career Opportunities",
        "paragraphs": [
          "The Amazon Centre of Excellence prepares students for roles such as:"
        ]
      },
      {
        "heading": "Software Engineer",
        "paragraphs": [
          "Students also establish the foundation required for advanced AWS certifications, internships, and cloud-focused career opportunities."
        ]
      },
      {
        "heading": "Certification and training details",
        "paragraphs": [
          "# | Certification Program | What You Will Learn",
          "1 | AWS Cloud Practitioner | AWS cloud fundamentals.",
          "2 | AWS AI Practitioner | AWS AI services.",
          "3 | AWS Machine Learning Engineer Associate | ML on AWS.",
          "4 | AWS Developer Associate | Build cloud applications.",
          "5 | AWS Solutions Architect Associate | Cloud architecture.",
          "6 | AWS SysOps Administrator | AWS operations.",
          "7 | AWS Data Engineer Associate | Data pipelines.",
          "8 | AWS Security Specialty | Cloud security.",
          "9 | AWS DevOps Engineer Professional | CI/CD and automation.",
          "10 | AWS Generative AI Learning Plan | Generative AI on AWS."
        ]
      }
    ]
  },
  {
    "id": "apple",
    "name": "Apple Centre of Excellence",
    "image": { "src": "/images/centres/apple-centre.svg", "alt": "Illustration representing Apple Technology at EIT", "width": 1200, "height": 900 },
    "summary": "At Echelon Institute of Technology, we are committed to providing students with an industry-oriented learning environment that prepares them for the technologies of tomorrow. Our Apple Centre of Excellence (Apple Lab) is a state-of-the-art facility established to bridge the gap between classroom learning and real-world applicati",
    "description": "At Echelon Institute of Technology, we are committed to providing students with an industry-oriented learning environment that prepares them for the technologies of tomorrow. Our Apple Centre of Excellence (Apple Lab) is a state-of-the-art facility established to bridge the gap between classroom learning and real-world application development. Designed in collaboration with Apple's learning ecosystem, the lab provides students with hands-on experience using Apple iMac systems, Xcode, Swift, and SwiftUI—the same technologies used by professional iOS developers worldwide.",
    "href": "/centres/apple",
    "source": "Updated laboratory content (DOCX)",
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "At Echelon Institute of Technology, we are committed to providing students with an industry-oriented learning environment that prepares them for the technologies of tomorrow. Our Apple Centre of Excellence (Apple Lab) is a state-of-the-art facility established to bridge the gap between classroom learning and real-world application development.",
          "Designed in collaboration with Apple's learning ecosystem, the lab provides students with hands-on experience using Apple iMac systems, Xcode, Swift, and SwiftUI—the same technologies used by professional iOS developers worldwide.",
          "Whether you are taking your first step into programming or aspiring to become an iOS Application Developer, the Apple Lab offers the perfect platform to learn, innovate, and build."
        ]
      },
      {
        "heading": "Why Apple Lab at Echelon?",
        "paragraphs": [
          "The Apple Lab is more than just a computer laboratory—it's an innovation hub where students transform ideas into real applications.",
          "Our students learn by doing through:"
        ]
      },
      {
        "heading": "Innovation, Creativity & Problem Solving",
        "paragraphs": [
          "Students work on real-world applications while gaining practical exposure to the Apple development ecosystem."
        ]
      },
      {
        "heading": "Apple Training Program",
        "paragraphs": [
          "Our Apple Training Program is designed to provide students with comprehensive knowledge of iOS application development using Apple's official learning resources.",
          "The curriculum focuses on developing both technical expertise and problem-solving skills through practical implementation.",
          "Students receive structured training on:"
        ]
      },
      {
        "heading": "Industry Best Practices",
        "paragraphs": [
          "The training follows a step-by-step approach that enables beginners to gradually develop into confident application developers."
        ]
      },
      {
        "heading": "Official Apple Learning Curriculum",
        "paragraphs": [
          "Our training is based on Apple's official \"Development in Swift Tutorials\", one of the most recognized learning pathways for beginners."
        ]
      },
      {
        "heading": "Skills You Will Gain",
        "paragraphs": [
          "After completing the Apple Training Program, students will be able to:"
        ]
      },
      {
        "heading": "Career Opportunities",
        "paragraphs": [
          "The skills acquired through the Apple Lab open doors to a wide range of career opportunities, including:"
        ]
      },
      {
        "heading": "Startup Founder",
        "paragraphs": [
          "Students also build a strong foundation for advanced certifications, internships, and entrepreneurship.",
          "Learn with Apple. Build with Innovation. Grow with Echelon."
        ]
      },
      {
        "heading": "Certification and training details",
        "paragraphs": [
          "# | Certification Program | What You Will Learn",
          "1 | Development in Swift Explorations | Learn Swift basics, Xcode, app logic and problem solving.",
          "2 | Development in Swift Fundamentals | Build complete iOS apps using SwiftUI and Xcode.",
          "3 | Development in Swift Data Collections | Create data-driven iOS applications using advanced Swift.",
          "4 | Development in Swift AP CS Principles | Programming, algorithms and computational thinking.",
          "5 | App Development with SwiftUI | Modern UI development for iPhone and iPad apps.",
          "6 | Xcode Essentials | Debugging, testing and project management in Xcode.",
          "7 | SwiftUI Essentials | Responsive UI, navigation and state management."
        ]
      }
    ]
  },
  {
    "id": "cisco",
    "name": "Cisco Centre of Excellence",
    "image": { "src": "/images/centres/cisco-centre.svg", "alt": "Illustration representing Cisco Networking at EIT", "width": 1200, "height": 900 },
    "summary": "At Echelon Institute of Technology, we believe that a secure digital future begins with strong technical foundations. The Cisco Centre of Excellence (Cybersecurity & Networking Lab) is established to prepare students for the ever-growing demand for cybersecurity professionals, network engineers, and IT security specialists. Buil",
    "description": "At Echelon Institute of Technology, we believe that a secure digital future begins with strong technical foundations. The Cisco Centre of Excellence (Cybersecurity & Networking Lab) is established to prepare students for the ever-growing demand for cybersecurity professionals, network engineers, and IT security specialists. Built around Cisco Networking Academy's Cybersecurity Essentials curriculum, the centre provides students with a comprehensive understanding of cyber threats, secure networking, digital defense strategies, and emerging technologies such as Artificial Intelligence in cybersecurity. Through practical learning and industry-oriented training, students develop the knowledge required to protect digital systems in today's interconnected world.",
    "href": "/centres/cisco",
    "source": "Updated laboratory content (DOCX)",
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "At Echelon Institute of Technology, we believe that a secure digital future begins with strong technical foundations. The Cisco Centre of Excellence (Cybersecurity & Networking Lab) is established to prepare students for the ever-growing demand for cybersecurity professionals, network engineers, and IT security specialists.",
          "Built around Cisco Networking Academy's Cybersecurity Essentials curriculum, the centre provides students with a comprehensive understanding of cyber threats, secure networking, digital defense strategies, and emerging technologies such as Artificial Intelligence in cybersecurity. Through practical learning and industry-oriented training, students develop the knowledge required to protect digital systems in today's interconnected world.",
          "Whether you aspire to become a Cybersecurity Analyst, Network Engineer, Information Security Professional, or AI Security Specialist, the Cisco Centre of Excellence offers the perfect environment to build your technical expertise."
        ]
      },
      {
        "heading": "Why Cisco Centre of Excellence at Echelon?",
        "paragraphs": [
          "The Cisco Centre of Excellence creates a hands-on learning environment where students understand how modern networks operate and how organizations defend their digital infrastructure against evolving cyber threats.",
          "Students gain access to:"
        ]
      },
      {
        "heading": "Collaborative Technical Learning",
        "paragraphs": [
          "The centre emphasizes practical knowledge, analytical thinking, and industry readiness to help students excel in the cybersecurity domain."
        ]
      },
      {
        "heading": "Cybersecurity Essentials Training Program",
        "paragraphs": [
          "The Cybersecurity Essentials program introduces students to the principles of digital security and prepares them to identify, analyze, and respond to cybersecurity risks in modern IT environments.",
          "Students receive structured training in:"
        ]
      },
      {
        "heading": "Industry Best Practices",
        "paragraphs": [
          "The curriculum combines conceptual learning with practical activities, enabling students to understand how cybersecurity protects businesses and individuals from digital attacks."
        ]
      },
      {
        "heading": "Official Cisco Networking Academy Curriculum",
        "paragraphs": [
          "The training follows the globally recognized Cisco Networking Academy – Cybersecurity Essentials program."
        ]
      },
      {
        "heading": "Capstone Project",
        "paragraphs": [
          "Students gain practical knowledge through guided activities that simulate real-world cybersecurity challenges."
        ]
      },
      {
        "heading": "Skills You Will Acquire",
        "paragraphs": [
          "Upon completing the Cisco Cybersecurity Essentials program, students will be able to:"
        ]
      },
      {
        "heading": "Career Opportunities",
        "paragraphs": [
          "The Cisco Centre of Excellence prepares students for diverse roles in cybersecurity and networking, including:"
        ]
      },
      {
        "heading": "Cyber Defense Specialist",
        "paragraphs": [
          "The program also serves as an excellent foundation for advanced Cisco certifications, cybersecurity specializations, internships, and careers in information technology."
        ]
      },
      {
        "heading": "Certification and training details",
        "paragraphs": [
          "# | Certification Program | What You Will Learn",
          "1 | Introduction to Cybersecurity | Cybersecurity basics.",
          "2 | Cybersecurity Essentials | Threats, malware and defense.",
          "3 | Networking Basics | Networking fundamentals.",
          "4 | Network Technician | LAN/WAN installation.",
          "5 | CCNA | Routing and switching.",
          "6 | Python Essentials | Python programming.",
          "7 | JavaScript Essentials | JavaScript fundamentals.",
          "8 | Linux Essentials | Linux administration.",
          "9 | Ethical Hacker | Ethical hacking concepts.",
          "10 | Endpoint Security | Device protection.",
          "11 | Network Security | Secure enterprise networks.",
          "12 | IoT Fundamentals | Internet of Things.",
          "13 | DevNet Associate | Network automation APIs."
        ]
      }
    ]
  },
  {
    "id": "google",
    "name": "Google Centre of Excellence",
    "image": { "src": "/images/centres/google-centre.svg", "alt": "Illustration representing Google Cloud & AI at EIT", "width": 1200, "height": 900 },
    "summary": "At Echelon Institute of Technology, we are committed to preparing students with industry-relevant skills that meet the demands of today's digital world. Our Google Centre of Excellence (Google Cloud Lab) is a state-of-the-art learning facility designed to bridge the gap between academic knowledge and real-world cloud computing, ",
    "description": "At Echelon Institute of Technology, we are committed to preparing students with industry-relevant skills that meet the demands of today's digital world. Our Google Centre of Excellence (Google Cloud Lab) is a state-of-the-art learning facility designed to bridge the gap between academic knowledge and real-world cloud computing, artificial intelligence, cybersecurity, and software engineering. Built around Google's official learning ecosystem, the lab provides students with hands-on experience using Google Cloud Platform (GCP), Google Cloud Skills Boost, Vertex AI, BigQuery, Kubernetes, and modern cloud technologies used by leading technology companies across the globe.",
    "href": "/centres/google",
    "source": "Updated laboratory content (DOCX)",
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "At Echelon Institute of Technology, we are committed to preparing students with industry-relevant skills that meet the demands of today's digital world. Our Google Centre of Excellence (Google Cloud Lab) is a state-of-the-art learning facility designed to bridge the gap between academic knowledge and real-world cloud computing, artificial intelligence, cybersecurity, and software engineering.",
          "Built around Google's official learning ecosystem, the lab provides students with hands-on experience using Google Cloud Platform (GCP), Google Cloud Skills Boost, Vertex AI, BigQuery, Kubernetes, and modern cloud technologies used by leading technology companies across the globe.",
          "Whether you are beginning your journey into cloud computing or aspiring to become a Cloud Engineer, Data Analyst, AI Engineer, or DevOps Professional, the Google Centre of Excellence provides the ideal environment to learn, innovate, and build."
        ]
      },
      {
        "heading": "Why Google Cloud Lab at Echelon?",
        "paragraphs": [
          "The Google Cloud Lab is more than just a computer laboratory—it's an innovation hub where students gain practical experience by solving real-world business challenges using Google's cloud technologies.",
          "Our students learn by doing through:"
        ]
      },
      {
        "heading": "Collaborative Learning & Team Projects",
        "paragraphs": [
          "Students gain practical exposure to enterprise cloud technologies while developing industry-ready skills demanded by top technology companies."
        ]
      },
      {
        "heading": "Google Training Program",
        "paragraphs": [
          "Our Google Training Program is designed to provide students with comprehensive knowledge of cloud technologies using Google's official Google Cloud Skills Boost platform.",
          "The curriculum focuses on developing technical expertise through hands-on labs, guided learning paths, and real-world projects.",
          "Students receive structured training on:"
        ]
      },
      {
        "heading": "Industry Best Practices",
        "paragraphs": [
          "The program follows a step-by-step learning approach that enables beginners to become confident cloud professionals."
        ]
      },
      {
        "heading": "Official Google Learning Curriculum",
        "paragraphs": [
          "Our training is based on Google Cloud Skills Boost, Google's official learning platform offering interactive labs, skill badges, and role-based learning paths."
        ]
      },
      {
        "heading": "Skills You Will Gain",
        "paragraphs": [
          "After completing the Google Training Program, students will be able to:"
        ]
      },
      {
        "heading": "Career Opportunities",
        "paragraphs": [
          "The skills acquired through the Google Centre of Excellence prepare students for high-demand career roles, including:"
        ]
      },
      {
        "heading": "Certification and training details",
        "paragraphs": [
          "# | Certification Program | What You Will Learn",
          "1 | Google Cloud Digital Leader | Cloud concepts and Google Cloud services.",
          "2 | Associate Cloud Engineer | Deploy and manage workloads on Google Cloud.",
          "3 | Professional Cloud Architect | Design enterprise cloud solutions.",
          "4 | Professional Data Engineer | Build modern data pipelines and analytics.",
          "5 | Professional Machine Learning Engineer | Develop and deploy ML solutions.",
          "6 | Google AI Essentials | Generative AI and responsible AI.",
          "7 | Google Prompting Essentials | Prompt engineering for AI tools.",
          "8 | Generative AI Learning Path | Hands-on GenAI applications.",
          "9 | Google Data Analytics Professional Certificate | SQL, Sheets, Tableau and analytics.",
          "10 | Google Cybersecurity Professional Certificate | SOC, security operations and networking."
        ]
      }
    ]
  },
  {
    "id": "ibm",
    "name": "IBM Centre of Excellence",
    "image": { "src": "/images/centres/ibm-centre.svg", "alt": "Illustration representing IBM SkillsBuild at EIT", "width": 1200, "height": 900 },
    "summary": "At Echelon Institute of Technology, we are dedicated to nurturing future-ready professionals by combining academic excellence with globally recognized industry training. The IBM Centre of Excellence is designed to provide students with practical exposure to emerging technologies, workplace competencies, and digital career skills",
    "description": "At Echelon Institute of Technology, we are dedicated to nurturing future-ready professionals by combining academic excellence with globally recognized industry training. The IBM Centre of Excellence is designed to provide students with practical exposure to emerging technologies, workplace competencies, and digital career skills through the IBM SkillsBuild learning platform. The centre creates an engaging environment where students strengthen their technical knowledge while developing critical thinking, communication, and professional skills required in today's rapidly evolving technology landscape.",
    "href": "/centres/ibm",
    "source": "Updated laboratory content (DOCX)",
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "At Echelon Institute of Technology, we are dedicated to nurturing future-ready professionals by combining academic excellence with globally recognized industry training. The IBM Centre of Excellence is designed to provide students with practical exposure to emerging technologies, workplace competencies, and digital career skills through the IBM SkillsBuild learning platform.",
          "The centre creates an engaging environment where students strengthen their technical knowledge while developing critical thinking, communication, and professional skills required in today's rapidly evolving technology landscape.",
          "Whether your goal is to become a Web Developer, Data Analyst, IT Professional, or a future technology leader, the IBM Centre of Excellence provides the resources and mentorship to help you succeed."
        ]
      },
      {
        "heading": "Why Choose IBM Centre of Excellence at Echelon?",
        "paragraphs": [
          "The IBM Centre of Excellence blends technology education with career development, enabling students to learn through practical application and industry-inspired experiences.",
          "Students receive access to:"
        ]
      },
      {
        "heading": "Continuous Skill Assessments",
        "paragraphs": [
          "Our objective is to help students become confident professionals equipped with both technical expertise and workplace competencies."
        ]
      },
      {
        "heading": "IBM Professional Development Program",
        "paragraphs": [
          "The IBM Professional Development Program introduces students to essential digital technologies while strengthening the practical and interpersonal skills expected by modern employers.",
          "The curriculum is structured to balance technical learning with career preparation.",
          "Students receive training in:"
        ]
      },
      {
        "heading": "Industry Best Practices",
        "paragraphs": [
          "The program is suitable for beginners and progressively builds confidence through hands-on activities and real-world assignments."
        ]
      },
      {
        "heading": "Official IBM SkillsBuild Learning Path",
        "paragraphs": [
          "Training is delivered using IBM SkillsBuild, IBM's official digital learning platform that prepares learners with both technical knowledge and employability skills."
        ]
      },
      {
        "heading": "Capstone Project",
        "paragraphs": [
          "Students complete guided learning modules while building projects that demonstrate their newly acquired skills."
        ]
      },
      {
        "heading": "Knowledge & Skills You Will Acquire",
        "paragraphs": [
          "By completing the IBM Professional Development Program, students will be able to:"
        ]
      },
      {
        "heading": "Career Pathways",
        "paragraphs": [
          "The IBM Centre of Excellence prepares students for a variety of entry-level technology and business roles, including:"
        ]
      },
      {
        "heading": "Graduate Trainee",
        "paragraphs": [
          "The knowledge gained also serves as a strong foundation for advanced certifications, internships, higher education, and future specialization in technology domains."
        ]
      },
      {
        "heading": "Certification and training details",
        "paragraphs": [
          "# | Certification Program | What You Will Learn",
          "1 | Web Development Fundamentals | Frontend web development.",
          "2 | IBM AI Fundamentals | AI basics.",
          "3 | IBM Data Science Professional Certificate | Python, ML and analytics.",
          "4 | IBM Data Analyst | Data analysis and visualization.",
          "5 | IBM Full Stack Software Developer | MERN, Git and DevOps.",
          "6 | IBM Cybersecurity Analyst | Cyber defense.",
          "7 | IBM DevOps and Software Engineering | CI/CD and DevOps.",
          "8 | IBM Machine Learning | ML models.",
          "9 | IBM Generative AI Engineering | GenAI development.",
          "10 | IBM Prompt Engineering | Prompt design."
        ]
      }
    ]
  },
  {
    "id": "intel",
    "name": "Intel Centre of Excellence",
    "image": { "src": "/images/centres/intel-centre.svg", "alt": "Illustration representing Intel AI at EIT", "width": 1200, "height": 900 },
    "summary": "At Echelon Institute of Technology, we recognize that Artificial Intelligence is reshaping every industry, from healthcare and finance to manufacturing and smart cities. The Intel Centre of Excellence (AI Innovation Lab) has been established to prepare students for the future by providing practical exposure to Artificial Intelli",
    "description": "At Echelon Institute of Technology, we recognize that Artificial Intelligence is reshaping every industry, from healthcare and finance to manufacturing and smart cities. The Intel Centre of Excellence (AI Innovation Lab) has been established to prepare students for the future by providing practical exposure to Artificial Intelligence, Machine Learning, and intelligent computing technologies. Built around the Intel® AI for Future Workforce program, the centre empowers students with industry-relevant AI knowledge through interactive learning, hands-on activities, and real-world applications. Students develop the skills required to understand how AI systems are designed, trained, and deployed to solve modern challenges.",
    "href": "/centres/intel",
    "source": "Updated laboratory content (DOCX)",
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "At Echelon Institute of Technology, we recognize that Artificial Intelligence is reshaping every industry, from healthcare and finance to manufacturing and smart cities. The Intel Centre of Excellence (AI Innovation Lab) has been established to prepare students for the future by providing practical exposure to Artificial Intelligence, Machine Learning, and intelligent computing technologies.",
          "Built around the Intel® AI for Future Workforce program, the centre empowers students with industry-relevant AI knowledge through interactive learning, hands-on activities, and real-world applications. Students develop the skills required to understand how AI systems are designed, trained, and deployed to solve modern challenges.",
          "Whether you are exploring Artificial Intelligence for the first time or planning a career in AI, Machine Learning, Data Science, or Intelligent Automation, the Intel Centre of Excellence offers the perfect launchpad for your professional journey."
        ]
      },
      {
        "heading": "Why Intel AI Lab at Echelon?",
        "paragraphs": [
          "The Intel AI Lab provides an immersive ecosystem where students move beyond theory and experience how Artificial Intelligence is transforming businesses and society.",
          "Students gain access to:"
        ]
      },
      {
        "heading": "Continuous Performance Evaluation",
        "paragraphs": [
          "The centre encourages curiosity, creativity, and innovation while helping students understand the real-world impact of Artificial Intelligence."
        ]
      },
      {
        "heading": "Intel AI Learning Program",
        "paragraphs": [
          "The Intel AI Learning Program introduces students to the core principles of Artificial Intelligence through a structured and beginner-friendly curriculum. The training focuses on conceptual understanding as well as practical implementation using modern AI tools and methodologies.",
          "Students receive comprehensive training in:"
        ]
      },
      {
        "heading": "Industry Best Practices",
        "paragraphs": [
          "The curriculum is designed to simplify complex AI concepts while enabling students to develop confidence through practical experimentation."
        ]
      },
      {
        "heading": "Official Intel AI for Future Workforce Curriculum",
        "paragraphs": [
          "The training is based on Intel® AI for Future Workforce, an industry-recognized program that introduces students to Artificial Intelligence through experiential learning and practical application."
        ]
      },
      {
        "heading": "Capstone Project",
        "paragraphs": [
          "Students build practical understanding through guided exercises, interactive labs, and AI-driven projects that simulate real-world applications."
        ]
      },
      {
        "heading": "Skills You Will Develop",
        "paragraphs": [
          "Upon successful completion of the Intel AI Program, students will be able to:"
        ]
      },
      {
        "heading": "Career Opportunities",
        "paragraphs": [
          "The Intel Centre of Excellence lays the foundation for a wide range of technology careers, including:"
        ]
      },
      {
        "heading": "Emerging Technology Specialist",
        "paragraphs": [
          "The program also prepares students for advanced studies, internships, AI certifications, research opportunities, and careers in next-generation technologies."
        ]
      },
      {
        "heading": "Certification and training details",
        "paragraphs": [
          "# | Certification Program | What You Will Learn",
          "1 | Intel AI for Future Workforce | AI and ML basics.",
          "2 | Intel Edge AI | Edge AI deployment.",
          "3 | AI PC Developer Program | AI PCs and optimization.",
          "4 | OpenVINO Toolkit | Computer vision optimization.",
          "5 | oneAPI Programming | Parallel programming.",
          "6 | Computer Vision with Intel AI | Vision AI applications.",
          "7 | AI for Manufacturing | Industrial AI."
        ]
      }
    ]
  },
  {
    "id": "microsoft",
    "name": "Microsoft Centre of Excellence",
    "image": { "src": "/images/centres/microsoft-centre.svg", "alt": "Illustration representing Microsoft Azure at EIT", "width": 1200, "height": 900 },
    "summary": "At Echelon Institute of Technology, we believe that digital transformation begins with the right skills and practical experience. The Microsoft Centre of Excellence (Microsoft Azure Lab) has been established to equip students with globally recognized cloud computing knowledge using Microsoft's enterprise technologies. Powered by",
    "description": "At Echelon Institute of Technology, we believe that digital transformation begins with the right skills and practical experience. The Microsoft Centre of Excellence (Microsoft Azure Lab) has been established to equip students with globally recognized cloud computing knowledge using Microsoft's enterprise technologies. Powered by Microsoft's learning ecosystem, the lab enables students to understand modern cloud infrastructure, virtualization, networking, security, and Azure services through practical exercises guided by a Certified Microsoft Trainer (CMT).",
    "href": "/centres/microsoft",
    "source": "Updated laboratory content (DOCX)",
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "At Echelon Institute of Technology, we believe that digital transformation begins with the right skills and practical experience. The Microsoft Centre of Excellence (Microsoft Azure Lab) has been established to equip students with globally recognized cloud computing knowledge using Microsoft's enterprise technologies.",
          "Powered by Microsoft's learning ecosystem, the lab enables students to understand modern cloud infrastructure, virtualization, networking, security, and Azure services through practical exercises guided by a Certified Microsoft Trainer (CMT).",
          "Whether you are preparing for your first cloud certification or planning a career in cloud computing, system administration, cybersecurity, or IT infrastructure, the Microsoft Centre of Excellence provides the ideal platform to build professional expertise."
        ]
      },
      {
        "heading": "Why Microsoft Azure Lab at Echelon?",
        "paragraphs": [
          "Our Microsoft Azure Lab provides students with an immersive learning environment where concepts are reinforced through practical implementation and industry-oriented activities.",
          "Students benefit from:"
        ]
      },
      {
        "heading": "Collaborative Team Learning",
        "paragraphs": [
          "The program focuses on developing technical confidence while helping students understand how enterprises build, manage, and secure cloud environments."
        ]
      },
      {
        "heading": "Microsoft Azure Fundamentals Training",
        "paragraphs": [
          "Our training program is based on Microsoft Azure Fundamentals (AZ-900) and is specially designed for students, beginners, and aspiring cloud professionals who want to build a strong foundation in Microsoft Azure.",
          "Delivered by a Certified Microsoft Trainer (CMT), the course combines theoretical concepts with practical demonstrations to ensure complete understanding of cloud technologies.",
          "The training covers:"
        ]
      },
      {
        "heading": "Certification Preparation",
        "paragraphs": [
          "The curriculum follows Microsoft's recommended learning path and prepares students for both certification and real-world cloud environments."
        ]
      },
      {
        "heading": "Official Microsoft Certification Path",
        "paragraphs": [
          "The Microsoft Centre of Excellence offers structured preparation for:"
        ]
      },
      {
        "heading": "Capstone Activities",
        "paragraphs": [
          "Students gain practical exposure using the Microsoft Azure Portal while preparing confidently for the AZ-900 certification examination."
        ]
      },
      {
        "heading": "Competencies You Will Develop",
        "paragraphs": [
          "Upon successful completion of the program, students will be able to:"
        ]
      },
      {
        "heading": "Career Opportunities",
        "paragraphs": [
          "Completing the Microsoft Azure Fundamentals program opens pathways to various technology careers, including:"
        ]
      },
      {
        "heading": "Software Engineer",
        "paragraphs": [
          "The program also serves as the first step toward advanced Microsoft certifications such as Azure Administrator, Azure Developer, Azure Security Engineer, and Azure Solutions Architect."
        ]
      },
      {
        "heading": "Certification and training details",
        "paragraphs": [
          "# | Certification Program | What You Will Learn",
          "1 | AZ-900 - Azure Fundamentals | Azure cloud fundamentals.",
          "2 | AI-900 - Azure AI Fundamentals | Artificial Intelligence fundamentals.",
          "3 | DP-900 - Azure Data Fundamentals | Data fundamentals.",
          "4 | SC-900 - Security, Compliance and Identity | Security, Compliance and Identity.",
          "5 | PL-900 - Power Platform Fundamentals | Power Platform fundamentals.",
          "6 | MS-900 - Microsoft 365 Fundamentals | Microsoft 365 fundamentals.",
          "7 | GitHub Foundations | Git, GitHub and collaboration.",
          "8 | GitHub Copilot Fundamentals | AI-assisted software development.",
          "9 | AZ-104 - Azure Administrator | Azure administration and deployment.",
          "10 | PL-300 - Power BI Data Analyst | Dashboards, reports and BI."
        ]
      }
    ]
  },
  {
    "id": "nasscom",
    "name": "NASSCOM Centre of Excellence",
    "image": { "src": "/images/centres/nasscom-centre.svg", "alt": "Illustration representing FutureSkills Prime at EIT", "width": 1200, "height": 900 },
    "summary": "At Echelon Institute of Technology, we are committed to preparing students for the evolving demands of the digital economy. The NASSCOM Centre of Excellence serves as a gateway to industry-recognized digital learning, enabling students to develop future-ready skills through FutureSkills Prime, India's premier technology skilling",
    "description": "At Echelon Institute of Technology, we are committed to preparing students for the evolving demands of the digital economy. The NASSCOM Centre of Excellence serves as a gateway to industry-recognized digital learning, enabling students to develop future-ready skills through FutureSkills Prime, India's premier technology skilling initiative. The centre bridges the gap between academic education and industry expectations by offering structured learning in emerging technologies such as Artificial Intelligence, Cloud Computing, Cybersecurity, Data Science, and Software Development. Through an industry-aligned curriculum and practical exposure, students gain the competencies required to thrive in today's technology-driven workplace.",
    "href": "/centres/nasscom",
    "source": "Updated laboratory content (DOCX)",
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "At Echelon Institute of Technology, we are committed to preparing students for the evolving demands of the digital economy. The NASSCOM Centre of Excellence serves as a gateway to industry-recognized digital learning, enabling students to develop future-ready skills through FutureSkills Prime, India's premier technology skilling initiative.",
          "The centre bridges the gap between academic education and industry expectations by offering structured learning in emerging technologies such as Artificial Intelligence, Cloud Computing, Cybersecurity, Data Science, and Software Development. Through an industry-aligned curriculum and practical exposure, students gain the competencies required to thrive in today's technology-driven workplace.",
          "Whether your ambition is to become a Software Developer, Data Scientist, Cloud Professional, AI Engineer, or Cybersecurity Expert, the NASSCOM Centre of Excellence provides the knowledge and guidance to accelerate your career."
        ]
      },
      {
        "heading": "Why NASSCOM Centre of Excellence at Echelon?",
        "paragraphs": [
          "The NASSCOM Centre of Excellence is designed to create an industry-focused learning ecosystem where students continuously enhance their technical capabilities while developing problem-solving and innovation skills.",
          "Students benefit from:"
        ]
      },
      {
        "heading": "Career Readiness Support",
        "paragraphs": [
          "The centre enables students to stay ahead of technological advancements while preparing for highly competitive careers."
        ]
      },
      {
        "heading": "FutureSkills Prime Training Program",
        "paragraphs": [
          "The FutureSkills Prime Program is designed to equip students with multidisciplinary digital skills that are in high demand across industries.",
          "The curriculum emphasizes practical understanding, industry relevance, and continuous skill enhancement.",
          "Students receive training in:"
        ]
      },
      {
        "heading": "Career Development Skills",
        "paragraphs": [
          "The program provides learners with a comprehensive understanding of modern technologies through guided learning and practical implementation."
        ]
      },
      {
        "heading": "Official FutureSkills Prime Learning Path",
        "paragraphs": [
          "The training follows FutureSkills Prime, India's flagship digital skilling initiative jointly supported by NASSCOM and the Ministry of Electronics & Information Technology (MeitY)."
        ]
      },
      {
        "heading": "Capstone Project",
        "paragraphs": [
          "Students build technical expertise through structured learning pathways while applying concepts to real-world scenarios."
        ]
      },
      {
        "heading": "Skills You Will Develop",
        "paragraphs": [
          "Upon successful completion of the program, students will be able to:"
        ]
      },
      {
        "heading": "Career Opportunities",
        "paragraphs": [
          "The NASSCOM Centre of Excellence prepares students for a broad range of technology careers, including:"
        ]
      },
      {
        "heading": "Innovation Associate",
        "paragraphs": [
          "The program also provides a strong foundation for advanced certifications, internships, higher education, and careers in emerging technologies."
        ]
      },
      {
        "heading": "Certification and training details",
        "paragraphs": [
          "# | Certification Program | What You Will Learn",
          "1 | Artificial Intelligence | AI foundations.",
          "2 | Cloud Computing | Cloud technologies.",
          "3 | Cybersecurity | Cyber defense.",
          "4 | Data Science | Analytics and ML.",
          "5 | Software Development | Programming practices.",
          "6 | Generative AI | LLMs and GenAI.",
          "7 | Prompt Engineering | Effective prompting.",
          "8 | Python Programming | Python development.",
          "9 | Machine Learning | ML algorithms.",
          "10 | Full Stack Development | Frontend and backend.",
          "11 | Java Programming | Core Java.",
          "12 | Salesforce | CRM platform.",
          "13 | RPA | Automation.",
          "14 | UI/UX Design | User experience.",
          "15 | Blockchain | Distributed ledger.",
          "16 | IoT | Connected devices.",
          "17 | DevOps | Automation and CI/CD.",
          "18 | Digital Marketing | SEO and marketing."
        ]
      }
    ]
  },
  {
    "id": "oracle",
    "name": "Oracle Centre of Excellence",
    "image": { "src": "/images/centres/oracle-centre.svg", "alt": "Illustration representing Oracle Cloud at EIT", "width": 1200, "height": 900 },
    "summary": "At Echelon Institute of Technology, we are committed to preparing students for the next era of intelligent computing by integrating cutting-edge technologies into the learning experience. The Oracle Centre of Excellence (Oracle Cloud AI Lab) is designed to help students understand the transformative power of Artificial Intellige",
    "description": "At Echelon Institute of Technology, we are committed to preparing students for the next era of intelligent computing by integrating cutting-edge technologies into the learning experience. The Oracle Centre of Excellence (Oracle Cloud AI Lab) is designed to help students understand the transformative power of Artificial Intelligence and Cloud Computing through Oracle's enterprise-grade technologies. Built around the Oracle Cloud Infrastructure (OCI) AI Foundations Associate program, the centre provides students with the knowledge and practical exposure needed to explore AI, Machine Learning, Deep Learning, and Generative AI while understanding how these technologies are implemented within Oracle Cloud Infrastructure (OCI).",
    "href": "/centres/oracle",
    "source": "Updated laboratory content (DOCX)",
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "At Echelon Institute of Technology, we are committed to preparing students for the next era of intelligent computing by integrating cutting-edge technologies into the learning experience. The Oracle Centre of Excellence (Oracle Cloud AI Lab) is designed to help students understand the transformative power of Artificial Intelligence and Cloud Computing through Oracle's enterprise-grade technologies.",
          "Built around the Oracle Cloud Infrastructure (OCI) AI Foundations Associate program, the centre provides students with the knowledge and practical exposure needed to explore AI, Machine Learning, Deep Learning, and Generative AI while understanding how these technologies are implemented within Oracle Cloud Infrastructure (OCI).",
          "Whether you aspire to become a Cloud AI Engineer, Data Professional, AI Developer, or Cloud Solutions Architect, the Oracle Centre of Excellence provides a strong foundation for building future-ready skills."
        ]
      },
      {
        "heading": "Why Oracle Centre of Excellence at Echelon?",
        "paragraphs": [
          "The Oracle Cloud AI Lab combines enterprise cloud technologies with intelligent computing, enabling students to develop practical skills through real-world scenarios and cloud-based learning experiences.",
          "Students benefit from:"
        ]
      },
      {
        "heading": "Collaborative Learning Environment",
        "paragraphs": [
          "The centre equips students with the technical understanding required to leverage AI within modern cloud ecosystems."
        ]
      },
      {
        "heading": "Oracle AI Foundations Training Program",
        "paragraphs": [
          "The Oracle AI Foundations Training Program introduces learners to the rapidly evolving world of Artificial Intelligence while emphasizing its implementation within Oracle Cloud Infrastructure.",
          "The curriculum is carefully designed for beginners and aspiring cloud professionals who want to understand both AI concepts and enterprise cloud services.",
          "Students receive structured training in:"
        ]
      },
      {
        "heading": "Certification Preparation",
        "paragraphs": [
          "The learning journey combines conceptual understanding with practical examples to help students confidently apply AI in enterprise environments."
        ]
      },
      {
        "heading": "Official Oracle Learning Path",
        "paragraphs": [
          "The program prepares students for the globally recognized:"
        ]
      },
      {
        "heading": "Certification Readiness",
        "paragraphs": [
          "Students gain valuable insights into how Oracle Cloud enables organizations to build, deploy, and manage AI-powered solutions efficiently and securely."
        ]
      },
      {
        "heading": "Skills You Will Master",
        "paragraphs": [
          "Upon completing the Oracle AI Foundations Program, students will be able to:"
        ]
      },
      {
        "heading": "Career Opportunities",
        "paragraphs": [
          "The Oracle Centre of Excellence prepares students for emerging careers in Artificial Intelligence and Cloud Computing, including:"
        ]
      },
      {
        "heading": "Digital Transformation Associate",
        "paragraphs": [
          "The program also provides an excellent starting point for advanced Oracle Cloud certifications, internships, enterprise technology roles, and higher studies in AI and Cloud Computing."
        ]
      },
      {
        "heading": "Certification and training details",
        "paragraphs": [
          "# | Certification Program | What You Will Learn",
          "1 | OCI Foundations Associate | Oracle Cloud basics.",
          "2 | OCI AI Foundations Associate | AI and GenAI on OCI.",
          "3 | OCI Generative AI Professional | Enterprise GenAI solutions.",
          "4 | Oracle SQL Certified Associate | SQL querying and database skills.",
          "5 | Oracle Database Foundations | Database concepts.",
          "6 | Java Foundations | Core Java programming.",
          "7 | Java SE Associate | Object-oriented Java development.",
          "8 | Oracle APEX Developer | Low-code web app development.",
          "9 | Oracle Database Administration | Database management."
        ]
      }
    ]
  },
  {
    "id": "salesforce",
    "name": "Salesforce Centre of Excellence",
    "image": { "src": "/images/centres/salesforce-centre.svg", "alt": "Illustration representing Salesforce CRM at EIT", "width": 1200, "height": 900 },
    "summary": "CRM & Cloud Innovation Lab. The Salesforce Centre of Excellence introduces CRM, Salesforce Trailhead, business process automation with Flow, reports and dashboards, and platform administration. Students work with guided Trailhead learning paths and practical business scenarios.",
    "description": "The Salesforce Centre of Excellence introduces CRM, Salesforce Trailhead, business process automation with Flow, reports and dashboards, and platform administration. Students work with guided Trailhead learning paths and practical business scenarios.",
    "href": "/centres/salesforce",
    "source": "Centres of Excellence Booklet 2026–27 (PDF)",
    "sections": [
      {
        "heading": "Focus areas",
        "paragraphs": [
          "CRM fundamentals",
          "Salesforce platform administration",
          "Data models and security",
          "Flow automation",
          "Reports and dashboards",
          "AI in CRM and Agentforce"
        ]
      },
      {
        "heading": "Certification pathways",
        "paragraphs": [
          "Salesforce Certified Administrator",
          "Platform App Builder",
          "Platform Developer I",
          "Salesforce AI Associate"
        ]
      }
    ]
  },
  {
    "id": "orangewood-robotics",
    "name": "Orangewood Robotics & AI Innovation Lab",
    "image": { "src": "/images/centres/orangewood-robotics-centre.svg", "alt": "Illustration representing Robotics & AI at EIT", "width": 1200, "height": 900 },
    "summary": "Robotics & Intelligent Automation. The Orangewood Robotics & AI Innovation Lab introduces students to robotic systems, artificial intelligence, computer vision, Robot Operating System (ROS), and industrial automation through practical projects.",
    "description": "The Orangewood Robotics & AI Innovation Lab introduces students to robotic systems, artificial intelligence, computer vision, Robot Operating System (ROS), and industrial automation through practical projects.",
    "href": "/centres/orangewood-robotics",
    "source": "Centres of Excellence Booklet 2026–27 (PDF)",
    "sections": [
      {
        "heading": "Key features",
        "paragraphs": [
          "Humanoid and mobile AI robots",
          "NVIDIA Jetson-based AI platforms",
          "Quadruped and collaborative robotic systems",
          "ROS training"
        ]
      },
      {
        "heading": "Courses offered",
        "paragraphs": [
          "Introduction to Robotics",
          "Robot Operating System (ROS)",
          "Artificial Intelligence and Machine Learning",
          "Computer Vision",
          "Autonomous Navigation",
          "Industrial Robotics and Automation"
        ]
      }
    ]
  },
  {
    "id": "pearson",
    "name": "Pearson Communication Lab",
    "image": { "src": "/images/centres/pearson-centre.svg", "alt": "Illustration representing Communication Lab at EIT", "width": 1200, "height": 900 },
    "summary": "Communication & Professional Skills. The Pearson Communication Lab develops communication, presentation, interview and professional skills. Its learning activities emphasize spoken and written English, group discussions, workplace etiquette and career readiness.",
    "description": "The Pearson Communication Lab develops communication, presentation, interview and professional skills. Its learning activities emphasize spoken and written English, group discussions, workplace etiquette and career readiness.",
    "href": "/centres/pearson",
    "source": "Centres of Excellence Booklet 2026–27 (PDF)",
    "sections": [
      {
        "heading": "Training areas",
        "paragraphs": [
          "Spoken English and business communication",
          "Public speaking and presentation",
          "Group discussions and personal interviews",
          "Resume and LinkedIn profile building",
          "Professional etiquette",
          "Leadership and teamwork"
        ]
      }
    ]
  }
];
