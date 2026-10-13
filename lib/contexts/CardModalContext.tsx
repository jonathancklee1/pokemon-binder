import { createContext } from "react";
import type { CardBriefType } from "@/lib/types";

/** Opens the card modal for the given card. */
const CardModalContext = createContext({
  openCardModal: (card: CardBriefType) => {},
});

export default CardModalContext;
