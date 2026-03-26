import {
  User,
  Wrench,
  Plane,
  ExternalLink,
  FolderOpen,
  Mail,
  Inbox,
  Palette,
  CalendarDays,
  Database,
  FileText,
  Globe,
  MapPin,
  BarChart3,
  Phone,
  MessageCircle,
  Camera,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { createElement, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Hero from "./features/hero/Hero.jsx";
import SupportSection from "./features/support/SupportSection.jsx";
import Services from "./features/services/Services.jsx";
import supportImage from "./assets/zel-image.png";

const NAV_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#works", label: "Works" },
  { href: "#contact", label: "Contact" },
];

const EMAIL_ADDRESS = "zeal.sabino@gmail.com";

const CONTACTS = [
  {
    name: "Email",
    icon: Mail,
    link: `mailto:${EMAIL_ADDRESS}`,
    color: "bg-secondary",
    desc: EMAIL_ADDRESS,
  },
  {
    name: "WhatsApp",
    icon: Phone,
    link: "https://wa.me/639762634387",
    color: "bg-green-500",
    desc: "0919-971-8724",
  },
  {
    name: "Viber",
    icon: Phone,
    link: "viber://chat?number=%2B639199718724",
    color: "bg-purple-500",
    desc: "0919-971-8724",
  },
  {
    name: "Instagram",
    icon: Camera,
    link: "https://www.instagram.com/zelsbn?igsh=MTFhYjlndjhvdGh2cA==",
    color: "bg-pink-500",
    desc: "Follow my journey",
  },
];

// eslint doesn't always count JSX member usage (e.g. <motion.div />) as a reference.
// Keeping an uppercase alias avoids false-positive "unused import" errors.
const Motion = motion;

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream/95 shadow-md backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="text-xl font-bold text-primary tracking-wide"
        >
          ZEL SBN<span className="text-text"></span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-text-muted hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-text-muted inline-flex items-center justify-center h-10 w-10 rounded-xl hover:bg-primary/5 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <>
          <button
            className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-[1px]"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
          <Motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="md:hidden absolute left-4 right-4 top-[72px] bg-cream/98 backdrop-blur-md border border-primary/10 rounded-2xl shadow-lg shadow-black/10 p-2"
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-text-muted hover:text-primary hover:bg-white/60 transition-colors"
              >
                <span>{l.label}</span>
                <span className="text-primary/40">→</span>
              </a>
            ))}
          </Motion.div>
        </>
      )}
    </nav>
  );
}

function SectionHeading({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.7 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-text">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-text-muted max-w-xl mx-auto">{subtitle}</p>
      )}
      <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-primary" />
    </motion.div>
  );
}

function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="About Me"
          subtitle="Getting to know the person behind the work"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-3xl shadow-lg shadow-black/5 p-8 md:p-12"
        >
          <p className="text-text-muted leading-relaxed text-base md:text-lg">
            I am a highly organized and detail-oriented Executive Assistant with
            2 years and 7 months of hands-on experience in providing
            comprehensive administrative support to executives and teams. My
            expertise includes managing complex calendars, coordinating travel
            arrangements, handling correspondence, preparing reports, and
            streamlining day-to-day operations. I thrive in fast-paced
            environments and am passionate about anticipating needs, solving
            problems proactively, and ensuring seamless workflow. With strong
            communication skills and a commitment to confidentiality, I bring
            professionalism and efficiency to every task I undertake.
          </p>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.06 } },
            }}
            className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { label: "Calendar Mgmt", icon: CalendarDays },
              { label: "Travel Coordination", icon: Plane },
              { label: "Correspondence", icon: Mail },
              { label: "Report Preparation", icon: BarChart3 },
            ].map(({ label, icon }) => (
              <motion.div
                key={label}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="flex items-center gap-2 bg-cream rounded-xl px-4 py-3"
              >
                {createElement(icon, {
                  size: 18,
                  className: "text-primary shrink-0",
                })}
                <span className="text-sm font-medium text-text">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const carouselVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 280 : -280,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({
    x: direction < 0 ? 280 : -280,
    opacity: 0,
  }),
};

const WORKS_URL = "https://drive.google.com/drive/folders/";

const WORKS = [
  {
    title: "Inbox Management",
    desc: "Organized and prioritized executive emails with efficient filtering and timely responses.",
    icon: Inbox,
    gradient: "from-amber-50 to-orange-100",
    iconColor: "bg-amber-500",
    href: WORKS_URL,
  },
  {
    title: "Canva Designs",
    desc: "Created professional presentations, social media graphics, and branded materials.",
    icon: Palette,
    gradient: "from-pink-50 to-rose-100",
    iconColor: "bg-pink-500",
    href: WORKS_URL,
  },
  {
    title: "Calendar Management",
    desc: "Coordinated complex schedules across multiple time zones with zero conflicts.",
    icon: CalendarDays,
    gradient: "from-blue-50 to-indigo-100",
    iconColor: "bg-blue-500",
    href: WORKS_URL,
  },
  {
    title: "Data Entry",
    desc: "Accurate and efficient data input, organization, and database maintenance.",
    icon: Database,
    gradient: "from-emerald-50 to-teal-100",
    iconColor: "bg-emerald-500",
    href: WORKS_URL,
  },
  {
    title: "Letters & Documents",
    desc: "Drafted professional correspondence, memos, and official business letters.",
    icon: FileText,
    gradient: "from-violet-50 to-purple-100",
    iconColor: "bg-violet-500",
    href: WORKS_URL,
  },
  {
    title: "Travel Management",
    desc: "End-to-end travel planning including flights, hotels, visas, and ground transport.",
    icon: Globe,
    gradient: "from-cyan-50 to-sky-100",
    iconColor: "bg-cyan-500",
    href: WORKS_URL,
  },
  {
    title: "Itinerary Planning",
    desc: "Detailed day-by-day itineraries with activities, dining, and logistics.",
    icon: MapPin,
    gradient: "from-lime-50 to-green-100",
    iconColor: "bg-lime-600",
    href: WORKS_URL,
  },
  {
    title: "Reports & Summaries",
    desc: "Compiled data-driven reports, meeting summaries, and executive briefings.",
    icon: BarChart3,
    gradient: "from-orange-50 to-amber-100",
    iconColor: "bg-orange-500",
    href: WORKS_URL,
  },
];

function SampleWorks() {
  const [[page, direction], setPage] = useState([0, 0]);

  const works = WORKS;

  const workIndex = ((page % works.length) + works.length) % works.length;
  const work = works[workIndex];

  const paginate = useCallback((dir) => {
    setPage(([prev]) => [prev + dir, dir]);
  }, []);

  const goToSlide = useCallback(
    (idx) => {
      setPage(([prev]) => {
        const currentIdx =
          ((prev % works.length) + works.length) % works.length;
        return [idx, idx > currentIdx ? 1 : -1];
      });
    },
    [works.length],
  );

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, [page, paginate]);

  return (
    <section id="works" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Sample Works"
          subtitle="A glimpse of the work I deliver for my clients"
        />

        <div className="relative">
          <div className="overflow-hidden rounded-3xl bg-white shadow-lg shadow-black/5">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={page}
                custom={direction}
                variants={carouselVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex flex-col md:flex-row"
              >
                <div
                  className={`relative flex items-center justify-center bg-linear-to-br ${work.gradient} md:w-1/2 aspect-4/3 md:aspect-auto md:min-h-[340px]`}
                >
                  <div
                    className={`${work.iconColor} w-20 h-20 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-black/10`}
                  >
                    {createElement(work.icon, { size: 36 })}
                  </div>
                  <span className="absolute bottom-4 right-4 text-xs font-medium text-text-muted/50 tracking-wide uppercase">
                    {workIndex + 1} / {works.length}
                  </span>
                </div>

                <div className="flex flex-col justify-center p-8 md:p-10 md:w-1/2">
                  <h3 className="text-2xl font-bold text-text mb-3">
                    {work.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed">{work.desc}</p>
                  <a
                    href={work.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded"
                  >
                    View Work
                    <ExternalLink size={16} />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={() => paginate(-1)}
            className="absolute left-2 md:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md shadow-black/10 flex items-center justify-center text-text-muted hover:text-primary hover:shadow-lg transition-all cursor-pointer"
            aria-label="Previous work"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-2 md:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md shadow-black/10 flex items-center justify-center text-text-muted hover:text-primary hover:shadow-lg transition-all cursor-pointer"
            aria-label="Next work"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {works.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === workIndex
                  ? "bg-primary w-7"
                  : "bg-primary/25 hover:bg-primary/40 w-2.5"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="hidden md:block py-20 px-6 bg-white border-y border-primary/10"
    >
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          title="Get in Touch"
          subtitle="A few quick ways to reach me"
        />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="rounded-2xl border border-primary/10 overflow-hidden"
        >
          {CONTACTS.map((c, idx) => (
            <a
              key={c.name}
              href={c.link}
              target="_blank"
              rel={
                c.link.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className={`flex items-center gap-4 px-5 py-4 transition-colors hover:bg-cream/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                idx !== CONTACTS.length - 1 ? "border-b border-primary/10" : ""
              }`}
            >
              <span
                className={`w-10 h-10 rounded-xl ${c.color} text-white inline-flex items-center justify-center shrink-0`}
                aria-hidden="true"
              >
                <c.icon size={18} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold text-text">
                  {c.name}
                </span>
                <span className="block text-sm text-text-muted truncate">
                  {c.desc}
                </span>
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-primary/10">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-muted">
          &copy; {new Date().getFullYear()} Zel. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY || 0);
      setShowTop(window.scrollY > 420);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const contactOpacity = scrollY > 80 ? 1 : 0.8;

  useEffect(() => {
    if (!contactOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setContactOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [contactOpen]);

  useEffect(() => {
    if (!contactOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [contactOpen]);

  return (
    <div className="fixed right-5 bottom-5 z-50 flex flex-col gap-3">
      {/* Mobile contact FAB */}
      <motion.button
        type="button"
        onClick={() => setContactOpen((v) => !v)}
        initial={false}
        animate={{ opacity: contactOpacity }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className="md:hidden fixed right-5 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white shadow-lg shadow-black/15 hover:bg-primary-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        aria-label="Open contact options"
        aria-haspopup="dialog"
        aria-expanded={contactOpen}
      >
        <Mail size={18} />
      </motion.button>

      {/* Mobile contact menu (icon-only) */}
      <AnimatePresence>
        {contactOpen && (
          <>
            <motion.button
              type="button"
              className="md:hidden fixed inset-0 bg-black/35 backdrop-blur-[1px]"
              aria-label="Close contact options"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setContactOpen(false);
              }}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Contact options"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="md:hidden fixed right-5 top-1/2 -translate-y-1/2 flex flex-col gap-3"
            >
              {CONTACTS.map((c, idx) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{
                    duration: 0.16,
                    ease: "easeOut",
                    delay: idx * 0.04,
                  }}
                  className="relative"
                >
                  <motion.div
                    initial={{ opacity: 0, x: 6, scale: 0.98 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 6, scale: 0.98 }}
                    transition={{
                      duration: 0.14,
                      ease: "easeOut",
                      delay: idx * 0.04 + 0.02,
                    }}
                    className="pointer-events-none absolute right-[calc(100%+0.75rem)] top-1/2 -translate-y-1/2 w-44 rounded-xl bg-cream/95 backdrop-blur-md border border-primary/10 shadow-lg shadow-black/15 px-3 py-2 text-text"
                  >
                    <div className="text-[10px] font-bold tracking-wide uppercase text-text-muted">
                      {c.name}
                    </div>
                    <div className="text-xs font-semibold leading-snug wrap-break-word">
                      {c.desc}
                    </div>
                  </motion.div>

                  <a
                    href={c.link}
                    target="_blank"
                    rel={
                      c.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    onClick={() => setContactOpen(false)}
                    className={`w-12 h-12 rounded-full ${c.color} text-white inline-flex items-center justify-center shadow-lg shadow-black/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent`}
                    aria-label={c.name}
                    title={c.desc}
                  >
                    <c.icon size={18} />
                  </a>
                </motion.div>
              ))}

              <motion.button
                type="button"
                onClick={() => setContactOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{
                  duration: 0.16,
                  ease: "easeOut",
                  delay: CONTACTS.length * 0.04,
                }}
                className="w-12 h-12 rounded-full bg-white/90 text-text-muted inline-flex items-center justify-center border border-primary/10 shadow-lg shadow-black/10 hover:bg-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                aria-label="Close contact options"
              >
                <X size={18} />
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Back-to-top FAB */}
      <motion.a
        href="#hero"
        aria-label="Back to top"
        initial={false}
        animate={{
          opacity: showTop ? 1 : 0,
          y: showTop ? 0 : 10,
          pointerEvents: showTop ? "auto" : "none",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-primary shadow-lg shadow-black/15 border border-primary/15 hover:border-primary/30 hover:shadow-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
      >
        <ChevronUp size={20} />
      </motion.a>
    </div>
  );
}

const supportSection = {
  id: "support",
  kicker: "Focus on What Matters Most",
  heading: "You don't have to do this alone.",
  lead: "Running executive operations can be demanding - but you don't have to manage everything alone.",
  details:
    "I provide reliable executive support by handling calendar management, meeting coordination, travel arrangements, and administrative tasks - ensuring your day runs smoothly and efficiently.",
  highlight: "Your time is valuable. I help you make the most of it.",
  imageSrc: supportImage,
  imageAlt: "Executive assistant supporting you",
  footerText:
    "Supporting executives with efficiency, discretion, and professionalism.",
  features: [
    { key: "calendar", label: "Calendar management", icon: CalendarDays },
    { key: "travel", label: "Travel arrangements", icon: Plane },
    { key: "correspondence", label: "Correspondence", icon: Mail },
  ],
};

export default function App() {
  return (
    <div className="font-sans bg-cream min-h-screen">
      <Navbar />
      <Hero />
      <SupportSection section={supportSection} />
      <Services />
      <SampleWorks />
      <Contact />
      <Footer />
      <FloatingActions />
    </div>
  );
}
