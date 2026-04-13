import { Briefcase, FileText, FolderOpen, Mail } from "lucide-react";
import { motion } from "framer-motion";

import zelImage from "../../assets/zel.webp";
import googleWorkspaceLogo from "../../assets/google workspace.webp";
import officeLogo from "../../assets/office.png";
import outlookLogo from "../../assets/outlook.webp";
import slackLogo from "../../assets/Slack.png";
import notionLogo from "../../assets/notion.png";
import canvaLogo from "../../assets/canva.jpg";
import asanaLogo from "../../assets/asana.png";

// eslint doesn't always count JSX member usage (e.g. <motion.div />) as a reference.
// Keeping an uppercase alias avoids false-positive "unused import" errors.
const Motion = motion;

export default function Hero() {
  const tools = [
    { name: "Workspace", imageSrc: googleWorkspaceLogo },
    { name: "MS Office", imageSrc: officeLogo },
    { name: "Outlook", imageSrc: outlookLogo },
    { name: "Slack", imageSrc: slackLogo },
    { name: "Notion", imageSrc: notionLogo },
    { name: "Canva", imageSrc: canvaLogo },
    { name: "Asana", imageSrc: asanaLogo },
  ];
  const skills = [
    "Time management",
    "Multitasking",
    "Problem solving",
    "Attention to detail",
  ];
  const toolFooterTraits = ["Adaptable", "Quick learner"];

  return (
    <section
      id="hero"
      className="relative isolate min-h-svh px-6 pt-20 pb-0 sm:pb-14 bg-white/40 border-b border-primary/10 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(900px circle at 12% 10%, rgba(206, 169, 114, 0.25), transparent 60%), radial-gradient(700px circle at 88% 30%, rgba(60, 75, 102, 0.16), transparent 55%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[720px] -translate-x-1/2 rotate-12 rounded-[48px] bg-primary/10 blur-2xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-secondary/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-linear-to-b from-transparent to-cream"
        aria-hidden="true"
      />

      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
        }}
        className="relative z-10 max-w-6xl mx-auto w-full grid gap-8 lg:grid-cols-2 items-center lg:gap-[120px]"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left order-1 lg:order-1 mt-0"
        >
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="order-1 lg:order-2 text-4xl sm:text-5xl md:text-6xl font-bold text-text leading-tight"
            >
              Hi, I'm <span className="text-primary">Zel</span>
            </motion.h1>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="order-2 lg:order-1 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs sm:text-sm font-medium text-primary mt-4 lg:mt-0 mb-0 lg:mb-6"
            >
              <Briefcase size={16} />
              Executive Assistant & Administrative Support
            </motion.div>
          </div>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mt-6 text-lg md:text-xl text-text-muted leading-relaxed max-w-2xl mx-auto lg:mx-0"
            style={{ textAlign: "justify" }}
          >
            I’m an Executive Assistant with{" "}
            <span className="font-semibold text-primary">
              2 years and 7 months
            </span>{" "}
            of corporate experience supporting operations and administrative
            tasks. I specialize in inbox management, calendar management, travel
            planning, and administrative support to help executives stay
            organized and productive. I also assist with data entry, document
            organization, and basic Canva design for presentations and simple
            visual materials.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-7"
          >
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.05 } },
              }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2"
            >
              {skills.map((s) => (
                <motion.span
                  key={s}
                  variants={{
                    hidden: { opacity: 0, y: 8, scale: 0.98 },
                    show: { opacity: 1, y: 0, scale: 1 },
                  }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="inline-flex items-center rounded-full bg-white/70 border border-primary/10 px-3 py-1 text-xs font-semibold text-text shadow-sm shadow-black/5"
                >
                  {s}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 16, scale: 0.98 },
            show: { opacity: 1, y: 0, scale: 1 },
          }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto lg:mx-0 w-full max-w-[220px] sm:max-w-[280px] lg:max-w-sm order-2 lg:order-2 mt-8 lg:mt-0"
        >
          <div
            className="absolute -inset-4 bg-primary/10 rounded-3xl blur-sm"
            aria-hidden="true"
          />
          <motion.img
            src={zelImage}
            alt="Zel portrait"
            className="relative w-full aspect-4/5 object-cover rounded-3xl shadow-lg shadow-black/10"
            initial={{ scale: 1.03 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
            className="absolute left-1/2 -bottom-6 -translate-x-1/2 w-[calc(100vw-3rem)] max-w-md sm:w-[calc(100%-1.5rem)] sm:max-w-none"
          >
            <div className="bg-cream/90 backdrop-blur-md border border-primary/10 rounded-md shadow-lg shadow-black/15 px-3 py-5">
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://drive.google.com/file/d/1u_KwJikXgOfWFQoOPDUZ2v_-nGpXvqG0/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary hover:text-primary-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded"
                >
                  <Mail size={16} />
                  Resume
                </motion.a>
                <span
                  className="hidden sm:block h-4 w-px bg-primary/15"
                  aria-hidden="true"
                />
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://drive.google.com/file/d/1OczC_WjpcHz8rSQ8f4xS8u30JldHDvvF/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary hover:text-primary-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded"
                >
                  <FileText size={16} />
                  Cover letter
                </motion.a>
                <span
                  className="hidden sm:block h-4 w-px bg-primary/15"
                  aria-hidden="true"
                />
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://drive.google.com/file/d/1yWJkNIs0r5OAxfI_RFSow6USZB1SInjX/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary hover:text-primary-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded"
                >
                  <FileText size={16} />
                  Certificate
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut", delay: 0.25 }}
        className="relative z-10 max-w-6xl mx-auto w-full mt-12"
      >
        <div className="bg-cream/70 backdrop-blur-md border border-primary/10 rounded-2xl shadow-lg shadow-black/5 p-1.5 sm:p-2">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.05 } },
            }}
            className="grid grid-cols-3 sm:grid-cols-6 gap-2"
          >
            {tools.map((t) => (
              <motion.div
                key={t.name}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="relative overflow-visible w-full h-20 sm:h-22 rounded-xl border border-primary/10 px-1.5 py-2 flex flex-col items-center justify-center gap-1"
                aria-label={t.name}
                title={t.name}
                role="img"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                  {t.imageSrc ? (
                    <img
                      src={t.imageSrc}
                      alt={`${t.name} logo`}
                      className="w-10 h-10 object-contain"
                      loading="lazy"
                    />
                  ) : (
                    t.icon
                  )}
                </div>
                <div className="text-[10px] sm:text-[11px] font-semibold text-text-muted leading-tight text-center px-1 line-clamp-2">
                  {t.name}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.45 }}
            className="mt-3 px-1 pb-1 text-center"
          >
            <p className="text-xs sm:text-sm font-semibold text-text-muted">
              {toolFooterTraits.join(" & ")}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
