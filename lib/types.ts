import type { StaticImageData } from "next/image";

export type CardDataType = {
  name: string;
  image: StaticImageData | string;
  setName: string;
  variant?: string;
} | null;

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
