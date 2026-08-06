export function InvitationImage() {
  return (
    <section className="relative flex w-full justify-center px-5 py-12 sm:py-16">
      <div className="mx-auto w-full max-w-[620px]">
        <img
          src="/pozivnica-dizajn.png"
          alt="Pozivnica za venčanje Mione i Ilije — 26.09.2026."
          width={620}
          height={856}
          className="mx-auto block h-auto w-full object-contain"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </div>
    </section>
  );
}
