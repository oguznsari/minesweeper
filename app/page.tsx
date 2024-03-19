"use client";
import { GameSeedInput } from "@/components/GameSeedInput";
import { Toaster } from "@/components/ui/sonner";
import { store } from "@/state/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <div className="mt-20 flex flex-col items-center">
        <h1 className="my-8 mb-20 text-2xl">Minesweeper</h1>
        <GameSeedInput />
        <Toaster />
      </div>
    </Provider>
  );
}
