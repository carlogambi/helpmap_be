import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  positions: [],
  currentPage: "",
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    updatePositonList: (state, action) => {
      state.positions = action.payload;
    },
    changePage: (state, action) => {
      state.currentPage = action.payload;
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  updatePositonList,
  changePage,
} = mainSlice.actions;
