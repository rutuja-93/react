import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    reset: () => 0,
    increaseByValue: (state, action) => state + action.payload,
  },
});

// ✅ default export reducer
export default counterSlice.reducer;

// ✅ export actions
export const { increment, decrement, reset, increaseByValue } =
  counterSlice.actions;
