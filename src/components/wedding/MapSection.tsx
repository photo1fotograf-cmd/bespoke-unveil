import { motion } from "motion/react";

// Replace these two values to change the location.
const MAPS_LINK = "https://maps.app.goo.gl/b8uvbKWUSsCHzVMp6";
const MAPS_EMBED =
  "https://www.google.com/maps?q=Vrnja%C4%8Dko%20Vrelo%2C%20Vrnja%C4%8Dka%20Banja&output=embed";

export function MapSection() {
  return (
    <section className="relative mx-auto w-full max-w-4xl px-6 py-24 text-center sm:py-32">
      <h2 className="font-display text-[clamp(1.5rem,4vw,2.2rem)] uppercase tracking-[0.32em] text-foreground">
        Lokacija
      </h2>
      <div className="gold-rule mx-auto mt-6 h-px w-40" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: [0.22, 0.61, 0.36, 1] }}
        className="shadow-paper mt-14 overflow-hidden border border-border"
      >
        <iframe
          title="Lokacija venčanja"
          src={MAPS_EMBED}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[320px] w-full grayscale-[35%] sm:h-[420px]"
        />
      </motion.div>

      <a
        href={MAPS_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-12 inline-flex items-center justify-center border border-gold/70 px-10 py-4 text-[0.72rem] uppercase tracking-[0.3em] text-foreground transition-colors duration-500 hover:bg-gold/10"
      >
        Otvori navigaciju
      </a>
    </section>
  );
}
