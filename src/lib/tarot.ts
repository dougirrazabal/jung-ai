import fs from "fs";
import path from "path";
import { Card, Suit, MAJOR_ARCANA_NAMES, SUIT_NAMES, MINOR_RANKS } from "@/types/tarot";

function parseCardFromFilename(file: string): Card {
  const withoutExt = file.replace(/\.(jpg|jpeg|png)$/, "");
  const parts = withoutExt.split("-");

  let id: number;
  let name: string;

  if (!isNaN(parseInt(parts[0], 10))) {
    const majorIndex = parseInt(parts[0], 10);
    id = majorIndex;
    name = MAJOR_ARCANA_NAMES[majorIndex];
  } else {
    const suit = parts[0] as Suit;
    const num = parseInt(parts[1], 10);
    id = 22 + (["wands", "cups", "swords", "pentacles"].indexOf(suit) * 14) + (num - 1);
    name = `${MINOR_RANKS[num]} of ${SUIT_NAMES[suit]}`;
  }

  return {
    id,
    name,
    image: `/cards/${file}`
  };
}

export async function getAllCards(): Promise<Card[]> {
  const cardsDir = path.join(process.cwd(), "public", "cards");
  const files = await fs.promises.readdir(cardsDir);

  const cards = files.map(parseCardFromFilename);
  cards.sort((a, b) => a.id - b.id);

  return cards;
}