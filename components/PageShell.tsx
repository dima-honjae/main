import type { ReactNode } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { NAV } from "@/lib/nav";

export function PageShell({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  children: ReactNode;
}) {
  return (
    <div className="site-bg min-h-screen text-white">
      <Header />
      <main className="mx-auto max-w-6xl px-5 pb-24 pt-32 sm:px-8">
        <p className="text-xs tracking-[0.42em] text-[#d4b483]">{eyebrow}</p>
        <h1 className="mt-4 font-serif text-4xl tracking-wide sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">{lede}</p>
        <div className="mt-12">{children}</div>
      </main>
      <footer className="border-t border-white/10">
        <nav className="mx-auto flex max-w-6xl flex-wrap gap-x-6 gap-y-3 px-5 py-8 text-sm text-white/60 sm:px-8">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
      </footer>
    </div>
  );
}
