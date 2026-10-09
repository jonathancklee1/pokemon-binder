import pokemonCard from "@/assets/pokemon-card.jpg";
import type { CardDataType } from "@/lib/types";
import type { BinderType } from "./BindersStore";

/** Builds a card from a real set, using the placeholder image. */
const card = (
  name: string,
  setName: string,
  variant: string,
): CardDataType => ({
  name,
  setName,
  variant,
  image: pokemonCard,
});

const SET_151: CardDataType[] = [
  card("Bulbasaur", "151", "Illustration Rare"),
  card("Venusaur ex", "151", "Double Rare"),
  card("Charmander", "151", "Illustration Rare"),
  card("Charizard ex", "151", "Special Illustration Rare"),
  card("Squirtle", "151", "Illustration Rare"),
  card("Blastoise ex", "151", "Double Rare"),
  card("Pikachu", "151", "Illustration Rare"),
  null,
  card("Alakazam ex", "151", "Ultra Rare"),
  card("Zapdos ex", "151", "Double Rare"),
  card("Mew ex", "151", "Ultra Rare"),
];

const SHINING_LEGENDS: CardDataType[] = [
  card("Shining Genesect", "Shining Legends", "Rare Shining"),
  card("Entei-GX", "Shining Legends", "Rare Holo GX"),
  card("Shining Volcanion", "Shining Legends", "Rare Shining"),
  card("Raichu-GX", "Shining Legends", "Rare Holo GX"),
  card("Mewtwo-GX", "Shining Legends", "Rare Holo GX"),
  card("Shining Mew", "Shining Legends", "Rare Shining"),
  card("Shining Jirachi", "Shining Legends", "Rare Shining"),
  card("Zoroark-GX", "Shining Legends", "Rare Holo GX"),
  card("Shining Rayquaza", "Shining Legends", "Rare Shining"),
  card("Shining Arceus", "Shining Legends", "Rare Shining"),
  card("Mewtwo-GX", "Shining Legends", "Rare Secret"),
];

const HIDDEN_FATES: CardDataType[] = [
  card("Pinsir-GX", "Hidden Fates", "Rare Holo GX"),
  card("Charizard-GX", "Hidden Fates", "Rare Holo GX"),
  card("Starmie-GX", "Hidden Fates", "Rare Holo GX"),
  card("Gyarados-GX", "Hidden Fates", "Rare Holo GX"),
  card("Raichu-GX", "Hidden Fates", "Rare Holo GX"),
  card("Mewtwo-GX", "Hidden Fates", "Rare Holo GX"),
  card("Onix-GX", "Hidden Fates", "Rare Holo GX"),
  card("Wigglytuff-GX", "Hidden Fates", "Rare Holo GX"),
  card("Moltres & Zapdos & Articuno-GX", "Hidden Fates", "Rare Holo GX"),
];

export const DEFAULT_BINDERS: BinderType[] = [
  {
    id: "binder-1",
    name: "151",
    cardList: SET_151,
    pocketSize: 4,
    currentPage: 0,
  },
  {
    id: "binder-2",
    name: "Shining Legends",
    cardList: SHINING_LEGENDS,
    pocketSize: 9,
    currentPage: 0,
  },
  {
    id: "binder-3",
    name: "Hidden Fates",
    cardList: HIDDEN_FATES,
    pocketSize: 12,
    currentPage: 0,
  },
];
