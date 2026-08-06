import { useEffect, useRef, useState } from "react";

const TRACK =
  "https://photo-fotograf.com/wp-content/uploads/2026/08/grand_project-romantic-italian-melody-amore-al-mare-love-at-the-sea-501525.mp3";

export function MusicToggle() {
  const audio = useRef<HTMLAudioElement | null>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const a = new Audio(TRACK);
    a.loop = true;
    a.volume = 0.28;
    audio.current = a;
    return () => {
      a.pause();
      audio.current = null;
    };
  }, []);

  const toggle = () => {
    const a = audio.current;
    if (!a) return;
    if (on) {
      a.pause();
      setOn(false);
    } else {
      void a.play().then(() => setOn(true)).catch(() => setOn(false));
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={on ? "Isključi muziku" : "Uključi muziku"}
      className="fixed right-5 top-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 bg-card/70 backdrop-blur-sm transition-colors duration-500 hover:bg-gold/10"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 text-sage" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M9 18V5l10-2v13" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="6.5" cy="18" r="2.5" />
        <circle cx="16.5" cy="16" r="2.5" />
        {!on && <path d="M3 21L21 3" strokeLinecap="round" />}
      </svg>
    </button>
  );
}
