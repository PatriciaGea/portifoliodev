export type SocialType = "github" | "linkedin" | "email" | "website";

export type Filter = "All" | "Frontend" | "Fullstack";

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  type: SocialType;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  github: string;
  live: string;
  category: Filter;
  accent: string;
  emoji: string;
  image?: string;
}

export const siteConfig = {
  name: "Patricia Gea H. Rodrigues",
  displayName: "patriciagea",
  role: "Frontend Developer",
  location: "Stockholm, Sweden",
  email: "patricia.gea@gmail.com",
  phone: "+46 729 23 11 63",
  website: "https://patricia.tattooink.se",
  github: "https://github.com/PatriciaGea",
  linkedin: "https://www.linkedin.com/in/patriciageadev/",
  availableFor: "internship",
};

export const seoConfig = {
  title: "Patricia Gea - Frontend Developer",
  description:
    "Frontend developer with a product and UX background. Building accessible, beautiful web experiences. Based in Stockholm, Sweden.",
  keywords: [
    "Frontend Developer",
    "Fullstack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Stockholm",
  ],
  locale: "en_US",
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: siteConfig.github, type: "github" },
  { label: "LinkedIn", href: siteConfig.linkedin, type: "linkedin" },
  { label: "Instagram (Personal)", href: "https://www.instagram.com/patriciagea/", type: "website" },
  { label: "Tattoo Portfolio", href: "https://www.instagram.com/tattooink.se", type: "website" },
  { label: "Studio Stockholm Sweden", href: "https://www.instagram.com/tattooink.se", type: "website" },
  { label: "Studio Sao Paulo Brasil", href: "https://www.instagram.com/estudiotattooink", type: "website" },
  { label: "Email", href: `mailto:${siteConfig.email}`, type: "email" },
  { label: "Website", href: siteConfig.website, type: "website" },
];

export const aboutHighlights = [
  { icon: "mapPin", label: "Stockholm, Sweden", sub: "Based & available" },
  { icon: "coffee", label: "17 Years", sub: "As a founder & CEO" },
  { icon: "zap", label: "Hyper Island", sub: "2025-2027 program" },
  { icon: "heart", label: "Product Mindset", sub: "UX-first thinking" },
] as const;

export const techCloud = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Axios",
  "HTML5",
  "CSS3",
  "Node.js",
  "Express",
  "Git",
  "GitHub",
  "Agile",
  "Vite",
  "REST APIs",
  "Jest",
  "Cypress",
  "Figma",
  "Photoshop",
  "Procreate",
  "Responsive Design",
  "Accessibility",
  "UX Thinking",
  "Product Iteration",
  "Cross-cultural leadership",
];

export const techConcepts = [
  "Responsive Design",
  "Accessibility (a11y)",
  "UX Thinking",
  "Component Architecture",
  "REST APIs",
  "State Management",
  "Git Flow",
  "Performance Optimization",
];

export const projects: Project[] = [
  {
    title: "Tattoo Booking System",
    description:
      "A full-stack booking system inspired by real tattoo studio operations - built from first-hand experience running studios across two countries. Improves scheduling flow and client management with a clean, intuitive UI.",
    tech: ["React", "TypeScript", "Node.js", "Express"],
    features: ["Appointment scheduling", "Client data management", "Responsive UI", "REST API"],
    github: siteConfig.github,
    live: "#",
    category: "Fullstack",
    accent: "#5170ff",
    emoji: "🖋️",
  },
  {
    title: "Portfolio Website",
    description:
      "This very site - designed and developed with a focus on clean UI, accessibility, and performance. Dark and light mode, responsive layout, and smooth animations.",
    tech: ["Next.js", "TypeScript", "CSS", "Framer Motion"],
    features: ["Dark/light mode", "Responsive", "Accessibility best practices", "Optimized performance"],
    github: siteConfig.github,
    live: siteConfig.website,
    category: "Frontend",
    accent: "#ff66c4",
    emoji: "🎨",
    image: "/images/site2.webp",
  },
  {
    title: "User Management System",
    description:
      "Full-stack user management system with CRUD operations, validation, notifications, and responsive navigation.",
    tech: ["React", "React Router", "JavaScript", "Vite", "Node.js", "Express", "MongoDB", "Mongoose", "Axios"],
    features: [
      "Create, search, display, edit and delete user records",
      "Notifications with visual feedback",
      "Form validation",
      "Responsive design",
      "RESTful API with CRUD operations",
      "Client-side routing with React Router",
    ],
    github: "https://github.com/PatriciaGea/React_Javascript_Api.git",
    live: "https://patriciagea.github.io/React_Javascript_Api/",
    category: "Fullstack",
    accent: "#791919",
    emoji: "✅",
    image: "/images/site3.webp",
  },
];

export const contactInfo = [
  { label: siteConfig.email, href: `mailto:${siteConfig.email}`, type: "email" as const },
  { label: siteConfig.phone, href: "tel:+46729231163", type: "phone" as const },
  { label: siteConfig.location, href: null, type: "location" as const },
  { label: siteConfig.website.replace("https://", ""), href: siteConfig.website, type: "website" as const },
];

export interface Language {
  name: string;
  level: "native" | "fluent" | "intermediate" | "basic";
}

export const languages: Language[] = [
  { name: "Portuguese", level: "native" },
  { name: "English", level: "fluent" },
  { name: "Spanish", level: "intermediate" },
  { name: "Swedish", level: "basic" },
];
