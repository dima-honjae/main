"use client";

import { useEffect, useState } from "react";

const FRAMES = [
  { kicker: "01", text: "안개가 걷히기 전" },
  { kicker: "02", text: "같은 자리에 세 도시" },
  { kicker: "03", text: "문을 여는 사람들" },
];

export function TrailerStage() {
  const [playing, setPlaying] = useState(false);
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => {
      setFrame((current) => (current + 1) % FRAMES.length);
    }, 2200);
    return () => window.clearInterval(timer);
  }, [playing]);

  const current = FRAMES[frame];

  return (
    <div className="overflow-hidden border border-white/15 bg-black">
      <div className="relative flex min-h-[420px] items-center justify-center bg-[radial-gradient(circle_at_center,#355066,#07080c_70%)] sm:min-h-[520px]">
        {playing ? (
          <div key={current.kicker} className="px-8 text-center">
            <p className="text-xs tracking-[0.45em] text-[#d4b483]">{current.kicker}</p>
            <p className="mt-4 font-serif text-4xl sm:text-6xl">{current.text}</p>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => {
              setFrame(0);
              setPlaying(true);
            }}
            className="grid size-24 place-items-center rounded-full border border-white/80 bg-black/30 transition-transform hover:scale-105"
            aria-label="트레일러 재생"
          >
            <span className="ml-1 block border-y-[12px] border-l-[18px] border-y-transparent border-l-white" />
          </button>
        )}
      </div>
      <div className="flex items-center justify-between gap-4 border-t border-white/10 px-5 py-4 text-sm text-white/70">
        <p>{playing ? "재생 중" : "재생 전"} · 겹쳐진 하루</p>
        {playing ? (
          <button type="button" className="text-[#f3ddb0]" onClick={() => setPlaying(false)}>
            멈추기
          </button>
        ) : (
          <span>01:20</span>
        )}
      </div>
    </div>
  );
}
