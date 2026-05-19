import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import g1 from "@/assets/image-1.jpeg";
import g2 from "@/assets/image-2.jpeg";
import g3 from "@/assets/image-3.jpeg";
import g4 from "@/assets/image-4.jpeg";
import g5 from "@/assets/image-5.jpeg";
import g6 from "@/assets/image-6.jpeg";
import s1 from "@/assets/image-7.jpeg";
// import s2 from "@/assets/story-2.jpg";
import { FloralDivider } from "@/components/FloralDivider";

const IMAGES = [
  { src: g1, alt: "Mandap with floral arrangements", span: "row-span-2" },
  { src: s1, alt: "Couple laughing", span: "" },
  { src: g2, alt: "Bridal mehendi hands", span: "" },
  { src: g3, alt: "Bride silhouette at golden hour", span: "row-span-2" },
  { src: g6, alt: "Bridal close up portrait", span: "" },
  { src: g5, alt: "Rose petals", span: "" },
  // { src: s2, alt: "Holding hands", span: "" },
  // { src: g5, alt: "Guruvayur temple", span: "row-span-2" },
];

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative py-28 md:py-36 bg-gradient-to-b from-ivory via-blush/30 to-ivory overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <p className="font-script text-3xl text-rose-deep/80">Moments</p>
          <h2 className="mt-2 font-display text-4xl md:text-5xl text-gold-gradient">
            A glimpse of us
          </h2>
          <FloralDivider className="mt-6" />
        </motion.div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-5">
          {IMAGES.map((img, i) => (
            <motion.button
              key={i}
              type="button"
              onClick={() => setOpen(i)}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden rounded-2xl shadow-card ring-1 ring-gold/20 ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-deep/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/40 rounded-2xl" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[60] grid place-items-center bg-foreground/80 backdrop-blur-xl p-6"
          >
            <button
              onClick={() => setOpen(null)}
              className="absolute top-6 right-6 grid h-12 w-12 place-items-center rounded-full glass-dark text-ivory"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              key={open}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              src={IMAGES[open].src}
              alt={IMAGES[open].alt}
              className="max-h-[85vh] max-w-[92vw] rounded-2xl shadow-glow"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
