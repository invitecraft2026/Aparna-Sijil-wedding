import { motion } from "framer-motion";

export function FloralDivider({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className={`flex items-center justify-center gap-4 text-gold ${className}`}
    >
      <span className="h-px w-16 sm:w-28 bg-gradient-to-r from-transparent to-gold/70" />
      <svg viewBox="0 0 64 24" className="w-20 h-6" fill="none" stroke="currentColor" strokeWidth="1.1">
        <path d="M2 12 Q 16 4, 32 12 T 62 12" />
        <circle cx="32" cy="12" r="3" fill="currentColor" opacity="0.9" />
        <circle cx="32" cy="12" r="6" opacity="0.4" />
        <path d="M26 12 Q 28 6, 32 8" />
        <path d="M38 12 Q 36 6, 32 8" />
        <path d="M26 12 Q 28 18, 32 16" />
        <path d="M38 12 Q 36 18, 32 16" />
      </svg>
      <span className="h-px w-16 sm:w-28 bg-gradient-to-l from-transparent to-gold/70" />
    </motion.div>
  );
}

export function CornerFloral({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={`absolute w-32 h-32 md:w-44 md:h-44 text-gold/50 ${className}`}
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
    >
      <path d="M5 5 Q 40 20, 50 50 Q 55 70, 40 90" />
      <circle cx="20" cy="18" r="4" fill="currentColor" opacity="0.6" />
      <circle cx="35" cy="32" r="3" fill="currentColor" opacity="0.5" />
      <circle cx="48" cy="50" r="5" fill="currentColor" opacity="0.7" />
      <circle cx="45" cy="72" r="3" fill="currentColor" opacity="0.5" />
      <path d="M20 18 Q 14 10, 8 12" />
      <path d="M35 32 Q 30 24, 22 26" />
      <path d="M48 50 Q 60 48, 64 38" />
      <path d="M45 72 Q 58 70, 60 60" />
      <path d="M40 90 Q 36 100, 26 102" />
    </svg>
  );
}
