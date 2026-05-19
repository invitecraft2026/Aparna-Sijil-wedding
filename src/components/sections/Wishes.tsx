import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { FloralDivider } from "@/components/FloralDivider";

const WISHES = [
  {
    name: "Priti",
    text: "Dear Aparna, First of all, I really miss you, but above all, I cherish how beautifully you have grown in love. I still remember our office days — your endless talks and rant sessions about how finding true love in today’s world is such an impossible thing. But look at you today… Touch wood, but all you glow with now is love and happiness, and honestly, I could not be more at peace seeing you finally make it official. Somewhere between all those conversations, overthinking sessions, and “I will never do this for a guy” statements, life really said “wait till you meet the right person.” And now look at you doing everything with the biggest smile on your face. I am so, so happy and proud of you for how far you’ve come, the way you allowed yourself to trust it again. You truly deserve this kind of happiness. And for Sijil, I haven’t met him yet, but one thing I am absolutely sure of is that he is very patient 😂 Which already tells me he’s the perfect one for you. But jokes apart, thank you for loving my girl the way she deserves to be loved. Sending all my warm wishes and blessings to both of you as you start this beautiful new chapter together. May your life be full of love, laughter, peace, endless teasing, and the kind of companionship that makes even ordinary days feel special. And lastly… I genuinely cannot wait to see my BBG in her wedding dress 😍❤️",
  },
  {
    name: "Aswini",
    text: "I know how picky you are when it comes to literally everything — especially relationships — so seeing you choose the right person to spend your forever with makes me unbelievably happy. I’m so proud of how far you’ve come and even happier seeing the love you both share. The way he heals everything around you, the way he takes care of you so deeply, even the tiniest little details — trust me, even I noticed 🤌 That kind of love is rare and beautiful.",
  },
  {
    name: "Abhimanyu",
    text: "When I joined Silicon, I never expected to find someone who would become like my own sister. Akka, you are genuinely one of the best people I came across in Bangalore, and office never felt the same after you left 😏. Today, seeing both of you getting married, I feel so happy and proud ♥️.",
  },
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
    text: "♥️ Cheers to Sijil and Aparna, a beautiful couple and the perfect match designed by the divine hands of the heavens. May your lives be filled with happiness, laughter, care, love, and affection.",
  },
  {
    name: "Adarsh",
    text: "While life gave apples to many, it gave Sijil someone truly special — Aparna ❤️. May your life together be filled with happiness as grand as winning the Onam Bumper.",
  },
  {
    name: "Jithin",
    text: "Congratulations to Sijil and Aparna ❣️ Wishing you a future full of togetherness, adventures, success, and countless moments of joy. Stay happy, blessed, and deeply in love always 🥰",
  },
  {
    name:"Hyru",
    text:"From “Marriage is not for me”, never thought Appu would one day fall so deeply in love — but here you are, happier than ever with your soulmate. So grateful to witness this beautiful journey from school friendship to your wedding day. Wishing you both a lifetime of love, warmth, adventures, and beautiful memories together. Elegant souls, beautiful couple. ✨💗"
  },
  {
    name:"Thasni",
    text:"To my dearest❤️ I never thought I’d see this day. You were always the one who said marriage was never your thing, and honestly, I believed you too. Seeing you step into this new chapter feels so emotional because it reminds me how life changes our hearts in the most unexpected ways😅I’m so happy to see you smiling and choosing love. Watching someone I care about find their person is such a beautiful feeling.Seeing the way he loves, understands, and stands beside you makes me feel so happy because I truly believe you found the right person. Some people are simply meant to meet, and looking at both of you together feels like seeing a perfect match written by fate itself. You both bring out the best in each other in the most beautiful way. 🧿 A part of me still can't believe that my best friend is getting married. It feels like yesterday we were laughing, sharing secrets, and talking about life without ever imagining this day. Thinking about how far we've come fills my hea"
  }
];

export function Wishes() {
  const [idx, setIdx] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((prev) => (prev + 1) % WISHES.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  // Manual Navigation
  const go = (dir: number) => {
    setIdx((prev) => (prev + dir + WISHES.length) % WISHES.length);
  };

  return (
    <section
      id="wishes"
      className="relative overflow-hidden bg-gradient-to-b from-ivory via-lavender/20 to-blush/30 py-28 md:py-40"
    >
      {/* Background Blobs */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
          className="absolute left-10 top-20 h-60 w-60 rounded-full bg-blush/40 blur-3xl"
        />

        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-peach/40 blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <p className="font-script text-3xl text-rose-deep/80">
            Toasts & Wishes
          </p>

          <h2 className="mt-2 font-display text-4xl md:text-5xl text-gold-gradient">
            Blessings from loved ones
          </h2>

          <FloralDivider className="mt-6" />
        </motion.div>

        {/* Wishes Card */}
        <div className="relative mt-16">
          <div className="relative h-[38rem] sm:h-[32rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.96 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <div className="glass shadow-card ring-gold/30 relative flex h-full flex-col items-center justify-center overflow-y-auto rounded-3xl p-6 text-center ring-1 sm:p-10 md:p-14">
                  <Quote className="mb-6 h-10 w-10 text-gold/70" />

                  <p
                    className={`font-display max-w-3xl italic leading-relaxed text-foreground/85 text-balance ${
  WISHES[idx].text.length > 900
    ? "text-sm sm:text-base md:text-lg"
    : WISHES[idx].text.length > 500
    ? "text-base sm:text-lg md:text-xl"
    : "text-xl sm:text-2xl md:text-3xl"
}`}
                  >
                    “{WISHES[idx].text}”
                  </p>

                  <div className="mt-8 flex items-center gap-3">
                    <span className="h-px w-10 bg-gold/60" />

                    <span className="font-script text-2xl text-rose-deep">
                      {WISHES[idx].name}
                    </span>

                    <span className="h-px w-10 bg-gold/60" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-6">
            {/* Previous */}
            <button
              onClick={() => go(-1)}
              className="glass hover:shadow-glow grid h-11 w-11 place-items-center rounded-full text-rose-deep transition-all"
              aria-label="Previous wish"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {WISHES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`rounded-full transition-all ${
                    i === idx
                      ? "h-1.5 w-8 bg-rose-deep"
                      : "h-1.5 w-1.5 bg-rose-deep/30"
                  }`}
                  aria-label={`Wish ${i + 1}`}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={() => go(1)}
              className="glass hover:shadow-glow grid h-11 w-11 place-items-center rounded-full text-rose-deep transition-all"
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