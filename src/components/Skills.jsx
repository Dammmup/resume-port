import React, { useState, useCallback, useMemo, memo } from "react";
import { Code, Layers, Terminal, Sparkles, Settings2, Languages, Database } from "lucide-react";
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
  "react": "react",
  "typescript": "typescript",
  "material ui": "mui",
  "ant design": "antdesign",
  "node.js": "nodedotjs",
  "express": "express",
  "mongodb": "mongodb",
  "firebase": "firebase",
  "digital ocean": "digitalocean",
  "github": "github",
  "docker": "docker",
  "vercel": "vercel",
  "postman": "postman",
  "supabase": "supabase",
  "redis": "redis",
  "gitlab": "gitlab",
  "jira": "jira",
  "tailwind": "tailwindcss",
  "framer": "framer",
  "redux": "redux",
  "flutter": "flutter",
  "sentry": "sentry",
  "chart.js": "chartdotjs",
  "vite": "vite",
  "next.js": "nextdotjs",
  "zustand": "zustand",
  "jwt": "jsonwebtokens",
  "oauth": "jsonwebtokens",
  "git": "git",
  "yandex": "yandex",
  "google maps": "googlemaps",
  "maps": "googlemaps",
  "docx": "microsoftword",
  "word": "microsoftword",
  "pdf": "adobepdf",
  "ai": "googlegemini",
  "groq": "groq",
  "gemini": "googlegemini",
  "cron": "speedtest",
  "automation": "speedtest",
};

const getIconUrl = (name) => {
  const n = name.toLowerCase();

  // Manual high-priority overrides for things not in standard icon sets or needing specific logos
  if (n.includes('1c')) return "https://www.google.com/s2/favicons?domain=1c.ru&sz=128";
  if (n.includes('typegoose')) return "https://avatars.githubusercontent.com/u/4155121?s=200&v=4";
  
  // Using Google Favicon API as a very reliable fallback for external services
  if (n.includes('yandex')) return "https://www.google.com/s2/favicons?domain=yandex.ru&sz=128";
  if (n.includes('maps')) return "https://www.google.com/s2/favicons?domain=maps.google.com&sz=128";
  if (n.includes('docx') || n.includes('word')) return "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128";
  if (n.includes('pdf')) return "https://www.google.com/s2/favicons?domain=adobe.com&sz=128";

  // Use the word-boundary check for 'ai' to avoid false positives inside words
  if (/\bai\b/i.test(n) || n.includes('(ai)') || n.includes('groq') || n.includes('gemini')) {
    return "https://www.google.com/s2/favicons?domain=gemini.google.com&sz=128";
  }

  // Find matching key case-insensitively
  const key = Object.keys(ICON_MAP).find(k => n.includes(k));
  if (!key) return null;

  const slug = ICON_MAP[key];
  
  // Use Simple Icons CDN - robust, colored SVGs
  return `https://cdn.simpleicons.org/${slug}`;
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
        { name: "TypeScript", level: 92 },
        { name: "JWT / OAuth / RBAC", level: 92 },
        { name: `node-cron / ${language === 'ru' ? 'Автоматизация' : 'Automation'}`, level: 85 },
        { name: "Typegoose", level: 90 },
      ],
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: t.categories.tools,
      tags: [
        { name: "Digital Ocean / CPU", level: 92 },
        { name: "Git / GitHub / GitLab", level: 95 },
        { name: "Sentry / Monitoring", level: 80 },
        { name: "Vercel / Firebase", level: 90 },
        { name: "Postman / API Design", level: 92 },
        { name: "Docker", level: 65 },
      ],
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: t.categories.database,
      tags: [
        { name: "MongoDB (Mongoose)", level: 90 },
        { name: "Redis", level: 85 },
        { name: "Supabase", level: 85 },
      ],
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: t.categories.other,
      tags: [
        { name: "Jira / Atlassian", level: 88 },
        { name: "Docx / PDF Gen", level: 80 },
        { name: "1C-Integration / ERP", level: 85 },
        { name: "AI (Groq / Gemini API)", level: 88 },
        { name: "Yandex / Google Maps", level: 85 },
        { name: "Flutter (Dart)", level: 88 },
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
