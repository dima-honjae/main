import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "세계관",
  description: "혼재의 세 도시와 겹쳐진 안개",
};

const CHAPTERS = [
  {
    index: "01",
    title: "안개의 문",
    body: "해가 짧아지는 계절이면 강가의 문이 안개에 잠긴다. 문을 지나면 거리의 이름이 바뀌고, 같은 돌계단이 다른 도시의 지붕으로 이어진다.",
  },
  {
    index: "02",
    title: "금빛 고리",
    body: "하늘 한가운데 얇은 고리가 떠 있다. 고리가 밝아질 때 세 도시의 종소리가 한 박자씩 어긋나며, 사람들은 그 간격으로 오늘의 세계를 가늠한다.",
  },
  {
    index: "03",
    title: "나누어진 강",
    body: "물은 하나의 수로를 흐르지만, 다리 위와 다리 아래의 계절이 다르다. 위에는 단풍이 지고 아래에는 아직 장마의 냄새가 남아 있다.",
  },
];

export default function WorldPage() {
  return (
    <PageShell
      eyebrow="WORLD"
      title="세계관"
      lede="혼재의 무대는 서로 다른 세 도시가 같은 지형을 나눠 쓰는 곳입니다. 안개, 고리, 강이 세계의 경계를 표시합니다."
    >
      <div className="grid gap-5">
        {CHAPTERS.map((chapter) => (
          <article key={chapter.index} className="border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <p className="text-xs tracking-[0.35em] text-[#d4b483]">{chapter.index}</p>
            <h2 className="mt-3 font-serif text-3xl">{chapter.title}</h2>
            <p className="mt-4 max-w-3xl leading-8 text-white/72">{chapter.body}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
