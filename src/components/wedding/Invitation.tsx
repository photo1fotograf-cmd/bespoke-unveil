import { SuitIcon, DressIcon, ChurchIcon, DinnerIcon, RingsIcon } from "./icons";

const stops = [
  { time: "09:30", lines: ["Скуп сватова у дому", "породице Матић"], Icon: SuitIcon, offset: "sm:translate-y-10" },
  { time: "11:00", lines: ["Скуп сватова у дому", "породице Ђурковић"], Icon: DressIcon, offset: "sm:-translate-y-1" },
  { time: "13:30", lines: ["Црквено венчање у", "манастиру Љубостиња"], Icon: ChurchIcon, offset: "sm:translate-y-6", below: true },
  { time: "15:00", lines: ["Свечана сала", "Врњачко Врело"], Icon: DinnerIcon, offset: "sm:-translate-y-8" },
  { time: "16:00", lines: ["Грађанско венчање"], Icon: RingsIcon, offset: "sm:translate-y-2", below: true },
];

export function Invitation({ nameRef }: { nameRef?: React.Ref<HTMLDivElement> }) {
  return (
    <article className="paper-texture shadow-paper relative mx-auto flex w-full max-w-[620px] flex-col justify-center overflow-hidden text-center sm:aspect-[1/1.38]">
      {/* gold foil deckled edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          boxShadow: "inset 0 0 0 1px oklch(0.82 0.07 88 / 0.55), inset 0 0 44px oklch(0.85 0.09 88 / 0.35)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-6 -top-6 h-40 w-40 rotate-12 opacity-45 blur-[2px]"
        style={{ background: "radial-gradient(circle at 30% 30%, oklch(0.85 0.1 88 / 0.85), transparent 65%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-8 -right-6 h-44 w-44 opacity-40 blur-[2px]"
        style={{ background: "radial-gradient(circle at 70% 70%, oklch(0.82 0.1 88 / 0.8), transparent 65%)" }}
      />

      <div className="relative z-20 px-[5%] pb-[9%] pt-[11%]">
        <h1 className="font-serif text-[clamp(0.82rem,2.9vw,1.18rem)] uppercase leading-[1.65] tracking-[0.06em] text-foreground">
          Са радошћу вас позивамо
          <br />
          да заједно прославимо
          <br />
          наше венчање
        </h1>

        <div ref={nameRef} className="relative mt-[9%]">
          <p
            data-names
            className="whitespace-nowrap font-script text-[clamp(2.1rem,8.6vw,3.6rem)] leading-[1.05] text-sage"
          >
            Миона и Илија
          </p>
        </div>

        <p className="mt-[5%] font-serif text-[clamp(1rem,3.6vw,1.45rem)] tracking-[0.02em] text-foreground">
          26.09.2026.
        </p>

        <div className="mt-[12%] flex flex-wrap items-center justify-center gap-x-[1%] gap-y-8 sm:flex-nowrap">
          {stops.map(({ time, lines, Icon, offset, below }) => (
            <div key={time} className={`flex w-[46%] flex-col items-center sm:w-1/5 ${offset}`}>
              {below ? null : (
                <div className="mb-1 w-[128%] text-[clamp(0.55rem,1.75vw,0.68rem)] leading-[1.45] text-muted-foreground">
                  <span className="block font-bold text-foreground">{time}</span>
                  {lines.map((l) => (
                    <span key={l} className="block">{l}</span>
                  ))}
                </div>
              )}
              <Icon className="h-[clamp(2.1rem,6.5vw,2.9rem)] w-auto text-sage/80" />
              {below ? (
                <div className="mt-1 w-[128%] text-[clamp(0.55rem,1.75vw,0.68rem)] leading-[1.45] text-muted-foreground">
                  <span className="block font-bold text-foreground">{time}</span>
                  {lines.map((l) => (
                    <span key={l} className="block">{l}</span>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <p className="mt-[13%] font-serif text-[clamp(0.8rem,2.8vw,1.08rem)] text-foreground">
          Молимо Вас да свој долазак потврдите до 31.08.2026.
        </p>

        <div className="mt-[8%] font-script text-[clamp(1.2rem,4.4vw,1.85rem)] leading-[1.6] text-sage">
          <p>С поштовањем</p>
          <p>породице Матић и Ђурковић</p>
        </div>
      </div>
    </article>
  );
}
