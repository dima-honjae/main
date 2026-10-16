import dmitri from "@/public/characters/dmitri.jpg";
import ren from "@/public/characters/ren.jpg";
import suzune from "@/public/characters/suzune.jpg";
import type { StaticImageData } from "next/image";

export type Character = {
  slug: string;
  name: string;
  nameEn: string;
  image: StaticImageData;
  focus: string;
};

export const characters: Character[] = [
  {
    slug: "ren",
    name: "렌 · 세버런스",
    nameEn: "REN · SEVERANCE",
    image: ren,
    focus: "64% 12%",
  },
  {
    slug: "suzune",
    name: "스즈네 · 오라진",
    nameEn: "SUZUNE · ORIGIN",
    image: suzune,
    focus: "62% 18%",
  },
  {
    slug: "dmitri",
    name: "드미트리 · 오라진",
    nameEn: "DMITRI · ORIGIN",
    image: dmitri,
    focus: "52% 24%",
  },
];

export function getCharacter(slug: string) {
  return characters.find((character) => character.slug === slug);
}
