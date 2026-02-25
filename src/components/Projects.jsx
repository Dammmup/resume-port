import React, { memo, useMemo } from "react";
import { Code, ExternalLink, FolderKanban } from "lucide-react";
import { motion } from "framer-motion";

// --- Animation Variants (The "Staggered Entrance" Pattern) ---
// This container will orchestrate the animation for the whole page
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Time delay between each child animating in
    },
  },
};

// This variant will be used by each item in the container
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};


// --- Child Component (No changes needed) ---
const ProjectCard = memo(({ project }) => {
  return (
    // This card is now an item in the grid's stagger animation
    <motion.div
      variants={itemVariants}
      className="bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow p-6 flex flex-col h-full"
    >
      <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">
        {project.title}
      </h3>
      <p className="text-base text-muted-foreground mb-4 flex-grow">
        {project.desc}
      </p>
      <div className="flex flex-wrap gap-2 mb-5 mt-auto">
        {project.tags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-600"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-4 flex-wrap">
        {project.links.map((link, linkIndex) => (
          <a
            key={linkIndex}
            href={link.href}
            className="flex items-center gap-2 text-primary font-semibold text-sm hover:underline hover:text-foreground dark:hover:text-primary-foreground/60 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.type === "code" ? (
              <Code className="w-4 h-4" />
            ) : (
              <ExternalLink className="w-4 h-4" />
            )}
            {link.type === "code" ? "Code" : "Demo"}
          </a>
        ))}
      </div>
    </motion.div>
  );
});
ProjectCard.displayName = "ProjectCard";


// --- Main Projects Component ---
function ProjectsComponent() {
  const projectsData = useMemo(
    () => [


      {
        title: "Detsad — Vertical ERP System",
        desc: "Full-stack (Node.js/Express + React/MUI) for comprehensive kindergarten management. Covers all business processes: children, attendance, catering, medical records, staff, payroll, document management, and finance. Features Firebase push notifications, Telegram bot, AI Assistant (Qwen), and automated cron jobs for reporting, payroll calculation, and invoicing. Deployed on Vercel.",
        tags: ["Node.js", "Express", "React", "MUI", "Firebase", "Telegram Bot", "AI (Qwen)", "Cron", "Vercel"],
        links: [
          { type: "code", href: "https://github.com/dammmup" },
        ],
      },
      {
        title: "Uyghur Connect — SaaS Platform",
        desc: "Full-stack (Express + React) course management system featuring dynamic lessons (text, video, code, images), community forums, and events. Implements student/teacher/admin role-based access control, email verification, content editor integration (TinyMCE/Quill), and 4-language internationalization. Includes Drag & Drop for lesson sequencing.",
        tags: ["Express", "React", "SaaS", "Quill", "i18n", "Drag & Drop", "JWT"],
        links: [
          { type: "code", href: "https://github.com/dammmup/ur-front" },
          { type: "code", href: "https://github.com/dammmup/ur-ba" },
          { type: "demo", href: "https://uyghurlearn.vercel.app/" },
        ],
      },
      {
        title: "Garden Park Inn — Room Service",
        desc: "Full-stack (Express + React + Ant Design) digital menu and room service system. Features automatic UI language and currency switching (9 languages, 7 currencies). Includes an admin panel where new items are automatically translated into 8 languages via Google Translate API. Real-time cart calculation with a 10% service charge.",
        tags: ["Express", "React", "Ant Design", "Google Translate", "Currency API"],
        links: [
          { type: "code", href: "https://github.com/dammmup/GFrontend" },
          { type: "code", href: "https://github.com/dammmup/GBackend" },
          { type: "demo", href: "https://gardenpark-dammmups-projects.vercel.app/" },
        ],
      },
      {
        title: "Reality Constructor (Universe)",
        desc: "3D interactive experience built with React Three Fiber + Three.js, guiding users through 5 scales of existence — from the Big Bang to brain neurons. Each scene features clickable 'reality factors' with reverse capabilities (War ↔ Peace, Gravity ↔ Decay, etc.), dynamically altering visual behavior. Powered by GSAP animations, Zustand, and Tailwind CSS.",
        tags: ["Three.js", "React Three Fiber", "GSAP", "Zustand", "Tailwind CSS"],
        links: [
          { type: "code", href: "https://github.com/dammmup" },
        ],
      },
      {
        title: "SearchX — Content Aggregator",
        desc: "React + Redux Toolkit application integrating 8 public APIs (movies, music, games, images, crypto, jokes, etc.) into a unified glassmorphism interface. Implements user authentication and persistent favorites storage using Supabase.",
        tags: ["React", "Redux Toolkit", "Supabase", "Glassmorphism", "Public APIs"],
        links: [
          { type: "code", href: "https://github.com/dammmup/Search_Content" },
          { type: "demo", href: "https://search-content.vercel.app/" },
        ],
      },
    ],
    []
  );

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
      {/* 1. This is the SINGLE animation container for the whole page. */}
      {/* It uses `animate`, not `whileInView`, for guaranteed execution. */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center w-full"
      >
        {/* Item 1: The header text block */}
        <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 flex items-center gap-4 text-foreground">
            <FolderKanban className="w-8 h-8 sm:w-11 sm:h-11 text-primary drop-shadow-sm" />
            Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center mb-10">
            Here are some of the projects I've worked on, ranging from algorithm visualizers and utilities to frontend tools and machine learning models. Each project reflects my passion for clean design, efficient problem-solving, and practical implementation.
          </p>
        </motion.div>

        {/* Item 2: The entire project card grid animates in as one block... */}
        <motion.div
          // It is ALSO a container for its own children (the cards)
          variants={containerVariants}
          className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

// Export the memoized component in a standard way
export default memo(ProjectsComponent);