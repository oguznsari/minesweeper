"use client";
import { GameSeedInput } from "@/components/GameSeedInput";
import { ModeToggle } from "@/components/dark-mode";
import { Toaster } from "@/components/ui/sonner";
import { store } from "@/state/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <div className="mt-10 relative">
        <div className="flex flex-col items-center">
          <h1 className="my-8 mb-20 text-5xl">Minesweeper</h1>
          <GameSeedInput />
          <Toaster />
        </div>
        <div className="absolute top-10 right-10">
          <ModeToggle />
        </div>
      </div>
    </Provider>
  );
}
