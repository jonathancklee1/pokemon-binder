import { createContext } from "react";
import type { CardBriefType } from "@/lib/types";

/** Opens the card modal for a card, or the delete confirmation for a slot. */
const CardModalContext = createContext<{
  openCardModal: (card: CardBriefType) => void;
  openDeleteModal: (slot: number) => void;
}>({
  openCardModal: () => {},
  openDeleteModal: () => {},
});

export default CardModalContext;
