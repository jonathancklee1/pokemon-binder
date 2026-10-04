"use client";
import { HexColorPicker } from "react-colorful";

function ColourPicker({
  currentColour = "#facc15",
  setCurrentColour,
}: {
  currentColour?: string;
  setCurrentColour: (colour: string) => void;
}) {
  return <HexColorPicker color={currentColour} onChange={setCurrentColour} />;
}

export default ColourPicker;
