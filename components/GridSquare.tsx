import React, { useContext, useState } from "react";
import { Seed } from "./GameSeedInput";
import { GameSeedContext } from "@/lib/context";

const openSquares = new Set<number>();

export const GridSquare = ({ id }: { id: number }) => {
  const seed: Seed | undefined = useContext(GameSeedContext);

  const [, , mineLocations] = seed || [];
  const isBomb = mineLocations?.has(id) || false;
  console.log({ isBomb, mineLocations, id });
  const [isOpen, setIsOpen] = useState(openSquares.has(id));

  if (!seed) {
    return null;
  }

  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      openSquares.add(id);
    }
  };

  return (
    <div className="border border-gray-300 w-12 h-12 p-1" onClick={handleClick}>
      {isOpen ? (isBomb ? "💣" : "✅") : null}
    </div>
  );
};
