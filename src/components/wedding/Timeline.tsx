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
    <section className="relative mx-auto w-full max-w-3xl px-6 py-28 sm:py-40">
      <h2 className="text-center font-display text-[clamp(1.5rem,4vw,2.2rem)] uppercase tracking-[0.32em] text-foreground">
        Tok dana
      </h2>
      <div className="gold-rule mx-auto mt-6 h-px w-40" />

      <ol className="relative mt-20">
        <div className="absolute bottom-6 left-[22px] top-6 w-px bg-border sm:left-1/2" />
        {events.map(({ time, text, Icon }, i) => (
          <motion.li
            key={time}
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1.1, ease: [0.22, 0.61, 0.36, 1], delay: 0.05 * i }}
            className="relative mb-16 flex items-start gap-6 pl-0 sm:mb-20 sm:grid sm:grid-cols-2 sm:gap-16"
          >
            <div className={i % 2 === 0 ? "sm:order-1 sm:text-right" : "sm:order-2 sm:col-start-2"}>
              <p className="font-display text-[clamp(1.3rem,3.4vw,1.7rem)] tracking-[0.14em] gold-text">{time}</p>
              <p className="mt-2 text-[clamp(0.9rem,2.6vw,1.02rem)] leading-relaxed text-muted-foreground">
                {text}
              </p>
            </div>
            <div
              className={`absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card sm:static sm:h-14 sm:w-14 ${
                i % 2 === 0 ? "sm:order-2 sm:-ml-7" : "sm:order-1 sm:col-start-1 sm:ml-auto sm:-mr-7"
              }`}
            >
              <Icon className="h-7 w-auto text-sage/80 sm:h-9" />
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
