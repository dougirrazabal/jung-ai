"use server";

import { TarotProvider } from "@/context/TarotContext";
import TarotBoard from "@/components/tarot/TarotBoard";

export default async function TarotPage() {
  return (
    <TarotProvider>
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Tu tirada</h2>
        <p className="text-neutral-400 max-w-prose">
          Arrastra las cartas desde el mazo hacia las posiciones disponibles.
          Cuando estés listo, pulsa interpretar.
        </p>
        <TarotBoard />
      </section>
    </TarotProvider>
  );
}
