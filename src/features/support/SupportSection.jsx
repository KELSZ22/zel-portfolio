import { createElement } from "react";

export default function SupportSection({ section }) {
  const {
    id,
    kicker,
    heading,
    lead,
    details,
    highlight,
    features,
    imageSrc,
    imageAlt,
    footerText,
  } = section;

  return (
    <section id={id} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/40 border border-primary/10 rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-10 sm:p-12 lg:p-14">
              <p className="inline-flex items-center font-bold text-secondary text-lg sm:text-xl border-b-4 border-secondary/40 pb-2 mb-6">
                {kicker}
              </p>

              <h2 className="text-4xl sm:text-5xl font-bold text-text leading-tight">
                {heading}
              </h2>

              <p className="mt-6 text-text-muted leading-relaxed max-w-xl">
                {lead}
              </p>

              <p className="mt-5 text-text leading-relaxed max-w-xl">
                {details}
              </p>

              <div className="mt-8 inline-flex bg-primary/15 text-primary font-semibold italic px-4 py-3 rounded-md">
                {highlight}
              </div>

              <div className="mt-10 flex items-center gap-10 sm:gap-14">
                {features.map((f) => (
                  <div
                    key={f.key}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-primary/10 text-text flex items-center justify-center"
                    aria-label={f.label}
                    role="img"
                  >
                    {createElement(f.icon, { size: 28 })}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[260px] lg:min-h-full">
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div
                  className="w-full h-full bg-primary/10 flex items-center justify-center text-text-muted"
                  role="img"
                  aria-label={imageAlt || "Image placeholder"}
                >
                  <div className="text-center px-4">
                    <div className="text-sm font-semibold text-secondary mb-2">
                      Image Placeholder
                    </div>
                    <div className="text-xs">Add your support photo here</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-secondary text-white py-4 px-6 text-center font-medium">
            {footerText}
          </div>
        </div>
      </div>
    </section>
  );
}
