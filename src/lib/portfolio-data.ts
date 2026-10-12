import resumeAsset from "@/assets/resume.pdf.asset.json";
import portraitAsset from "@/assets/shivam-portrait.jpeg.asset.json";
import projPortfolio from "@/assets/project-portfolio.jpg";
import projSms from "@/assets/project-sms.jpg";
import projCalc from "@/assets/project-calculator.jpg";
import projTodo from "@/assets/project-todo.jpg";

export const profile = {
  name: "Shivam Garg",
  subtitle: "B.Tech CSE Student | Aspiring Software Engineer",
  intro:
    "Hello! I'm Shivam Garg, a first-year B.Tech Computer Science student passionate about technology, software development, and continuous learning. I enjoy solving problems, building projects, and exploring new innovations in the tech world.",
  email: "shivamgarghello@gmail.com",
  phone: "+91 XXXXXXXXXX",
  location: "Rajasthan, India",
  github: "https://github.com/shivamgarg",
  linkedin: "https://linkedin.com/in/shivamgarg",
  instagram: "https://instagram.com/shivamgarg",
  x: "https://x.com/shivamgarg",
  portrait: portraitAsset.url,
  resume: resumeAsset.url,
};

export const typingRoles = [
  "Future Software Engineer",
  "Programmer",
  "Tech Enthusiast",
  "Volleyball Player",
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Journey", href: "#journey" },
  { label: "Hobbies", href: "#hobbies" },
  { label: "Skills", href: "#skills" },
  { label: "Resume", href: "#resume" },
  { label: "Certificates", href: "#certifications" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const counters = [
  { label: "Programming languages", value: 6, suffix: "" },
  { label: "Projects built", value: 4, suffix: "" },
  { label: "Certifications", value: 4, suffix: "" },
  { label: "Hours of practice", value: 500, suffix: "+" },
];

export const timeline = [
  {
    year: "2026 — Present",
    title: "B.Tech, Computer Science & Engineering",
    place: "First Year",
    detail:
      "Studying data structures, programming fundamentals and computer systems while building side projects.",
  },
  {
    year: "2025",
    title: "Senior Secondary (Class 12)",
    place: "Science Stream",
    detail:
      "Built a strong base in mathematics and physics, and started writing my first lines of C code.",
  },
  {
    year: "2023",
    title: "Secondary (Class 10)",
    place: "School",
    detail:
      "Discovered computers as a creative tool — the beginning of a long curiosity about software.",
  },
];

export const aspirations = [
  "Become a strong problem solver with data structures and algorithms.",
  "Contribute to open-source projects on GitHub.",
  "Build full-stack applications that solve real-world problems.",
  "Land a software engineering internship in my later years.",
];

export const achievements = [
  { title: "Inter-school volleyball", detail: "Represented my school team as a regular player." },
  { title: "Coding streak", detail: "Consistent daily practice on programming problems." },
  { title: "First project shipped", detail: "Designed and published this personal portfolio." },
  { title: "Certificates earned", detail: "Completed four beginner-level tech certifications." },
];

export const hobbies = [
  {
    icon: "volleyball",
    title: "Volleyball",
    description: "On court almost every evening — it keeps me sharp, fit and team-minded.",
  },
  {
    icon: "code",
    title: "Coding",
    description: "Writing small programs in C, C++ and Python just to see how they behave.",
  },
  {
    icon: "newspaper",
    title: "Reading Tech Articles",
    description: "Following blogs and release notes to stay close to what's changing.",
  },
  {
    icon: "compass",
    title: "Exploring New Technologies",
    description: "Trying out new frameworks and tools in weekend experiments.",
  },
  {
    icon: "brain",
    title: "Learning Programming Concepts",
    description: "Digging into logic, memory and algorithms until the idea clicks.",
  },
  {
    icon: "music",
    title: "Listening to Music",
    description: "A good playlist turns a long debugging session into a calm one.",
  },
];

export const skillGroups = [
  {
    title: "Technical Skills",
    skills: [
      { name: "C Programming", level: 80 },
      { name: "C++", level: 75 },
      { name: "Python", level: 70 },
      { name: "HTML", level: 85 },
      { name: "CSS", level: 78 },
      { name: "JavaScript", level: 65 },
      { name: "Git & GitHub", level: 70 },
      { name: "Problem Solving", level: 72 },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Teamwork", level: 90 },
      { name: "Communication", level: 82 },
      { name: "Leadership", level: 75 },
      { name: "Time Management", level: 78 },
    ],
  },
  {
    title: "Sports Skills",
    skills: [
      { name: "Volleyball", level: 88 },
      { name: "Team Coordination", level: 85 },
      { name: "Discipline", level: 92 },
    ],
  },
];

export type Certification = {
  name: string;
  organization: string;
  date: string;
  description: string;
  /** Link to the certificate file or verification page. */
  url: string;
};

/** Add a new object here to publish another certificate card. */
export const certifications: Certification[] = [
  {
    name: "Introduction to Programming",
    organization: "Online Learning Platform",
    date: "Jan 2026",
    description:
      "Fundamentals of programming logic, variables, loops and functions with hands-on exercises.",
    url: profile.resume,
  },
  {
    name: "Python Basics",
    organization: "Online Learning Platform",
    date: "Feb 2026",
    description: "Core Python syntax, data types, collections and writing simple automation scripts.",
    url: profile.resume,
  },
  {
    name: "Web Development Fundamentals",
    organization: "Online Learning Platform",
    date: "Mar 2026",
    description: "HTML structure, CSS layout and responsive design principles for modern websites.",
    url: profile.resume,
  },
  {
    name: "Git & GitHub Essentials",
    organization: "Online Learning Platform",
    date: "Apr 2026",
    description: "Version control workflow, branching, pull requests and collaborating on repositories.",
    url: profile.resume,
  },
];

export const projects = [
  {
    title: "Personal Portfolio Website",
    category: "Web",
    image: projPortfolio,
    description:
      "A responsive personal portfolio with animated sections, dark mode and a downloadable resume.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/shivamgarg",
    demo: "https://github.com/shivamgarg",
  },
  {
    title: "Student Management System",
    category: "Software",
    image: projSms,
    description:
      "Console application to add, search and manage student records with file-based storage.",
    tech: ["C++", "File Handling"],
    github: "https://github.com/shivamgarg",
    demo: "https://github.com/shivamgarg",
  },
  {
    title: "Calculator Application",
    category: "Software",
    image: projCalc,
    description:
      "A clean calculator handling arithmetic operations with input validation and keyboard support.",
    tech: ["Python", "Tkinter"],
    github: "https://github.com/shivamgarg",
    demo: "https://github.com/shivamgarg",
  },
  {
    title: "To-Do List App",
    category: "Web",
    image: projTodo,
    description: "Task tracker with add, complete and delete actions, saving tasks in the browser.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/shivamgarg",
    demo: "https://github.com/shivamgarg",
  },
];

export const projectFilters = ["All", "Web", "Software"];
