import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "팀",
  description: "혼재 전시를 만든 역할",
};

const ROLES = [
  { title: "기획", body: "전시를 여섯 개의 문으로 나누고, 관람자가 세계 사이를 이동하는 순서를 정합니다." },
  { title: "세계관", body: "안개, 고리, 강이 맞닿는 규칙을 쓰고 도시마다 다른 계절을 정리합니다." },
  { title: "비주얼", body: "밤색과 금빛으로 메인 화면의 풍경과 인물 면을 구성합니다." },
  { title: "개발", body: "메인에서 각 페이지로 이어지는 이동과 온라인 전시를 만듭니다." },
];

export default function TeamPage() {
  return (
    <PageShell
      eyebrow="TEAM"
      title="팀"
      lede="혼재는 기획, 세계관, 비주얼, 개발이 한 장면을 나눠 만든 전시입니다."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {ROLES.map((role, index) => (
          <article key={role.title} className="border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <p className="text-xs tracking-[0.35em] text-[#d4b483]">0{index + 1}</p>
            <h2 className="mt-3 font-serif text-3xl">{role.title}</h2>
            <p className="mt-4 leading-8 text-white/72">{role.body}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
