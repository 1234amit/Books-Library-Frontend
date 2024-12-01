import { configureStore } from "@reduxjs/toolkit";
import authenticationReucer from "./slices/AuthenticationSlices";

export const store = configureStore({
  reducer: {
    authentication: authenticationReucer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
