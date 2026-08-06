import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import Lenis from "lenis";
import { InvitationImage } from "@/components/wedding/InvitationImage";
import { Countdown } from "@/components/wedding/Countdown";
import { MapSection } from "@/components/wedding/MapSection";
import { GoldDust } from "@/components/wedding/GoldDust";
import { MusicToggle } from "@/components/wedding/MusicToggle";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Miona i Ilija — 26.09.2026." },
      {
        name: "description",
        content:
          "Sa radošću Vas pozivamo da zajedno proslavimo naše venčanje — Miona i Ilija, 26. septembra 2026. godine.",
      },
      { property: "og:title", content: "Miona i Ilija — Pozivnica" },
      {
        property: "og:description",
        content: "Pozivnica za venčanje Mione i Ilije, 26.09.2026.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.5, smoothWheel: true });
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="paper-texture relative min-h-screen overflow-x-hidden">
      {mounted && <GoldDust />}
      <MusicToggle />

      <InvitationImage />
      <Countdown />
      <MapSection />
    </main>
  );
}
