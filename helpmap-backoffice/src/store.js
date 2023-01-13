import { configureStore } from "@reduxjs/toolkit";
import { mainSlice } from "./containers/slice";
export const store = configureStore({
  reducer: mainSlice.reducer,
});
