import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type GridState = {
  width: number;
  height: number;
  mineLocations: number[];
  openLocations: number[];
  bombClicked: boolean;
  isFinished: boolean;
};

export type SquareState = {
  index: number;
  isBomb: boolean;
  isFinished: boolean;
};

export type FinishState = {
  isFinished: boolean;
};

export const initialState: GridState = {
  width: 3,
  height: 3,
  mineLocations: [0, 4, 7],
  openLocations: [],
  bombClicked: false,
  isFinished: false,
};

const gridSlice = createSlice({
  name: "grid",
  initialState,
  reducers: {
    setGrid: (state, action: PayloadAction<GridState>) => {
      state.width = action.payload.width;
      state.height = action.payload.height;
      state.mineLocations = action.payload.mineLocations;
      state.openLocations = action.payload.openLocations ?? [];
      state.bombClicked = action.payload.bombClicked ?? false;
      state.isFinished = action.payload.isFinished ?? false;
    },
    openLocation: (state, action: PayloadAction<SquareState>) => {
      state.openLocations.push(action.payload.index);
      state.bombClicked = state.bombClicked || action.payload.isBomb;
      state.isFinished = state.isFinished || action.payload.isFinished;
    },
    finish: (state, action: PayloadAction<FinishState>) => {
      state.isFinished = action.payload.isFinished;
    },
  },
});

export const { setGrid, openLocation, finish } = gridSlice.actions;

export default gridSlice.reducer;
