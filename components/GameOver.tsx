import React, { useContext } from "react";
import { Button } from "./ui/button";
import { Seed, useBombClicked } from "./GameSeedInput";
import { parseSeedInput } from "@/lib/utils";
import { GameSeedContext } from "@/lib/context";

interface GameOverProps {
  setIsBombClicked: (value: boolean) => void;
  setIsFinished: (value: boolean) => void;
  setSeed: (value: Seed | undefined) => void;
}

export const GameOver = ({
  setIsBombClicked,
  setIsFinished,
  setSeed,
}: GameOverProps) => {
  const [isBombClicked, isFinished] = useBombClicked();

  const seed: Seed | undefined = useContext(GameSeedContext);

  // Check if seed exists before deconstructing
  if (!seed) {
    // Handle case when seed is undefined
    return null; // or return a loading indicator, show an error message, etc.
  }

  const [width, height, mineLocations] = seed;
  const mineLocationsArray = Array.from(mineLocations);
  const seedString = [width, height, ...mineLocationsArray].join(",");

  const handleClick = () => {
    const parsedSeed = parseSeedInput(seedString);
    setSeed(parsedSeed);
    setIsBombClicked(false);
    setIsFinished(false);
  };

  return (
    <div className="text-2xl my-10">
      {isBombClicked && !isFinished && (
        <Button variant="destructive" onClick={handleClick}>
          Game Over
        </Button>
      )}
      {isFinished && !isBombClicked && (
        <Button variant="secondary" onClick={handleClick}>
          Congratulation
        </Button>
      )}
    </div>
  );
};
