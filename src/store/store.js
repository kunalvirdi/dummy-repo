import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";
import authSlice from "./authSlice.js";
import actionSlice from "./actionSlice.js";

const store = configureStore({
  reducer: {
    home: homeSlice,
    mode:authSlice.reducer,action:actionSlice.reducer
  },
});

export default store;
