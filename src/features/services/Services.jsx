import {
  CalendarDays,
  ClipboardList,
  Keyboard,
  Mail,
  Paintbrush,
  Plane,
} from "lucide-react";

export default function Services() {
  const serviceBlocks = [
    {
      title: "Email Management",
      desc: "Organize inboxes using the Inbox\nZero method by labeling emails\nbased on priority. Automate\nresponses for repetitive inquiries\nand ensure time, professional\ncommunication with clients.",
      Icon: Mail,
    },
    {
      title: "Calendar Management",
      desc: "Organize executive calendars by\nscheduling meetings, managing\npriorities, resolving conflicts, and\ncoordinating across different time\nzones to ensure smooth and\nefficient scheduling.",
      Icon: CalendarDays,
    },
    {
      title: "Travel Management",
      desc: "Coordinate flights,\naccommodations, transportation,\nand travel itineraries while\nensuring schedules align with\nexecutive calendars and time\nzones.",
      Icon: Plane,
    },
    {
      title: "Admin Task",
      desc: "Handle day-to-day administrative\ntasks including document\nmanagement, file organization,\nreport preparation, and\noperation support to ensure\nsmooth business processes.",
      Icon: ClipboardList,
    },
    {
      title: "Basic Canva Design",
      desc: "Design simple graphics,\npresentations, and marketing\nmaterials using Canva while\nmaintaining a clean and\nprofessional brand style.",
      Icon: Paintbrush,
    },
    {
      title: "Data Entry",
      desc: "Accurately manage and organize\ndata in spreadsheets and\ndatabases while ensuring\naccuracy, consistency, and\nconfidentiality.",
      Icon: Keyboard,
    },
  ];

  return (
    <section
      id="services"
      className="py-20 px-6 bg-white/60 border-y border-primary/10"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold text-secondary mb-10"
        >
          What we can work on together
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch"
        >
          {serviceBlocks.map(({ title, desc }) => (
            <motion.div
              key={title}
              variants={{
                hidden: { opacity: 0, y: 18, scale: 0.98 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="bg-[#fbf8f1] border-2 border-secondary/90 rounded-2xl p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <motion.span
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/70 border border-secondary/15"
                >
                  <Icon className="h-5 w-5 text-secondary" aria-hidden="true" />
                </motion.span>
                <h3 className="text-secondary font-bold text-2xl leading-tight whitespace-pre-line">
                  {title}
                </h3>
              </div>

              <p className="mt-4 text-text-muted text-sm leading-relaxed whitespace-pre-line">
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
