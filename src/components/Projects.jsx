import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { BadgeCheck, Code, ExternalLink, FolderKanban } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const aldamiram = ['/aldamiram screen.png', '/aldamiram screen1.png', '/aldamiram screen2.png']
const yughur = ['/yug.png', '/yug1.png', '/yug2.png']
const garden = ['/garr.png', '/garr1.png', '/garr2.png']
const mobile = ['/mob.png', '/mob1.png', '/mob2.png']
const universe = ['/uni.png', '/uni1.png', '/uni2.png']
const search = ['/search.png', '/search1.png']
const dailyReport = ['/dailyreport1.png', '/dailyreport2.png', '/dailyreport3.png']
const buhu4et = ['/buhu4et1.png', '/buhu4et2.png', '/buhu4et3.png']
const des = ['/des1.png', '/des2.png', '/des3.png']
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

const StackLine = memo(({ label, items }) => (
  <div className="text-xs text-muted-foreground">
    <span className="font-semibold text-foreground/80">{label}:</span> {items.join(", ")}
  </div>
));
StackLine.displayName = "StackLine";

const ProjectCard = memo(({ project, onPreviewOpen }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow p-6 flex flex-col h-full"
    >
      <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">{project.title}</h3>
      <p className="text-base text-muted-foreground mb-4 flex-grow">{project.desc}</p>
      {project.highlights?.length ? (
        <div className="mb-5 rounded-xl border border-emerald-300/50 dark:border-emerald-800/70 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950/40 dark:via-teal-950/30 dark:to-cyan-950/30 p-3">
          <h4 className="text-sm font-semibold text-emerald-800 dark:text-emerald-300 mb-2 inline-flex items-center gap-1.5">
            <BadgeCheck className="w-4 h-4" />
            {translations[useLanguage().language].projects.whyItMatters}
          </h4>
          <ul className="space-y-1.5">
            {project.highlights.slice(0, 4).map((point, index) => (
              <li key={index} className="text-xs text-emerald-900/90 dark:text-emerald-100/90 leading-relaxed">
                • {point}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {project.stack ? (
        <div className="mb-5 space-y-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50/80 dark:bg-neutral-900/40 p-3">
          <h4 className="text-sm font-semibold text-foreground/80">
            {translations[useLanguage().language].projects.techStack}
          </h4>
          {project.stack.frontend?.length ? <StackLine label="Фронтенд" items={project.stack.frontend} /> : null}
          {project.stack.backend?.length ? <StackLine label="Бэкенд" items={project.stack.backend} /> : null}
          {project.stack.integrations?.length ? <StackLine label="Инфраструктура / Интеграции" items={project.stack.integrations} /> : null}
        </div>
      ) : null}

      <div className="mb-5">
        <h4 className="text-sm font-semibold text-foreground/80 mb-2">
          {translations[useLanguage().language].projects.preview}
        </h4>
        {project.previews?.length ? (
          <div className="grid grid-cols-3 gap-2">
            {project.previews.slice(0, 3).map((preview, index) => (
              <button
                key={index}
                type="button"
                onClick={() => onPreviewOpen(project, index)}
                className="block cursor-zoom-in"
                aria-label={`Open ${project.title} screenshot ${index + 1}`}
              >
                <img
                  src={preview}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="h-20 w-full object-cover rounded-lg border border-neutral-300 dark:border-neutral-700 hover:opacity-90 hover:scale-[1.02] transition duration-200"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-dashed border-neutral-300 dark:border-neutral-700 p-3 text-xs text-muted-foreground">
            Add 2-3 screenshots into <code>/public/assets/previews</code> and place paths into the <code>previews</code> array.
          </div>
        )}
      </div>

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
            {link.type === "code" ? <Code className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
            {link.type === "code" ? "Code" : "Demo"}
          </a>
        ))}
      </div>
    </motion.div>
  );
});
ProjectCard.displayName = "ProjectCard";

const PreviewLightbox = memo(({ lightbox, onClose, onPrev, onNext }) => {
  if (!lightbox) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-6xl"
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.96, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={(event) => event.stopPropagation()}
        >
          <img
            src={lightbox.images[lightbox.index]}
            alt={`${lightbox.title} fullscreen screenshot ${lightbox.index + 1}`}
            className="w-full max-h-[84vh] object-contain rounded-xl border border-white/20 shadow-2xl"
          />

          <button
            type="button"
            onClick={onClose}
            className="absolute top-3 right-3 px-3 py-1.5 text-sm rounded-md bg-black/55 text-white hover:bg-black/75 transition"
            aria-label="Закрыть превью"
          >
            {translations[useLanguage().language].projects.close}
          </button>

          {lightbox.images.length > 1 ? (
            <>
              <button
                type="button"
                onClick={onPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/55 text-white hover:bg-black/75 transition"
                aria-label="Previous screenshot"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={onNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/55 text-white hover:bg-black/75 transition"
                aria-label="Next screenshot"
              >
                ›
              </button>
            </>
          ) : null}

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-md bg-black/55 text-white text-sm">
            {lightbox.title} · {lightbox.index + 1}/{lightbox.images.length}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
});
PreviewLightbox.displayName = "PreviewLightbox";

function ProjectsComponent() {
  const [lightbox, setLightbox] = useState(null);

  const openPreview = useCallback((project, index) => {
    if (!project.previews?.length) return;
    setLightbox({
      title: project.title,
      images: project.previews,
      index,
    });
  }, []);

  const closePreview = useCallback(() => {
    setLightbox(null);
  }, []);

  const goNext = useCallback(() => {
    setLightbox((prev) => {
      if (!prev) return prev;
      return { ...prev, index: (prev.index + 1) % prev.images.length };
    });
  }, []);

  const goPrev = useCallback(() => {
    setLightbox((prev) => {
      if (!prev) return prev;
      return { ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length };
    });
  }, []);

  useEffect(() => {
    if (!lightbox) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") closePreview();
      if (event.key === "ArrowRight") goNext();
      if (event.key === "ArrowLeft") goPrev();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightbox, closePreview, goNext, goPrev]);

  const { language } = useLanguage();
  const t = translations[language].projects;

  const fullStackProjects = useMemo(
    () => [
      {
        title: t.projects.detsadERP.title,
        desc: t.projects.detsadERP.description,
        tags: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "1C", "Telegram Bot", "Cron"],
        stack: {
          frontend: ["React", "Vite", "TypeScript", "MUI", "Redux", "Recharts", "Yandex Maps"],
          backend: ["Node.js", "Express", "TypeScript", "MongoDB", "Mongoose", "1C-Integration"],
          integrations: ["Groq (Llama-3)", "Gemini AI", "Telegram Bot API", "Sentry", "DOCX Generator"],
        },
        highlights: t.projects.detsadERP.highlights,
        previews: aldamiram,
        links: [

          { type: "demo", href: "https://aldamiram.vercel.app/" }
        ],
      },
      {
        title: t.projects.detsadMobile.title,
        desc: t.projects.detsadMobile.description,
        tags: ["Flutter", "Dart", "Geofencing", "GPS", "Mobile", "Firebase", "Android/iOS"],
        stack: {
          frontend: ["Flutter", "Dart", "Yandex Maps SDK"],
          backend: ["Firebase Admin SDK", "Node.js (API Proxy)"],
          integrations: ["Geofencing API", "Background GPS Tracking", "Push Notifications", "Firebase Auth"],
        },
        highlights: t.projects.detsadMobile.highlights,
        previews: mobile
      },
      {
        title: t.projects.uyghurConnect.title,
        desc: t.projects.uyghurConnect.description,
        tags: ["SaaS", "TypeScript", "Node.js", "MongoDB", "Email Auth", "RBAC", "LMS"],
        stack: {
          frontend: ["React", "Vite", "TypeScript", "Ant Design", "i18next", "Rate Limiting"],
          backend: ["Node.js", "Express", "TypeScript", "MongoDB", "Mongoose", "Nodemailer"],
          integrations: ["Secure Email Verification", "Role-based access", "Content management workflow"],
        },
        highlights: t.projects.uyghurConnect.highlights,
        previews: yughur,
        links: [

          { type: "demo", href: "https://ur-front.vercel.app/" },
        ],
      },
      {
        title: t.projects.gardenParkInn.title,
        desc: t.projects.gardenParkInn.description,
        tags: ["React", "Ant Design", "Google Translate API", "Currency Exchange", "Dashboard"],
        stack: {
          frontend: ["React", "Vite", "TypeScript", "Ant Design", "Tailwind CSS"],
          backend: ["Node.js", "Express", "TypeScript", "MongoDB", "Mongoose"],
          integrations: ["9-language auto-translation", "Currency conversion (floatrates API)", "Admin Content Management"],
        },
        highlights: t.projects.gardenParkInn.highlights,
        previews: garden,
        links: [
          { type: "demo", href: "https://gardenparkinn.vercel.app" },
        ],
      },
      {
        title: "DailyReport ERP",
        desc: language === "ru"
          ? "Mini-ERP для стажеров и тимлидов: посещаемость, daily-отчеты, планы, комментарии, артефакты, аудит, email verification, Telegram-бот и AI-анализ продуктивности. Проект ценен тем, что закрывает не просто форму отчета, а весь рабочий цикл тимлида: контроль, обратная связь, риски и сводки."
          : "Mini-ERP for interns and team leads: attendance, daily reports, plans, comments, artifacts, audit logs, email verification, Telegram bot, and AI productivity analysis. The value is not just report collection, but the whole lead workflow: control, feedback, risks, and summaries.",
        tags: ["React", "TypeScript", "Express 5", "MongoDB", "Telegram Bot", "AI", "Email Verification"],
        stack: {
          frontend: ["React 19", "Vite 7", "TypeScript", "Leaflet", "lucide-react"],
          backend: ["Node.js", "Express 5", "TypeScript", "MongoDB", "Mongoose", "JWT", "Zod"],
          integrations: ["Telegraf", "Nodemailer", "Groq AI", "Vercel Blob", "Audit logs", "Attendance tracking"],
        },
        highlights: language === "ru"
          ? [
            "AI оценивает daily-отчеты по ясности результата, плану, блокерам и инициативе.",
            "Telegram-бот позволяет отправлять отчеты и получать summary без входа в веб-интерфейс.",
            "Есть email verification, audit logs и throttling для более безопасного onboarding.",
            "Модель посещаемости и локаций превращает проект в управленческий инструмент, а не просто CRUD."
          ]
          : [
            "AI scores daily reports by result clarity, plan clarity, blockers, and initiative.",
            "Telegram bot lets users submit reports and receive summaries outside the web UI.",
            "Email verification, audit logs, and throttling make onboarding safer.",
            "Attendance and location models turn it into an operational management tool, not just CRUD."
          ],
        previews: dailyReport,
        links: [],
      },
      {
        title: "Designer Partner Program",
        desc: language === "ru"
          ? "Партнерская mini-ERP для дизайнеров интерьеров: дизайнеры, менеджеры, проекты, заявки, заказы, бонусы, лояльность, промокоды, каталог товаров и интеграция с Bitrix24. Внутри есть AI-примерочная комнаты по товарам из каталога, голосовая диктовка для заполнения проектов и калькулятор краски. Уникальность проекта в том, что он связывает CRM, каталог, бонусную экономику и рабочий кабинет дизайнера в одну операционную систему."
          : "Partner mini-ERP for interior designers: designers, managers, projects, requests, orders, bonuses, loyalty, promocodes, product catalog, and Bitrix24 integration. It includes an AI room try-on based on catalog products, voice dictation for project filling, and a paint calculator. Its uniqueness is connecting CRM, catalog, bonus economy, and designer workspace into one operating system.",
        tags: ["NestJS", "React", "MongoDB", "Bitrix24", "BullMQ", "Redis", "Sentry", "DigitalOcean"],
        stack: {
          frontend: ["React 18", "Vite", "TypeScript", "React Router", "NProgress"],
          backend: ["NestJS", "TypeScript", "MongoDB", "Mongoose", "JWT", "Passport", "Swagger"],
          integrations: ["Bitrix24 CRM", "AI room try-on", "Voice dictation", "Paint calculator", "BullMQ", "Redis", "Sentry", "Telegram", "DigitalOcean"],
        },
        highlights: language === "ru"
          ? [
            "Bitrix24 используется как источник сделок и товаров, а данные маппятся в собственную доменную модель.",
            "Система рассчитывает бонусы, уровни лояльности и историю начислений для дизайнеров.",
            "AI-примерочная принимает до 12-14 фотографий товаров из каталога и генерирует примерное видение готовой комнаты из чернового варианта.",
            "Голосовая диктовка помогает заполнять проекты быстрее, включая поддержку казахского языка."
          ]
          : [
            "Bitrix24 acts as the source for deals and products, mapped into a custom domain model.",
            "The system calculates bonuses, loyalty levels, and transaction history for designers.",
            "AI room try-on accepts up to 12-14 catalog product photos and generates an approximate finished-room vision from a rough draft.",
            "Voice dictation speeds up project filling, including Kazakh language support."
          ],
        previews: buhu4et,
        links: [],
      },
      {
        title: "Buhu4et",
        desc: language === "ru"
          ? "Full-stack сервис для бухгалтерских/операционных услуг: лиды, заказы, каталог сервисов, калькуляторы, подписки, документы, загрузка файлов, роли и Telegram-настройки. Проект ценен тем, что объединяет лендинг, личный кабинет и внутреннюю админку вокруг понятной воронки: заявка -> расчет -> заказ -> документы."
          : "Full-stack service for accounting and operational workflows: leads, orders, service catalog, calculators, subscriptions, documents, file uploads, roles, and Telegram settings. Its value is unifying landing, client cabinet, and internal admin around a clear funnel: lead -> calculation -> order -> documents.",
        tags: ["React", "MUI", "Express", "MongoDB", "Multer", "JWT", "Telegram"],
        stack: {
          frontend: ["React 19", "Vite", "TypeScript", "MUI", "React Router", "Axios"],
          backend: ["Node.js", "Express", "TypeScript", "MongoDB", "Mongoose", "JWT", "Zod", "Multer"],
          integrations: ["Telegram service", "File uploads", "Subscription plans", "Domain calculators"],
        },
        highlights: language === "ru"
          ? [
            "Есть сервисный каталог и калькуляторы, которые помогают превращать интерес клиента в расчет.",
            "Лиды, заказы и документы связаны в одну операционную цепочку.",
            "Подписки и access-control позволяют развивать продукт как SaaS, а не разовую админку.",
            "Multer/file uploads и Telegram-настройки закрывают практические рабочие сценарии."
          ]
          : [
            "Service catalog and calculators help turn client interest into a concrete estimate.",
            "Leads, orders, and documents are connected into one operating chain.",
            "Subscriptions and access-control make it SaaS-ready rather than a one-off admin panel.",
            "Multer/file uploads and Telegram settings cover practical day-to-day workflows."
          ],
        previews: des,
        links: [],
      },
      {
        title: language === 'ru' ? "SearchX (Фронтенд + API интеграции)" : "SearchX (Frontend + API Integrations)",
        desc: language === 'ru'
          ? "Фронтенд-ориентированный продукт, агрегирующий данные из нескольких внешних API с использованием Redux для управления состоянием и Supabase для пользовательских функций."
          : "Frontend-focused product aggregating data from multiple external APIs using Redux for state management and Supabase for user features.",
        tags: ["React", "Redux Toolkit", "Supabase", "API Integrations", "Vite"],
        highlights: language === 'ru'
          ? ["Единый интерфейс поиска по нескольким независимым внешним API.", "Сохранение избранного и авторизация на базе Supabase."]
          : ["Single search interface across multiple independent external APIs.", "Favorites storage and Supabase-based authentication."],
        previews: search,
        links: [
          { type: "demo", href: "https://search-content.vercel.app/" },
        ],
      },
      {
        title: "Universe (Reality Constructor)",
        desc: language === 'ru'
          ? "Интерактивный 3D-опыт со сценарным повествованием и динамическими визуальными состояниями. Построен на иммерсивных переходах, потоковых анимациях и исследовательском UI."
          : "Interactive 3D experience with scripted narrative and dynamic visual states. Built with immersive transitions, fluid animations, and exploratory UI.",
        tags: ["Three.js", "React Three Fiber", "GSAP", "Zustand", "Tailwind CSS"],
        highlights: language === 'ru'
          ? ["Иммерсивное интерактивное 3D-повествование с переходами между сценами."]
          : ["Immersive interactive 3D storytelling with scene transitions."],
        previews: universe,
        links: [
          { type: "demo", href: "https://universe-flame-one.vercel.app/" },
        ],
      }
    ],
    [t, language]
  );

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col items-center w-full">
        <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 flex items-center gap-4 text-foreground">
            <FolderKanban className="w-8 h-8 sm:w-11 sm:h-11 text-primary drop-shadow-sm" />
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center mb-10">
            {t.description}
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full max-w-6xl text-left mb-5">
          <h3 className="text-2xl font-semibold text-foreground">
            {language === 'ru' ? 'Full-Stack Проекты' : 'Full-Stack Projects'}
          </h3>
        </motion.div>
        <motion.div variants={containerVariants} className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {fullStackProjects.map((project, index) => (
            <ProjectCard key={index} project={project} onPreviewOpen={openPreview} />
          ))}
        </motion.div>

      </motion.div>

      <PreviewLightbox lightbox={lightbox} onClose={closePreview} onPrev={goPrev} onNext={goNext} />
    </div>
  );
}

export default memo(ProjectsComponent);
