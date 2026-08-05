import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Invitation } from "./Invitation";

export function Hero({ onRevealed }: { onRevealed: () => void }) {
  const root = useRef<HTMLDivElement>(null);
  const card = useRef<HTMLDivElement>(null);
  const envelope = useRef<HTMLDivElement>(null);
  const flap = useRef<HTMLDivElement>(null);
  const seal = useRef<HTMLDivElement>(null);
  const sheen = useRef<HTMLDivElement>(null);
  const vignette = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" }, onComplete: onRevealed });

      gsap.set(card.current, { yPercent: 62, scale: 0.62, opacity: 0, rotate: -1.2, filter: "blur(6px)" });
      gsap.set(flap.current, { rotateX: 0 });
      gsap.set(envelope.current, { yPercent: 26, opacity: 0, scale: 0.96 });

      tl.to(envelope.current, { yPercent: 0, opacity: 1, scale: 1, duration: 1.6, ease: "power3.out" })
        .to(seal.current, { scale: 1.04, duration: 0.35 }, "+=0.35")
        .to(seal.current, { opacity: 0, scale: 0.86, rotate: -8, duration: 0.7 })
        .to(flap.current, { rotateX: -168, duration: 1.2, ease: "power2.inOut" }, "-=0.3")
        .to(card.current, { opacity: 1, duration: 0.5 }, "-=0.6")
        .to(
          card.current,
          { yPercent: 0, scale: 1, rotate: 0, filter: "blur(0px)", duration: 2.4, ease: "power2.out" },
          "-=0.35",
        )
        .to(envelope.current, { opacity: 0, yPercent: 16, duration: 1.2, ease: "power2.inOut" }, "-=1.1")
        .to({}, { duration: 0.9 })
        .addLabel("wow")
        .to(vignette.current, { opacity: 1, duration: 1.1 }, "wow")
        .to(card.current, { scale: 1.03, duration: 1.4, ease: "power1.inOut" }, "wow")
        .fromTo(
          sheen.current,
          { xPercent: -140, opacity: 0 },
          { xPercent: 160, opacity: 1, duration: 1.9, ease: "power1.inOut" },
          "wow",
        )
        .to(sheen.current, { opacity: 0, duration: 0.5 }, "-=0.5")
        .to(
          "[data-names]",
          { filter: "brightness(1.35)", duration: 0.45, yoyo: true, repeat: 1 },
          "wow+=0.9",
        )
        .to(vignette.current, { opacity: 0, duration: 1.4 }, "+=0.4")
        .to(card.current, { scale: 1, duration: 1.6, ease: "power2.inOut" }, "<");
    }, root);

    return () => ctx.revert();
  }, [onRevealed]);

  return (
    <section
      ref={root}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5 py-16"
    >
      <div
        ref={vignette}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-20 opacity-0"
        style={{ background: "radial-gradient(circle at 50% 45%, transparent 30%, oklch(0.25 0.02 100 / 0.4))" }}
      />

      <div className="relative w-full max-w-[560px]" style={{ perspective: "1600px" }}>
        <div ref={card} className="relative z-10 will-change-transform">
          <Invitation />
          <div
            ref={sheen}
            aria-hidden
            className="pointer-events-none absolute inset-y-[-20%] left-0 z-30 w-1/3 rotate-12 opacity-0"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(1 0 0 / 0.5), oklch(0.9 0.08 90 / 0.35), transparent)",
            }}
          />
        </div>

        <div ref={envelope} aria-hidden className="pointer-events-none absolute inset-x-0 bottom-[-6%] z-20">
          <div className="paper-texture shadow-paper relative mx-auto aspect-[1.55/1] w-full">
            <div
              className="absolute inset-0"
              style={{
                boxShadow:
                  "inset 0 0 0 1px oklch(0.82 0.07 88 / 0.6), inset 0 0 30px oklch(0.85 0.09 88 / 0.3)",
              }}
            />
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -left-1/4 bottom-0 h-full w-[75%] origin-bottom-left rotate-[26deg] bg-[oklch(0.95_0.015_92)] opacity-90" />
              <div className="absolute -right-1/4 bottom-0 h-full w-[75%] origin-bottom-right -rotate-[26deg] bg-[oklch(0.95_0.015_92)] opacity-90" />
            </div>
            <div
              ref={flap}
              className="paper-texture absolute inset-x-0 top-0 h-1/2 origin-top"
              style={{
                transformStyle: "preserve-3d",
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                boxShadow: "0 6px 18px -8px oklch(0.3 0.02 100 / 0.5)",
              }}
            />
            <div
              ref={seal}
              className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                background: "radial-gradient(circle at 35% 30%, oklch(0.82 0.09 88), oklch(0.6 0.09 80))",
                boxShadow: "0 4px 10px -3px oklch(0.3 0.02 100 / 0.5)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
