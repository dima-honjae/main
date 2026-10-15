import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "캐릭터",
  description: "혼재의 문을 오가는 인물",
};

const CHARACTERS = [
  {
    name: "설린",
    role: "문의 기록자",
    tone: "from-[#6d2430] to-[#1a2428]",
    body: "안개가 걷히기 전의 거리를 스케치로 남긴다. 그림 속의 간판만이 어제와 오늘 중 어느 도시인지 알려 준다.",
  },
  {
    name: "무영",
    role: "고리의 관측자",
    tone: "from-[#355066] to-[#10161a]",
    body: "하늘 고리의 밝기를 재고, 종소리가 어긋나는 간격을 사람들에게 미리 알린다.",
  },
  {
    name: "하람",
    role: "강의 안내인",
    tone: "from-[#245044] to-[#121816]",
    body: "다리 위와 아래를 오가며 길을 잃는 이를 원래의 계절로 돌려보낸다. 물소리를 나침반처럼 듣는다.",
  },
  {
    name: "진우",
    role: "등불의 수리공",
    tone: "from-[#8a6232] to-[#1c1612]",
    body: "창마다 남은 등불을 고친다. 불이 켜진 창은 그 집이 아직 이 세계에 머문다는 표시다.",
  },
];

export default function CharactersPage() {
  return (
    <PageShell
      eyebrow="CHARACTERS"
      title="캐릭터"
      lede="세계를 오가는 네 사람입니다. 각자 문, 고리, 강, 등불을 맡아 도시가 겹치는 밤을 통과합니다."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {CHARACTERS.map((character) => (
          <article key={character.name} className="overflow-hidden border border-white/10 bg-white/[0.03]">
            <div className={`flex h-44 items-end bg-gradient-to-br ${character.tone} p-6`}>
              <h2 className="font-serif text-4xl">{character.name}</h2>
            </div>
            <div className="p-6">
              <p className="text-sm tracking-wide text-[#f3ddb0]">{character.role}</p>
              <p className="mt-3 leading-8 text-white/72">{character.body}</p>
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
