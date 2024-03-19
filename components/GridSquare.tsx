import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/state/store";
import { openLocation, finish } from "@/state/grid/gridSlice";

export const GridSquare = ({ id }: { id: number }) => {
  const width: number = useSelector((state: RootState) => state.grid.width);
  const height: number = useSelector((state: RootState) => state.grid.height);
  const mineLocations = useSelector(
    (state: RootState) => state.grid.mineLocations
  );
  const openLocations = useSelector(
    (state: RootState) => state.grid.openLocations
  );

  const dispatch = useDispatch<AppDispatch>();

  const isOpen = openLocations.includes(id);
  const isBomb = mineLocations.includes(id);

  if (!width && !height) {
    return null;
  }

  const handleClick = () => {
    console.log({ isBomb });
    dispatch(
      openLocation({
        index: id,
        isBomb: isBomb,
        isFinished: isBomb ? true : false,
      })
    );

    console.log({
      isBomb,
      op: openLocations.length,
      ml: mineLocations.length,
      width,
      height,
    });
    if (
      !isBomb &&
      openLocations.length + mineLocations.length + 1 === width * height
    ) {
      dispatch(
        finish({
          isFinished: true,
        })
      );
    }
  };

  return (
    <>
      <div
        className={`border border-gray-300 w-12 h-12 p-1 flex justify-center items-center ${
          isOpen ? "bg-secondary" : "bg-primary"
        }`}
        onClick={handleClick}
      >
        {/* Render content only if the square is open */}
        {isOpen && (isBomb ? "💣" : "✅")}
      </div>
    </>
  );
};
