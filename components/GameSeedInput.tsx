import React, { ChangeEvent, createContext, useContext, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { parseSeedInput } from "@/lib/utils";
import { Grid } from "./Grid";
import { GameOver } from "./GameOver";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/state/store";
import { setGrid } from "@/state/grid/gridSlice";
import { FaInfoCircle } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const BombClickedContext = createContext<[boolean, boolean, boolean[]]>([
  false,
  false,
  [],
]);

export type Seed = [width: number, height: number, mineLocations: number[]];

export const GameSeedInput = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [input, setInput] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    const parsedSeed = parseSeedInput(input);
    const [width, height, mineLocations] = parsedSeed;

    if (!width || !height) {
      toast("Width and height must be valid positive numbers.");
      return;
    }

    dispatch(
      setGrid({
        width,
        height,
        mineLocations,
        openLocations: [],
        bombClicked: false,
        isFinished: false,
      })
    );

    setInput("");
  };

  return (
    <>
      <div className="flex mx-auto max-w-sm items-center space-x-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <div className="flex mx-auto items-center space-x-2">
                <FaInfoCircle className="w-5 h-5" />
                <Input value={input} onChange={handleChange} />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-center text-xs">
                Width, Height, ...mineLocations
              </p>
              <p className="text-center text-xs">i.e: 3, 3, 0, 4, 7</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <Button type="button" onClick={handleClick}>
          Start Game
        </Button>
      </div>

      <Grid />
      <GameOver />
    </>
  );
};

export const useBombClicked = () => useContext(BombClickedContext);
