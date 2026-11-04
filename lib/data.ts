// Central place for all portfolio content.
// Edit this file to update personal info, skills, and projects.

export const personal = {
  name: "Aparna Tiwari",
  role: "UI/UX Developer",
  subRole: "Computer Engineering Student",
  location: "Gujarat, India",
  email: "tiwariaparna1457@gmail.com",
  phone: "+91 7007492266",
  github: "https://github.com/APARNATIWARI-2329",
  tagline:
    "I build modern web experiences with clean UI, intuitive interactions, and scalable frontend architecture. Passionate about blending frontend engineering with thoughtful UI/UX design to create user-friendly digital products.",
  about: "Aspiring Software Development Engineer and Computer Science undergraduate with strong foundations in Java, DSA, OOPs, DBMS, and Full-Stack MERN Development. Solved 500+ LeetCode problems and built scalable full-stack applications, demonstrating strong problem-solving and software engineering skills. Microsoft Azure Certified with a passion for developing efficient, reliable, and user-centric software solutions.",
};

export const typingRoles = [
  "UI/UX Engineer",
  2000,
  "Full-Stack Developer",
  2000,
  "Computer Engineering Student",
  2000,
  "Data Analyst",
  2000,
];

export type SkillCategory = {
  title: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    title: "Languages",
    items: [ "Java", "Python", "C", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Frameworks",
    items: ["React.js", "Node.js", ],
  },
  {
    title: "Databases",
    items: ["MySQL", "MongoDB"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman", "Azure", "Canva"],
  },
  {
    title: "Concepts",
    items: [
      "REST APIs",
      "OOP",
      "Data Structures",
      "Algorithms",
      "Full Stack Development",
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  features: string[];
  technology: string[];
  accent: string; // tailwind gradient classes
};

export const projects: Project[] = [
  {
    id: "ai-virtual-assistant",
    title: "AI Virtual Assistant",
    description:
      "AI-powered virtual assistant built using the MERN stack and Gemini API for intelligent, real-time user interactions.",
    features: [
      "AI-Powered Responses",
      "Gemini API Integration",
      "Real-Time Interactions",
      "Full-Stack Architecture",
    ],
    technology: ["MongoDB", "Express.js", "React.js", "Node.js", "Gemini API"],
    accent: "from-blue-500 to-cyan-400",
  },
  {
    id: "kalakriti",
    title: "Kalakriti – E-Commerce Platform",
    description: "Full-stack e-commerce platform featuring user authentication, dynamic product management, and seamless shopping experiences.",
    features: [
      "User Authentication",
      "Product Management",
      "REST API Integration",
      "Dynamic Data Management",
    ],
    technology: ["MongoDB", "Express.js", "React.js", "Node.js"],
    accent: "from-pink-500 to-purple-400",
  },
  {
    id: "data-analysis",
    title: "Data Analysis Project",
    description: "Python-based data analysis project focused on data cleaning, preprocessing, and exploratory analysis to extract meaningful insights.",
    features: [
      "Data Cleaning",
      "Data Preprocessing",
      "Exploratory Data Analysis",
      "Data Visualization",
    ],
    technology: ["Python", "Pandas", "NumPy", "Matplotlib"],
    accent: "from-emerald-500 to-teal-400",
    },
];

export type TimelineItem = {
  year: string;
  title: string;
  subtitle: string;
  description: string;
};

export const timeline: TimelineItem[] = [
  {
    year: "Now",
    title: "Seeking Internship & SDE Opportunities",
    subtitle: "Open to work",
    description:
      "Looking for internship and software development opportunities to contribute and grow as an engineer.",
  },
  {
    year: "Ongoing",
    title: "Computer Engineering",
    subtitle: "Student",
    description:
      "Studying Computer Engineering while building real-world Flutter applications and practicing DSA.",
  },
  {
    year: "Ongoing",
    title: "Full-Stack Development",
    subtitle: "Self-driven learning",
    description:
      "Building projects across MERN Stack to strengthen full-stack web development skills.",
  },
];

export const socials = {
  github: personal.github,
  email: `mailto:${personal.email}`,
  phone: `tel:${personal.phone.replace(/\s+/g, "")}`,
};
