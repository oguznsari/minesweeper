import React, { useContext } from "react";
import { Seed } from "./GameSeedInput";
import { GameSeedContext } from "@/lib/context";
import { GridSquare } from "./GridSquare";
import { toast } from "sonner";

interface GridProps {
  setIsBombClicked: (value: boolean) => void;
}

export const Grid: React.FC<GridProps> = ({ setIsBombClicked }) => {
  const seed: Seed | undefined = useContext(GameSeedContext);

  const renderGrid = () => {
    if (!seed) return null;

    const [width, height] = seed;
    if (!width || !height) {
      toast("Please provide width, height properly.");
    }

    const rows = [];
    for (let i = 0; i < height; i++) {
      const cols = [];
      for (let j = 0; j < width; j++) {
        cols.push(
          <GridSquare id={i * width + j} setIsBombClicked={setIsBombClicked} />
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
