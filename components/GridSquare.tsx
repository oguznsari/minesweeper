import React, { useContext, useState } from "react";
import { BombClickedContext, Seed, useBombClicked } from "./GameSeedInput";
import { GameSeedContext } from "@/lib/context";

export const GridSquare = ({
  id,
  setIsBombClicked,
  setIsFinished,
  setIsOpen,
}: {
  id: number;
  setIsBombClicked: (value: boolean) => void;
  setIsFinished: (value: boolean) => void;
  setIsOpen: (value: any) => void;
}) => {
  const seed: Seed | undefined = useContext(GameSeedContext);
  const [isBombClicked, isFinished, isOpen] = useBombClicked();

  const [width, height, mineLocations] = seed || [];
  const isBomb = mineLocations?.has(id) || false;
  console.log({ isBomb, mineLocations, id });
  const [completed, setCompleted] = useState(false);

  if (!seed) {
    return null;
  }

  const handleClick = () => {
    if (!isOpen[id]) {
      setIsOpen((isOpen: any) => {
        // Create a new array by spreading the previous state
        console.log({ isOpen });
        const updatedOpen = [...isOpen];
        // Set the value at the specified index to true
        updatedOpen[id] = true;
        // Return the updated array
        return updatedOpen;
      });

      const openCount = isOpen.reduce(
        (count, isOpenValue) => (isOpenValue ? count + 1 : count),
        0
      );

      if (width && height && mineLocations && !completed) {
        if (isBomb && openCount < width * height - mineLocations?.size) {
          setIsBombClicked(true);
          setCompleted(true);
          setTimeout(() => {
            setIsOpen(new Array(width * height).fill(false));
          }, 1500); // 3000 milliseconds = 3 seconds
        }
        if (openCount === width * height - mineLocations?.size) {
          setIsFinished(true);
          setCompleted(true);
          setTimeout(() => {
            setIsOpen(new Array(width * height).fill(false));
          }, 1500); // 3000 milliseconds = 3 seconds
        }
      }
    }
  };

  return (
    <>
      <div
        className={`border border-gray-300 w-12 h-12 p-1 flex justify-center items-center ${
          isOpen[id] ? "bg-secondary" : "bg-primary"
        }`}
        onClick={handleClick}
      >
        {isOpen[id] ? (isBomb ? "💣" : "✅") : null}
      </div>
    </>
  );
};
