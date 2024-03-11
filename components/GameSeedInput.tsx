import React, { ChangeEvent, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export const GameSeedInput = () => {
  const [input, setInput] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    console.log({ input });
  };

  return (
    <div className="flex mx-auto max-w-sm items-center space-x-2">
      <Input value={input} onChange={handleChange} />
      <Button type="button" onClick={handleClick}>
        Start Game
      </Button>
    </div>
  );
};
