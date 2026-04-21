import React, { memo, useState } from "react";
import { Mail, Phone, MessageCircle, Linkedin, Github } from "lucide-react";
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Contact = memo(() => {
  const { language } = useLanguage();
  const t = translations[language].contact;

  const contacts = [
    {
      icon: Phone,
      label: language === 'ru' ? "Телефон" : "Phone",
      value: "+7 (747) 831-33-98",
      href: "tel:+77478313398",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: language === 'ru' ? "Написать" : "Message",
      href: "https://wa.me/77478313398",
    },
    {
      icon: MessageCircle,
      label: "Telegram",
      value: "@damir_d",
      href: "https://t.me/damir_d",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Damir Biyankho",
      href: "https://www.linkedin.com/in/damir-biyankho-558287294/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Dammmup",
      href: "https://github.com/Dammmup",
    },
  ];

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
      <motion.div
        variants={sectionContainerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center gap-8 w-full max-w-xl"
      >
        <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 flex items-center justify-center gap-4 text-foreground">
            <Mail className="w-8 h-8 sm:w-11 sm:h-11 text-primary drop-shadow-sm" />
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-16 text-center leading-relaxed">
            {t.description}
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <a
            href="mailto:damir.-@mail.ru"
            className="flex justify-center items-center gap-2 text-primary text-xl font-bold hover:underline transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="w-6 h-6" />
            damir.-@mail.ru
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full max-w-md">
          <div className="grid gap-4">
            {contacts.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-primary/10 rounded-xl">
                  <contact.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-muted-foreground">{contact.label}</span>
                  <span className="text-foreground font-medium">{contact.value}</span>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
});

Contact.displayName = "Contact";

export default Contact;
