import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Link from "next/link";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "jung-ai",
  description:
    "Interpretación simbólica de tarot con IA y arquetipos junguianos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-neutral-950 text-neutral-100 min-h-screen`}
      >
        <header className="p-4 bg-white shadow">
          <nav className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/draw">Draw</Link>
          </nav>
        </header>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
