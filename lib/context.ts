import { Seed } from "@/components/GameSeedInput";
import { createContext } from "react";

export const GameSeedContext = createContext<Seed | undefined>(undefined);
