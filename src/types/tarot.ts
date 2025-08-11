export type Suit = "wands" | "cups" | "swords" | "pentacles";

export interface Card {
  id: number;
  name: string;
  image: string;
}

export const MAJOR_ARCANA_NAMES: string[] = [
  "The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor",
  "The Hierophant", "The Lovers", "The Chariot", "Strength", "The Hermit",
  "Wheel of Fortune", "Justice", "The Hanged Man", "Death", "Temperance",
  "The Devil", "The Tower", "The Star", "The Moon", "The Sun", "Judgement", "The World"
];

export const SUIT_NAMES = {
  wands: "Wands",
  cups: "Cups",
  swords: "Swords",
  pentacles: "Pentacles"
} as const;

export const MINOR_RANKS: Record<number, string> = {
  1: "Ace",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
  10: "Ten",
  11: "Page",
  12: "Knight",
  13: "Queen",
  14: "King"
};