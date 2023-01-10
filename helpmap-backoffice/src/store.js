import { configureStore } from "@reduxjs/toolkit";
import { mainSlice } from "./containers/Main/slice";
export const store = configureStore({
  reducer: { mainSlice: mainSlice.reducer },
});
