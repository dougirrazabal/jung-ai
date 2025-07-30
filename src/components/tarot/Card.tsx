// src/components/tarot/Card.tsx
"use client";

import Image from "next/image";
import { TarotCard } from "@/lib/tarotData";

type Props = {
  card: TarotCard;
};

export default function Card({ card }: Props) {
  return (
    <div className="w-32 flex flex-col items-center space-y-1">
      <Image
        src={card.src}
        alt={card.name}
        width={100}
        height={160}
        className="rounded-md shadow-md"
      />
      <div className="text-center text-sm text-neutral-300">
        <div className="font-semibold">{card.name}</div>
        <div className="text-xs text-neutral-500">
          {card.number} • {card.hebrew}
        </div>
      </div>
    </div>
  );
}
