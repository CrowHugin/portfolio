import type { Languages } from "lucide-react";

export const personalInfo = {
  name: "Kuntz Bastien",
  location: "Châtillon, France",
  email: "kuntz.bastien@proton.me",
  github: "https://github.com/CrowHugin",
  linkedin: "https://www.linkedin.com/feed/",
};

export const workExperience = [
  {
    company: "Keysight",
    location: "Arcueil, France",
    position: "Associate, IT Data Center & Engineering Platform - Appreniceship",
    period: "Dec 2023 - Aug 2025",
    achievements: [
      "I rewrote an existing Bash project in Python to improve maintainability and performance.",
      "For this I Used pylint & Gitlab to automate tests on HPC systems, enhancing efficiency and reducing manual intervention.",
      "On this project, I Worked nearly alone on this project with sometimes the help of my tutor.",
      "I needed to ask differents teams for their needs.",
      "And I added required features as well as tests for each of them.",
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
      "Work on multiple languages as python, html, excel VBA ...",
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
  Interest: ["Climbing (indoor)","Chess"],
};

export const projects = [
  {
    title: "Net Zero Carbon Emissions",
    github: "https://github.com/rishikesh2003/Prodigi",
    description: [
      "WiFi-RTT: Developed indoor occupancy tracking for energy optimization.",
      "IoT Solutions: Implemented smart monitoring for energy efficiency and food waste reduction.",
      "Real-Time Tracking: Designed systems to monitor carbon emissions and optimize resources.",
      "Data-Driven Insights: Analyzed user patterns for adaptive energy and food management.",
      "Reward Integration: Built QR-based green points system to incentivize eco-friendly actions.",
    ],
  },
  {
    title: "Mental Aarog",
    github: "https://github.com/rishikesh2003/mental-aarog",
    description: [
      "A holistic mental health app leveraging AI and blockchain for early detection and personalized solutions for depression.",
      "Features include social media analysis (ML-based sentiment tracking), PHQ-9 assessments, smartwatch integration for sleep and activity data, guided meditation, and smart suggestions for food, travel, music, and movies.",
      "Developed a rewards system using MAG crypto token on Ethereum, enabling user engagement through in-app incentives.",
      "Secure storage implemented via web3.storage, IPFS, and FileCoin.",
      "Built with React, Supabase, Node.js, Flask, and Solidity, showcasing seamless integration of health tech and blockchain.",
    ],
  },
];
