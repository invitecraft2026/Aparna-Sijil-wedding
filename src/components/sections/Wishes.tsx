import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, X } from "lucide-react";
import { FloralDivider } from "@/components/FloralDivider";

const WISHES = [
  {
    name: "Priti",
    text: `Dear Aparna, First of all, I really miss you, but above all, I cherish how beautifully you have grown in love.

I still remember our office days — your endless talks and rant sessions about how finding true love in today’s world is such an impossible thing. But look at you today…

Touch wood, but all you glow with now is love and happiness, and honestly, I could not be more at peace seeing you finally make it official.

Somewhere between all those conversations, overthinking sessions, and “I will never do this for a guy” statements, life really said “wait till you meet the right person.”

And now look at you doing everything with the biggest smile on your face.

I am so, so happy and proud of you for how far you’ve come, the way you allowed yourself to trust it again. You truly deserve this kind of happiness.

And for Sijil, I haven’t met him yet, but one thing I am absolutely sure of is that he is very patient 😂 Which already tells me he’s the perfect one for you.

But jokes apart, thank you for loving my girl the way she deserves to be loved.

Sending all my warm wishes and blessings to both of you as you start this beautiful new chapter together. May your life be full of love, laughter, peace, endless teasing, and the kind of companionship that makes even ordinary days feel special.

And lastly… I genuinely cannot wait to see my BBG in her wedding dress 😍❤️`,
  },

  {
    name: "Aswini",
    text: `I know how picky you are when it comes to literally everything — especially relationships — so seeing you choose the right person to spend your forever with makes me unbelievably happy.

I’m so proud of how far you’ve come and even happier seeing the love you both share.

The way he heals everything around you, the way he takes care of you so deeply, even the tiniest little details — trust me, even I noticed 🤌 That kind of love is rare and beautiful.

You both truly bring out the best in each other.

And I know there were days filled with confusion, stress, and overthinking, but look at you now — standing here with the love of your life and both your families happily around you. It honestly feels so right.

You two are truly made for each other, and I wish you both a lifetime filled with love, happiness, peace, laughter, and all the amazing things life has to offer.

May you both stay this happy forever and ever.

Love you both so much. Mwaaahs 🫶🧿🤌❤️😘`,
  },

  {
    name: "Abhimanyu",
    text: `When I joined Silicon, I never expected to find someone who would become like my own sister.

Akka, you are genuinely one of the best people I came across in Bangalore, and office never felt the same after you left 😏

And then came the days when you started talking about Sijil chettan.

I still remember the way you described him — calm, patient, peaceful💓... while you are full chaos.

And that's when I gave my expert relationship advice😎:

"Akka, if both people are calm, the relationship will become bland. One calm person and one chaos person — that's the perfect balance."

Honestly, the way you spoke about him, I already knew this relationship was going somewhere special💓

And today, seeing both of you getting married, I feel so happy and proud♥️

Sijil chettan, thank you for loving and taking care of our Akka🥰

And Akka, no matter what happens, don't change. Keep being the same caring, chaotic, beautiful person we all love.

Pinne kalyanathin enik shirt eduth tharann marakall!! 😋🤣`,
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
    name: "Hyru",
    text: "From “Marriage is not for me”, never thought Appu would one day fall so deeply in love — but here you are, happier than ever with your soulmate. So grateful to witness this beautiful journey from school friendship to your wedding day. Wishing you both a lifetime of love, warmth, adventures, and beautiful memories together. Elegant souls, beautiful couple. ✨💗",
  },
  {
    name:"Shreya",
    text:"Cheers to both lovelies 🥂✨ Now that you’ve found your forever person, may you always have each other to rise above every wall life throws your way — with rose apples, laughter, love, and everything sweet in between. Wishing you a lifetime filled with friendship, endless adventures, and a love that only grows stronger with time"
  },
  {
    name:"Riya",
    text:"What a dangerously good-looking couple! Aparna's cute anger issues finally found their calm and composed Sijil. Honestly, this marriage looks less like a wedding and more like “Beauty & The Human Stress Ball.” "
  },
  {
    name:"Adwaith",
    text:"May your marriage be a beautiful journey filled with endless love, laughter, and unwavering support for one another. Congrats, Sijil ettan and Aparna chechi, as you step into this wonderful new chapter of life together!"
  }
,
{
 name:"Rohith",
 text:"Hey Sijil,As you step into this beautiful new phase of life, I just want to say how happy I am for you. I’ve seen your journey through every up and down, which makes this moment feel personal to me too. Wishing both you and Aparna a lifetime filled with love, happiness, and beautiful memories...May your bond continue to grow stronger and more  beautiful with each  passing day.Wishing you both a beautiful married life and a wonderful future ahead 😍😍"
},
{
  name:"Gowri",
  text:"Her autobiography is similar to the movie, '27 dresses,' and her dream life is waiting to be clocked in. I cannot wait to see her in this new phase and a new role because she's going to be a complete #wifey goal. All the best. And if you go around the world, don't forget to get me a keepsake like a penpal 🩷🩷"
},
  {
    name: "Thasni",
    text: `To my dearest❤️

I never thought I’d see this day. You were always the one who said marriage was never your thing, and honestly, I believed you too.

Seeing you step into this new chapter feels so emotional because it reminds me how life changes our hearts in the most unexpected ways😅

I’m so happy to see you smiling and choosing love.

Watching someone I care about find their person is such a beautiful feeling.

Seeing the way he loves, understands, and stands beside you makes me feel so happy because I truly believe you found the right person.

Some people are simply meant to meet, and looking at both of you together feels like seeing a perfect match written by fate itself.

You both bring out the best in each other in the most beautiful way. 🧿`,
  },
];

export function Wishes() {
  const [selectedWish, setSelectedWish] = useState<
    null | { name: string; text: string }
  >(null);

  // Short Text Preview
  const truncateText = (text: string, maxLength = 180) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <>
      <section
        id="wishes"
        className="relative overflow-hidden bg-[#f8f4ef] py-24 md:py-32"
      >
        {/* Background Blur */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-rose-100/40 blur-3xl" />

          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-amber-100/30 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <div className="mb-5 flex justify-center">
              <div className="rounded-full border border-[#d9b99b]/40 bg-white/70 p-4 shadow-sm">
                <Heart className="h-7 w-7 text-[#c68b8b]" />
              </div>
            </div>

            <h2 className="font-display text-5xl text-[#4b3425] md:text-6xl">
              Toasts & Wishes
            </h2>

            <div className="mt-5 flex items-center justify-center gap-4">
              <span className="h-px w-24 bg-[#d9b99b]" />
              <Heart className="h-4 w-4 fill-[#d9b99b] text-[#d9b99b]" />
              <span className="h-px w-24 bg-[#d9b99b]" />
            </div>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#7a6a5d]">
              Words of love, laughter and heartfelt blessings from our
              favourite people.
            </p>

            <FloralDivider className="mt-8" />
          </motion.div>

          {/* Wishes */}
          <div className="mt-20 space-y-6">
            {WISHES.map((wish, index) => (
              <motion.div
                key={wish.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.05,
                }}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedWish(wish)}
                className="cursor-pointer overflow-hidden rounded-[2rem] border border-[#eadfd3] bg-white/80 shadow-lg backdrop-blur-sm transition-all hover:shadow-2xl"
              >
                <div className="grid md:grid-cols-[280px_1fr]">
                  {/* Left */}
                  <div className="flex items-center gap-5 border-b border-[#efe6dd] px-8 py-8 md:border-b-0 md:border-r">
                    <div className="grid h-12 w-12 place-items-center rounded-full border border-[#e4cfc3] bg-[#fffaf7]">
                      <Heart className="h-5 w-5 text-[#d19898]" />
                    </div>

                    <h3 className="font-display text-2xl text-[#3d2b1f]">
                      {wish.name}
                    </h3>
                  </div>

                  {/* Right */}
                  <div className="flex items-center px-8 py-8 md:px-10">
                    <p className="line-clamp-3 text-base leading-relaxed text-[#5f5146] md:text-lg">
                      {truncateText(wish.text)}
                    </p>

                    {wish.text.length > 180 && (
                      <span className="ml-3 shrink-0 text-sm font-medium text-[#c68b8b]">
                        Read More
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedWish && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={() => setSelectedWish(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] bg-[#fffaf7] p-8 shadow-2xl md:p-12"
            >
              {/* Close */}
              <button
                onClick={() => setSelectedWish(null)}
                className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-[#f5ebe4] text-[#7a5c48] transition-all hover:rotate-90"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Top */}
              <div className="mb-8 flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-full border border-[#e4cfc3] bg-[#fff]">
                  <Heart className="h-6 w-6 text-[#d19898]" />
                </div>

                <div>
                  <h3 className="font-display text-3xl text-[#3d2b1f]">
                    {selectedWish.name}
                  </h3>

                  <p className="mt-1 text-sm tracking-wide text-[#9a7f6d]">
                    Sent with love 💌
                  </p>
                </div>
              </div>

              {/* Full Text */}
              <p className="whitespace-pre-line text-lg leading-loose text-[#5f5146]">
                {selectedWish.text}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}