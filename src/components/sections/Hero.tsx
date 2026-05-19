import { motion } from "framer-motion";
import { ChevronDown, Heart, MapPin } from "lucide-react";
import heroBg from "@/assets/image-1.jpeg";
import { FloatingPetals, Sparkles } from "@/components/FloatingPetals";
import { FloralDivider } from "@/components/FloralDivider";

export function Hero() {
  return (
    <section id="hero" className="relative isolate min-h-[100svh] w-full overflow-hidden">
      {/* Background image with slow zoom */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Romantic Hindu wedding scene"
          className="h-full w-full object-cover animate-slow-zoom"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/40 via-blush/30 to-ivory/85" />
        <div className="absolute inset-0 bg-dawn opacity-70" />
        <div className="absolute inset-0 bg-glow opacity-60" />
      </div>

      <Sparkles count={30} />
      <FloatingPetals count={22} />

      {/* Content */}
      <div className="relative z-20 flex min-h-[100svh] flex-col items-center justify-center px-6 py-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2 }}
          className="font-script text-2xl sm:text-3xl text-rose-deep/80"
        >
          The wedding of
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.4, delay: 0.5, ease: "easeOut" }}
          className="mt-4 font-display text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] leading-[0.95] tracking-tight text-balance"
        >
          <span className="text-gold-gradient drop-shadow-[0_4px_24px_oklch(0.74_0.105_78/0.4)]">
            Aparna
          </span>
          <span className="block font-script text-4xl sm:text-5xl md:text-6xl text-rose-deep/70 my-2 md:my-3">
            &amp;
          </span>
          <span className="text-gold-gradient drop-shadow-[0_4px_24px_oklch(0.74_0.105_78/0.4)]">
            Sijil
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-8 flex flex-col items-center gap-1"
        >
          <span className="text-xs sm:text-sm uppercase tracking-[0.5em] text-rose-deep/70">
            Hindu Wedding
          </span>
          <span className="font-display text-3xl sm:text-4xl text-foreground mt-2">
            29 · August · 2026
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-8 w-full max-w-2xl"
        >
          <FloralDivider />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-8 space-y-4 max-w-xl text-balance"
        >
          <div className="text-foreground/85">
            <p className="font-display text-xl sm:text-2xl italic text-rose-deep/90">
              Thaalikettu
            </p>
            <p className="text-sm sm:text-base mt-1">
              Sreekrishna Temple, Guruvayur
              <span className="block text-gold font-medium tracking-wider mt-1">
                Muhurtham · 6:00 – 6:30 AM
              </span>
            </p>
          </div>
          <div className="text-foreground/85">
            <p className="font-display text-xl sm:text-2xl italic text-rose-deep/90">
              Ceremony &amp; Lunch
            </p>
            <p className="text-sm sm:text-base mt-1">
              KP Namboodiri's Auditorium, Vadakkekad, Thrissur
              <span className="block text-gold font-medium tracking-wider mt-1">
                10:30 AM onwards
              </span>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.9 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#events"
            className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-rose-deep to-rose-deep/80 px-7 py-3.5 text-sm font-medium tracking-wider uppercase text-primary-foreground glow-ring transition-all hover:scale-[1.04]"
          >
            <Heart className="h-4 w-4" />
            View Invitation
          </a>
          <a
            href="#story"
            className="group inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-medium tracking-wider uppercase text-rose-deep transition-all hover:scale-[1.04] hover:shadow-glow"
          >
            <MapPin className="h-4 w-4" />
            Our Story
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#story"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-rose-deep/70"
          aria-label="Scroll to story"
        >
          <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
