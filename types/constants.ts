import {
  Experience,
  Project,
  SkillCategory,
  Education,
  Language,
  Testimonial,
  Certification,
  Achievement,
  Article,
  TimelineEvent,
} from "./types";
import treasureHuntLogo from "../src/images/treasure-hunt-logo.png";
import adminDashboardLogo from "../src/images/admin-dashboard-logo.png";
import activitiesTbilisiLogo from "../src/images/activities-tbilisi.png";

export const PERSONAL_INFO = {
  name: "Giorgi Jobava",
  role: "Front-end Developer",
  summary:
    "Creative and detail-oriented Front-end Developer with 3+ years of experience developing responsive, mobile-first web applications using React, Next.js, TypeScript, and Tailwind CSS. Skilled in microservices integration, REST/OpenAPI, and JSON handling. Practical exposure to cloud environments (AWS, Firebase, Supabase) and containerization with Docker. Experienced in CI/CD pipelines (GitHub Actions, GitLab CI), Test-Driven Development (TDD), and accessibility standards, with a strong focus on UI/UX principles and performance optimization.",
  availability: {
    status: "Open to opportunities",
    type: "full-time" as const,
    startDate: "Immediately",
  },
  resumeUrl: "/Giorgi_JobavaCV.pdf",
  contact: {
    phone: "+995 592 910 675",
    email: "giorgi.jobava03@gmail.com",
    location: "Tbilisi, Georgia",
    linkedin: "https://www.linkedin.com/in/giorgi-jobava/",
    github: "https://github.com/GeoStrong",
  },
};

export interface SkillDetail {
  name: string;
  icon: string;
  description: string;
  color: string;
  img?: string;
}

export interface SkillCategoryWithDetails {
  name: string;
  skills: SkillDetail[];
}

export const SKILL_CATEGORIES_EXTENDED: SkillCategoryWithDetails[] = [
  {
    name: "Languages & Frameworks",
    skills: [
      {
        name: "HTML5",
        icon: "html5",
        description: "Semantic markup and accessibility standards.",
        color: "#E34F26",
        img: "https://cdn.simpleicons.org/html5/E34F26.svg",
      },
      {
        name: "CSS3",
        icon: "css3",
        description: "Modern styling including Flexbox, Grid, and animations.",
        color: "#1572B6",
        img: "https://cdn.simpleicons.org/css3/1572B6.svg",
      },
      {
        name: "JavaScript",
        icon: "javascript",
        description: "Core language for web logic and interactivity.",
        color: "#F7DF1E",
        img: "https://cdn.simpleicons.org/javascript/F7DF1E.svg",
      },
      {
        name: "TypeScript",
        icon: "typescript",
        description: "Strict typing for scalable and robust codebases.",
        color: "#3178C6",
        img: "https://cdn.simpleicons.org/typescript/3178C6.svg",
      },
      {
        name: "React",
        icon: "react",
        description: "Building component-based user interfaces.",
        color: "#61DAFB",
        img: "https://cdn.simpleicons.org/react/61DAFB.svg",
      },
      {
        name: "Next.js",
        icon: "nextdotjs",
        description: "SSR, SSG, and optimized React applications.",
        color: "#FFFFFF",
        img: "https://cdn.simpleicons.org/nextdotjs/FFFFFF.svg",
      },
      {
        name: "Node.js",
        icon: "nodedotjs",
        description: "JavaScript runtime for server-side logic.",
        color: "#339933",
        img: "https://cdn.simpleicons.org/nodedotjs/339933.svg",
      },
      {
        name: "Three.js",
        icon: "threedotjs",
        description: "3D graphics in the browser.",
        color: "#FFFFFF",
        img: "https://cdn.simpleicons.org/threedotjs/FFFFFF.svg",
      },
    ],
  },
  {
    name: "Styling & UI",
    skills: [
      {
        name: "Tailwind CSS",
        icon: "tailwindcss",
        description: "Utility-first CSS framework for rapid UI dev.",
        color: "#06B6D4",
        img: "https://cdn.simpleicons.org/tailwindcss/06B6D4.svg",
      },
      {
        name: "Framer Motion",
        icon: "framer",
        description: "Production-ready motion library for React.",
        color: "#0055FF",
        img: "https://cdn.simpleicons.org/framer/0055FF.svg",
      },
      {
        name: "Figma",
        icon: "figma",
        description: "Design tool for UI/UX prototyping.",
        color: "#F24E1E",
        img: "https://cdn.simpleicons.org/figma/F24E1E.svg",
      },
    ],
  },
  {
    name: "Tools & Cloud",
    skills: [
      {
        name: "Git",
        icon: "git",
        description: "Version control for collaborative development.",
        color: "#F05032",
        img: "https://cdn.simpleicons.org/git/F05032.svg",
      },
      {
        name: "Docker",
        icon: "docker",
        description: "Containerization for consistent environments.",
        color: "#2496ED",
        img: "https://cdn.simpleicons.org/docker/2496ED.svg",
      },
      {
        name: "AWS",
        icon: "amazonwebservices",
        description: "Cloud infrastructure and hosting services.",
        color: "#FF9900",
        img: "https://cdn.simpleicons.org/amazonwebservices/FF9900.svg",
      },
      {
        name: "Supabase",
        icon: "supabase",
        description: "Open source Firebase alternative.",
        color: "#3ECF8E",
        img: "https://cdn.simpleicons.org/supabase/3ECF8E.svg",
      },
      {
        name: "Firebase",
        icon: "firebase",
        description: "Backend-as-a-service platform.",
        color: "#FFCA28",
        img: "https://cdn.simpleicons.org/firebase/FFCA28.svg",
      },
    ],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Front-end Developer",
    company: "Tridan AI (Remote)",
    period: "Jan 2025 - May 2025",
    points: [
      "Built and maintained modern, responsive pages with React, Next.js, Nest.js, and Tailwind CSS, integrating with microservices-based architecture and following TDD practices.",
      "Integrated third-party tools like Google OAuth and Supabase, ensuring secure and efficient data handling and API integration.",
      "Collaborated with designers to implement UI/UX improvements, enhancing usability and reducing bounce rates by 20%.",
      "Improved mobile experience and reduced bounce rate by 15% through performance optimization, accessibility enhancements, and responsive design, tested with Jest and Cypress.",
      "Collaborated with clients and cross-functional teams to deliver UI updates, content changes, and bug fixes under tight deadlines.",
    ],
  },
  {
    role: "Front-end Developer",
    company: "Freelancer on Upwork (Remote)",
    period: "Feb 2023 - Present",
    points: [
      "Built clean HTML/CSS and React components from Figma designs, integrating with REST APIs and deploying in cloud environments (Firebase, AWS).",
      "Delivered 10+ pages that enhanced user satisfaction and feedback, achieving a 95%+ client satisfaction rate.",
      "Utilized Git and GitHub for version control, implemented GitHub Actions and GitLab CI pipelines.",
      "Used Framer Motion to create custom animations and transitions, enhancing visual appeal.",
      "Supported product and marketing teams by implementing frontend updates for digital campaigns and promotional landing pages.",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "What's On Tbilisi - Event Discovery Platform",
    date: "November 2025 - Present",
    tags: ["Next.js 15", "TypeScript", "Supabase", "Tailwind CSS"],
    description: [
      "A modern event discovery and social platform for Tbilisi, Georgia. Discover, create, and participate in local activities and events.",
    ],
    github: "https://github.com/GeoStrong/whats-on-tbilisi",
    demo: "https://whats-on-tbilisi.vercel.app/",
    imgSrc: activitiesTbilisiLogo,
  },
  {
    title: "Interactive Treasure Hunt Website",
    date: "June 2025",
    tags: ["Next.js", "Three.js", "Tailwind CSS", "Firebase", "AWS"],
    description: [
      "Created a city-wide game using Next.js, Three.js, and Tailwind, deployed on Firebase/AWS.",
      "Featuring QR-based interactions, accessibility compliance, and monitoring with basic Grafana dashboards.",
      "Built puzzles, QR-based interactions, and mobile-first responsive layout.",
      "Managed the full dev process from design to launch, engaging 30+ participants.",
    ],
    github: "https://github.com/GeoStrong/treasure-hunt-quiz",
    demo: "https://treasure-hunt-quiz.vercel.app",
    imgSrc: treasureHuntLogo,
  },
  {
    title: "Admin Dashboard",
    date: "January 2025",
    tags: ["Next.js 15", "TypeScript", "Redux Toolkit", "Framer Motion"],
    description: [
      "Developed an admin dashboard featuring real-time data visualization and product management.",
      "Implemented advanced state management utilizing Redux Toolkit and Radix UI components.",
      "Built 50+ reusable components ensuring a seamless user experience.",
    ],
    github: "https://github.com/GeoStrong/admin-dashboard",
    demo: "https://admin-dashboard-inky-iota.vercel.app",
    imgSrc: adminDashboardLogo,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Languages & Frameworks",
    skills: [
      { name: "HTML", proficiency: 95 },
      { name: "CSS", proficiency: 95 },
      { name: "JavaScript", proficiency: 90 },
      { name: "TypeScript", proficiency: 90 },
      { name: "React", proficiency: 95 },
      { name: "Next.js", proficiency: 90 },
      { name: "Nest.js", proficiency: 75 },
      { name: "Express.js", proficiency: 80 },
      { name: "Node.js", proficiency: 85 },
      { name: "Three.js", proficiency: 70 },
      { name: "Redux Toolkit", proficiency: 85 },
      { name: "MySQL", proficiency: 75 },
      { name: "TanStack", proficiency: 80 },
    ],
  },
  {
    name: "Styling & UI",
    skills: [
      { name: "Tailwind CSS", proficiency: 95 },
      { name: "Shadcn", proficiency: 85 },
      { name: "Bootstrap", proficiency: 90 },
      { name: "SCSS", proficiency: 85 },
      { name: "Framer Motion", proficiency: 90 },
      { name: "UI Design", proficiency: 80 },
      { name: "Radix UI", proficiency: 85 },
    ],
  },
  {
    name: "Testing",
    skills: [
      { name: "Jest", proficiency: 80 },
      { name: "React Testing Library", proficiency: 80 },
      { name: "Cypress", proficiency: 75 },
      { name: "Unit Testing", proficiency: 85 },
    ],
  },
  {
    name: "Tools & Dev",
    skills: [
      { name: "Git", proficiency: 90 },
      { name: "Jira", proficiency: 85 },
      { name: "AWS", proficiency: 70 },
      { name: "Docker", proficiency: 75 },
      { name: "Jenkins", proficiency: 65 },
      { name: "CI/CD", proficiency: 80 },
      { name: "Github Actions", proficiency: 85 },
      { name: "Supabase", proficiency: 80 },
      { name: "Firebase", proficiency: 85 },
      { name: "OAuth", proficiency: 80 },
      { name: "Figma", proficiency: 85 },
      { name: "OpenAPI", proficiency: 75 },
      { name: "RESTful APIs", proficiency: 90 },
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    school: "Tbilisi State University",
    degree: "Bachelor's degree in Computer Science",
    location: "Tbilisi, Georgia",
    period: "Sep 2020 – Aug 2024",
  },
  {
    school: "University of Tartu Narva College",
    degree:
      "Continuing Education Programme: General Competences and English Language Skills",
    location: "Narva, Estonia",
    period: "Aug 2024 – Dec 2024",
  },
];

export const LANGUAGES: Language[] = [
  { name: "English", level: "Advanced C1" },
  { name: "Georgian", level: "Native" },
  { name: "Russian", level: "Proficient C2" },
  { name: "German", level: "Beginner A1" },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Client Satisfaction",
    value: 100,
    suffix: "%",
    description: "Client satisfaction",
    icon: "star",
  },
  {
    title: "Projects Delivered",
    value: 15,
    suffix: "+",
    description: "Successfully completed projects",
    icon: "briefcase",
  },
  {
    title: "Bounce Rate Reduced",
    value: 20,
    suffix: "%",
    description: "Average improvement across projects",
    icon: "trending-down",
  },
  {
    title: "Job Success",
    value: 100,
    suffix: "%",
    description: "Job success rate on Upwork",
    icon: "crown",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "Tech Startup Inc.",
    content:
      "Giorgi delivered exceptional work on our landing page redesign. His attention to detail and ability to translate design mockups into pixel-perfect code was impressive. Highly recommend!",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    company: "Digital Solutions Ltd",
    content:
      "Working with Giorgi was a pleasure. He consistently met deadlines and provided innovative solutions to complex problems. His React expertise really shone through.",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Emma Rodriguez",
    role: "UX Designer",
    company: "Creative Agency",
    content:
      "Giorgi's frontend development skills are top-notch. He perfectly implemented our Figma designs and even suggested improvements that enhanced the user experience significantly.",
    image: "https://i.pravatar.cc/150?img=9",
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Next.js & React - The Complete Guide",
    issuer: "Udemy",
    date: "2026",
    credentialId: "UC-b7c576f4-f1d5-40b9-b575-d17392129142",
    credentialUrl:
      "https://www.udemy.com/certificate/UC-b7c576f4-f1d5-40b9-b575-d17392129142",
    icon: "accessibility",
  },
  {
    name: "React - The Complete Guide 2024 (incl. React Router & Redux)",
    issuer: "Udemy",
    date: "2024",
    credentialId: "UC-190c74e0-dcf5-44a8-8d05-7c94e403a51d",
    credentialUrl:
      "https://www.udemy.com/certificate/UC-190c74e0-dcf5-44a8-8d05-7c94e403a51d",
    icon: "accessibility",
  },
  {
    name: "The Complete JavaScript Course 2023: From Zero to Expert!",
    issuer: "Udemy",
    date: "2023",
    credentialId: "UC-60c01462-c8bc-4858-8752-9054d45673a3",
    icon: "react",
  },
  {
    name: "Complete Responsive Web Development: 4 courses in 1",
    issuer: "Udemy",
    date: "2023",
    credentialId: "UC-20b9a2c9-d980-4e10-a9b8-c12f450e3906",
    credentialUrl:
      "https://www.udemy.com/certificate/UC-20b9a2c9-d980-4e10-a9b8-c12f450e3906",
    icon: "aws",
  },
];

export const ARTICLES: Article[] = [
  {
    title: "Building Performant React Applications with Code Splitting",
    platform: "Dev.to",
    url: "#",
    date: "Dec 2024",
    readTime: "8 min read",
  },
  {
    title: "Mastering Tailwind CSS: Advanced Patterns and Best Practices",
    platform: "Medium",
    url: "#",
    date: "Nov 2024",
    readTime: "12 min read",
  },
  {
    title: "TypeScript Tips for React Developers",
    platform: "Dev.to",
    url: "#",
    date: "Oct 2024",
    readTime: "6 min read",
  },
];

export const TIMELINE: TimelineEvent[] = [
  {
    date: "Dec 2025",
    title: "Next.js / React / TypeScript Developer at RFID Cloaked Ltd",
    description: "Began working on innovative RFID solutions",
    type: "work",
  },
  {
    date: "Jun 2025",
    title: "Launched Treasure Hunt Project",
    description: "Interactive city-wide game with 30+ participants",
    type: "project",
  },
  {
    date: "Jan 2025",
    title: "Front-end Developer at Tridan AI",
    description: "Started working on cutting-edge AI-powered web applications",
    type: "work",
  },
  {
    date: "Dec 2024",
    title: "Finished an Exchange Program in Estonia",
    description:
      "Completed a continuing education programme at University of Tartu Narva College",
    type: "education",
  },
  {
    date: "Aug 2024",
    title: "Got accepted to Narva College, University of Tartu",
    description: "Enrolled in Continuing Education Programme",
    type: "education",
  },
  {
    date: "Aug 2024",
    title: "Graduated from Tbilisi State University",
    description: "Bachelor's degree in Computer Science",
    type: "education",
  },
  {
    date: "Feb 2023",
    title: "Started Freelancing on Upwork",
    description: "Building responsive web applications for clients worldwide",
    type: "work",
  },
  {
    date: "Sep 2020",
    title: "Started Computer Science Degree",
    description: "Enrolled at Tbilisi State University",
    type: "education",
  },
];
