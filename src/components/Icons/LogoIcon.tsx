export function LogoIcon() {
  return (
    <svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="focusGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#78CBFF" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#78CBFF" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="128" cy="128" r="70" fill="url(#focusGlow)" />

      <circle
        cx="128"
        cy="128"
        r="92"
        stroke="#78CBFF"
        strokeWidth="18"
        strokeLinecap="round"
        strokeDasharray="540 38"
        transform="rotate(-90 128 128)"
      />

      <circle
        cx="128"
        cy="128"
        r="72"
        stroke="#78CBFF"
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray="90 420"
        opacity="0.65"
        transform="rotate(180 128 128)"
      />

      <circle
        cx="128"
        cy="128"
        r="72"
        stroke="#78CBFF"
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray="90 420"
        opacity="0.65"
        transform="rotate(0 128 128)"
      />

      <circle cx="128" cy="128" r="12" fill="#78CBFF" />
    </svg>
  );
}
