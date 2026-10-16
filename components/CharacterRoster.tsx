"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { characters } from "@/lib/characters";

export function CharacterRoster() {
  const scroller = useRef<HTMLDivElement>(null);

  function move(direction: number) {
    scroller.current?.scrollBy({ left: direction * 220, behavior: "smooth" });
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#101114] pt-[72px] text-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col gap-8 px-5 py-8 lg:flex-row lg:items-center lg:px-10">
        <div className="relative w-full shrink-0 lg:w-[34%]">
          <svg viewBox="0 0 160 120" className="mb-8 h-28 w-40 text-white/25" aria-hidden="true">
            <circle cx="70" cy="58" r="28" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="96" cy="58" r="28" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M48 92c16 10 48 10 64 0" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <div className="h-px w-40 bg-white/25" />
          <p className="mt-6 font-serif text-4xl tracking-[0.14em] sm:text-5xl">HONJAE</p>
          <p className="mt-2 font-serif text-3xl">혼재</p>
          <p className="pointer-events-none mt-8 select-none font-serif text-5xl tracking-[0.2em] text-white/10 sm:text-7xl">
            혼재
          </p>
        </div>

        <div
          ref={scroller}
          className="flex min-w-0 flex-1 items-end gap-3 overflow-x-auto pb-2 lg:justify-end"
        >
          {characters.map((character) => (
            <Link
              key={character.slug}
              href={`/characters/${character.slug}`}
              className="group relative h-[58vh] max-h-[620px] min-h-[360px] w-[42vw] max-w-[210px] shrink-0 overflow-hidden border border-white/15 bg-black transition-transform hover:-translate-y-1"
            >
              <Image
                src={character.image}
                alt={character.name}
                fill
                sizes="210px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ objectPosition: character.focus }}
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-3 pb-3 pt-10 text-sm">
                {character.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[1440px] justify-end gap-3 px-5 pb-8 lg:px-10">
        <button
          type="button"
          aria-label="이전 캐릭터"
          onClick={() => move(-1)}
          className="grid h-10 w-14 place-items-center border border-white/25 text-white/80 hover:border-white"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="다음 캐릭터"
          onClick={() => move(1)}
          className="grid h-10 w-14 place-items-center border border-white/25 text-white/80 hover:border-white"
        >
          ›
        </button>
      </div>
    </div>
  );
}
