import { motion } from "framer-motion";
import { Heart, Instagram, Mail, Phone } from "lucide-react";
import { FloralDivider } from "@/components/FloralDivider";
import { Sparkles } from "@/components/FloatingPetals";

export function Footer() {
  return (
    <footer className="relative overflow-hidden py-24 bg-gradient-to-b from-blush/30 via-peach/30 to-rose-deep/15">
      <Sparkles count={18} />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <FloralDivider />

        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10 inline-grid place-items-center"
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="grid h-20 w-20 place-items-center rounded-full bg-romance shadow-glow"
          >
            <Heart className="h-9 w-9 text-primary-foreground fill-current" />
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-8 font-script text-4xl sm:text-5xl text-rose-deep"
        >
          With Love,
        </motion.p>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-2 font-display text-5xl sm:text-6xl text-gold-gradient"
        >
          Aparna &amp; Sijil
        </motion.h3>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-10"
        >
          <p className="text-xs uppercase tracking-[0.5em] text-rose-deep/70">Save the date</p>
          <p className="mt-3 font-display text-3xl text-foreground">29 · 08 · 2026</p>
          <p className="mt-2 text-sm text-foreground/70">Guruvayur · Thrissur · Kerala</p>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          {[
            { Icon: Instagram, href: "#", label: "Instagram" },
            { Icon: Mail, href: "mailto:hello@example.com", label: "Email" },
            { Icon: Phone, href: "tel:+910000000000", label: "Phone" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="grid h-11 w-11 place-items-center rounded-full glass text-rose-deep transition-all hover:shadow-glow hover:scale-110"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </motion.div> */}

        <FloralDivider className="mt-14" />

        <p className="mt-8 text-xs uppercase tracking-[0.4em] text-foreground/50">
          Made with love · 2026
        </p>
      </div>
    </footer>
  );
}
