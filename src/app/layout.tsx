import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

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
    <html lang="es">
      <body
        className={`${inter.className} bg-neutral-950 text-neutral-100 min-h-screen`}
      >
        <header className="w-full border-b border-neutral-800 p-4">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <h1 className="text-xl font-bold tracking-wide">jung-ai</h1>
            {/* Espacio para agregar navegación o modo oscuro en el futuro */}
          </div>
        </header>
        <main className="max-w-5xl mx-auto p-4">{children}</main>
        <footer className="text-sm text-neutral-500 text-center py-6">
          © {new Date().getFullYear()} jung-ai — Explorando el inconsciente
        </footer>
      </body>
    </html>
  );
}
