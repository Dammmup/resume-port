import { useEffect, useCallback, memo, useMemo } from "react";
import { motion } from "framer-motion";
import {
  User,
  BrainCircuit,
  GraduationCap,
  FolderKanban,
  Swords,
  Mail,
  X,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

// navLinks dynamic list

const navVariants = {
  closed: {
    x: "100%",
    opacity: 0.5,
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 30,
      mass: 0.8,
      when: "afterChildren",
    },
  },
  open: {
    x: "0%",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 30,
      mass: 0.8,
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  closed: { y: 20, opacity: 0 },
  open: { y: 0, opacity: 1 },
};

const overlayVariants = {
  hidden: { opacity: 0, pointerEvents: "none" },
  visible: { opacity: 0.4, pointerEvents: "auto" },
};

const NavItem = memo(({ link, onNavClick, isActive }) => {
  const Icon = link.icon;
  return (
    <motion.li variants={itemVariants} className="w-full">
      <Link
        to={link.to}
        onClick={onNavClick}
        className={`flex flex-row items-center justify-start gap-4 text-lg font-medium transition-colors duration-200 py-2 w-full
          ${isActive ? "text-primary" : "text-foreground hover:text-primary"}
        `}
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Icon className="w-5 h-5 flex-shrink-0" style={{ display: "inline-block" }} />
        <span className="leading-none" style={{ display: "inline-block" }}>
          {link.text}
        </span>
      </Link>
    </motion.li>
  );
});
NavItem.displayName = "NavItem";

const SideNav = memo(({ open, onClose }) => {
  const location = useLocation();

  const { language, isRU } = useLanguage();
  const t = translations[language].nav;

  const navLinks = useMemo(() => [
    { to: "/about", icon: User, text: t.about },
    { to: "/skills", icon: BrainCircuit, text: t.skills },
    { to: "/academics", icon: GraduationCap, text: t.academics },
    { to: "/projects", icon: FolderKanban, text: t.projects },
    { to: "/cp", icon: Swords, text: t.cp },
    { to: "/contact", icon: Mail, text: t.contact },
  ], [t]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  const handleClickOutside = useCallback(
    (e) => {
      if (!e.target.closest(".side-nav-panel") && !e.target.closest(".hamburger")) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (!open) return;

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [open, handleKeyDown, handleClickOutside]);

  const navItems = useMemo(
    () =>
      navLinks.map((link) => (
        <NavItem
          key={link.to}
          link={link}
          onNavClick={onClose}
          isActive={location.pathname === link.to || (link.to === "/about" && location.pathname === "/")}
        />
      )),
    [onClose, location.pathname]
  );

  return (
    <>
      <motion.div
        initial={false}
        animate={open ? "visible" : "hidden"}
        variants={overlayVariants}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black z-40 lg:hidden"
        onClick={onClose}
        style={{
          willChange: "opacity",
          transform: "translate3d(0, 0, 0)",
        }}
      />

      <motion.nav
        initial={false}
        animate={open ? "open" : "closed"}
        variants={navVariants}
        className="side-nav-panel fixed top-0 right-0 w-[270px] h-screen bg-card shadow-lg z-50 flex flex-col p-6 pt-8"
        aria-label={isRU ? "Главная навигация" : "Main Navigation"}
        style={{
          willChange: "transform, opacity",
          transform: "translate3d(0, 0, 0)",
        }}
      >
        <motion.button
          variants={itemVariants}
          className="self-end text-muted-foreground hover:text-primary transition-all duration-300 hover:rotate-90 cursor-pointer p-2 -mr-2 mb-8 will-change-transform"
          aria-label={isRU ? "Закрыть меню" : "Close menu"}
          type="button"
          onClick={onClose}
        >
          <X className="w-7 h-7" />
        </motion.button>

        <ul className="flex-1 space-y-6">{navItems}</ul>
      </motion.nav>
    </>
  );
});

SideNav.displayName = "SideNav";

export default SideNav;
