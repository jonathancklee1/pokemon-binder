export interface CardBriefType {
  id: string;
  image: string;
  localId: string;
  name: string;
}

export interface SetDetailType extends SetType {
  cardCount: {
    total: number;
    official: number;
    normal: number;
    holo: number;
    reverse: number;
    firstEd: number;
  };
  cards: CardBriefType[];
  releaseDate: string;
  serie: { id: string; name: string };
  legal: { standard: boolean; expanded: boolean };
  abbreviation?: { official?: string };
}

export interface SetType {
  id: string;
  name: string;
  logo?: string;
  symbol?: string;
  cardCount: {
    total: number;
    official: number;
  };
}

export interface SerieType {
  id: string;
  name: string;
  logo?: string;
  releaseDate: string;
  sets: SetType[];
}
