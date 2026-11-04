import { Github, Mail } from "lucide-react";
import { personal } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-10">
      <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-display text-sm text-ink-muted">
          © {new Date().getFullYear()}{" "}
          <span className="text-ink">{personal.name}</span>. Built with
          React.js &amp; Tailwind.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-ink-muted transition-colors hover:border-white/25 hover:text-ink"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-ink-muted transition-colors hover:border-white/25 hover:text-ink"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
