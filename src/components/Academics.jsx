import React, { useMemo, memo } from "react";
import { GraduationCap, BookOpen, School, Code, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

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

const EducationCard = memo(({ education }) => {
  const { degree, institution, period, description, icon } = education;

  return (
    <motion.div
      variants={itemVariants}
      className="bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow p-6 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-primary/10 rounded-xl text-primary flex-shrink-0 w-12 h-12 flex items-center justify-center overflow-hidden">
          {education.logo ? (
            <img 
              src={education.logo} 
              alt="" 
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = icon.props.className; // Simplified fallback
              }}
            />
          ) : icon}
        </div>
        <div className="flex flex-col text-left gap-1">
          <h3 className="text-lg font-semibold text-foreground">{degree}</h3>
          <p className="text-sm text-primary font-medium">{institution}</p>
          <p className="text-xs text-muted-foreground font-mono">{period}</p>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
});
EducationCard.displayName = "EducationCard";

const AcademicsComponent = memo(function Academics() {
  const { language } = useLanguage();
  const t = translations[language].academics;

  const ACADEMICS_DATA = useMemo(
    () => [
      {
        id: "etu",
        degree: t.degrees.is,
        institution: t.institutions.etu,
        period: "2022 - 2023",
        description: t.descriptions.etu,
        icon: <School className="w-6 h-6" />,
        logo: "https://etu.edu.kz/wp-content/uploads/2023/04/logo-etu.png"
      },
      {
        id: "step_cyber",
        degree: t.degrees.cyber,
        institution: t.institutions.step,
        period: "2025 - Present",
        description: t.descriptions.step_cyber,
        icon: <Shield className="w-6 h-6" />,
        logo: "https://itstep.kz/themes/itstep/assets/images/logo.png"
      },
      {
        id: "step_js",
        degree: t.degrees.js,
        institution: t.institutions.step,
        period: "2022 - 2023",
        description: t.descriptions.step_js,
        icon: <Code className="w-6 h-6" />,
        logo: "https://itstep.kz/themes/itstep/assets/images/logo.png"
      },
      {
        id: "college",
        degree: t.degrees.food,
        institution: t.institutions.college,
        period: "2018 - 2021",
        description: t.descriptions.college,
        icon: <GraduationCap className="w-6 h-6" />,
        logo: "https://atec-edu.kz/images/logo_atec.png"
      },
    ],
    [t]
  );

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col items-center w-full">
        <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 flex items-center gap-4 text-foreground">
            <School className="w-8 h-8 sm:w-11 sm:h-11 text-primary drop-shadow-sm" />
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-16 text-center">
            {t.description}
          </p>
        </motion.div>

        <motion.div variants={containerVariants} className="w-full max-w-2xl flex flex-col gap-8">
          {ACADEMICS_DATA.map((education) => (
            <EducationCard key={education.id} education={education} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
});

AcademicsComponent.displayName = "Academics";

export default AcademicsComponent;
