"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV } from "@/lib/nav";

function normalize(path: string) {
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path || "/";
}

function isActive(pathname: string, href: string) {
  const target = normalize(href);
  if (target === "/") return pathname === "/";
  return pathname === target || pathname.startsWith(`${target}/`);
}

export function Header() {
  const pathname = normalize(usePathname() || "/");
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-[#d4b483]/35 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-4 sm:px-6">
        <Link href="/" className="font-serif text-[1.65rem] tracking-[0.18em] text-white">
          혼재
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
          {NAV.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-2 text-[15px] tracking-wide transition-colors ${
                  active ? "text-[#f3ddb0]" : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
                {active ? (
                  <span className="absolute inset-x-0 -bottom-[22px] h-px bg-[#f3ddb0]" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center border border-white/20 text-white lg:hidden"
          aria-expanded={open}
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="flex w-4 flex-col gap-1">
            <span className="h-px bg-white" />
            <span className="h-px bg-white" />
            <span className="h-px bg-white" />
          </span>
        </button>
        <span className="hidden w-10 lg:block" />
      </div>

      {open ? (
        <nav className="border-t border-white/10 bg-black px-4 py-3 lg:hidden">
          {NAV.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block py-3 text-base ${active ? "text-[#f3ddb0]" : "text-white/85"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      ) : null}
    </header>
  );
}
