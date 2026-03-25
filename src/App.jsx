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
  Menu,
  X,
} from "lucide-react";
import { createElement, useState, useEffect } from "react";
import { motion } from "framer-motion";

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

function SampleWorks() {
  const WORKS_URL = "https://drive.google.com/drive/folders/";

  const works = [
    {
      title: "Inbox Management",
      desc: "Organized and prioritized executive emails, filtering urgent items and drafting responses.",
      icon: Inbox,
      href: WORKS_URL,
    },
    {
      title: "Canva Designs",
      desc: "Created professional presentations, social media graphics, and branded materials.",
      icon: Palette,
      href: WORKS_URL,
    },
    {
      title: "Calendar Management",
      desc: "Coordinated complex schedules across multiple time zones with zero conflicts.",
      icon: CalendarDays,
      href: WORKS_URL,
    },
    {
      title: "Data Entry",
      desc: "Accurate and efficient data input, organization, and database maintenance.",
      icon: Database,
      href: WORKS_URL,
    },
    {
      title: "Letters & Documents",
      desc: "Drafted professional correspondence, memos, and official business letters.",
      icon: FileText,
      href: WORKS_URL,
    },
    {
      title: "Travel Management",
      desc: "End-to-end travel planning including flights, hotels, visas, and ground transport.",
      icon: Globe,
      href: WORKS_URL,
    },
    {
      title: "Itinerary Planning",
      desc: "Detailed day-by-day itineraries with activities, dining, and logistics.",
      icon: MapPin,
      href: WORKS_URL,
    },
    {
      title: "Reports & Summaries",
      desc: "Compiled data-driven reports, meeting summaries, and executive briefings.",
      icon: BarChart3,
      href: WORKS_URL,
    },
  ];

  return (
    <section id="works" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Sample Works"
          subtitle="A glimpse of the work I deliver for my clients"
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.06 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {works.map(({ title, desc, icon, href }) => (
            <motion.div
              key={title}
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl shadow-md shadow-black/5 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                {createElement(icon, { size: 22 })}
              </div>
              <h3 className="font-semibold text-text text-base mb-2">
                {title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed flex-1">
                {desc}
              </p>

              <a
                href={href || WORKS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded"
              >
                View Work
                <ExternalLink size={16} />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  const EMAIL_ADDRESS = "zeal.sabino@gmail.com";

  const contacts = [
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
      desc: "Message me directly",
    },
    {
      name: "Viber",
      icon: MessageCircle,
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

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          title="Get in Touch"
          subtitle="Let's work together — reach out through any of these platforms"
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.45 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.07 } },
          }}
          className="grid grid-cols-1 gap-3 sm:grid-cols-4 sm:gap-4"
        >
          {contacts.map((c) => (
            <motion.a
              key={c.name}
              href={c.link}
              target="_blank"
              rel={
                c.link.startsWith("http") ? "noopener noreferrer" : undefined
              }
              variants={{
                hidden: { opacity: 0, y: 16, scale: 0.99 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-xl shadow-md shadow-black/5 p-4 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className={`mx-auto w-12 h-12 rounded-full ${c.color} text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
              >
                <c.icon size={20} />
              </div>
              <h3 className="font-semibold text-text">{c.name}</h3>
              <p className="text-xs text-text-muted mt-1">{c.desc}</p>
            </motion.a>
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
        <a
          href="#hero"
          className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary-dark transition-colors font-medium"
        >
          Back to top
          <ChevronUp size={16} />
        </a>
      </div>
    </footer>
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
    </div>
  );
}
