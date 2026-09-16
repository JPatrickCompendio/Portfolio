"use client";

import Image from "next/image";
import { AnimatePresence, MotionConfig, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  BriefcaseBusiness,
  Code2,
  Link2,
  Mail,
  Menu,
  Moon,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTheme } from "@/components/theme-provider";
import {
  SiFirebase,
  SiJavascript,
  SiMongodb,
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
  { name: "React", icon: SiReact, color: "text-sky-500" },
  { name: "React Native", icon: SiReact, color: "text-cyan-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "PHP", icon: SiPhp, color: "text-indigo-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "MySQL", icon: SiMysql, color: "text-sky-600" },
  { name: "Firebase", icon: SiFirebase, color: "text-amber-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "MongoDB", icon: SiMongodb, color: "text-emerald-500" },
];

const projects = [
  {
    name: "EVENTORA",
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
    title: "JavaScript Essentials 1",
    image: "/portfolio/cert-js.png",
    alt: "Statement of Achievement for JavaScript Essentials 1",
    description:
      "Successfully completed JavaScript Essentials 1, building a strong foundation in core JavaScript concepts, including variables, data types, control structures, and problem-solving.",
  },
  {
    title: "Cisco Packet Tracer",
    image: "/portfolio/cert-cisco.png",
    alt: "Certificate for Getting Started with Cisco Packet Tracer",
    description:
      "Completed Cisco's Getting Started with Packet Tracer, developing foundational skills in network simulation, configuration, and basic networking concepts.",
  },
  {
    title: "BulSU TECHKNOWS x Accenture",
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
        <p className="mb-3 text-xs uppercase tracking-[0.24em] text-royal">
          {title}
        </p>
        {subtitle ? (
          <h2
            id={sectionHeadingId}
            className="max-w-3xl text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl"
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
      className="glass-card inline-flex h-11 w-11 items-center justify-center rounded-full"
      whileHover={{ y: -1, scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.3, ease: premiumEase }}
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
      className="glass-card group overflow-hidden rounded-3xl p-4 sm:p-5 md:p-6"
      whileHover={{ y: -4 }}
      whileTap={{ y: -2 }}
      style={{ willChange: "transform" }}
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-white/50 to-royal/10 p-2 sm:p-3 dark:from-white/10 dark:to-royal/20">
        <ul
          className="m-0 grid list-none grid-cols-2 gap-2 p-0"
          aria-label={`${project.name} screenshots`}
        >
          {project.gallery.map((item) => (
            <li key={item.src}>
              <motion.div
                className="project-thumb-frame relative aspect-square overflow-hidden rounded-lg"
                whileHover={
                  reduceMotion
                    ? { scale: 1.02 }
                    : {
                        scale: 1.06,
                        rotateZ: 2,
                        rotateX: 6,
                        rotateY: -5,
                        z: 12,
                        boxShadow: "0 18px 28px rgba(65,105,225,0.22)",
                      }
                }
                transition={{ type: "spring", stiffness: 520, damping: 28, mass: 0.35 }}
                style={{ transformStyle: "preserve-3d", perspective: 600 }}
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
                    className="object-cover"
                  />
                </button>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
      <h3 className="mt-4 text-xl font-semibold leading-tight sm:text-2xl">{project.name}</h3>
      <p className="mt-3 text-sm leading-6 sm:leading-7 text-muted">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-royal/40 bg-royal/10 px-3 py-1 text-xs text-royal"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-10 items-center gap-2 rounded-full border border-royal/60 bg-royal px-4 py-2 text-sm font-medium text-white transition hover:scale-[1.02] focus-visible:outline-offset-4"
          >
            <Link2 size={16} />
            GitHub
          </a>
        ) : (
          <span className="inline-flex min-h-10 items-center rounded-full border border-white/25 bg-white/40 px-4 py-2 text-sm text-muted dark:bg-white/10">
            Code available on request
          </span>
        )}
        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-10 items-center rounded-full border border-white/25 bg-white/50 px-4 py-2 text-sm transition hover:bg-white/80 dark:bg-white/10 dark:hover:bg-white/20"
          >
            Live Demo
          </a>
        ) : (
          <span className="inline-flex min-h-10 items-center rounded-full border border-white/20 px-4 py-2 text-sm opacity-55">
            Demo coming soon
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
    <div className="relative overflow-x-clip bg-background text-foreground">
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
            className="fixed inset-0 z-[100] grid place-items-center bg-[rgba(10,14,32,0.92)]"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.3, repeat: Infinity, ease: "linear" }}
              className="h-16 w-16 rounded-full border-2 border-royal border-t-transparent"
            />
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {selectedImage ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
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
              className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/25 bg-black/25"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="absolute right-3 top-3 z-10 rounded-full border border-white/25 bg-black/55 p-2 text-white hover:bg-black/75"
                aria-label="Close image preview"
                onClick={() => setSelectedImage(null)}
              >
                <X size={16} />
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
        {!shouldReduceMotion && floatingShapes.map((shape, index) => (
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

      <header className="fixed inset-x-0 top-0 z-50 mx-auto mt-3 w-[min(95%,1080px)] sm:mt-4 sm:w-[min(96%,1080px)]">
        <nav
          aria-label="Primary navigation"
          className="glass-card flex items-center justify-between rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 md:px-6"
        >
          <a href="#hero" className="text-sm font-semibold tracking-wide sm:text-base">
            John Patrick Compendio
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={activeSection === item.id ? "page" : undefined}
                className={cn(
                  "rounded-full px-3 py-2 text-sm transition-all duration-300",
                  activeSection === item.id
                    ? "bg-royal text-white"
                    : "hover:-translate-y-[1px] hover:bg-white/50 dark:hover:bg-white/10",
                )}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenu((prev) => !prev)}
              className="glass-card inline-flex h-11 w-11 items-center justify-center rounded-full md:hidden"
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
              className="glass-card mt-2 rounded-2xl p-2.5 md:hidden"
            >
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={activeSection === item.id ? "page" : undefined}
                  onClick={() => setMobileMenu(false)}
                  className="block rounded-xl px-3 py-2.5 text-sm hover:bg-white/60 dark:hover:bg-white/10"
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
          className="relative scroll-mt-24 pb-12 pt-28 sm:pb-14 sm:pt-32 md:pb-16 md:pt-44"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 sm:gap-10 sm:px-5 md:grid-cols-2 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 18 }}
              transition={{ duration: 0.9, ease: premiumEase }}
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-royal/30 bg-royal/10 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-royal sm:mb-5 sm:text-xs sm:tracking-[0.2em]">
                <Sparkles size={14} />
                Full-stack Developer
              </div>
              <h1
                id="hero-title"
                className="max-w-[14ch] text-3xl font-bold leading-[1.04] tracking-tight sm:text-4xl md:text-6xl"
              >
                John Patrick Robles Compendio
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:mt-6 sm:text-lg sm:leading-8 md:text-xl">
                I go beyond coding by creating scalable systems, apps, and web
                solutions that solve real problems.
              </p>
              <p className="mt-4 max-w-xl text-sm leading-6 text-muted sm:mt-5 sm:leading-7">
                I design and build full-stack, web, and mobile products with a
                strong focus on scalability, efficient architecture, and user
                experience that feels effortless from first click to delivery.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
                <a
                  href="#projects"
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-royal px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(65,105,225,0.35)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_14px_30px_rgba(65,105,225,0.42)] sm:min-h-0 sm:w-auto"
                >
                  View Projects
                  <ArrowDownRight size={16} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-white/35 bg-white/55 px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-[2px] hover:bg-white/80 dark:bg-white/10 dark:hover:bg-white/20 sm:min-h-0 sm:w-auto"
                >
                  Contact Me
                </a>
              </div>
              <div className="mt-6 grid max-w-xl grid-cols-1 gap-3 sm:mt-7 sm:grid-cols-3">
                {[
                  { label: "Core Focus", value: "Scalable Systems" },
                  { label: "Delivery", value: "Web + Mobile" },
                  { label: "Approach", value: "UX + Performance" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="glass-card rounded-2xl px-3 py-3 text-center"
                  >
                    <p className="text-[10px] uppercase tracking-wider text-muted">
                      {item.label}
                    </p>
                    <p className="mt-1 text-xs font-semibold md:text-sm">{item.value}</p>
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
                        src="/portfolio/hero-profile.png"
                        alt="John Patrick Robles Compendio, professional headshot"
                        fill
                        priority
                        quality={100}
                        sizes="(max-width: 768px) 92vw, (max-width: 1024px) 420px, 520px"
                        className="object-cover object-[center_15%]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Section
          id="about"
          title="About Me"
          subtitle="Engineering practical solutions for real-world impact."
        >
          <div className="glass-card grid gap-5 rounded-3xl p-5 sm:p-6 md:grid-cols-[1fr_auto] md:p-8">
            <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
              I enjoy building full-stack systems, web applications, and mobile
              apps that solve tangible problems. My approach combines clean
              architecture, scalable implementation, and intentional UX to
              deliver products that are robust, efficient, and genuinely useful.
            </p>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity }}
              className="grid h-14 w-14 place-items-center rounded-2xl border border-white/30 bg-royal/15 text-royal"
            >
              <Code2 />
            </motion.div>
          </div>
        </Section>

        <Section
          id="skills"
          title="Skills"
          subtitle="Modern technologies for scalable full-stack development."
        >
          <ul className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-5" aria-label="Technical skills">
            {skills.map((skill, index) => (
              <motion.li
                key={skill.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.045, duration: 0.65, ease: premiumEase }}
                className="glass-card aspect-square max-w-[130px] justify-self-center rounded-2xl p-2.5 text-xs font-medium sm:max-w-[140px] sm:p-3 sm:text-sm"
              >
                <div className="flex h-full flex-col items-center justify-center gap-2 text-center">
                  <motion.div
                    className="inline-flex"
                    whileHover={
                      shouldReduceMotion
                        ? { scale: 1.04 }
                        : {
                            y: -4,
                            scale: 1.18,
                            rotateX: 14,
                            rotateY: -16,
                            z: 20,
                            filter: "drop-shadow(0 10px 14px rgba(65,105,225,0.28))",
                          }
                    }
                    transition={{ type: "spring", stiffness: 420, damping: 22, mass: 0.45 }}
                    style={{ transformStyle: "preserve-3d", perspective: 900 }}
                  >
                    <skill.icon className={`h-7 w-7 ${skill.color}`} />
                  </motion.div>
                  <span className="leading-tight">{skill.name}</span>
                </div>
              </motion.li>
            ))}
          </ul>
        </Section>

        <Section
          id="experience"
          title="Experience"
          subtitle="Delivering independent projects with product-level quality."
        >
          <div className="glass-card rounded-3xl p-5 sm:p-6 md:p-8">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-royal text-white">
                <BriefcaseBusiness size={18} />
              </div>
              <h3 className="text-xl font-semibold sm:text-2xl">Freelance Developer</h3>
            </div>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-muted sm:leading-7">
              Designed and delivered web, mobile, and full-stack solutions for
              evolving client needs, with focus on maintainable code, measurable
              business outcomes, and dependable project execution.
            </p>
          </div>
        </Section>

        <Section
          id="projects"
          title="Projects"
          subtitle="Selected builds focused on impact, usability, and scale."
        >
          <div className="grid gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6">
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
          title="Certifications"
          subtitle="Recognized training and learning milestones."
        >
          <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
            {certifications.map((certification) => (
              <article
                key={certification.title}
                className="glass-card rounded-3xl p-4 sm:p-5"
              >
                <div className="project-thumb-frame relative aspect-[16/10] overflow-hidden rounded-xl">
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
                      className="object-cover"
                    />
                  </button>
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-tight">
                  {certification.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {certification.description}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="contact"
          title="Contact"
          subtitle="Let's collaborate on your next web or mobile product."
        >
          <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
            <div className="glass-card rounded-3xl p-5 sm:p-6 md:p-8">
              <h3 className="text-xl font-semibold sm:text-2xl">Open to freelance work</h3>
              <p className="mt-3 text-sm leading-6 text-muted sm:leading-7">
                If you need a developer who can ship robust, user-focused
                solutions from frontend to backend, I would be glad to connect.
              </p>
              <div className="mt-5 space-y-3 text-sm sm:mt-6">
                <a
                  href="mailto:jpatrickcompendio@gmail.com"
                  className="inline-flex items-start gap-2 break-all hover:text-royal"
                >
                  <Mail size={16} />
                  jpatrickcompendio@gmail.com
                </a>
                <a
                  href="https://github.com/JPatrickCompendio"
                  target="_blank"
                  rel="noreferrer"
                  className="block break-all hover:text-royal"
                >
                  <span className="inline-flex items-center gap-2">
                    <Link2 size={16} />
                    github.com/JPatrickCompendio
                  </span>
                </a>
              </div>
            </div>

            <form className="glass-card rounded-3xl p-5 sm:p-6 md:p-8" aria-label="Contact form">
              <h3 className="text-xl font-semibold">Send a message</h3>
              <div className="mt-5 space-y-4">
                <label className="block">
                  <span className="mb-2 block text-sm text-muted">Name</span>
                  <input
                    type="text"
                    placeholder="Your name"
                    autoComplete="name"
                    className="w-full rounded-xl border border-white/30 bg-white/55 px-4 py-3 text-sm outline-none transition focus:border-royal dark:bg-white/10"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm text-muted">Email</span>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    className="w-full rounded-xl border border-white/30 bg-white/55 px-4 py-3 text-sm outline-none transition focus:border-royal dark:bg-white/10"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm text-muted">Message</span>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full resize-none rounded-xl border border-white/30 bg-white/55 px-4 py-3 text-sm outline-none transition focus:border-royal dark:bg-white/10"
                  />
                </label>
                <button
                  type="button"
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-royal px-5 py-2.5 text-sm font-semibold text-white sm:w-auto"
                >
                  <Send size={16} />
                  Submit (UI Placeholder)
                </button>
              </div>
            </form>
          </div>
        </Section>
      </main>

      <footer className="border-t border-white/20 pb-12 pt-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 text-center text-sm text-muted sm:px-5 md:flex-row md:items-center md:justify-between md:px-8 md:text-left">
          <p className="text-balance">John Patrick Robles Compendio</p>
          <p className="text-balance">Building meaningful software with scalable engineering.</p>
          <div className="flex items-center gap-4">
            <a href="mailto:jpatrickcompendio@gmail.com" className="hover:text-royal">
              Email
            </a>
            <a
              href="https://github.com/JPatrickCompendio"
              target="_blank"
              rel="noreferrer"
              className="hover:text-royal"
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
