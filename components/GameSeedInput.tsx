import React, { ChangeEvent, createContext, useContext, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { GameSeedContext } from "@/lib/context";
import { parseSeedInput } from "@/lib/utils";
import { Grid } from "./Grid";
import { GameOver } from "./GameOver";
import { toast } from "sonner";

export const BombClickedContext = createContext<[boolean, boolean, boolean[]]>([
  false,
  false,
  [],
]);

export type Seed = [width: number, height: number, mineLocations: Set<number>];

export const GameSeedInput = () => {
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState<Seed | undefined>(undefined);
  const [isBombClicked, setIsBombClicked] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    const parsedSeed = parseSeedInput(input);
    setSeed(parsedSeed);
    const [width, height] = parsedSeed;

    if (!width || !height) {
      toast("Width and height must be valid positive numbers.");
      return;
    }
    const isOpenArray = new Array(width * height).fill(false);

    setIsOpen(isOpenArray);
  };

  return (
    <GameSeedContext.Provider value={seed}>
      <div className="flex mx-auto max-w-sm items-center space-x-2">
        <Input value={input} onChange={handleChange} />
        <Button type="button" onClick={handleClick}>
          Start Game
        </Button>
      </div>
      <BombClickedContext.Provider value={[isBombClicked, isFinished, isOpen]}>
        <Grid
          setIsBombClicked={setIsBombClicked}
          setIsFinished={setIsFinished}
          setIsOpen={setIsOpen}
        />
        <GameOver
          setIsBombClicked={setIsBombClicked}
          setIsFinished={setIsFinished}
          setSeed={setSeed}
        />
      </BombClickedContext.Provider>
    </GameSeedContext.Provider>
  );
};

export const useBombClicked = () => useContext(BombClickedContext);
