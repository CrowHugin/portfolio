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
    institution: "Ecole 42",
    degree: "Ecole 42",
    location: "Paris, France",
    period: "April 2025 - ongoing",
    acheevements: [
      "Passed through the 'Piscine' and integrated the school at part of the new cursus."
    ]
  },
  {
    institution: "EPF Ecole d'ingénieurs",
    location: "Cachan, France",
    degree: "Bachelor: Systemes d’information et stratégie marketing",
    period: "Sep 2022 - Aug 2025",
    achievements: [
      "Worked on marketing and engineering",
      "Front-end dev: website with HTML & CSS",
      "Learned Python and AI",
    ], 
  },
  {
    institution: "Lycée Montesquieu",
    location: "Le Plessis-Robinson, France",
    degree: "Baccalauréat - Classe Européenne",
    period: "Sep 2019- Aug 2022",
  },
];
export const skills = {
  Hard_skills: [
    "Python",
    "Bash",
    "Shell",
    "Git",
    "GitHub",
    "GitLab",
    "Docker",
  ],
  soft_skills: [
    "Patience",
    "Curiosity",
    "Autonomy",
    "Respect",
    "Issues resolution",
    "Listening",
    "Adaptability",
  ],
  learning: ["C","C++",],
  Languages: ["French: native", "English: B2"],
};

export const projects = [
  {
    title: "Password Manager",
    github: "https://github.com/CrowHugin/password-manager" ,
    description: [
      "This project was made to expend my Python knowledge.",
      "It's working vey well.",
      "And was made with automatic pylint test and automatic test within /test/test_function.py.",
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
  {
    title: "temperature converter",
    github: "https://github.com/CrowHugin/temperature_converter" ,
    description: [
      "A little project to learn some basic C.",
      "This project is used to translate °F to °C and vise versa.",
    ],
  },
];
