import React from "react";
import { Button } from "./ui/button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/state/store";
import { initialState, setGrid } from "@/state/grid/gridSlice";

export const GameOver = () => {
  const isBombClicked = useSelector(
    (state: RootState) => state.grid.bombClicked
  );
  const isFinished: boolean = useSelector(
    (state: RootState) => state.grid.isFinished
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = () => {
    dispatch(setGrid(initialState));
  };

  return isFinished ? (
    <Button
      className="mt-24"
      variant={isBombClicked ? "destructive" : "secondary"}
      onClick={handleClick}
    >
      {isBombClicked
        ? "Game Over: You Lost. Click to Restart"
        : "Congratulations! You Won. Click to Restart"}
    </Button>
  ) : null;
};
