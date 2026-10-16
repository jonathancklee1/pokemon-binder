import { createContext } from "react";
import type { CardBriefType } from "@/lib/types";

/** Opens the card modal for a card, or the delete confirmation for a slot. */
const CardModalContext = createContext({
  openCardModal: (card: CardBriefType) => {},
  openDeleteModal: (slot: number) => {},
});

export default CardModalContext;
