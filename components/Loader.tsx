"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-base"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="relative h-16 w-16">
            <motion.span
              className="absolute inset-0 rounded-2xl border-2 border-brand-blue/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <motion.span
              className="absolute inset-2 rounded-xl border-2 border-t-brand-cyan border-r-transparent border-b-transparent border-l-transparent"
              animate={{ rotate: -360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            />
            <span className="absolute inset-0 flex items-center justify-center font-display text-sm font-bold text-gradient">
              AT
            </span>
          </div>
          <motion.p
            className="font-mono text-xs uppercase tracking-[0.3em] text-ink-muted"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          >
            compiling portfolio
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
