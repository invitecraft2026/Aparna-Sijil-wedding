import { motion } from "framer-motion";
import { Clock, MapPin, Sparkles as SparklesIcon, UtensilsCrossed } from "lucide-react";
import { FloralDivider } from "@/components/FloralDivider";

const EVENTS = [
  {
    icon: SparklesIcon,
    title: "Thaalikettu",
    subtitle: "The sacred ceremony",
    time: "6:00 – 6:30 AM",
    venue: "Sreekrishna Temple, Guruvayur",
    note: "Muhurtham",
    map: "https://maps.google.com/?q=Sreekrishna+Temple+Guruvayur",
  },
  {
    icon: UtensilsCrossed,
    title: "Ceremony & Lunch",
    subtitle: "Reception & celebration",
    time: "10:30 AM onwards",
    venue: "KP Namboodiri's Auditorium, Vadakkekad, Thrissur",
    note: "Join us",
    map: "https://maps.google.com/?q=KP+Namboodiri+Auditorium+Vadakkekad+Thrissur",
  },
];

export function Events() {
  return (
    <section id="events" className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ivory via-peach/20 to-ivory" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[60rem] bg-glow opacity-60 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <p className="font-script text-3xl text-rose-deep/80">Save the date</p>
          <h2 className="mt-2 font-display text-4xl md:text-5xl text-gold-gradient">
            Wedding Schedule
          </h2>
          <p className="mt-4 text-foreground/70 max-w-lg mx-auto">
            With the blessings of our families, we invite you to share in our joyous celebrations.
          </p>
          <FloralDivider className="mt-6" />
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* center vertical line on md+ */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/60 to-transparent -translate-x-1/2" />

          <div className="space-y-12 md:space-y-24">
            {EVENTS.map((ev, i) => {
              const Icon = ev.icon;
              const flip = i % 2 === 1;
              return (
                <motion.div
                  key={ev.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 1, delay: i * 0.15 }}
                  className={`relative md:grid md:grid-cols-2 md:gap-12 ${flip ? "md:[&>*:first-child]:order-2" : ""}`}
                >
                  <div className={`hidden md:block ${flip ? "md:text-left md:pl-12" : "md:text-right md:pr-12"}`}>
                    <div className="font-script text-3xl text-rose-deep/80">{ev.note}</div>
                    <div className="font-display text-xl text-gold mt-2">August 29, 2026</div>
                  </div>

                  {/* center dot */}
                  <div className="hidden md:block absolute left-1/2 top-12 -translate-x-1/2">
                    <div className="relative">
                      <div className="h-4 w-4 rounded-full bg-gold shadow-glow" />
                      <div className="absolute inset-[-8px] rounded-full border border-gold/50 animate-ping" />
                    </div>
                  </div>

                  <div className={`group relative overflow-hidden rounded-3xl glass shadow-card p-8 md:p-10 ring-1 ring-gold/30 transition-all hover:shadow-glow hover:-translate-y-1`}>
                    <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gradient-to-br from-blush/40 to-peach/30 blur-2xl" />
                    <div className="relative">
                      <div className="flex items-center gap-4">
                        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-gold to-peach text-primary-foreground shadow-glow">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.35em] text-gold">{ev.subtitle}</p>
                          <h3 className="font-display text-2xl md:text-3xl text-rose-deep">{ev.title}</h3>
                        </div>
                      </div>

                      <div className="mt-6 space-y-3">
                        <div className="flex items-start gap-3 text-foreground/80">
                          <Clock className="mt-0.5 h-5 w-5 text-gold shrink-0" />
                          <span className="font-display text-lg">{ev.time}</span>
                        </div>
                        <div className="flex items-start gap-3 text-foreground/80">
                          <MapPin className="mt-0.5 h-5 w-5 text-gold shrink-0" />
                          <span>{ev.venue}</span>
                        </div>
                      </div>

                      <a
                        href={ev.map}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-rose-deep px-5 py-2.5 text-xs uppercase tracking-[0.25em] text-primary-foreground transition-all hover:scale-105 glow-ring"
                      >
                        <MapPin className="h-4 w-4" />
                        Open in Maps
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
