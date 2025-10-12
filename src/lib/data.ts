import type { Languages } from "lucide-react";

export const personalInfo = {
  name: "Kuntz Bastien",
  location: "Châtillon, France",
  email: "kuntz.bastien@proton.me",
  github: "https://github.com/CrowHugin",
  linkedin: "https://www.linkedin.com/in/bastien-kuntz/",
};

export const workExperience = [
  {
    company: "Keysight",
    location: "Arcueil, France",
    position: "Associate, IT Data Center & Engineering Platform - Apprenticeship",
    period: "Dec 2023 - Aug 2025",
    achievements: [
      "Reworked an existing Bash project in Python to improve maintainability and performance.",
      "Used Pylint, Gitlab & Untitest to make automatic tests on HPC systems, enhancing efficiency and reducing manual intervention.",
      ],
  },
];

export const education = [
  {
    institution: "EPF Ecole d'ingénieurs",
    location: "Cachan, France",
    degree: "Bachelor: Systemes d’information et stratégie marketing",
    period: "Sep 2022 - Aug 2025",
    achievements: [
      "Worked on marketing and engineering",
      "Front-end dev: website with HTML & CSS",
      "Learned basic Python and AI",
    ], 
  },
];
export const skills = {
  Hard_skills: [
    "Python",
    "Bash",
    "Git",
    "GitHub",
    "GitLab",
  ],
  soft_skills: [
    "Curiosity",
    "Autonomy",
    "Respect",
    "Issues resolution",
    "Listening",
  ],
  learning: ["C", "Docker", "C++","OpenGL"],
  Languages: ["French: native", "English: B2"],
};

export const projects = [
  {
    title: "Password Manager",
    github: "https://github.com/CrowHugin/password-manager" ,
    description: [
      "A project to expend my Python knowledge.",
      "Project on stand by while preparing for the école 42 - Paris" 
      ,
    ],
  },
  {
    title: "Portfolio",
    github: "https://github.com/CrowHugin/portfolio" ,
    description: [
      "An online portfolio.",
      "Will be getting updated to follow my current learning and progression",
      "Made with Astro, many thanks to rishikesh2003 for his template, find it here https://github.com/rishikesh2003/my-portfolio",
    ],
  },
];
