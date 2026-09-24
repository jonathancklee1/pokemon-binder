import pokemonCard from "@/assets/pokemon-card.jpg";
import type { CardDataType } from "@/lib/types";

export const POCKET_SIZES = [4, 9, 12] as const;
export const CARD_LIST: CardDataType[] = [
  {
    name: "Charizard ex",
    setName: "151",
    variant: "Holo",
    image: pokemonCard,
  },
  {
    name: "Pikachu",
    setName: "Crown Zenith",
    variant: "Reverse Holo",
    image: pokemonCard,
  },
  {
    name: "Mewtwo-GX",
    setName: "Shining Legends",
    variant: "Holo",
    image: pokemonCard,
  },
  {
    name: "Umbreon VMAX",
    setName: "Evolving Skies",
    variant: "Holo",
    image: pokemonCard,
  },
  {
    name: "Mew ex",
    setName: "151",
    variant: "Holo",
    image: pokemonCard,
  },
  null,
  {
    name: "Charizard-GX",
    setName: "Hidden Fates",
    variant: "Holo",
    image: pokemonCard,
  },
];
