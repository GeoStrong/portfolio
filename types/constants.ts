import {
  Experience,
  Project,
  SkillCategory,
  Education,
  Language,
} from "./types";
import treasureHuntLogo from "../src/images/treasure-hunt-logo.png";
import adminDashboardLogo from "../src/images/admin-dashboard-logo.png";

export const PERSONAL_INFO = {
  name: "Giorgi Jobava",
  role: "Front-end Developer",
  summary:
    "Creative and detail-oriented Front-end Developer with 3 years of experience developing responsive, mobile-first web applications using React, Next.js, TypeScript, and Tailwind CSS. Skilled in microservices integration, REST/OpenAPI, and JSON handling. Practical exposure to cloud environments (AWS, Firebase, Supabase) and containerization with Docker. Experienced in CI/CD pipelines (GitHub Actions, GitLab CI), Test-Driven Development (TDD), and accessibility standards, with a strong focus on UI/UX principles and performance optimization.",
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
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Nest.js",
      "Express.js",
      "Node.js",
      "Three.js",
      "Redux Toolkit",
      "MySQL",
      "TanStack",
    ],
  },
  {
    name: "Styling & UI",
    skills: [
      "Tailwind CSS",
      "Shadcn",
      "Bootstrap",
      "SCSS",
      "Framer Motion",
      "UI Design",
      "Radix UI",
    ],
  },
  {
    name: "Testing",
    skills: ["Jest", "React Testing Library", "Cypress", "Unit Testing"],
  },
  {
    name: "Tools & Dev",
    skills: [
      "Git",
      "Jira",
      "AWS",
      "Docker",
      "Jenkins",
      "CI/CD",
      "Github Actions",
      "Supabase",
      "Firebase",
      "OAuth",
      "Figma",
      "OpenAPI",
      "RESTful APIs",
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
