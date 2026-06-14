export default function HeroIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[420px]">
      <div className="absolute inset-[8%] rounded-full bg-white/95 shadow-lg" />

      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 h-full w-full"
        aria-hidden
      >
        {/* Étoiles */}
        <path
          d="M72 58l4 10 10 4-10 4-4 10-4-10-10-4 10-4 4-10z"
          fill="white"
          opacity="0.9"
        />
        <path
          d="M318 72l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z"
          fill="white"
          opacity="0.75"
        />
        <circle cx="290" cy="48" r="3" fill="white" opacity="0.6" />
        <circle cx="110" cy="95" r="2" fill="white" opacity="0.5" />

        {/* Nuages */}
        <ellipse cx="130" cy="78" rx="28" ry="12" fill="white" opacity="0.85" />
        <ellipse cx="148" cy="74" rx="20" ry="10" fill="white" opacity="0.85" />
        <ellipse cx="255" cy="110" rx="22" ry="9" fill="white" opacity="0.7" />

        {/* Fusée */}
        <g transform="translate(168 42)">
          <path
            d="M32 8c0 0 8 24 8 48 0 18-8 32-8 32s-8-14-8-32c0-24 8-48 8-48z"
            fill="#3b82f6"
          />
          <path
            d="M32 88l-14 18h28L32 88z"
            fill="#ef4444"
          />
          <circle cx="32" cy="36" r="10" fill="#dbeafe" />
          <path
            d="M18 52c-6 8-10 18-10 28 0 4 2 8 4 10-2-10 2-22 6-30z"
            fill="#2563eb"
          />
          <path
            d="M46 52c6 8 10 18 10 28 0 4-2 8-4 10 2-10-2-22-6-30z"
            fill="#2563eb"
          />
          {/* Fumée */}
          <ellipse cx="32" cy="118" rx="18" ry="8" fill="white" opacity="0.9" />
          <ellipse cx="22" cy="124" rx="12" ry="6" fill="white" opacity="0.7" />
          <ellipse cx="42" cy="124" rx="12" ry="6" fill="white" opacity="0.7" />
        </g>

        {/* Smartphone */}
        <g transform="translate(118 168)">
          <rect x="0" y="0" width="164" height="108" rx="14" fill="#1e293b" />
          <rect x="8" y="8" width="148" height="92" rx="10" fill="#f8fafc" />
          <rect x="62" y="72" width="40" height="14" rx="7" fill="#3b82f6" />
          <text
            x="82"
            y="83"
            textAnchor="middle"
            fill="white"
            fontSize="8"
            fontWeight="700"
            fontFamily="sans-serif"
          >
            START
          </text>
          <rect x="72" y="4" width="20" height="3" rx="1.5" fill="#334155" />
        </g>

        {/* Personnage */}
        <g transform="translate(248 210)">
          <ellipse cx="28" cy="88" rx="36" ry="8" fill="#000" opacity="0.08" />
          <path
            d="M8 88V52c0-8 6-14 14-14h12c8 0 14 6 14 14v36"
            fill="#2563eb"
          />
          <circle cx="22" cy="28" r="14" fill="#fcd9b6" />
          <path
            d="M8 28c0-8 6-14 14-14s14 6 14 14"
            fill="#1e293b"
          />
          <path
            d="M36 20c8 4 14 12 16 22"
            stroke="#fcd9b6"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M10 48l-8-16"
            stroke="#fcd9b6"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <path d="M14 88h16v12H14z" fill="#1e293b" />
          <path d="M14 100h6v18h-6z" fill="#1e293b" />
          <path d="M24 100h6v18h-6z" fill="#1e293b" />
        </g>
      </svg>
    </div>
  );
}
