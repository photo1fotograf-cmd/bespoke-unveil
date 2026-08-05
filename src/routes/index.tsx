import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { Hero } from "@/components/wedding/Hero";
import { Timeline } from "@/components/wedding/Timeline";
import { Countdown } from "@/components/wedding/Countdown";
import { MapSection } from "@/components/wedding/MapSection";
import { Closing } from "@/components/wedding/Closing";
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
  const [revealed, setRevealed] = useState(false);
  const parallax = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.5, smoothWheel: true });
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    if (!revealed) lenis.stop();
    else lenis.start();
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, [revealed]);

  useEffect(() => {
    const el = parallax.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * 8;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  const onRevealed = useCallback(() => setRevealed(true), []);

  return (
    <main className="paper-texture relative min-h-screen overflow-x-hidden">
      {mounted && <GoldDust />}
      <MusicToggle />

      <div ref={parallax} className="transition-transform duration-700 ease-out will-change-transform">
        <Hero onRevealed={onRevealed} />
      </div>

      <Timeline />
      <Countdown />
      <MapSection />
      <Closing />
    </main>
  );
}
