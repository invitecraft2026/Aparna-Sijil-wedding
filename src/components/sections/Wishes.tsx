import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { FloralDivider } from "@/components/FloralDivider";

const WISHES = [
  {
    name: "Aswanth",
    text: "To my beautiful friends who become an even more beautiful couple today — wishing you both a lifetime filled with happiness, laughter, unconditional love and countless beautiful memories together. Cheers 🥂 to love, friendship and this wonderful new chapter.",
  },
  {
    name: "Sreedarshan",
    text: "A new chapter, new memories, and a whole new journey together. Wishing you both a beautiful life ahead filled with happiness, support, and lots of laughter ❤️",
  },
  {
    name: "Abhinand",
    text: "Cheers to love, partnership, and a future filled with happiness. May your married life be filled with support, understanding, adventures, and countless beautiful moments together 💍✨",
  },
  {
    name: "Abhi",
    text: "Congrats Sijil & Aparna ❤️ — one lifetime subscription unlocked 🔓 to each other 🥳🎉",
  },
  {
    name: "Jazir",
    text: "Wishing Sijil & Aparna a lifetime filled with love, laughter, little adventures, and beautiful memories together. So happy for you both. God bless you in abundance.",
  },
  {
    name: "Sidharth",
    text: "♥️ Cheers to Sijil and Aparna, a beautiful couple and the perfect match designed by the divine hands of the heavens. May your lives be filled with happiness, laughter, care, love, and affection. May the universe bring you together for every lifetime ✨",
  },
  {
    name: "Adarsh",
    text: "While life gave apples to many, it gave Sijil someone truly special — Aparna ❤️. May your life together be filled with happiness as grand as winning the Onam Bumper. Congratulations to both of you!",
  },
  {
    name: "Jithin",
    text: "Congratulations to Sijil and Aparna ❣️ Wishing you a future full of togetherness, adventures, success, and countless moments of joy. Stay happy, blessed, and deeply in love always 🥰 Cheers 🥂 to forever, beautiful beginnings, and an amazing life ahead together 💍",
  },
];

export function Wishes() {
  const [idx, setIdx] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % WISHES.length), 6000);
    return () => clearInterval(t);
  }, [auto]);

  const go = (dir: number) => {
    setAuto(false);
    setIdx((i) => (i + dir + WISHES.length) % WISHES.length);
  };

  return (
    <section id="wishes" className="relative py-28 md:py-40 overflow-hidden bg-gradient-to-b from-ivory via-lavender/20 to-blush/30">
      {/* soft floating blobs */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
          className="absolute top-20 left-10 h-60 w-60 rounded-full bg-blush/40 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-peach/40 blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <p className="font-script text-3xl text-rose-deep/80">Toasts &amp; Wishes</p>
          <h2 className="mt-2 font-display text-4xl md:text-5xl text-gold-gradient">
            Blessings from loved ones
          </h2>
          <FloralDivider className="mt-6" />
        </motion.div>

        <div className="relative mt-16">
          <div className="relative h-[28rem] sm:h-[24rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.96 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <div className="relative h-full glass shadow-card rounded-3xl p-8 sm:p-14 ring-1 ring-gold/30 flex flex-col items-center justify-center text-center">
                  <Quote className="h-10 w-10 text-gold/70 mb-6" />
                  <p className="font-display text-xl sm:text-2xl md:text-3xl leading-relaxed text-foreground/85 italic text-balance max-w-3xl">
                    "{WISHES[idx].text}"
                  </p>
                  <div className="mt-8 flex items-center gap-3">
                    <span className="h-px w-10 bg-gold/60" />
                    <span className="font-script text-2xl text-rose-deep">{WISHES[idx].name}</span>
                    <span className="h-px w-10 bg-gold/60" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              onClick={() => go(-1)}
              className="grid h-11 w-11 place-items-center rounded-full glass text-rose-deep hover:shadow-glow transition-all"
              aria-label="Previous wish"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              {WISHES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setAuto(false); setIdx(i); }}
                  className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-rose-deep" : "w-1.5 bg-rose-deep/30"}`}
                  aria-label={`Wish ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              className="grid h-11 w-11 place-items-center rounded-full glass text-rose-deep hover:shadow-glow transition-all"
              aria-label="Next wish"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
