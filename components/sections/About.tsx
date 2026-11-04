import { Code2, GraduationCap, Rocket } from "lucide-react";
import { personal } from "@/lib/data";

const highlights = [
  {
    icon: Code2,
    title: "Clean Architecture",
    desc: "I write scalable, maintainable Flutter code with a focus on clean structure.",
  },
  {
    icon: GraduationCap,
    title: "Always Learning",
    desc: "Practicing DSA and modern technologies to keep sharpening my engineering fundamentals.",
  },
  {
    icon: Rocket,
    title: "Ships Real Apps",
    desc: "From idea to a working, polished mobile app — I enjoy the full build cycle.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="container">
        <div className="mb-16" data-aos="fade-up">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand-cyan">
            About Me
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Turning ideas into <span className="text-gradient">working apps</span>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div data-aos="fade-right">
            <p className="text-lg leading-relaxed text-ink-muted">
              {personal.about}
            </p>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-ink-muted">
              <div>
                <span className="block font-display text-2xl font-bold text-ink">
                  4+
                </span>
                Projects Built
              </div>
              <div>
                <span className="block font-display text-2xl font-bold text-ink">
                  7+
                </span>
                Languages &amp; Tools
              </div>
              <div>
                <span className="block font-display text-2xl font-bold text-ink">
                  {personal.location.split(",")[0]}
                </span>
                Based In
              </div>
            </div>
          </div>

          <div
            className="grid gap-4 sm:grid-cols-1"
            data-aos="fade-left"
          >
            {highlights.map((item) => (
              <div
                key={item.title}
                className="glass glass-hover flex items-start gap-4 rounded-2xl p-5"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand-gradient-soft">
                  <item.icon className="h-5 w-5 text-brand-cyan" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
