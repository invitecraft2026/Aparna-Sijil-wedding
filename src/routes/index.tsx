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
      // Title
      {
        title: "Aparna & Sijil — Wedding · 29 August 2026",
      },

      // SEO Description
      {
        name: "description",
        content:
          "Aparna & Sijil are getting married on 29 August 2026. Join us for our beautiful wedding celebration in Guruvayur & Thrissur.",
      },

      // Open Graph
      {
        property: "og:title",
        content: "Aparna & Sijil — Wedding · 29 August 2026",
      },
      {
        property: "og:description",
        content:
          "With love, Aparna & Sijil invite you to celebrate their wedding on 29 August 2026.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:image",
        content: "https://aparna-sijil-wedding.invitecraft2026.workers.dev/image-1.jpeg",
      },

      // Twitter Preview
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Aparna & Sijil — Wedding · 29 August 2026",
      },
      {
        name: "twitter:description",
        content:
          "Join us for the wedding celebration of Aparna & Sijil.",
      },
      {
        name: "twitter:image",
        content: "https://aparna-sijil-wedding.invitecraft2026.workers.dev/image-1.jpeg",
      },

      // Theme Color
      {
        name: "theme-color",
        content: "#f5e7dc",
      },
    ],

    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Great+Vibes&family=Jost:wght@300;400;500;600&display=swap",
      },

      // Favicon
      {
        rel: "icon",
        href: "/favicon.ico",
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