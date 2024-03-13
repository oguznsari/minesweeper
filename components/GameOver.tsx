import React from "react";
import { Button } from "./ui/button";
import { useBombClicked } from "./GameSeedInput";

export const GameOver = () => {
  const isBombClicked = useBombClicked();

  console.log({ GameOver: isBombClicked });
  return (
    <div>
      {isBombClicked && <Button variant="destructive">Game Over</Button>}
    </div>
  );
};
