import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { TrailerStage } from "@/components/TrailerStage";

export const metadata: Metadata = {
  title: "트레일러",
  description: "혼재 트레일러 겹쳐진 하루",
};

const CHAPTERS = [
  { time: "00:00", title: "안개가 걷히기 전" },
  { time: "00:24", title: "같은 자리에 세 도시" },
  { time: "00:48", title: "문을 여는 사람들" },
];

export default function TrailerPage() {
  return (
    <PageShell
      eyebrow="TRAILER"
      title="트레일러"
      lede="짧은 영상 「겹쳐진 하루」입니다. 가운데 버튼을 누르면 세 장면이 차례로 지나갑니다."
    >
      <TrailerStage />
      <ol className="mt-6 divide-y divide-white/10 border border-white/10">
        {CHAPTERS.map((chapter) => (
          <li key={chapter.time} className="flex items-center justify-between px-5 py-4">
            <span>{chapter.title}</span>
            <span className="text-sm text-white/50">{chapter.time}</span>
          </li>
        ))}
      </ol>
    </PageShell>
  );
}
