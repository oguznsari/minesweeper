import { Seed } from "@/components/GameSeedInput";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const parseSeedInput = (input: string): Seed => {
  const parts = input.split(",").map((part) => part.trim()); // Split the input string by comma and trim whitespace

  // Destructure parts and convert them to numbers
  const [widthStr, heightStr, ...mineLocationsStr] = parts;
  const width = parseInt(widthStr, 10);
  const height = parseInt(heightStr, 10);

  // Convert mine locations to a Set of numbers
  const mineLocations = new Set(
    mineLocationsStr.map((str) => parseInt(str, 10))
  );

  return [width, height, mineLocations];
};
