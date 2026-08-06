import { motion } from "motion/react";
import { SuitIcon, DressIcon, ChurchIcon, DinnerIcon, RingsIcon } from "./icons";

const events = [
  { time: "09:30", text: "Skup svatova kod porodice Matić", Icon: SuitIcon },
  { time: "11:00", text: "Skup svatova kod porodice Đurković", Icon: DressIcon },
  { time: "13:30", text: "Crkveno venčanje u manastiru Ljubostinja", Icon: ChurchIcon },
  { time: "15:00", text: "Svečana sala Vrnjačko Vrelo", Icon: DinnerIcon },
  { time: "16:00", text: "Građansko venčanje", Icon: RingsIcon },
];

export function Timeline() {
  return (
    <section className="relative mx-auto w-full max-w-3xl px-5 py-24 sm:px-6 sm:py-40">
      <h2 className="text-center font-display text-[clamp(1.5rem,4vw,2.2rem)] uppercase tracking-[0.32em] text-foreground">
        Tok dana
      </h2>
      <div className="gold-rule mx-auto mt-6 h-px w-40" />

      {/* Mobile: stacked cards, time above each card */}
      <ol className="mt-14 flex flex-col gap-8 sm:hidden">
        {events.map(({ time, text, Icon }, i) => (
          <motion.li
            key={time}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1], delay: 0.04 * i }}
            className="flex flex-col items-center gap-3 text-center"
          >
            <p className="font-display text-[1.6rem] leading-none tracking-[0.16em] gold-text">
              {time}
            </p>
            <div className="flex w-full min-w-0 flex-col items-center gap-3 rounded-lg border border-border bg-card px-4 py-6 shadow-paper">
              <Icon className="h-10 w-auto shrink-0 text-sage/80" />
              <p className="min-w-0 text-[0.98rem] leading-relaxed text-muted-foreground">{text}</p>
            </div>
            {i < events.length - 1 && <div className="gold-rule mt-2 h-px w-24" />}
          </motion.li>
        ))}
      </ol>

      {/* Desktop: unchanged alternating timeline */}
      <ol className="relative mt-20 hidden sm:block">
        <div className="absolute bottom-6 left-1/2 top-6 w-px bg-border" />
        {events.map(({ time, text, Icon }, i) => (
          <motion.li
            key={time}
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1.1, ease: [0.22, 0.61, 0.36, 1], delay: 0.05 * i }}
            className="relative mb-20 grid grid-cols-2 items-start gap-16"
          >
            <div className={i % 2 === 0 ? "order-1 text-right" : "order-2 col-start-2"}>
              <p className="font-display text-[clamp(1.3rem,3.4vw,1.7rem)] tracking-[0.14em] gold-text">{time}</p>
              <p className="mt-2 text-[clamp(0.9rem,2.6vw,1.02rem)] leading-relaxed text-muted-foreground">
                {text}
              </p>
            </div>
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-full border border-border bg-card ${
                i % 2 === 0 ? "order-2 -ml-7" : "order-1 col-start-1 ml-auto -mr-7"
              }`}
            >
              <Icon className="h-9 w-auto text-sage/80" />
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
