import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Story } from "@/components/sections/Story";
import { Gallery } from "@/components/sections/Gallery";
import { Events } from "@/components/sections/Events";
import { Wishes } from "@/components/sections/Wishes";
import { Footer } from "@/components/sections/Footer";
import { MusicPlayer } from "@/components/MusicPlayer";
import { LoadingScreen } from "@/components/LoadingScreen";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aparna & Sijil — Wedding · 29 August 2026" },
      {
        name: "description",
        content:
          "Aparna & Sijil are getting married on 29 August 2026. Thaalikettu at Sreekrishna Temple, Guruvayur. Join us for the ceremony at KP Namboodiri's Auditorium, Vadakkekad, Thrissur.",
      },
      { property: "og:title", content: "Aparna & Sijil — Wedding · 29 August 2026" },
      {
        property: "og:description",
        content: "A Hindu wedding celebration in Guruvayur & Thrissur. With love, Aparna & Sijil.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Great+Vibes&family=Jost:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background">
      <LoadingScreen />
      <Hero />
      <Story />
      <Gallery />
      <Events />
      <Wishes />
      <Footer />
      <MusicPlayer />
    </main>
  );
}
