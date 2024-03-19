import React, { useState } from "react";
import { GridSquare } from "./GridSquare";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";

export const Grid = () => {
  const width: number = useSelector((state: RootState) => state.grid.width);
  const height: number = useSelector((state: RootState) => state.grid.height);
  const isFinished: boolean = useSelector(
    (state: RootState) => state.grid.isFinished
  );

  const [toastShown, setToastShown] = useState(false);

  if ((!width || !height) && !toastShown) {
    toast("Please provide width and height properly.");
    setToastShown(true);
    return null;
  }

  const renderGrid = () => {
    const rows = [];
    for (let i = 0; i < height; i++) {
      const cols = [];
      for (let j = 0; j < width; j++) {
        cols.push(<GridSquare key={i * width + j} id={i * width + j} />);
      }
      rows.push(
        <div key={i} className="flex">
          {cols}
        </div>
      );
    }

    return rows;
  };

  return isFinished ? null : (
    <div className="grid grid-cols-1 gap-0 mt-10">{renderGrid()}</div>
  );
};
