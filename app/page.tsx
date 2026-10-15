import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { HeroScene } from "@/components/HeroScene";

export const metadata: Metadata = {
  title: "메인",
  description: "혼재 메인 화면",
};

const SHORTCUTS = [
  { href: "/world", label: "세계관", note: "세 도시" },
  { href: "/characters", label: "캐릭터", note: "문을 여는 사람" },
  { href: "/trailer", label: "트레일러", note: "겹쳐진 하루" },
  { href: "/team", label: "팀", note: "만든 사람들" },
];

export default function Home() {
  return (
    <div className="bg-[#07080c] text-white">
      <section className="relative min-h-screen overflow-hidden">
        <HeroScene />
        <Header />

        <Link
          href="/trailer"
          aria-label="트레일러 보기"
          className="absolute left-1/2 top-[46%] z-20 grid size-[88px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/80 bg-black/25 backdrop-blur-sm transition-transform hover:scale-105"
        >
          <span className="ml-1 block border-y-[11px] border-l-[18px] border-y-transparent border-l-white" />
        </Link>

        <div className="absolute inset-x-0 bottom-16 z-20 mx-auto flex max-w-[1440px] items-end justify-between gap-6 px-4 sm:bottom-20 sm:px-8">
          <div className="grid max-w-xl grid-cols-2 gap-2 sm:gap-3">
            {SHORTCUTS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border border-white/20 bg-black/55 px-4 py-3 backdrop-blur-sm transition-colors hover:border-[#d4b483]"
              >
                <span className="block text-sm text-white sm:text-base">{item.label}</span>
                <span className="mt-1 block text-xs text-white/55">{item.note}</span>
              </Link>
            ))}
          </div>

          <Link
            href="/exhibition"
            className="hidden w-64 shrink-0 overflow-hidden border border-white/15 bg-black/60 backdrop-blur-sm transition-colors hover:border-[#d4b483] md:block"
          >
            <div className="h-28 bg-[linear-gradient(135deg,#6d2430,#1c2a2c_45%,#d4b483)]" />
            <div className="px-4 py-3">
              <p className="text-sm leading-6 text-white">세 세계가 겹친 날, 전시가 문을 연다</p>
              <p className="mt-2 text-xs tracking-wide text-[#f3ddb0]">전시 정보 안내</p>
            </div>
          </Link>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between px-4 py-4 text-[11px] tracking-[0.35em] text-white/70 sm:px-8">
          <span>HONJAE</span>
          <a href="#intro" className="hover:text-white">
            SCROLL
          </a>
        </div>
      </section>

      <section id="intro" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <p className="text-xs tracking-[0.42em] text-[#d4b483]">MAIN</p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-6xl">
          같은 자리,
          <br />
          세 개의 도시
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
          혼재는 안개 속에서 세계가 겹치는 순간을 따라가는 온라인 전시입니다. 위의
          메뉴에서 세계관, 캐릭터, 트레일러, 팀, 전시 정보로 이동할 수 있습니다.
        </p>
        <Link
          href="/exhibition"
          className="mt-8 inline-flex border border-[#d4b483] px-5 py-3 text-sm tracking-wide text-[#f3ddb0] hover:bg-[#d4b483] hover:text-black md:hidden"
        >
          전시 정보 보기
        </Link>
      </section>
    </div>
  );
}
