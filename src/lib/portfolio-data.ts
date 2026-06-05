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
  name: "Patricia Gea Rodrigues",
  displayName: "Patricia Gea Dev",
  role: "Mobile / Frontend Developer",
  location: "Stockholm, Sweden",
  email: "patricia.gea@gmail.com",
  phone: "+46 700 00 00 00",
  website: "https://patriciageadev.vercel.app",
  github: "https://github.com/PatriciaGea",
  linkedin: "https://www.linkedin.com/in/patriciageadev/",
  availableFor: "projects, full-time roles, and freelance opportunities. Feel free to reach out for collaborations or just a chat about tech and design!",
};

export const seoConfig = {
  title: "Patricia Gea - Mobile / Frontend Developer",
  description:
    "Based in Stockholm, Sweden.",
  keywords: [
     "Mobile Developer",
     "Android Developer",
    "Fullstack Developer",
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
  { icon: "mapPin", label: "Stockholm, Sweden", sub: "10+ years based here" },
  { icon: "coffee", label: "17 Years", sub: "where I built and managed 3 tattoo studios across Brazil and Sweden with a team of 20 people." },
  { icon: "heart", label: "Product Mindset", sub: "UX-first thinking, Creativity, Scalability" },
] as const;

export const techCloud = [
  {
    title: "Mobile",
    items: ["Kotlin", "Android Studio", "Jetpack Compose"]
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Axios", "HTML5", "CSS3"]
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "MongoDB", "NoSQL", "REST APIs"]
  },
  {
    title: "Tools & Workflow",
    items: ["Vercel", "ESLint", "Agile", "Vite", "Git", "GitHub", "Render"]
  },
  {
    title: "Design",
    items: ["Figma", "Photoshop", "Procreate", "A-FRAME", "3D", "Motion", "Video Edition"]
  },
  {
    title: "Practices",
    items: ["Responsive Design", "Accessibility", "UX Thinking", "Design Systems", "APIs", "State Management", "Component Architecture"]
  }
];



export const projects: Project[] = [
  {
    title: "Booking System with Login",
    description:
      "A full-stack booking system inspired by real tattoo studio operations - built from first-hand experience running studios across two countries. Improves scheduling flow and client management with a clean, intuitive UI.",
    tech: ["React", "TypeScript", "Node.js", "Express"],
    features: ["Appointment scheduling", "Client data management", "Responsive UI", "REST API"],
    github: "https://github.com/PatriciaGea/BookingSystem.git",
    live: "https://patriciagea.github.io/BookingSystem/",
    category: "Fullstack",
    accent: "#5170ff",
    emoji: "🖋️",
    image: "/images/bookingsystem.webp",
  },
  {
    title: "Portfolio Website",
    description:
      "This very site - designed and developed with a focus on clean UI, accessibility, and performance. Dark and light mode, responsive layout, and smooth animations.",
    tech: ["Next.js", "TypeScript", "CSS", "Framer Motion"],
    features: ["Dark/light mode", "Responsive", "Accessibility best practices", "Optimized performance"],
    github: "https://github.com/PatriciaGea/portifoliodev.git",
    live: "https://patriciageadev.vercel.app/",
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
