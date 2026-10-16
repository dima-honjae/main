import Image from "next/image";
import hero from "@/public/honjae-hero.jpg";

export function HeroScene() {
  return (
    <Image
      src={hero}
      alt="혼재"
      priority
      sizes="(min-width: 1024px) 820px, 88vw"
      className="h-auto w-full"
    />
  );
}
