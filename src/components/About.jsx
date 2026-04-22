import React, { useMemo, memo } from "react";
import { Github, Linkedin, Mail, MapPin, BriefcaseBusiness, Download } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const SocialLink = memo(({ href, icon, title, className }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={className}
    title={title}
  >
    {icon}
  </a>
));
SocialLink.displayName = "SocialLink";

const SOCIAL_LINKS = [
  {
    href: "https://github.com/Dammmup",
    icon: <Github className="w-5 h-5" />,
    title: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/damir-biyankho-558287294/",
    icon: <Linkedin className="w-5 h-5" />,
    title: "LinkedIn",
  },
];

const About = () => {
  const { language, isRU } = useLanguage();
  const t = translations[language].about;

  const socialLinksElements = useMemo(
    () =>
      SOCIAL_LINKS.map(({ href, icon, title }) => (
        <SocialLink
          key={title}
          href={href}
          icon={icon}
          title={title}
          className="w-11 h-11 flex items-center justify-center rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:scale-105 transition-all outline-none focus-visible:ring-2 focus-visible:ring-primary"
        />
      )),
    []
  );

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left Column: Text Content */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="flex flex-col gap-8 order-2 lg:order-1"
        >
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 w-fit mb-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">{t.title}</span>
            </div>

            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl sm:text-7xl font-extrabold tracking-tight text-foreground"
            >
              Damir <span className="text-primary">Biyankho</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl sm:text-2xl font-medium text-muted-foreground flex items-center gap-2"
            >
              <BriefcaseBusiness className="w-5 h-5 text-primary" />
              {t.jobTitle}
            </motion.h2>

            <div className="flex flex-wrap gap-2 mt-2">
              {["Full-Stack", "AI Automation", "ERP Architect", "SaaS"].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-muted dark:bg-neutral-800 text-muted-foreground border border-border dark:border-neutral-700 rounded-full text-xs font-bold uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-foreground">
              {t.tagline}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              {t.description}
            </p>
          </motion.div>

          {/* Location & Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-muted rounded-xl text-primary transition-colors group-hover:bg-primary/10">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                  {isRU ? "Местоположение" : "Location"}
                </span>
                <span className="text-base font-bold text-foreground">{t.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-muted rounded-xl text-primary transition-colors group-hover:bg-primary/10">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Email</span>
                <a href="mailto:damir.-@mail.ru" className="text-base font-bold text-foreground hover:text-primary transition-colors">
                  damir.-@mail.ru
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold transition-all hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)] hover:scale-105 active:scale-95"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              {t.downloadCV}
            </a>
            <div className="flex gap-3 items-center">
              {socialLinksElements}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Profile Image / Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center order-1 lg:order-2"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            {/* Decorative circles */}
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -inset-4 border-2 border-primary/10 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute -inset-8 border border-primary/5 rounded-full animate-[spin_30s_linear_infinite_reverse]" />

            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-neutral-900 shadow-2xl bg-muted">
              <img
                src="/assets/damir.png"
                alt="Damir Biyankho"
                loading="lazy"
                decoding="async"
                className="object-cover w-full h-full"
                style={{ aspectRatio: "1/1" }}
              />
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default memo(About);
