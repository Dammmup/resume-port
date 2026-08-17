import React, { memo, useMemo } from "react";
import { Bot, Building2, ExternalLink, MapPin, Plug, Receipt, Swords, Trophy, UtensilsCrossed } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const sectionContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const listContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const RepoCard = memo(({ repo, language }) => (
  <motion.div
    variants={itemVariants}
    className="bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow p-6 flex flex-col items-start h-full hover:shadow-lg transition-shadow duration-300"
  >
    <div className="text-lg font-semibold text-foreground mb-2">{repo.name}</div>
    <div className="text-sm text-muted-foreground mb-3 flex-grow leading-relaxed">{repo.desc}</div>
    <div className="text-sm text-muted-foreground mb-3">
      <span className="text-foreground/80 font-semibold">{language === 'ru' ? 'Стек' : 'Stack'}:</span> {repo.stack}
    </div>
    <a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-auto pt-2 flex items-center gap-1 text-primary font-medium text-sm hover:underline hover:text-foreground dark:hover:text-primary-foreground/70 transition-colors"
    >
      <ExternalLink className="w-4 h-4" />
      {language === 'ru' ? 'Открыть репозиторий' : 'Open Repository'}
    </a>
  </motion.div>
));
RepoCard.displayName = "RepoCard";

const CP = memo(() => {
  const { language } = useLanguage();
  const t = translations[language].cp;

  const featuredRepos = useMemo(
    () => [
      {
        name: "detsad_b / detsad_f",
        desc: language === 'ru'
          ? "Продакшен ERP детсада: биллинг с правилами групп, СанПиН, медицина, педагогика, Groq AI, Telegram/cron и multi-institution."
          : "Production kindergarten ERP: group billing rules, SanPiN, medicine, pedagogy, Groq AI, Telegram/cron, and multi-institution access.",
        stack: "React, TypeScript, Express, MongoDB, Groq, Telegram, PWA",
        url: "https://github.com/Dammmup/detsad_b",
      },
      {
        name: "tyan_shan_b / tyan_shan_f",
        desc: language === 'ru'
          ? "Ресторанный POS/ERP: заказы, KDS, касса, смены и локальный printer-agent по Socket.io (ESC/POS / Windows)."
          : "Restaurant POS/ERP: orders, KDS, cashier, shifts, and a local Socket.io printer-agent (ESC/POS / Windows).",
        stack: "NestJS, React, MongoDB, Socket.io, Ant Design",
        url: "https://github.com/Dammmup/tyan_shan_b",
      },
      {
        name: "designers-backend",
        desc: language === 'ru'
          ? "Партнёрская ERP для дизайнеров: Bitrix24, бонусы/лояльность, AI-примерочная, очереди BullMQ и S3."
          : "Partner ERP for designers: Bitrix24, bonuses/loyalty, AI room try-on, BullMQ queues, and S3.",
        stack: "NestJS, MongoDB, Bitrix24, BullMQ, Redis, Groq",
        url: "https://github.com/Dammmup/designers-backend",
      },
      {
        name: "detsad_m",
        desc: language === 'ru'
          ? "Flutter-приложение полевого персонала: геофенсинг, GPS check-in и push-уведомления."
          : "Flutter field-staff app: geofencing, GPS check-in, and push notifications.",
        stack: "Flutter, Dart, Firebase, Yandex Maps, Geofencing",
        url: "https://github.com/Dammmup/detsad_m",
      },
    ],
    [language]
  );

  const ACHIEVEMENTS = useMemo(() => {
    const icons = {
      production_erp: <Building2 className="w-5 h-5 text-emerald-500" />,
      billing_engine: <Receipt className="w-5 h-5 text-amber-500" />,
      realtime_pos: <UtensilsCrossed className="w-5 h-5 text-orange-500" />,
      ai_assistant: <Bot className="w-5 h-5 text-violet-500" />,
      geofencing: <MapPin className="w-5 h-5 text-green-500" />,
      integrations: <Plug className="w-5 h-5 text-sky-500" />,
    };

    return (t.achievements ?? []).map((ach) => ({
      ...ach,
      icon: icons[ach.id],
    }));
  }, [t.achievements]);

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
      <motion.div variants={sectionContainerVariants} initial="hidden" animate="visible" className="flex flex-col items-center w-full space-y-16">
        <motion.div variants={itemVariants} className="flex flex-col items-center text-center max-w-2xl leading-relaxed">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 flex items-center gap-4 text-foreground justify-center">
            <Trophy className="w-8 h-8 sm:w-11 sm:h-11 text-primary drop-shadow-sm" />
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.description}
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {ACHIEVEMENTS.map((ach) => (
            <div key={ach.id} className="bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow p-6 flex gap-4 hover:shadow-lg transition-shadow duration-300">
              <div className="p-3 bg-muted rounded-xl self-start">
                {ach.icon}
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-foreground">{ach.stat}</span>
                  <span className="text-sm font-semibold text-primary">{ach.label}</span>
                </div>
                <p className="text-sm text-muted-foreground">{ach.description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="w-full max-w-5xl space-y-8">
          <motion.h3 variants={itemVariants} className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Swords className="w-6 h-6 text-primary" />
            {language === 'ru' ? 'Избранные репозитории' : 'Featured Repositories'}
          </motion.h3>
          <motion.div variants={listContainerVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {featuredRepos.map((repo) => (
              <RepoCard key={repo.name} repo={repo} language={language} />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
});

CP.displayName = "CP";

export default CP;
