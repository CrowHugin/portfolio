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
    position: "Associate, IT Data Center & Engineering Platform - Appreniceship",
    period: "Dec 2023 - Aug 2025",
    achievements: [
      "I rewrote an existing Bash project in Python to improve maintainability and performance.",
      "For this I used pylint & Gitlab to automate tests on HPC systems, enhancing efficiency and reducing manual intervention.",
      "On this project, I worked nearly alone on this project with sometimes the help of my tutor.",
      "Added required features as well as tests for each of them.",
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
    ],
  },
];
export const skills = {
  Hard_skills: [
    "Python",
    "Bash",
    "HTML",
    "CSS",
    "Excel VBA",
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
  learning: ["C", "Docker",],
  Languages: ["French: native", "English: B2"],
};

export const projects = [
  {
    title: "Password Manager",
    github: "https://github.com/CrowHugin/portfolio",
    description: [
      "A project to expend my programming knowledge.",
      "Will work on differents ways, for now the module one is on.",
      "Later, there will be a website, an web extension & an desktop app.",
    ],
  },
  {
    title: "Portfolio",
    github: "https://github.com/CrowHugin/password-manager",
    description: [
      "An online portfolio.",
      "Will be getting updated to follow my current learning and progression",
      "Made with Astro, many thanks to rishikesh2003 for his template, find it here https://github.com/rishikesh2003/my-portfolio",
    ],
  },
];
