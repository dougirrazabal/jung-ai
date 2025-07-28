"use server";

import Link from "next/link";

export default async function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-6">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
        Bienvenido a <span className="text-primary">jung-ai</span>
      </h2>
      <p className="text-neutral-400 max-w-xl">
        Explora tu inconsciente a través de arquetipos junguianos y el
        simbolismo del tarot, guiado por una inteligencia artificial.
      </p>
      <Link
        href="/tarot"
        className="bg-primary hover:bg-purple-800 text-white px-6 py-3 rounded-2xl text-lg font-semibold transition"
      >
        Comenzar tirada
      </Link>
    </section>
  );
}
