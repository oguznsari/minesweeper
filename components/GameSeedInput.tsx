import React, { ChangeEvent, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { GameSeedContext } from "@/lib/context";
import { parseSeedInput } from "@/lib/utils";
import { Grid } from "./Grid";

export type Seed = [width: number, height: number, mineLocations: Set<number>];

export const GameSeedInput = () => {
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState<Seed | undefined>(undefined);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    console.log({ input });
    const parsedSeed = parseSeedInput(input);
    setSeed(parsedSeed);
    console.log({ parsedSeed });
  };

  return (
    <GameSeedContext.Provider value={seed}>
      <div className="flex mx-auto max-w-sm items-center space-x-2">
        <Input value={input} onChange={handleChange} />
        <Button type="button" onClick={handleClick}>
          Start Game
        </Button>
      </div>
      <Grid />
    </GameSeedContext.Provider>
  );
};
