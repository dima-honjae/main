import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { characters, getCharacter } from "@/lib/characters";

export function generateStaticParams() {
  return characters.map((character) => ({ slug: character.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const character = getCharacter(slug);
  return {
    title: character?.name ?? "캐릭터",
    description: character ? `${character.name} 소개` : "캐릭터 소개",
  };
}

export default async function CharacterDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const character = getCharacter(slug);
  if (!character) notFound();

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="flex min-h-screen flex-col pt-[72px] lg:flex-row">
        <div className="relative flex min-w-0 flex-1 items-center justify-center px-4 py-6 sm:px-8">
          <Link
            href="/characters"
            className="absolute left-4 top-4 z-10 text-sm tracking-wide text-white/80 hover:text-white sm:left-8 sm:top-6"
          >
            뒤로 가기
          </Link>
          <Image
            src={character.image}
            alt={character.name}
            priority
            className="h-auto max-h-[calc(100vh-7.5rem)] w-auto max-w-full object-contain"
          />
        </div>

        <aside className="flex gap-3 overflow-x-auto border-t border-white/10 bg-black/70 p-4 lg:w-[168px] lg:flex-col lg:overflow-y-auto lg:border-l lg:border-t-0">
          {characters.map((item) => {
            const selected = item.slug === character.slug;
            return (
              <Link
                key={item.slug}
                href={`/characters/${item.slug}`}
                aria-label={item.name}
                className={`relative shrink-0 overflow-hidden border bg-black ${
                  selected
                    ? "h-44 w-28 border-white lg:h-56 lg:w-full"
                    : "h-36 w-20 border-white/15 opacity-70 hover:opacity-100 lg:h-40 lg:w-full"
                }`}
                aria-current={selected ? "page" : undefined}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="160px"
                  className="object-cover"
                  style={{ objectPosition: item.focus }}
                />
                {selected ? (
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent px-2 pb-2 pt-8 text-center text-xs">
                    {item.name}
                  </span>
                ) : null}
              </Link>
            );
          })}
        </aside>
      </div>
    </div>
  );
}
