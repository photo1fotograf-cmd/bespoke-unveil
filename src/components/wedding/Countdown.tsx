import { useEffect, useState } from "react";
import { motion } from "motion/react";

const TARGET = new Date("2026-09-26T13:30:00+02:00").getTime();

function diff() {
  const ms = Math.max(0, TARGET - Date.now());
  return {
    Dana: Math.floor(ms / 86400000),
    Sati: Math.floor(ms / 3600000) % 24,
    Minuta: Math.floor(ms / 60000) % 60,
    Sekundi: Math.floor(ms / 1000) % 60,
  };
}

export function Countdown() {
  const [t, setT] = useState(diff);

  useEffect(() => {
    const id = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative mx-auto w-full max-w-3xl px-6 py-24 text-center sm:py-32">
      <h2 className="font-display text-[clamp(1.3rem,3.6vw,1.9rem)] uppercase tracking-[0.32em] text-foreground">
        26. septembar 2026.
      </h2>
      <div className="gold-rule mx-auto mt-6 h-px w-40" />

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: [0.22, 0.61, 0.36, 1] }}
        className="mt-14 grid grid-cols-4 gap-2 sm:gap-8"
      >
        {Object.entries(t).map(([label, value]) => (
          <div key={label} className="flex flex-col items-center">
            <span className="font-display text-[clamp(1.8rem,7vw,3.4rem)] leading-none gold-text tabular-nums">
              {String(value).padStart(2, "0")}
            </span>
            <span className="mt-3 text-[clamp(0.55rem,2vw,0.72rem)] uppercase tracking-[0.28em] text-muted-foreground">
              {label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
