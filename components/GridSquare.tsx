import React, { useContext, useState } from "react";
import { BombClickedContext, Seed } from "./GameSeedInput";
import { GameSeedContext } from "@/lib/context";

const openSquares = new Set<number>();

export const GridSquare = ({
  id,
  setIsBombClicked,
}: {
  id: number;
  setIsBombClicked: (value: boolean) => void;
}) => {
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
      if (isBomb) {
        setIsBombClicked(true);
      }
    }
  };

  return (
    <>
      <div
        className={`border border-gray-300 w-12 h-12 p-1 flex justify-center items-center ${
          isOpen ? "bg-secondary" : "bg-primary"
        }`}
        onClick={handleClick}
      >
        {isOpen ? (isBomb ? "💣" : "✅") : null}
      </div>
    </>
  );
};
