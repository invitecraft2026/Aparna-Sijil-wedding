import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import { FloralDivider, CornerFloral } from "@/components/FloralDivider";

export function Story() {
  return (
    <section id="story" className="relative py-28 md:py-40 overflow-hidden">
      <CornerFloral className="top-6 left-2" />
      <CornerFloral className="bottom-6 right-2" flip />

      {/* floating hearts */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-blush/40"
            style={{ left: `${10 + i * 11}%`, top: `${20 + (i % 3) * 25}%` }}
            animate={{ y: [-10, -40, -10], opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 5 + i, repeat: Infinity, delay: i * 0.4 }}
          >
            <Heart className="h-5 w-5 fill-current" />
          </motion.span>
        ))}
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <p className="font-script text-3xl text-rose-deep/80">Our Story</p>
          <h2 className="mt-2 font-display text-4xl md:text-5xl text-gold-gradient">
            How it all began
          </h2>
          <FloralDivider className="mt-6" />
        </motion.div>

        <div className="mt-20 grid gap-12 md:gap-20 md:grid-cols-2 items-center">
          {/* Image collage */}
          <div className="relative h-[28rem] sm:h-[34rem]">
            <motion.div
              initial={{ opacity: 0, x: -40, rotate: -6 }}
              whileInView={{ opacity: 1, x: 0, rotate: -4 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute top-0 left-0 w-2/3 aspect-[3/4] rounded-2xl overflow-hidden shadow-card ring-1 ring-gold/30"
            >
              <img src={story1} alt="The couple smiling" className="h-full w-full object-cover" loading="lazy" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40, rotate: 6 }}
              whileInView={{ opacity: 1, x: 0, rotate: 4 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="absolute bottom-0 right-0 w-2/3 aspect-square rounded-2xl overflow-hidden shadow-card ring-1 ring-gold/30"
            >
              <img src={story2} alt="Holding hands" className="h-full w-full object-cover" loading="lazy" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-romance shadow-glow grid place-items-center"
            >
              <Heart className="h-10 w-10 text-primary-foreground fill-current" />
            </motion.div>
          </div>

          {/* Story text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <p className="font-script text-2xl text-rose-deep/80 mb-4">Bangalore, where it began</p>
            <h3 className="font-display text-3xl md:text-4xl leading-tight mb-6">
              Two strangers, a friendship, a forever.
            </h3>
            <p className="text-base md:text-lg leading-relaxed text-foreground/80 font-light">
              In the heart of <span className="text-rose-deep font-medium">Bangalore</span>, two
              strangers found an unexpected friendship that slowly became home. Endless laughter,
              countless conversations, and a huge twist later — a story was written in its own time,
              turning the friendship into <em className="font-display text-gold">love</em>.
              Now, with hearts full of joy, we're ready to begin our forever together.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <span className="h-px w-12 bg-gold/60" />
              <span className="font-script text-2xl text-rose-deep">Aparna &amp; Sijil</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
