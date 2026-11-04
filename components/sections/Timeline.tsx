import { timeline } from "@/lib/data";

export default function Timeline() {
  return (
    <section id="journey" className="section-padding relative">
      <div className="container">
        <div className="mb-16" data-aos="fade-up">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand-cyan">
            Journey
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Where I&apos;m <span className="text-gradient">headed</span>
          </h2>
        </div>

        <div className="relative mx-auto max-w-2xl">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-brand-blue via-brand-cyan to-transparent sm:left-1/2" />

          <div className="flex flex-col gap-10">
            {timeline.map((item, idx) => (
              <div
                key={item.title}
                data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
                className="relative pl-8 sm:pl-0"
              >
                <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-brand-cyan bg-base shadow-glow sm:left-1/2 sm:-translate-x-1/2" />

                <div
                  className={`sm:w-[calc(50%-2.5rem)] ${
                    idx % 2 === 0 ? "sm:mr-auto sm:text-right" : "sm:ml-auto"
                  }`}
                >
                  <div className="glass glass-hover rounded-2xl p-5">
                    <span className="font-mono text-xs uppercase tracking-widest text-brand-cyan">
                      {item.year}
                    </span>
                    <h3 className="mt-1 font-display text-lg font-semibold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-ink-faint">
                      {item.subtitle}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
