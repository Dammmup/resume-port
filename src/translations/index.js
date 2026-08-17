export const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      academics: "Academics",
      cp: "Highlights",
      contact: "Contact"
    },
    about: {
      title: "About Me",
      tagline: "Building scalable Full-stack ecosystems with AI & automation",
      description: "I specialize in creating complex Full-Stack systems with a focus on business automation and AI integration. With extensive experience in architecting ERP and SaaS platforms, I transform business needs into robust technical solutions. My expert-level work includes developing AI-powered modules, geofencing systems, and automated localization infrastructures.",
      downloadCV: "Download CV",
      location: "Kazakhstan, Almaty",
      jobTitle: "Full-Stack Engineer & AI Automator"
    },
    skills: {
      title: "Skills",
      description: "This stack is based on my active GitHub projects, including ERP and SaaS systems with multi-language support, role-based access, integrations, and production deployment.",
      categories: {
        frontend: "Frontend",
        backend: "Backend Development",
        tools: "Dev Tools",
        other: "Other Tools",
        database: "Database",
        languages: "Languages"
      },
      levels: {
        native: "Native",
        fluent: "Fluent"
      }
    },
    projects: {
      title: "Featured Projects",
      description: "A showcase of engineering excellence, from AI-driven ERP systems to high-performance SaaS platforms.",
      visitRepo: "Visit Repo",
      whyItMatters: "Why It Matters",
      highlights: "Technical Highlights",
      comingSoon: "Coming Soon",
      timeline: "Development period",
      present: "present",
      monthsShort: "mo.",
      weeksShort: "wk.",
      daysShort: "d.",
      projects: {
        gardenParkInn: {
          title: "Garden Park Inn",
          description: "A professional hospitality management platform specializing in dynamic menu localization and intelligent financial tools.",
          highlights: [
            "Automated menu translation into 9 languages using Google Cloud Translation API",
            "Real-time currency conversion based on central bank rates (floatrates)",
            "Scalable Admin Dashboard for instant menu and price management",
            "Advanced dietary categorization (Halal, Vegetarian, Allergen-aware)"
          ]
        },
        detsadERP: {
          title: "Detsad ERP / Aldamiram",
          category: "Enterprise System",
          description: "An operating system for private kindergartens in Kazakhstan: children, staff, payments, food/SanPiN, medicine, pedagogy, and realtime ops — with multi-institution support (Aldamiram & Limpopo), PWA, and AI assistant.",
          highlights: [
            "Child billing with group payment rules, partial Kaspi/cash payments, debt/overpayment carry-over, and attendance-based recalculation",
            "Pedagogy suite: cyclograms, perspective plans, observation monitoring with Excel export, and development maps",
            "AI assistant on Groq with tool-calling (DB queries, in-app navigation) plus dish nutrition enrichment",
            "Telegram bot + cron for payment/payroll alerts, geofenced staff check-in, and scheduled operational reports",
            "SanPiN food journals, medical records, DOCX/PDF document generation, and role-based access across institutions"
          ]
        },
        detsadMobile: {
          title: "Detsad Mobile",
          category: "Flutter App",
          description: "A high-performance Flutter application for field staff management and real-time attendance tracking.",
          highlights: [
            "Precision Geofencing & GPS monitoring for automated staff attendance",
            "Interactive map integration using Yandex Maps SDK (@pbe/react-yandex-maps)",
            "Real-time push notifications for administrative updates",
            "Offline-first capability for reliable attendance marking in poor signal areas"
          ]
        },
        uyghurConnect: {
          title: "Uyghur Connect",
          description: "A global community platform with advanced real-time features and secure data handling.",
          highlights: [
            "End-to-end real-time chat with message persistence and encryption",
            "Complex role-based access control (RBAC) for diverse user groups",
            "Optimized search engine for high-traffic community discovery"
          ]
        },
        gbackend: {
          title: "GBackend",
          description: "A robust, production-ready backend core built for scalability and performance.",
          highlights: [
            "Modular architecture for easy horizontal scaling",
            "Comprehensive error handling and observability with Sentry",
            "Highly secure JWT-based authentication and authorization flows"
          ]
        }
      }
    },
    academics: {
      title: "Academics",
      description: "My educational journey and professional certifications.",
      degrees: {
        is: "Information Systems",
        food: "Food Production Technology",
        js: "Javascript Developer",
        cyber: "Cyber Security and Networks"
      },
      institutions: {
        etu: "Eurasian Technological University (ETU)",
        college: "Technological and Economic College",
        step: "IT Academy STEP"
      },
      descriptions: {
        etu: "Studying modern information systems, database management, and software architecture.",
        college: "Comprehensive training in food production processes, quality control, and management.",
        step_js: "Intensive training in modern Javascript, React, and Full-Stack web development.",
        step_cyber: "Advanced studies in network security, digital forensics, and infrastructure protection."
      }
    },
    cp: {
      title: "Engineering Highlights",
      description: "Production systems and hard engineering work from recent projects: ERP, realtime ops, AI tools, and integrations.",
      achievements: [
        {
          id: "production_erp",
          stat: "Production",
          label: "Kindergarten OS",
          description: "Aldamiram / Limpopo ERP is live in daily use: children, staff, SanPiN, medicine, pedagogy, and multi-institution access."
        },
        {
          id: "billing_engine",
          stat: "Billing",
          label: "Group payment rules",
          description: "Built child billing with group surcharges, custom periods, partial Kaspi/cash payments, and debt/overpayment carry-over."
        },
        {
          id: "realtime_pos",
          stat: "Realtime",
          label: "Restaurant POS",
          description: "Designed Tyan Shan floor loop with Socket.io sync across waiter, kitchen, cashier, and a local ESC/POS printer agent."
        },
        {
          id: "ai_assistant",
          stat: "AI Core",
          label: "Tool-calling assistant",
          description: "Integrated Groq AI with tool-calling for DB queries, in-app navigation, and dish nutrition enrichment."
        },
        {
          id: "geofencing",
          stat: "Field ops",
          label: "Geofencing attendance",
          description: "Shipped custom geofencing and GPS check-in for staff attendance in the Flutter field app and web panel."
        },
        {
          id: "integrations",
          stat: "Integrations",
          label: "CRM & bots",
          description: "Connected Bitrix24 CRM, Telegram bots, cron jobs, and Vercel Blob into working product workflows."
        }
      ],
      repos: {
        frontend: "Modern UI/UX with React, Ant Design, and Framer Motion.",
        backend: "Scaleable Node.js architecture with MongoDB and Redis.",
        detsad_f: "Enterprise-grade dashboard for Detsad ERP frontend.",
        detsad_b: "AI-powered automation and API core for Detsad ERP."
      }
    },
    contact: {
      title: "Contact",
      description: "Have a project in mind or just want to say hi? My inbox is always open.",
      tagline: "Let's build something extraordinary together.",
      labels: {
        email: "Email",
        telegram: "Telegram",
        github: "GitHub",
        whatsapp: "WhatsApp"
      }
    },
    footer: {
      rights: "All rights reserved."
    }
  },
  ru: {
    nav: {
      about: "Обо мне",
      skills: "Навыки",
      projects: "Проекты",
      academics: "Образование",
      cp: "Достижения",
      contact: "Контакты"
    },
    about: {
      title: "Обо мне",
      tagline: "Создаю масштабируемые Full-stack экосистемы с AI и автоматизацией",
      description: "Я специализируюсь на создании сложных Full-Stack систем с фокусом на автоматизацию бизнеса и интеграцию AI. Имея обширный опыт в архитектуре ERP и SaaS платформ, я превращаю потребности бизнеса в надежные технические решения. Моя экспертная работа включает разработку модулей на базе AI, систем геофенсинга и инфраструктуры автоматической локализации.",
      downloadCV: "Скачать CV",
      location: "Казахстан, Алматы",
      jobTitle: "Full-Stack разработчик и AI-автоматизатор"
    },
    skills: {
      title: "Навыки",
      description: "Этот стек основан на моих активных проектах на GitHub, включая ERP и SaaS системы с многоязычным интерфейсом, ролевым доступом, интеграциями и деплоем на продакшен.",
      categories: {
        frontend: "Фронтенд",
        backend: "Бэкенд разработка",
        tools: "Инструменты разработки",
        other: "Другие инструменты",
        database: "Базы данных",
        languages: "Языки"
      },
      levels: {
        native: "Родной",
        fluent: "Свободно"
      }
    },
    projects: {
      title: "Избранные проекты",
      description: "Витрина инженерного мастерства: от ERP-систем на базе AI до высокопроизводительных SaaS-платформ.",
      visitRepo: "Репозиторий",
      whyItMatters: "Почему это важно",
      highlights: "Технические особенности",
      comingSoon: "Скоро",
      timeline: "Срок разработки",
      present: "н.в.",
      monthsShort: "мес.",
      weeksShort: "нед.",
      daysShort: "дн.",
      projects: {
        gardenParkInn: {
          title: "Garden Park Inn",
          description: "Профессиональная платформа для управления ресторанным бизнесом с динамической локализацией и умными финансовыми инструментами.",
          highlights: [
            "Автоматический перевод меню на 9 языков через Google Cloud Translation API",
            "Динамическая конвертация валют на базе актуальных курсов ЦБ (floatrates)",
            "Масштабируемая панель администратора для мгновенного управления контентом",
            "Умная категоризация блюд (Халяль, Вегетарианское, учет аллергенов)"
          ]
        },
        detsadERP: {
          title: "Detsad ERP / Aldamiram",
          category: "Enterprise-система",
          description: "Операционная система частного детского сада в Казахстане: дети, персонал, оплаты, питание/СанПиН, медицина, педагогика и realtime-операционка — с multi-institution (Алдамирам и Лимпопо), PWA и AI-ассистентом.",
          highlights: [
            "Биллинг детей: правила оплаты по группам, частичные Kaspi/наличные, перенос долга/переплаты и пересчёт по посещаемости",
            "Педблок: циклограммы, перспективные планы, мониторинг наблюдений с Excel-экспортом и карта развития",
            "AI-ассистент на Groq с tool-calling (запросы к БД, навигация по приложению) и обогащение блюд по КБЖУ",
            "Telegram-бот и cron: уведомления по оплатам/зарплате, геозонный check-in персонала, регламентные отчёты",
            "СанПиН-журналы питания, медучёт, генерация DOCX/PDF и ролевой доступ по учреждениям"
          ]
        },
        detsadMobile: {
          title: "Detsad Mobile",
          category: "Flutter-приложение",
          description: "Высокопроизводительное мобильное приложение на Flutter для управления персоналом и трекинга посещаемости в реальном времени.",
          highlights: [
            "Точный Геофенсинг и GPS-мониторинг для автоматизации учета рабочего времени",
            "Интеграция интерактивных карт с использованием Yandex Maps SDK",
            "Push-уведомления в реальном времени для оперативной связи с администрацией",
            "Поддержка Offline-first режима для надежной фиксации данных при плохом сигнале"
          ]
        },
        uyghurConnect: {
          title: "Uyghur Learn (SaaS)",
          description: "Глобальная образовательная платформа (LMS) с SaaS-архитектурой и защищенной системой верификации.",
          highlights: [
            "Надежная система верификации пользователей по электронной почте (Nodemailer)",
            "Полноценная LMS: управление курсами, уроками и сообществами",
            "Сложный ролевой контроль доступа (RBAC) и защита от DDoS (Rate Limiting)",
            "Сквозной чат в реальном времени с шифрованием и сохранением истории"
          ]
        },
        gbackend: {
          title: "GBackend",
          description: "Надежное, готовое к продакшену ядро бэкенда, созданное для масштабируемости и производительности.",
          highlights: [
            "Модульная архитектура для легкого горизонтального масштабирования",
            "Комплексная обработка ошибок и мониторинг с использованием Sentry",
            "Высокозащищенные потоки аутентификации и авторизации на основе JWT"
          ]
        }
      }
    },
    academics: {
      title: "Образование",
      description: "Мой образовательный путь и профессиональные достижения.",
      degrees: {
        is: "Информационные системы",
        food: "Технология организации производства питания",
        js: "Javascript разработчик",
        cyber: "Кибербезопасность и сети"
      },
      institutions: {
        etu: "Евразийский технологический университет (ЕТУ)",
        college: "Технологический экономический колледж",
        step: "Академия ШАГ"
      },
      descriptions: {
        etu: "Изучение современных информационных систем, управления базами данных и архитектуры ПО.",
        college: "Освоение процессов производства питания, контроля качества и управления предприятием.",
        step_js: "Интенсивное обучение современному Javascript, React и Full-Stack веб-разработке.",
        step_cyber: "Углубленное изучение сетевой безопасности, защиты инфраструктуры и цифровой криминалистики."
      }
    },
    cp: {
      title: "Технические достижения",
      description: "Продакшен-системы и сильный инженерный вклад из свежих проектов: ERP, realtime, AI и интеграции.",
      achievements: [
        {
          id: "production_erp",
          stat: "Продакшен",
          label: "ОС детсада",
          description: "Aldamiram / Limpopo ERP работает в ежедневной эксплуатации: дети, персонал, СанПиН, медицина, педагогика и multi-institution."
        },
        {
          id: "billing_engine",
          stat: "Биллинг",
          label: "Правила оплаты",
          description: "Собрал биллинг детей с надбавками по группам, своими периодами, частичными Kaspi/наличными и переносом долга/переплаты."
        },
        {
          id: "realtime_pos",
          stat: "Realtime",
          label: "Ресторанный POS",
          description: "Спроектировал цикл зала Tyan Shan на Socket.io: официант, кухня, касса и локальный ESC/POS printer-agent."
        },
        {
          id: "ai_assistant",
          stat: "AI-ядро",
          label: "Ассистент с tools",
          description: "Интегрировал Groq AI с tool-calling: запросы к БД, навигация по приложению и обогащение блюд по КБЖУ."
        },
        {
          id: "geofencing",
          stat: "Полевые смены",
          label: "Геофенсинг",
          description: "С нуля сделал геозоны и GPS check-in для учёта персонала во Flutter-приложении и веб-панели."
        },
        {
          id: "integrations",
          stat: "Интеграции",
          label: "CRM и боты",
          description: "Связал Bitrix24 CRM, Telegram-ботов, cron-задачи и Vercel Blob в рабочие продуктовые сценарии."
        }
      ],
      repos: {
        frontend: "Современный UI/UX с React, Ant Design и Framer Motion.",
        backend: "Масштабируемая архитектура Node.js с MongoDB и Redis.",
        detsad_f: "Панель управления корпоративного уровня для фронтенда Detsad ERP.",
        detsad_b: "AI-автоматизация и ядро API для Detsad ERP."
      }
    },
    contact: {
      title: "Контакты",
      description: "Есть идея для проекта или просто хотите поздороваться? Моя почта всегда открыта.",
      tagline: "Давайте создадим что-то необычайное вместе.",
      labels: {
        email: "Email",
        telegram: "Telegram",
        github: "GitHub",
        whatsapp: "WhatsApp"
      }
    },
    footer: {
      rights: "Все права защищены."
    }
  }
};
