export function HeroScene() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_18%,#d7e7ef_0%,#7fa3b8_18%,#355066_46%,#121820_78%,#07080c_100%)]" />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="mist" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="1" stopColor="#d5e4ec" stopOpacity="0.55" />
          </linearGradient>
          <linearGradient id="fall" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#f4fbff" stopOpacity="0.15" />
            <stop offset="1" stopColor="#f4fbff" stopOpacity="0.75" />
          </linearGradient>
        </defs>

        <path d="M0 430 C220 360 380 470 560 400 C760 320 900 470 1120 390 C1320 330 1460 420 1600 360 L1600 900 L0 900 Z" fill="#24343a" />
        <path d="M980 180 L1040 520 L1120 180 Z" fill="url(#fall)" opacity="0.55" />
        <path d="M1080 210 L1135 540 L1205 200 Z" fill="url(#fall)" opacity="0.35" />
        <path d="M150 520 C280 430 390 560 520 500 C690 420 760 560 980 500 L980 900 L150 900 Z" fill="#1a282c" />
        <path d="M40 610 C180 540 260 650 420 590 C560 540 640 660 860 600 L860 900 L0 900 Z" fill="#10181b" />

        <ellipse cx="800" cy="250" rx="210" ry="70" fill="none" stroke="#b7d3e2" strokeWidth="10" opacity="0.75" />
        <ellipse cx="800" cy="250" rx="250" ry="86" fill="none" stroke="#e8f4fb" strokeWidth="2" opacity="0.45" />

        <g fill="#1c2a2c" stroke="#d4b483" strokeWidth="1.2">
          <path d="M470 560 L620 470 L770 560 L740 760 L500 760 Z" />
          <path d="M560 500 L620 470 L680 500 L680 560 L560 560 Z" fill="#24383a" />
          <rect x="590" y="610" width="60" height="150" fill="#0c1416" stroke="#e7c98a" />
        </g>
        <g fill="#24342f">
          <path d="M1040 500 L1240 430 L1420 520 L1380 760 L1080 760 Z" />
          <path d="M1120 470 L1240 430 L1340 480 L1320 540 L1140 540 Z" fill="#31443c" />
          <rect x="1160" y="560" width="28" height="70" fill="#f2d7a2" opacity="0.85" />
          <rect x="1260" y="590" width="22" height="54" fill="#f2d7a2" opacity="0.7" />
        </g>
        <path d="M180 690 C260 640 300 700 380 660 C450 630 500 700 600 670 L560 820 L160 820 Z" fill="#6d2430" opacity="0.9" />
        <rect x="250" y="760" width="210" height="18" fill="#0b0f10" />
        <path d="M70 780 C240 740 420 800 700 750 L700 900 L0 900 Z" fill="#070b0c" />
      </svg>
      <div className="absolute inset-0 bg-[linear-gradient(to_top,#050607_0%,rgba(5,6,7,0.2)_24%,transparent_42%,rgba(0,0,0,0.25)_100%)]" />
    </div>
  );
}
