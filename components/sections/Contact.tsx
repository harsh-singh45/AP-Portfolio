import { Mail, Phone, MapPin, Github } from "lucide-react";
import { personal } from "@/lib/data";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone.replace(/\s+/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: personal.location,
    href: undefined,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative">
      <div className="container">
        <div
          className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] px-6 py-16 backdrop-blur-xl sm:px-16"
          data-aos="zoom-in"
        >
          <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand-blue/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-brand-cyan/15 blur-[100px]" />

          <div className="relative mx-auto max-w-2xl text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand-cyan">
              Contact
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
              Let&apos;s build something <span className="text-gradient">great</span>
            </h2>
            <p className="mt-4 text-ink-muted">
              I&apos;m currently open to internship and software development
              opportunities. Reach out — I&apos;d love to hear about what
              you&apos;re working on.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {contactMethods.map((method) => {
                const Wrapper = method.href ? "a" : "div";
                return (
                  <Wrapper
                    key={method.label}
                    {...(method.href ? { href: method.href } : {})}
                    className="glass glass-hover flex flex-col items-center gap-2 rounded-2xl px-4 py-6 text-center"
                  >
                    <method.icon className="h-5 w-5 text-brand-cyan" />
                    <span className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">
                      {method.label}
                    </span>
                    <span className="break-all text-sm text-ink">
                      {method.value}
                    </span>
                  </Wrapper>
                );
              })}
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex h-12 items-center justify-center rounded-full bg-brand-gradient px-8 text-sm font-medium text-white shadow-glow transition-transform hover:scale-105"
              >
                Say Hello
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-8 text-sm font-medium text-ink transition-colors hover:border-white/30 hover:bg-white/[0.06]"
              >
                <Github className="h-4 w-4" />
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
