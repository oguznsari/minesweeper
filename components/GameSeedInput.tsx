import React, { ChangeEvent, createContext, useContext, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { GameSeedContext } from "@/lib/context";
import { parseSeedInput } from "@/lib/utils";
import { Grid } from "./Grid";
import { GameOver } from "./GameOver";

export const BombClickedContext = createContext<boolean>(false);

export type Seed = [width: number, height: number, mineLocations: Set<number>];

export const GameSeedInput = () => {
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState<Seed | undefined>(undefined);
  const [isBombClicked, setIsBombClicked] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    const parsedSeed = parseSeedInput(input);
    setSeed(parsedSeed);
  };

  return (
    <GameSeedContext.Provider value={seed}>
      <div className="flex mx-auto max-w-sm items-center space-x-2">
        <Input value={input} onChange={handleChange} />
        <Button type="button" onClick={handleClick}>
          Start Game
        </Button>
      </div>
      <BombClickedContext.Provider value={isBombClicked}>
        <Grid setIsBombClicked={setIsBombClicked} />
        <GameOver />
      </BombClickedContext.Provider>
    </GameSeedContext.Provider>
  );
};

export const useBombClicked = () => useContext(BombClickedContext);
