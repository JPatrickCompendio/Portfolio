"use client";

import Image from "next/image";
import { AnimatePresence, MotionConfig, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  Award,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  Code2,
  Copy,
  ExternalLink,
  Layers,
  Mail,
  MapPin,
  Menu,
  Moon,
  Send,
  ShieldCheck,
  Sparkles,
  Terminal,
  UserCheck,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTheme } from "@/components/theme-provider";
import { FaGithub, FaJava } from "react-icons/fa6";
import {
  SiFirebase,
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

const skills = [
  { name: "React", category: "Frontend Framework", icon: SiReact, color: "text-sky-500" },
  { name: "React Native", category: "Mobile Development", icon: SiReact, color: "text-cyan-500" },
  { name: "JavaScript", category: "Core Language", icon: SiJavascript, color: "text-yellow-400" },
  { name: "TypeScript", category: "Typed JavaScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "Node.js", category: "Backend Runtime", icon: SiNodedotjs, color: "text-green-500" },
  { name: "PHP", category: "Backend & Web API", icon: SiPhp, color: "text-indigo-500" },
  { name: "Java", category: "Desktop & OOP", icon: FaJava, color: "text-red-500" },
  { name: "MySQL", category: "Relational Database", icon: SiMysql, color: "text-sky-600" },
  { name: "Firebase", category: "Cloud & Realtime DB", icon: SiFirebase, color: "text-amber-500" },
  { name: "Tailwind CSS", category: "Modern Styling", icon: SiTailwindcss, color: "text-cyan-400" },
];

const projects = [
  {
    name: "BulSU Wiki",
    badge: "Featured Platform",
    category: "Web Application",
    description:
      "Developed and deployed a web-based learning platform for students and teachers with learning progress tracking and student rankings.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    github: "",
    demo: "",
    gallery: [
      { src: "/portfolio/bulsu-wiki-1.jpg", alt: "BulSU Wiki schedule and timetable management interface" },
      { src: "/portfolio/bulsu-wiki-2.jpg", alt: "BulSU Wiki Student Affairs and Services portal" },
      { src: "/portfolio/bulsu-wiki-3.jpg", alt: "BulSU Wiki main learning dashboard and manuals" },
      { src: "/portfolio/bulsu-wiki-4.jpg", alt: "BulSU Wiki digital reference guide and faculty manual" },
    ],
  },
  {
    name: "OSOADOCS",
    badge: "Document Tracking",
    category: "Full-Stack Web System",
    description:
      "Developed a web-based document tracking system to monitor document location, assigned personnel, status, and movement history. Built frontend and backend features including document management, digital storage, user management, and transfer notifications.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    github: "",
    demo: "",
    gallery: [
      { src: "/portfolio/osoadocs-1.png", alt: "OSOADOCS submission windows configuration dashboard" },
      { src: "/portfolio/osoadocs-2.png", alt: "OSOADOCS organization activities and calendar schedule" },
      { src: "/portfolio/osoadocs-3.png", alt: "OSOADOCS workflow updates and transfer notifications modal" },
      { src: "/portfolio/osoadocs-4.png", alt: "OSOADOCS active submission windows and school year calendar" },
    ],
  },
  {
    name: "EVENTORA",
    badge: "Booking & Checkout",
    category: "Full-Stack Web Platform",
    description:
      "EVENTORA is a web-based booking and event management platform inspired by Airbnb. It centralizes venue discovery, listing management, reservations, and secure checkout through PayPal for a faster and more reliable planning experience.",
    stack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Firebase",
      "PayPal",
      "Vercel",
    ],
    github:
      "https://github.com/JPatrickCompendio/FINAL-PROJECT---ONLINE-PLATFORM-MANAGEMENT-SYSTEM.git",
    demo: "",
    gallery: [
      { src: "/portfolio/eventora-1.png", alt: "EVENTORA landing page with hero and navigation" },
      { src: "/portfolio/eventora-2.png", alt: "EVENTORA dark-themed marketing page with featured stays" },
      { src: "/portfolio/eventora-3.png", alt: "EVENTORA explore page with listings and search" },
      { src: "/portfolio/eventora-4.png", alt: "EVENTORA trending destinations in the Philippines" },
    ],
  },
  {
    name: "Point of Sale System",
    badge: "Desktop POS",
    category: "Java Desktop Software",
    description:
      "A desktop-based POS system built with Java and OOP principles to streamline sales transactions, product tracking, and receipt generation. It replaces manual computations with fast, accurate transaction workflows for small businesses.",
    stack: ["Java", "OOP", "Desktop App"],
    github: "",
    demo: "",
    gallery: [
      { src: "/portfolio/pos-1.png", alt: "Point of Sale system payment modal and transaction view" },
      { src: "/portfolio/pos-2.png", alt: "Point of Sale system layout with catalog and order list" },
      { src: "/portfolio/pos-3.png", alt: "Sell Smart POS promotional banner" },
      { src: "/portfolio/pos-4.png", alt: "Retail category visual for POS context" },
    ],
  },
  {
    name: "Math Bridge Handbook App",
    badge: "Mobile App",
    category: "Cross-Platform Learning",
    description:
      "A mobile and web learning tool that organizes key formulas and guided math references in one place. Built for quick student access with offline-capable local storage via SQLite and cross-platform coverage across React Native and React.",
    stack: ["React Native", "React", "SQLite"],
    github: "https://github.com/JPatrickCompendio/MathBridge-Handbook",
    demo: "",
    gallery: [
      { src: "/portfolio/mathbridge-1.png", alt: "MathBridge Handbook sign-in screen" },
      { src: "/portfolio/mathbridge-2.png", alt: "MathBridge Handbook learning dashboard with topics" },
      { src: "/portfolio/mathbridge-3.png", alt: "MathBridge Handbook practice and activities" },
      { src: "/portfolio/mathbridge-4.png", alt: "MathBridge Handbook profile and statistics" },
    ],
  },
] as const;

const certifications = [
  {
    title: "Google IT Support",
    issuer: "Google / Coursera",
    image: "/portfolio/cert-google-it.png",
    alt: "Google IT Support Professional Certificate issued by Coursera",
    description:
      "Completed Google's 6-course Professional Certificate covering Technical Support Fundamentals, Computer Networking, Operating Systems, System Administration, IT Security, and AI integration.",
  },
  {
    title: "JavaScript Essentials 1",
    issuer: "Cisco Networking Academy",
    image: "/portfolio/cert-js.png",
    alt: "Statement of Achievement for JavaScript Essentials 1",
    description:
      "Successfully completed JavaScript Essentials 1, building a strong foundation in core JavaScript concepts, including variables, data types, control structures, and problem-solving.",
  },
  {
    title: "Cisco Packet Tracer",
    issuer: "Cisco Systems",
    image: "/portfolio/cert-cisco.png",
    alt: "Certificate for Getting Started with Cisco Packet Tracer",
    description:
      "Completed Cisco's Getting Started with Packet Tracer, developing foundational skills in network simulation, configuration, and basic networking concepts.",
  },
  {
    title: "BulSU TECHKNOWS x Accenture",
    issuer: "Accenture",
    image: "/portfolio/cert-accenture.png",
    alt: "Certificate of Participation for BulSU TECHKNOWS Data Analytics with Accenture",
    description:
      "Participated in the BulSU TECHKNOWS: Data Analytics program in partnership with Accenture, gaining foundational knowledge in data analytics concepts and real-world industry practices.",
  },
] as const;

const premiumEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

function cn(...classes: Array<string | false>) {
  return classes.filter(Boolean).join(" ");
}

function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  const sectionHeadingId = `${id}-heading`;
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id={id}
      aria-labelledby={sectionHeadingId}
      className="scroll-mt-24 py-14 sm:py-16 md:scroll-mt-28 md:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: shouldReduceMotion ? 0.35 : 0.7, ease: premiumEase }}
        className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8"
      >
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-royal"></span>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-royal">
            {title}
          </p>
        </div>
        {subtitle ? (
          <h2
            id={sectionHeadingId}
            className="mt-2 max-w-3xl text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl"
          >
            {subtitle}
          </h2>
        ) : null}
        <div className="mt-6 sm:mt-8 md:mt-10">{children}</div>
      </motion.div>
    </section>
  );
}

function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="glass-card inline-flex h-10 w-10 items-center justify-center rounded-full transition-transform"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Moon size={16} />
    </motion.button>
  );
}

function ProjectCard({
  project,
  onImageClick,
}: {
  project: (typeof projects)[number];
  onImageClick: (image: { src: string; alt: string }) => void;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: premiumEase }}
      className="glass-card glass-card-interactive group flex flex-col overflow-hidden rounded-3xl p-4 sm:p-5 md:p-6"
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-royal/30 bg-royal/10 px-3 py-1 text-[11px] font-semibold text-royal">
          <Layers size={12} />
          {project.badge}
        </span>
        <span className="text-xs font-medium text-muted">{project.category}</span>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-white/50 to-royal/10 p-2 sm:p-3 dark:from-white/10 dark:to-royal/20">
        <ul
          className="m-0 grid list-none grid-cols-2 gap-2 p-0"
          aria-label={`${project.name} screenshots`}
        >
          {project.gallery.map((item) => (
            <li key={item.src}>
              <motion.div
                className="project-thumb-frame relative aspect-square overflow-hidden rounded-lg group/item"
                whileHover={
                  reduceMotion
                    ? { scale: 1.02 }
                    : {
                        scale: 1.05,
                        rotateZ: 1.5,
                        boxShadow: "0 18px 28px rgba(65,105,225,0.22)",
                      }
                }
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <button
                  type="button"
                  className="absolute inset-0 cursor-zoom-in"
                  aria-label={`View ${item.alt}`}
                  onClick={() => onImageClick(item)}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 45vw, 180px"
                    className="object-cover transition-transform duration-300 group-hover/item:scale-105"
                  />
                  <div className="absolute inset-0 bg-royal/20 opacity-0 transition-opacity duration-200 group-hover/item:opacity-100 flex items-center justify-center">
                    <span className="rounded-full bg-black/60 p-1.5 text-white backdrop-blur-sm">
                      <ExternalLink size={14} />
                    </span>
                  </div>
                </button>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>

      <h3 className="mt-4 text-xl font-bold leading-tight sm:text-2xl">{project.name}</h3>
      <p className="mt-3 text-sm leading-6 text-muted flex-1">{project.description}</p>
      
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-royal/30 bg-royal/10 px-2.5 py-0.5 text-[11px] font-medium text-royal"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3 pt-3 border-t border-white/10">
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-10 items-center gap-2 rounded-full border border-royal/60 bg-royal px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
          >
            <FaGithub size={16} />
            GitHub
          </a>
        ) : (
          <span className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-white/20 bg-white/20 px-3.5 py-1.5 text-xs font-medium text-muted dark:bg-white/5">
            <Code2 size={14} />
            Private / Client Code
          </span>
        )}
      </div>
    </motion.article>
  );
}

export function PortfolioPage() {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedImage, setSelectedImage] = useState<null | {
    src: string;
    alt: string;
  }>(null);
  const scrollRafRef = useRef<number | null>(null);

  useEffect(() => {
    const timeout = window.setTimeout(() => setMounted(true), 280);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!selectedImage) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedImage]);

  useEffect(() => {
    const updateActiveSection = () => {
      const offset = window.innerHeight * 0.24;
      for (const item of [...navItems].reverse()) {
        const section = document.getElementById(item.id);
        if (!section) continue;
        if (section.offsetTop <= window.scrollY + offset) {
          setActiveSection(item.id);
          break;
        }
      }
    };
    const onScroll = () => {
      if (scrollRafRef.current !== null) return;
      scrollRafRef.current = window.requestAnimationFrame(() => {
        updateActiveSection();
        scrollRafRef.current = null;
      });
    };
    updateActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollRafRef.current !== null) {
        window.cancelAnimationFrame(scrollRafRef.current);
      }
    };
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("jpatrickcompendio@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const floatingShapes = useMemo(
    () => [
      "left-[8%] top-[12%] h-20 w-20",
      "right-[10%] top-[20%] h-24 w-24",
      "right-[22%] bottom-[14%] h-16 w-16",
    ],
    [],
  );

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative overflow-x-clip bg-background text-foreground tech-grid-bg min-h-screen">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <AnimatePresence>
          {!mounted ? (
            <motion.div
              key="loader"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: premiumEase }}
              className="fixed inset-0 z-[100] grid place-items-center bg-[rgba(10,14,32,0.95)]"
            >
              <div className="flex flex-col items-center gap-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.3, repeat: Infinity, ease: "linear" }}
                  className="h-14 w-14 rounded-full border-2 border-royal border-t-transparent"
                />
                <span className="text-xs font-semibold tracking-wider text-white/70 uppercase">
                  Loading Portfolio...
                </span>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <AnimatePresence>
          {selectedImage ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[120] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
              role="dialog"
              aria-modal="true"
              aria-label="Project image preview"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.98, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/20 bg-black/40 shadow-2xl"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  className="absolute right-3 top-3 z-10 rounded-full border border-white/25 bg-black/60 p-2 text-white hover:bg-black/80 transition-colors"
                  aria-label="Close image preview"
                  onClick={() => setSelectedImage(null)}
                >
                  <X size={18} />
                </button>
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    sizes="100vw"
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="hero-glow absolute inset-0" />
          {!shouldReduceMotion &&
            floatingShapes.map((shape, index) => (
              <motion.div
                key={shape}
                animate={{
                  y: [0, index % 2 === 0 ? -14 : 16, 0],
                  x: [0, index % 2 === 0 ? 5 : -5, 0],
                }}
                transition={{
                  duration: 9 + index * 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={cn(
                  "absolute hidden rounded-full border border-white/30 bg-white/20 blur-[1px] backdrop-blur-sm sm:block dark:bg-white/5",
                  shape,
                )}
              />
            ))}
        </div>

        <header className="fixed inset-x-0 top-0 z-50 mx-auto mt-3 w-[min(95%,1120px)] sm:mt-4">
          <nav
            aria-label="Primary navigation"
            className="glass-card flex items-center justify-between rounded-2xl px-3.5 py-2.5 sm:px-5 sm:py-3 shadow-lg"
          >
            <a href="#hero" className="flex items-center gap-2 text-sm font-bold tracking-tight sm:text-base">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-royal text-white text-xs font-black">
                JP
              </span>
              <span>John Patrick Compendio</span>
            </a>
            
            <div className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={activeSection === item.id ? "page" : undefined}
                  className={cn(
                    "rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-300",
                    activeSection === item.id
                      ? "bg-royal text-white shadow-md shadow-royal/30"
                      : "hover:-translate-y-[1px] hover:bg-white/50 dark:hover:bg-white/10 text-muted hover:text-foreground",
                  )}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <div className="hidden lg:flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-500">
                <span className="pulse-badge h-2 w-2 rounded-full bg-emerald-500"></span>
                <span>Open for Roles</span>
              </div>
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setMobileMenu((prev) => !prev)}
                className="glass-card inline-flex h-10 w-10 items-center justify-center rounded-full md:hidden"
                aria-label="Toggle mobile menu"
              >
                {mobileMenu ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </nav>
          
          <AnimatePresence>
            {mobileMenu ? (
              <motion.div
                initial={{ opacity: 0, y: -14, scale: 0.98 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.28, ease: premiumEase }}
                className="glass-card mt-2 rounded-2xl p-3 md:hidden shadow-xl"
              >
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    aria-current={activeSection === item.id ? "page" : undefined}
                    onClick={() => setMobileMenu(false)}
                    className="block rounded-xl px-3.5 py-2.5 text-sm font-medium hover:bg-white/60 dark:hover:bg-white/10"
                  >
                    {item.label}
                  </a>
                ))}
              </motion.div>
            ) : null}
          </AnimatePresence>
        </header>

        <main id="main-content">
          <section
            id="hero"
            aria-labelledby="hero-title"
            className="relative scroll-mt-24 pb-12 pt-28 sm:pb-16 sm:pt-36 md:pb-20 md:pt-44"
          >
            <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-5 md:grid-cols-2 md:px-8">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 18 }}
                transition={{ duration: 0.9, ease: premiumEase }}
              >
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-royal/30 bg-royal/10 px-3.5 py-1 text-xs font-semibold text-royal">
                  <Sparkles size={14} />
                  <span>Full-Stack & Mobile Software Engineer</span>
                </div>

                <h1
                  id="hero-title"
                  className="max-w-[14ch] text-3xl font-extrabold leading-[1.06] tracking-tight sm:text-5xl md:text-6xl"
                >
                  John Patrick Robles Compendio
                </h1>

                <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                  Building high-performance web applications, scalable document management systems, and cross-platform mobile products with clean architecture.
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-medium text-muted">
                  <div className="flex items-center gap-1 text-foreground">
                    <MapPin size={14} className="text-royal" />
                    <span>Bulacan, Philippines</span>
                  </div>
                  <span className="text-white/30">•</span>
                  <div className="flex items-center gap-1 text-emerald-500 font-semibold">
                    <UserCheck size={14} />
                    <span>Available for Full-Time & Client Roles</span>
                  </div>
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <a
                    href="#projects"
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-royal px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(65,105,225,0.35)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_14px_30px_rgba(65,105,225,0.48)] sm:w-auto"
                  >
                    View Selected Projects
                    <ArrowDownRight size={16} />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/35 bg-white/55 px-7 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-[2px] hover:bg-white/80 dark:bg-white/10 dark:hover:bg-white/20 sm:w-auto"
                  >
                    Get In Touch
                  </a>
                </div>

                <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
                  {[
                    { label: "Projects", value: "5+ Built" },
                    { label: "Tech Stack", value: "10+ Core Skills" },
                    { label: "Engineering", value: "Clean Code" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="glass-card rounded-2xl px-3 py-3 text-center border-white/20"
                    >
                      <p className="text-[10px] uppercase tracking-wider font-semibold text-muted">
                        {item.label}
                      </p>
                      <p className="mt-1 text-xs font-bold text-royal md:text-sm">{item.value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: mounted ? 1 : 0, scale: mounted ? 1 : 0.95 }}
                transition={{ duration: 1, delay: 0.08, ease: premiumEase }}
                className="relative flex justify-center md:justify-end"
              >
                <div className="hero-portrait-frame relative w-full max-w-[min(100%,340px)] md:max-w-[380px]">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-3 rounded-[1.75rem] bg-[conic-gradient(from_140deg,rgba(65,105,225,0.55),rgba(255,255,255,0.35),rgba(65,105,225,0.45),rgba(65,105,225,0.2))] opacity-80 blur-md dark:opacity-60"
                  />
                  <div className="relative rounded-[1.35rem] border-[3px] border-royal/80 bg-gradient-to-br from-white via-white to-royal/15 p-[3px] shadow-[0_24px_48px_rgba(65,105,225,0.22),0_0_0_1px_rgba(255,255,255,0.6)_inset] dark:border-royal/50 dark:from-white/10 dark:via-white/5 dark:to-royal/25 dark:shadow-[0_24px_48px_rgba(0,0,0,0.45)]">
                    <div className="rounded-[1.15rem] border-2 border-white/90 bg-white/40 p-2 dark:border-white/15 dark:bg-white/5">
                      <div className="relative aspect-square overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-900/40">
                        <Image
                          src="/portfolio/hero-profile-2.jpg"
                          alt="John Patrick Robles Compendio, professional headshot"
                          fill
                          priority
                          quality={100}
                          sizes="(max-width: 768px) 92vw, (max-width: 1024px) 420px, 520px"
                          className="object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/40 bg-white/80 px-4 py-1.5 text-xs font-bold text-royal shadow-lg backdrop-blur-md dark:bg-slate-900/80 dark:border-white/20 whitespace-nowrap flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-emerald-500" />
                    <span>Full-Stack & Mobile Developer</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          <Section
            id="about"
            title="About Me"
            subtitle="Engineering practical, scalable solutions with high technical rigor."
          >
            <div className="grid gap-6 md:grid-cols-3">
              <div className="glass-card rounded-3xl p-6 sm:p-8 md:col-span-2 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold">Bridging UX Design & Robust Architecture</h3>
                  <p className="mt-4 text-sm leading-7 text-muted sm:text-base sm:leading-8">
                    I build full-stack web applications, mobile platforms, and desktop systems designed to solve real operational challenges. My technical approach balances clean component design, efficient state management, secure database schemas, and dependable performance.
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted sm:text-base sm:leading-8">
                    Whether architecting real-time document tracking systems, event booking checkout workflows, or cross-platform mobile tools with offline SQLite capabilities, I take pride in shipping software that is robust, maintainable, and built to scale.
                  </p>
                </div>
                
                <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  <span className="rounded-full bg-royal/10 px-3 py-1 text-xs font-semibold text-royal border border-royal/20">
                    Scalable Full-Stack
                  </span>
                  <span className="rounded-full bg-royal/10 px-3 py-1 text-xs font-semibold text-royal border border-royal/20">
                    Real-Time Databases
                  </span>
                  <span className="rounded-full bg-royal/10 px-3 py-1 text-xs font-semibold text-royal border border-royal/20">
                    Cross-Platform Mobile
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: Terminal,
                    title: "Web Platforms",
                    desc: "React, TypeScript, Next.js, Node.js, PHP, & Tailwind CSS",
                  },
                  {
                    icon: Zap,
                    title: "Mobile & Storage",
                    desc: "React Native, SQLite, & Firebase Cloud Datastores",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Systems & OOP",
                    desc: "Java Desktop Software, MySQL, & Clean Object Patterns",
                  },
                ].map((pillar) => (
                  <div key={pillar.title} className="glass-card rounded-2xl p-5 border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-royal/15 text-royal">
                        <pillar.icon size={20} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold">{pillar.title}</h4>
                        <p className="text-xs text-muted mt-0.5">{pillar.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          <Section
            id="skills"
            title="Technical Skills"
            subtitle="Modern tools, languages, and frameworks for end-to-end development."
          >
            <ul className="grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-5" aria-label="Technical skills">
              {skills.map((skill, index) => (
                <motion.li
                  key={skill.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.045, duration: 0.65, ease: premiumEase }}
                  className="glass-card glass-card-interactive flex flex-col items-center justify-center rounded-2xl p-4 text-center"
                >
                  <motion.div
                    className="inline-flex mb-2"
                    whileHover={
                      shouldReduceMotion
                        ? { scale: 1.04 }
                        : {
                            y: -4,
                            scale: 1.15,
                            filter: "drop-shadow(0 10px 14px rgba(65,105,225,0.28))",
                          }
                    }
                    transition={{ type: "spring", stiffness: 420, damping: 22 }}
                  >
                    <skill.icon className={`h-8 w-8 ${skill.color}`} />
                  </motion.div>
                  <span className="text-sm font-bold">{skill.name}</span>
                  <span className="mt-1 text-[10px] uppercase font-semibold tracking-wider text-muted">
                    {skill.category}
                  </span>
                </motion.li>
              ))}
            </ul>
          </Section>

          <Section
            id="experience"
            title="Work Experience"
            subtitle="Delivering independent, product-grade solutions for client requirements."
          >
            <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-10 relative overflow-hidden">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-royal text-white shadow-lg shadow-royal/30">
                    <BriefcaseBusiness size={22} />
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-royal/30 bg-royal/10 px-3 py-0.5 text-xs font-semibold text-royal">
                      Active Role
                    </span>
                    <h3 className="mt-1 text-2xl font-bold">Freelance Full-Stack Developer</h3>
                    <p className="text-sm font-semibold text-muted">Independent Software Engineering & Client Projects</p>
                  </div>
                </div>
                
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-royal bg-royal/10 px-3 py-1.5 rounded-full border border-royal/20 self-start">
                  2023 — Present
                </span>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
                {[
                  "Architected and deployed production web applications, document tracking systems, and mobile tools with modern frontend & backend stacks.",
                  "Integrated real-time datastores (Firebase), payment gateways (PayPal), and offline storage solutions (SQLite) tailored to specific client needs.",
                  "Engineered responsive user interfaces with Tailwind CSS and Framer Motion micro-interactions focused on intuitive usability.",
                  "Built desktop transaction & inventory tools in Java enforcing Object-Oriented Programming (OOP) principles.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-muted">
                    <CheckCircle2 size={16} className="text-royal shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          <Section
            id="projects"
            title="Featured Projects"
            subtitle="Selected full-stack web, mobile, and desktop applications."
          >
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {projects.map((project) => (
                <ProjectCard
                  key={project.name}
                  project={project}
                  onImageClick={setSelectedImage}
                />
              ))}
            </div>
          </Section>

          <Section
            id="certifications"
            title="Certifications & Credentials"
            subtitle="Recognized industry certifications and technical training."
          >
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-2">
              {certifications.map((certification) => (
                <article
                  key={certification.title}
                  className="glass-card glass-card-interactive rounded-3xl p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="project-thumb-frame relative aspect-[16/10] overflow-hidden rounded-2xl group">
                      <button
                        type="button"
                        className="absolute inset-0 cursor-zoom-in"
                        aria-label={`View ${certification.title} certificate`}
                        onClick={() =>
                          setSelectedImage({ src: certification.image, alt: certification.alt })
                        }
                      >
                        <Image
                          src={certification.image}
                          alt={certification.alt}
                          fill
                          sizes="(max-width: 1024px) 90vw, 30vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-200 group-hover:opacity-100 flex items-center justify-center">
                          <span className="rounded-full bg-white/20 p-2 text-white backdrop-blur-md">
                            <ExternalLink size={18} />
                          </span>
                        </div>
                      </button>
                    </div>
                    
                    <div className="mt-4 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-500">
                        <Award size={12} />
                        Verified Credential
                      </span>
                      <span className="text-xs font-semibold text-royal">{certification.issuer}</span>
                    </div>

                    <h3 className="mt-2 text-xl font-bold leading-tight">
                      {certification.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {certification.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </Section>

          <Section
            id="contact"
            title="Get In Touch"
            subtitle="Let's discuss full-time roles, software engineering opportunities, or projects."
          >
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold">Let's build something impactful together.</h3>
                  <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                    Whether you are looking to hire a dedicated full-stack developer, expand your team, or need a custom web or mobile solution, I am open to discussing new opportunities.
                  </p>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/30 p-3.5 dark:bg-white/5">
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-royal text-white shrink-0">
                        <Mail size={18} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] uppercase tracking-wider font-semibold text-muted">Direct Email</p>
                        <p className="text-sm font-bold truncate">jpatrickcompendio@gmail.com</p>
                      </div>
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="rounded-xl border border-royal/40 bg-royal/10 px-3 py-1.5 text-xs font-semibold text-royal hover:bg-royal hover:text-white transition-colors shrink-0 flex items-center gap-1.5"
                      >
                        {copiedEmail ? <Check size={14} /> : <Copy size={14} />}
                        <span>{copiedEmail ? "Copied!" : "Copy"}</span>
                      </button>
                    </div>

                    <a
                      href="https://github.com/JPatrickCompendio"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/30 p-3.5 dark:bg-white/5 hover:border-royal/50 transition-colors"
                    >
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-slate-800 text-white shrink-0 dark:bg-slate-700">
                        <FaGithub size={18} />
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-wider font-semibold text-muted">GitHub Profile</p>
                        <p className="text-sm font-bold">github.com/JPatrickCompendio</p>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-medium text-muted">
                  <Zap size={14} className="text-amber-500" />
                  <span>Average response time: &lt; 24 hours</span>
                </div>
              </div>

              <form className="glass-card rounded-3xl p-6 sm:p-8" aria-label="Contact form" onSubmit={(e) => e.preventDefault()}>
                <h3 className="text-xl font-bold">Send a Direct Message</h3>
                <div className="mt-5 space-y-4">
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold text-muted uppercase tracking-wider">Your Name</span>
                    <input
                      type="text"
                      placeholder="e.g. Alex Morgan"
                      autoComplete="name"
                      required
                      className="w-full rounded-xl border border-white/30 bg-white/60 px-4 py-3 text-sm outline-none transition focus:border-royal focus:ring-1 focus:ring-royal dark:bg-white/10"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold text-muted uppercase tracking-wider">Your Email</span>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      autoComplete="email"
                      required
                      className="w-full rounded-xl border border-white/30 bg-white/60 px-4 py-3 text-sm outline-none transition focus:border-royal focus:ring-1 focus:ring-royal dark:bg-white/10"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold text-muted uppercase tracking-wider">Message</span>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell me about your role, project, or requirements..."
                      className="w-full resize-none rounded-xl border border-white/30 bg-white/60 px-4 py-3 text-sm outline-none transition focus:border-royal focus:ring-1 focus:ring-royal dark:bg-white/10"
                    />
                  </label>
                  <button
                    type="submit"
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-royal px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-royal/30 transition-transform hover:scale-[1.01]"
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </Section>
        </main>

        <footer className="border-t border-white/10 pb-12 pt-8">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center text-sm text-muted sm:px-5 md:flex-row md:items-center md:justify-between md:px-8 md:text-left">
            <div>
              <p className="font-bold text-foreground">John Patrick Robles Compendio</p>
              <p className="text-xs text-muted mt-0.5">Full-Stack & Mobile Software Engineer</p>
            </div>
            
            <p className="text-xs text-balance">
              © {new Date().getFullYear()} John Patrick Compendio. Built with Next.js, React & Tailwind CSS.
            </p>

            <div className="flex items-center gap-4 text-xs font-semibold">
              <a href="mailto:jpatrickcompendio@gmail.com" className="hover:text-royal transition-colors">
                Email
              </a>
              <a
                href="https://github.com/JPatrickCompendio"
                target="_blank"
                rel="noreferrer"
                className="hover:text-royal transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}
