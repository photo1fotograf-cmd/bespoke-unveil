import { motion } from "motion/react";
import { Ornament } from "./icons";

export function Closing() {
  return (
    <section className="paper-texture relative flex min-h-[70svh] items-center justify-center px-6 py-28 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.4, ease: [0.22, 0.61, 0.36, 1] }}
        className="max-w-xl"
      >
        <p className="font-serif text-[clamp(1rem,3.2vw,1.35rem)] leading-relaxed text-foreground">
          Radujemo se što ćemo ovaj poseban dan podeliti sa Vama.
        </p>
        <p className="mt-10 font-script text-[clamp(2rem,8vw,3.4rem)] leading-tight text-sage">
          Miona &amp; Ilija
        </p>
        <Ornament className="mx-auto mt-8 w-48 text-gold/70" />
      </motion.div>
    </section>
  );
}
