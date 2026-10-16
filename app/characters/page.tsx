import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { CharacterRoster } from "@/components/CharacterRoster";

export const metadata: Metadata = {
  title: "캐릭터",
  description: "혼재의 인물",
};

export default function CharactersPage() {
  return (
    <div className="bg-[#101114] text-white">
      <Header />
      <CharacterRoster />
    </div>
  );
}
