import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "honjae",
  description: "honjae",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full">
      <body className="min-h-full bg-black">{children}</body>
    </html>
  );
}
