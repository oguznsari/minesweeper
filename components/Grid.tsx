import React, { useContext, useState } from "react";
import { Seed } from "./GameSeedInput";
import { GameSeedContext } from "@/lib/context";
import { GridSquare } from "./GridSquare";
import { toast } from "sonner";

interface GridProps {
  setIsBombClicked: (value: boolean) => void;
  setIsFinished: (value: boolean) => void;
  setIsOpen: (value: boolean[]) => void;
}

export const Grid: React.FC<GridProps> = ({
  setIsBombClicked,
  setIsFinished,
  setIsOpen,
}) => {
  const seed: Seed | undefined = useContext(GameSeedContext);
  const [toastShown, setToastShown] = useState(false);

  if (!seed && !toastShown) {
    toast("Please provide width and height properly.");
    setToastShown(true);
    return null;
  }

  if (seed) {
    const [width, height] = seed;
    if (!width || !height) {
      if (!toastShown) {
        toast("Please provide width and height properly.");
        setToastShown(true);
      }
      return null;
    }
  }

  const renderGrid = () => {
    if (!seed) return null;

    const [width, height] = seed;
    const rows = [];
    for (let i = 0; i < height; i++) {
      const cols = [];
      for (let j = 0; j < width; j++) {
        cols.push(
          <GridSquare
            key={i * width + j}
            id={i * width + j}
            setIsBombClicked={setIsBombClicked}
            setIsFinished={setIsFinished}
            setIsOpen={setIsOpen}
          />
        );
      }
      rows.push(
        <div key={i} className="flex">
          {cols}
        </div>
      );
    }

    return rows;
  };

  return <div className="grid grid-cols-1 gap-0 mt-10">{renderGrid()}</div>;
};
