"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, Github, Mail } from "lucide-react";
import { personal, typingRoles } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <div className="container grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-brand-cyan"
          >
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-brand-cyan" />
            Open to internships &amp; SDE roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m {personal.name.split(" ")[0]}
            <br />
            <span className="text-gradient">
              <TypeAnimation
                sequence={typingRoles}
                wrapper="span"
                speed={45}
                repeat={Infinity}
                cursor
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg"
          >
            {personal.tagline} Based in {personal.location}, currently
            exploring internship and software development opportunities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-gradient px-7 text-sm font-medium text-white shadow-glow transition-transform hover:scale-105"
            >
              View Projects
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-7 text-sm font-medium text-ink transition-colors hover:border-white/30 hover:bg-white/[0.06]"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-ink-muted transition-colors hover:border-white/30 hover:text-ink"
              aria-label="Email Kavy"
            >
              <Mail className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-14 hidden items-center gap-3 text-xs font-mono text-ink-faint sm:flex"
          >
            <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
            scroll to explore
          </motion.div>
        </div>

        {/* Right: signature element — floating phone mockup of a mini Flutter UI */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-[320px]"
        >
          <div className="animate-float-slow">
            <PhoneMockup />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto aspect-[9/19] w-[280px] rounded-[2.5rem] border-4 border-white/10 bg-base-elevated p-2 shadow-glow-lg">
      <div className="absolute left-1/2 top-2 h-5 w-24 -translate-x-1/2 rounded-full bg-black/60" />
      <div className="glass h-full w-full overflow-hidden rounded-[2rem] p-4">
        {/* Fake app bar */}
        <div className="mb-6 flex items-center justify-between pt-4">
          <div className="h-2.5 w-16 rounded-full bg-white/20" />
          <div className="h-6 w-6 rounded-full bg-brand-gradient" />
        </div>

        {/* Fake counter widget card */}
        <div className="mb-4 rounded-2xl bg-brand-gradient-soft p-5">
          <div className="mb-2 h-2 w-20 rounded-full bg-white/30" />
          <div className="font-display text-3xl font-bold text-gradient">42</div>
          <div className="mt-1 h-1.5 w-28 rounded-full bg-white/15" />
        </div>

        {/* Fake list items */}
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="mb-3 flex items-center gap-3 rounded-xl bg-white/[0.04] p-3"
          >
            <div className="h-8 w-8 flex-shrink-0 rounded-lg bg-gradient-to-br from-brand-blue/60 to-brand-cyan/60" />
            <div className="flex-1">
              <div className="mb-1.5 h-2 w-3/4 rounded-full bg-white/20" />
              <div className="h-1.5 w-1/2 rounded-full bg-white/10" />
            </div>
          </div>
        ))}

        {/* Fake floating action button */}
        <div className="absolute bottom-6 right-6 flex h-11 w-11 items-center justify-center rounded-full bg-brand-gradient shadow-glow">
          <span className="text-lg font-bold text-white leading-none">+</span>
        </div>
      </div>

      {/* Orbiting badge — Dart/Flutter motif */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="glass absolute -left-10 top-16 flex items-center gap-2 rounded-xl px-3 py-2 shadow-card"
      >
        <span className="h-2 w-2 rounded-full bg-brand-cyan" />
        <span className="font-mono text-[11px] text-ink-muted">npm run</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="glass absolute -right-8 bottom-24 flex items-center gap-2 rounded-xl px-3 py-2 shadow-card"
      >
        <span className="h-2 w-2 rounded-full bg-brand-blue" />
        <span className="font-mono text-[11px] text-ink-muted">build ✓</span>
      </motion.div>
    </div>
  );
}
