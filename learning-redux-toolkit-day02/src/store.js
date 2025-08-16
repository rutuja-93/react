import { configureStore } from "@reduxjs/toolkit";
import counter1Reducer from "./slices/counter1Slice";
import counter2Reducer from "./slices/counter2Slice";

const store = configureStore({
  reducer: {
    counter1SliceReducer: counter1Reducer,
    counter2SliceReducer: counter2Reducer,
  },
});

export default store;
