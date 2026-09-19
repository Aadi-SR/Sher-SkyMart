import { configureStore } from "@reduxjs/toolkit";
import user from "../features/UserSlice";

export const store = configureStore({
  reducer: {
    user: user,
  },
});