import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "전시 정보",
  description: "혼재 온라인 전시 관람 안내",
};

const FACTS = [
  { label: "전시명", value: "혼재" },
  { label: "형식", value: "온라인 전시" },
  { label: "관람", value: "상시, 별도의 예약 없이 둘러볼 수 있습니다." },
  { label: "구성", value: "메인, 세계관, 캐릭터, 트레일러, 팀, 전시 정보" },
];

const ROOMS = [
  { href: "/world", label: "세계관", text: "세 도시가 겹치는 규칙" },
  { href: "/characters", label: "캐릭터", text: "렌, 스즈네, 드미트리" },
  { href: "/trailer", label: "트레일러", text: "영상 「겹쳐진 하루」" },
  { href: "/team", label: "팀", text: "전시를 나눈 네 가지 역할" },
];

export default function ExhibitionPage() {
  return (
    <PageShell
      eyebrow="EXHIBITION"
      title="전시 정보"
      lede="혼재는 브라우저에서 바로 관람하는 온라인 전시입니다. 상단 메뉴가 전시실 사이의 문입니다."
    >
      <dl className="divide-y divide-white/10 border border-white/10">
        {FACTS.map((fact) => (
          <div key={fact.label} className="grid gap-2 px-5 py-5 sm:grid-cols-[140px_1fr] sm:gap-6">
            <dt className="text-sm tracking-wide text-[#d4b483]">{fact.label}</dt>
            <dd className="text-white/85">{fact.value}</dd>
          </div>
        ))}
      </dl>

      <h2 className="mt-14 font-serif text-3xl">전시실</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {ROOMS.map((room) => (
          <Link
            key={room.href}
            href={room.href}
            className="border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-[#d4b483]"
          >
            <p className="font-serif text-2xl">{room.label}</p>
            <p className="mt-2 text-white/65">{room.text}</p>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
