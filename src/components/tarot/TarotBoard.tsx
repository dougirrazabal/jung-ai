"use client";

import { useContext } from "react";
import { TarotContext } from "@/context/TarotContext";
import { tarotDeck } from "@/lib/tarotData";
import Card from "./Card";

export default function TarotBoard() {
  const { selectedCards, positions, interpretation, setInterpretation } =
    useContext(TarotContext);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-h-[60vh] overflow-y-auto border p-4 rounded-xl">
        {tarotDeck.map((card) => (
          <Card key={card.number} card={card} />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4">
        {positions.map((position) => (
          <div
            key={position}
            className="border border-dashed border-neutral-600 rounded-xl p-4 min-h-[100px] flex items-center justify-center text-sm text-neutral-400"
          >
            {selectedCards[position]?.name || `Posición: ${position}`}
          </div>
        ))}
      </div>

      <button
        className="mt-4 bg-primary text-white px-6 py-2 rounded-xl hover:bg-purple-800 transition"
        onClick={() => {
          // Acá luego llamaremos a la server action
          setInterpretation("✨ Interpretación aún no implementada ✨");
        }}
      >
        Interpretar
      </button>

      {interpretation && (
        <div className="mt-6 p-4 border border-neutral-700 rounded-xl bg-neutral-900 text-sm text-neutral-300">
          {interpretation}
        </div>
      )}
    </div>
  );
}
