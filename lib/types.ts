import type { StaticImageData } from "next/image";

export type CardDataType = {
  name: string;
  image: StaticImageData | string;
  setName: string;
  variant?: string;
} | null;
