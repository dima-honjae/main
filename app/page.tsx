import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { HeroScene } from "@/components/HeroScene";

export const metadata: Metadata = {
  title: "메인 | 혼재",
  description: "혼재 메인 화면",
};

export default function Home() {
  return (
    <div className="bg-[#07080c] text-white">
      <section className="bg-[#07080c]">
        <Header />
        <div className="mx-auto w-[min(820px,88vw)] pt-28">
          <div className="relative">
            <HeroScene />
            <Link
              href="/trailer"
              aria-label="트레일러 보기"
              className="absolute left-1/2 top-1/2 z-20 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/80 bg-black/30 backdrop-blur-sm transition-transform hover:scale-105"
            >
              <span className="ml-1 block border-y-[9px] border-l-[14px] border-y-transparent border-l-white" />
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-between px-4 py-6 text-[11px] tracking-[0.35em] text-white/70 sm:px-8">
          <span>HONJAE</span>
          <a href="#intro" className="hover:text-white">
            SCROLL
          </a>
        </div>
      </section>

      <section id="intro" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <p className="text-xs tracking-[0.42em] text-[#d4b483]">MAIN</p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-6xl">
          익숙한 전투 속, 낯선 자신을 마주하다
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
        나는 사회의 요구에 맞춰 살아가고 있는 걸까?
        <br/>
        아니면 내가 진정으로 원하는 모습대로 살아가고 있는 걸까?
        <br/>
        
        타인의 기대에 부응하기 위해 자아를 바꾸고,
        <br/>
        사회가 정해 놓은 기준에 맞춰 살아가는 것이 당연해진 지금,
        <br/>
        여러분은 과연 자신이 원하는 모습대로 살아가고 있다고 당당히 답할 수 있을까요?
        <br/>
        
        숨겨진 욕망과 자아가 뒤섞이는 혼재의 세계 속에서 그 답을 찾아보시길 바랍니다.
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
