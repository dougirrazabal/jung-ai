"use client";

import { createContext, useState, ReactNode } from "react";

type Card = {
  name: string;
  image?: string;
};

type CardMap = {
  [position: string]: Card | null;
};

type TarotContextType = {
  selectedCards: CardMap;
  positions: string[];
  interpretation: string | null;
  setInterpretation: (value: string) => void;
};

export const TarotContext = createContext<TarotContextType>({
  selectedCards: {},
  positions: [],
  interpretation: null,
  setInterpretation: () => {},
});

export const TarotProvider = ({ children }: { children: ReactNode }) => {
  const [interpretation, setInterpretation] = useState<string | null>(null);

  // Estas posiciones luego pueden depender del tipo de tirada (1, 3, cruz celta, etc)
  const positions = ["Pasado", "Presente", "Futuro"];

  // Hardcodeo de ejemplo, pronto cambiará con el DND
  const selectedCards: CardMap = {
    Pasado: { name: "El Loco" },
    Presente: { name: "La Sacerdotisa" },
    Futuro: { name: "El Sol" },
  };

  return (
    <TarotContext.Provider
      value={{
        selectedCards,
        positions,
        interpretation,
        setInterpretation,
      }}
    >
      {children}
    </TarotContext.Provider>
  );
};
