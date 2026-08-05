/**
 * Hand-drawn style line-art icons redrawn from the printed invitation.
 * Thin elegant strokes, no icon library.
 */
type P = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function SuitIcon({ className }: P) {
  return (
    <svg viewBox="0 0 48 64" className={className} aria-hidden="true">
      <g {...base}>
        <path d="M18 6c-4 2-9 4-11 6-2 2-2 5-1.5 9L9 46c.5 4 1 8 1.5 12h27c.5-4 1-8 1.5-12l3.5-25c.5-4 .5-7-1.5-9-2-2-7-4-11-6" />
        <path d="M18 6l6 13 6-13" />
        <path d="M18 6l1.5 9L24 19M30 6l-1.5 9L24 19" />
        <path d="M24 19l-2.5 6 2.5 4 2.5-4-2.5-6z" />
        <path d="M10.5 58c2-9 3.5-19 3.5-28M37.5 58c-2-9-3.5-19-3.5-28" />
      </g>
    </svg>
  );
}

export function DressIcon({ className }: P) {
  return (
    <svg viewBox="0 0 48 64" className={className} aria-hidden="true">
      <g {...base}>
        <path d="M18 6l6 5 6-5" />
        <path d="M18 6c-1 4-1 8 0 12l6 4 6-4c1-4 1-8 0-12" />
        <path d="M18 18c-3 6-7 14-10 22-2.5 6.5-3.5 11-3.5 14h39c0-3-1-7.5-3.5-14-3-8-7-16-10-22" />
        <path d="M14 26c4 3 8 4.5 10 4.5S30 29 34 26" />
        <path d="M9 40c5 4 10 6 15 6s10-2 15-6" />
      </g>
    </svg>
  );
}

export function ChurchIcon({ className }: P) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <g {...base}>
        <path d="M32 3v10M28 7h8" />
        <path d="M32 13l-9 9v10" />
        <path d="M32 13l9 9v10" />
        <path d="M23 32h18v26H23z" />
        <path d="M23 32L11 42v16h12M41 32l12 10v16H41" />
        <path d="M32 58V44c0-3-2-5-4.5-5S23 41 23 44" transform="translate(4.5 0)" />
        <path d="M28 26h8M32 22v8" />
        <path d="M15 48h5v6h-5zM44 48h5v6h-5z" />
      </g>
    </svg>
  );
}

export function DinnerIcon({ className }: P) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <g {...base}>
        <circle cx="32" cy="34" r="17" />
        <circle cx="32" cy="34" r="11.5" />
        <path d="M12 12v13c0 2.5 1.5 4 3.5 4S19 27.5 19 25V12" />
        <path d="M15.5 12v11M12 29c0 8-1 15-1 23M15.5 29v23" />
        <path d="M52 12c-3 3-4 7-4 11 0 3 1.5 5 4 5.5" />
        <path d="M52 12v40" />
      </g>
    </svg>
  );
}

export function RingsIcon({ className }: P) {
  return (
    <svg viewBox="0 0 72 56" className={className} aria-hidden="true">
      <g {...base}>
        <ellipse cx="27" cy="33" rx="17" ry="15" />
        <ellipse cx="27" cy="33" rx="12.5" ry="10.5" />
        <ellipse cx="47" cy="30" rx="15" ry="13.5" />
        <ellipse cx="47" cy="30" rx="10.5" ry="9.5" />
        <path d="M43 17l4-6 4 6" />
        <path d="M43 17h8l-4 5-4-5z" />
      </g>
    </svg>
  );
}

export function Ornament({ className }: P) {
  return (
    <svg viewBox="0 0 220 24" className={className} aria-hidden="true">
      <g {...base} strokeWidth={0.9}>
        <path d="M4 12h72M144 12h72" />
        <path d="M110 4c-6 4-10 6-16 8 6 2 10 4 16 8 6-4 10-6 16-8-6-2-10-4-16-8z" />
        <circle cx="86" cy="12" r="2" />
        <circle cx="134" cy="12" r="2" />
      </g>
    </svg>
  );
}
