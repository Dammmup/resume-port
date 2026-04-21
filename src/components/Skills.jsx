import React, { useState, useCallback, useMemo, memo } from "react";
import { Code, Layers, Terminal, Sparkles, Settings2, Languages } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

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

const ICON_MAP = {
  "React": "react",
  "TypeScript": "typescript",
  "Material UI": "materialui",
  "Ant Design": "antdesign",
  "Node.js": "nodejs",
  "Express": "express",
  "MongoDB": "mongodb",
  "Firebase": "firebase",
  "Digital Ocean": "digitalocean",
  "GitHub": "github",
  "Docker": "docker",
  "Vercel": "vercel",
  "Postman": "postman",
  "Supabase": "supabase",
  "Redis": "redis",
  "Gitlab": "gitlab",
  "Jira": "jira",
  "Confluence": "confluence",
  "Tailwind": "tailwindcss",
  "Framer": "framermotion",
  "Redux": "redux",
  "Flutter": "flutter",
  "Sentry": "sentry",
  "Chart.js": "chartjs",
};

const getIconUrl = (name) => {
  const lowercaseName = name.toLowerCase();
  
  // Custom manual mappings for tools not in simple devicon pattern
  if (lowercaseName.includes('1c')) return "https://upload.wikimedia.org/wikipedia/commons/e/e0/1C_Company_logo.svg";
  if (lowercaseName.includes('groq') || lowercaseName.includes('gemini') || lowercaseName.includes('ai')) {
    return "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d47353046b33535d452f.svg";
  }
  if (lowercaseName.includes('yandex')) return "https://yastatic.net/s3/home/services/all/v2/maps.svg";

  const key = Object.keys(ICON_MAP).find(k => name.includes(k));
  if (!key) return null;
  const icon = ICON_MAP[key];

  if (icon === 'express') {
    return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg";
  }

  return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`;
};

const SkillTag = memo(({ tag, isHovered, onMouseEnter, onMouseLeave, className }) => {
  const iconUrl = useMemo(() => getIconUrl(tag), [tag]);

  return (
    <span
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${className} text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 hover:border-primary/50 dark:hover:border-primary/50 shadow-sm flex items-center gap-2`}
    >
      {iconUrl && (
        <img
          src={iconUrl}
          alt=""
          className="w-4 h-4 object-contain filter dark:brightness-110"
          onError={(e) => { e.target.style.display = 'none' }}
        />
      )}
      {tag}
    </span>
  );
});
SkillTag.displayName = "SkillTag";

const SkillSection = memo(({ section, hoveredTag, onTagHover, onTagLeave }) => {
  const { icon, title, tags } = section;

  return (
    <motion.div
      variants={itemVariants}
      className="rounded-2xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border border-neutral-200 dark:border-neutral-700 shadow-sm p-6 flex flex-col hover:shadow-md transition-shadow duration-300"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2.5 rounded-xl bg-primary/10 text-primary shadow-inner">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2.5">
        {tags.map((tag, i) => {
          const tagName = tag.name || tag;
          const tagId = `${title}-${i}`;
          const isHovered = hoveredTag === tagId;
          return (
            <SkillTag
              key={tagName}
              tag={tagName}
              className={isHovered ? "bg-primary/10 border-primary/30" : "bg-neutral-50/50 dark:bg-neutral-800/50"}
              onMouseEnter={() => onTagHover(tagId)}
              onMouseLeave={onTagLeave}
            />
          );
        })}
      </div>
    </motion.div>
  );
});
SkillSection.displayName = "SkillSection";

const SkillsComponent = memo(function Skills() {
  const [hoveredTag, setHoveredTag] = useState(null);
  const handleTagHover = useCallback((tagId) => setHoveredTag(tagId), []);
  const handleTagLeave = useCallback(() => setHoveredTag(null), []);

  const { language } = useLanguage();
  const t = translations[language].skills;

  const SKILLS_SECTIONS = useMemo(() => [
    {
      icon: <Code className="w-6 h-6" />,
      title: t.categories.frontend,
      tags: [
        { name: "React / Vite / Next.js", level: 95 },
        { name: "TypeScript", level: 92 },
        { name: "Flutter (Dart)", level: 88 },
        { name: "Ant Design / MUI", level: 90 },
        { name: "Redux / Zustand", level: 90 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Framer Motion / GSAP", level: 85 },
      ],
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      title: t.categories.backend,
      tags: [
        { name: "Node.js (Express)", level: 92 },
        { name: "MongoDB (Mongoose)", level: 90 },
        { name: "1C-Integration / ERP", level: 85 },
        { name: "AI (Groq / Gemini API)", level: 88 },
        { name: "JWT / OAuth / RBAC", level: 92 },
        { name: `node-cron / ${language === 'ru' ? 'Автоматизация' : 'Automation'}`, level: 85 },
      ],
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: t.categories.tools,
      tags: [
        { name: "Digital Ocean / VPS", level: 92 },
        { name: "Git / GitHub / GitLab", level: 95 },
        { name: "Sentry / Monitoring", level: 80 },
        { name: "Vercel / Firebase", level: 90 },
        { name: "Postman / API Design", level: 92 },
        { name: "Yandex / Google Maps", level: 85 },
      ],
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: t.categories.other,
      tags: [
        { name: "Supabase / Redis", level: 85 },
        { name: "Jira / Atlassian", level: 88 },
        { name: "Docx / PDF Gen", level: 80 },
        { name: "Recharts / Charts.js", level: 85 },
        { name: "Docker", level: 65 },
      ],
    },

  ], [t, language]);

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col items-center w-full">
        <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 flex items-center gap-4 text-foreground">
            <Settings2 className="w-8 h-8 sm:w-11 sm:h-11 text-primary drop-shadow-sm" />
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            {t.description}
          </p>
        </motion.div>

        <motion.div variants={containerVariants} className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SKILLS_SECTIONS.map((section) => (
            <SkillSection
              key={section.title}
              section={section}
              hoveredTag={hoveredTag}
              onTagHover={handleTagHover}
              onTagLeave={handleTagLeave}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
});

SkillsComponent.displayName = "Skills";

export default SkillsComponent;
