"use client";
import { GameSeedInput } from "@/components/GameSeedInput";
import { Toaster } from "@/components/ui/sonner";

export default function Home() {
  return (
    <div className="mt-20 flex flex-col items-center">
      <h1 className="my-8 text-2xl">Minesweeper</h1>
      <GameSeedInput />
      <Toaster />
    </div>
  );
}
