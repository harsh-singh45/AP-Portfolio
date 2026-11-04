"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Smartphone } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="container">
        <div className="mb-16" data-aos="fade-up">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand-cyan">
            Projects
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Things I&apos;ve <span className="text-gradient">built</span>
          </h2>
          <p className="mt-4 max-w-xl text-ink-muted">
            A selection of applications where I focused on clean UI, sensible
            architecture, and real functionality.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-7 backdrop-blur-xl transition-colors hover:border-white/[0.16]"
            >
              {/* Glow on hover */}
              <div
                className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${project.accent} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
              />

              <div className="mb-5 flex items-start justify-between">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${project.accent}`}
                >
                  <Smartphone className="h-5 w-5 text-white" />
                </div>
              </div>

              <h3 className="font-display text-xl font-semibold text-ink">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {project.description}
              </p>

              <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-1.5 text-xs text-ink-faint"
                  >
                    <CheckCircle2 className="h-3 w-3 flex-shrink-0 text-brand-cyan" />
                    <span className="truncate">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-white/[0.06] pt-5">
                {project.technology.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] text-ink-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
