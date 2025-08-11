import { getAllCards } from "@/lib/tarot";
import Image from "next/image";

export default async function CardsList() {
  const cards = await getAllCards();

  return (
    <div className="grid grid-cols-6 gap-4 p-4 bg-gray-50">
      {cards.map((card) => (
        <div
          key={card.image}
          className="flex flex-col items-center border rounded p-2 bg-white shadow hover:shadow-lg transition-shadow cursor-pointer"
        >
          <Image
            src={card.image}
            alt={card.name}
            width={96}
            height={160}
            className="w-24 h-40 object-contain"
            loading="lazy"
          />
          <p className="mt-2 text-sm text-center text-gray-700">{card.name}</p>
        </div>
      ))}
    </div>
  );
}
