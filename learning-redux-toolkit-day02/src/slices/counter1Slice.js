import { createSlice } from "@reduxjs/toolkit";

const counter1Slice = createSlice({
  name: "counter1",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
  },
});

export const { increment, decrement } = counter1Slice.actions;
export default counter1Slice.reducer;
