import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="container">
        <div className="mb-16" data-aos="fade-up">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand-cyan">
            Skills
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            My <span className="text-gradient">toolkit</span>
          </h2>
          <p className="mt-4 max-w-xl text-ink-muted">
            Technologies and concepts I reach for when building mobile
            applications and backend services.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, idx) => (
            <div
              key={category.title}
              data-aos="fade-up"
              data-aos-delay={idx * 80}
              className="glass glass-hover group rounded-2xl p-6"
            >
              <h3 className="font-display text-base font-semibold text-ink">
                {category.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-ink-muted transition-colors group-hover:border-brand-blue/30 group-hover:text-ink"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
