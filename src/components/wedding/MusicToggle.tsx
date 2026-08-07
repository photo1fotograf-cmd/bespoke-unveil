import { useState } from "react";

// Music playback intentionally disabled per request. The component keeps the
// visual toggle but will not load or play any audio.
export function MusicToggle() {
  const [on, setOn] = useState(false);

  const toggle = () => {
    // Only update UI state; do not create or control an Audio element.
    setOn((prev) => !prev);
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
