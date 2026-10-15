import Image from "next/image";
import hero from "@/public/honjae-hero.jpg";

export function HeroScene() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Image
        src={hero}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.05)_28%,rgba(0,0,0,0.12)_70%,rgba(0,0,0,0.55)_100%)]" />
    </div>
  );
}
