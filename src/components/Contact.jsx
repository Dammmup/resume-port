import React, { memo } from "react";
import { Mail, Phone, MessageCircle, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

// --- Animation Variants (The "Staggered Entrance" Pattern) ---
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


// --- Main Contact Component ---
function ContactComponent() {
  const contacts = [
    {
      icon: Phone,
      label: "Телефон",
      value: "+7 (747) 831-33-98",
      href: "tel:+77478313398",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Написать",
      href: "https://wa.me/77478313398",
    },
    {
      icon: MessageCircle,
      label: "Telegram",
      value: "Написать",
      href: "https://t.me/damir_d",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Damir D",
      href: "https://www.linkedin.com/in/damir-d-449aa6331",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Damir-code",
      href: "https://github.com/Damir-code",
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
          <h2 className="text-3xl sm:text-5xl font-bold text-center text-foreground">
            <span className="inline-flex items-center justify-center gap-3">
              <Mail className="w-7 h-7 sm:w-9 sm:h-9 text-primary drop-shadow-sm flex-shrink-0 relative top-px sm:top-0.5" />
              <span>Контакты</span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            Свяжитесь со мной любым удобным способом. Я открыт для предложений, вопросов и сотрудничества.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <a
            href="mailto:damir.-@mail.ru"
            className="flex justify-center items-center gap-2 text-primary text-lg font-medium hover:underline transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="w-5 h-5" />
            damir.-@mail.ru
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="w-full max-w-md"
        >
          <div className="grid gap-4">
            {contacts.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/90 dark:bg-neutral-900/80 border border-border/40 dark:border-border/60 rounded-xl shadow hover:shadow-md transition-all duration-200 hover:scale-[1.02]"
              >
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg">
                  <contact.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">{contact.label}</span>
                  <span className="text-foreground font-medium">{contact.value}</span>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default memo(ContactComponent);
