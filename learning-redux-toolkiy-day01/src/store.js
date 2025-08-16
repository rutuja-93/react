import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice"; // 👈 default import

const store = configureStore({
  reducer: {
    counter: counterReducer, // 👈 "counter" key ka naam hi useSelector me milega
  },
});

export default store;
